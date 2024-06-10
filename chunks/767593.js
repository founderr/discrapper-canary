"use strict";
n.r(t), n("47120"), n("653041");
var r = n("735250"),
  a = n("470079"),
  i = n("920906"),
  s = n("194048"),
  o = n("481060"),
  l = n("442837"),
  u = n("607070"),
  d = n("963202"),
  c = n("863249"),
  h = n("944163"),
  f = n("246364"),
  m = n("983736"),
  p = n("937111"),
  x = n("200305"),
  E = n("271383"),
  v = n("594174"),
  _ = n("153124"),
  N = n("231467"),
  R = n("981631"),
  T = n("308083"),
  I = n("689938"),
  g = n("209423");
let C = {
    mass: 1,
    tension: 600,
    friction: 60
  },
  F = [{
    position: 0,
    alpha: 0
  }, {
    position: .19,
    alpha: .262
  }, {
    position: .34,
    alpha: .459
  }, {
    position: .47,
    alpha: .618
  }, {
    position: .57,
    alpha: .722
  }, {
    position: .65,
    alpha: .806
  }, {
    position: .73,
    alpha: .874
  }, {
    position: .8,
    alpha: .925
  }, {
    position: .86,
    alpha: .958
  }, {
    position: .91,
    alpha: .979
  }, {
    position: .95,
    alpha: .992
  }, {
    position: .98,
    alpha: .998
  }, {
    position: 1,
    alpha: 1
  }];

function j(e) {
  let {
    children: t,
    containerRef: n,
    faderSize: i,
    faderEdgeThreshold: s
  } = e, l = a.useRef(null), [u, d] = a.useState(0), [c, h] = a.useState(0), [f, m] = a.useState(0), p = a.useCallback(() => {
    null != l.current && (d(l.current.getDistanceFromTop()), h(l.current.getDistanceFromBottom()), m(l.current.getScrollerState().offsetHeight))
  }, []);
  a.useEffect(() => {
    if (p(), null == n.current) return;
    let e = new ResizeObserver(() => {
      p()
    });
    return e.observe(n.current), () => {
      e.disconnect()
    }
  }, [l, n, p]);
  let x = a.useMemo(() => {
    if (0 === u && 0 === c) return {};
    let e = [];
    if (e.push("to bottom"), u > 0) {
      let t = s > 0 ? 1 - Math.min(s, u) / s : 1;
      for (let n = 0; n < F.length; n++) {
        let {
          position: r,
          alpha: a
        } = F[n], s = (r * i).toFixed(2);
        e.push("hsla(0, 0%, 0%, ".concat(t + a * (1 - t), ") ").concat(s, "px"))
      }
    }
    if (c > 0) {
      let t = f - i,
        n = s > 0 ? 1 - Math.min(s, c) / s : 1;
      for (let r = F.length - 1; r >= 0; r--) {
        let {
          position: a,
          alpha: s
        } = F[r], o = (t + (1 - a) * i).toFixed(2);
        e.push("hsla(0, 0%, 0%, ".concat(n + s * (1 - n), ") ").concat(o, "px"))
      }
    }
    return {
      maskImage: "linear-gradient(".concat(e.join(","), ")")
    }
  }, [c, u, s, i, f]);
  return (0, r.jsx)(o.AdvancedScrollerNone, {
    ref: l,
    style: x,
    className: g.scroller,
    onScroll: p,
    children: t
  })
}

function A(e) {
  let {
    guildId: t,
    formState: n,
    updateFormState: a
  } = e;
  return (0, r.jsxs)("div", {
    className: g.verificationForm,
    children: [(0, r.jsx)(o.Heading, {
      variant: "heading-xxl/normal",
      color: "header-primary",
      children: I.default.Messages.CLAN_DISCOVERY_PROFILE_TITLE
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: I.default.Messages.CLAN_DISCOVERY_PROFILE_SUBTITLE
    }), (0, r.jsx)(x.MemberVerificationFormRenderer, {
      guildId: t,
      formState: n,
      updateFormState: a
    })]
  })
}
t.default = function(e) {
  var t, n, x, F;
  let {
    clan: M,
    prioritizedGameIds: P,
    transitionState: O,
    onClose: S
  } = e, y = (0, _.useUID)(), b = (0, l.useStateFromStores)([h.default], () => h.default.get(M.id)), [w, V] = a.useState(null !== (x = null == b ? void 0 : b.formFields) && void 0 !== x ? x : []), L = (0, l.useStateFromStores)([v.default], () => v.default.getCurrentUser()), H = (0, l.useStateFromStores)([E.default], () => E.default.isMember(M.id, null == L ? void 0 : L.id), [M, L]), B = (0, l.useStateFromStores)([p.default], () => {
    var e;
    return (null === (e = p.default.getRequest(M.id)) || void 0 === e ? void 0 : e.applicationStatus) === f.GuildJoinRequestApplicationStatuses.SUBMITTED
  }), D = null == L ? void 0 : L.verified, k = null == L ? void 0 : L.isPhoneVerified(), [U, Y] = a.useState(""), {
    enableApplication: q
  } = (0, d.useClanPrePilotApplicationExperiment)("discovery");
  a.useEffect(() => {
    c.default.fetchVerificationForm(M.id)
  }, [M.id]), a.useEffect(() => {
    null != b && V(b.formFields)
  }, [b]);
  let G = a.useCallback(async e => {
      await c.default.submitVerificationForm(M.id, e)
    }, [M.id]),
    z = a.useCallback(async () => {
      try {
        await G({
          ...null != b ? b : h.NO_MEMBER_VERIFICATION_FORM,
          formFields: w
        }), S()
      } catch (e) {
        Y(null == e ? void 0 : e.message)
      }
    }, [G, S, b, w]),
    W = !((null == b ? void 0 : null === (t = b.guild) || void 0 === t ? void 0 : t.verification_level) === R.VerificationLevels.VERY_HIGH ? k : D || k) || w.some(e => !(0, m.isValidFormResponse)(e)),
    Q = (null !== (F = null == b ? void 0 : null === (n = b.guild) || void 0 === n ? void 0 : n.approximate_member_count) && void 0 !== F ? F : 0) >= T.MAX_CLAN_MEMBERS,
    Z = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion),
    X = (0, i.useSpring)({
      from: {
        opacity: 0,
        transform: "translateY(".concat(Z ? 0 : 40, "px)")
      },
      to: {
        opacity: 1,
        transform: "translateY(0px)"
      },
      config: C,
      delay: 500
    }),
    K = a.useRef(null);
  return (0, r.jsxs)(o.ModalRoot, {
    transitionState: O,
    "aria-labelledby": y,
    size: o.ModalSize.DYNAMIC,
    className: g.container,
    hideShadow: !0,
    children: [(0, r.jsxs)(i.animated.div, {
      className: g.body,
      style: X,
      children: [(0, r.jsx)("div", {
        className: g.applicationContainer,
        ref: K,
        children: (0, r.jsx)(j, {
          containerRef: K,
          faderSize: 180,
          faderEdgeThreshold: 48,
          children: (0, r.jsx)(A, {
            guildId: M.id,
            formState: w,
            updateFormState: V
          })
        })
      }), (0, r.jsx)("div", {
        className: g.verticalRule
      }), (0, r.jsxs)("div", {
        className: g.clanContainer,
        children: [(0, r.jsx)(N.ClanDiscoveryCardView, {
          clan: M,
          className: g.profileCard,
          prioritizedGameIds: P,
          expanded: !0,
          isMember: H,
          hasPendingJoinRequest: B,
          atMaxMemberCapacity: Q
        }), (0, r.jsx)(o.Tooltip, {
          text: I.default.Messages.CLAN_DISCOVERY_APPLICATION_DISABLED_TOOLTIP,
          shouldShow: !q,
          children: e => (0, r.jsxs)("div", {
            className: g.applyButtonContainer,
            children: [(0, r.jsxs)(o.Button, {
              ...e,
              type: "submit",
              onClick: z,
              fullWidth: !0,
              disabled: W || !q || null == b,
              innerClassName: g.applyButtonInner,
              children: [Q && (0, r.jsx)(s.WarningIcon, {
                color: "white",
                width: 20,
                height: 20
              }), I.default.Messages.APPLY]
            }), "" !== U && (0, r.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "text-danger",
              children: U
            })]
          })
        }), Q && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-warning",
            className: g.maxCapacityText,
            children: I.default.Messages.CLAN_DISCOVERY_APPLICATION_MAX_MEMBERS
          }), (0, r.jsx)("hr", {
            className: g.separator
          })]
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: g.noticeText,
          children: I.default.Messages.CLAN_APPLICATION_GDM_CONSENT
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: g.noticeText,
          children: I.default.Messages.MEMBER_VERIFICATION_WARNING
        })]
      })]
    }), (0, r.jsx)("div", {
      className: g.closeButtonContainer,
      children: (0, r.jsx)(o.Button, {
        onClick: S,
        look: o.ButtonLooks.OUTLINED,
        color: o.ButtonColors.PRIMARY,
        children: I.default.Messages.CLOSE
      })
    })]
  })
}