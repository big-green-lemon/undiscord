# Undiscord - Delete all messages in a Discord channel or DM

## Preamble

The original author/maintainer [victorpb](https://github.com/victornpb/) seems to have completely abandoned the project.

This fork aims to keep the project alive again through bug fixes, etc.

This README will not be as complete as the original one, as there is already everything essential written down in there. It will solely be used to display some useful information regarding this fork.

## Getting started
<!-- shields -->
[![GitHub Release Date](https://img.shields.io/github/release-date/big-green-lemon/undiscord?style=flat-square)](https://github.com/big-green-lemon/undiscord/releases)
[![GitHub License](https://img.shields.io/github/license/big-green-lemon/undiscord?style=flat-square)](https://github.com/big-green-lemon/undiscord/blob/master/LICENSE)
<!-- end shields -->
    
1. Install Undiscord:  

  Follow the guide on the original [repository](https://github.com/big-green-lemon/undiscord/wiki).

----
### Need help?
Check out the original [wiki] hosted on the original repo (https://github.com/victornpb/undiscord/wiki) for helpful articles.

### Have an Idea or Feature request?
Check out the [Ideas][ideas] section, if your idea _hasn't been posted before_, please post a new one.

### Found a bug?
Is prefered that _issues_ follow a certain format.

If you believe you found a bug please file an [issue](https://github.com/big-green-lemon/undiscord/issues), but please fill the issue template.

If you are looking to contribute please read the [CONTRIBUTING](./CONTRIBUTING.md) first.

### Copy paste version
Looking for the old Copy/Paste version? [here](https://github.com/victornpb/undiscord/wiki/Copy-paste-method)


----

Originally from https://gist.github.com/victornpb/135f5b346dea4decfc8f63ad7d9cc182

----
## ⛔️ DO NOT SHARE YOUR AUTH TOKEN! ⛔️ ##

Sharing your authToken on the internet will give full access to your account! [There are bots gathering credentials all over the internet](https://github.com/rndinfosecguy/Scavenger).
If you post your token by accident, LOGOUT from discord on that **same browser** you got that token imediately.
Changing your password will make sure that you get logged out of every device. I advice that you turn on [2FA](https://support.discord.com/hc/en-us/articles/219576828-Setting-up-Two-Factor-Authentication) afterwards.

If you are unsure do not post screenshots, or logs on the internet.

----
## Security Concerns

Using third-party scripts means you trust that the script’s developer hasn’t inserted malicious functionality into the code and has secured it against attackers trying to do the same. You should never run code you don't trust.

Please read: [what I'm doing to ensure this is safe for users][security_policy].

----
#### DISCLAIMER

> THE SOFTWARE AND ALL INFORMATION HERE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
>
> By using any code or information provided here you are agreeing to all parts of the above Disclaimer.


<!-- links -->
  [self-bots]: https://support.discordapp.com/hc/en-us/articles/115002192352-Automated-user-accounts-self-bots-
  [userscrips_faq]: https://en.wikipedia.org/wiki/Userscript
  [greasyfork_icon]: https://user-images.githubusercontent.com/3372598/166113712-1bc3d654-1342-4f1e-9845-21c3b21524b1.png
  [openuserjs_icon]: https://user-images.githubusercontent.com/3372598/166113714-5a2ede39-8d66-43a8-b5da-8f1897cb3121.png
  [greasyfork_moderation]: https://greasyfork.org/en/moderator_actions

  [issues]: https://github.com/big-green-lemon/undiscord/issues
  [issues_open]: https://github.com/big-green-lemon/undiscord/issues
  [issues_closed]: https://github.com/big-green-lemon/undiscord/issues
  [prs]: https://github.com/big-green-lemon/undiscord/pulls
  [pr_open]: https://github.com/big-green-lemon/undiscord/pulls
  [prs_closed]: https://github.com/big-green-lemon/undiscord/pulls

<!-- Extensions -->
  [chrome_violentmonkey]: https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag
  [chrome_tampermonkey]: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
  [firefox_greasemonkey]: https://addons.mozilla.org/firefox/addon/greasemonkey/
  [firefox_tampermonkey]: https://addons.mozilla.org/firefox/addon/tampermonkey/
  [firefox_violentmonkey]: https://addons.mozilla.org/firefox/addon/violentmonkey/
  [safari_tampermonkey]: https://github.com/big-green-lemon/undiscord/issues/91#issuecomment-654514364
  [edge_tampermonkey]: https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd
  [opera_tampermonkey]: https://addons.opera.com/extensions/details/tampermonkey-beta/
  [opera_violentmonkey]: https://addons.opera.com/extensions/details/violent-monkey/

## Known issues

- ~~The token can no longer be extracted by clicking on "Fill"~~
- ~~The deletion process can duplicate into two separate functions and trigger the API limitations~~