"use strict";
n.r(t), n("47120");
var r = n("735250"),
  i = n("470079"),
  s = n("194048"),
  a = n("481060"),
  l = n("442837"),
  o = n("963202"),
  d = n("863249"),
  u = n("944163"),
  c = n("246364"),
  h = n("983736"),
  f = n("937111"),
  m = n("200305"),
  p = n("271383"),
  x = n("594174"),
  E = n("153124"),
  v = n("231467"),
  _ = n("981631"),
  N = n("308083"),
  I = n("689938"),
  T = n("209423");

function R(e) {
  let {
    guildId: t,
    formState: n,
    updateFormState: i
  } = e;
  return (0, r.jsxs)("div", {
    className: T.verificationForm,
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-xxl/normal",
      color: "header-primary",
      children: I.default.Messages.CLAN_DISCOVERY_PROFILE_TITLE
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: I.default.Messages.CLAN_DISCOVERY_PROFILE_SUBTITLE
    }), (0, r.jsx)(m.MemberVerificationFormRenderer, {
      guildId: t,
      formState: n,
      updateFormState: i
    })]
  })
}
t.default = function(e) {
  var t, n, m, C;
  let {
    clan: g,
    prioritizedGameIds: F,
    transitionState: A,
    onClose: j
  } = e, P = (0, E.useUID)(), M = (0, l.useStateFromStores)([u.default], () => u.default.get(g.id)), [O, y] = i.useState(null !== (m = null == M ? void 0 : M.formFields) && void 0 !== m ? m : []), S = (0, l.useStateFromStores)([x.default], () => x.default.getCurrentUser()), b = (0, l.useStateFromStores)([p.default], () => p.default.isMember(g.id, null == S ? void 0 : S.id), [g, S]), V = (0, l.useStateFromStores)([f.default], () => {
    var e;
    return (null === (e = f.default.getRequest(g.id)) || void 0 === e ? void 0 : e.applicationStatus) === c.GuildJoinRequestApplicationStatuses.SUBMITTED
  }), w = null == S ? void 0 : S.verified, L = null == S ? void 0 : S.isPhoneVerified(), [H, B] = i.useState(""), {
    enableApplication: D
  } = (0, o.useClanPrePilotApplicationExperiment)("discovery");
  i.useEffect(() => {
    d.default.fetchVerificationForm(g.id)
  }, [g.id]), i.useEffect(() => {
    null != M && y(M.formFields)
  }, [M]);
  let k = i.useCallback(async e => {
      await d.default.submitVerificationForm(g.id, e)
    }, [g.id]),
    U = i.useCallback(async () => {
      try {
        await k({
          ...null != M ? M : u.NO_MEMBER_VERIFICATION_FORM,
          formFields: O
        }), j()
      } catch (e) {
        B(null == e ? void 0 : e.message)
      }
    }, [k, j, M, O]),
    q = !((null == M ? void 0 : null === (t = M.guild) || void 0 === t ? void 0 : t.verification_level) === _.VerificationLevels.VERY_HIGH ? L : w || L) || O.some(e => !(0, h.isValidFormResponse)(e)),
    Y = (null !== (C = null == M ? void 0 : null === (n = M.guild) || void 0 === n ? void 0 : n.approximate_member_count) && void 0 !== C ? C : 0) >= N.MAX_CLAN_MEMBERS;
  return (0, r.jsxs)(a.ModalRoot, {
    transitionState: A,
    "aria-labelledby": P,
    size: a.ModalSize.DYNAMIC,
    className: T.container,
    hideShadow: !0,
    children: [(0, r.jsxs)("div", {
      className: T.body,
      children: [(0, r.jsx)("div", {
        className: T.applicationContainer,
        children: (0, r.jsx)(a.ScrollerNone, {
          fade: !0,
          className: T.scroller,
          children: (0, r.jsx)(R, {
            guildId: g.id,
            formState: O,
            updateFormState: y
          })
        })
      }), (0, r.jsx)("div", {
        className: T.verticalRule
      }), (0, r.jsxs)("div", {
        className: T.clanContainer,
        children: [(0, r.jsx)(v.ClanDiscoveryCardView, {
          clan: g,
          className: T.profileCard,
          prioritizedGameIds: F,
          expanded: !0,
          isMember: b,
          hasPendingJoinRequest: V,
          atMaxMemberCapacity: Y
        }), (0, r.jsx)(a.Tooltip, {
          text: I.default.Messages.CLAN_DISCOVERY_APPLICATION_DISABLED_TOOLTIP,
          shouldShow: !D,
          children: e => (0, r.jsxs)("div", {
            className: T.applyButtonContainer,
            children: [(0, r.jsxs)(a.Button, {
              ...e,
              type: "submit",
              onClick: U,
              fullWidth: !0,
              disabled: q || !D || null == M,
              innerClassName: T.applyButtonInner,
              children: [Y && (0, r.jsx)(s.WarningIcon, {
                color: "white",
                width: 20,
                height: 20
              }), I.default.Messages.APPLY]
            }), "" !== H && (0, r.jsx)(a.Text, {
              variant: "text-sm/normal",
              color: "text-danger",
              children: H
            })]
          })
        }), Y && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.Text, {
            variant: "text-xs/medium",
            color: "text-warning",
            className: T.maxCapacityText,
            children: I.default.Messages.CLAN_DISCOVERY_APPLICATION_MAX_MEMBERS
          }), (0, r.jsx)("hr", {
            className: T.separator
          })]
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: T.noticeText,
          children: I.default.Messages.CLAN_APPLICATION_GDM_CONSENT
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: T.noticeText,
          children: I.default.Messages.MEMBER_VERIFICATION_WARNING
        })]
      })]
    }), (0, r.jsx)("div", {
      className: T.closeButtonContainer,
      children: (0, r.jsx)(a.Button, {
        onClick: j,
        look: a.ButtonLooks.OUTLINED,
        color: a.ButtonColors.PRIMARY,
        children: I.default.Messages.CLOSE
      })
    })]
  })
}