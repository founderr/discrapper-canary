var s = n(735250);
n(470079);
var i = n(481060),
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
    state: T,
    guildId: g,
    channelId: p,
    prompt: N,
    disableGuildSelect: S,
    disclosures: C,
    integrationType: A
  } = e, f = "OAuth2Authorize_".concat(n, "_").concat(g, "_").concat(p), Z = null != A ? null == o ? void 0 : o.get(A) : void 0, L = null !== (t = null == Z ? void 0 : Z.application) && void 0 !== t ? t : a.Z.getApplication(n);
  return new Promise((e, t) => {
    let a = n => {
      let {
        location: s
      } = n;
      null != location ? e(s) : t(new u.Z({
        errorCode: E.lTL.OAUTH2_ERROR
      }, "User cancelled authorization"))
    };
    (0, i.openModal)(e => (0, s.jsx)(r.OAuth2AuthorizeModal, {
      ...e,
      authorizations: o,
      clientId: n,
      scopes: null != c ? c : [],
      disclosures: null != C ? C : [],
      callback: a,
      responseType: h,
      redirectUri: _,
      codeChallenge: I,
      codeChallengeMethod: m,
      state: T,
      permissions: d,
      guildId: g,
      channelId: p,
      prompt: N,
      disableGuildSelect: "boolean" == typeof S ? S : "true" === S,
      integrationType: A
    }), {
      modalKey: f,
      onCloseRequest: () => {
        (0, i.closeModal)(f), t(new u.Z({
          errorCode: E.lTL.OAUTH2_ERROR
        }, "User cancelled authorization"))
      }
    }, null != L && (0, l.Z)(L, p) ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT)
  })
}, function(e, t) {
  if (o.isPlatformEmbedded) {
    let n = (0, l.Z)(e, t) ? E.KJ3.CHANNEL_CALL_POPOUT : null;
    (0, o.isWindows)() ? c.ZP.minimize(n): c.ZP.restore(n), c.ZP.focus(n)
  }
})