"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("718017"),
  o = n("442837"),
  u = n("692547"),
  d = n("481060"),
  c = n("607070"),
  f = n("492162"),
  h = n("451478"),
  p = n("409216"),
  m = n("86813"),
  C = n("826026"),
  g = n("632184"),
  E = n("934415"),
  S = n("968847"),
  I = n("689938"),
  _ = n("308530");
let N = {
  friction: 30,
  tension: 300
};

function T(e) {
  var t;
  let {
    guildChannels: n,
    jumpToVoiceChannels: s
  } = e, r = n.getCategoryFromSection(n.voiceChannelsSectionNumber), o = (0, f.default)(n.id), c = a.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), s()
  }, [s]), h = null !== (t = null == r ? void 0 : r.getChannelRecords()) && void 0 !== t ? t : [], m = (0, E.computeSummarizedVoiceUsers)({
    channels: h,
    selectedChannelId: null,
    selectedVoiceChannelId: null,
    voiceStates: o
  });
  return (0, l.jsxs)(d.Clickable, {
    className: i()(_.bar),
    onClick: c,
    children: [(0, l.jsx)(g.default, {
      className: _.voiceChannelsIcon,
      width: 14,
      height: 14,
      color: u.default.unsafe_rawColors.GREEN_330.css
    }), (0, l.jsx)(d.Text, {
      variant: "text-xs/semibold",
      color: "text-positive",
      className: _.barText,
      children: I.default.Messages.VOICE_CHANNEL_BAR_ACTIVE.format({
        count: m.length
      })
    }), (0, l.jsx)(p.default, {
      guildId: n.id,
      className: _.voiceChannelsUsers,
      users: m.slice(0, 4),
      renderMoreUsers: () => null,
      max: 4,
      size: d.AvatarSizes.SIZE_16
    })]
  })
}

function A(e) {
  let {
    position: t,
    guildChannels: n,
    guildChannelsVersion: s,
    jumpToVoiceChannels: u,
    jumpToChannel: f
  } = e, {
    bottomBar: p,
    topBar: g
  } = (0, o.useStateFromStoresObject)([S.default], () => S.default.getUnreadStateForGuildId(n.id)), E = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), A = (0, o.useStateFromStores)([h.default], () => h.default.isFocused()), {
    mode: L,
    mentionCount: v,
    targetChannelId: x
  } = "bottom" === t ? p : g, R = L === S.UnreadBarMode.HIDDEN, y = (0, r.useSpring)({
    to: {
      transform: R ? "bottom" === t ? "translateY(180%)" : "translateY(-180%)" : "translateY(0%)"
    },
    config: N,
    immediate: E || !A
  }), M = a.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null != x && f(x)
  }, [f, x]);
  return (0, l.jsx)("div", {
    className: i()(_.container, {
      [_.top]: "top" === t,
      [_.bottom]: "bottom" === t
    }),
    children: (0, l.jsx)(r.animated.div, {
      className: _.containerPadding,
      style: y,
      "aria-hidden": R,
      children: L === S.UnreadBarMode.HIDDEN ? (0, l.jsx)("div", {
        className: i()(_.bar, _.emptyBar)
      }) : L === S.UnreadBarMode.UNREAD ? (0, l.jsxs)(d.Clickable, {
        className: _.bar,
        onClick: M,
        children: ["bottom" === t ? (0, l.jsx)(m.default, {
          className: _.unreadIcon,
          height: 14,
          width: 14
        }) : (0, l.jsx)(C.default, {
          className: _.unreadIcon,
          height: 14,
          width: 14
        }), (0, l.jsx)(d.Text, {
          variant: "text-xs/semibold",
          color: "interactive-normal",
          className: _.barText,
          children: I.default.Messages.NEW_UNREADS
        })]
      }) : L === S.UnreadBarMode.MENTIONS ? (0, l.jsx)(d.Clickable, {
        className: i()(_.bar, _.mentionsBar),
        onClick: M,
        children: (0, l.jsx)(d.Text, {
          variant: "text-xs/semibold",
          color: "status-danger-text",
          className: _.barText,
          children: I.default.Messages.NEW_MENTIONS_COUNT.format({
            count: v
          })
        })
      }) : L === S.UnreadBarMode.VOICE_CHANNELS ? (0, l.jsx)(T, {
        jumpToVoiceChannels: u,
        guildChannels: n,
        guildChannelsVersion: s
      }) : void 0
    })
  })
}