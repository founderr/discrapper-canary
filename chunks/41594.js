"use strict";
n.r(t), n.d(t, {
  ChannelItemIcon: function() {
    return x
  },
  default: function() {
    return y
  }
});
var l = n("37983"),
  a = n("884691"),
  i = n("414456"),
  s = n.n(i),
  u = n("974667"),
  r = n("617258"),
  d = n("446674"),
  o = n("77078"),
  c = n("843962"),
  E = n("679653"),
  f = n("419830"),
  h = n("565298"),
  T = n("305961"),
  C = n("824563"),
  I = n("191542"),
  v = n("697218"),
  A = n("37785"),
  N = n("98292"),
  p = n("587974"),
  m = n("50885"),
  _ = n("49111"),
  g = n("133335"),
  D = n("404135");
let L = {
  SELECTED: D.modeSelected,
  CONNECTED: D.modeConnected,
  UNREAD_IMPORTANT: D.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: D.modeUnreadLessImportant,
  MUTED: D.modeMuted,
  LOCKED: D.modeLocked
};

function M(e) {
  e.preventDefault(), e.stopPropagation()
}
let U = m.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

function S(e) {
  let {
    channel: t
  } = e;
  return (0, l.jsx)(U, {
    src: (0, c.getChannelIconURL)(t),
    "aria-hidden": !0,
    size: o.AvatarSizes.SIZE_20
  })
}

function O(e) {
  let {
    channel: t
  } = e, n = (0, d.useStateFromStores)([v.default], () => v.default.getUser(null == t ? void 0 : t.recipients[0])), a = (0, d.useStateFromStores)([I.default], () => !(null == n || null == t || t.isMultiUserDM()) && null != I.default.getTypingUsers(null == t ? void 0 : t.id)[null == n ? void 0 : n.id]), {
    status: i,
    isMobile: s
  } = (0, d.useStateFromStoresObject)([C.default], () => null == n || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: !1
  } : {
    status: C.default.getStatus(n.id),
    isMobile: C.default.isMobileOnline(n.id)
  });
  return (0, l.jsx)(U, {
    size: o.AvatarSizes.SIZE_20,
    src: null == n ? void 0 : n.getAvatarURL(void 0, 40),
    status: i,
    isMobile: s,
    isTyping: a,
    "aria-label": null == n ? void 0 : n.username,
    statusTooltip: !0
  })
}
let R = [13, 11, 10, 10, 10, 10, 10],
  x = e => {
    var t;
    let {
      className: n,
      channel: a,
      locked: i,
      hasActiveThreads: u,
      withGuildIcon: c
    } = e, E = (0, d.useStateFromStores)([T.default], () => T.default.getGuild(a.guild_id), [a.guild_id]), h = c ? null == E ? void 0 : E.getIconURL(48) : null, C = null != h, I = function(e, t, n) {
      switch (e.type) {
        case _.ChannelTypes.DM:
          return function() {
            return (0, l.jsx)(O, {
              channel: e
            })
          };
        case _.ChannelTypes.GROUP_DM:
          return function() {
            return (0, l.jsx)(S, {
              channel: e
            })
          };
        default:
          return (0, f.getChannelIconComponent)(e, t, n)
      }
    }(a, E, {
      locked: i,
      hasActiveThreads: u
    });
    if (null == I) return null;
    let v = C ? null == E ? void 0 : E.name : (0, f.getChannelIconTooltipText)(a, E, i, u),
      A = C && null != E ? "".concat(E.name, " - ").concat(v, " icon") : "".concat(v, " icon"),
      N = (0, r.getAcronym)(null !== (t = null == E ? void 0 : E.toString()) && void 0 !== t ? t : null),
      m = a.type === _.ChannelTypes.DM || a.type === _.ChannelTypes.GROUP_DM;
    return (0, l.jsx)(o.Tooltip, {
      text: v,
      delay: 500,
      children: e => {
        var t;
        return (0, l.jsxs)("div", {
          ...e,
          role: "img",
          "aria-label": A,
          className: s(D.iconContainer, {
            [D.iconContainerWithGuildIcon]: C
          }),
          children: [C && (0, l.jsx)(p.default, {
            mask: p.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
            children: (0, l.jsx)("img", {
              alt: "",
              src: h,
              className: D.channelGuildIcon
            })
          }), !C && c && !m && (0, l.jsx)(p.default, {
            mask: p.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
            children: (0, l.jsx)("div", {
              className: s(D.channelGuildIcon, D.acronym),
              style: {
                fontSize: (t = N).length - 1 > R.length ? R[R.length - 1] : R[t.length - 1]
              },
              children: N
            })
          }), (0, l.jsx)(I, {
            className: s(D.icon, {
              [D.iconWithGuildIcon]: c
            }, n)
          })]
        })
      }
    })
  };

function y(e) {
  var t;
  let {
    channel: n,
    name: i,
    muted: r,
    selected: d,
    connected: c,
    unread: f,
    locked: T,
    hasActiveThreads: C,
    onClick: I,
    onMouseDown: v,
    onMouseUp: p,
    onContextMenu: m,
    connectDragPreview: U,
    className: S,
    iconClassName: O,
    subtitle: R,
    subtitleColor: y,
    channel: {
      type: P
    },
    onMouseEnter: j,
    onMouseLeave: G,
    "aria-label": b,
    children: F,
    guild: k,
    channelTypeOverride: H,
    forceInteractable: w,
    mentionCount: V,
    resolvedUnreadSetting: z,
    isFavoriteSuggestion: W,
    withGuildIcon: Y
  } = e, Z = z === g.UnreadSetting.ALL_MESSAGES || null != V && V > 0, {
    role: q,
    ...K
  } = (0, u.useListItem)(n.id), B = a.useRef(null), X = a.useRef(null), J = (0, h.default)(n), Q = _.Routes.CHANNEL(J, n.id), $ = (0, E.default)(n), ee = n.isGuildVocal(), et = (0, l.jsx)("div", {
    className: s({
      [D.favoritesSuggestion]: W
    }),
    children: (0, l.jsxs)(A.default, {
      role: ee && !c ? "button" : "link",
      href: ee ? void 0 : Q,
      target: "_blank",
      ref: B,
      className: D.link,
      onClick: () => null == I ? void 0 : I(n),
      ...K,
      "aria-label": b,
      focusProps: {
        enabled: !1
      },
      children: [(0, l.jsxs)("div", {
        className: D.linkTop,
        children: [(0, l.jsx)(x, {
          className: O,
          channel: n,
          guild: k,
          hasActiveThreads: C,
          locked: T,
          withGuildIcon: Y
        }), (0, l.jsx)(N.default, {
          className: s(D.name),
          "aria-hidden": !0,
          children: null == i ? $ : i
        }), a.Children.count(F) > 0 ? (0, l.jsx)("div", {
          onClick: M,
          className: D.children,
          children: F
        }) : null]
      }), null != R ? (0, l.jsx)("div", {
        className: s(D.linkBottom, {
          [D.withGuildIcon]: Y
        }),
        children: (0, l.jsx)(o.Text, {
          color: null != y ? y : "text-muted",
          variant: "text-xs/medium",
          className: D.subtitle,
          children: R
        })
      }) : null]
    })
  });
  return (0, l.jsx)(o.FocusRing, {
    focusTarget: B,
    ringTarget: X,
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    },
    children: (0, l.jsxs)("div", {
      className: s(S, null != I || null != p || null != v || w ? D.wrapper : D.notInteractive, (() => {
        if (d) return L.SELECTED;
        if (c) return L.CONNECTED;
        if (T) return L.LOCKED;
        if (r) return L.MUTED;
        if (f) return Z ? L.UNREAD_IMPORTANT : L.UNREAD_LESS_IMPORTANT;
        return null
      })(), function(e) {
        switch (e) {
          case _.ChannelTypes.GUILD_STAGE_VOICE:
          case _.ChannelTypes.GUILD_VOICE:
            return D.typeVoice;
          case _.ChannelTypes.ANNOUNCEMENT_THREAD:
          case _.ChannelTypes.PUBLIC_THREAD:
          case _.ChannelTypes.PRIVATE_THREAD:
            return D.typeThread;
          case _.ChannelTypes.GUILD_ANNOUNCEMENT:
          case _.ChannelTypes.GUILD_TEXT:
          case _.ChannelTypes.GUILD_STORE:
          case _.ChannelTypes.GUILD_FORUM:
          case _.ChannelTypes.GUILD_MEDIA:
          default:
            return D.typeDefault
        }
      }(null != H ? H : P)),
      onMouseUp: e => null == p ? void 0 : p(e, n),
      onMouseDown: e => null == v ? void 0 : v(e, n),
      onContextMenu: e => null == m ? void 0 : m(e, n),
      onMouseEnter: j,
      onMouseLeave: G,
      children: [r || !f || d && !ee ? null : (0, l.jsx)("div", {
        className: s(D.unread, Z ? D.unreadImportant : void 0)
      }), null !== (t = null == U ? void 0 : U(et)) && void 0 !== t ? t : et]
    })
  })
}