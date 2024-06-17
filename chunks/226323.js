"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("653041"), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("742444"),
  u = n("498503"),
  d = n("247636"),
  c = n("278724"),
  f = n("481060"),
  E = n("239091"),
  h = n("586902"),
  C = n("512384"),
  _ = n("484459"),
  m = n("103575"),
  S = n("314897"),
  p = n("131951"),
  I = n("381238"),
  g = n("779863"),
  T = n("729285"),
  A = n("150954"),
  N = n("51144"),
  v = n("524484"),
  R = n("689938"),
  O = n("164159");
let L = {
    offset: 2
  },
  P = {
    serverDeaf: {
      icon: I.default,
      colorize: !0,
      getStatus: () => R.default.Messages.SERVER_DEAFENED
    },
    serverMute: {
      icon: g.default,
      colorize: !0,
      getStatus: () => R.default.Messages.SERVER_MUTED
    },
    deaf: {
      icon: I.default,
      colorize: !1,
      getStatus: () => R.default.Messages.VOICE_CHANNEL_DEAFENED
    },
    mute: {
      icon: g.default,
      colorize: !1,
      getStatus: () => R.default.Messages.VOICE_CHANNEL_MUTED
    }
  },
  M = {
    serverDeaf: {
      icon: o.HeadphonesDenyIcon,
      colorize: !0,
      getStatus: () => R.default.Messages.SERVER_DEAFENED
    },
    serverMute: {
      icon: d.MicrophoneDenyIcon,
      colorize: !0,
      getStatus: () => R.default.Messages.SERVER_MUTED
    },
    deaf: {
      icon: u.HeadphonesSlashIcon,
      colorize: !1,
      getStatus: () => R.default.Messages.VOICE_CHANNEL_DEAFENED
    },
    mute: {
      icon: c.MicrophoneSlashIcon,
      colorize: !1,
      getStatus: () => R.default.Messages.VOICE_CHANNEL_MUTED
    },
    localMute: {
      icon: d.MicrophoneDenyIcon,
      colorize: !1,
      getStatus: () => R.default.Messages.VOICE_CHANNEL_LOCAL_MUTED
    }
  };

function y(e) {
  var t, s;
  let {
    channel: l,
    user: o,
    nick: u,
    mute: d,
    deaf: c,
    serverMute: S,
    serverDeaf: I
  } = e, g = (0, r.useStateFromStores)([p.default], () => p.default.isLocalMute(o.id)), T = (0, h.default)({
    userId: o.id,
    checkSoundSharing: !0
  }), A = null !== (t = l.getGuildId()) && void 0 !== t ? t : void 0, y = o.getAvatarURL(l.guild_id, 24), D = null != u ? u : N.default.getName(o), {
    icon: x,
    colorize: b,
    getStatus: U
  } = null !== (s = function(e) {
    let {
      serverDeaf: t,
      deaf: n,
      serverMute: a,
      mute: s,
      localMute: l
    } = e, i = (0, f.useRedesignIconContext)().enabled;
    if (t) return i ? M.serverDeaf : P.serverDeaf;
    if (n) return i ? M.deaf : P.deaf;
    if (a) return i ? M.serverMute : P.serverMute;
    else if (l) return i ? M.localMute : P.mute;
    else if (s) return i ? M.mute : P.mute
  }({
    serverDeaf: I,
    deaf: c,
    serverMute: S,
    mute: d,
    localMute: g
  })) && void 0 !== s ? s : {}, j = null != U ? R.default.Messages.VOICE_PANEL_USER_TOOLTIP.format({
    userName: D,
    status: U()
  }) : D;

  function G(e) {
    null != A ? (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("36441"), n.e("12435"), n.e("7717")]).then(n.bind(n, "757387"));
      return t => (0, a.jsx)(e, {
        ...t,
        user: o,
        guildId: A,
        channel: l,
        showMediaItems: !0
      })
    }) : (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("36441"), n.e("69220")]).then(n.bind(n, "881351"));
      return t => (0, a.jsx)(e, {
        ...t,
        user: o,
        showMediaItems: !0
      })
    })
  }
  return (0, a.jsx)(f.Popout, {
    preload: () => (0, _.maybeFetchUserProfileForPopout)(o.id, o.getAvatarURL(A, 80), {
      guildId: A,
      channelId: l.id
    }),
    position: "top",
    renderPopout: e => (0, a.jsx)(m.default, {
      location: "RTCConnectionVoiceUsers",
      userId: o.id,
      guildId: A,
      channelId: l.id,
      ...e
    }),
    children: e => (0, a.jsx)(f.Tooltip, {
      text: j,
      children: t => (0, a.jsx)(f.Clickable, {
        ...t,
        ...e,
        className: O.avatarContainer,
        onContextMenu: G,
        focusProps: L,
        children: (0, a.jsx)(C.default, {
          shakeLocation: v.ShakeLocation.VOICE_USER,
          isShaking: T,
          children: (0, a.jsx)("div", {
            className: i()(O.avatar, {
              [O.speaking]: T
            }),
            style: {
              backgroundImage: "url(".concat(y, ")")
            },
            children: null != x ? (0, a.jsx)(x, {
              className: i()(O.avatarIconOverlay, {
                [O.avatarIconRed]: b
              }),
              color: "currentColor",
              width: 16,
              height: 16,
              foreground: O.avatarIconRed
            }) : null
          })
        })
      })
    })
  })
}

function D(e) {
  let {
    voiceStates: t,
    channel: n,
    className: l
  } = e, [o, u] = s.useState(!1), d = o ? A.default : T.default, c = (0, a.jsx)(f.CircleIconButton, {
    className: O.expandButton,
    onClick: () => u(!o),
    color: f.CircleIconButtonColors.PRIMARY,
    size: f.CircleIconButtonSizes.SIZE_24,
    tooltip: o ? R.default.Messages.VOICE_PANEL_HIDE_EXTRAS : R.default.Messages.VOICE_PANEL_SHOW_EXTRAS,
    icon: (0, a.jsx)(d, {
      width: 16,
      height: 16
    }),
    focusProps: L
  }), E = (0, r.useStateFromStores)([S.default], () => S.default.getId(), []), [h, C] = function(e, t) {
    let n = [];
    for (let a of e) {
      if (a.user.id !== t) {
        if (!n.some(e => e.user.id === a.user.id)) {
          if (n.length >= 7) return [n, !0];
          n.push(a)
        }
      }
    }
    return [n, !1]
  }(t, E), _ = C && o ? t : h;
  return _.length <= 0 ? null : (0, a.jsx)(f.ScrollerThin, {
    className: i()(O.scroller, l),
    fade: !0,
    children: (0, a.jsxs)("div", {
      className: O.voiceUsers,
      role: "group",
      "aria-label": R.default.Messages.VOICE_PANEL_USERS_A11Y_LABEL,
      children: [_.map(e => {
        let {
          user: t,
          nick: s,
          voiceState: l
        } = e;
        return t.id !== E ? (0, a.jsx)(y, {
          channel: n,
          user: t,
          nick: s,
          mute: l.isVoiceMuted(),
          deaf: l.isVoiceDeafened(),
          video: l.selfVideo,
          serverMute: l.mute,
          serverDeaf: l.deaf
        }, t.id) : null
      }), C ? c : null]
    })
  })
}