"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("813615"),
  i = a("812206"),
  r = a("69580"),
  o = a("358085"),
  u = a("998502"),
  d = a("703912"),
  c = a("981631");
t.default = (0, d.default)(e => {
  var t;
  let {
    clientId: a,
    authorizations: o,
    scopes: u,
    parsedPermissions: d,
    responseType: c,
    redirectUri: f,
    codeChallenge: E,
    codeChallengeMethod: h,
    state: _,
    guildId: C,
    channelId: m,
    prompt: S,
    disableGuildSelect: p,
    disclosures: I,
    integrationType: T
  } = e, g = "OAuth2Authorize_".concat(a, "_").concat(C, "_").concat(m), A = null != T ? null == o ? void 0 : o.get(T) : void 0, N = null !== (t = null == A ? void 0 : A.application) && void 0 !== t ? t : i.default.getApplication(a);
  return new Promise(e => {
    let t = t => {
      let {
        location: a
      } = t;
      e(a)
    };
    (0, s.openModal)(e => (0, n.jsx)(r.OAuth2AuthorizeModal, {
      ...e,
      authorizations: o,
      clientId: a,
      scopes: null != u ? u : [],
      disclosures: null != I ? I : [],
      callback: t,
      responseType: c,
      redirectUri: f,
      codeChallenge: E,
      codeChallengeMethod: h,
      state: _,
      permissions: d,
      guildId: C,
      channelId: m,
      prompt: S,
      disableGuildSelect: "boolean" == typeof p ? p : "true" === p,
      integrationType: T
    }), {
      modalKey: g,
      onCloseRequest: () => {
        (0, s.closeModal)(g), e(void 0)
      }
    }, null != N && (0, l.default)(N, m) ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT)
  })
}, function(e, t) {
  if (o.isPlatformEmbedded) {
    let a = (0, l.default)(e, t) ? c.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
    (0, o.isWindows)() ? u.default.minimize(a): u.default.restore(a), u.default.focus(a)
  }
})