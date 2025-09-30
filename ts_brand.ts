import { Brand } from "./lib/general";

// string 타입에 'UserId' 브랜드를 붙인 타입
type UserId = Brand<string, 'UserId'>;

// string 타입에 'PostId' 브랜드를 붙인 타입
type PostId = Brand<string, 'PostId'>;

function getUserById(id: UserId) {
    console.log(`Feching user with ID: ${id}`);
}

function getPostById(id: PostId) {
    console.log(`Feching user with ID: ${id}`);
}

const myUserId: UserId = 'user-abc-123' as UserId;
const myPostId: PostId = 'post-xyz-456' as PostId;

// ✅ 정상 작동
getUserById(myUserId);
getPostById(myPostId);

// ❌ 컴파일 오류 발생!
getUserById(myPostId);