n.d(t, {
  Z: function() {
    return f
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(481060),
  o = n(239091),
  c = n(586902),
  u = n(40851),
  d = n(484459),
  h = n(103575),
  m = n(409216),
  E = n(768581),
  p = n(887853);

function g(e) {
  let {
    channel: t,
    speaker: s,
    className: m
  } = e, g = (0, u.bp)(), {
    reducedMotion: f
  } = i.useContext(r.AccessibilityPreferencesContext), C = (0, c.Z)({
    userId: s.id
  }), _ = null != s.member ? (0, E.CA)(s.member) : null, I = e => {
    (0, o.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("12435"), n.e("7717")]).then(n.bind(n, 757387));
      return n => (0, l.jsx)(e, {
        ...n,
        user: s.user,
        guildId: t.guild_id,
        channel: t,
        showMediaItems: !0,
        showStageChannelItems: !0,
        showChatItems: !1
      })
    }, {
      context: g
    })
  };
  return (0, l.jsx)(r.Popout, {
    preload: () => (0, d.W)(s.user, {
      guildId: t.guild_id,
      channelId: t.id
    }),
    renderPopout: e => (0, l.jsx)(h.Z, {
      ...e,
      location: "StageSpeakerSummary",
      guildId: t.guild_id,
      channelId: t.id,
      userId: s.id
    }),
    position: "right",
    spacing: 8,
    children: e => (0, l.jsx)(r.Tooltip, {
      text: s.userNick,
      position: "bottom",
      children: n => (0, l.jsx)(r.Clickable, {
        ...n,
        ...e,
        onClick: t => {
          t.stopPropagation(), e.onClick(t)
        },
        onContextMenu: I,
        children: (0, l.jsx)(r.Avatar, {
          src: null != _ ? _ : s.user.getAvatarURL(t.guild_id, 24),
          size: r.AvatarSizes.SIZE_24,
          className: a()(p.avatar, m),
          "aria-label": s.userNick,
          isSpeaking: C && !f.enabled
        })
      })
    })
  })
}

function f(e) {
  let {
    speakers: t,
    channel: n
  } = e;
  return (0, l.jsx)(m.Z, {
    className: p.summary,
    guildId: n.guild_id,
    users: t,
    max: 10,
    renderUser: (e, t, i) => (0, l.jsx)(g, {
      channel: n,
      speaker: e,
      className: t
    }, i),
    renderMoreUsers: (e, t, n) => (0, l.jsx)("div", {
      className: a()(p.speakers, t),
      children: e
    }, n)
  })
}