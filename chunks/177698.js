"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("813615"),
  i = a("69580"),
  r = a("358085"),
  o = a("998502"),
  u = a("703912"),
  d = a("981631");
t.default = (0, u.default)(e => {
  let {
    clientId: t,
    authorization: a,
    scopes: r,
    parsedPermissions: o,
    responseType: u,
    redirectUri: d,
    codeChallenge: c,
    codeChallengeMethod: f,
    state: E,
    guildId: h,
    channelId: _,
    prompt: C,
    disableGuildSelect: m,
    disclosures: S,
    integrationType: p
  } = e, I = "OAuth2Authorize_".concat(t, "_").concat(h, "_").concat(_);
  return new Promise(e => {
    let T = t => {
      let {
        location: a
      } = t;
      e(a)
    };
    (0, s.openModal)(e => (0, n.jsx)(i.OAuth2AuthorizeModal, {
      ...e,
      authorization: a,
      clientId: t,
      scopes: null != r ? r : [],
      disclosures: null != S ? S : [],
      callback: T,
      responseType: u,
      redirectUri: d,
      codeChallenge: c,
      codeChallengeMethod: f,
      state: E,
      permissions: o,
      guildId: h,
      channelId: _,
      prompt: C,
      disableGuildSelect: "boolean" == typeof m ? m : "true" === m,
      integrationType: p
    }), {
      modalKey: I,
      onCloseRequest: () => {
        (0, s.closeModal)(I), e(void 0)
      }
    }, (0, l.default)(a.application, _) ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT)
  })
}, function(e, t) {
  if (r.isPlatformEmbedded) {
    let a = (0, l.default)(e, t) ? d.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
    (0, r.isWindows)() ? o.default.minimize(a): o.default.restore(a), o.default.focus(a)
  }
})