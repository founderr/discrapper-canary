"use strict";
n.r(t), n("47120");
var r = n("735250"),
  i = n("470079"),
  s = n("481060"),
  a = n("442837"),
  o = n("863249"),
  l = n("944163"),
  d = n("983736"),
  u = n("200305"),
  c = n("594174"),
  f = n("153124"),
  h = n("231467"),
  m = n("981631"),
  p = n("689938"),
  E = n("461456");

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
    }), (0, r.jsx)(u.MemberVerificationFormRenderer, {
      guildId: t,
      formState: n,
      updateFormState: i
    })]
  })
}
t.default = function(e) {
  var t, n;
  let {
    clan: u,
    transitionState: _,
    onClose: v
  } = e, N = (0, f.useUID)(), R = (0, a.useStateFromStores)([l.default], () => l.default.get(u.id)), [F, T] = i.useState(null !== (n = null == R ? void 0 : R.formFields) && void 0 !== n ? n : []), I = (0, a.useStateFromStores)([c.default], () => c.default.getCurrentUser()), C = null == I ? void 0 : I.verified, g = null == I ? void 0 : I.isPhoneVerified();
  i.useEffect(() => {
    o.default.fetchVerificationForm(u.id)
  }, [u.id]), i.useEffect(() => {
    null != R && T(R.formFields)
  }, [R]);
  let j = i.useCallback(async e => {
      await o.default.submitVerificationForm(u.id, e)
    }, [u.id]),
    P = i.useCallback(async () => {
      await j({
        ...null != R ? R : l.NO_MEMBER_VERIFICATION_FORM,
        formFields: F
      }), v()
    }, [j, v, R, F]),
    O = !((null == R ? void 0 : null === (t = R.guild) || void 0 === t ? void 0 : t.verification_level) === m.VerificationLevels.VERY_HIGH ? g : C || g) || F.some(e => !(0, d.isValidFormResponse)(e));
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
            guildId: u.id,
            formState: F,
            updateFormState: T
          })
        })
      }), (0, r.jsx)("div", {
        className: E.verticalRule
      }), (0, r.jsxs)("div", {
        className: E.clanContainer,
        children: [(0, r.jsx)(h.ClanDiscoveryCardView, {
          clan: u,
          className: E.card,
          expanded: !0
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