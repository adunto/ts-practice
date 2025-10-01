interface ApiResponse<T> {
    status: 'success' | 'error';
    data: T;
}

type UserData = ApiResponse<string[]>