import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div>TikTok</div>
            <div>Search box</div>
            <div>Login</div>
        </header>
    );
}

export default Header;
