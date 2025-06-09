import { log } from './log';

export async function getToken() {
  window.dispatchEvent(new Event('beforeunload'));
  const LS = document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage;
  try {
    return JSON.parse(LS.token);
  } catch {
    log.info('Could not automatically detect Authorization Token in local storage!');
    log.info('Attempting to grab token using webpack');
    // Inspired from https://github.com/Warlord12398/Discord-Token-Extractor
    return new Promise((resolve, reject) => {
      window.webpackChunkdiscord_app.push([
        [Math.random()],
        {},
        (req) => {
          for (let m of Object.values(req.c)) {
            if (m?.exports?.default?.getToken) {
              const potentialToken = m.exports.default.getToken();
              if(typeof potentialToken === 'string') {
                resolve(potentialToken);
              }
            }
          }
        },
      ]);

      resolve(undefined);
    });
  }
}

export function getAuthorId() {
  const LS = document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage;
  return JSON.parse(LS.user_id_cache);
}

export function getGuildId() {
  const m = location.href.match(/channels\/([\w@]+)\/(\d+)/);
  if (m) return m[1];
  else alert('Could not find the Guild ID!\nPlease make sure you are on a Server or DM.');
}

export function getChannelId() {
  const m = location.href.match(/channels\/([\w@]+)\/(\d+)/);
  if (m) return m[2];
  else alert('Could not find the Channel ID!\nPlease make sure you are on a Channel or DM.');
}

export async function fillToken() {
  try {
    return getToken();
  } catch (err) {
    log.verb(err);
    log.error('Could not automatically detect Authorization Token!');
    log.info('Please make sure Undiscord is up to date');
    log.debug('Alternatively, you can try entering a Token manually in the "Advanced Settings" section.');
  }
  return '';
}
