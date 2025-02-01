import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate
    });

    return <Button className={classes} title={data.title} leftIcon={data.icon} type="text" onClick={onClick} />;
}

export default MenuItem;
