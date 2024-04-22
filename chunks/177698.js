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
t.default = (0, u.default)((e, t, a, r, o, u, d, c, f, E, h, _, C, m) => {
  let S = "OAuth2Authorize_".concat(e, "_").concat(E, "_").concat(h);
  return new Promise(I => {
    let p = e => {
      let {
        location: t
      } = e;
      I(t)
    };
    (0, s.openModal)(s => (0, n.jsx)(i.OAuth2AuthorizeModal, {
      ...s,
      authorization: t,
      clientId: e,
      scopes: null != a ? a : [],
      disclosures: null != m ? m : [],
      callback: p,
      responseType: o,
      redirectUri: u,
      codeChallenge: d,
      codeChallengeMethod: c,
      state: f,
      permissions: r,
      guildId: E,
      channelId: h,
      prompt: _,
      disableGuildSelect: "boolean" == typeof C ? C : "true" === C
    }), {
      modalKey: S,
      onCloseRequest: () => {
        (0, s.closeModal)(S), I(void 0)
      }
    }, (0, l.default)(t.application, h) ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT)
  })
}, function(e, t) {
  if (r.isPlatformEmbedded) {
    let a = (0, l.default)(e, t) ? d.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
    (0, r.isWindows)() ? o.default.minimize(a): o.default.restore(a), o.default.focus(a)
  }
})