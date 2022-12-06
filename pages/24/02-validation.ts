import * as yup from "yup";

export const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요.").max(5, "작성자는 5글자 이내 문자열입니다"),
  password: yup.string().required("비밀번호를 입력해주세요").matches(/^(?=.*[a-zA-Z])(?=.*[!@#$%^&*=_])(?=.*[0-9]).{8,25}$/, "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열입니다."),
  title: yup.string().required("제목을 입력해주세요.").max(100, "제목은 100자 이내 문자열 입니다."),
  contents: yup.string().required("내용을 입력해주세요.").max(1000, "내용은 1000자 이내 문자열입니다."),
});
