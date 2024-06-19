var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(91192),
  o = n(442837),
  u = n(481060),
  c = n(493683),
  d = n(239091),
  h = n(569471),
  g = n(488131),
  p = n(592125),
  m = n(306680),
  C = n(979651),
  E = n(938475),
  f = n(514342),
  _ = n(714794),
  I = n(135724),
  N = n(25601),
  Z = n(207055),
  S = n(981631),
  x = n(124368),
  T = n(689938),
  L = n(47705),
  v = n(359123),
  A = n(205546);

function M(e) {
  let {
    style: t,
    withGuildIcon: n
  } = e;
  return (0, l.jsx)("svg", {
    className: r()(A.spine, {
      [A.spineWithGuildIcon]: n
    }),
    width: "12",
    height: "11",
    viewBox: "0 0 12 11",
    fill: "none",
    "aria-hidden": !0,
    style: t,
    children: (0, l.jsx)("path", {
      d: "M11 9H4C2.89543 9 2 8.10457 2 7V1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1V7C0 9.20914 1.79086 11 4 11H11C11.5523 11 12 10.5523 12 10C12 9.44771 11.5523 9 11 9Z",
      fill: "currentColor"
    })
  })
}
t.Z = i.memo(function(e) {
  let {
    thread: t,
    isSelectedChannel: s,
    isSelectedVoice: A,
    isLast: R,
    withGuildIcon: O
  } = e, P = (0, o.e7)([E.ZP], () => E.ZP.getVoiceStatesForChannel(t), [t]), j = (0, o.e7)([C.Z], () => C.Z.hasVideo(t.id)), {
    unread: b,
    mentionCount: D
  } = (0, o.cj)([m.ZP], () => ({
    unread: m.ZP.hasUnread(t.id),
    mentionCount: m.ZP.getMentionCount(t.id)
  })), y = (0, o.e7)([h.Z], () => h.Z.isMuted(t.id)), U = i.useCallback(e => {
    (0, g.ok)(t, !e.shiftKey, x.on.CHANNEL_LIST)
  }, [t]), G = i.useCallback(() => {
    c.Z.preload(t.guild_id, t.id)
  }, [t.guild_id, t.id]), w = i.useCallback(e => {
    let i = p.Z.getChannel(t.id);
    null != i && (0, d.jW)(e, async () => {
      let {
        default: e
      } = await n.e("40157").then(n.bind(n, 422200));
      return t => (0, l.jsx)(e, {
        ...t,
        channel: i
      })
    })
  }, [t.id]), k = null == P ? 0 : P.length, {
    role: B,
    ...V
  } = (0, a.JA)(t.id), H = i.useRef(null), F = D > 0 ? T.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS.format({
    channelName: t.name,
    mentionCount: D
  }) : b ? T.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS.format({
    channelName: t.name
  }) : T.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL.format({
    channelName: t.name
  });
  return (0, l.jsxs)("li", {
    role: B,
    className: r()(L.containerDefault, {
      [L.selected]: s
    }),
    children: [(0, l.jsx)(M, {
      withGuildIcon: O
    }), R ? null : (0, l.jsx)(M, {
      withGuildIcon: O,
      style: {
        transform: "rotateX(180deg) translateY(-9px)"
      }
    }), (0, l.jsx)(u.FocusRing, {
      focusTarget: H,
      ringTarget: H,
      offset: {
        top: 2,
        bottom: 2,
        right: 4
      },
      children: (0, l.jsxs)("div", {
        className: r()(L.iconVisibility, v.wrapper, v.typeThread, {
          [v.modeSelected]: s,
          [v.modeMuted]: !s && y,
          [v.modeUnreadImportant]: !y && !s && b,
          [v.withGuildIcon]: O
        }),
        onMouseDown: G,
        onContextMenu: w,
        children: [!b || y || s ? null : (0, l.jsx)("div", {
          className: r()(v.unread, v.unreadImportant)
        }), (0, l.jsx)(u.Clickable, {
          ...V,
          innerRef: H,
          className: v.link,
          onClick: U,
          "aria-label": F,
          focusProps: {
            enabled: !1
          },
          children: (0, l.jsxs)("div", {
            className: r()(v.linkTop, v.__invalid_threadMainContent),
            children: [(0, l.jsx)(f.Z, {
              className: v.name,
              "aria-hidden": !0,
              children: t.name
            }), (0, l.jsxs)("div", {
              className: v.children,
              children: [k > 0 && t.userLimit > 0 ? (0, l.jsx)(I.Z, {
                userCount: k,
                video: j,
                channel: t
              }) : null, (0, _.Z)(D) ? (0, l.jsx)(N.Z, {
                mentionsCount: D
              }) : null]
            })]
          })
        })]
      })
    }), (0, l.jsx)(Z.Z, {
      channel: t,
      collapsed: !A,
      collapsedMax: 6,
      voiceStates: P,
      location: S.Sbl.GUILD_CHANNEL_LIST
    })]
  })
})