import instance from '@/lib/instance';
import classes from './FolderInfo.module.css';
import { SampleFolder } from '@/type/Sample';
import Image from 'next/image';

const FolderInfo = async () => {
  const { data } = await instance.get('/sample/folder');
  const { name, owner } = data.folder;
  return (
    <>
      <div className={classes.folderInfo}>
        <div className={classes.user}>
          <div className={classes.profileImage}>
            <Image
              src={owner.profileImageSource}
              alt='폴더 프로필 이미지'
              fill
            />
          </div>
          <div>{owner.name}</div>
        </div>
        <div>{name}</div>
      </div>
    </>
  );
};
export default FolderInfo;
