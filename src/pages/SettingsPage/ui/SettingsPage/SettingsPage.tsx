import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/shared/ui/component/Text';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/component/Stack';

interface SettingsPageProps {
    className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page>
            <VStack gap="16">
                <Text title={t('Настройки пользователя')} />
            </VStack>
        </Page>
    );
});

export default SettingsPage;
