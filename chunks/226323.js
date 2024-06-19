n.d(t, {
  Z: function() {
    return A
  }
}), n(653041), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(239091),
  u = n(586902),
  d = n(512384),
  E = n(484459),
  h = n(103575),
  _ = n(314897),
  I = n(131951),
  m = n(51144),
  g = n(524484),
  p = n(689938),
  T = n(258720);
let N = {
    offset: 2
  },
  S = {
    serverDeaf: {
      icon: o.HeadphonesDenyIcon,
      colorize: !0,
      getStatus: () => p.Z.Messages.SERVER_DEAFENED
    },
    serverMute: {
      icon: o.MicrophoneDenyIcon,
      colorize: !0,
      getStatus: () => p.Z.Messages.SERVER_MUTED
    },
    deaf: {
      icon: o.HeadphonesSlashIcon,
      colorize: !1,
      getStatus: () => p.Z.Messages.VOICE_CHANNEL_DEAFENED
    },
    mute: {
      icon: o.MicrophoneSlashIcon,
      colorize: !1,
      getStatus: () => p.Z.Messages.VOICE_CHANNEL_MUTED
    },
    localMute: {
      icon: o.MicrophoneDenyIcon,
      colorize: !1,
      getStatus: () => p.Z.Messages.VOICE_CHANNEL_LOCAL_MUTED
    }
  };

function C(e) {
  var t, s;
  let {
    channel: l,
    user: _,
    nick: C,
    mute: A,
    deaf: f,
    serverMute: Z,
    serverDeaf: v
  } = e, L = (0, r.e7)([I.Z], () => I.Z.isLocalMute(_.id)), O = (0, u.Z)({
    userId: _.id,
    checkSoundSharing: !0
  }), R = null !== (t = l.getGuildId()) && void 0 !== t ? t : void 0, x = _.getAvatarURL(l.guild_id, 24), M = null != C ? C : m.ZP.getName(_), {
    icon: P,
    colorize: D,
    getStatus: b
  } = null !== (s = function(e) {
    let {
      serverDeaf: t,
      deaf: n,
      serverMute: i,
      mute: s,
      localMute: l
    } = e;
    if (t) return S.serverDeaf;
    if (n) return S.deaf;
    if (i) return S.serverMute;
    else if (l) return S.localMute;
    else if (s) return S.mute
  }({
    serverDeaf: v,
    deaf: f,
    serverMute: Z,
    mute: A,
    localMute: L
  })) && void 0 !== s ? s : {}, y = null != b ? p.Z.Messages.VOICE_PANEL_USER_TOOLTIP.format({
    userName: M,
    status: b()
  }) : M;

  function j(e) {
    null != R ? (0, c.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("12435"), n.e("77940")]).then(n.bind(n, 757387));
      return t => (0, i.jsx)(e, {
        ...t,
        user: _,
        guildId: R,
        channel: l,
        showMediaItems: !0
      })
    }) : (0, c.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("69220")]).then(n.bind(n, 881351));
      return t => (0, i.jsx)(e, {
        ...t,
        user: _,
        showMediaItems: !0
      })
    })
  }
  return (0, i.jsx)(o.Popout, {
    preload: () => (0, E.W)(_.id, _.getAvatarURL(R, 80), {
      guildId: R,
      channelId: l.id
    }),
    position: "top",
    renderPopout: e => (0, i.jsx)(h.Z, {
      location: "RTCConnectionVoiceUsers",
      userId: _.id,
      guildId: R,
      channelId: l.id,
      ...e
    }),
    children: e => (0, i.jsx)(o.Tooltip, {
      text: y,
      children: t => (0, i.jsx)(o.Clickable, {
        ...t,
        ...e,
        className: T.avatarContainer,
        onContextMenu: j,
        focusProps: N,
        children: (0, i.jsx)(d.Z, {
          shakeLocation: g.oZ.VOICE_USER,
          isShaking: O,
          children: (0, i.jsx)("div", {
            className: a()(T.avatar, {
              [T.speaking]: O
            }),
            style: {
              backgroundImage: "url(".concat(x, ")")
            },
            children: null != P ? (0, i.jsx)(P, {
              className: a()(T.avatarIconOverlay, {
                [T.avatarIconRed]: D
              }),
              color: "currentColor",
              size: "xs"
            }) : null
          })
        })
      })
    })
  })
}

function A(e) {
  let {
    voiceStates: t,
    channel: n,
    className: l
  } = e, [c, u] = s.useState(!1), d = c ? o.MinusIcon : o.PlusSmallIcon, E = (0, i.jsx)(o.CircleIconButton, {
    className: T.expandButton,
    onClick: () => u(!c),
    color: o.CircleIconButtonColors.PRIMARY,
    size: o.CircleIconButtonSizes.SIZE_24,
    tooltip: c ? p.Z.Messages.VOICE_PANEL_HIDE_EXTRAS : p.Z.Messages.VOICE_PANEL_SHOW_EXTRAS,
    icon: (0, i.jsx)(d, {
      size: "xs",
      color: "currentColor"
    }),
    focusProps: N
  }), h = (0, r.e7)([_.default], () => _.default.getId(), []), [I, m] = function(e, t) {
    let n = [];
    for (let i of e) {
      if (!(i.user.id === t || n.some(e => e.user.id === i.user.id))) {
        if (n.length >= 7) return [n, !0];
        n.push(i)
      }
    }
    return [n, !1]
  }(t, h), g = m && c ? t : I;
  return g.length <= 0 ? null : (0, i.jsx)(o.ScrollerThin, {
    className: a()(T.scroller, l),
    fade: !0,
    children: (0, i.jsxs)("div", {
      className: T.voiceUsers,
      role: "group",
      "aria-label": p.Z.Messages.VOICE_PANEL_USERS_A11Y_LABEL,
      children: [g.map(e => {
        let {
          user: t,
          nick: s,
          voiceState: l
        } = e;
        return t.id !== h ? (0, i.jsx)(C, {
          channel: n,
          user: t,
          nick: s,
          mute: l.isVoiceMuted(),
          deaf: l.isVoiceDeafened(),
          video: l.selfVideo,
          serverMute: l.mute,
          serverDeaf: l.deaf
        }, t.id) : null
      }), m ? E : null]
    })
  })
}