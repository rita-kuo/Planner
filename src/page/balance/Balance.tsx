import { useTranslation } from "react-i18next";
import { FullWidthButton } from "../../common/component/button"
import { i18nPath } from "../../i18n/define/path/path";

export const Balance: React.FC = () => {
    const { t } = useTranslation();

    return <>
        <FullWidthButton>{t(i18nPath.balance.action.createRecord)}</FullWidthButton>
    </>
}