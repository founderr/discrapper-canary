"use strict";
a.r(t), a.d(t, {
  default: function() {
    return D
  }
}), a("653041"), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("442837"),
  o = a("742444"),
  u = a("498503"),
  d = a("247636"),
  c = a("278724"),
  f = a("481060"),
  E = a("239091"),
  h = a("586902"),
  _ = a("512384"),
  C = a("484459"),
  m = a("103575"),
  S = a("314897"),
  p = a("131951"),
  I = a("836946"),
  T = a("381238"),
  g = a("255439"),
  A = a("729285"),
  N = a("150954"),
  v = a("51144"),
  L = a("524484"),
  R = a("689938"),
  O = a("689835");
let M = {
    offset: 2
  },
  P = {
    serverDeaf: {
      icon: T.default,
      colorize: !0,
      getStatus: () => R.default.Messages.SERVER_DEAFENED
    },
    serverMute: {
      icon: g.default,
      colorize: !0,
      getStatus: () => R.default.Messages.SERVER_MUTED
    },
    deaf: {
      icon: T.default,
      colorize: !1,
      getStatus: () => R.default.Messages.VOICE_CHANNEL_DEAFENED
    },
    mute: {
      icon: g.default,
      colorize: !1,
      getStatus: () => R.default.Messages.VOICE_CHANNEL_MUTED
    }
  },
  x = {
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
  } = e, T = (0, r.useStateFromStores)([p.default], () => p.default.isLocalMute(o.id)), g = (0, h.default)({
    userId: o.id,
    checkSoundSharing: !0
  }), A = null !== (t = l.getGuildId()) && void 0 !== t ? t : void 0, N = o.getAvatarURL(l.guild_id, 24), y = null != u ? u : v.default.getName(o), {
    icon: D,
    colorize: b,
    getStatus: U
  } = null !== (s = function(e) {
    let {
      serverDeaf: t,
      deaf: a,
      serverMute: n,
      mute: s,
      localMute: l
    } = e, i = (0, f.useRedesignIconContext)().enabled;
    if (t) return i ? x.serverDeaf : P.serverDeaf;
    if (a) return i ? x.deaf : P.deaf;
    if (n) return i ? x.serverMute : P.serverMute;
    else if (l) return i ? x.localMute : P.mute;
    else if (s) return i ? x.mute : P.mute
  }({
    serverDeaf: I,
    deaf: c,
    serverMute: S,
    mute: d,
    localMute: T
  })) && void 0 !== s ? s : {}, j = null != U ? R.default.Messages.VOICE_PANEL_USER_TOOLTIP.format({
    userName: y,
    status: U()
  }) : y;

  function G(e) {
    null != A ? (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("79695"), a.e("1502"), a.e("12435"), a.e("7717")]).then(a.bind(a, "757387"));
      return t => (0, n.jsx)(e, {
        ...t,
        user: o,
        guildId: A,
        channel: l,
        showMediaItems: !0
      })
    }) : (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("79695"), a.e("1502"), a.e("64409")]).then(a.bind(a, "881351"));
      return t => (0, n.jsx)(e, {
        ...t,
        user: o,
        showMediaItems: !0
      })
    })
  }
  return (0, n.jsx)(f.Popout, {
    preload: () => (0, C.maybeFetchUserProfileForPopout)(o.id, o.getAvatarURL(A, 80), {
      guildId: A,
      channelId: l.id
    }),
    position: "top",
    renderPopout: e => (0, n.jsx)(m.default, {
      location: "RTCConnectionVoiceUsers",
      userId: o.id,
      guildId: A,
      channelId: l.id,
      ...e
    }),
    children: e => (0, n.jsx)(f.Tooltip, {
      text: j,
      children: t => (0, n.jsx)(f.Clickable, {
        ...t,
        ...e,
        className: O.avatarContainer,
        onContextMenu: G,
        focusProps: M,
        children: (0, n.jsx)(_.default, {
          shakeLocation: L.ShakeLocation.VOICE_USER,
          isShaking: g,
          children: (0, n.jsx)("div", {
            className: i()(O.avatar, {
              [O.speaking]: g
            }),
            style: {
              backgroundImage: "url(".concat(N, ")")
            },
            children: null != D ? (0, n.jsx)(D, {
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
    channel: a,
    className: l
  } = e, [o, u] = s.useState(!1), d = o ? N.default : A.default, c = (0, n.jsx)(I.default, {
    className: O.expandButton,
    onClick: () => u(!o),
    color: I.CircleIconButtonColors.PRIMARY,
    size: I.CircleIconButtonSizes.SIZE_24,
    tooltip: o ? R.default.Messages.VOICE_PANEL_HIDE_EXTRAS : R.default.Messages.VOICE_PANEL_SHOW_EXTRAS,
    icon: (0, n.jsx)(d, {
      width: 16,
      height: 16
    }),
    focusProps: M
  }), E = (0, r.useStateFromStores)([S.default], () => S.default.getId(), []), [h, _] = function(e, t) {
    let a = [];
    for (let n of e) {
      if (n.user.id !== t) {
        if (!a.some(e => e.user.id === n.user.id)) {
          if (a.length >= 7) return [a, !0];
          a.push(n)
        }
      }
    }
    return [a, !1]
  }(t, E), C = _ && o ? t : h;
  return C.length <= 0 ? null : (0, n.jsx)(f.ScrollerThin, {
    className: i()(O.scroller, l),
    fade: !0,
    children: (0, n.jsxs)("div", {
      className: O.voiceUsers,
      role: "group",
      "aria-label": R.default.Messages.VOICE_PANEL_USERS_A11Y_LABEL,
      children: [C.map(e => {
        let {
          user: t,
          nick: s,
          voiceState: l
        } = e;
        return t.id !== E ? (0, n.jsx)(y, {
          channel: a,
          user: t,
          nick: s,
          mute: l.isVoiceMuted(),
          deaf: l.isVoiceDeafened(),
          video: l.selfVideo,
          serverMute: l.mute,
          serverDeaf: l.deaf
        }, t.id) : null
      }), _ ? c : null]
    })
  })
}