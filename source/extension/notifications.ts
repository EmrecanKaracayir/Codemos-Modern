import { Progress, ProgressLocation, commands, window } from "vscode";
import { NOTIFICATION_SIGNATURE } from "./constants";

export function showInfoNotification(
  message: string,
  actions: string[] | null,
  command: string | null,
) {
  const messageWithSignature = `${NOTIFICATION_SIGNATURE} ${message}`;
  if (!actions) {
    window.showInformationMessage(messageWithSignature);
  } else {
    window
      .showInformationMessage(messageWithSignature, ...actions)
      .then((selectedAction) => {
        if (selectedAction === actions[0]) {
          if (command) {
            commands.executeCommand(command);
          }
        }
      });
  }
}

export function showWarningNotification(
  message: string,
  actions: string[] | null,
  command: string | null,
) {
  const messageWithSignature = `${NOTIFICATION_SIGNATURE} ${message}`;
  if (!actions) {
    window.showWarningMessage(messageWithSignature);
  } else {
    window
      .showWarningMessage(messageWithSignature, ...actions)
      .then((selectedAction) => {
        if (selectedAction === actions[0]) {
          if (command) {
            commands.executeCommand(command);
          }
        }
      });
  }
}

export function showErrorNotification(
  message: string,
  actions: string[] | null,
  command: string | null,
) {
  const messageWithSignature = `${NOTIFICATION_SIGNATURE} ${message}`;
  if (!actions) {
    window.showErrorMessage(messageWithSignature);
  } else {
    window
      .showInformationMessage(messageWithSignature, ...actions)
      .then((selectedAction) => {
        if (selectedAction === actions[0]) {
          if (command) {
            commands.executeCommand(command);
          }
        }
      });
  }
}

export async function showProgressNotification(
  title: string,
  task: (
    progress: Progress<{
      message?: string | undefined;
      increment?: number | undefined;
    }>,
  ) => Promise<void>,
) {
  await window.withProgress(
    {
      location: ProgressLocation.Notification,
      title: `${NOTIFICATION_SIGNATURE} ${title}`,
      cancellable: false,
    },
    task,
  );
}
