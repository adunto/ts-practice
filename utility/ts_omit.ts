interface UserWithPrivateKey {
    id: number;
    name: string;
    email: string;
    privateKey: string;
}

type SafeUser = Omit<UserWithPrivateKey, "privateKey">;

function getUserForClient(user: UserWithPrivateKey): SafeUser {
    const { privateKey, ...safeUserData } = user;

    return safeUserData;
}