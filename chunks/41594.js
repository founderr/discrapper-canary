"use strict";
t.r(e), t.d(e, {
  ChannelItemIcon: function() {
    return G
  },
  default: function() {
    return H
  }
}), t("222007");
var E = t("37983"),
  n = t("884691"),
  l = t("414456"),
  C = t.n(l),
  F = t("974667"),
  i = t("617258"),
  u = t("446674"),
  a = t("77078"),
  r = t("430568"),
  o = t("789394"),
  D = t("843962"),
  d = t("679653"),
  s = t("419830"),
  A = t("565298"),
  c = t("965381"),
  f = t("305961"),
  _ = t("824563"),
  N = t("191542"),
  T = t("697218"),
  h = t("37785"),
  m = t("98292"),
  v = t("587974"),
  I = t("50885"),
  S = t("49111"),
  p = t("133335"),
  L = t("404135");
let g = (B, e, t) => {
    n.useLayoutEffect(() => {
      let E = null;
      return B > 0 && (clearTimeout(E), E = setTimeout(() => {
        t(), clearTimeout(E)
      }, 4 * e)), () => clearTimeout(E)
    }, [B, e, t])
  },
  O = {
    SELECTED: L.modeSelected,
    CONNECTED: L.modeConnected,
    UNREAD_IMPORTANT: L.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: L.modeUnreadLessImportant,
    MUTED: L.modeMuted,
    LOCKED: L.modeLocked
  };

function y(B) {
  B.preventDefault(), B.stopPropagation()
}
let U = I.default.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function M(B) {
  let {
    channel: e
  } = B;
  return (0, E.jsx)(U, {
    src: (0, D.getChannelIconURL)(e),
    "aria-hidden": !0,
    size: a.AvatarSizes.SIZE_20
  })
}

function R(B) {
  let {
    channel: e
  } = B, t = (0, u.useStateFromStores)([T.default], () => T.default.getUser(null == e ? void 0 : e.recipients[0])), n = (0, u.useStateFromStores)([N.default], () => !(null == t || null == e || e.isMultiUserDM()) && null != N.default.getTypingUsers(null == e ? void 0 : e.id)[null == t ? void 0 : t.id]), {
    status: l,
    isMobile: C
  } = (0, u.useStateFromStoresObject)([_.default], () => null == t || null == e || e.isMultiUserDM() ? {
    status: null,
    isMobile: !1
  } : {
    status: _.default.getStatus(t.id),
    isMobile: _.default.isMobileOnline(t.id)
  });
  return (0, E.jsx)(U, {
    size: a.AvatarSizes.SIZE_20,
    src: null == t ? void 0 : t.getAvatarURL(void 0, 40),
    status: l,
    isMobile: C,
    isTyping: n,
    "aria-label": null == t ? void 0 : t.username,
    statusTooltip: !0
  })
}
let j = [13, 11, 10, 10, 10, 10, 10],
  G = B => {
    var e;
    let {
      className: t,
      channel: n,
      locked: l,
      hasActiveThreads: F,
      withGuildIcon: r
    } = B, o = (0, u.useStateFromStores)([f.default], () => f.default.getGuild(n.guild_id), [n.guild_id]), D = r ? null == o ? void 0 : o.getIconURL(48) : null, d = null != D, A = function(B, e, t) {
      switch (B.type) {
        case S.ChannelTypes.DM:
          return function() {
            return (0, E.jsx)(R, {
              channel: B
            })
          };
        case S.ChannelTypes.GROUP_DM:
          return function() {
            return (0, E.jsx)(M, {
              channel: B
            })
          };
        default:
          return (0, s.getChannelIconComponent)(B, e, t)
      }
    }(n, o, {
      locked: l,
      hasActiveThreads: F
    });
    if (null == A) return null;
    let c = d ? null == o ? void 0 : o.name : (0, s.getChannelIconTooltipText)(n, o, l, F),
      _ = d && null != o ? "".concat(o.name, " - ").concat(c, " icon") : "".concat(c, " icon"),
      N = (0, i.getAcronym)(null !== (e = null == o ? void 0 : o.toString()) && void 0 !== e ? e : null),
      T = n.type === S.ChannelTypes.DM || n.type === S.ChannelTypes.GROUP_DM;
    return (0, E.jsx)(a.Tooltip, {
      text: c,
      delay: 500,
      children: B => {
        var e;
        return (0, E.jsxs)("div", {
          ...B,
          role: "img",
          "aria-label": _,
          className: C(L.iconContainer, {
            [L.iconContainerWithGuildIcon]: d
          }),
          children: [d && (0, E.jsx)(v.default, {
            mask: v.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
            children: (0, E.jsx)("img", {
              alt: "",
              src: D,
              className: L.channelGuildIcon
            })
          }), !d && r && !T && (0, E.jsx)(v.default, {
            mask: v.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
            children: (0, E.jsx)("div", {
              className: C(L.channelGuildIcon, L.acronym),
              style: {
                fontSize: (e = N).length - 1 > j.length ? j[j.length - 1] : j[e.length - 1]
              },
              children: N
            })
          }), (0, E.jsx)(A, {
            className: C(L.icon, {
              [L.iconWithGuildIcon]: r
            }, t)
          })]
        })
      }
    })
  };

function H(B) {
  var e;
  let {
    channel: t,
    name: l,
    muted: i,
    selected: u,
    connected: D,
    unread: s,
    locked: f,
    hasActiveThreads: _,
    onClick: N,
    onMouseDown: T,
    onMouseUp: v,
    onContextMenu: I,
    connectDragPreview: U,
    className: M,
    iconClassName: R,
    subtitle: j,
    subtitleColor: H,
    channel: {
      type: x
    },
    onMouseEnter: b,
    onMouseLeave: P,
    "aria-label": w,
    children: k,
    guild: V,
    channelTypeOverride: J,
    forceInteractable: K,
    mentionCount: W,
    resolvedUnreadSetting: z,
    isFavoriteSuggestion: Y,
    withGuildIcon: q
  } = B, {
    enabled: Z,
    left: Q
  } = o.ChannelEmojisExperiment.useExperiment({
    location: "337985_1"
  }, {
    autoTrackExposure: !1
  }), X = z === p.UnreadSetting.ALL_MESSAGES || null != W && W > 0, {
    role: $,
    ...BB
  } = (0, F.useListItem)(t.id), Be = n.useRef(null), Bt = n.useRef(null), BE = (0, A.default)(t), Bn = S.Routes.CHANNEL(BE, t.id), Bl = (0, d.default)(t), BC = t.isGuildVocal(), {
    reducedMotion: BF
  } = n.useContext(a.AccessibilityPreferencesContext), Bi = BF.enabled, [Bu, Ba] = n.useState([]);
  g(Bu.length, 500, () => {
    Ba([])
  });
  let Br = B => {
      if (Bi) return;
      let e = B.currentTarget.getBoundingClientRect(),
        t = e.width > e.height ? e.width : e.height,
        E = B.pageX - e.x - t / 2,
        n = B.pageY - e.y - t / 2;
      Ba([...Bu, {
        x: E,
        y: n,
        size: t
      }])
    },
    {
      emoji: Bo,
      color: BD
    } = (0, c.useChannelEmojiAndColor)(t),
    Bd = Z ? (0, E.jsx)(r.default, {
      emojiName: Bo.name,
      emojiId: Bo.id,
      src: Bo.url,
      className: L.twemoji
    }) : null,
    Bs = (0, E.jsx)("div", {
      className: C({
        [L.favoritesSuggestion]: Y
      }),
      children: (0, E.jsxs)(h.default, {
        role: BC && !D ? "button" : "link",
        href: BC ? void 0 : Bn,
        target: "_blank",
        ref: Be,
        className: C(L.link, {
          [L.linkWithChannelEmoji]: null != Bd
        }),
        onMouseDown: B => {
          Z && 0 === B.button && Br(B)
        },
        onClick: () => null == N ? void 0 : N(t),
        ...BB,
        "aria-label": w,
        focusProps: {
          enabled: !1
        },
        children: [Z && (0, E.jsx)("div", {
          className: L.emojiColorFill,
          style: {
            backgroundColor: BD,
            opacity: u ? 1 : 0
          }
        }), (0, E.jsxs)("div", {
          className: L.linkTop,
          children: [null != Bd && Q && (0, E.jsx)("div", {
            className: C(L.channelEmoji, L.channelEmojiLeftOfIcon),
            style: {
              backgroundColor: BD
            },
            children: Bd
          }), (0, E.jsx)(G, {
            className: R,
            channel: t,
            guild: V,
            hasActiveThreads: _,
            locked: f,
            withGuildIcon: q
          }), null != Bd && !Q && (0, E.jsx)("div", {
            className: C(L.channelEmoji, L.channelEmojiRightOfIcon),
            style: {
              backgroundColor: BD
            },
            children: Bd
          }), (0, E.jsx)(m.default, {
            className: C(L.name),
            "aria-hidden": !0,
            children: null == l ? Bl : l
          }), n.Children.count(k) > 0 ? (0, E.jsx)("div", {
            onClick: y,
            className: L.children,
            children: k
          }) : null]
        }), null != j ? (0, E.jsx)("div", {
          className: C(L.linkBottom, {
            [L.withGuildIcon]: q
          }),
          children: (0, E.jsx)(a.Text, {
            color: null != H ? H : "text-muted",
            variant: "text-xs/medium",
            className: L.subtitle,
            children: j
          })
        }) : null, Z && Bu.length > 0 && Bu.map((B, e) => (0, E.jsx)("span", {
          className: L.ripple,
          style: {
            top: B.y,
            left: B.x,
            width: B.size,
            height: B.size,
            backgroundColor: BD,
            animationDuration: "".concat(500, "ms"),
            opacity: .36
          }
        }, "ripple-".concat(e)))]
      })
    });
  return (0, E.jsx)(a.FocusRing, {
    focusTarget: Be,
    ringTarget: Bt,
    offset: {
      top: 2,
      bottom: 2,
      right: 4
    },
    children: (0, E.jsxs)("div", {
      className: C(M, null != N || null != v || null != T || K ? L.wrapper : L.notInteractive, (() => {
        if (u && !Z) return O.SELECTED;
        if (D) return O.CONNECTED;
        if (f) return O.LOCKED;
        if (i) return O.MUTED;
        if (s) return X ? O.UNREAD_IMPORTANT : O.UNREAD_LESS_IMPORTANT;
        return null
      })(), function(B) {
        switch (B) {
          case S.ChannelTypes.GUILD_STAGE_VOICE:
          case S.ChannelTypes.GUILD_VOICE:
            return L.typeVoice;
          case S.ChannelTypes.ANNOUNCEMENT_THREAD:
          case S.ChannelTypes.PUBLIC_THREAD:
          case S.ChannelTypes.PRIVATE_THREAD:
            return L.typeThread;
          case S.ChannelTypes.GUILD_ANNOUNCEMENT:
          case S.ChannelTypes.GUILD_TEXT:
          case S.ChannelTypes.GUILD_STORE:
          case S.ChannelTypes.GUILD_FORUM:
          case S.ChannelTypes.GUILD_MEDIA:
          default:
            return L.typeDefault
        }
      }(null != J ? J : x)),
      onMouseUp: B => null == v ? void 0 : v(B, t),
      onMouseDown: B => null == T ? void 0 : T(B, t),
      onContextMenu: B => null == I ? void 0 : I(B, t),
      onMouseEnter: b,
      onMouseLeave: P,
      children: [i || !s || u && !BC ? null : (0, E.jsx)("div", {
        className: C(L.unread, X ? L.unreadImportant : void 0)
      }), null !== (e = null == U ? void 0 : U(Bs)) && void 0 !== e ? e : Bs]
    })
  })
}