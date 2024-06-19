n.d(t, {
  Z: function() {
    return x
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(239091),
  r = n(561472),
  o = n(933557),
  c = n(287746),
  u = n(541716),
  d = n(910611),
  h = n(703656),
  m = n(664342),
  p = n(592125),
  E = n(703558),
  g = n(430824),
  f = n(502568),
  C = n(228392),
  _ = n(689938),
  I = n(656437);

function x(e) {
  let {
    channelId: t
  } = e, x = (0, s.e7)([p.Z], () => p.Z.getChannel(t)), T = (0, s.e7)([p.Z], () => p.Z.getChannel(null == x ? void 0 : x.parent_id)), N = (0, s.e7)([g.Z], () => g.Z.getGuild(null == x ? void 0 : x.getGuildId())), Z = (0, o.ZP)(x), S = i.useRef(!1);
  if (i.useEffect(() => {
      null != x && !S.current && (S.current = !0, (0, C.lN)(x))
    }, [x]), null == x || null == N) return null;
  let v = (0, l.jsx)(m.Z, {
    channel: x
  });
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(r.Z, {
      channel: x,
      draftType: E.d.ChannelMessage
    }), (0, l.jsx)(f.ZP, {
      toolbar: v,
      "aria-label": _.Z.Messages.THREAD_HEADER_BAR_A11Y_LABEL,
      children: (0, d.ud)({
        channel: x,
        parentChannel: T,
        channelName: Z,
        guild: N,
        inSidebar: !0,
        handleContextMenu: function(e) {
          (0, a.jW)(e, async () => {
            let {
              default: e
            } = await n.e("40157").then(n.bind(n, 422200));
            return t => (0, l.jsx)(e, {
              ...t,
              channel: x
            })
          })
        },
        handleClick: function() {
          null != x && (0, h.XU)(x.guild_id, x.id)
        }
      })
    }), (0, l.jsx)("div", {
      className: I.chat,
      children: (0, l.jsx)(c.Z, {
        channel: x,
        guild: N,
        chatInputType: u.I.SIDEBAR
      }, t)
    })]
  })
}