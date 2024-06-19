n.d(t, {
  Z: function() {
    return O
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(392711),
  o = n(920906),
  c = n(442837),
  u = n(481060),
  d = n(607070),
  E = n(207796),
  h = n(889711),
  _ = n(931240),
  I = n(970606),
  m = n(963202),
  g = n(650461),
  p = n(432632),
  T = n(35313),
  N = n(284019),
  S = n(672775),
  C = n(601463),
  A = n(192565),
  f = n(641037),
  Z = n(689938),
  v = n(414868);
let L = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: !0
};

function O(e) {
  let {
    guildId: t,
    onClose: n
  } = e, l = (0, c.e7)([d.Z], () => d.Z.useReducedMotion), O = (0, g.Wg)(), {
    progress: R,
    errors: x,
    submitting: M
  } = (0, c.cj)([g.ZP], () => {
    var e, n, i, s;
    return {
      progress: null !== (s = null === (e = g.ZP.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== s ? s : O,
      errors: null === (n = g.ZP.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
      submitting: null === (i = g.ZP.getStateForGuild(t)) || void 0 === i ? void 0 : i.submitting
    }
  }), P = (0, p.N)(t, "ClanSetupModal"), D = s.useMemo(() => (0, f.G)(x), [x]), [b, y] = s.useState(!1), [j, U] = s.useState(window.innerWidth), [G, w] = s.useState(1), [k, B] = s.useState(!0), H = (0, T.f)(), V = (0, o.useSpring)({
    opacity: G,
    config: L,
    onStart: () => B(!0),
    onRest: () => B(1 === G),
    immediate: l
  }), F = (0, o.useSpring)({
    transform: "translateX(".concat(1 === G ? 0 : -1 * (j - 380) / 2 + 190, "px)"),
    config: L,
    immediate: l
  }), Y = (0, o.useTransition)(0 === G, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      delay: 500
    },
    config: L,
    immediate: l
  }), z = (0, o.useTransition)(0 === G, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: L,
    immediate: l
  }), W = s.useCallback(e => {
    if (e === D.length) w(0), (0, I.Lp)(t, "signature");
    else if (0 === G) w(1);
    else {
      var n;
      _._9(t, {
        currentStep: e,
        furthestStep: Math.max(null !== (n = R.furthestStep) && void 0 !== n ? n : 0, e)
      })
    }
  }, [G, t, R.furthestStep, D.length]);
  s.useEffect(() => {
    (0, I.Lp)(t, (0, I.Qh)(R.currentStep))
  }, [t, R.currentStep]), s.useEffect(() => {
    let e = (0, h.pP)((0, r.debounce)(() => U(window.innerWidth), 250));
    return (0, h.YP)(e, document.body), () => (0, h.UC)(e, document.body)
  }, [G, k]), s.useEffect(() => {
    null != P && (0, _._9)(t, {
      requiredGameId: P
    })
  }, [P, t]);
  let K = s.useMemo(() => null != x && Object.values(x).some(e => null != e), [x]),
    q = s.useMemo(() => null != x && Object.values(x).length > 0 ? (0, f.G)(x).find(e => e.hasError) : null, [x]),
    Q = s.useCallback(() => {
      w(1), _._9(t, {
        currentStep: null == q ? void 0 : q.index
      })
    }, [null == q ? void 0 : q.index, t]),
    {
      guilds: X
    } = (0, m.C3)({
      location: "ClanDiscoveryAdminContainer",
      includeConverted: !1
    }),
    {
      enableApplication: J
    } = (0, m.Fg)("ClanDiscoveryAdminContainer"),
    $ = s.useCallback(() => {
      0 === X.filter(e => e.id !== t).length && J ? (0, E.fH)(E.v0.GET_STARTED) : (0, E.fH)(E.v0.ADMIN_UPSELL)
    }, [X, t, J]),
    ee = s.useCallback(() => {
      (0, f.V)({
        guildId: t,
        onSuccess: () => {
          $(), n()
        },
        progress: R
      })
    }, [t, R, $, n]),
    et = s.useRef(null),
    en = null != q ? (0, i.jsxs)("div", {
      className: v.tooltipContents,
      children: [(0, i.jsx)(u.WarningIcon, {
        size: "xs",
        color: "currentColor",
        className: v.errorIcon
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: Z.Z.Messages.CLAN_SUBMIT_ERROR_TITLE
        }), (0, i.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: Z.Z.Messages.CLAN_SUBMIT_ERROR_TEXT.format({
            backHook: (e, t) => (0, i.jsx)(u.Anchor, {
              className: v.errorLink,
              onClick: Q,
              children: e
            }, t)
          })
        })]
      })]
    }) : null;
  return (0, i.jsx)(o.animated.div, {
    ref: et,
    style: H,
    className: v.modal,
    children: (0, i.jsxs)(u.FocusRingScope, {
      containerRef: et,
      children: [(0, i.jsx)(u.Button, {
        className: v.close,
        look: u.Button.Looks.OUTLINED,
        size: u.Button.Sizes.MEDIUM,
        color: u.Button.Colors.PRIMARY,
        onClick: n,
        children: Z.Z.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
      }), (0, i.jsxs)("div", {
        className: v.content,
        children: [(0, i.jsxs)("div", {
          className: v.panel,
          children: [(0, i.jsx)(o.animated.div, {
            style: V,
            className: a()(v.stepsContainer, {
              [v.hidden]: !k
            }),
            children: (0, i.jsx)(A.Z, {
              guildId: t
            })
          }), (0, i.jsx)("div", {
            className: a()(v.navigationContainer, {
              [v.elevatedNavigationContainer]: !k
            }),
            children: (0, i.jsx)(S.Z, {
              steps: D,
              progress: R,
              updateCurrentStep: W,
              animationStyle: V,
              animationClassName: a()({
                [v.hidden]: !k
              })
            })
          })]
        }), (0, i.jsx)(o.animated.div, {
          style: V,
          className: a()(v.divider, {
            [v.hidden]: !k,
            [v.dividerResponsive]: k
          })
        }), (0, i.jsx)(o.animated.div, {
          style: F,
          className: a()(v.sidebar, {
            [v.sidebarResponsive]: k
          }),
          children: (0, i.jsx)(C.Z, {
            guildId: t,
            signed: b,
            setSigned: k ? void 0 : y,
            sidebarWidth: 380,
            windowWidth: j,
            transition: Y,
            brandPrimaryColor: R.brandPrimaryColor
          })
        })]
      }), z((e, t) => t && (0, i.jsx)(o.animated.div, {
        style: e,
        className: v.submit,
        children: (0, i.jsx)(u.Tooltip, {
          color: u.Tooltip.Colors.GREY,
          tooltipClassName: v.tooltip,
          text: en,
          "aria-label": null != q ? Z.Z.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
          shouldShow: null != q,
          forceOpen: null != q,
          children: e => (0, i.jsx)(N.Z, {
            ...e,
            themeColor: R.brandPrimaryColor,
            disabled: !b || K,
            submitting: M,
            look: u.Button.Looks.FILLED,
            size: u.Button.Sizes.MEDIUM,
            color: u.Button.Colors.BRAND,
            onClick: ee,
            children: Z.Z.Messages.FINISH
          })
        })
      }))]
    })
  })
}