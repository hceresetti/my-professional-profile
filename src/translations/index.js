import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";

import ptBr from "./ptBr.json";

const translations = { ptBR };

const { languageTag } = RNLocalize.findBestAvailableLanguage(
  Object.keys(translations),
) || { languageTag: 'ptBr' };

i18n.locale = languageTag;
i18n.fallbacks = true;
i18n.translations = translations;

export default i18n;
