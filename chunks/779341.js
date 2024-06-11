"use strict";
t.r(n), t.d(n, {
  default: function() {
    return a
  }
});
var o = t("735250");
t("470079");
var i = t("585183"),
  s = t("728151"),
  r = t("981631");

function a(e) {
  let {
    authToken: n,
    onContinue: t,
    onError: a,
    onClose: l
  } = e;
  return (0, o.jsx)(i.TwoWayLinkDiscordConsent, {
    platformType: r.PlatformTypes.CRUNCHYROLL,
    clientId: s.CRUNCHYROLL_CLIENT_ID,
    scopes: s.CRUNCHYROLL_CLIENT_SCOPES,
    authToken: n,
    onContinue: t,
    onError: a,
    onClose: l
  })
}