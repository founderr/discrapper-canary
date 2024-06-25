n.d(t, {
  Z: function() {
    return v
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
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
  T = n(650461),
  g = n(432632),
  p = n(35313),
  N = n(284019),
  S = n(672775),
  C = n(601463),
  A = n(192565),
  f = n(641037),
  Z = n(689938),
  L = n(414868);
let O = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: !0
};

function v(e) {
  let {
    guildId: t,
    onClose: n
  } = e, l = (0, c.e7)([d.Z], () => d.Z.useReducedMotion), v = (0, T.Wg)(), {
    progress: R,
    errors: P,
    submitting: x
  } = (0, c.cj)([T.ZP], () => {
    var e, n, s, i;
    return {
      progress: null !== (i = null === (e = T.ZP.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== i ? i : v,
      errors: null === (n = T.ZP.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
      submitting: null === (s = T.ZP.getStateForGuild(t)) || void 0 === s ? void 0 : s.submitting
    }
  }), M = (0, g.N)(t, "ClanSetupModal"), D = i.useMemo(() => (0, f.G)(P), [P]), [b, y] = i.useState(!1), [j, U] = i.useState(window.innerWidth), [G, w] = i.useState(1), [k, B] = i.useState(!0), H = (0, p.f)(), V = (0, o.useSpring)({
    opacity: G,
    config: O,
    onStart: () => B(!0),
    onRest: () => B(1 === G),
    immediate: l
  }), F = (0, o.useSpring)({
    transform: "translateX(".concat(1 === G ? 0 : -1 * (j - 380) / 2 + 190, "px)"),
    config: O,
    immediate: l
  }), Y = (0, o.useTransition)(0 === G, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      delay: 500
    },
    config: O,
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
    config: O,
    immediate: l
  }), W = i.useCallback(e => {
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
  i.useEffect(() => {
    (0, I.Lp)(t, (0, I.Qh)(R.currentStep))
  }, [t, R.currentStep]), i.useEffect(() => {
    let e = (0, h.pP)((0, r.debounce)(() => U(window.innerWidth), 250));
    return (0, h.YP)(e, document.body), () => (0, h.UC)(e, document.body)
  }, [G, k]), i.useEffect(() => {
    null != M && (0, _._9)(t, {
      requiredGameId: M
    })
  }, [M, t]);
  let K = i.useMemo(() => null != P && Object.values(P).some(e => null != e), [P]),
    q = i.useMemo(() => null != P && Object.values(P).length > 0 ? (0, f.G)(P).find(e => e.hasError) : null, [P]),
    Q = i.useCallback(() => {
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
    $ = i.useCallback(() => {
      0 === X.filter(e => e.id !== t).length && J ? (0, E.fH)(E.v0.GET_STARTED) : (0, E.fH)(E.v0.ADMIN_UPSELL)
    }, [X, t, J]),
    ee = i.useCallback(() => {
      (0, f.V)({
        guildId: t,
        onSuccess: () => {
          $(), n()
        },
        progress: R
      })
    }, [t, R, $, n]),
    et = i.useRef(null),
    en = null != q ? (0, s.jsxs)("div", {
      className: L.tooltipContents,
      children: [(0, s.jsx)(u.WarningIcon, {
        size: "xs",
        color: "currentColor",
        className: L.errorIcon
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: Z.Z.Messages.CLAN_SUBMIT_ERROR_TITLE
        }), (0, s.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: Z.Z.Messages.CLAN_SUBMIT_ERROR_TEXT.format({
            backHook: (e, t) => (0, s.jsx)(u.Anchor, {
              className: L.errorLink,
              onClick: Q,
              children: e
            }, t)
          })
        })]
      })]
    }) : null;
  return (0, s.jsx)(o.animated.div, {
    ref: et,
    style: H,
    className: L.modal,
    children: (0, s.jsxs)(u.FocusRingScope, {
      containerRef: et,
      children: [(0, s.jsx)(u.Button, {
        className: L.close,
        look: u.Button.Looks.OUTLINED,
        size: u.Button.Sizes.MEDIUM,
        color: u.Button.Colors.PRIMARY,
        onClick: n,
        children: Z.Z.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
      }), (0, s.jsxs)("div", {
        className: L.content,
        children: [(0, s.jsxs)("div", {
          className: L.panel,
          children: [(0, s.jsx)(o.animated.div, {
            style: V,
            className: a()(L.stepsContainer, {
              [L.hidden]: !k
            }),
            children: (0, s.jsx)(A.Z, {
              guildId: t
            })
          }), (0, s.jsx)("div", {
            className: a()(L.navigationContainer, {
              [L.elevatedNavigationContainer]: !k
            }),
            children: (0, s.jsx)(S.Z, {
              steps: D,
              progress: R,
              updateCurrentStep: W,
              animationStyle: V,
              animationClassName: a()({
                [L.hidden]: !k
              })
            })
          })]
        }), (0, s.jsx)(o.animated.div, {
          style: V,
          className: a()(L.divider, {
            [L.hidden]: !k,
            [L.dividerResponsive]: k
          })
        }), (0, s.jsx)(o.animated.div, {
          style: F,
          className: a()(L.sidebar, {
            [L.sidebarResponsive]: k
          }),
          children: (0, s.jsx)(C.Z, {
            guildId: t,
            signed: b,
            setSigned: k ? void 0 : y,
            sidebarWidth: 380,
            windowWidth: j,
            transition: Y,
            brandPrimaryColor: R.brandPrimaryColor
          })
        })]
      }), z((e, t) => t && (0, s.jsx)(o.animated.div, {
        style: e,
        className: L.submit,
        children: (0, s.jsx)(u.Tooltip, {
          color: u.Tooltip.Colors.GREY,
          tooltipClassName: L.tooltip,
          text: en,
          "aria-label": null != q ? Z.Z.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
          shouldShow: null != q,
          forceOpen: null != q,
          children: e => (0, s.jsx)(N.Z, {
            ...e,
            themeColor: R.brandPrimaryColor,
            disabled: !b || K,
            submitting: x,
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