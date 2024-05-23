"use strict";
n.r(t), n("47120");
var r = n("735250"),
  i = n("470079"),
  s = n("481060"),
  a = n("442837"),
  o = n("963202"),
  l = n("863249"),
  d = n("944163"),
  u = n("983736"),
  c = n("200305"),
  h = n("594174"),
  f = n("153124"),
  m = n("231467"),
  p = n("981631"),
  E = n("689938"),
  x = n("209423");

function _(e) {
  let {
    guildId: t,
    formState: n,
    updateFormState: i
  } = e;
  return (0, r.jsxs)("div", {
    className: x.verificationForm,
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
    prioritizedGameIds: v,
    transitionState: N,
    onClose: T
  } = e, I = (0, f.useUID)(), R = (0, a.useStateFromStores)([d.default], () => d.default.get(c.id)), [C, F] = i.useState(null !== (n = null == R ? void 0 : R.formFields) && void 0 !== n ? n : []), g = (0, a.useStateFromStores)([h.default], () => h.default.getCurrentUser()), P = null == g ? void 0 : g.verified, j = null == g ? void 0 : g.isPhoneVerified(), [O, A] = i.useState(""), {
    enableApplication: y
  } = (0, o.useClanPrePilotApplicationExperiment)("discovery");
  i.useEffect(() => {
    l.default.fetchVerificationForm(c.id)
  }, [c.id]), i.useEffect(() => {
    null != R && F(R.formFields)
  }, [R]);
  let b = i.useCallback(async e => {
      await l.default.submitVerificationForm(c.id, e)
    }, [c.id]),
    M = i.useCallback(async () => {
      try {
        await b({
          ...null != R ? R : d.NO_MEMBER_VERIFICATION_FORM,
          formFields: C
        }), T()
      } catch (e) {
        A(null == e ? void 0 : e.message)
      }
    }, [b, T, R, C]),
    S = !((null == R ? void 0 : null === (t = R.guild) || void 0 === t ? void 0 : t.verification_level) === p.VerificationLevels.VERY_HIGH ? j : P || j) || C.some(e => !(0, u.isValidFormResponse)(e));
  return (0, r.jsxs)(s.ModalRoot, {
    transitionState: N,
    "aria-labelledby": I,
    size: s.ModalSize.DYNAMIC,
    className: x.container,
    hideShadow: !0,
    children: [(0, r.jsxs)("div", {
      className: x.body,
      children: [(0, r.jsx)("div", {
        className: x.applicationContainer,
        children: (0, r.jsx)(s.ScrollerNone, {
          fade: !0,
          className: x.scroller,
          children: (0, r.jsx)(_, {
            guildId: c.id,
            formState: C,
            updateFormState: F
          })
        })
      }), (0, r.jsx)("div", {
        className: x.verticalRule
      }), (0, r.jsxs)("div", {
        className: x.clanContainer,
        children: [(0, r.jsx)(m.ClanDiscoveryCardView, {
          clan: c,
          className: x.card,
          prioritizedGameIds: v,
          expanded: !0
        }), (0, r.jsx)(s.Tooltip, {
          text: E.default.Messages.CLAN_DISCOVERY_APPLICATION_DISABLED_TOOLTIP,
          shouldShow: !y,
          children: e => (0, r.jsxs)("div", {
            className: x.applyButtonContainer,
            children: [(0, r.jsx)(s.Button, {
              ...e,
              type: "submit",
              onClick: M,
              fullWidth: !0,
              disabled: S || !y,
              children: E.default.Messages.APPLY
            }), "" !== O && (0, r.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-danger",
              children: O
            })]
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: x.closeButtonContainer,
      children: (0, r.jsx)(s.Button, {
        onClick: T,
        look: s.ButtonLooks.OUTLINED,
        color: s.ButtonColors.PRIMARY,
        children: E.default.Messages.CLOSE
      })
    })]
  })
}