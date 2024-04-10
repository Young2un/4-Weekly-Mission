'use client';
import { useForm } from 'react-hook-form';
import classes from './page.module.css';
import Logo from '@/assets/svgs/linkbrary.svg';
import Link from 'next/link';
import CommonInput from '@/components/form/CommonInput';

interface FormData {
  email: string;
  password: string;
  passwordCheck: string;
}

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    localStorage.setItem(data.email, JSON.stringify(data));
  };

  return (
    <>
      <header className={classes.layout}>
        <Link href='/'>
          <Logo width={210} height={38} />
        </Link>
        <p className={classes.subtitle}>
          회원이 아니신가요?<Link href='/signup'>회원 가입하기</Link>
        </p>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CommonInput
          type='text'
          placeholder='이메일을 입력해주세요.'
          register={register('email', {
            required: { value: true, message: '이메일을 확인해 주세요!' },
            pattern: {
              value: /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/i,
              message: '옳바른 이메일 주소를 입력해 주세요.',
            },
          })}
          isSubmitted={isSubmitted}
          errors={errors.email}
        />
        <CommonInput
          type='password'
          placeholder='비밀번호를 입력해주세요.'
          register={register('password', {
            required: { value: true, message: '비밀번호를 입력해 주세요!' },
            minLength: { value: 8, message: '비번을 8자 이상으로 해 주세요!' },
          })}
          isSubmitted={isSubmitted}
          errors={errors.password}
        />
        <button type='submit'>로그인</button>
      </form>
    </>
  );
};

export default SignInPage;
