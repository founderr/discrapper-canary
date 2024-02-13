"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("907002"),
  u = n("509043"),
  o = n("446674"),
  d = n("769846"),
  c = n("77078"),
  f = n("305961"),
  h = n("476263"),
  C = n("346955"),
  p = n("956089"),
  m = n("159885"),
  E = n("255991"),
  g = n("49111"),
  I = n("782340"),
  _ = n("54965");
let S = (0, m.cssValueToNumber)(d.default.FOLDER_ITEM_ANIMATION_DURATION),
  N = (0, m.cssValueToNumber)(d.default.FOLDER_ITEM_GUILD_ICON_SIZE);

function T(e) {
  let {
    guildId: t,
    animate: n
  } = e, a = (0, o.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]);
  return null == a ? (0, l.jsx)("div", {
    className: _.guildIconUnavailable,
    children: "!"
  }) : (0, l.jsx)(h.default, {
    guild: a,
    animate: n,
    size: h.default.Sizes.SMOL,
    className: _.guildIcon,
    tabIndex: -1
  })
}

function A(e) {
  let t, n, {
      folderNode: s,
      hovered: i,
      expanded: o
    } = e,
    {
      color: d,
      children: c
    } = s,
    f = null != d ? d : g.DEFAULT_FOLDER_COLOR,
    h = c.map(e => e.id),
    [p, m] = a.useState(!1),
    [E, I] = a.useState(o),
    A = o ? 0 : -N,
    L = (0, r.useSpring)({
      transform: "translate3d(0, ".concat(A, "px, 0)"),
      config: {
        duration: S
      },
      onStart() {
        m(!0), I(o)
      },
      onRest() {
        m(!1), I(o)
      }
    }),
    v = p ? L : void 0;
  return (p || E) && (t = (0, l.jsx)(r.animated.div, {
    style: v,
    className: _.expandedFolderIconWrapper,
    children: (0, l.jsx)(C.default, {
      style: {
        color: (0, u.int2hex)(f)
      }
    })
  })), (p || !E) && (n = (0, l.jsx)(r.animated.div, {
    style: v,
    className: _.closedFolderIconWrapper,
    children: h.slice(0, 4).map(e => (0, l.jsx)(T, {
      guildId: e,
      animate: i
    }, e))
  })), (0, l.jsxs)("div", {
    "aria-hidden": !0,
    style: o ? void 0 : {
      backgroundColor: (0, u.int2rgba)(f, .4)
    },
    className: _.folderIconWrapper,
    children: [t, n]
  })
}

function L(e) {
  let {
    folderNode: t,
    forceCircular: n,
    expanded: s,
    sorting: r,
    mediaState: u,
    mentionCount: o = 0,
    tooltipName: d,
    folderGroupId: f,
    folderIconContent: h,
    onClick: C,
    onContextMenu: m,
    onHoverChange: g,
    onKeyDown: S,
    treeItemProps: {
      onFocus: N,
      ...T
    }
  } = e, [L, v] = a.useState(!1), x = a.useCallback(() => {
    r || v(!0), null == g || g(!0)
  }, [r, g]), R = a.useCallback(() => {
    r || v(!1), null == g || g(!1)
  }, [r, g]), M = s || null == u ? null : (0, E.renderMediaBadge)(u), O = !s && o > 0 ? (0, E.renderMentionBadge)(o) : null;
  return (0, l.jsx)(c.BlobMask, {
    selected: !n,
    upperBadge: M,
    lowerBadge: O,
    lowerBadgeWidth: (0, p.getBadgeWidthForValue)(o),
    children: (0, l.jsx)(c.Clickable, {
      className: i(_.folder, {
        [_.hover]: L
      }),
      onClick: C,
      onContextMenu: m,
      onMouseEnter: x,
      onMouseLeave: R,
      onKeyDown: S,
      onFocus: N,
      "aria-label": I.default.Messages.GUILD_FOLDER_TOOLTIP_A11Y_LABEL.format({
        folderName: d,
        mentions: o
      }),
      "aria-expanded": s,
      "aria-owns": f,
      focusProps: {
        enabled: !1
      },
      ...T,
      role: "treeitem",
      children: null != h ? (0, l.jsx)("div", {
        className: _.expandedFolderIconWrapper,
        children: h
      }) : (0, l.jsx)(A, {
        folderNode: t,
        hovered: L,
        expanded: s
      })
    })
  })
}