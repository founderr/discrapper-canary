"use strict";
n.r(t), n.d(t, {
  SignHintPosition: function() {
    return a
  }
}), n("47120");
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("920906"),
  d = n("442837"),
  c = n("481060"),
  f = n("393238"),
  h = n("434650"),
  m = n("607070"),
  p = n("594174"),
  E = n("5192"),
  C = n("603368"),
  g = n("856682"),
  S = n("284019"),
  _ = n("689938"),
  T = n("830430");
(l = a || (a = {})).LEFT = "left", l.RIGHT = "right";
t.default = i.memo(function(e) {
  let {
    guildId: t,
    primaryColor: n,
    children: a,
    canSignCharter: l = !0,
    onSignCharter: r,
    animationDelayMs: I = 1e3,
    signHintButtonText: A,
    signHintHelperText: v,
    signHintPosition: N = "left",
    className: x,
    fullHeight: M
  } = e, R = i.useRef(null), [y, L] = i.useState(!1), O = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null == r || r(), L(!0)
  }, [r]), [j, P] = i.useState(!1), [D, b] = i.useState(!1), U = i.useRef(null), F = i.useCallback(e => {
    e && (U.current = setTimeout(() => {
      b(!0)
    }, I))
  }, [I]), w = (0, h.useIsVisible)(F), k = (0, d.useStateFromStores)([m.default], () => m.default.useReducedMotion), H = (0, d.useStateFromStores)([p.default], () => p.default.getCurrentUser()), [B, G] = (0, u.useSpring)(() => {
    var e, t;
    return e = N, t = k, "left" === e ? {
      right: t ? 68 : 0,
      config: u.config.stiff
    } : {
      left: t ? 68 : 0,
      config: u.config.stiff
    }
  }), [V, W] = (0, u.useSpring)(() => ({
    opacity: 0,
    top: -24,
    onRest: () => {
      y && P(!0)
    }
  }));
  i.useEffect(() => {
    if (D) G({
      ..."left" === N ? {
        right: 68,
        config: u.config.stiff
      } : {
        left: 280,
        config: u.config.stiff
      }
    }), W({
      opacity: 1,
      top: -24
    });
    D && y && W({
      opacity: 0,
      top: 0
    })
  }, [D, y, N]), i.useEffect(() => () => {
    null != U.current && clearTimeout(U.current)
  }, []);
  let Y = o()(T.signHintAnimationContainer, j && T.noDisplay, "left" === N ? T.signTextLeft : T.signTextRight),
    z = (0, c.useToken)(c.tokens.colors.BG_SURFACE_OVERLAY),
    K = (0, c.useToken)(c.tokens.colors.BG_BRAND),
    Z = null != n ? n : K.hex(),
    q = (0, C.getClanPrimaryButtonStyles)(Z, z.hex()),
    {
      height: X = 87,
      ref: Q
    } = (0, f.default)(l),
    J = (0, u.useTransition)(l, {
      from: {
        opacity: 0,
        height: 0
      },
      enter: {
        opacity: 1,
        height: null != X ? X : 87
      },
      config: u.config.stiff,
      immediate: k
    });
  return (0, s.jsx)("div", {
    className: o()(T.container, x),
    ref: w,
    children: (0, s.jsx)(g.default, {
      fullHeight: M,
      children: (0, s.jsxs)("div", {
        className: o()(T.overviewSidebarWrapper, M && T.fullHeight),
        children: [(0, s.jsx)(c.ScrollerNone, {
          fade: !0,
          className: T.overviewSidebarContent,
          children: (0, s.jsx)("div", {
            className: T.scrollContentContainer,
            children: a
          })
        }), J((e, n) => n && (0, s.jsx)(u.animated.div, {
          className: T.signatureBlockContainer,
          style: e,
          children: (0, s.jsx)("div", {
            ref: Q,
            children: (0, s.jsxs)(c.Clickable, {
              onClick: O,
              className: o()(T.signatureBlock, {
                [T.clickable]: null != r
              }),
              children: [(0, s.jsx)("div", {
                ref: R,
                className: T.signHintContainer,
                children: (0, s.jsxs)(u.animated.div, {
                  className: Y,
                  style: {
                    ...B,
                    ...V
                  },
                  children: [(0, s.jsx)("div", {
                    className: T.signContainerButton,
                    children: (0, s.jsxs)(S.default, {
                      themeColor: Z,
                      className: T.signButton,
                      size: c.Button.Sizes.SMALL,
                      onClick: e => {
                        var t;
                        null === (t = R.current) || void 0 === t || t.scrollIntoView({
                          behavior: "smooth"
                        }), O(e)
                      },
                      children: [(0, s.jsx)("div", {
                        className: o()(T.signCarot, {
                          [T.signCarotCustomColors]: null != q
                        }),
                        style: null != q ? q : {
                          borderColor: Z
                        }
                      }), null != A ? A : _.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA]
                    })
                  }), (0, s.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: T.signHintHelperText,
                    children: null != v ? A : _.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_HELP
                  })]
                })
              }), (0, s.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "none",
                children: "x"
              }), y ? (0, s.jsx)(c.Text, {
                variant: "text-lg/normal",
                color: "header-primary",
                className: T.signatureText,
                children: E.default.getName(t, null, H)
              }) : (0, s.jsx)(c.Text, {
                variant: "text-lg/normal",
                color: "none",
                className: T.signatureText,
                children: _.default.Messages.CLAN_SETUP_OVERVIEW_SIGNATURE
              })]
            })
          })
        }))]
      })
    })
  })
})