import '@pnotify/core/dist/BrightTheme.css';
import { success, alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import { defaults } from '@pnotify/core';

const text = {
    empty: "No result",
    success: 'Incredible success!',
    list: 'Success!',
    alert: 'Too many matches found. Please enter a more specific query!',
    error: 'Incorrect enter!'
}

defaultModules.set(PNotifyMobile, {});
defaults.width = '400px';
defaults.sticker = false
defaults.mouseReset = false
defaults.closer = false
defaults.delay = 2000

export default { success, alert, error, text }