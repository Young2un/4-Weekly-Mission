import Image from 'next/image';
import logo from '@/assets/svgs/linkbrary.svg';
import classes from './FormHeader.module.css';
import Link from 'next/link';

interface FormHeaderProps {
  isMember?: boolean;
}

const FormHeader = ({ isMember = false }: FormHeaderProps) => {
  return (
    <div className={classes.layout}>
      <Link href='/'>
        <Image src={logo} alt='logo' width={210} height={38} />
      </Link>
      {isMember ? (
        <p className={classes.subtitle}>
          회원이신가요?<Link href='/singin'>로그인 하기</Link>
        </p>
      ) : (
        <p className={classes.subtitle}>
          회원이 아니신가요?<Link href='/singup'>회원 가입하기</Link>
        </p>
      )}
    </div>
  );
};
export default FormHeader;
