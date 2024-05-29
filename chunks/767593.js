"use strict";
n.r(t), n("47120");
var r = n("735250"),
  i = n("470079"),
  a = n("920906"),
  s = n("194048"),
  l = n("481060"),
  o = n("442837"),
  d = n("607070"),
  u = n("963202"),
  c = n("863249"),
  f = n("944163"),
  m = n("246364"),
  h = n("983736"),
  p = n("937111"),
  x = n("200305"),
  E = n("271383"),
  v = n("594174"),
  _ = n("153124"),
  N = n("231467"),
  I = n("981631"),
  T = n("308083"),
  R = n("689938"),
  C = n("209423");
let g = {
  mass: 1,
  tension: 600,
  friction: 60
};

function F(e) {
  let {
    guildId: t,
    formState: n,
    updateFormState: i
  } = e;
  return (0, r.jsxs)("div", {
    className: C.verificationForm,
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-xxl/normal",
      color: "header-primary",
      children: R.default.Messages.CLAN_DISCOVERY_PROFILE_TITLE
    }), (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: R.default.Messages.CLAN_DISCOVERY_PROFILE_SUBTITLE
    }), (0, r.jsx)(x.MemberVerificationFormRenderer, {
      guildId: t,
      formState: n,
      updateFormState: i
    })]
  })
}
t.default = function(e) {
  var t, n, x, A;
  let {
    clan: j,
    prioritizedGameIds: P,
    transitionState: M,
    onClose: O
  } = e, y = (0, _.useUID)(), S = (0, o.useStateFromStores)([f.default], () => f.default.get(j.id)), [b, V] = i.useState(null !== (x = null == S ? void 0 : S.formFields) && void 0 !== x ? x : []), w = (0, o.useStateFromStores)([v.default], () => v.default.getCurrentUser()), L = (0, o.useStateFromStores)([E.default], () => E.default.isMember(j.id, null == w ? void 0 : w.id), [j, w]), H = (0, o.useStateFromStores)([p.default], () => {
    var e;
    return (null === (e = p.default.getRequest(j.id)) || void 0 === e ? void 0 : e.applicationStatus) === m.GuildJoinRequestApplicationStatuses.SUBMITTED
  }), B = null == w ? void 0 : w.verified, D = null == w ? void 0 : w.isPhoneVerified(), [k, U] = i.useState(""), {
    enableApplication: Y
  } = (0, u.useClanPrePilotApplicationExperiment)("discovery");
  i.useEffect(() => {
    c.default.fetchVerificationForm(j.id)
  }, [j.id]), i.useEffect(() => {
    null != S && V(S.formFields)
  }, [S]);
  let q = i.useCallback(async e => {
      await c.default.submitVerificationForm(j.id, e)
    }, [j.id]),
    G = i.useCallback(async () => {
      try {
        await q({
          ...null != S ? S : f.NO_MEMBER_VERIFICATION_FORM,
          formFields: b
        }), O()
      } catch (e) {
        U(null == e ? void 0 : e.message)
      }
    }, [q, O, S, b]),
    z = !((null == S ? void 0 : null === (t = S.guild) || void 0 === t ? void 0 : t.verification_level) === I.VerificationLevels.VERY_HIGH ? D : B || D) || b.some(e => !(0, h.isValidFormResponse)(e)),
    W = (null !== (A = null == S ? void 0 : null === (n = S.guild) || void 0 === n ? void 0 : n.approximate_member_count) && void 0 !== A ? A : 0) >= T.MAX_CLAN_MEMBERS,
    Q = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion),
    Z = (0, a.useSpring)({
      from: {
        opacity: 0,
        transform: "translateY(".concat(Q ? 0 : 40, "px)")
      },
      to: {
        opacity: 1,
        transform: "translateY(0px)"
      },
      config: g,
      delay: 500
    });
  return (0, r.jsxs)(l.ModalRoot, {
    transitionState: M,
    "aria-labelledby": y,
    size: l.ModalSize.DYNAMIC,
    className: C.container,
    hideShadow: !0,
    children: [(0, r.jsxs)(a.animated.div, {
      className: C.body,
      style: Z,
      children: [(0, r.jsx)("div", {
        className: C.applicationContainer,
        children: (0, r.jsx)(l.ScrollerNone, {
          fade: !0,
          className: C.scroller,
          children: (0, r.jsx)(F, {
            guildId: j.id,
            formState: b,
            updateFormState: V
          })
        })
      }), (0, r.jsx)("div", {
        className: C.verticalRule
      }), (0, r.jsxs)("div", {
        className: C.clanContainer,
        children: [(0, r.jsx)(N.ClanDiscoveryCardView, {
          clan: j,
          className: C.profileCard,
          prioritizedGameIds: P,
          expanded: !0,
          isMember: L,
          hasPendingJoinRequest: H,
          atMaxMemberCapacity: W
        }), (0, r.jsx)(l.Tooltip, {
          text: R.default.Messages.CLAN_DISCOVERY_APPLICATION_DISABLED_TOOLTIP,
          shouldShow: !Y,
          children: e => (0, r.jsxs)("div", {
            className: C.applyButtonContainer,
            children: [(0, r.jsxs)(l.Button, {
              ...e,
              type: "submit",
              onClick: G,
              fullWidth: !0,
              disabled: z || !Y || null == S,
              innerClassName: C.applyButtonInner,
              children: [W && (0, r.jsx)(s.WarningIcon, {
                color: "white",
                width: 20,
                height: 20
              }), R.default.Messages.APPLY]
            }), "" !== k && (0, r.jsx)(l.Text, {
              variant: "text-sm/normal",
              color: "text-danger",
              children: k
            })]
          })
        }), W && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(l.Text, {
            variant: "text-xs/medium",
            color: "text-warning",
            className: C.maxCapacityText,
            children: R.default.Messages.CLAN_DISCOVERY_APPLICATION_MAX_MEMBERS
          }), (0, r.jsx)("hr", {
            className: C.separator
          })]
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: C.noticeText,
          children: R.default.Messages.CLAN_APPLICATION_GDM_CONSENT
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: C.noticeText,
          children: R.default.Messages.MEMBER_VERIFICATION_WARNING
        })]
      })]
    }), (0, r.jsx)("div", {
      className: C.closeButtonContainer,
      children: (0, r.jsx)(l.Button, {
        onClick: O,
        look: l.ButtonLooks.OUTLINED,
        color: l.ButtonColors.PRIMARY,
        children: R.default.Messages.CLOSE
      })
    })]
  })
}