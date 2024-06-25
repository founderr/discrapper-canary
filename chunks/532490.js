n.d(t, {
  p: function() {
    return l
  }
}), n(47120);
var l, i, s = n(735250),
  a = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(920906),
  u = n(442837),
  d = n(481060),
  h = n(393238),
  m = n(434650),
  E = n(607070),
  p = n(594174),
  g = n(5192),
  f = n(603368),
  C = n(856682),
  _ = n(284019),
  I = n(689938),
  x = n(544954);
(i = l || (l = {})).LEFT = "left", i.RIGHT = "right";
t.Z = a.memo(function(e) {
  let {
    guildId: t,
    primaryColor: n,
    children: l,
    canSignCharter: i = !0,
    onSignCharter: r,
    animationDelayMs: T = 1e3,
    signHintButtonText: N,
    signHintHelperText: Z,
    signHintPosition: S = "left",
    className: v,
    fullHeight: A
  } = e, M = a.useRef(null), [R, j] = a.useState(!1), L = a.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null == r || r(), j(!0)
  }, [r]), [O, P] = a.useState(!1), [y, b] = a.useState(!1), D = a.useRef(null), U = a.useCallback(e => {
    e && (D.current = setTimeout(() => {
      b(!0)
    }, T))
  }, [T]), k = (0, m.O)(U), w = (0, u.e7)([E.Z], () => E.Z.useReducedMotion), H = (0, u.e7)([p.default], () => p.default.getCurrentUser()), [G, B] = (0, c.useSpring)(() => {
    var e, t;
    return e = S, t = w, "left" === e ? {
      right: t ? 68 : 0,
      config: c.config.stiff
    } : {
      left: t ? 68 : 0,
      config: c.config.stiff
    }
  }), [V, F] = (0, c.useSpring)(() => ({
    opacity: 0,
    top: -24,
    onRest: () => {
      R && P(!0)
    }
  }));
  a.useEffect(() => {
    if (y) B({
      ..."left" === S ? {
        right: 68,
        config: c.config.stiff
      } : {
        left: 280,
        config: c.config.stiff
      }
    }), F({
      opacity: 1,
      top: -24
    });
    y && R && F({
      opacity: 0,
      top: 0
    })
  }, [y, R, S]), a.useEffect(() => () => {
    null != D.current && clearTimeout(D.current)
  }, []);
  let z = o()(x.signHintAnimationContainer, O && x.noDisplay, "left" === S ? x.signTextLeft : x.signTextRight),
    W = (0, d.useToken)(d.tokens.colors.BG_SURFACE_OVERLAY),
    Y = (0, d.useToken)(d.tokens.colors.BG_BRAND),
    K = null != n ? n : Y.hex(),
    q = (0, f.j1)(K, W.hex()),
    {
      height: X = 87,
      ref: Q
    } = (0, h.Z)(i),
    J = (0, c.useTransition)(i, {
      from: {
        opacity: 0,
        height: 0
      },
      enter: {
        opacity: 1,
        height: null != X ? X : 87
      },
      config: c.config.stiff,
      immediate: w
    });
  return (0, s.jsx)("div", {
    className: o()(x.container, v),
    ref: k,
    children: (0, s.jsx)(C.Z, {
      fullHeight: A,
      children: (0, s.jsxs)("div", {
        className: o()(x.overviewSidebarWrapper, A && x.fullHeight),
        children: [(0, s.jsx)(d.ScrollerNone, {
          fade: !0,
          className: x.overviewSidebarContent,
          children: (0, s.jsx)("div", {
            className: x.scrollContentContainer,
            children: l
          })
        }), J((e, n) => n && (0, s.jsx)(c.animated.div, {
          className: x.signatureBlockContainer,
          style: e,
          children: (0, s.jsx)("div", {
            ref: Q,
            children: (0, s.jsxs)(d.Clickable, {
              onClick: L,
              className: o()(x.signatureBlock, {
                [x.clickable]: null != r
              }),
              children: [(0, s.jsx)("div", {
                ref: M,
                className: x.signHintContainer,
                children: (0, s.jsxs)(c.animated.div, {
                  className: z,
                  style: {
                    ...G,
                    ...V
                  },
                  children: [(0, s.jsx)("div", {
                    className: x.signContainerButton,
                    children: (0, s.jsxs)(_.Z, {
                      themeColor: K,
                      className: x.signButton,
                      size: d.Button.Sizes.SMALL,
                      onClick: e => {
                        var t;
                        null === (t = M.current) || void 0 === t || t.scrollIntoView({
                          behavior: "smooth"
                        }), L(e)
                      },
                      children: [(0, s.jsx)("div", {
                        className: o()(x.signCarot, {
                          [x.signCarotCustomColors]: null != q
                        }),
                        style: null != q ? q : {
                          borderColor: K
                        }
                      }), null != N ? N : I.Z.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA]
                    })
                  }), (0, s.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: x.signHintHelperText,
                    children: null != Z ? N : I.Z.Messages.CLAN_SETUP_OVERVIEW_SIGN_HELP
                  })]
                })
              }), (0, s.jsx)(d.Text, {
                variant: "text-md/normal",
                color: "none",
                children: "x"
              }), R ? (0, s.jsx)(d.Text, {
                variant: "text-lg/normal",
                color: "header-primary",
                className: x.signatureText,
                children: g.ZP.getName(t, null, H)
              }) : (0, s.jsx)(d.Text, {
                variant: "text-lg/normal",
                color: "none",
                className: x.signatureText,
                children: I.Z.Messages.CLAN_SETUP_OVERVIEW_SIGNATURE
              })]
            })
          })
        }))]
      })
    })
  })
})