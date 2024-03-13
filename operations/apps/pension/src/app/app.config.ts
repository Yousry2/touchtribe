import { ApplicationConfig } from '@angular/core';
import {
     provideRouter,
     withComponentInputBinding,
     withEnabledBlockingInitialNavigation,
     withViewTransitions,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
     providers: [
          provideRouter(
               appRoutes,
               withComponentInputBinding(),
               withEnabledBlockingInitialNavigation(),
               withViewTransitions(),
          ),
          provideAnimationsAsync(),
          provideHttpClient(),
     ],
};
