n.d(t, {
  Z: function() {
    return A
  }
}), n(653041), n(47120);
var s = n(735250),
  i = n(470079),
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
  T = n(524484),
  g = n(689938),
  p = n(258720);
let N = {
    offset: 2
  },
  S = {
    serverDeaf: {
      icon: o.HeadphonesDenyIcon,
      colorize: !0,
      getStatus: () => g.Z.Messages.SERVER_DEAFENED
    },
    serverMute: {
      icon: o.MicrophoneDenyIcon,
      colorize: !0,
      getStatus: () => g.Z.Messages.SERVER_MUTED
    },
    deaf: {
      icon: o.HeadphonesSlashIcon,
      colorize: !1,
      getStatus: () => g.Z.Messages.VOICE_CHANNEL_DEAFENED
    },
    mute: {
      icon: o.MicrophoneSlashIcon,
      colorize: !1,
      getStatus: () => g.Z.Messages.VOICE_CHANNEL_MUTED
    },
    localMute: {
      icon: o.MicrophoneDenyIcon,
      colorize: !1,
      getStatus: () => g.Z.Messages.VOICE_CHANNEL_LOCAL_MUTED
    }
  };

function C(e) {
  var t, i;
  let {
    channel: l,
    user: _,
    nick: C,
    mute: A,
    deaf: f,
    serverMute: Z,
    serverDeaf: L
  } = e, O = (0, r.e7)([I.Z], () => I.Z.isLocalMute(_.id)), v = (0, u.Z)({
    userId: _.id,
    checkSoundSharing: !0
  }), R = null !== (t = l.getGuildId()) && void 0 !== t ? t : void 0, P = _.getAvatarURL(l.guild_id, 24), x = null != C ? C : m.ZP.getName(_), {
    icon: M,
    colorize: D,
    getStatus: b
  } = null !== (i = function(e) {
    let {
      serverDeaf: t,
      deaf: n,
      serverMute: s,
      mute: i,
      localMute: l
    } = e;
    if (t) return S.serverDeaf;
    if (n) return S.deaf;
    if (s) return S.serverMute;
    else if (l) return S.localMute;
    else if (i) return S.mute
  }({
    serverDeaf: L,
    deaf: f,
    serverMute: Z,
    mute: A,
    localMute: O
  })) && void 0 !== i ? i : {}, y = null != b ? g.Z.Messages.VOICE_PANEL_USER_TOOLTIP.format({
    userName: x,
    status: b()
  }) : x;

  function j(e) {
    null != R ? (0, c.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("12435"), n.e("7717")]).then(n.bind(n, 757387));
      return t => (0, s.jsx)(e, {
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
      return t => (0, s.jsx)(e, {
        ...t,
        user: _,
        showMediaItems: !0
      })
    })
  }
  return (0, s.jsx)(o.Popout, {
    preload: () => (0, E.W)(_.id, _.getAvatarURL(R, 80), {
      guildId: R,
      channelId: l.id
    }),
    position: "top",
    renderPopout: e => (0, s.jsx)(h.Z, {
      location: "RTCConnectionVoiceUsers",
      userId: _.id,
      guildId: R,
      channelId: l.id,
      ...e
    }),
    children: e => (0, s.jsx)(o.Tooltip, {
      text: y,
      children: t => (0, s.jsx)(o.Clickable, {
        ...t,
        ...e,
        className: p.avatarContainer,
        onContextMenu: j,
        focusProps: N,
        children: (0, s.jsx)(d.Z, {
          shakeLocation: T.oZ.VOICE_USER,
          isShaking: v,
          children: (0, s.jsx)("div", {
            className: a()(p.avatar, {
              [p.speaking]: v
            }),
            style: {
              backgroundImage: "url(".concat(P, ")")
            },
            children: null != M ? (0, s.jsx)(M, {
              className: a()(p.avatarIconOverlay, {
                [p.avatarIconRed]: D
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
  } = e, [c, u] = i.useState(!1), d = c ? o.MinusIcon : o.PlusSmallIcon, E = (0, s.jsx)(o.CircleIconButton, {
    className: p.expandButton,
    onClick: () => u(!c),
    color: o.CircleIconButtonColors.PRIMARY,
    size: o.CircleIconButtonSizes.SIZE_24,
    tooltip: c ? g.Z.Messages.VOICE_PANEL_HIDE_EXTRAS : g.Z.Messages.VOICE_PANEL_SHOW_EXTRAS,
    icon: (0, s.jsx)(d, {
      size: "xs",
      color: "currentColor"
    }),
    focusProps: N
  }), h = (0, r.e7)([_.default], () => _.default.getId(), []), [I, m] = function(e, t) {
    let n = [];
    for (let s of e) {
      if (!(s.user.id === t || n.some(e => e.user.id === s.user.id))) {
        if (n.length >= 7) return [n, !0];
        n.push(s)
      }
    }
    return [n, !1]
  }(t, h), T = m && c ? t : I;
  return T.length <= 0 ? null : (0, s.jsx)(o.ScrollerThin, {
    className: a()(p.scroller, l),
    fade: !0,
    children: (0, s.jsxs)("div", {
      className: p.voiceUsers,
      role: "group",
      "aria-label": g.Z.Messages.VOICE_PANEL_USERS_A11Y_LABEL,
      children: [T.map(e => {
        let {
          user: t,
          nick: i,
          voiceState: l
        } = e;
        return t.id !== h ? (0, s.jsx)(C, {
          channel: n,
          user: t,
          nick: i,
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