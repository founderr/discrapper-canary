"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("718017"),
  o = n("287088"),
  u = n("481060"),
  d = n("442837"),
  c = n("393903"),
  f = n("607070"),
  h = n("430824"),
  m = n("914010"),
  p = n("153850"),
  E = n("931240"),
  C = n("963202"),
  g = n("905362"),
  S = n("940725"),
  _ = n("114487"),
  T = n("979264"),
  I = n("689938"),
  A = n("801303");

function v(e) {
  let {
    guild: t,
    showToast: n,
    onConfirm: s,
    onDismiss: h
  } = e, [m, E] = l.useState(!1), g = l.useRef(null), [S, v] = l.useState(0), N = (0, C.useIsInUserClanExperiment)(), x = l.useCallback(e => {
    let t = e.target.getBoundingClientRect();
    v(window.innerWidth - t.right)
  }, []), M = (0, c.useResizeObserver)(x), R = (0, d.useStateFromStores)([f.default], () => f.default.useReducedMotion);
  l.useLayoutEffect(() => {
    var e;
    if (null == g.current) return;
    let t = null === (e = g.current) || void 0 === e ? void 0 : e.parentNode;
    return null != t && (t.style.zIndex = "1003"), () => {
      null != t && (t.style.zIndex = "1002")
    }
  }, []);
  let L = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), h()
    }, [h]),
    y = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), s()
    }, [s]),
    O = (0, r.useTransition)(n, {
      from: {
        transform: R ? "translateY(0)" : "translateY(16px)",
        opacity: 0,
        pointerEvents: "none"
      },
      enter: {
        transform: "translateY(0)",
        opacity: 1,
        pointerEvents: "all"
      },
      leave: {
        transform: R ? "translateY(0)" : "translateY(16px)",
        opacity: 0,
        pointerEvents: "none"
      },
      config: {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: !0
      },
      delay: 200
    });
  return N ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ref: M,
      className: i()(A.positionTracker)
    }), (0, a.jsx)(p.default, {
      children: O((e, n) => {
        var l;
        return n && (0, a.jsx)(r.animated.div, {
          onMouseEnter: () => E(!0),
          onMouseLeave: () => E(!1),
          className: i()(A.wrapper),
          style: {
            ...e,
            right: S + 12
          },
          ref: g,
          children: (0, a.jsx)(u.ClickableContainer, {
            "aria-label": I.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_ARIA_LABEL.format({
              guildName: t.name
            }),
            onClick: y,
            children: (0, a.jsxs)("div", {
              className: i()(A.toastContainerInner, m ? A.hovered : null),
              children: [(0, a.jsxs)("div", {
                className: A.guildIconContainer,
                children: [(0, a.jsx)(_.default, {
                  guild: t,
                  iconSize: 64,
                  className: A.icon
                }), (0, a.jsx)("div", {
                  className: A.guildTagContainer,
                  children: (0, a.jsx)(T.BaseClanTagChiplet, {
                    clanTag: null === (l = t.clan) || void 0 === l ? void 0 : l.tag,
                    className: A.guildClanTag
                  })
                })]
              }), (0, a.jsxs)("div", {
                children: [(0, a.jsx)("div", {
                  children: (0, a.jsx)(u.Heading, {
                    variant: "heading-md/bold",
                    color: "header-primary",
                    children: I.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_TITLE.format({
                      guildName: t.name
                    })
                  })
                }), (0, a.jsx)("div", {
                  children: (0, a.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    children: I.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_DESCRIPTION
                  })
                })]
              }), (0, a.jsx)("div", {
                children: (0, a.jsx)(u.Clickable, {
                  className: A.toastButton,
                  onClick: L,
                  children: (0, a.jsx)(o.CloseSmallBoldIcon, {
                    width: 20,
                    height: 20
                  })
                })
              })]
            })
          })
        })
      })
    })]
  }) : null
}

function N(e) {
  let {} = e, t = (0, d.useStateFromStores)([m.default], () => m.default.getGuildId()), n = (0, S.useShouldShowUserClanTagUpsell)(t), s = (0, d.useStateFromStores)([h.default], () => h.default.getGuild(t), [t]), [i, r] = l.useState(!1), o = l.useRef(null), u = (0, C.useIsInUserClanExperiment)();
  l.useEffect(() => (n && (o.current = window.setTimeout(() => {
    r(!0)
  }, 2500)), () => {
    null != o.current && window.clearTimeout(o.current)
  }), []);
  let c = l.useCallback(() => {
      r(!1), null != t && (0, g.openAdoptClanIdentityModal)(t)
    }, [, t]),
    f = l.useCallback(() => {
      r(!1), null != t && (0, E.adoptClanIdentity)(t, !1)
    }, [t]);
  return u && n && null != t && null != s ? (0, a.jsx)(v, {
    guild: s,
    onConfirm: c,
    onDismiss: f,
    showToast: i
  }) : null
}