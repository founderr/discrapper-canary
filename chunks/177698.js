"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  i = n("813615"),
  l = n("812206"),
  r = n("69580"),
  o = n("358085"),
  u = n("998502"),
  d = n("996106"),
  c = n("703912"),
  f = n("981631");
t.default = (0, c.default)(e => {
  var t;
  let {
    clientId: n,
    authorizations: o,
    scopes: u,
    parsedPermissions: c,
    responseType: E,
    redirectUri: h,
    codeChallenge: _,
    codeChallengeMethod: C,
    state: m,
    guildId: p,
    channelId: S,
    prompt: g,
    disableGuildSelect: I,
    disclosures: T,
    integrationType: A
  } = e, N = "OAuth2Authorize_".concat(n, "_").concat(p, "_").concat(S), v = null != A ? null == o ? void 0 : o.get(A) : void 0, R = null !== (t = null == v ? void 0 : v.application) && void 0 !== t ? t : l.default.getApplication(n);
  return new Promise((e, t) => {
    let l = n => {
      let {
        location: a
      } = n;
      null != location ? e(a) : t(new d.default({
        errorCode: f.RPCErrors.OAUTH2_ERROR
      }, "User cancelled authorization"))
    };
    (0, s.openModal)(e => (0, a.jsx)(r.OAuth2AuthorizeModal, {
      ...e,
      authorizations: o,
      clientId: n,
      scopes: null != u ? u : [],
      disclosures: null != T ? T : [],
      callback: l,
      responseType: E,
      redirectUri: h,
      codeChallenge: _,
      codeChallengeMethod: C,
      state: m,
      permissions: c,
      guildId: p,
      channelId: S,
      prompt: g,
      disableGuildSelect: "boolean" == typeof I ? I : "true" === I,
      integrationType: A
    }), {
      modalKey: N,
      onCloseRequest: () => {
        (0, s.closeModal)(N), t(new d.default({
          errorCode: f.RPCErrors.OAUTH2_ERROR
        }, "User cancelled authorization"))
      }
    }, null != R && (0, i.default)(R, S) ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT)
  })
}, function(e, t) {
  if (o.isPlatformEmbedded) {
    let n = (0, i.default)(e, t) ? f.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
    (0, o.isWindows)() ? u.default.minimize(n): u.default.restore(n), u.default.focus(n)
  }
})