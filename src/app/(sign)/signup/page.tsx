'use client';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import CommonInput from '@/components/form/CommonInput';
import classes from './page.module.css';
import Link from 'next/link';
import Logo from '@/assets/svgs/linkbrary.svg';

interface FormData {
  email: string;
  password: string;
  passwordCheck: string;
}

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    watch,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    localStorage.setItem(data.email, JSON.stringify(data));
  };

  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch('password');

  return (
    <>
      <header className={classes.layout}>
        <Link href='/'>
          <Logo width={210} height={38} />
        </Link>
        <p className={classes.subtitle}>
          회원이신가요?<Link href='/signin'>로그인 하기</Link>
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
        <CommonInput
          type='password'
          placeholder='비밀번호를 다시 입력해주세요.'
          register={register('passwordCheck', {
            required: {
              value: true,
              message: '비밀번호를 다시 입력해 주세요!',
            },
            validate: (value) =>
              value === passwordRef.current || '비밀번호가 틀려요',
          })}
          isSubmitted={isSubmitted}
          errors={errors.passwordCheck}
        />
        <button type='submit'>회원가입</button>
      </form>
    </>
  );
};

export default SignUpPage;
