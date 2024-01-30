import {useTranslation} from 'react-i18next';
import {HTMLAttributeAnchorTarget, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Text} from '@/shared/ui/component/Text'
import {ArticleView} from '../../model/consts/articleConsts';
import {ArticleListItemSkeleton} from '../ArticleListItem/ArticleListItemSkeleton';

import cls from './ArticleList.module.scss';
import {Article} from '../../model/types/article';
import {HStack} from '@/shared/ui/component/Stack';
import {
    ArticleListItem
} from "../ArticleListItem/ArticleListItem/ArticleListItem";


interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
    } = props;
    const {t} = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text size='l' title={t('Статьи не найдены')}/>
            </div>
        );
    }

    return (
        <HStack
            wrap="wrap"
            gap="16"
            className={classNames(cls.ArticleListRedesigned, {}, [])}
        >
            {articles.map((item) => (
                <ArticleListItem
                    article={item}
                    view={view}
                    target={target}
                    key={item.id}
                    className={cls.card}
                />
            ))}
            {isLoading && getSkeletons(view)}
        </HStack>
    );
});
