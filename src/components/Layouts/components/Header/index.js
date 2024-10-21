import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faHouse,
    faLanguage,
    faMagnifyingGlass,
    faMoon,
    faQuestion,
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

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

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
                <Button title="Upload" type="rounded" to="/login" />
                <Button title="Logout" type="primary" leftIcon={<FontAwesomeIcon icon={faSignOut} />} />
                <div>
                    <a
                        className={cx('header-more-action')}
                        href="/#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </a>

                    <ul className={cx('header-more-action-menu', 'dropdown-menu')} aria-labelledby="dropdownMenuLink">
                        <li>
                            <a className="dropdown-item" href="/#">
                                <FontAwesomeIcon icon={faHouse} />
                                <span>Công cụ dành cho nhà phát triển</span>
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/#">
                                <FontAwesomeIcon icon={faLanguage} />
                                <span>Tiếng Việt</span>
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/#">
                                <FontAwesomeIcon icon={faQuestion} />
                                <span>Phản hồi và trợ giúp</span>
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/#">
                                <FontAwesomeIcon icon={faMoon} />
                                <span>Chế độ tối</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
