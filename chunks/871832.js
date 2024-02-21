"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("159997"),
  l = n("33942"),
  r = n("773336"),
  o = n("50885"),
  u = n("18520"),
  d = n("49111"),
  c = (0, u.default)((e, t, n, r, o, u, d, c, f, E, h, _, C) => {
    let I = "OAuth2Authorize_".concat(e, "_").concat(E, "_").concat(h);
    return new Promise(S => {
      let m = e => {
        let {
          location: t
        } = e;
        S(t)
      };
      (0, s.openModal)(s => (0, a.jsx)(l.OAuth2AuthorizeModal, {
        ...s,
        authorization: t,
        clientId: e,
        scopes: null != n ? n : [],
        callback: m,
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
        modalKey: I,
        onCloseRequest: () => {
          (0, s.closeModal)(I), S(void 0)
        }
      }, (0, i.default)(t.application, h) ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT)
    })
  }, function(e, t) {
    if (r.isPlatformEmbedded) {
      let n = (0, i.default)(e, t) ? d.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
      (0, r.isWindows)() ? o.default.minimize(n): o.default.restore(n), o.default.focus(n)
    }
  })