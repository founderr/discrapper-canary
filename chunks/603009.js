"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("920906"),
  o = n("524437"),
  u = n("287088"),
  d = n("481060"),
  c = n("442837"),
  f = n("410030"),
  h = n("607070"),
  m = n("645041"),
  p = n("430824"),
  E = n("914010"),
  C = n("594174"),
  g = n("626135"),
  S = n("645896"),
  _ = n("905362"),
  T = n("603368"),
  I = n("353093"),
  A = n("940725"),
  v = n("114487"),
  N = n("979264"),
  x = n("981631"),
  M = n("921944"),
  R = n("689938"),
  y = n("838373");

function L(e) {
  var t;
  let {
    guild: n,
    showToast: s,
    onConfirm: o,
    onDismiss: m
  } = e, [p, E] = l.useState(!1), g = l.useRef(null), _ = (0, S.useClanInfo)(n.id), A = (0, f.default)(), x = (0, c.useStateFromStores)([h.default], () => h.default.useReducedMotion), M = (0, T.useBrandColor)(null == _ ? void 0 : null === (t = _.branding) || void 0 === t ? void 0 : t.primaryColor, [d.tokens.colors.BG_BRAND, .5]), L = d.tokens.colors.BG_SURFACE_OVERLAY.resolve({
    theme: A,
    saturation: 1
  }).hex(), O = (0, T.getClanRadialBackgroundStyle)(M, L, "top left", .3, "30%"), j = (0, c.useStateFromStores)([C.default], () => {
    var e;
    return null === (e = C.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan
  }, []);
  l.useLayoutEffect(() => {
    var e;
    if (null == g.current) return;
    let t = null === (e = g.current) || void 0 === e ? void 0 : e.parentNode;
    return null != t && (t.style.zIndex = "1003"), () => {
      null != t && (t.style.zIndex = "1002")
    }
  }, []);
  let P = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), m()
    }, [m]),
    D = l.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), o()
    }, [o]),
    b = (0, r.useTransition)(s, {
      from: {
        transform: x ? "translateY(0)" : "translateY(16px)",
        opacity: 0,
        pointerEvents: "none"
      },
      enter: {
        transform: "translateY(0)",
        opacity: 1,
        pointerEvents: "all"
      },
      leave: {
        transform: x ? "translateY(0)" : "translateY(16px)",
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
    U = (0, I.isGuildAdoptedUserClanIdentityChanged)(n, j),
    F = U ? R.default.Messages.CLAN_USER_ADOPT_TAG_NEW_IDENTITY_TITLE.format({
      guildName: n.name
    }) : R.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_TITLE.format({
      guildName: n.name
    }),
    w = U ? R.default.Messages.CLAN_USER_ADOPT_TAG_NEW_IDENTITY_DESCRIPTION : R.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_DESCRIPTION,
    k = U ? R.default.Messages.CLAN_USER_ADOPT_TAG_NEW_IDENTITY_ARIA_LABEL.format({
      guildName: n.name
    }) : R.default.Messages.CLAN_USER_ADOPT_TAG_UPSELL_ARIA_LABEL.format({
      guildName: n.name
    });
  return b((e, t) => {
    var l, s;
    return t && (0, a.jsx)(r.animated.div, {
      onMouseEnter: () => E(!0),
      onMouseLeave: () => E(!1),
      className: i()(y.wrapper),
      style: {
        ...e,
        ...O
      },
      ref: g,
      children: (0, a.jsx)(d.ClickableContainer, {
        "aria-label": k,
        onClick: D,
        children: (0, a.jsxs)("div", {
          className: i()(y.toastContainerInner, p ? y.hovered : null),
          children: [(0, a.jsxs)("div", {
            className: y.guildIconContainer,
            children: [(0, a.jsx)(v.default, {
              guild: n,
              iconSize: 64,
              className: y.icon
            }), (0, a.jsx)("div", {
              className: y.guildTagContainer,
              children: (0, a.jsx)(N.BaseClanTagChiplet, {
                guildId: n.id,
                clanTag: null === (l = n.clan) || void 0 === l ? void 0 : l.tag,
                clanBadge: null === (s = n.clan) || void 0 === s ? void 0 : s.badge,
                className: y.guildClanTag
              })
            })]
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)("div", {
              children: (0, a.jsx)(d.Heading, {
                variant: "heading-md/bold",
                color: "header-primary",
                children: F
              })
            }), (0, a.jsx)("div", {
              children: (0, a.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "header-secondary",
                children: w
              })
            })]
          }), (0, a.jsx)("div", {
            children: (0, a.jsx)(d.Clickable, {
              className: y.toastButton,
              onClick: P,
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

function O(e) {
  let {} = e, t = (0, c.useStateFromStores)([E.default], () => E.default.getGuildId()), n = (0, A.useShouldShowUserClanTagUpsell)(t, "clan_tag_upsell_toast"), s = (0, c.useStateFromStores)([p.default], () => p.default.getGuild(t), [t]), [i, r] = l.useState(!1), u = l.useRef(null);
  l.useEffect(() => (n && (u.current = window.setTimeout(() => {
    r(!0), g.default.track(x.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
      type: o.DismissibleGuildContent[o.DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE],
      guild_id: null != t ? t : x.EMPTY_STRING_SNOWFLAKE_ID
    })
  }, 2500)), () => {
    null != u.current && window.clearTimeout(u.current)
  }), []);
  let d = l.useCallback(() => {
      r(!1), null != t && (0, _.openAdoptClanIdentityModal)(t)
    }, [, t]),
    f = l.useCallback(() => {
      r(!1), null != t && (0, m.markContentAsDismissed)(o.DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE, null != t ? t : x.EMPTY_STRING_SNOWFLAKE_ID, !0, M.ContentDismissActionType.DISMISS)
    }, [t]);
  return n && null != t && null != s ? (0, a.jsx)(L, {
    guild: s,
    onConfirm: d,
    onDismiss: f,
    showToast: i
  }) : null
}