import {FC} from 'react';
import Image from 'next/image'

import loader from '../../../public/loader.svg'
import styles from './Loader.module.css'

export const Loader:FC = () => {
    return (
        <div className={styles.wrapper}>
            <Image className={styles.loader} src={loader} alt={'loader'}/>
        </div>
    )
}