"use strict";
n.r(t), n("47120");
var r = n("735250"),
  i = n("470079"),
  s = n("481060"),
  o = n("442837"),
  a = n("963202"),
  l = n("863249"),
  d = n("944163"),
  u = n("983736"),
  c = n("200305"),
  f = n("594174"),
  h = n("153124"),
  m = n("231467"),
  p = n("981631"),
  E = n("689938"),
  _ = n("209423");

function x(e) {
  let {
    guildId: t,
    formState: n,
    updateFormState: i
  } = e;
  return (0, r.jsxs)("div", {
    className: _.verificationForm,
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-xxl/normal",
      color: "header-primary",
      children: E.default.Messages.CLAN_DISCOVERY_PROFILE_TITLE
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: E.default.Messages.CLAN_DISCOVERY_PROFILE_SUBTITLE
    }), (0, r.jsx)(c.MemberVerificationFormRenderer, {
      guildId: t,
      formState: n,
      updateFormState: i
    })]
  })
}
t.default = function(e) {
  var t, n;
  let {
    clan: c,
    transitionState: v,
    onClose: N
  } = e, T = (0, h.useUID)(), I = (0, o.useStateFromStores)([d.default], () => d.default.get(c.id)), [R, F] = i.useState(null !== (n = null == I ? void 0 : I.formFields) && void 0 !== n ? n : []), C = (0, o.useStateFromStores)([f.default], () => f.default.getCurrentUser()), g = null == C ? void 0 : C.verified, P = null == C ? void 0 : C.isPhoneVerified(), {
    enableApplication: j
  } = (0, a.useClanPrePilotApplicationExperiment)("discovery");
  i.useEffect(() => {
    l.default.fetchVerificationForm(c.id)
  }, [c.id]), i.useEffect(() => {
    null != I && F(I.formFields)
  }, [I]);
  let O = i.useCallback(async e => {
      await l.default.submitVerificationForm(c.id, e)
    }, [c.id]),
    A = i.useCallback(async () => {
      await O({
        ...null != I ? I : d.NO_MEMBER_VERIFICATION_FORM,
        formFields: R
      }), N()
    }, [O, N, I, R]),
    y = !((null == I ? void 0 : null === (t = I.guild) || void 0 === t ? void 0 : t.verification_level) === p.VerificationLevels.VERY_HIGH ? P : g || P) || R.some(e => !(0, u.isValidFormResponse)(e));
  return (0, r.jsxs)(s.ModalRoot, {
    transitionState: v,
    "aria-labelledby": T,
    size: s.ModalSize.DYNAMIC,
    className: _.container,
    hideShadow: !0,
    children: [(0, r.jsxs)("div", {
      className: _.body,
      children: [(0, r.jsx)("div", {
        className: _.applicationContainer,
        children: (0, r.jsx)(s.ScrollerNone, {
          fade: !0,
          className: _.scroller,
          children: (0, r.jsx)(x, {
            guildId: c.id,
            formState: R,
            updateFormState: F
          })
        })
      }), (0, r.jsx)("div", {
        className: _.verticalRule
      }), (0, r.jsxs)("div", {
        className: _.clanContainer,
        children: [(0, r.jsx)(m.ClanDiscoveryCardView, {
          clan: c,
          className: _.card
        }), (0, r.jsx)(s.Tooltip, {
          text: E.default.Messages.CLAN_DISCOVERY_APPLICATION_DISABLED_TOOLTIP,
          shouldShow: !j,
          children: e => (0, r.jsx)(s.Button, {
            ...e,
            type: "submit",
            onClick: A,
            disabled: y || !j,
            children: E.default.Messages.APPLY
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: _.closeButtonContainer,
      children: (0, r.jsx)(s.Button, {
        onClick: N,
        look: s.ButtonLooks.OUTLINED,
        color: s.ButtonColors.PRIMARY,
        children: E.default.Messages.CLOSE
      })
    })]
  })
}