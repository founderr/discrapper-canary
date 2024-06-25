n.d(t, {
  R: function() {
    return i
  }
});
var l, i, s = n(735250);
n(470079);
var r = n(442837),
  a = n(481060),
  o = n(893776),
  u = n(391650),
  c = n(144114),
  d = n(607744),
  h = n(594174),
  p = n(153124),
  g = n(981631),
  m = n(815660),
  C = n(689938),
  E = n(319081);
(l = i || (i = {}))[l.VOICE = 0] = "VOICE";
t.Z = e => {
  let {
    type: t,
    guildId: l,
    closePopout: i
  } = e, f = (0, p.Dt)(), {
    notClaimed: _,
    notEmailVerified: I,
    notPhoneVerified: N,
    newAccount: Z,
    newMember: S
  } = (0, r.e7)([d.Z], () => d.Z.getCheck(l), [l]), x = 0 === t ? C.Z.Messages.GUILD_VERIFICATION_VOICE_HEADER : null, L = null, T = null;
  return (0 === t && (_ ? (L = C.Z.Messages.GUILD_VERIFICATION_VOICE_NOT_CLAIMED, T = C.Z.Messages.CLAIM_ACCOUNT) : N ? (L = C.Z.Messages.GUILD_VERIFICATION_VOICE_NOT_PHONE_VERIFIED, T = C.Z.Messages.VERIFY_PHONE) : I ? (L = C.Z.Messages.GUILD_VERIFICATION_VOICE_NOT_VERIFIED, T = C.Z.Messages.RESEND_VERIFICATION_EMAIL) : S ? (L = C.Z.Messages.GUILD_VERIFICATION_VOICE_MEMBER_AGE.format({
    min: g.YeM.MEMBER_AGE
  }), T = C.Z.Messages.OKAY) : Z && (L = C.Z.Messages.GUILD_VERIFICATION_VOICE_ACCOUNT_AGE.format({
    min: g.YeM.ACCOUNT_AGE
  }), T = C.Z.Messages.OKAY)), null == x || null == L) ? null : (0, s.jsxs)(a.Dialog, {
    className: E.container,
    "aria-labelledby": f,
    children: [(0, s.jsx)("img", {
      alt: "",
      className: E.image,
      src: n(64395)
    }), (0, s.jsxs)("div", {
      className: E.content,
      children: [(0, s.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        id: f,
        children: x
      }), (0, s.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: L
      }), (0, s.jsxs)("div", {
        className: E.buttonContainer,
        children: [null != T ? (0, s.jsx)(a.Button, {
          onClick: () => {
            _ ? u.j() : N ? (0, a.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("49237"), n.e("99387"), n.e("76540"), n.e("7954")]).then(n.bind(n, 607018));
              return t => (0, s.jsx)(e, {
                reason: c.L.GUILD_PHONE_REQUIRED,
                ...t
              })
            }, {
              modalKey: m.M
            }) : I && (o.Z.verifyResend(), (0, a.openModal)(e => {
              var t;
              return (0, s.jsx)(a.ConfirmModal, {
                header: C.Z.Messages.VERIFICATION_EMAIL_TITLE,
                confirmText: C.Z.Messages.OKAY,
                confirmButtonColor: a.Button.Colors.BRAND,
                ...e,
                children: (0, s.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children: C.Z.Messages.VERIFICATION_EMAIL_BODY.format({
                    email: null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.email
                  })
                })
              })
            })), i()
          },
          className: E.primaryButton,
          children: T
        }) : null, _ || N || I ? (0, s.jsx)(a.Button, {
          onClick: i,
          look: a.Button.Looks.BLANK,
          className: E.cancel,
          children: C.Z.Messages.NEVERMIND
        }) : null]
      })]
    })]
  })
}