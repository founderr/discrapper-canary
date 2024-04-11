"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("653041"), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
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
  I = n("131951"),
  T = n("836946"),
  p = n("381238"),
  g = n("255439"),
  A = n("729285"),
  N = n("150954"),
  v = n("51144"),
  R = n("524484"),
  O = n("689938"),
  L = n("825292");
let M = {
    offset: 2
  },
  P = {
    serverDeaf: {
      icon: p.default,
      colorize: !0,
      getStatus: () => O.default.Messages.SERVER_DEAFENED
    },
    serverMute: {
      icon: g.default,
      colorize: !0,
      getStatus: () => O.default.Messages.SERVER_MUTED
    },
    deaf: {
      icon: p.default,
      colorize: !1,
      getStatus: () => O.default.Messages.VOICE_CHANNEL_DEAFENED
    },
    mute: {
      icon: g.default,
      colorize: !1,
      getStatus: () => O.default.Messages.VOICE_CHANNEL_MUTED
    }
  },
  y = {
    serverDeaf: {
      icon: o.HeadphonesDenyIcon,
      colorize: !0,
      getStatus: () => O.default.Messages.SERVER_DEAFENED
    },
    serverMute: {
      icon: d.MicrophoneDenyIcon,
      colorize: !0,
      getStatus: () => O.default.Messages.SERVER_MUTED
    },
    deaf: {
      icon: u.HeadphonesSlashIcon,
      colorize: !1,
      getStatus: () => O.default.Messages.VOICE_CHANNEL_DEAFENED
    },
    mute: {
      icon: c.MicrophoneSlashIcon,
      colorize: !1,
      getStatus: () => O.default.Messages.VOICE_CHANNEL_MUTED
    },
    localMute: {
      icon: d.MicrophoneDenyIcon,
      colorize: !1,
      getStatus: () => O.default.Messages.VOICE_CHANNEL_LOCAL_MUTED
    }
  };

function x(e) {
  var t, s;
  let {
    channel: l,
    user: o,
    nick: u,
    mute: d,
    deaf: c,
    serverMute: S,
    serverDeaf: T
  } = e, p = (0, r.useStateFromStores)([I.default], () => I.default.isLocalMute(o.id)), g = (0, h.default)({
    userId: o.id,
    checkSoundSharing: !0
  }), A = null !== (t = l.getGuildId()) && void 0 !== t ? t : void 0, N = o.getAvatarURL(l.guild_id, 24), x = null != u ? u : v.default.getName(o), {
    icon: D,
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
    if (t) return i ? y.serverDeaf : P.serverDeaf;
    if (n) return i ? y.deaf : P.deaf;
    if (a) return i ? y.serverMute : P.serverMute;
    else if (l) return i ? y.localMute : P.mute;
    else if (s) return i ? y.mute : P.mute
  }({
    serverDeaf: T,
    deaf: c,
    serverMute: S,
    mute: d,
    localMute: p
  })) && void 0 !== s ? s : {}, j = null != U ? O.default.Messages.VOICE_PANEL_USER_TOOLTIP.format({
    userName: x,
    status: U()
  }) : x;

  function G(e) {
    null != A ? (0, E.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("12435"), n.e("7717")]).then(n.bind(n, "757387"));
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
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("64409")]).then(n.bind(n, "881351"));
      return t => (0, a.jsx)(e, {
        ...t,
        user: o,
        showMediaItems: !0
      })
    })
  }
  return (0, a.jsx)(f.Popout, {
    preload: () => (0, C.default)(o.id, o.getAvatarURL(A, 80), {
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
        className: L.avatarContainer,
        onContextMenu: G,
        focusProps: M,
        children: (0, a.jsx)(_.default, {
          shakeLocation: R.ShakeLocation.VOICE_USER,
          isShaking: g,
          children: (0, a.jsx)("div", {
            className: i()(L.avatar, {
              [L.speaking]: g
            }),
            style: {
              backgroundImage: "url(".concat(N, ")")
            },
            children: null != D ? (0, a.jsx)(D, {
              className: i()(L.avatarIconOverlay, {
                [L.avatarIconRed]: b
              }),
              color: "currentColor",
              width: 16,
              height: 16,
              foreground: L.avatarIconRed
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
  } = e, [o, u] = s.useState(!1), d = o ? N.default : A.default, c = (0, a.jsx)(T.default, {
    className: L.expandButton,
    onClick: () => u(!o),
    color: T.CircleIconButtonColors.PRIMARY,
    size: T.CircleIconButtonSizes.SIZE_24,
    tooltip: o ? O.default.Messages.VOICE_PANEL_HIDE_EXTRAS : O.default.Messages.VOICE_PANEL_SHOW_EXTRAS,
    icon: (0, a.jsx)(d, {
      width: 16,
      height: 16
    }),
    focusProps: M
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
    className: i()(L.scroller, l),
    fade: !0,
    children: (0, a.jsxs)("div", {
      className: L.voiceUsers,
      role: "group",
      "aria-label": O.default.Messages.VOICE_PANEL_USERS_A11Y_LABEL,
      children: [C.map(e => {
        let {
          user: t,
          nick: s,
          voiceState: l
        } = e;
        return t.id !== E ? (0, a.jsx)(x, {
          channel: n,
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