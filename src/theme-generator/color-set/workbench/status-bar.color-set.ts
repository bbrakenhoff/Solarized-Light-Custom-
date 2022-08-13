import { SolarizedColor } from '../../../solarized-color';
import { ThemeDependentColorSet } from '../theme-dependent-colors-set';

export class StatusBarColorSet extends ThemeDependentColorSet {
  get() {
    return {
      'statusBar.background': this.isGeneratingLightTheme
        ? SolarizedColor.Base2
        : '#00212B',
      'statusBar.debuggingBackground': this.isGeneratingLightTheme
        ? SolarizedColor.Base2
        : '#00212B',
      'statusBar.foreground': this.isGeneratingLightTheme
        ? SolarizedColor.Base01
        : SolarizedColor.Base1,
      'statusBar.noFolderBackground': this.isGeneratingLightTheme
        ? SolarizedColor.Base2
        : '#00212B',
      'statusBarItem.prominentBackground': this.colorPalette.border,
      'statusBarItem.prominentHoverBackground': this.colorPalette.border,
      'statusBarItem.remoteBackground': `${this.colorPalette.accentColor}99`
    };
  }
}