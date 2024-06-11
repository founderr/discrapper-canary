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
  i = n("924826"),
  r = n("442837"),
  I = n("481060"),
  o = n("43267"),
  d = n("933557"),
  _ = n("471445"),
  T = n("727429"),
  E = n("430824"),
  f = n("158776"),
  N = n("111583"),
  c = n("594174"),
  S = n("104175"),
  O = n("499150"),
  h = n("514342"),
  m = n("998502"),
  M = n("981631"),
  g = n("490897"),
  U = n("628462");
let D = {
  SELECTED: U.modeSelected,
  CONNECTED: U.modeConnected,
  UNREAD_IMPORTANT: U.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: U.modeUnreadLessImportant,
  MUTED: U.modeMuted,
  LOCKED: U.modeLocked
};

function p(e) {
  e.preventDefault(), e.stopPropagation()
}
let R = m.default.getEnableHardwareAcceleration() ? I.AnimatedAvatar : I.Avatar;

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
  } = e, n = (0, r.useStateFromStores)([c.default], () => c.default.getUser(null == t ? void 0 : t.recipients[0])), u = (0, r.useStateFromStores)([N.default], () => !(null == n || null == t || t.isMultiUserDM()) && null != N.default.getTypingUsers(null == t ? void 0 : t.id)[null == n ? void 0 : n.id]), {
    status: s,
    isMobile: a
  } = (0, r.useStateFromStoresObject)([f.default], () => null == n || null == t || t.isMultiUserDM() ? {
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
    withGuildIcon: i
  } = e, o = (0, r.useStateFromStores)([E.default], () => E.default.getGuild(n.guild_id), [n.guild_id]), d = n.type === M.ChannelTypes.DM || n.type === M.ChannelTypes.GROUP_DM, T = null;
  if (i && null != o && !d) T = (0, l.jsx)(S.default, {
    size: S.GuildIconWithChannelTypeSizes.SMALL_32,
    className: U.iconContainerWithGuildIcon,
    iconClassName: U.iconWithGuildIcon,
    channel: n,
    guild: o,
    locked: u,
    hasActiveThreads: s
  });
  else {
    let e = function(e, t, n) {
      switch (e.type) {
        case M.ChannelTypes.DM:
          return function() {
            return (0, l.jsx)(A, {
              channel: e
            })
          };
        case M.ChannelTypes.GROUP_DM:
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
      className: a()(U.icon, t)
    })
  }
  let f = i ? null == o ? void 0 : o.name : (0, _.getChannelIconTooltipText)(n, o, u, s),
    N = i && null != o ? "".concat(o.name, " - ").concat(f, " icon") : "".concat(f, " icon");
  return (0, l.jsx)(I.Tooltip, {
    text: f,
    delay: 500,
    children: e => (0, l.jsx)("div", {
      ...e,
      role: "img",
      "aria-label": N,
      className: a()(U.iconContainer),
      children: T
    })
  })
};

function y(e) {
  var t;
  let {
    channel: n,
    name: s,
    muted: r,
    selected: o,
    connected: _,
    unread: E,
    locked: f,
    hasActiveThreads: N,
    onClick: c,
    onMouseDown: S,
    onMouseUp: m,
    onContextMenu: R,
    connectDragPreview: P,
    className: A,
    iconClassName: y,
    subtitle: v,
    subtitleColor: V,
    channel: {
      type: L
    },
    onMouseEnter: x,
    onMouseLeave: G,
    "aria-label": H,
    children: b,
    guild: j,
    channelTypeOverride: F,
    forceInteractable: k,
    mentionCount: X,
    resolvedUnreadSetting: w,
    isFavoriteSuggestion: Y,
    withGuildIcon: z
  } = e, K = w === g.UnreadSetting.ALL_MESSAGES || null != X && X > 0, {
    role: B,
    ...W
  } = (0, i.useListItem)(n.id), q = u.useRef(null), Z = u.useRef(null), J = (0, T.default)(n), Q = M.Routes.CHANNEL(J, n.id), $ = (0, d.default)(n), ee = n.isGuildVocal(), et = (0, l.jsx)("div", {
    className: a()({
      [U.favoritesSuggestion]: Y
    }),
    ref: Z,
    children: (0, l.jsxs)(O.default, {
      role: ee && !_ ? "button" : "link",
      href: ee ? void 0 : Q,
      target: "_blank",
      ref: q,
      className: U.link,
      onClick: () => null == c ? void 0 : c(n),
      ...W,
      "aria-label": H,
      focusProps: {
        enabled: !1
      },
      children: [(0, l.jsxs)("div", {
        className: U.linkTop,
        children: [(0, l.jsx)(C, {
          className: y,
          channel: n,
          guild: j,
          hasActiveThreads: N,
          locked: f,
          withGuildIcon: z
        }), (0, l.jsx)(h.default, {
          className: a()(U.name),
          "aria-hidden": !0,
          children: null == s ? $ : s
        }), u.Children.count(b) > 0 ? (0, l.jsx)("div", {
          onClick: p,
          className: U.children,
          children: b
        }) : null]
      }), null != v ? (0, l.jsx)("div", {
        className: a()(U.linkBottom, {
          [U.withGuildIcon]: z
        }),
        children: (0, l.jsx)(I.Text, {
          color: null != V ? V : "text-muted",
          variant: "text-xs/medium",
          className: U.subtitle,
          children: v
        })
      }) : null]
    })
  });
  return (0, l.jsx)(I.FocusRing, {
    focusTarget: q,
    ringTarget: Z,
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    },
    children: (0, l.jsxs)("div", {
      className: a()(A, null != c || null != m || null != S || k ? U.wrapper : U.notInteractive, (() => {
        if (o) return D.SELECTED;
        if (_) return D.CONNECTED;
        if (f) return D.LOCKED;
        if (r) return D.MUTED;
        if (E) return K ? D.UNREAD_IMPORTANT : D.UNREAD_LESS_IMPORTANT;
        return null
      })(), function(e) {
        switch (e) {
          case M.ChannelTypes.GUILD_STAGE_VOICE:
          case M.ChannelTypes.GUILD_VOICE:
            return U.typeVoice;
          case M.ChannelTypes.ANNOUNCEMENT_THREAD:
          case M.ChannelTypes.PUBLIC_THREAD:
          case M.ChannelTypes.PRIVATE_THREAD:
            return U.typeThread;
          case M.ChannelTypes.GUILD_ANNOUNCEMENT:
          case M.ChannelTypes.GUILD_TEXT:
          case M.ChannelTypes.GUILD_STORE:
          case M.ChannelTypes.GUILD_FORUM:
          case M.ChannelTypes.GUILD_MEDIA:
          default:
            return U.typeDefault
        }
      }(null != F ? F : L)),
      onMouseUp: e => null == m ? void 0 : m(e, n),
      onMouseDown: e => null == S ? void 0 : S(e, n),
      onContextMenu: e => null == R ? void 0 : R(e, n),
      onMouseEnter: x,
      onMouseLeave: G,
      children: [r || !E ? null : (0, l.jsx)("div", {
        className: a()(U.unread, K ? U.unreadImportant : void 0)
      }), null !== (t = null == P ? void 0 : P(et)) && void 0 !== t ? t : et]
    })
  })
}