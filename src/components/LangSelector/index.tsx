import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { t } from 'i18next';
import i18n from '../../i18n';

const langOptions = ['pt-BR', 'en-US'];

export const LangSelector = () => {
  function handleUpdateLang(newLang: string) {
    i18n.changeLanguage(newLang);
  }

  return (
    <Select
      variant="outlined"
      sx={{ maxWidth: '150px', width: '100%' }}
      value={i18n.language}
      label=""
      onChange={(e) => handleUpdateLang(e.target.value)}
    >
      {langOptions.map((langOption) => (
        <MenuItem key={langOption} value={langOption}>
          {t(`lang.${langOption}`)}
        </MenuItem>
      ))}
    </Select>
  );
};
