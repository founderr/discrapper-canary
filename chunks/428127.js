n.d(t, {
  Z: function() {
    return N
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(920906),
  o = n(442837),
  u = n(692547),
  c = n(481060),
  d = n(607070),
  h = n(492162),
  g = n(451478),
  p = n(409216),
  m = n(934415),
  C = n(968847),
  E = n(689938),
  f = n(953248);
let _ = {
  friction: 30,
  tension: 300
};

function I(e) {
  var t;
  let {
    guildChannels: n,
    jumpToVoiceChannels: s
  } = e, a = n.getCategoryFromSection(n.voiceChannelsSectionNumber), o = (0, h.Z)(n.id), d = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), s()
  }, [s]), g = null !== (t = null == a ? void 0 : a.getChannelRecords()) && void 0 !== t ? t : [], C = (0, m.c4)({
    channels: g,
    selectedChannelId: null,
    selectedVoiceChannelId: null,
    voiceStates: o
  });
  return (0, l.jsxs)(c.Clickable, {
    className: r()(f.bar),
    onClick: d,
    children: [(0, l.jsx)(c.VoiceNormalIcon, {
      size: "custom",
      className: f.voiceChannelsIcon,
      width: 14,
      height: 14,
      color: u.Z.unsafe_rawColors.GREEN_330.css
    }), (0, l.jsx)(c.Text, {
      variant: "text-xs/semibold",
      color: "text-positive",
      className: f.barText,
      children: E.Z.Messages.VOICE_CHANNEL_BAR_ACTIVE.format({
        count: C.length
      })
    }), (0, l.jsx)(p.Z, {
      guildId: n.id,
      className: f.voiceChannelsUsers,
      users: C.slice(0, 4),
      renderMoreUsers: () => null,
      max: 4,
      size: c.AvatarSizes.SIZE_16
    })]
  })
}

function N(e) {
  let {
    position: t,
    guildChannels: n,
    guildChannelsVersion: s,
    jumpToVoiceChannels: u,
    jumpToChannel: h
  } = e, {
    bottomBar: p,
    topBar: m
  } = (0, o.cj)([C.Z], () => C.Z.getUnreadStateForGuildId(n.id)), N = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), Z = (0, o.e7)([g.Z], () => g.Z.isFocused()), {
    mode: S,
    mentionCount: x,
    targetChannelId: T
  } = "bottom" === t ? p : m, L = S === C.x.HIDDEN, v = (0, a.useSpring)({
    to: {
      transform: L ? "bottom" === t ? "translateY(180%)" : "translateY(-180%)" : "translateY(0%)"
    },
    config: _,
    immediate: N || !Z
  }), A = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null != T && h(T)
  }, [h, T]);
  return (0, l.jsx)("div", {
    className: r()(f.container, {
      [f.top]: "top" === t,
      [f.bottom]: "bottom" === t
    }),
    children: (0, l.jsx)(a.animated.div, {
      className: f.containerPadding,
      style: v,
      "aria-hidden": L,
      children: S === C.x.HIDDEN ? (0, l.jsx)("div", {
        className: r()(f.bar, f.emptyBar)
      }) : S === C.x.UNREAD ? (0, l.jsxs)(c.Clickable, {
        className: f.bar,
        onClick: A,
        children: ["bottom" === t ? (0, l.jsx)(c.ChevronSmallDownIcon, {
          size: "custom",
          color: "currentColor",
          className: f.unreadIcon,
          height: 14,
          width: 14
        }) : (0, l.jsx)(c.ChevronSmallUpIcon, {
          size: "custom",
          color: "currentColor",
          className: f.unreadIcon,
          height: 14,
          width: 14
        }), (0, l.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "interactive-normal",
          className: f.barText,
          children: E.Z.Messages.NEW_UNREADS
        })]
      }) : S === C.x.MENTIONS ? (0, l.jsx)(c.Clickable, {
        className: r()(f.bar, f.mentionsBar),
        onClick: A,
        children: (0, l.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "status-danger-text",
          className: f.barText,
          children: E.Z.Messages.NEW_MENTIONS_COUNT.format({
            count: x
          })
        })
      }) : S === C.x.VOICE_CHANNELS ? (0, l.jsx)(I, {
        jumpToVoiceChannels: u,
        guildChannels: n,
        guildChannelsVersion: s
      }) : void 0
    })
  })
}