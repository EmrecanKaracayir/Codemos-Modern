import { l10nT } from "../../../l10n";
import { authenticate } from "../../authentication";
import {
  showErrorNotification,
  showInfoNotification,
  showProgressNotification,
} from "../../notifications";

export const authenticateCommand = async () => {
  await showProgressNotification(l10nT("notification.full.authenticating"), async () => {
    const result = await authenticate(true);
    if (!result.success) {
      showErrorNotification(
        l10nT("notification.lead.authenticationFailure$msg", [result.message]),
        null,
        null,
      );
    } else {
      showInfoNotification(l10nT("notification.full.authenticationSuccess"), null, null);
    }
  });
};
