"use strict";
n.r(t), n.d(t, {
  VoiceUserList: function() {
    return y
  },
  default: function() {
    return D
  }
}), n("424973"), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("966900"),
  o = n("838048"),
  u = n("359902"),
  d = n("780624"),
  c = n("120606"),
  f = n("77078"),
  h = n("204947"),
  p = n("808742"),
  m = n("342845"),
  E = n("953109"),
  C = n("437825"),
  S = n("142303"),
  g = n("462579"),
  _ = n("200639"),
  I = n("97347"),
  T = n("998564"),
  v = n("420145"),
  x = n("82636"),
  N = n("980423"),
  A = n("158998"),
  M = n("49111"),
  R = n("99795"),
  j = n("171644"),
  L = n("782340"),
  O = n("593596");
let y = e => {
    let {
      children: t,
      collapsed: n = !1,
      className: l
    } = e;
    return (0, a.jsx)("div", {
      className: i(l, O.list, n ? O.listCollapse : O.listDefault),
      role: "group",
      children: t
    })
  },
  P = e => {
    let {
      hangStatusActivity: t,
      iconClassName: n,
      isSelf: l
    } = e;
    return null == t ? (0, a.jsx)(f.TooltipContainer, {
      className: O.iconSpacing,
      text: L.default.Messages.HANG_STATUS_VC_ROW_ADD,
      children: (0, a.jsx)(c.PlusLargeIcon, {
        className: i(O.icon, n)
      })
    }, "add-status") : (0, a.jsx)(f.TooltipContainer, {
      className: O.iconSpacing,
      text: (0, p.getHangStatusText)(t),
      children: (0, a.jsx)(m.default, {
        hangStatusActivity: t,
        className: i(O.hangStatusIcon, n, {
          [O.selfHangStatus]: l
        })
      })
    }, "hang-status")
  };
class b extends l.Component {
  renderPrioritySpeaker() {
    let {
      speaking: e,
      priority: t,
      collapsed: n,
      mute: l,
      serverMute: s
    } = this.props;
    return t && !n ? (0, a.jsx)(f.Tooltip, {
      text: L.default.Messages.PRIORITY_SPEAKER,
      children: t => (0, a.jsx)("div", {
        className: i(O.iconPriortySpeaker, {
          [O.iconPriortySpeakerSpeaking]: !l && !s && e
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
      avatarContainerClass: l,
      guildId: s
    } = this.props;
    return (0, a.jsx)("div", {
      className: i(l, O.avatar, {
        [O.avatarLarge]: n === M.OverlayAvatarSizes.LARGE,
        [O.avatarSmall]: n === M.OverlayAvatarSizes.SMALL,
        [O.avatarSpeaking]: e
      }),
      style: {
        backgroundImage: "url(".concat(t.getAvatarURL(s, n === M.OverlayAvatarSizes.LARGE ? 38 : 24), ")")
      }
    })
  }
  renderName() {
    let {
      nick: e,
      user: t,
      collapsed: n,
      speaking: l,
      userNameClassName: s,
      mute: r,
      serverMute: o,
      isGuest: u
    } = this.props;
    return n ? null : (0, a.jsxs)("div", {
      className: i(s, {
        [O.username]: !0,
        [O.usernameSpeaking]: !r && !o && l
      }),
      children: [null != e ? e : A.default.getName(t), u ? (0, a.jsxs)("span", {
        className: O.guestSuffix,
        children: ["\xa0", L.default.Messages.GUEST_NAME_SUFFIX]
      }) : ""]
    })
  }
  renderIcons() {
    let {
      mute: e,
      localMute: t,
      localVideoDisabled: n,
      serverMute: l,
      deaf: s,
      serverDeaf: r,
      collapsed: o,
      video: u,
      isStreaming: d,
      disabled: c,
      isWatching: p,
      iconClassName: m,
      embeddedApplication: E,
      otherClientSessionType: _,
      voicePlatform: I,
      hangStatusActivity: A,
      showHangStatus: M,
      isSelf: y,
      application: b
    } = this.props;
    if (o || c) return null;
    let D = [],
      F = (0, a.jsx)(w, {
        iconClassName: m,
        mute: e,
        localMute: t,
        serverMute: l,
        deaf: s,
        serverDeaf: r
      });
    return (u && (n ? D.push((0, a.jsx)(f.TooltipContainer, {
      className: O.iconSpacing,
      text: L.default.Messages.LOCAL_VIDEO_DISABLED,
      children: (0, a.jsx)(S.default, {
        className: i(O.icon, m),
        foreground: O.strikethrough
      })
    }, "video")) : D.push((0, a.jsx)(f.TooltipContainer, {
      className: O.iconSpacing,
      text: L.default.Messages.VIDEO,
      children: (0, a.jsx)(C.default, {
        className: i(O.icon, m)
      })
    }, "video"))), null != E && D.push((0, a.jsx)(f.TooltipContainer, {
      text: (0, h.default)(E.name),
      className: O.iconSpacing,
      children: (0, a.jsx)(x.default, {
        className: i(O.icon, m)
      })
    }, "activity")), null != b && D.push((0, a.jsx)(U, {
      application: b,
      iconClassName: m
    })), _ === j.GameConsoleTypes.XBOX || I === R.VoicePlatforms.XBOX ? D.push((0, a.jsx)("div", {
      className: i(O.iconSpacing),
      children: (0, a.jsx)(v.default, {
        className: i(O.icon, m)
      })
    }, "xbox")) : (_ === j.GameConsoleTypes.PLAYSTATION || I === R.VoicePlatforms.PLAYSTATION) && D.push((0, a.jsx)("div", {
      className: i(O.iconSpacing),
      children: (0, a.jsx)(T.default, {
        className: i(O.icon, m)
      })
    }, "playstation")), d ? D.push((0, a.jsx)("div", {
      className: i(O.iconSpacing, O.liveIconSpacing),
      children: (0, a.jsx)(N.default, {
        size: N.default.Sizes.SMALL
      })
    }, "stream")) : p && D.push((0, a.jsx)(f.TooltipContainer, {
      className: O.iconSpacing,
      text: L.default.Messages.WATCH_STREAM_WATCHING,
      children: (0, a.jsx)(g.default, {
        className: i(O.icon, m)
      })
    }, "watch")), 0 !== D.length || null != F || M) ? (0, a.jsxs)("div", {
      className: O.icons,
      children: [F, D, M && (0, a.jsx)(P, {
        hangStatusActivity: A,
        iconClassName: m,
        isSelf: y
      })]
    }) : null
  }
  render() {
    let {
      onClick: e,
      onKeyDown: t,
      flipped: n,
      size: l,
      className: s,
      selected: r,
      disabled: o,
      overlap: u,
      "aria-label": d,
      tabIndex: c
    } = this.props;
    return (0, a.jsx)(f.Clickable, {
      className: i(s, {
        [O.voiceUser]: !0,
        [O.overlap]: u,
        [O.selected]: r,
        [O.clickable]: null != e,
        [O.userSmall]: l === M.OverlayAvatarSizes.SMALL,
        [O.userLarge]: l === M.OverlayAvatarSizes.LARGE,
        [O.disabled]: !r && o
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
      children: (0, a.jsxs)("div", {
        className: i(O.content, {
          [O.flipped]: n
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
b.defaultProps = {
  avatarContainerClass: O.avatarContainer,
  userNameClassName: O.usernameFont,
  size: M.OverlayAvatarSizes.SMALL,
  selected: !1,
  disabled: !1
};
var D = b;

function U(e) {
  let {
    application: t,
    iconClassName: n
  } = e;
  return (0, a.jsx)(f.TooltipContainer, {
    text: L.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: t.name
    }),
    "aria-label": L.default.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: t.name
    }),
    className: O.iconSpacing,
    children: (0, a.jsx)(E.default, {
      className: i(O.icon, n),
      game: t,
      size: E.default.Sizes.XSMALL
    })
  }, "game")
}

function w(e) {
  let {
    iconClassName: t,
    mute: n,
    localMute: l,
    serverMute: s,
    deaf: c,
    serverDeaf: h
  } = e, p = (0, f.useRedesignIconContext)().enabled, m = [];
  if (n) {
    let e;
    if (p) {
      let n;
      n = s ? u.MicrophoneDenyIcon : l ? u.MicrophoneDenyIcon : d.MicrophoneSlashIcon, e = (0, a.jsx)(n, {
        className: i(O.icon, t, {
          [O.iconServer]: s
        }),
        color: "currentColor"
      })
    } else e = (0, a.jsx)(I.default, {
      className: i(O.icon, t, {
        [O.iconServer]: s
      }),
      foreground: l ? O.strikethrough : void 0
    });
    m.push((0, a.jsx)(f.TooltipContainer, {
      text: l ? L.default.Messages.LOCAL_MUTED : s ? L.default.Messages.SERVER_MUTED : L.default.Messages.VOICE_CHANNEL_MUTED,
      className: O.iconSpacing,
      children: e
    }, "mute"))
  }
  if (h || c) {
    let e;
    if (p) {
      let n = h ? r.HeadphonesDenyIcon : o.HeadphonesSlashIcon;
      e = (0, a.jsx)(n, {
        className: i(O.icon, t, {
          [O.iconServer]: h
        }),
        color: "currentColor"
      })
    } else e = (0, a.jsx)(_.default, {
      className: i(O.icon, t, {
        [O.iconServer]: h
      })
    });
    m.push((0, a.jsx)(f.TooltipContainer, {
      className: O.iconSpacing,
      text: h ? L.default.Messages.SERVER_DEAFENED : L.default.Messages.VOICE_CHANNEL_DEAFENED,
      children: e
    }, "deaf"))
  }
  return 0 === m.length ? null : (0, a.jsx)(a.Fragment, {
    children: m
  })
}