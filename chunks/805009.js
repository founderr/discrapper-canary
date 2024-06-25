n.d(t, {
  e: function() {
    return A
  }
}), n(653041), n(789020), n(47120);
var l, i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  o = n(481060),
  c = n(434650),
  u = n(657305),
  d = n(367907),
  h = n(282256),
  m = n(833858),
  E = n(223135),
  p = n(366695),
  g = n(374129),
  f = n(639351),
  C = n(368666),
  _ = n(630388),
  I = n(51144),
  x = n(981631),
  T = n(354459),
  N = n(927923),
  Z = n(689938),
  S = n(711212);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let A = e => {
    let {
      children: t,
      collapsed: n = !1,
      className: l
    } = e;
    return (0, i.jsx)("div", {
      className: r()(l, S.list, n ? S.listCollapse : S.listDefault),
      role: "group",
      children: t
    })
  },
  M = e => {
    let {
      hangStatusActivity: t,
      iconClassName: n,
      isSelf: l
    } = e;
    return l && null == t ? (0, i.jsx)(o.TooltipContainer, {
      className: S.iconSpacing,
      text: Z.Z.Messages.HANG_STATUS_VC_ROW_ADD,
      children: (0, i.jsx)(o.PlusLargeIcon, {
        className: r()(S.icon, n)
      })
    }, "add-status") : (0, i.jsx)(o.TooltipContainer, {
      className: S.iconSpacing,
      text: (0, m.O8)(t),
      children: (0, i.jsx)(E.Z, {
        hangStatusActivity: t,
        className: r()(S.hangStatusIcon, n)
      })
    }, "hang-status")
  };
class R extends(l = s.Component) {
  renderPrioritySpeaker() {
    let {
      speaking: e,
      priority: t,
      collapsed: n,
      mute: l,
      serverMute: s
    } = this.props;
    return t && !n ? (0, i.jsx)(o.Tooltip, {
      text: Z.Z.Messages.PRIORITY_SPEAKER,
      children: t => (0, i.jsx)("div", {
        className: r()(S.iconPriortySpeaker, {
          [S.iconPriortySpeakerSpeaking]: !l && !s && e
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
    return (0, i.jsx)("div", {
      className: r()(l, S.avatar, {
        [S.avatarLarge]: n === x.ipw.LARGE,
        [S.avatarSmall]: n === x.ipw.SMALL,
        [S.avatarSpeaking]: e
      }),
      style: {
        backgroundImage: "url(".concat(t.getAvatarURL(s, n === x.ipw.LARGE ? 38 : 24), ")")
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
      mute: a,
      serverMute: o,
      isGuest: c,
      isOverlay: u,
      guildId: d
    } = this.props, m = (0, i.jsxs)("div", {
      className: r()(s, {
        [S.username]: !0,
        [S.usernameSpeaking]: !a && !o && l
      }),
      children: [null != e ? e : I.ZP.getName(t), c ? (0, i.jsxs)("span", {
        className: S.guestSuffix,
        children: ["\xa0", Z.Z.Messages.GUEST_NAME_SUFFIX]
      }) : ""]
    }), E = {
      clan: t.clan,
      userId: t.id,
      contextGuildId: d,
      isOverlay: u,
      disableTooltip: !0,
      className: r()(S.clanTag, u && S.isOverlay),
      profileViewedAnalytics: {
        source: u ? x.jXE.OVERLAY : x.Sbl.VOICE_PANEL,
        tagUserId: t.id
      }
    };
    return !n || u ? (0, i.jsx)(i.Fragment, {
      children: (0, i.jsx)(h.Z, {
        ...E,
        children: m
      })
    }) : null
  }
  renderIcons() {
    let {
      mute: e,
      localMute: t,
      localVideoDisabled: n,
      serverMute: l,
      deaf: s,
      serverDeaf: a,
      collapsed: c,
      video: d,
      isStreaming: h,
      disabled: m,
      isWatching: E,
      iconClassName: p,
      embeddedApplication: I,
      otherClientSessionType: v,
      voicePlatform: A,
      hangStatusActivity: R,
      showHangStatus: O,
      isSelf: P,
      application: y,
      guildId: b,
      channelId: D,
      user: U,
      handleHoverHangStatus: k,
      handleHoverIcons: w,
      disconnected: H
    } = this.props;
    if (c || m) return null;
    let G = [],
      B = (0, i.jsx)(L, {
        iconClassName: p,
        mute: e,
        localMute: t,
        serverMute: l,
        deaf: s,
        serverDeaf: a
      });
    d && (n ? G.push((0, i.jsx)(o.TooltipContainer, {
      className: S.iconSpacing,
      text: Z.Z.Messages.LOCAL_VIDEO_DISABLED,
      children: (0, i.jsx)(o.VideoSlashIcon, {
        size: "md",
        color: "currentColor",
        className: r()(S.icon, p),
        colorClass: S.strikethrough
      })
    }, "video")) : G.push((0, i.jsx)(o.TooltipContainer, {
      className: S.iconSpacing,
      text: Z.Z.Messages.VIDEO,
      children: (0, i.jsx)(o.VideoIcon, {
        size: "md",
        color: "currentColor",
        className: r()(S.icon, p)
      })
    }, "video"))), H && G.push((0, i.jsx)(o.TooltipContainer, {
      className: S.iconSpacing,
      text: Z.Z.Messages.NOTICE_USER_DISCONNECTED,
      children: (0, i.jsx)(o.CircleExclamationPointIcon, {
        className: r()(S.icon, p),
        color: o.tokens.colors.STATUS_WARNING_BACKGROUND
      })
    }, "disconnected")), null != I && G.push((0, i.jsx)(o.TooltipContainer, {
      text: (0, u.Z)(I.name),
      className: S.iconSpacing,
      children: (0, i.jsx)(o.ActivitiesIcon, {
        size: "md",
        color: "currentColor",
        className: r()(S.icon, p)
      })
    }, "activity")), v === N.YE.XBOX || A === T.wR.XBOX ? G.push((0, i.jsx)("div", {
      className: r()(S.iconSpacing),
      children: (0, i.jsx)(f.Z, {
        className: r()(S.icon, p)
      })
    }, "xbox")) : (v === N.YE.PLAYSTATION || A === T.wR.PLAYSTATION) && G.push((0, i.jsx)("div", {
      className: r()(S.iconSpacing),
      children: (0, i.jsx)(g.Z, {
        className: r()(S.icon, p)
      })
    }, "playstation")), h ? G.push((0, i.jsx)("div", {
      className: r()(S.iconSpacing, S.liveIconSpacing),
      children: (0, i.jsx)(C.ZP, {
        size: C.ZP.Sizes.SMALL
      })
    }, "stream")) : E && G.push((0, i.jsx)(o.TooltipContainer, {
      className: S.iconSpacing,
      text: Z.Z.Messages.WATCH_STREAM_WATCHING,
      children: (0, i.jsx)(o.EyeIcon, {
        size: "xs",
        color: "currentColor",
        className: r()(S.icon, p)
      })
    }, "watch"));
    let V = null != y && !(0, _.yE)(y.flags, x.udG.EMBEDDED),
      F = null == R && V;
    return 0 !== G.length || null != B || O || F ? (0, i.jsxs)("div", {
      className: S.icons,
      children: [(0, i.jsxs)("div", {
        className: S.iconGroup,
        onMouseEnter: () => null == w ? void 0 : w(!0),
        onMouseLeave: () => null == w ? void 0 : w(!1),
        children: [B, G]
      }), O || F ? (0, i.jsx)("div", {
        className: S.iconGroup,
        onMouseEnter: () => null == k ? void 0 : k(!0),
        onMouseLeave: () => null == k ? void 0 : k(!1),
        children: F ? (0, i.jsx)(j, {
          application: y,
          iconClassName: p,
          guildId: b,
          channelId: D,
          userId: U.id
        }, "".concat(U.id, "-game")) : (0, i.jsx)(M, {
          hangStatusActivity: R,
          iconClassName: p,
          isSelf: P
        })
      }) : null]
    }) : null
  }
  render() {
    let {
      onClick: e,
      onKeyDown: t,
      flipped: n,
      size: l,
      className: s,
      selected: a,
      disabled: c,
      overlap: u,
      "aria-label": d,
      tabIndex: h
    } = this.props;
    return (0, i.jsx)(o.Clickable, {
      className: r()(s, {
        [S.voiceUser]: !0,
        [S.overlap]: u,
        [S.selected]: a,
        [S.clickable]: null != e,
        [S.userSmall]: l === x.ipw.SMALL,
        [S.userLarge]: l === x.ipw.LARGE,
        [S.disabled]: !a && c
      }),
      onClick: this.handleClick,
      onDoubleClick: this.handleDoubleClick,
      onContextMenu: this.handleContextMenu,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onMouseDown: this.handleMouseDown,
      onKeyDown: t,
      "aria-label": d,
      tabIndex: h,
      children: (0, i.jsxs)("div", {
        className: r()(S.content, {
          [S.flipped]: n
        }),
        children: [this.renderPrioritySpeaker(), this.renderAvatar(), this.renderName(), this.renderIcons()]
      })
    })
  }
  constructor(...e) {
    super(...e), v(this, "handleClick", e => {
      let {
        onClick: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), v(this, "handleDoubleClick", e => {
      let {
        onDoubleClick: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), v(this, "handleContextMenu", e => {
      let {
        onContextMenu: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), v(this, "handleMouseLeave", e => {
      let {
        onMouseLeave: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), v(this, "handleMouseEnter", e => {
      let {
        onMouseEnter: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    }), v(this, "handleMouseDown", e => {
      let {
        onMouseDown: t,
        user: n
      } = this.props;
      null == t || t(e, n)
    })
  }
}

function j(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: l,
    channelId: a,
    userId: u
  } = e, [h, m] = s.useState(!1), E = (0, c.O)(e => m(e));
  return s.useEffect(() => {
    h && d.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: a,
      guild_id: l,
      user_id: u
    })
  }, [t.id, a, l, u, h]), (0, i.jsx)(o.TooltipContainer, {
    text: Z.Z.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: t.name
    }),
    "aria-label": Z.Z.Messages.UNFORMATTED_PLAYING_GAME.format({
      game: t.name
    }),
    className: S.iconSpacing,
    children: (0, i.jsx)("div", {
      ref: E,
      children: (0, i.jsx)(p.Z, {
        className: r()(S.icon, n),
        game: t,
        size: p.Z.Sizes.XSMALL,
        onMouseEnter: () => {
          d.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: a,
            guild_id: l,
            game_name: t.name,
            user_id: u
          })
        }
      })
    })
  })
}

function L(e) {
  let {
    iconClassName: t,
    mute: n,
    localMute: l,
    serverMute: s,
    deaf: a,
    serverDeaf: c
  } = e, u = (0, o.useRedesignIconContext)().enabled, d = [];
  if (n) {
    let e;
    if (u) {
      let n;
      n = s ? o.MicrophoneDenyIcon : l ? o.MicrophoneDenyIcon : o.MicrophoneSlashIcon, e = (0, i.jsx)(n, {
        className: r()(S.icon, t, {
          [S.iconServer]: s
        }),
        color: "currentColor"
      })
    } else e = (0, i.jsx)(o.MicrophoneSlashIcon, {
      size: "md",
      color: "currentColor",
      className: r()(S.icon, t, {
        [S.iconServer]: s
      }),
      colorClass: l ? S.strikethrough : void 0
    });
    d.push((0, i.jsx)(o.TooltipContainer, {
      text: l ? Z.Z.Messages.LOCAL_MUTED : s ? Z.Z.Messages.SERVER_MUTED : Z.Z.Messages.VOICE_CHANNEL_MUTED,
      className: S.iconSpacing,
      children: e
    }, "mute"))
  }
  if (c || a) {
    let e;
    if (u) {
      let n = c ? o.HeadphonesDenyIcon : o.HeadphonesSlashIcon;
      e = (0, i.jsx)(n, {
        className: r()(S.icon, t, {
          [S.iconServer]: c
        }),
        color: "currentColor"
      })
    } else e = (0, i.jsx)(o.HeadphonesSlashIcon, {
      size: "md",
      color: "currentColor",
      className: r()(S.icon, t, {
        [S.iconServer]: c
      })
    });
    d.push((0, i.jsx)(o.TooltipContainer, {
      className: S.iconSpacing,
      text: c ? Z.Z.Messages.SERVER_DEAFENED : Z.Z.Messages.VOICE_CHANNEL_DEAFENED,
      children: e
    }, "deaf"))
  }
  return 0 === d.length ? null : (0, i.jsx)(i.Fragment, {
    children: d
  })
}
v(R, "defaultProps", {
  avatarContainerClass: S.avatarContainer,
  userNameClassName: S.usernameFont,
  size: x.ipw.SMALL,
  selected: !1,
  disabled: !1,
  isOverlay: !1
}), t.Z = R