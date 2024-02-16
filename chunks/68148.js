"use strict";
n.r(t), n.d(t, {
  VoiceUserList: function() {
    return D
  },
  default: function() {
    return F
  }
}), n("424973"), n("702976"), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("966900"),
  o = n("838048"),
  u = n("359902"),
  d = n("780624"),
  c = n("120606"),
  f = n("77078"),
  h = n("811425"),
  m = n("204947"),
  p = n("716241"),
  E = n("808742"),
  S = n("342845"),
  g = n("953109"),
  C = n("437825"),
  _ = n("142303"),
  I = n("462579"),
  T = n("200639"),
  v = n("97347"),
  x = n("998564"),
  N = n("420145"),
  A = n("82636"),
  M = n("980423"),
  R = n("568734"),
  j = n("158998"),
  L = n("49111"),
  y = n("99795"),
  O = n("171644"),
  P = n("782340"),
  b = n("274750");
let D = e => {
    let {
      children: t,
      collapsed: n = !1,
      className: a
    } = e;
    return (0, l.jsx)("div", {
      className: i(a, b.list, n ? b.listCollapse : b.listDefault),
      role: "group",
      children: t
    })
  },
  U = e => {
    let {
      hangStatusActivity: t,
      iconClassName: n,
      isSelf: a
    } = e;
    return a && null == t ? (0, l.jsx)(f.TooltipContainer, {
      className: b.iconSpacing,
      text: P.default.Messages.HANG_STATUS_VC_ROW_ADD,
      children: (0, l.jsx)(c.PlusLargeIcon, {
        className: i(b.icon, n)
      })
    }, "add-status") : (0, l.jsx)(f.TooltipContainer, {
      className: b.iconSpacing,
      text: (0, E.getHangStatusText)(t),
      children: (0, l.jsx)(S.default, {
        hangStatusActivity: t,
        className: i(b.hangStatusIcon, n)
      })
    }, "hang-status")
  };
class w extends a.Component {
  renderPrioritySpeaker() {
    let {
      speaking: e,
      priority: t,
      collapsed: n,
      mute: a,
      serverMute: s
    } = this.props;
    return t && !n ? (0, l.jsx)(f.Tooltip, {
      text: P.default.Messages.PRIORITY_SPEAKER,
      children: t => (0, l.jsx)("div", {
        className: i(b.iconPriortySpeaker, {
          [b.iconPriortySpeakerSpeaking]: !a && !s && e
        }),
        ...t
      })
    }) : null
  }
  renderAvatar() {
    let {
      speaking: e,
      user: t,
      size: n,
      avatarContainerClass: a,
      guildId: s
    } = this.props;
    return (0, l.jsx)("div", {
      className: i(a, b.avatar, {
        [b.avatarLarge]: n === L.OverlayAvatarSizes.LARGE,
        [b.avatarSmall]: n === L.OverlayAvatarSizes.SMALL,
        [b.avatarSpeaking]: e
      }),
      style: {
        backgroundImage: "url(".concat(t.getAvatarURL(s, n === L.OverlayAvatarSizes.LARGE ? 38 : 24), ")")
      }
    })
  }
  renderName() {
    let {
      nick: e,
      user: t,
      collapsed: n,
      speaking: a,
      userNameClassName: s,
      mute: r,
      serverMute: o,
      isGuest: u
    } = this.props;
    return n ? null : (0, l.jsxs)("div", {
      className: i(s, {
        [b.username]: !0,
        [b.usernameSpeaking]: !r && !o && a
      }),
      children: [null != e ? e : j.default.getName(t), u ? (0, l.jsxs)("span", {
        className: b.guestSuffix,
        children: ["\xa0", P.default.Messages.GUEST_NAME_SUFFIX]
      }) : ""]
    })
  }
  renderIcons() {
    let {
      mute: e,
      localMute: t,
      localVideoDisabled: n,
      serverMute: a,
      deaf: s,
      serverDeaf: r,
      collapsed: o,
      video: u,
      isStreaming: d,
      disabled: c,
      isWatching: h,
      iconClassName: p,
      embeddedApplication: E,
      otherClientSessionType: S,
      voicePlatform: g,
      hangStatusActivity: T,
      showHangStatus: v,
      isSelf: j,
      application: D,
      guildId: w,
      channelId: F,
      user: V,
      handleHoverHangStatus: H
    } = this.props;
    if (o || c) return null;
    let G = [],
      W = (0, l.jsx)(B, {
        iconClassName: p,
        mute: e,
        localMute: t,
        serverMute: a,
        deaf: s,
        serverDeaf: r
      });
    u && (n ? G.push((0, l.jsx)(f.TooltipContainer, {
      className: b.iconSpacing,
      text: P.default.Messages.LOCAL_VIDEO_DISABLED,
      children: (0, l.jsx)(_.default, {
        className: i(b.icon, p),
        foreground: b.strikethrough
      })
    }, "video")) : G.push((0, l.jsx)(f.TooltipContainer, {
      className: b.iconSpacing,
      text: P.default.Messages.VIDEO,
      children: (0, l.jsx)(C.default, {
        className: i(b.icon, p)
      })
    }, "video"))), null != E && G.push((0, l.jsx)(f.TooltipContainer, {
      text: (0, m.default)(E.name),
      className: b.iconSpacing,
      children: (0, l.jsx)(A.default, {
        className: i(b.icon, p)
      })
    }, "activity")), S === O.GameConsoleTypes.XBOX || g === y.VoicePlatforms.XBOX ? G.push((0, l.jsx)("div", {
      className: i(b.iconSpacing),
      children: (0, l.jsx)(N.default, {
        className: i(b.icon, p)
      })
    }, "xbox")) : (S === O.GameConsoleTypes.PLAYSTATION || g === y.VoicePlatforms.PLAYSTATION) && G.push((0, l.jsx)("div", {
      className: i(b.iconSpacing),
      children: (0, l.jsx)(x.default, {
        className: i(b.icon, p)
      })
    }, "playstation")), d ? G.push((0, l.jsx)("div", {
      className: i(b.iconSpacing, b.liveIconSpacing),
      children: (0, l.jsx)(M.default, {
        size: M.default.Sizes.SMALL
      })
    }, "stream")) : h && G.push((0, l.jsx)(f.TooltipContainer, {
      className: b.iconSpacing,
      text: P.default.Messages.WATCH_STREAM_WATCHING,
      children: (0, l.jsx)(I.default, {
        className: i(b.icon, p)
      })
    }, "watch"));
    let Y = null != D && !(0, R.hasFlag)(D.flags, L.ApplicationFlags.EMBEDDED),
      z = null == T && Y;
    return 0 !== G.length || null != W || v || z ? (0, l.jsxs)("div", {
      className: b.icons,
      children: [(0, l.jsxs)("div", {
        className: b.iconGroup,
        onMouseEnter: () => null == H ? void 0 : H(!1),
        children: [W, G]
      }), v || z ? (0, l.jsx)("div", {
        className: b.iconGroup,
        onMouseEnter: () => null == H ? void 0 : H(!0),
        children: z ? (0, l.jsx)(k, {
          application: D,
          iconClassName: p,
          guildId: w,
          channelId: F,
          userId: V.id
        }, "".concat(V.id, "-game")) : (0, l.jsx)(U, {
          hangStatusActivity: T,
          iconClassName: p,
          isSelf: j
        })
      }) : null]
    }) : null
  }
  render() {
    let {
      onClick: e,
      onKeyDown: t,
      flipped: n,
      size: a,
      className: s,
      selected: r,
      disabled: o,
      overlap: u,
      "aria-label": d,
      tabIndex: c
    } = this.props;
    return (0, l.jsx)(f.Clickable, {
      className: i(s, {
        [b.voiceUser]: !0,
        [b.overlap]: u,
        [b.selected]: r,
        [b.clickable]: null != e,
        [b.userSmall]: a === L.OverlayAvatarSizes.SMALL,
        [b.userLarge]: a === L.OverlayAvatarSizes.LARGE,
        [b.disabled]: !r && o
      }),
      onClick: this.handleClick,
      onDoubleClick: this.handleDoubleClick,
      onContextMenu: this.handleContextMenu,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onMouseDown: this.handleMouseDown,
      onKeyDown: t,
      "aria-label": d,
      tabIndex: c,
      children: (0, l.jsxs)("div", {
        className: i(b.content, {
          [b.flipped]: n
        }),
        children: [this.renderPrioritySpeaker(), this.renderAvatar(), this.renderName(), this.renderIcons()]
      })
    })
  }
  constructor(...e) {
    super(...e), this.handleClick = e => {
      let {
        onClick: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }, this.handleDoubleClick = e => {
      let {
        onDoubleClick: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }, this.handleContextMenu = e => {
      let {
        onContextMenu: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }, this.handleMouseLeave = e => {
      let {
        onMouseLeave: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }, this.handleMouseEnter = e => {
      let {
        onMouseEnter: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }, this.handleMouseDown = e => {
      let {
        onMouseDown: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }
  }
}
w.defaultProps = {
  avatarContainerClass: b.avatarContainer,
  userNameClassName: b.usernameFont,
  size: L.OverlayAvatarSizes.SMALL,
  selected: !1,
  disabled: !1
};
var F = w;

function k(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: s,
    channelId: r,
    userId: o
  } = e, [u, d] = a.useState(!1), c = (0, h.useIsVisible)(e => d(e));
  return a.useEffect(() => {
    u && p.default.trackWithMetadata(L.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: r,
      guild_id: s,
      user_id: o
    })
  }, [t.id, r, s, o, u]), (0, l.jsx)(f.TooltipContainer, {
    text: P.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: t.name
    }),
    "aria-label": P.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: t.name
    }),
    className: b.iconSpacing,
    children: (0, l.jsx)("div", {
      ref: c,
      children: (0, l.jsx)(g.default, {
        className: i(b.icon, n),
        game: t,
        size: g.default.Sizes.XSMALL,
        onMouseEnter: () => {
          p.default.trackWithMetadata(L.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: r,
            guild_id: s,
            game_name: t.name,
            user_id: o
          })
        }
      })
    })
  })
}

function B(e) {
  let {
    iconClassName: t,
    mute: n,
    localMute: a,
    serverMute: s,
    deaf: c,
    serverDeaf: h
  } = e, m = (0, f.useRedesignIconContext)().enabled, p = [];
  if (n) {
    let e;
    if (m) {
      let n;
      n = s ? u.MicrophoneDenyIcon : a ? u.MicrophoneDenyIcon : d.MicrophoneSlashIcon, e = (0, l.jsx)(n, {
        className: i(b.icon, t, {
          [b.iconServer]: s
        }),
        color: "currentColor"
      })
    } else e = (0, l.jsx)(v.default, {
      className: i(b.icon, t, {
        [b.iconServer]: s
      }),
      foreground: a ? b.strikethrough : void 0
    });
    p.push((0, l.jsx)(f.TooltipContainer, {
      text: a ? P.default.Messages.LOCAL_MUTED : s ? P.default.Messages.SERVER_MUTED : P.default.Messages.VOICE_CHANNEL_MUTED,
      className: b.iconSpacing,
      children: e
    }, "mute"))
  }
  if (h || c) {
    let e;
    if (m) {
      let n = h ? r.HeadphonesDenyIcon : o.HeadphonesSlashIcon;
      e = (0, l.jsx)(n, {
        className: i(b.icon, t, {
          [b.iconServer]: h
        }),
        color: "currentColor"
      })
    } else e = (0, l.jsx)(T.default, {
      className: i(b.icon, t, {
        [b.iconServer]: h
      })
    });
    p.push((0, l.jsx)(f.TooltipContainer, {
      className: b.iconSpacing,
      text: h ? P.default.Messages.SERVER_DEAFENED : P.default.Messages.VOICE_CHANNEL_DEAFENED,
      children: e
    }, "deaf"))
  }
  return 0 === p.length ? null : (0, l.jsx)(l.Fragment, {
    children: p
  })
}