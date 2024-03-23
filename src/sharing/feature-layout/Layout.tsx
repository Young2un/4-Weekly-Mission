import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { useGetUser } from "user/data-access-user";
import { Footer } from "sharing/ui-footer";
import { NavigationBar } from "sharing/ui-navigation-bar";
import { ChildrenProps } from "@/types/children";

const cx = classNames.bind(styles);

// children파일 분리 예시? 이부분도 확인용 주석
interface LayoutProps extends ChildrenProps {
  isSticky?: boolean;
}

export const Layout = ({ children, isSticky = true }: LayoutProps) => {
  const { data } = useGetUser();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer />
    </div>
  );
};
