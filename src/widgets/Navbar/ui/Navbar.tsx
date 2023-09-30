import {useTranslation} from 'react-i18next';
import React, {memo, useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import {classNames} from '@/shared/lib/classNames/classNames';

import {LoginModal} from '@/features/AuthByUsername';
import {getUserAuthData} from '@/entities/User';
import {HStack} from '@/shared/ui/component/Stack';
import {NotificationButton} from '@/features/notificationButton';
import {AvatarDropdown} from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import {Button} from '@/shared/ui/component/Button';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);



    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton/>
                    <AvatarDropdown/>
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                variant="clear"
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>

            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
            )}
        </header>
    );
});