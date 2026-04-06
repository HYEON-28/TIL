# useReducer

## useReducer를 사용하는 이유
1. 상태 로직을 중앙집중화

useState는 단순하지만 상태가 많아질수록 로직이 흩어진다.

// useState가 많아질수록 관리 어려움
const [name, setName] = useState('');
const [age, setAge] = useState(0);
const [isLoading, setIsLoading] = useState(false);

→ 상태 변경 조건이 복잡해지면 가독성이 급격히 떨어진다.


## useReducer 기본 구조
1. 문법
const [state, dispatch] = useReducer(reducer, initialState);

| 요소           | 설명       |
| ------------ | -------- |
| reducer      | 상태 변경 함수 |
| initialState | 초기 상태    |
| state        | 현재 상태    |
| dispatch     | 액션 실행 함수 |

## useState vs useReducer 비교
| 구분          | useState | useReducer |
| ----------- | -------- | ---------- |
| 단순 상태       | ✅ 적합     | ❌ 과함       |
| 복잡한 상태 로직   | ❌ 비효율    | ✅ 적합       |
| 상태가 여러 개    | ❌ 흩어짐    | ✅ 통합 관리    |
| 디버깅         | 보통       | 명확         |
| Redux 유사 패턴 | ❌        | ✅          |
