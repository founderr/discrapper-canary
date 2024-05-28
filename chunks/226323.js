"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
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
  C = n("586902"),
  h = n("512384"),
  _ = n("484459"),
  S = n("103575"),
  m = n("314897"),
  p = n("131951"),
  I = n("836946"),
  g = n("381238"),
  T = n("779863"),
  A = n("729285"),
  N = n("150954"),
  v = n("51144"),
  R = n("524484"),
  O = n("689938"),
  L = n("164159");
let P = {
    offset: 2
  },
  y = {
    serverDeaf: {
      icon: g.default,
      colorize: !0,
      getStatus: () => O.default.Messages.SERVER_DEAFENED
    },
    serverMute: {
      icon: T.default,
      colorize: !0,
      getStatus: () => O.default.Messages.SERVER_MUTED
    },
    deaf: {
      icon: g.default,
      colorize: !1,
      getStatus: () => O.default.Messages.VOICE_CHANNEL_DEAFENED
    },
    mute: {
      icon: T.default,
      colorize: !1,
      getStatus: () => O.default.Messages.VOICE_CHANNEL_MUTED
    }
  },
  M = {
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

function D(e) {
  var t, s;
  let {
    channel: l,
    user: o,
    nick: u,
    mute: d,
    deaf: c,
    serverMute: m,
    serverDeaf: I
  } = e, g = (0, r.useStateFromStores)([p.default], () => p.default.isLocalMute(o.id)), T = (0, C.default)({
    userId: o.id,
    checkSoundSharing: !0
  }), A = null !== (t = l.getGuildId()) && void 0 !== t ? t : void 0, N = o.getAvatarURL(l.guild_id, 24), D = null != u ? u : v.default.getName(o), {
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
    if (t) return i ? M.serverDeaf : y.serverDeaf;
    if (n) return i ? M.deaf : y.deaf;
    if (a) return i ? M.serverMute : y.serverMute;
    else if (l) return i ? M.localMute : y.mute;
    else if (s) return i ? M.mute : y.mute
  }({
    serverDeaf: I,
    deaf: c,
    serverMute: m,
    mute: d,
    localMute: g
  })) && void 0 !== s ? s : {}, j = null != U ? O.default.Messages.VOICE_PANEL_USER_TOOLTIP.format({
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
    renderPopout: e => (0, a.jsx)(S.default, {
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
        focusProps: P,
        children: (0, a.jsx)(h.default, {
          shakeLocation: R.ShakeLocation.VOICE_USER,
          isShaking: T,
          children: (0, a.jsx)("div", {
            className: i()(L.avatar, {
              [L.speaking]: T
            }),
            style: {
              backgroundImage: "url(".concat(N, ")")
            },
            children: null != x ? (0, a.jsx)(x, {
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

function x(e) {
  let {
    voiceStates: t,
    channel: n,
    className: l
  } = e, [o, u] = s.useState(!1), d = o ? N.default : A.default, c = (0, a.jsx)(I.default, {
    className: L.expandButton,
    onClick: () => u(!o),
    color: I.CircleIconButtonColors.PRIMARY,
    size: I.CircleIconButtonSizes.SIZE_24,
    tooltip: o ? O.default.Messages.VOICE_PANEL_HIDE_EXTRAS : O.default.Messages.VOICE_PANEL_SHOW_EXTRAS,
    icon: (0, a.jsx)(d, {
      width: 16,
      height: 16
    }),
    focusProps: P
  }), E = (0, r.useStateFromStores)([m.default], () => m.default.getId(), []), [C, h] = function(e, t) {
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
  }(t, E), _ = h && o ? t : C;
  return _.length <= 0 ? null : (0, a.jsx)(f.ScrollerThin, {
    className: i()(L.scroller, l),
    fade: !0,
    children: (0, a.jsxs)("div", {
      className: L.voiceUsers,
      role: "group",
      "aria-label": O.default.Messages.VOICE_PANEL_USERS_A11Y_LABEL,
      children: [_.map(e => {
        let {
          user: t,
          nick: s,
          voiceState: l
        } = e;
        return t.id !== E ? (0, a.jsx)(D, {
          channel: n,
          user: t,
          nick: s,
          mute: l.isVoiceMuted(),
          deaf: l.isVoiceDeafened(),
          video: l.selfVideo,
          serverMute: l.mute,
          serverDeaf: l.deaf
        }, t.id) : null
      }), h ? c : null]
    })
  })
}