import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSignOut,
    faSpinner,
    faX
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    { icon: <FontAwesomeIcon icon={faEarthAsia} />, title: 'English' },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' }
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo.default} alt="logo" />
            </div>

            <Tippy
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
                    <input placeholder="Search" />
                    <button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading-sign')} />
                        <FontAwesomeIcon icon={faX} className={cx('loading-sign')} />
                    </button>
                    <span className={cx('vertical-line')} />
                    <button className={cx('search-button')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>

            <div className={cx('header-right-container')}>
                <Button title="Upload" type="text" to="/login" />
                <Button title="Logout" type="primary" leftIcon={<FontAwesomeIcon icon={faSignOut} />} />
                <Menu items={MENU_ITEMS}>
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </Menu>
            </div>
        </header>
    );
}

export default Header;
