"use strict";
n.r(t), n("47120");
var s = n("735250"),
  l = n("470079"),
  a = n("120356"),
  i = n.n(a),
  r = n("718017"),
  o = n("442837"),
  u = n("481060"),
  d = n("570140"),
  c = n("45114"),
  f = n("367907"),
  E = n("717680"),
  _ = n("703656"),
  m = n("592125"),
  T = n("836946"),
  I = n("259580"),
  p = n("263704"),
  h = n("568570"),
  N = n("617379"),
  S = n("324081"),
  C = n("305248"),
  A = n("520116"),
  g = n("981631"),
  M = n("689938"),
  R = n("632709");
let v = l.memo(function(e) {
  let {
    channel: t,
    deleteChannel: n
  } = e, a = l.useRef(null), [
    [i, o], u
  ] = l.useState([0, 0]), d = t.deleted && i > 0;
  if (t.deleted && 0 === i && null != a.current) {
    let e = a.current.offsetHeight,
      t = a.current.offsetTop,
      n = a.current.parentElement.scrollTop,
      s = n > t ? e - (n - t) : e;
    u([e, e - s])
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
  }), E = {
    opacity: c,
    height: f.to(e => d ? function(e, t, n) {
      return t + (e - t) * n
    }(i, o, e) : "auto")
  };
  return (0, s.jsx)(r.animated.div, {
    ref: a,
    style: E,
    children: (0, s.jsx)(O, {
      ...e
    })
  })
});
t.default = v;
let O = l.memo(function(e) {
  let {
    channel: t,
    onJump: n,
    deleteChannel: a,
    toggle: i
  } = e, r = (0, o.useStateFromStores)([m.default], () => m.default.getChannel(t.channelId));
  if (l.useEffect(() => {
      null != r && t.isFullyLoaded && !t.hasError && !t.collapsed && "messages" === t.type && 0 === t.messages.length && d.default.wait(() => {
        (0, c.ack)(t.channelId, !0), a(t.channelId)
      })
    }), null == r || !t.hasLoadedAnything) return null;
  let E = (e, s) => {
    (0, f.trackWithMetadata)(g.AnalyticEvents.INBOX_CHANNEL_CLICKED, {
      channel_id: t.channelId,
      guild_id: t.guildId
    });
    let l = null != s ? s : t.oldestUnreadMessageId;
    (0, _.transitionTo)(g.Routes.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : l)), n(e)
  };
  return (0, s.jsx)("div", {
    className: R.channel,
    children: (0, s.jsx)(u.HeadingLevel, {
      component: (0, s.jsxs)(S.default, {
        channel: r,
        gotoChannel: E,
        mentionCount: t.mentionCount,
        toggleCollapsed: i,
        channelState: t,
        children: [(0, s.jsx)(N.default, {
          channel: r
        }), (0, s.jsx)(x, {
          ...e
        }), "nsfw" === t.type ? null : (0, s.jsx)(L, {
          ...e
        })]
      }),
      children: t.collapsed ? null : "messages" === t.type ? (0, s.jsx)(A.default, {
        channel: t,
        channelRecord: r,
        gotoChannel: E
      }) : "forum" === t.type ? (0, s.jsx)(C.default, {
        channel: t,
        channelRecord: r,
        deleteChannel: a
      }) : null
    })
  })
});

function x(e) {
  let {
    channel: t,
    markChannelRead: n,
    markGuildRead: l,
    getNumUnreadChannels: a
  } = e, i = (0, E.default)() && null != t.guildId;
  return (0, s.jsx)(T.default, {
    className: R.markReadButton,
    tooltip: i ? M.default.Messages.MARK_GUILD_AS_READ : M.default.Messages.MARK_AS_READ,
    color: T.CircleIconButtonColors.TERTIARY,
    icon: i ? (0, s.jsx)(h.default, {
      width: 16,
      height: 16
    }) : (0, s.jsx)(p.default, {
      width: 16,
      height: 16
    }),
    onClick: function() {
      i && null != t.guildId ? l(t.guildId) : n(t), (0, f.trackWithMetadata)(g.AnalyticEvents.INBOX_CHANNEL_ACKED, {
        channel_id: t.channelId,
        guild_id: t.guildId,
        marked_all_channels_as_read: !1,
        num_unread_channels_remaining: a() - 1
      })
    }
  })
}

function L(e) {
  let {
    channel: t,
    toggle: n,
    getNumUnreadChannels: l
  } = e;

  function a() {
    n(t), (0, f.trackWithMetadata)(g.AnalyticEvents.INBOX_CHANNEL_COLLAPSED, {
      channel_id: t.channelId,
      guild_id: t.guildId,
      num_unread_channels_remaining: l(),
      is_now_collapsed: !t.collapsed
    })
  }
  return (0, s.jsx)(u.Tooltip, {
    text: M.default.Messages.COLLAPSE,
    children: e => (0, s.jsx)(u.Clickable, {
      ...e,
      className: i()(R.collapseButton, {
        [R.collapsed]: t.collapsed
      }),
      onClick: a,
      children: (0, s.jsx)(I.default, {
        width: 16,
        height: 16
      })
    })
  })
}