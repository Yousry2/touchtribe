export type UserSignupDTO = {
     firstName: string;
     lastName: string;
     email: string;
};

export type UserDTO = UserSignupDTO & {
     id: string;
};
