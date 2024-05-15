"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("685626"),
  o = n("524437"),
  u = n("287088"),
  d = n("481060"),
  c = n("442837"),
  f = n("607070"),
  h = n("645041"),
  m = n("430824"),
  p = n("914010"),
  E = n("626135"),
  C = n("905362"),
  g = n("353093"),
  S = n("940725"),
  _ = n("114487"),
  T = n("979264"),
  I = n("981631"),
  A = n("921944"),
  N = n("689938"),
  v = n("838373");

function x(e) {
  var t;
  let {
    guild: n,
    showToast: s,
    onConfirm: o,
    onDismiss: h
  } = e, [m, p] = l.useState(!1), E = l.useRef(null), C = (0, c.useStateFromStores)([f.default], () => f.default.useReducedMotion);
  l.useLayoutEffect(() => {
    var e;
    if (null == E.current) return;
    let t = null === (e = E.current) || void 0 === e ? void 0 : e.parentNode;
    return null != t && (t.style.zIndex = "1003"), () => {
      null != t && (t.style.zIndex = "1002")
    }
  }, []);
  let S = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), h()
    }, [h]),
    I = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), o()
    }, [o]),
    A = (0, r.useTransition)(s, {
      from: {
        transform: C ? "translateY(0)" : "translateY(16px)",
        opacity: 0,
        pointerEvents: "none"
      },
      enter: {
        transform: "translateY(0)",
        opacity: 1,
        pointerEvents: "all"
      },
      leave: {
        transform: C ? "translateY(0)" : "translateY(16px)",
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
    }),
    x = (0, g.getClanBadgeUrl)(n.id, null === (t = n.clan) || void 0 === t ? void 0 : t.badge);
  return A((e, t) => {
    var l;
    return t && (0, a.jsx)(r.animated.div, {
      onMouseEnter: () => p(!0),
      onMouseLeave: () => p(!1),
      className: i()(v.wrapper),
      style: e,
      ref: E,
      children: (0, a.jsx)(d.ClickableContainer, {
        "aria-label": N.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_ARIA_LABEL.format({
          guildName: n.name
        }),
        onClick: I,
        children: (0, a.jsxs)("div", {
          className: i()(v.toastContainerInner, m ? v.hovered : null),
          children: [(0, a.jsxs)("div", {
            className: v.guildIconContainer,
            children: [(0, a.jsx)(_.default, {
              guild: n,
              iconSize: 64,
              className: v.icon
            }), (0, a.jsx)("div", {
              className: v.guildTagContainer,
              children: (0, a.jsx)(T.BaseClanTagChiplet, {
                clanTag: null === (l = n.clan) || void 0 === l ? void 0 : l.tag,
                clanBadge: x,
                className: v.guildClanTag
              })
            })]
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)("div", {
              children: (0, a.jsx)(d.Heading, {
                variant: "heading-md/bold",
                color: "header-primary",
                children: N.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_TITLE.format({
                  guildName: n.name
                })
              })
            }), (0, a.jsx)("div", {
              children: (0, a.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "header-secondary",
                children: N.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_DESCRIPTION
              })
            })]
          }), (0, a.jsx)("div", {
            children: (0, a.jsx)(d.Clickable, {
              className: v.toastButton,
              onClick: S,
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
}

function M(e) {
  let {} = e, t = (0, c.useStateFromStores)([p.default], () => p.default.getGuildId()), n = (0, S.useShouldShowUserClanTagUpsell)(t, "clan_tag_upsell_toast"), s = (0, c.useStateFromStores)([m.default], () => m.default.getGuild(t), [t]), [i, r] = l.useState(!1), u = l.useRef(null);
  l.useEffect(() => (n && (u.current = window.setTimeout(() => {
    r(!0), E.default.track(I.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
      type: o.DismissibleGuildContent[o.DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE],
      guild_id: null != t ? t : I.EMPTY_STRING_SNOWFLAKE_ID
    })
  }, 2500)), () => {
    null != u.current && window.clearTimeout(u.current)
  }), []);
  let d = l.useCallback(() => {
      r(!1), null != t && (0, C.openAdoptClanIdentityModal)(t)
    }, [, t]),
    f = l.useCallback(() => {
      r(!1), null != t && (0, h.markContentAsDismissed)(o.DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE, null != t ? t : I.EMPTY_STRING_SNOWFLAKE_ID, !0, A.ContentDismissActionType.DISMISS)
    }, [t]);
  return n && null != t && null != s ? (0, a.jsx)(x, {
    guild: s,
    onConfirm: d,
    onDismiss: f,
    showToast: i
  }) : null
}