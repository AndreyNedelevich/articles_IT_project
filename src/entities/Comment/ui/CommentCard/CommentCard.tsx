import {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Text} from '@/shared/ui/component/Text';
import {Skeleton} from '@/shared/ui/component/Skeleton';
import {HStack, VStack} from '@/shared/ui/component/Stack';
import cls from './CommentCard.module.scss';
import {Comment} from '../../model/types/comment';
import {getRouteProfile} from '@/shared/const/router';
import {Card} from '@/shared/ui/component/Card';
import {AppLink} from '@/shared/ui/component/AppLink';
import {Avatar} from '@/shared/ui/component/Avatar';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {className, comment, isLoading} = props;


    if (isLoading) {
        return (
            <VStack
                gap="8"
                max
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%"/>
                    <Skeleton
                        height={16}
                        width={100}
                        className={cls.username}
                    />
                </div>
                <Skeleton className={cls.text} width="100%" height={50}/>
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <Card padding="24" border="partial" fullWidth>
            <VStack
                gap="8"
                max
                className={classNames(cls.CommentCardRedesigned, {}, [
                    className,
                ])}
            >
                <AppLink to={getRouteProfile(comment.user.id)}>
                    <HStack gap="8">
                        {comment.user.avatar ? (
                            <Avatar
                                size={30}
                                src={comment.user.avatar}
                            />
                        ) : null}
                        <Text text={comment.user.username} bold/>
                    </HStack>
                </AppLink>
                <Text text={comment.text}/>
            </VStack>
        </Card>
    );
});
