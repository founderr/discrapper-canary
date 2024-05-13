"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
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
  S = n("169559"),
  _ = n("940725"),
  T = n("114487"),
  I = n("979264"),
  A = n("981631"),
  N = n("921944"),
  v = n("689938"),
  x = n("838373");

function M(e) {
  var t;
  let {
    guild: n,
    showToast: s,
    onConfirm: o,
    onDismiss: h
  } = e, [m, p] = l.useState(!1), E = l.useRef(null), C = (0, S.default)("guild_clan_tag_toast"), _ = (0, c.useStateFromStores)([f.default], () => f.default.useReducedMotion);
  l.useLayoutEffect(() => {
    var e;
    if (null == E.current) return;
    let t = null === (e = E.current) || void 0 === e ? void 0 : e.parentNode;
    return null != t && (t.style.zIndex = "1003"), () => {
      null != t && (t.style.zIndex = "1002")
    }
  }, []);
  let A = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), h()
    }, [h]),
    N = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), o()
    }, [o]),
    M = (0, r.useTransition)(s, {
      from: {
        transform: _ ? "translateY(0)" : "translateY(16px)",
        opacity: 0,
        pointerEvents: "none"
      },
      enter: {
        transform: "translateY(0)",
        opacity: 1,
        pointerEvents: "all"
      },
      leave: {
        transform: _ ? "translateY(0)" : "translateY(16px)",
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
  if (!C) return null;
  let R = (0, g.getClanBadgeUrl)(n.id, null === (t = n.clan) || void 0 === t ? void 0 : t.badge);
  return M((e, t) => {
    var l;
    return t && (0, a.jsx)(r.animated.div, {
      onMouseEnter: () => p(!0),
      onMouseLeave: () => p(!1),
      className: i()(x.wrapper),
      style: e,
      ref: E,
      children: (0, a.jsx)(d.ClickableContainer, {
        "aria-label": v.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_ARIA_LABEL.format({
          guildName: n.name
        }),
        onClick: N,
        children: (0, a.jsxs)("div", {
          className: i()(x.toastContainerInner, m ? x.hovered : null),
          children: [(0, a.jsxs)("div", {
            className: x.guildIconContainer,
            children: [(0, a.jsx)(T.default, {
              guild: n,
              iconSize: 64,
              className: x.icon
            }), (0, a.jsx)("div", {
              className: x.guildTagContainer,
              children: (0, a.jsx)(I.BaseClanTagChiplet, {
                clanTag: null === (l = n.clan) || void 0 === l ? void 0 : l.tag,
                clanBadge: R,
                className: x.guildClanTag
              })
            })]
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)("div", {
              children: (0, a.jsx)(d.Heading, {
                variant: "heading-md/bold",
                color: "header-primary",
                children: v.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_TITLE.format({
                  guildName: n.name
                })
              })
            }), (0, a.jsx)("div", {
              children: (0, a.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "header-secondary",
                children: v.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_DESCRIPTION
              })
            })]
          }), (0, a.jsx)("div", {
            children: (0, a.jsx)(d.Clickable, {
              className: x.toastButton,
              onClick: A,
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

function R(e) {
  let {} = e, t = (0, c.useStateFromStores)([p.default], () => p.default.getGuildId()), n = (0, _.useShouldShowUserClanTagUpsell)(t, "clan_tag_upsell_toast"), s = (0, c.useStateFromStores)([m.default], () => m.default.getGuild(t), [t]), [i, r] = l.useState(!1), u = l.useRef(null);
  l.useEffect(() => (n && (u.current = window.setTimeout(() => {
    r(!0), E.default.track(A.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
      type: o.DismissibleGuildContent[o.DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE],
      guild_id: null != t ? t : A.EMPTY_STRING_SNOWFLAKE_ID
    })
  }, 2500)), () => {
    null != u.current && window.clearTimeout(u.current)
  }), []);
  let d = l.useCallback(() => {
      r(!1), null != t && (0, C.openAdoptClanIdentityModal)(t)
    }, [, t]),
    f = l.useCallback(() => {
      r(!1), null != t && (0, h.markContentAsDismissed)(o.DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE, null != t ? t : A.EMPTY_STRING_SNOWFLAKE_ID, !0, N.ContentDismissActionType.DISMISS)
    }, [t]);
  return n && null != t && null != s ? (0, a.jsx)(M, {
    guild: s,
    onConfirm: d,
    onDismiss: f,
    showToast: i
  }) : null
}