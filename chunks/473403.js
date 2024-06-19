t.d(n, {
  Z: function() {
    return v
  },
  _: function() {
    return V
  }
});
var l = t(735250),
  s = t(470079),
  u = t(120356),
  i = t.n(u);
if (12633 == t.j) var r = t(91192);
var a = t(442837),
  I = t(481060),
  o = t(43267),
  _ = t(933557),
  E = t(471445),
  N = t(727429),
  d = t(430824),
  T = t(158776),
  c = t(111583),
  S = t(594174),
  O = t(104175),
  f = t(499150),
  M = t(514342),
  m = t(998502),
  P = t(981631),
  g = t(490897),
  U = t(359123);
let h = {
  SELECTED: U.modeSelected,
  CONNECTED: U.modeConnected,
  UNREAD_IMPORTANT: U.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: U.modeUnreadLessImportant,
  MUTED: U.modeMuted,
  LOCKED: U.modeLocked
};

function D(e) {
  e.preventDefault(), e.stopPropagation()
}
let R = m.ZP.getEnableHardwareAcceleration() ? I.AnimatedAvatar : I.Avatar;

function A(e) {
  let {
    channel: n
  } = e;
  return (0, l.jsx)(R, {
    src: (0, o.x)(n),
    "aria-hidden": !0,
    size: I.AvatarSizes.SIZE_20
  })
}

function p(e) {
  let {
    channel: n
  } = e, t = (0, a.e7)([S.default], () => S.default.getUser(null == n ? void 0 : n.recipients[0])), s = (0, a.e7)([c.Z], () => !(null == t || null == n || n.isMultiUserDM()) && null != c.Z.getTypingUsers(null == n ? void 0 : n.id)[null == t ? void 0 : t.id]), {
    status: u,
    isMobile: i
  } = (0, a.cj)([T.Z], () => null == t || null == n || n.isMultiUserDM() ? {
    status: null,
    isMobile: !1
  } : {
    status: T.Z.getStatus(t.id),
    isMobile: T.Z.isMobileOnline(t.id)
  });
  return (0, l.jsx)(R, {
    size: I.AvatarSizes.SIZE_20,
    src: null == t ? void 0 : t.getAvatarURL(void 0, 40),
    status: u,
    isMobile: i,
    isTyping: s,
    "aria-label": null == t ? void 0 : t.username,
    statusTooltip: !0
  })
}
let V = e => {
  let {
    className: n,
    channel: t,
    locked: s,
    hasActiveThreads: u,
    withGuildIcon: r
  } = e, o = (0, a.e7)([d.Z], () => d.Z.getGuild(t.guild_id), [t.guild_id]), _ = t.type === P.d4z.DM || t.type === P.d4z.GROUP_DM, N = null;
  if (r && null != o && !_) N = (0, l.jsx)(O.Z, {
    size: O.E.SMALL_32,
    className: U.iconContainerWithGuildIcon,
    iconClassName: U.iconWithGuildIcon,
    channel: t,
    guild: o,
    locked: s,
    hasActiveThreads: u
  });
  else {
    let e = function(e, n, t) {
      switch (e.type) {
        case P.d4z.DM:
          return function() {
            return (0, l.jsx)(p, {
              channel: e
            })
          };
        case P.d4z.GROUP_DM:
          return function() {
            return (0, l.jsx)(A, {
              channel: e
            })
          };
        default:
          return (0, E.KS)(e, n, t)
      }
    }(t, o, {
      locked: s,
      hasActiveThreads: u
    });
    if (null == e) return null;
    N = (0, l.jsx)(e, {
      color: "currentColor",
      className: i()(U.icon, n)
    })
  }
  let T = r ? null == o ? void 0 : o.name : (0, E.bT)(t, o, s, u),
    c = r && null != o ? "".concat(o.name, " - ").concat(T, " icon") : "".concat(T, " icon");
  return (0, l.jsx)(I.Tooltip, {
    text: T,
    delay: 500,
    children: e => (0, l.jsx)("div", {
      ...e,
      role: "img",
      "aria-label": c,
      className: i()(U.iconContainer),
      children: N
    })
  })
};

function v(e) {
  var n;
  let {
    channel: t,
    name: u,
    muted: a,
    selected: o,
    connected: E,
    unread: d,
    locked: T,
    hasActiveThreads: c,
    onClick: S,
    onMouseDown: O,
    onMouseUp: m,
    onContextMenu: R,
    connectDragPreview: A,
    className: p,
    iconClassName: v,
    subtitle: Z,
    subtitleColor: C,
    channel: {
      type: L
    },
    onMouseEnter: y,
    onMouseLeave: x,
    "aria-label": G,
    children: H,
    guild: b,
    channelTypeOverride: j,
    forceInteractable: z,
    mentionCount: X,
    resolvedUnreadSetting: k,
    isFavoriteSuggestion: F,
    withGuildIcon: Y
  } = e, w = k === g.i.ALL_MESSAGES || null != X && X > 0, {
    role: q,
    ...K
  } = (0, r.JA)(t.id), B = s.useRef(null), W = s.useRef(null), J = (0, N.Z)(t), Q = P.Z5c.CHANNEL(J, t.id), $ = (0, _.ZP)(t), ee = t.isGuildVocal(), en = (0, l.jsx)("div", {
    className: i()({
      [U.favoritesSuggestion]: F
    }),
    ref: W,
    children: (0, l.jsxs)(f.Z, {
      role: ee && !E ? "button" : "link",
      href: ee ? void 0 : Q,
      target: "_blank",
      ref: B,
      className: U.link,
      onClick: () => null == S ? void 0 : S(t),
      ...K,
      "aria-label": G,
      focusProps: {
        enabled: !1
      },
      children: [(0, l.jsxs)("div", {
        className: U.linkTop,
        children: [(0, l.jsx)(V, {
          className: v,
          channel: t,
          guild: b,
          hasActiveThreads: c,
          locked: T,
          withGuildIcon: Y
        }), (0, l.jsx)(M.Z, {
          className: i()(U.name),
          "aria-hidden": !0,
          children: null == u ? $ : u
        }), s.Children.count(H) > 0 ? (0, l.jsx)("div", {
          onClick: D,
          className: U.children,
          children: H
        }) : null]
      }), null != Z ? (0, l.jsx)("div", {
        className: i()(U.linkBottom, {
          [U.withGuildIcon]: Y
        }),
        children: (0, l.jsx)(I.Text, {
          color: null != C ? C : "text-muted",
          variant: "text-xs/medium",
          className: U.subtitle,
          children: Z
        })
      }) : null]
    })
  });
  return (0, l.jsx)(I.FocusRing, {
    focusTarget: B,
    ringTarget: W,
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    },
    children: (0, l.jsxs)("div", {
      className: i()(p, null != S || null != m || null != O || z ? U.wrapper : U.notInteractive, (() => {
        if (o) return h.SELECTED;
        if (E) return h.CONNECTED;
        if (T) return h.LOCKED;
        if (a) return h.MUTED;
        if (d) return w ? h.UNREAD_IMPORTANT : h.UNREAD_LESS_IMPORTANT;
        return null
      })(), function(e) {
        switch (e) {
          case P.d4z.GUILD_STAGE_VOICE:
          case P.d4z.GUILD_VOICE:
            return U.typeVoice;
          case P.d4z.ANNOUNCEMENT_THREAD:
          case P.d4z.PUBLIC_THREAD:
          case P.d4z.PRIVATE_THREAD:
            return U.typeThread;
          case P.d4z.GUILD_ANNOUNCEMENT:
          case P.d4z.GUILD_TEXT:
          case P.d4z.GUILD_STORE:
          case P.d4z.GUILD_FORUM:
          case P.d4z.GUILD_MEDIA:
          default:
            return U.typeDefault
        }
      }(null != j ? j : L)),
      onMouseUp: e => null == m ? void 0 : m(e, t),
      onMouseDown: e => null == O ? void 0 : O(e, t),
      onContextMenu: e => null == R ? void 0 : R(e, t),
      onMouseEnter: y,
      onMouseLeave: x,
      children: [a || !d ? null : (0, l.jsx)("div", {
        className: i()(U.unread, w ? U.unreadImportant : void 0)
      }), null !== (n = null == A ? void 0 : A(en)) && void 0 !== n ? n : en]
    })
  })
}