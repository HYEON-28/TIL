# useStats란?

 const [formData, setFormData] = useState({                                                                           
      email: '',                                                                                              
      name: '',
      phoneNumber: '',
      password: ''
  });

  useState(초기값)은 두 가지를 반환해요.

  ┌─────────────┬───────────────────────────────┐
  │   반환값    │             역할              │
  ├─────────────┼───────────────────────────────┤
  │ formData    │ 현재 상태값 (읽기용)          │
  ├─────────────┼───────────────────────────────┤
  │ setFormData │ 상태를 변경하는 함수 (쓰기용) │
  └─────────────┴───────────────────────────────┘

  ---
  이 파일에서 실제로 어떻게 동작하는가

  1. 처음 렌더링 시 — 모든 입력 필드가 빈 문자열로 시작

  formData = { email: '', name: '', phoneNumber: '', password: '' }

  2. 사용자가 입력할 때 — handleChange가 호출됨 (onChange={handleChange})

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });  // 상태 업데이트
  }

  예를 들어 이메일 칸에 "test@test.com" 을 입력하면:
  // name = "email", value = "test@test.com"
  setFormData({ ...formData, email: "test@test.com" })
  // → { email: 'test@test.com', name: '', phoneNumber: '', password: '' }

  3. 상태가 바뀌면 — React가 자동으로 화면을 다시 그림 (리렌더링)

  <input value={formData.email} ... />  // 화면에 입력값이 반영됨

  4. 폼 제출 시 — formData 전체를 그대로 API에 전달

  const response = await ApiService.registerUser(formData);

  ---
  핵심 요약

  "값이 바뀌면 화면도 자동으로 업데이트되어야 하는 데이터"를 저장하는 곳

  일반 변수(let email = '')로 저장하면 값이 바뀌어도 화면이 다시 그려지지 않아요. useState로 선언해야 값 변경 → 화면
  자동 업데이트가 됩니다.

