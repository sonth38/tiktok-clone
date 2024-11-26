import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return <Button className={cx('menu-item')} title={data.title} leftIcon={data.icon} type="text" />;
}

export default MenuItem;
