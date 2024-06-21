var i = n(735250);
n(470079);
var s = n(481060),
  l = n(813615),
  a = n(812206),
  r = n(69580),
  o = n(358085),
  c = n(998502),
  u = n(996106),
  d = n(703912),
  E = n(981631);
t.Z = (0, d.Z)(e => {
  var t;
  let {
    clientId: n,
    authorizations: o,
    scopes: c,
    parsedPermissions: d,
    responseType: h,
    redirectUri: _,
    codeChallenge: I,
    codeChallengeMethod: m,
    state: g,
    guildId: p,
    channelId: N,
    prompt: T,
    disableGuildSelect: C,
    disclosures: S,
    integrationType: A
  } = e, f = "OAuth2Authorize_".concat(n, "_").concat(p, "_").concat(N), Z = null != A ? null == o ? void 0 : o.get(A) : void 0, v = null !== (t = null == Z ? void 0 : Z.application) && void 0 !== t ? t : a.Z.getApplication(n);
  return new Promise((e, t) => {
    let a = n => {
      let {
        location: i
      } = n;
      null != location ? e(i) : t(new u.Z({
        errorCode: E.lTL.OAUTH2_ERROR
      }, "User cancelled authorization"))
    };
    (0, s.openModal)(e => (0, i.jsx)(r.OAuth2AuthorizeModal, {
      ...e,
      authorizations: o,
      clientId: n,
      scopes: null != c ? c : [],
      disclosures: null != S ? S : [],
      callback: a,
      responseType: h,
      redirectUri: _,
      codeChallenge: I,
      codeChallengeMethod: m,
      state: g,
      permissions: d,
      guildId: p,
      channelId: N,
      prompt: T,
      disableGuildSelect: "boolean" == typeof C ? C : "true" === C,
      integrationType: A
    }), {
      modalKey: f,
      onCloseRequest: () => {
        (0, s.closeModal)(f), t(new u.Z({
          errorCode: E.lTL.OAUTH2_ERROR
        }, "User cancelled authorization"))
      }
    }, null != v && (0, l.Z)(v, N) ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT)
  })
}, function(e, t) {
  if (o.isPlatformEmbedded) {
    let n = (0, l.Z)(e, t) ? E.KJ3.CHANNEL_CALL_POPOUT : null;
    (0, o.isWindows)() ? c.ZP.minimize(n): c.ZP.restore(n), c.ZP.focus(n)
  }
})