n.r(t), n(47120), n(653041);
var r = n(735250),
  o = n(470079),
  a = n(920906),
  s = n(481060),
  i = n(442837),
  l = n(607070),
  c = n(963202),
  u = n(863249),
  d = n(944163),
  h = n(246364),
  m = n(983736),
  p = n(937111),
  x = n(200305),
  f = n(271383),
  E = n(594174),
  N = n(153124),
  _ = n(231467),
  v = n(981631),
  C = n(308083),
  I = n(689938),
  g = n(786698);
let R = {
    mass: 1,
    tension: 600,
    friction: 60
  },
  T = [{
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
    faderSize: a,
    faderEdgeThreshold: i
  } = e, l = o.useRef(null), [c, u] = o.useState(0), [d, h] = o.useState(0), [m, p] = o.useState(0), x = o.useCallback(() => {
    null != l.current && (u(l.current.getDistanceFromTop()), h(l.current.getDistanceFromBottom()), p(l.current.getScrollerState().offsetHeight))
  }, []);
  o.useEffect(() => {
    if (x(), null == n.current) return;
    let e = new ResizeObserver(() => {
      x()
    });
    return e.observe(n.current), () => {
      e.disconnect()
    }
  }, [l, n, x]);
  let f = o.useMemo(() => {
    if (0 === c && 0 === d) return {};
    let e = [];
    if (e.push("to bottom"), c > 0) {
      let t = i > 0 ? 1 - Math.min(i, c) / i : 1;
      for (let n = 0; n < T.length; n++) {
        let {
          position: r,
          alpha: o
        } = T[n], s = (r * a).toFixed(2);
        e.push("hsla(0, 0%, 0%, ".concat(t + o * (1 - t), ") ").concat(s, "px"))
      }
    }
    if (d > 0) {
      let t = m - a,
        n = i > 0 ? 1 - Math.min(i, d) / i : 1;
      for (let r = T.length - 1; r >= 0; r--) {
        let {
          position: o,
          alpha: s
        } = T[r], i = (t + (1 - o) * a).toFixed(2);
        e.push("hsla(0, 0%, 0%, ".concat(n + s * (1 - n), ") ").concat(i, "px"))
      }
    }
    return {
      maskImage: "linear-gradient(".concat(e.join(","), ")")
    }
  }, [d, c, i, a, m]);
  return (0, r.jsx)(s.AdvancedScrollerNone, {
    ref: l,
    style: f,
    className: g.scroller,
    onScroll: x,
    children: t
  })
}

function y(e) {
  let {
    guildId: t,
    formState: n,
    updateFormState: o
  } = e;
  return (0, r.jsxs)("div", {
    className: g.verificationForm,
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-xxl/normal",
      color: "header-primary",
      children: I.Z.Messages.CLAN_DISCOVERY_PROFILE_TITLE
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: I.Z.Messages.CLAN_DISCOVERY_PROFILE_SUBTITLE
    }), (0, r.jsx)(x.Y, {
      guildId: t,
      formState: n,
      updateFormState: o
    })]
  })
}
t.default = function(e) {
  var t, n, x, T;
  let {
    clan: A,
    prioritizedGameIds: M,
    transitionState: O,
    onClose: F
  } = e, S = (0, N.Dt)(), b = (0, i.e7)([d.Z], () => d.Z.get(A.id)), [P, k] = o.useState(null !== (x = null == b ? void 0 : b.formFields) && void 0 !== x ? x : []), B = (0, i.e7)([E.default], () => E.default.getCurrentUser()), L = (0, i.e7)([f.ZP], () => f.ZP.isMember(A.id, null == B ? void 0 : B.id), [A, B]), Z = (0, i.e7)([p.Z], () => {
    var e;
    return (null === (e = p.Z.getRequest(A.id)) || void 0 === e ? void 0 : e.applicationStatus) === h.wB.SUBMITTED
  }), D = null == B ? void 0 : B.verified, H = null == B ? void 0 : B.isPhoneVerified(), [V, Y] = o.useState(""), {
    enableApplication: w
  } = (0, c.Fg)("discovery");
  o.useEffect(() => {
    u.Z.fetchVerificationForm(A.id)
  }, [A.id]), o.useEffect(() => {
    null != b && k(b.formFields)
  }, [b]);
  let U = o.useCallback(async e => {
      await u.Z.submitVerificationForm(A.id, e)
    }, [A.id]),
    q = o.useCallback(async () => {
      try {
        await U({
          ...null != b ? b : d.t,
          formFields: P
        }), F()
      } catch (e) {
        Y(null == e ? void 0 : e.message)
      }
    }, [U, F, b, P]),
    z = !((null == b ? void 0 : null === (t = b.guild) || void 0 === t ? void 0 : t.verification_level) === v.sFg.VERY_HIGH ? H : D || H) || P.some(e => !(0, m.OA)(e)),
    G = (null !== (T = null == b ? void 0 : null === (n = b.guild) || void 0 === n ? void 0 : n.approximate_member_count) && void 0 !== T ? T : 0) >= C.Du,
    K = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
    Q = (0, a.useSpring)({
      from: {
        opacity: 0,
        transform: "translateY(".concat(K ? 0 : 40, "px)")
      },
      to: {
        opacity: 1,
        transform: "translateY(0px)"
      },
      config: R,
      delay: 500
    }),
    W = o.useRef(null);
  return (0, r.jsxs)(s.ModalRoot, {
    transitionState: O,
    "aria-labelledby": S,
    size: s.ModalSize.DYNAMIC,
    className: g.container,
    hideShadow: !0,
    children: [(0, r.jsxs)(a.animated.div, {
      className: g.body,
      style: Q,
      children: [(0, r.jsx)("div", {
        className: g.applicationContainer,
        ref: W,
        children: (0, r.jsx)(j, {
          containerRef: W,
          faderSize: 180,
          faderEdgeThreshold: 48,
          children: (0, r.jsx)(y, {
            guildId: A.id,
            formState: P,
            updateFormState: k
          })
        })
      }), (0, r.jsx)("div", {
        className: g.verticalRule
      }), (0, r.jsxs)("div", {
        className: g.clanContainer,
        children: [(0, r.jsx)(_.xV, {
          clan: A,
          className: g.profileCard,
          prioritizedGameIds: M,
          expanded: !0,
          isMember: L,
          hasPendingJoinRequest: Z,
          atMaxMemberCapacity: G
        }), (0, r.jsx)(s.Tooltip, {
          text: I.Z.Messages.CLAN_DISCOVERY_APPLICATION_DISABLED_TOOLTIP,
          shouldShow: !w,
          children: e => (0, r.jsxs)("div", {
            className: g.applyButtonContainer,
            children: [(0, r.jsxs)(s.Button, {
              ...e,
              type: "submit",
              onClick: q,
              fullWidth: !0,
              disabled: z || !w || null == b,
              innerClassName: g.applyButtonInner,
              children: [G && (0, r.jsx)(s.WarningIcon, {
                size: "custom",
                color: "white",
                width: 20,
                height: 20
              }), I.Z.Messages.APPLY]
            }), "" !== V && (0, r.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-danger",
              children: V
            })]
          })
        }), G && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/medium",
            color: "text-warning",
            className: g.maxCapacityText,
            children: I.Z.Messages.CLAN_DISCOVERY_APPLICATION_MAX_MEMBERS
          }), (0, r.jsx)("hr", {
            className: g.separator
          })]
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: g.noticeText,
          children: I.Z.Messages.CLAN_APPLICATION_GDM_CONSENT
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: g.noticeText,
          children: I.Z.Messages.MEMBER_VERIFICATION_WARNING
        })]
      })]
    }), (0, r.jsx)("div", {
      className: g.closeButtonContainer,
      children: (0, r.jsx)(s.Button, {
        onClick: F,
        look: s.ButtonLooks.OUTLINED,
        color: s.ButtonColors.PRIMARY,
        children: I.Z.Messages.CLOSE
      })
    })]
  })
}