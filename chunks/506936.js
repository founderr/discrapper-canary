n.d(t, {
  R: function() {
    return l
  }
});
var i, l, r = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  o = n(893776),
  c = n(391650),
  u = n(144114),
  d = n(607744),
  h = n(594174),
  p = n(153124),
  f = n(981631),
  _ = n(815660),
  g = n(689938),
  m = n(319081);
(i = l || (l = {}))[i.VOICE = 0] = "VOICE";
t.Z = e => {
  let {
    type: t,
    guildId: i,
    closePopout: l
  } = e, C = (0, p.Dt)(), {
    notClaimed: I,
    notEmailVerified: E,
    notPhoneVerified: N,
    newAccount: x,
    newMember: S
  } = (0, a.e7)([d.Z], () => d.Z.getCheck(i), [i]), Z = 0 === t ? g.Z.Messages.GUILD_VERIFICATION_VOICE_HEADER : null, v = null, T = null;
  return (0 === t && (I ? (v = g.Z.Messages.GUILD_VERIFICATION_VOICE_NOT_CLAIMED, T = g.Z.Messages.CLAIM_ACCOUNT) : N ? (v = g.Z.Messages.GUILD_VERIFICATION_VOICE_NOT_PHONE_VERIFIED, T = g.Z.Messages.VERIFY_PHONE) : E ? (v = g.Z.Messages.GUILD_VERIFICATION_VOICE_NOT_VERIFIED, T = g.Z.Messages.RESEND_VERIFICATION_EMAIL) : S ? (v = g.Z.Messages.GUILD_VERIFICATION_VOICE_MEMBER_AGE.format({
    min: f.YeM.MEMBER_AGE
  }), T = g.Z.Messages.OKAY) : x && (v = g.Z.Messages.GUILD_VERIFICATION_VOICE_ACCOUNT_AGE.format({
    min: f.YeM.ACCOUNT_AGE
  }), T = g.Z.Messages.OKAY)), null == Z || null == v) ? null : (0, r.jsxs)(s.Dialog, {
    className: m.container,
    "aria-labelledby": C,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: m.image,
      src: n(64395)
    }), (0, r.jsxs)("div", {
      className: m.content,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        id: C,
        children: Z
      }), (0, r.jsx)(s.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: v
      }), (0, r.jsxs)("div", {
        className: m.buttonContainer,
        children: [null != T ? (0, r.jsx)(s.Button, {
          onClick: () => {
            I ? c.j() : N ? (0, s.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("76540"), n.e("21518")]).then(n.bind(n, 607018));
              return t => (0, r.jsx)(e, {
                reason: u.L.GUILD_PHONE_REQUIRED,
                ...t
              })
            }, {
              modalKey: _.M
            }) : E && (o.Z.verifyResend(), (0, s.openModal)(e => {
              var t;
              return (0, r.jsx)(s.ConfirmModal, {
                header: g.Z.Messages.VERIFICATION_EMAIL_TITLE,
                confirmText: g.Z.Messages.OKAY,
                confirmButtonColor: s.Button.Colors.BRAND,
                ...e,
                children: (0, r.jsx)(s.Text, {
                  variant: "text-md/normal",
                  children: g.Z.Messages.VERIFICATION_EMAIL_BODY.format({
                    email: null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.email
                  })
                })
              })
            })), l()
          },
          className: m.primaryButton,
          children: T
        }) : null, I || N || E ? (0, r.jsx)(s.Button, {
          onClick: l,
          look: s.Button.Looks.BLANK,
          className: m.cancel,
          children: g.Z.Messages.NEVERMIND
        }) : null]
      })]
    })]
  })
}