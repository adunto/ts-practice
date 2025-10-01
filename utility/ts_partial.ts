interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial<User>는 User의 모든 속성을 선택적으로 바꿉니다.
function updateUser(id: number, updates: Partial<User>) {
  // DB 에서 유저를 찾고 업데이트하는 로직
  console.log(`Updating User ${id} with:`, updates);

  // VVV 실제 수정 요청 코드는 여기에 VVV
}

// id가 1인 유저 정보에서 name과 age만 업데이트하고 싶을 때
updateUser(1, { name: "Alice Smith", age: 31 });

// email만 업데이트
updateUser(1, { email: "a@a.com" });
