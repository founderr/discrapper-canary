n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(920906),
  o = n(442837),
  c = n(481060),
  u = n(570140),
  d = n(45114),
  E = n(367907),
  _ = n(717680),
  I = n(703656),
  T = n(592125),
  m = n(259580),
  N = n(617379),
  h = n(324081),
  C = n(305248),
  S = n(520116),
  A = n(981631),
  g = n(689938),
  p = n(385190);
let f = i.memo(function(e) {
  let {
    channel: t,
    deleteChannel: n
  } = e, l = i.useRef(null), [
    [a, o], c
  ] = i.useState([0, 0]), u = t.deleted && a > 0;
  if (t.deleted && 0 === a && null != l.current) {
    let e = l.current.offsetHeight,
      t = l.current.offsetTop,
      n = l.current.parentElement.scrollTop,
      s = n > t ? e - (n - t) : e;
    c([e, e - s])
  }
  let {
    opacity: d,
    size: E
  } = (0, r.useSpring)({
    config: {
      clamp: !0,
      friction: 18,
      tension: 200
    },
    opacity: u ? 0 : 1,
    size: u ? 0 : 1,
    onRest: () => {
      n(t.channelId)
    }
  }), _ = {
    opacity: d,
    height: E.to(e => u ? function(e, t, n) {
      return t + (e - t) * n
    }(a, o, e) : "auto")
  };
  return (0, s.jsx)(r.animated.div, {
    ref: l,
    style: _,
    children: (0, s.jsx)(R, {
      ...e
    })
  })
});
t.Z = f;
let R = i.memo(function(e) {
  let {
    channel: t,
    onJump: n,
    deleteChannel: l,
    toggle: a
  } = e, r = (0, o.e7)([T.Z], () => T.Z.getChannel(t.channelId));
  if (i.useEffect(() => {
      null != r && t.isFullyLoaded && !t.hasError && !t.collapsed && "messages" === t.type && 0 === t.messages.length && u.Z.wait(() => {
        (0, d.In)(t.channelId, !0), l(t.channelId)
      })
    }), null == r || !t.hasLoadedAnything) return null;
  let _ = (e, s) => {
    (0, E.yw)(A.rMx.INBOX_CHANNEL_CLICKED, {
      channel_id: t.channelId,
      guild_id: t.guildId
    });
    let i = null != s ? s : t.oldestUnreadMessageId;
    (0, I.uL)(A.Z5c.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : i)), n(e)
  };
  return (0, s.jsx)("div", {
    className: p.channel,
    children: (0, s.jsx)(c.HeadingLevel, {
      component: (0, s.jsxs)(h.Z, {
        channel: r,
        gotoChannel: _,
        mentionCount: t.mentionCount,
        toggleCollapsed: a,
        channelState: t,
        children: [(0, s.jsx)(N.Z, {
          channel: r
        }), (0, s.jsx)(O, {
          ...e
        }), "nsfw" === t.type ? null : (0, s.jsx)(M, {
          ...e
        })]
      }),
      children: t.collapsed ? null : "messages" === t.type ? (0, s.jsx)(S.Z, {
        channel: t,
        channelRecord: r,
        gotoChannel: _
      }) : "forum" === t.type ? (0, s.jsx)(C.Z, {
        channel: t,
        channelRecord: r,
        deleteChannel: l
      }) : null
    })
  })
});

function O(e) {
  let {
    channel: t,
    markChannelRead: n,
    markGuildRead: i,
    getNumUnreadChannels: l
  } = e, a = (0, _.Z)() && null != t.guildId;
  return (0, s.jsx)(c.CircleIconButton, {
    className: p.markReadButton,
    tooltip: a ? g.Z.Messages.MARK_GUILD_AS_READ : g.Z.Messages.MARK_AS_READ,
    color: c.CircleIconButtonColors.TERTIARY,
    icon: a ? (0, s.jsx)(c.DoubleCheckmarkLargeIcon, {
      size: "xs",
      color: "currentColor"
    }) : (0, s.jsx)(c.CheckmarkLargeIcon, {
      size: "xs",
      color: "currentColor"
    }),
    onClick: function() {
      a && null != t.guildId ? i(t.guildId) : n(t), (0, E.yw)(A.rMx.INBOX_CHANNEL_ACKED, {
        channel_id: t.channelId,
        guild_id: t.guildId,
        marked_all_channels_as_read: !1,
        num_unread_channels_remaining: l() - 1
      })
    }
  })
}

function M(e) {
  let {
    channel: t,
    toggle: n,
    getNumUnreadChannels: i
  } = e;

  function l() {
    n(t), (0, E.yw)(A.rMx.INBOX_CHANNEL_COLLAPSED, {
      channel_id: t.channelId,
      guild_id: t.guildId,
      num_unread_channels_remaining: i(),
      is_now_collapsed: !t.collapsed
    })
  }
  return (0, s.jsx)(c.Tooltip, {
    text: g.Z.Messages.COLLAPSE,
    children: e => (0, s.jsx)(c.Clickable, {
      ...e,
      className: a()(p.collapseButton, {
        [p.collapsed]: t.collapsed
      }),
      onClick: l,
      children: (0, s.jsx)(m.Z, {
        width: 16,
        height: 16
      })
    })
  })
}