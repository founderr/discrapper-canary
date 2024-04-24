"use strict";
t.r(n), t("47120");
var r = t("735250"),
  i = t("470079"),
  s = t("481060"),
  a = t("442837"),
  o = t("863249"),
  l = t("944163"),
  d = t("983736"),
  u = t("200305"),
  c = t("594174"),
  f = t("153124"),
  h = t("231467"),
  m = t("981631"),
  p = t("689938"),
  E = t("825640");

function _(e) {
  let {
    guildId: n,
    formState: t,
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
      guildId: n,
      formState: t,
      updateFormState: i
    })]
  })
}
n.default = function(e) {
  var n, t;
  let {
    clan: u,
    transitionState: x,
    onClose: v
  } = e, N = (0, f.useUID)(), R = (0, a.useStateFromStores)([l.default], () => l.default.get(u.id)), [F, T] = i.useState(null !== (t = null == R ? void 0 : R.formFields) && void 0 !== t ? t : []), C = (0, a.useStateFromStores)([c.default], () => c.default.getCurrentUser()), I = null == C ? void 0 : C.verified, g = null == C ? void 0 : C.isPhoneVerified();
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
    O = !((null == R ? void 0 : null === (n = R.guild) || void 0 === n ? void 0 : n.verification_level) === m.VerificationLevels.VERY_HIGH ? g : I || g) || F.some(e => !(0, d.isValidFormResponse)(e));
  return (0, r.jsxs)(s.ModalRoot, {
    transitionState: x,
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
          children: (0, r.jsx)(_, {
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