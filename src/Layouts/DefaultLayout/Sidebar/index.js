import classNames from 'classnames/bind';

import style from './Sidebar.module.scss';

const cx = classNames.bind(style);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <ul>
                <li>For you</li>
                <li>Discover</li>
                <li>Following</li>
            </ul>
        </aside>
    );
}

export default Sidebar;
