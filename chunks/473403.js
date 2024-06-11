"use strict";
n.r(t), n.d(t, {
  ChannelItemIcon: function() {
    return C
  },
  default: function() {
    return y
  }
});
var l = n("735250"),
  u = n("470079"),
  s = n("120356"),
  a = n.n(s),
  r = n("924826"),
  i = n("442837"),
  I = n("481060"),
  o = n("43267"),
  d = n("933557"),
  _ = n("471445"),
  T = n("727429"),
  c = n("430824"),
  f = n("158776"),
  E = n("111583"),
  N = n("594174"),
  S = n("104175"),
  O = n("499150"),
  m = n("514342"),
  h = n("998502"),
  g = n("981631"),
  M = n("490897"),
  p = n("628462");
let U = {
  SELECTED: p.modeSelected,
  CONNECTED: p.modeConnected,
  UNREAD_IMPORTANT: p.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: p.modeUnreadLessImportant,
  MUTED: p.modeMuted,
  LOCKED: p.modeLocked
};

function D(e) {
  e.preventDefault(), e.stopPropagation()
}
let R = h.default.getEnableHardwareAcceleration() ? I.AnimatedAvatar : I.Avatar;

function P(e) {
  let {
    channel: t
  } = e;
  return (0, l.jsx)(R, {
    src: (0, o.getChannelIconURL)(t),
    "aria-hidden": !0,
    size: I.AvatarSizes.SIZE_20
  })
}

function A(e) {
  let {
    channel: t
  } = e, n = (0, i.useStateFromStores)([N.default], () => N.default.getUser(null == t ? void 0 : t.recipients[0])), u = (0, i.useStateFromStores)([E.default], () => !(null == n || null == t || t.isMultiUserDM()) && null != E.default.getTypingUsers(null == t ? void 0 : t.id)[null == n ? void 0 : n.id]), {
    status: s,
    isMobile: a
  } = (0, i.useStateFromStoresObject)([f.default], () => null == n || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: !1
  } : {
    status: f.default.getStatus(n.id),
    isMobile: f.default.isMobileOnline(n.id)
  });
  return (0, l.jsx)(R, {
    size: I.AvatarSizes.SIZE_20,
    src: null == n ? void 0 : n.getAvatarURL(void 0, 40),
    status: s,
    isMobile: a,
    isTyping: u,
    "aria-label": null == n ? void 0 : n.username,
    statusTooltip: !0
  })
}
let C = e => {
  let {
    className: t,
    channel: n,
    locked: u,
    hasActiveThreads: s,
    withGuildIcon: r
  } = e, o = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(n.guild_id), [n.guild_id]), d = n.type === g.ChannelTypes.DM || n.type === g.ChannelTypes.GROUP_DM, T = null;
  if (r && null != o && !d) T = (0, l.jsx)(S.default, {
    size: S.GuildIconWithChannelTypeSizes.SMALL_32,
    className: p.iconContainerWithGuildIcon,
    iconClassName: p.iconWithGuildIcon,
    channel: n,
    guild: o,
    locked: u,
    hasActiveThreads: s
  });
  else {
    let e = function(e, t, n) {
      switch (e.type) {
        case g.ChannelTypes.DM:
          return function() {
            return (0, l.jsx)(A, {
              channel: e
            })
          };
        case g.ChannelTypes.GROUP_DM:
          return function() {
            return (0, l.jsx)(P, {
              channel: e
            })
          };
        default:
          return (0, _.getChannelIconComponent)(e, t, n)
      }
    }(n, o, {
      locked: u,
      hasActiveThreads: s
    });
    if (null == e) return null;
    T = (0, l.jsx)(e, {
      className: a()(p.icon, t)
    })
  }
  let f = r ? null == o ? void 0 : o.name : (0, _.getChannelIconTooltipText)(n, o, u, s),
    E = r && null != o ? "".concat(o.name, " - ").concat(f, " icon") : "".concat(f, " icon");
  return (0, l.jsx)(I.Tooltip, {
    text: f,
    delay: 500,
    children: e => (0, l.jsx)("div", {
      ...e,
      role: "img",
      "aria-label": E,
      className: a()(p.iconContainer),
      children: T
    })
  })
};

function y(e) {
  var t;
  let {
    channel: n,
    name: s,
    muted: i,
    selected: o,
    connected: _,
    unread: c,
    locked: f,
    hasActiveThreads: E,
    onClick: N,
    onMouseDown: S,
    onMouseUp: h,
    onContextMenu: R,
    connectDragPreview: P,
    className: A,
    iconClassName: y,
    subtitle: v,
    subtitleColor: V,
    channel: {
      type: x
    },
    onMouseEnter: L,
    onMouseLeave: G,
    "aria-label": b,
    children: j,
    guild: H,
    channelTypeOverride: k,
    forceInteractable: F,
    mentionCount: w,
    resolvedUnreadSetting: X,
    isFavoriteSuggestion: Y,
    withGuildIcon: z
  } = e, K = X === M.UnreadSetting.ALL_MESSAGES || null != w && w > 0, {
    role: B,
    ...W
  } = (0, r.useListItem)(n.id), q = u.useRef(null), J = u.useRef(null), Z = (0, T.default)(n), Q = g.Routes.CHANNEL(Z, n.id), $ = (0, d.default)(n), ee = n.isGuildVocal(), et = (0, l.jsx)("div", {
    className: a()({
      [p.favoritesSuggestion]: Y
    }),
    ref: J,
    children: (0, l.jsxs)(O.default, {
      role: ee && !_ ? "button" : "link",
      href: ee ? void 0 : Q,
      target: "_blank",
      ref: q,
      className: p.link,
      onClick: () => null == N ? void 0 : N(n),
      ...W,
      "aria-label": b,
      focusProps: {
        enabled: !1
      },
      children: [(0, l.jsxs)("div", {
        className: p.linkTop,
        children: [(0, l.jsx)(C, {
          className: y,
          channel: n,
          guild: H,
          hasActiveThreads: E,
          locked: f,
          withGuildIcon: z
        }), (0, l.jsx)(m.default, {
          className: a()(p.name),
          "aria-hidden": !0,
          children: null == s ? $ : s
        }), u.Children.count(j) > 0 ? (0, l.jsx)("div", {
          onClick: D,
          className: p.children,
          children: j
        }) : null]
      }), null != v ? (0, l.jsx)("div", {
        className: a()(p.linkBottom, {
          [p.withGuildIcon]: z
        }),
        children: (0, l.jsx)(I.Text, {
          color: null != V ? V : "text-muted",
          variant: "text-xs/medium",
          className: p.subtitle,
          children: v
        })
      }) : null]
    })
  });
  return (0, l.jsx)(I.FocusRing, {
    focusTarget: q,
    ringTarget: J,
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    },
    children: (0, l.jsxs)("div", {
      className: a()(A, null != N || null != h || null != S || F ? p.wrapper : p.notInteractive, (() => {
        if (o) return U.SELECTED;
        if (_) return U.CONNECTED;
        if (f) return U.LOCKED;
        if (i) return U.MUTED;
        if (c) return K ? U.UNREAD_IMPORTANT : U.UNREAD_LESS_IMPORTANT;
        return null
      })(), function(e) {
        switch (e) {
          case g.ChannelTypes.GUILD_STAGE_VOICE:
          case g.ChannelTypes.GUILD_VOICE:
            return p.typeVoice;
          case g.ChannelTypes.ANNOUNCEMENT_THREAD:
          case g.ChannelTypes.PUBLIC_THREAD:
          case g.ChannelTypes.PRIVATE_THREAD:
            return p.typeThread;
          case g.ChannelTypes.GUILD_ANNOUNCEMENT:
          case g.ChannelTypes.GUILD_TEXT:
          case g.ChannelTypes.GUILD_STORE:
          case g.ChannelTypes.GUILD_FORUM:
          case g.ChannelTypes.GUILD_MEDIA:
          default:
            return p.typeDefault
        }
      }(null != k ? k : x)),
      onMouseUp: e => null == h ? void 0 : h(e, n),
      onMouseDown: e => null == S ? void 0 : S(e, n),
      onContextMenu: e => null == R ? void 0 : R(e, n),
      onMouseEnter: L,
      onMouseLeave: G,
      children: [i || !c ? null : (0, l.jsx)("div", {
        className: a()(p.unread, K ? p.unreadImportant : void 0)
      }), null !== (t = null == P ? void 0 : P(et)) && void 0 !== t ? t : et]
    })
  })
}