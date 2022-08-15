import * as vscode from 'vscode';
import { AccentColorCommand } from './accent-color-command';
import { DebugLogChannel } from './log-channel';

export async function activate(context: vscode.ExtensionContext) {
  DebugLogChannel.create();

  // Register and subscribe solarizedCustomTheme.setAccentColor command
  context.subscriptions.push(
    vscode.commands.registerCommand(
      AccentColorCommand.IDENTIFIER,
      AccentColorCommand.execute
    )
  );
}

export async function deactivate(context: vscode.ExtensionContext) {
  DebugLogChannel.destroy();
}
