"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("653041"), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("442837"),
  o = n("742444"),
  u = n("498503"),
  d = n("247636"),
  c = n("278724"),
  f = n("481060"),
  E = n("239091"),
  h = n("586902"),
  _ = n("512384"),
  C = n("484459"),
  m = n("103575"),
  S = n("314897"),
  p = n("131951"),
  g = n("836946"),
  I = n("381238"),
  T = n("779863"),
  A = n("729285"),
  N = n("150954"),
  v = n("51144"),
  R = n("524484"),
  L = n("689938"),
  O = n("164159");
let y = {
    offset: 2
  },
  M = {
    serverDeaf: {
      icon: I.default,
      colorize: !0,
      getStatus: () => L.default.Messages.SERVER_DEAFENED
    },
    serverMute: {
      icon: T.default,
      colorize: !0,
      getStatus: () => L.default.Messages.SERVER_MUTED
    },
    deaf: {
      icon: I.default,
      colorize: !1,
      getStatus: () => L.default.Messages.VOICE_CHANNEL_DEAFENED
    },
    mute: {
      icon: T.default,
      colorize: !1,
      getStatus: () => L.default.Messages.VOICE_CHANNEL_MUTED
    }
  },
  P = {
    serverDeaf: {
      icon: o.HeadphonesDenyIcon,
      colorize: !0,
      getStatus: () => L.default.Messages.SERVER_DEAFENED
    },
    serverMute: {
      icon: d.MicrophoneDenyIcon,
      colorize: !0,
      getStatus: () => L.default.Messages.SERVER_MUTED
    },
    deaf: {
      icon: u.HeadphonesSlashIcon,
      colorize: !1,
      getStatus: () => L.default.Messages.VOICE_CHANNEL_DEAFENED
    },
    mute: {
      icon: c.MicrophoneSlashIcon,
      colorize: !1,
      getStatus: () => L.default.Messages.VOICE_CHANNEL_MUTED
    },
    localMute: {
      icon: d.MicrophoneDenyIcon,
      colorize: !1,
      getStatus: () => L.default.Messages.VOICE_CHANNEL_LOCAL_MUTED
    }
  };

function x(e) {
  var t, s;
  let {
    channel: i,
    user: o,
    nick: u,
    mute: d,
    deaf: c,
    serverMute: S,
    serverDeaf: g
  } = e, I = (0, r.useStateFromStores)([p.default], () => p.default.isLocalMute(o.id)), T = (0, h.default)({
    userId: o.id,
    checkSoundSharing: !0
  }), A = null !== (t = i.getGuildId()) && void 0 !== t ? t : void 0, N = o.getAvatarURL(i.guild_id, 24), x = null != u ? u : v.default.getName(o), {
    icon: D,
    colorize: b,
    getStatus: U
  } = null !== (s = function(e) {
    let {
      serverDeaf: t,
      deaf: n,
      serverMute: a,
      mute: s,
      localMute: i
    } = e, l = (0, f.useRedesignIconContext)().enabled;
    if (t) return l ? P.serverDeaf : M.serverDeaf;
    if (n) return l ? P.deaf : M.deaf;
    if (a) return l ? P.serverMute : M.serverMute;
    else if (i) return l ? P.localMute : M.mute;
    else if (s) return l ? P.mute : M.mute
  }({
    serverDeaf: g,
    deaf: c,
    serverMute: S,
    mute: d,
    localMute: I
  })) && void 0 !== s ? s : {}, j = null != U ? L.default.Messages.VOICE_PANEL_USER_TOOLTIP.format({
    userName: x,
    status: U()
  }) : x;

  function G(e) {
    null != A ? (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("12435"), n.e("7717")]).then(n.bind(n, "757387"));
      return t => (0, a.jsx)(e, {
        ...t,
        user: o,
        guildId: A,
        channel: i,
        showMediaItems: !0
      })
    }) : (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("64409")]).then(n.bind(n, "881351"));
      return t => (0, a.jsx)(e, {
        ...t,
        user: o,
        showMediaItems: !0
      })
    })
  }
  return (0, a.jsx)(f.Popout, {
    preload: () => (0, C.maybeFetchUserProfileForPopout)(o.id, o.getAvatarURL(A, 80), {
      guildId: A,
      channelId: i.id
    }),
    position: "top",
    renderPopout: e => (0, a.jsx)(m.default, {
      location: "RTCConnectionVoiceUsers",
      userId: o.id,
      guildId: A,
      channelId: i.id,
      ...e
    }),
    children: e => (0, a.jsx)(f.Tooltip, {
      text: j,
      children: t => (0, a.jsx)(f.Clickable, {
        ...t,
        ...e,
        className: O.avatarContainer,
        onContextMenu: G,
        focusProps: y,
        children: (0, a.jsx)(_.default, {
          shakeLocation: R.ShakeLocation.VOICE_USER,
          isShaking: T,
          children: (0, a.jsx)("div", {
            className: l()(O.avatar, {
              [O.speaking]: T
            }),
            style: {
              backgroundImage: "url(".concat(N, ")")
            },
            children: null != D ? (0, a.jsx)(D, {
              className: l()(O.avatarIconOverlay, {
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
    className: i
  } = e, [o, u] = s.useState(!1), d = o ? N.default : A.default, c = (0, a.jsx)(g.default, {
    className: O.expandButton,
    onClick: () => u(!o),
    color: g.CircleIconButtonColors.PRIMARY,
    size: g.CircleIconButtonSizes.SIZE_24,
    tooltip: o ? L.default.Messages.VOICE_PANEL_HIDE_EXTRAS : L.default.Messages.VOICE_PANEL_SHOW_EXTRAS,
    icon: (0, a.jsx)(d, {
      width: 16,
      height: 16
    }),
    focusProps: y
  }), E = (0, r.useStateFromStores)([S.default], () => S.default.getId(), []), [h, _] = function(e, t) {
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
  }(t, E), C = _ && o ? t : h;
  return C.length <= 0 ? null : (0, a.jsx)(f.ScrollerThin, {
    className: l()(O.scroller, i),
    fade: !0,
    children: (0, a.jsxs)("div", {
      className: O.voiceUsers,
      role: "group",
      "aria-label": L.default.Messages.VOICE_PANEL_USERS_A11Y_LABEL,
      children: [C.map(e => {
        let {
          user: t,
          nick: s,
          voiceState: i
        } = e;
        return t.id !== E ? (0, a.jsx)(x, {
          channel: n,
          user: t,
          nick: s,
          mute: i.isVoiceMuted(),
          deaf: i.isVoiceDeafened(),
          video: i.selfVideo,
          serverMute: i.mute,
          serverDeaf: i.deaf
        }, t.id) : null
      }), _ ? c : null]
    })
  })
}