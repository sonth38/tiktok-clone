import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCloudUpload,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMoon,
    faRightFromBracket,
    faRightToBracket,
    faSpinner,
    faUser,
    faX
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tiếng Việt' }
            ]
        }
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' }
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    const userMenu = [
        { icon: <FontAwesomeIcon icon={faUser} />, title: 'Hồ sơ', to: '/nguyenvana' },
        { icon: <FontAwesomeIcon icon={faMoon} />, title: 'Chế độ tối', to: '/coin' },
        { icon: <FontAwesomeIcon icon={faGear} />, title: 'Cài đặt', to: '/setting' },
        ...MENU_ITEMS,
        { icon: <FontAwesomeIcon icon={faRightFromBracket} />, title: 'Đăng xuất', to: '/logout', separate: true }
    ];

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo.default} alt="logo" />
            </div>

            <HeadlessTippy
                visible={searchResult.length > 0}
                interactive={true}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}>
                <div className={cx('search-box')}>
                    <input placeholder="Tìm kiếm" />
                    <button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading-sign')} />
                        <FontAwesomeIcon icon={faX} className={cx('loading-sign')} />
                    </button>
                    <span className={cx('vertical-line')} />
                    <button className={cx('search-button')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>

            <div className={cx('header-right-container')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 200]} content="Upload video" placement="bottom" className="tippy-box">
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button title="Tải lên" type="text" to="/login" />
                        <Button
                            title="Đăng nhập"
                            type="primary"
                            leftIcon={<FontAwesomeIcon icon={faRightToBracket} />}
                        />
                    </>
                )}

                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                        <img
                            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3286191bf8dc0df18df398ff44169cc6.jpeg?lk3s=a5d48078&nonce=78837&refresh_token=143b1329f898ca8dc03c91b00d599c73&x-expires=1738544400&x-signature=yCHSnIdlyBT7Pd9s0cWpn%2FyQMK4%3D&shp=a5d48078&shcp=81f88b70"
                            className={cx('user-avatar')}
                            alt="Nguyễn Văn A"
                        />
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>
        </header>
    );
}

export default Header;
