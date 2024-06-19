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
  g = n(153124),
  p = n(981631),
  m = n(815660),
  C = n(689938),
  E = n(319081);
(l = i || (i = {}))[l.VOICE = 0] = "VOICE";
t.Z = e => {
  let {
    type: t,
    guildId: l,
    closePopout: i
  } = e, f = (0, g.Dt)(), {
    notClaimed: _,
    notEmailVerified: I,
    notPhoneVerified: N,
    newAccount: Z,
    newMember: S
  } = (0, r.e7)([d.Z], () => d.Z.getCheck(l), [l]), x = 0 === t ? C.Z.Messages.GUILD_VERIFICATION_VOICE_HEADER : null, T = null, L = null;
  return (0 === t && (_ ? (T = C.Z.Messages.GUILD_VERIFICATION_VOICE_NOT_CLAIMED, L = C.Z.Messages.CLAIM_ACCOUNT) : N ? (T = C.Z.Messages.GUILD_VERIFICATION_VOICE_NOT_PHONE_VERIFIED, L = C.Z.Messages.VERIFY_PHONE) : I ? (T = C.Z.Messages.GUILD_VERIFICATION_VOICE_NOT_VERIFIED, L = C.Z.Messages.RESEND_VERIFICATION_EMAIL) : S ? (T = C.Z.Messages.GUILD_VERIFICATION_VOICE_MEMBER_AGE.format({
    min: p.YeM.MEMBER_AGE
  }), L = C.Z.Messages.OKAY) : Z && (T = C.Z.Messages.GUILD_VERIFICATION_VOICE_ACCOUNT_AGE.format({
    min: p.YeM.ACCOUNT_AGE
  }), L = C.Z.Messages.OKAY)), null == x || null == T) ? null : (0, s.jsxs)(a.Dialog, {
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
        children: T
      }), (0, s.jsxs)("div", {
        className: E.buttonContainer,
        children: [null != L ? (0, s.jsx)(a.Button, {
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
          children: L
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