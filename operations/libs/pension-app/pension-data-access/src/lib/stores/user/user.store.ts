import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/component-store';
import { LocalStorageService } from '@operations/util-common';
import { debounceTime, pipe, switchMap, tap } from 'rxjs';
import { PensionAuthApiService } from '../../api';
import { UserDTO, UserSignupDTO } from '../../models';

export type UserStateInterface = {
     user: UserDTO | null;
     isLoading: boolean;
};

const initialState: UserStateInterface = {
     isLoading: false,
     user: null,
};

export const UserStore = signalStore(
     { providedIn: 'root' },
     withState<UserStateInterface>(initialState),
     withComputed((store) => ({
          userInfo: computed(() => store.user()),
     })),
     withMethods(
          (
               store,
               localStorageService = inject(LocalStorageService),
               pensionAuthApiService = inject(PensionAuthApiService),
          ) => {
               function checkUserInfo() {
                    const userInfo = localStorageService.getItem('UserInfo');
                    if (userInfo) patchState(store, { user: userInfo ? JSON.parse(userInfo) : userInfo });
               }

               function signout() {
                    localStorageService.removeItem('UserInfo');
                    patchState(store, { user: null });
               }

               function saveUser(user: UserDTO) {
                    patchState(store, {
                         user: user,
                    });
                    localStorageService.setItem('UserInfo', JSON.stringify(user));
               }

               const signup = rxMethod<UserSignupDTO>(
                    pipe(
                         debounceTime(300),
                         tap(() => patchState(store, { isLoading: true })),
                         switchMap((userSignupDTO: UserSignupDTO) =>
                              pensionAuthApiService.signup(userSignupDTO).pipe(
                                   tapResponse({
                                        next: (userId: string) => {
                                             saveUser({
                                                  id: userId,
                                                  firstName: userSignupDTO.firstName,
                                                  lastName: userSignupDTO.lastName,
                                                  email: userSignupDTO.email,
                                             });
                                        },
                                        error: () => console.error,
                                        finalize: () => patchState(store, { isLoading: false }),
                                   }),
                              ),
                         ),
                    ),
               );

               return { signup, signout, checkUserInfo };
          },
     ),
     withHooks({
          onInit({ checkUserInfo }) {
               checkUserInfo();
          },
     }),
);
