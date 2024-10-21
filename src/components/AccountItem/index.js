import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c1dd3a44e0b04ea71c81ace865e38e64~c5_300x300.webp?lk3s=a5d48078&nonce=22052&refresh_token=e42d79751fd172c0ebf5a9c4eabd74ba&x-expires=1727748000&x-signature=R9lxGCVZzggQUBU5cF2oPlgueB8%3D&shp=a5d48078&shcp=c1333099"
                alt="aaa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('tick')} />
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
