"use strict";
a.r(i), a("47120");
var l = a("735250"),
  s = a("470079"),
  t = a("481060"),
  d = a("442837"),
  r = a("863249"),
  n = a("944163"),
  o = a("983736"),
  c = a("200305"),
  u = a("594174"),
  f = a("153124"),
  m = a("231467"),
  v = a("981631"),
  h = a("689938"),
  C = a("825640");

function x(e) {
  let {
    guildId: i,
    formState: a,
    updateFormState: s
  } = e;
  return (0, l.jsxs)("div", {
    className: C.verificationForm,
    children: [(0, l.jsx)(t.Heading, {
      variant: "heading-xxl/normal",
      color: "header-primary",
      children: h.default.Messages.CLAN_DISCOVERY_PROFILE_TITLE
    }), (0, l.jsx)(t.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: h.default.Messages.CLAN_DISCOVERY_PROFILE_SUBTITLE
    }), (0, l.jsx)(c.MemberVerificationFormRenderer, {
      guildId: i,
      formState: a,
      updateFormState: s
    })]
  })
}
i.default = function(e) {
  var i, a;
  let {
    clan: c,
    transitionState: F,
    onClose: S
  } = e, j = (0, f.useUID)(), p = (0, d.useStateFromStores)([n.default], () => n.default.get(c.id)), [I, E] = s.useState(null !== (a = null == p ? void 0 : p.formFields) && void 0 !== a ? a : []), _ = (0, d.useStateFromStores)([u.default], () => u.default.getCurrentUser()), N = null == _ ? void 0 : _.verified, R = null == _ ? void 0 : _.isPhoneVerified();
  s.useEffect(() => {
    r.default.fetchVerificationForm(c.id)
  }, [c.id]), s.useEffect(() => {
    null != p && E(p.formFields)
  }, [p]);
  let b = s.useCallback(async e => {
      await r.default.submitVerificationForm(c.id, e)
    }, [c.id]),
    g = s.useCallback(async () => {
      await b({
        ...null != p ? p : n.NO_MEMBER_VERIFICATION_FORM,
        formFields: I
      }), S()
    }, [b, S, p, I]),
    M = !((null == p ? void 0 : null === (i = p.guild) || void 0 === i ? void 0 : i.verification_level) === v.VerificationLevels.VERY_HIGH ? R : N || R) || I.some(e => !(0, o.isValidFormResponse)(e));
  return (0, l.jsxs)(t.ModalRoot, {
    transitionState: F,
    "aria-labelledby": j,
    size: t.ModalSize.DYNAMIC,
    className: C.container,
    hideShadow: !0,
    children: [(0, l.jsxs)("div", {
      className: C.body,
      children: [(0, l.jsx)("div", {
        className: C.applicationContainer,
        children: (0, l.jsx)(x, {
          guildId: c.id,
          formState: I,
          updateFormState: E
        })
      }), (0, l.jsx)("div", {
        className: C.verticalRule
      }), (0, l.jsxs)("div", {
        className: C.clanContainer,
        children: [(0, l.jsx)(m.ClanDiscoveryCardView, {
          clan: c
        }), (0, l.jsx)(t.Button, {
          type: "submit",
          onClick: g,
          disabled: M,
          children: h.default.Messages.APPLY
        })]
      })]
    }), (0, l.jsx)("div", {
      className: C.closeButtonContainer,
      children: (0, l.jsx)(t.Button, {
        onClick: S,
        children: h.default.Messages.CLOSE
      })
    })]
  })
}