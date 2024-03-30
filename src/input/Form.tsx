import styles from "./Form.module.scss";
import classNames from "classnames/bind";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";

const cx = classNames.bind(styles);

interface FormData {
  email: string;
  password: string;
  passwordCheck: string;
}

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    let userInfo = data;
    localStorage.setItem(data.email, JSON.stringify(userInfo));
  };

  // console.log("이건 에러임", errors);

  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch("password");

  return (
    <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="이메일을 입력해주세요."
        {...register("email", {
          required: { value: true, message: "이메일을 확인해 주세요!" },
        })}
        aria-invalid={
          isSubmitted ? (errors.email ? "true" : "false") : undefined
        }
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="password"
        placeholder="비밀번호를 입력해주세요."
        {...register("password", {
          required: { value: true, message: "비번을 입력해 주세요!" },
          minLength: { value: 8, message: "비번을 8자 이상으로 해 주세요!" },
          // pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/,
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input
        type="password"
        placeholder="비번 확인"
        {...register("passwordCheck", {
          required: { value: true, message: "비밀번호를 확인해 주세요!" },
          validate: (value) =>
            value === passwordRef.current || "비밀번호가 틀려요",
          // pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/,
        })}
      />
      {errors.passwordCheck && <p>{errors.passwordCheck.message}</p>}

      <button type="submit">제출하기</button>
    </form>
  );
}

export default Form;

// Form.tsx

// import styles from "./Form.module.scss";
// import classNames from "classnames/bind";
// import React, { useRef, PropsWithChildren } from "react";
// import { useForm } from "react-hook-form";

// const cx = classNames.bind(styles);

// export interface FormData {
//   email: string;
//   password: string;
//   passwordCheck: string;
// }

// function Form({ children }: PropsWithChildren) {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<FormData>();

//   const onSubmit = (data: FormData) => {
//     let userInfo = data;
//     localStorage.setItem(data.email, JSON.stringify(userInfo));
//   };

//   const passwordRef = useRef<string | null>(null);
//   passwordRef.current = watch("password");

//   return (
//     <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
//       {children}
//     </form>
//   );
// }

// export default Form;
