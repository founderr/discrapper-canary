"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("718017"),
  o = n("524437"),
  u = n("287088"),
  d = n("481060"),
  c = n("442837"),
  f = n("393903"),
  h = n("607070"),
  m = n("645041"),
  p = n("430824"),
  E = n("914010"),
  C = n("153850"),
  g = n("626135"),
  S = n("963202"),
  _ = n("905362"),
  T = n("940725"),
  I = n("114487"),
  A = n("979264"),
  v = n("981631"),
  N = n("921944"),
  x = n("689938"),
  M = n("801303");

function R(e) {
  let {
    guild: t,
    showToast: n,
    onConfirm: s,
    onDismiss: o
  } = e, [m, p] = l.useState(!1), E = l.useRef(null), [g, _] = l.useState(0), T = (0, S.useIsInUserClanExperiment)(), v = l.useCallback(e => {
    let t = e.target.getBoundingClientRect();
    _(window.innerWidth - t.right)
  }, []), N = (0, f.useResizeObserver)(v), R = (0, c.useStateFromStores)([h.default], () => h.default.useReducedMotion);
  l.useLayoutEffect(() => {
    var e;
    if (null == E.current) return;
    let t = null === (e = E.current) || void 0 === e ? void 0 : e.parentNode;
    return null != t && (t.style.zIndex = "1003"), () => {
      null != t && (t.style.zIndex = "1002")
    }
  }, []);
  let y = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), o()
    }, [o]),
    L = l.useCallback(e => {
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
  return T ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ref: N,
      className: i()(M.positionTracker)
    }), (0, a.jsx)(C.default, {
      children: O((e, n) => {
        var l;
        return n && (0, a.jsx)(r.animated.div, {
          onMouseEnter: () => p(!0),
          onMouseLeave: () => p(!1),
          className: i()(M.wrapper),
          style: {
            ...e,
            right: g + 12
          },
          ref: E,
          children: (0, a.jsx)(d.ClickableContainer, {
            "aria-label": x.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_ARIA_LABEL.format({
              guildName: t.name
            }),
            onClick: L,
            children: (0, a.jsxs)("div", {
              className: i()(M.toastContainerInner, m ? M.hovered : null),
              children: [(0, a.jsxs)("div", {
                className: M.guildIconContainer,
                children: [(0, a.jsx)(I.default, {
                  guild: t,
                  iconSize: 64,
                  className: M.icon
                }), (0, a.jsx)("div", {
                  className: M.guildTagContainer,
                  children: (0, a.jsx)(A.BaseClanTagChiplet, {
                    clanTag: null === (l = t.clan) || void 0 === l ? void 0 : l.tag,
                    className: M.guildClanTag
                  })
                })]
              }), (0, a.jsxs)("div", {
                children: [(0, a.jsx)("div", {
                  children: (0, a.jsx)(d.Heading, {
                    variant: "heading-md/bold",
                    color: "header-primary",
                    children: x.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_TITLE.format({
                      guildName: t.name
                    })
                  })
                }), (0, a.jsx)("div", {
                  children: (0, a.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    children: x.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_DESCRIPTION
                  })
                })]
              }), (0, a.jsx)("div", {
                children: (0, a.jsx)(d.Clickable, {
                  className: M.toastButton,
                  onClick: y,
                  children: (0, a.jsx)(u.CloseSmallBoldIcon, {
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

function y(e) {
  let {} = e, t = (0, c.useStateFromStores)([E.default], () => E.default.getGuildId()), n = (0, T.useShouldShowUserClanTagUpsell)(t), s = (0, c.useStateFromStores)([p.default], () => p.default.getGuild(t), [t]), [i, r] = l.useState(!1), u = l.useRef(null), d = (0, S.useIsInUserClanExperiment)();
  l.useEffect(() => (n && (u.current = window.setTimeout(() => {
    r(!0), g.default.track(v.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
      type: o.DismissibleGuildContent[o.DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE],
      guild_id: null != t ? t : v.EMPTY_STRING_SNOWFLAKE_ID
    })
  }, 2500)), () => {
    null != u.current && window.clearTimeout(u.current)
  }), []);
  let f = l.useCallback(() => {
      r(!1), null != t && (0, _.openAdoptClanIdentityModal)(t)
    }, [, t]),
    h = l.useCallback(() => {
      r(!1), null != t && (0, m.markContentAsDismissed)(o.DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE, null != t ? t : v.EMPTY_STRING_SNOWFLAKE_ID, !0, N.ContentDismissActionType.DISMISS)
    }, [t]);
  return d && n && null != t && null != s ? (0, a.jsx)(R, {
    guild: s,
    onConfirm: f,
    onDismiss: h,
    showToast: i
  }) : null
}