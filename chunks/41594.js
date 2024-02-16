"use strict";
n.r(t), n.d(t, {
  ChannelItemIcon: function() {
    return O
  },
  default: function() {
    return D
  }
});
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("974667"),
  u = n("617258"),
  o = n("446674"),
  d = n("77078"),
  c = n("843962"),
  f = n("679653"),
  h = n("419830"),
  I = n("565298"),
  g = n("305961"),
  E = n("824563"),
  _ = n("191542"),
  p = n("697218"),
  v = n("37785"),
  m = n("98292"),
  T = n("587974"),
  S = n("50885"),
  N = n("49111"),
  C = n("133335"),
  A = n("39776");
let x = {
  SELECTED: A.modeSelected,
  CONNECTED: A.modeConnected,
  UNREAD_IMPORTANT: A.modeUnreadImportant,
  UNREAD_LESS_IMPORTANT: A.modeUnreadLessImportant,
  MUTED: A.modeMuted,
  LOCKED: A.modeLocked
};

function M(e) {
  e.preventDefault(), e.stopPropagation()
}
let y = S.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

function w(e) {
  let {
    channel: t
  } = e;
  return (0, l.jsx)(y, {
    src: (0, c.getChannelIconURL)(t),
    "aria-hidden": !0,
    size: d.AvatarSizes.SIZE_20
  })
}

function R(e) {
  let {
    channel: t
  } = e, n = (0, o.useStateFromStores)([p.default], () => p.default.getUser(null == t ? void 0 : t.recipients[0])), i = (0, o.useStateFromStores)([_.default], () => !(null == n || null == t || t.isMultiUserDM()) && null != _.default.getTypingUsers(null == t ? void 0 : t.id)[null == n ? void 0 : n.id]), {
    status: a,
    isMobile: s
  } = (0, o.useStateFromStoresObject)([E.default], () => null == n || null == t || t.isMultiUserDM() ? {
    status: null,
    isMobile: !1
  } : {
    status: E.default.getStatus(n.id),
    isMobile: E.default.isMobileOnline(n.id)
  });
  return (0, l.jsx)(y, {
    size: d.AvatarSizes.SIZE_20,
    src: null == n ? void 0 : n.getAvatarURL(void 0, 40),
    status: a,
    isMobile: s,
    isTyping: i,
    "aria-label": null == n ? void 0 : n.username,
    statusTooltip: !0
  })
}
let L = [13, 11, 10, 10, 10, 10, 10],
  O = e => {
    var t;
    let {
      className: n,
      channel: i,
      locked: a,
      hasActiveThreads: r,
      withGuildIcon: c
    } = e, f = (0, o.useStateFromStores)([g.default], () => g.default.getGuild(i.guild_id), [i.guild_id]), I = c ? null == f ? void 0 : f.getIconURL(48) : null, E = null != I, _ = function(e, t, n) {
      switch (e.type) {
        case N.ChannelTypes.DM:
          return function() {
            return (0, l.jsx)(R, {
              channel: e
            })
          };
        case N.ChannelTypes.GROUP_DM:
          return function() {
            return (0, l.jsx)(w, {
              channel: e
            })
          };
        default:
          return (0, h.getChannelIconComponent)(e, t, n)
      }
    }(i, f, {
      locked: a,
      hasActiveThreads: r
    });
    if (null == _) return null;
    let p = E ? null == f ? void 0 : f.name : (0, h.getChannelIconTooltipText)(i, f, a, r),
      v = E && null != f ? "".concat(f.name, " - ").concat(p, " icon") : "".concat(p, " icon"),
      m = (0, u.getAcronym)(null !== (t = null == f ? void 0 : f.toString()) && void 0 !== t ? t : null),
      S = i.type === N.ChannelTypes.DM || i.type === N.ChannelTypes.GROUP_DM;
    return (0, l.jsx)(d.Tooltip, {
      text: p,
      delay: 500,
      children: e => {
        var t;
        return (0, l.jsxs)("div", {
          ...e,
          role: "img",
          "aria-label": v,
          className: s(A.iconContainer, {
            [A.iconContainerWithGuildIcon]: E
          }),
          children: [E && (0, l.jsx)(T.default, {
            mask: T.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
            children: (0, l.jsx)("img", {
              alt: "",
              src: I,
              className: A.channelGuildIcon
            })
          }), !E && c && !S && (0, l.jsx)(T.default, {
            mask: T.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
            children: (0, l.jsx)("div", {
              className: s(A.channelGuildIcon, A.acronym),
              style: {
                fontSize: (t = m).length - 1 > L.length ? L[L.length - 1] : L[t.length - 1]
              },
              children: m
            })
          }), (0, l.jsx)(_, {
            className: s(A.icon, {
              [A.iconWithGuildIcon]: c
            }, n)
          })]
        })
      }
    })
  };

function D(e) {
  var t;
  let {
    channel: n,
    name: a,
    muted: u,
    selected: o,
    connected: c,
    unread: h,
    locked: g,
    hasActiveThreads: E,
    onClick: _,
    onMouseDown: p,
    onMouseUp: T,
    onContextMenu: S,
    connectDragPreview: y,
    className: w,
    iconClassName: R,
    subtitle: L,
    subtitleColor: D,
    channel: {
      type: U
    },
    onMouseEnter: b,
    onMouseLeave: P,
    "aria-label": F,
    children: V,
    guild: j,
    channelTypeOverride: G,
    forceInteractable: H,
    mentionCount: k,
    resolvedUnreadSetting: B,
    isFavoriteSuggestion: W,
    withGuildIcon: z
  } = e, K = B === C.UnreadSetting.ALL_MESSAGES || null != k && k > 0, {
    role: Y,
    ...Z
  } = (0, r.useListItem)(n.id), q = i.useRef(null), X = i.useRef(null), Q = (0, I.default)(n), J = N.Routes.CHANNEL(Q, n.id), $ = (0, f.default)(n), ee = n.isGuildVocal(), et = (0, l.jsx)("div", {
    className: s({
      [A.favoritesSuggestion]: W
    }),
    children: (0, l.jsxs)(v.default, {
      role: ee && !c ? "button" : "link",
      href: ee ? void 0 : J,
      target: "_blank",
      ref: q,
      className: A.link,
      onClick: () => null == _ ? void 0 : _(n),
      ...Z,
      "aria-label": F,
      focusProps: {
        enabled: !1
      },
      children: [(0, l.jsxs)("div", {
        className: A.linkTop,
        children: [(0, l.jsx)(O, {
          className: R,
          channel: n,
          guild: j,
          hasActiveThreads: E,
          locked: g,
          withGuildIcon: z
        }), (0, l.jsx)(m.default, {
          className: s(A.name),
          "aria-hidden": !0,
          children: null == a ? $ : a
        }), i.Children.count(V) > 0 ? (0, l.jsx)("div", {
          onClick: M,
          className: A.children,
          children: V
        }) : null]
      }), null != L ? (0, l.jsx)("div", {
        className: s(A.linkBottom, {
          [A.withGuildIcon]: z
        }),
        children: (0, l.jsx)(d.Text, {
          color: null != D ? D : "text-muted",
          variant: "text-xs/medium",
          className: A.subtitle,
          children: L
        })
      }) : null]
    })
  });
  return (0, l.jsx)(d.FocusRing, {
    focusTarget: q,
    ringTarget: X,
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    },
    children: (0, l.jsxs)("div", {
      className: s(w, null != _ || null != T || null != p || H ? A.wrapper : A.notInteractive, (() => {
        if (o) return x.SELECTED;
        if (c) return x.CONNECTED;
        if (g) return x.LOCKED;
        if (u) return x.MUTED;
        if (h) return K ? x.UNREAD_IMPORTANT : x.UNREAD_LESS_IMPORTANT;
        return null
      })(), function(e) {
        switch (e) {
          case N.ChannelTypes.GUILD_STAGE_VOICE:
          case N.ChannelTypes.GUILD_VOICE:
            return A.typeVoice;
          case N.ChannelTypes.ANNOUNCEMENT_THREAD:
          case N.ChannelTypes.PUBLIC_THREAD:
          case N.ChannelTypes.PRIVATE_THREAD:
            return A.typeThread;
          case N.ChannelTypes.GUILD_ANNOUNCEMENT:
          case N.ChannelTypes.GUILD_TEXT:
          case N.ChannelTypes.GUILD_STORE:
          case N.ChannelTypes.GUILD_FORUM:
          case N.ChannelTypes.GUILD_MEDIA:
          default:
            return A.typeDefault
        }
      }(null != G ? G : U)),
      onMouseUp: e => null == T ? void 0 : T(e, n),
      onMouseDown: e => null == p ? void 0 : p(e, n),
      onContextMenu: e => null == S ? void 0 : S(e, n),
      onMouseEnter: b,
      onMouseLeave: P,
      children: [u || !h || o && !ee ? null : (0, l.jsx)("div", {
        className: s(A.unread, K ? A.unreadImportant : void 0)
      }), null !== (t = null == y ? void 0 : y(et)) && void 0 !== t ? t : et]
    })
  })
}