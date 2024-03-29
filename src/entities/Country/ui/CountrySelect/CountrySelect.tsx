import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/component/Popups';
import { Country } from '../../model/types/country';


interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.France, content: Country.France },
    { value: Country.Poland, content: Country.Poland },
    { value: Country.Germany, content: Country.Germany },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );

        const props = {
            className,
            value,
            defaultValue: t('Укажите страну'),
            label: t('Укажите страну'),
            items: options,
            onChange: onChangeHandler,
            readonly,
            direction: 'top right' as const,
        };

        return (
            <ListBox {...props} />
        );
    },
);
