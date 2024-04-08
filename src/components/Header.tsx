import Image from 'next/image';
import classes from './Header.module.css';
import logo from '../assets/svgs/linkbrary.svg';
import instance from '@/lib/instance';
import Link from 'next/link';
import { SampleUser } from '@/type/Sample';

const Header = async () => {
  const { data } = await instance.get('/sample/user');
  const { profileImageSource, email }: SampleUser = data;

  return (
    <header className={`${classes.header} inner`}>
      <Link href='/' className={classes.logo}>
        <Image src={logo} alt='logo' />
      </Link>
      <div className={classes.profile}>
        <div className={classes.profileImage}>
          <Image src={profileImageSource} alt='프로필 이미지' fill />
        </div>
        <p>{email}</p>
      </div>
    </header>
  );
};
export default Header;
