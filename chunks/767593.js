"use strict";
n.r(t), n("47120");
var r = n("735250"),
  i = n("470079"),
  s = n("481060"),
  o = n("442837"),
  a = n("863249"),
  l = n("944163"),
  u = n("983736"),
  d = n("200305"),
  c = n("594174"),
  f = n("153124"),
  h = n("231467"),
  m = n("981631"),
  p = n("689938"),
  E = n("209423");

function x(e) {
  let {
    guildId: t,
    formState: n,
    updateFormState: i
  } = e;
  return (0, r.jsxs)("div", {
    className: E.verificationForm,
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-xxl/normal",
      color: "header-primary",
      children: p.default.Messages.CLAN_DISCOVERY_PROFILE_TITLE
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: p.default.Messages.CLAN_DISCOVERY_PROFILE_SUBTITLE
    }), (0, r.jsx)(d.MemberVerificationFormRenderer, {
      guildId: t,
      formState: n,
      updateFormState: i
    })]
  })
}
t.default = function(e) {
  var t, n;
  let {
    clan: d,
    transitionState: _,
    onClose: v
  } = e, N = (0, f.useUID)(), R = (0, o.useStateFromStores)([l.default], () => l.default.get(d.id)), [F, T] = i.useState(null !== (n = null == R ? void 0 : R.formFields) && void 0 !== n ? n : []), I = (0, o.useStateFromStores)([c.default], () => c.default.getCurrentUser()), C = null == I ? void 0 : I.verified, g = null == I ? void 0 : I.isPhoneVerified();
  i.useEffect(() => {
    a.default.fetchVerificationForm(d.id)
  }, [d.id]), i.useEffect(() => {
    null != R && T(R.formFields)
  }, [R]);
  let j = i.useCallback(async e => {
      await a.default.submitVerificationForm(d.id, e)
    }, [d.id]),
    P = i.useCallback(async () => {
      await j({
        ...null != R ? R : l.NO_MEMBER_VERIFICATION_FORM,
        formFields: F
      }), v()
    }, [j, v, R, F]),
    O = !((null == R ? void 0 : null === (t = R.guild) || void 0 === t ? void 0 : t.verification_level) === m.VerificationLevels.VERY_HIGH ? g : C || g) || F.some(e => !(0, u.isValidFormResponse)(e));
  return (0, r.jsxs)(s.ModalRoot, {
    transitionState: _,
    "aria-labelledby": N,
    size: s.ModalSize.DYNAMIC,
    className: E.container,
    hideShadow: !0,
    children: [(0, r.jsxs)("div", {
      className: E.body,
      children: [(0, r.jsx)("div", {
        className: E.applicationContainer,
        children: (0, r.jsx)(s.ScrollerNone, {
          fade: !0,
          className: E.scroller,
          children: (0, r.jsx)(x, {
            guildId: d.id,
            formState: F,
            updateFormState: T
          })
        })
      }), (0, r.jsx)("div", {
        className: E.verticalRule
      }), (0, r.jsxs)("div", {
        className: E.clanContainer,
        children: [(0, r.jsx)(h.ClanDiscoveryCardView, {
          clan: d,
          className: E.card
        }), (0, r.jsx)(s.Button, {
          type: "submit",
          onClick: P,
          disabled: O,
          children: p.default.Messages.APPLY
        })]
      })]
    }), (0, r.jsx)("div", {
      className: E.closeButtonContainer,
      children: (0, r.jsx)(s.Button, {
        onClick: v,
        look: s.ButtonLooks.OUTLINED,
        color: s.ButtonColors.PRIMARY,
        children: p.default.Messages.CLOSE
      })
    })]
  })
}