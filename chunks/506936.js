"use strict";
n.r(t), n.d(t, {
  GuildVerificationPopoutTypes: function() {
    return a
  }
});
var l, a, s = n("735250");
n("470079");
var i = n("442837"),
  r = n("481060"),
  o = n("893776"),
  u = n("391650"),
  d = n("144114"),
  c = n("607744"),
  f = n("594174"),
  h = n("153124"),
  m = n("981631"),
  C = n("815660"),
  p = n("689938"),
  g = n("227960");
(l = a || (a = {}))[l.VOICE = 0] = "VOICE";
t.default = e => {
  let {
    type: t,
    guildId: l,
    closePopout: a
  } = e, E = (0, h.useUID)(), {
    notClaimed: _,
    notEmailVerified: S,
    notPhoneVerified: I,
    newAccount: N,
    newMember: T
  } = (0, i.useStateFromStores)([c.default], () => c.default.getCheck(l), [l]), A = 0 === t ? p.default.Messages.GUILD_VERIFICATION_VOICE_HEADER : null, L = null, v = null;
  return (0 === t && (_ ? (L = p.default.Messages.GUILD_VERIFICATION_VOICE_NOT_CLAIMED, v = p.default.Messages.CLAIM_ACCOUNT) : I ? (L = p.default.Messages.GUILD_VERIFICATION_VOICE_NOT_PHONE_VERIFIED, v = p.default.Messages.VERIFY_PHONE) : S ? (L = p.default.Messages.GUILD_VERIFICATION_VOICE_NOT_VERIFIED, v = p.default.Messages.RESEND_VERIFICATION_EMAIL) : T ? (L = p.default.Messages.GUILD_VERIFICATION_VOICE_MEMBER_AGE.format({
    min: m.VerificationCriteria.MEMBER_AGE
  }), v = p.default.Messages.OKAY) : N && (L = p.default.Messages.GUILD_VERIFICATION_VOICE_ACCOUNT_AGE.format({
    min: m.VerificationCriteria.ACCOUNT_AGE
  }), v = p.default.Messages.OKAY)), null == A || null == L) ? null : (0, s.jsxs)(r.Dialog, {
    className: g.container,
    "aria-labelledby": E,
    children: [(0, s.jsx)("img", {
      alt: "",
      className: g.image,
      src: n("64395")
    }), (0, s.jsxs)("div", {
      className: g.content,
      children: [(0, s.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        id: E,
        children: A
      }), (0, s.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: L
      }), (0, s.jsxs)("div", {
        className: g.buttonContainer,
        children: [null != v ? (0, s.jsx)(r.Button, {
          onClick: () => {
            _ ? u.openClaimAccountModal() : I ? (0, r.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("49237"), n.e("99387"), n.e("76540"), n.e("7954")]).then(n.bind(n, "607018"));
              return t => (0, s.jsx)(e, {
                reason: d.ChangePhoneReason.GUILD_PHONE_REQUIRED,
                ...t
              })
            }, {
              modalKey: C.PHONE_VERIFICATION_MODAL_KEY
            }) : S && (o.default.verifyResend(), (0, r.openModal)(e => {
              var t;
              return (0, s.jsx)(r.ConfirmModal, {
                header: p.default.Messages.VERIFICATION_EMAIL_TITLE,
                confirmText: p.default.Messages.OKAY,
                confirmButtonColor: r.Button.Colors.BRAND,
                ...e,
                children: (0, s.jsx)(r.Text, {
                  variant: "text-md/normal",
                  children: p.default.Messages.VERIFICATION_EMAIL_BODY.format({
                    email: null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.email
                  })
                })
              })
            })), a()
          },
          className: g.primaryButton,
          children: v
        }) : null, _ || I || S ? (0, s.jsx)(r.Button, {
          onClick: a,
          look: r.Button.Looks.BLANK,
          className: g.cancel,
          children: p.default.Messages.NEVERMIND
        }) : null]
      })]
    })]
  })
}