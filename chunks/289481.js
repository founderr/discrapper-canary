"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("685626"),
  o = n("442837"),
  u = n("481060"),
  d = n("570140"),
  c = n("45114"),
  f = n("367907"),
  h = n("717680"),
  E = n("703656"),
  m = n("592125"),
  p = n("836946"),
  g = n("259580"),
  S = n("263704"),
  N = n("568570"),
  _ = n("617379"),
  I = n("324081"),
  T = n("305248"),
  C = n("520116"),
  A = n("981631"),
  v = n("689938"),
  x = n("623122");
let R = l.memo(function(e) {
  let {
    channel: t,
    deleteChannel: n
  } = e, s = l.useRef(null), [
    [i, o], u
  ] = l.useState([0, 0]), d = t.deleted && i > 0;
  if (t.deleted && 0 === i && null != s.current) {
    let e = s.current.offsetHeight,
      t = s.current.offsetTop,
      n = s.current.parentElement.scrollTop,
      a = n > t ? e - (n - t) : e;
    u([e, e - a])
  }
  let {
    opacity: c,
    size: f
  } = (0, r.useSpring)({
    config: {
      clamp: !0,
      friction: 18,
      tension: 200
    },
    opacity: d ? 0 : 1,
    size: d ? 0 : 1,
    onRest: () => {
      n(t.channelId)
    }
  }), h = {
    opacity: c,
    height: f.to(e => d ? function(e, t, n) {
      return t + (e - t) * n
    }(i, o, e) : "auto")
  };
  return (0, a.jsx)(r.animated.div, {
    ref: s,
    style: h,
    children: (0, a.jsx)(M, {
      ...e
    })
  })
});
t.default = R;
let M = l.memo(function(e) {
  let {
    channel: t,
    onJump: n,
    deleteChannel: s,
    toggle: i
  } = e, r = (0, o.useStateFromStores)([m.default], () => m.default.getChannel(t.channelId));
  if (l.useEffect(() => {
      null != r && t.isFullyLoaded && !t.hasError && !t.collapsed && "messages" === t.type && 0 === t.messages.length && d.default.wait(() => {
        (0, c.ack)(t.channelId, !0), s(t.channelId)
      })
    }), null == r || !t.hasLoadedAnything) return null;
  let h = (e, a) => {
    (0, f.trackWithMetadata)(A.AnalyticEvents.INBOX_CHANNEL_CLICKED, {
      channel_id: t.channelId,
      guild_id: t.guildId
    });
    let l = null != a ? a : t.oldestUnreadMessageId;
    (0, E.transitionTo)(A.Routes.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : l)), n(e)
  };
  return (0, a.jsx)("div", {
    className: x.channel,
    children: (0, a.jsx)(u.HeadingLevel, {
      component: (0, a.jsxs)(I.default, {
        channel: r,
        gotoChannel: h,
        mentionCount: t.mentionCount,
        toggleCollapsed: i,
        channelState: t,
        children: [(0, a.jsx)(_.default, {
          channel: r
        }), (0, a.jsx)(L, {
          ...e
        }), "nsfw" === t.type ? null : (0, a.jsx)(b, {
          ...e
        })]
      }),
      children: t.collapsed ? null : "messages" === t.type ? (0, a.jsx)(C.default, {
        channel: t,
        channelRecord: r,
        gotoChannel: h
      }) : "forum" === t.type ? (0, a.jsx)(T.default, {
        channel: t,
        channelRecord: r,
        deleteChannel: s
      }) : null
    })
  })
});

function L(e) {
  let {
    channel: t,
    markChannelRead: n,
    markGuildRead: l,
    getNumUnreadChannels: s
  } = e, i = (0, h.default)() && null != t.guildId;
  return (0, a.jsx)(p.default, {
    className: x.markReadButton,
    tooltip: i ? v.default.Messages.MARK_GUILD_AS_READ : v.default.Messages.MARK_AS_READ,
    color: p.CircleIconButtonColors.TERTIARY,
    icon: i ? (0, a.jsx)(N.default, {
      width: 16,
      height: 16
    }) : (0, a.jsx)(S.default, {
      width: 16,
      height: 16
    }),
    onClick: function() {
      i && null != t.guildId ? l(t.guildId) : n(t), (0, f.trackWithMetadata)(A.AnalyticEvents.INBOX_CHANNEL_ACKED, {
        channel_id: t.channelId,
        guild_id: t.guildId,
        marked_all_channels_as_read: !1,
        num_unread_channels_remaining: s() - 1
      })
    }
  })
}

function b(e) {
  let {
    channel: t,
    toggle: n,
    getNumUnreadChannels: l
  } = e;

  function s() {
    n(t), (0, f.trackWithMetadata)(A.AnalyticEvents.INBOX_CHANNEL_COLLAPSED, {
      channel_id: t.channelId,
      guild_id: t.guildId,
      num_unread_channels_remaining: l(),
      is_now_collapsed: !t.collapsed
    })
  }
  return (0, a.jsx)(u.Tooltip, {
    text: v.default.Messages.COLLAPSE,
    children: e => (0, a.jsx)(u.Clickable, {
      ...e,
      className: i()(x.collapseButton, {
        [x.collapsed]: t.collapsed
      }),
      onClick: s,
      children: (0, a.jsx)(g.default, {
        width: 16,
        height: 16
      })
    })
  })
}