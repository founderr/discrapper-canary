n.d(t, {
  Z: function() {
    return R
  }
});
var l = n(735250),
  i = n(470079),
  s = n(392711),
  a = n.n(s),
  r = n(442837),
  o = n(570140),
  c = n(239091),
  u = n(561472),
  d = n(367907),
  h = n(731429),
  m = n(188471),
  p = n(933557),
  E = n(287746),
  g = n(541716),
  f = n(910611),
  C = n(359110),
  _ = n(592125),
  I = n(703558),
  x = n(430824),
  T = n(979651),
  N = n(502568),
  Z = n(664342),
  S = n(124368),
  v = n(981631),
  A = n(689938),
  M = n(423289);

function R(e) {
  let {
    channelId: t,
    baseChannelId: s,
    channelViewSource: R = "Split View"
  } = e, j = (0, r.e7)([_.Z], () => _.Z.getChannel(t)), L = (0, r.e7)([x.Z], () => x.Z.getGuild(null == j ? void 0 : j.getGuildId())), O = (0, p.ZP)(j);
  (function(e) {
    let t = (0, r.e7)([T.Z], () => null != e && !a().isEmpty(T.Z.getVoiceStatesForChannel(e.id)));
    i.useEffect(() => {
      t && null != e && (o.Z.dispatch({
        type: "SIDEBAR_CLOSE",
        baseChannelId: e.parent_id
      }), (0, C.ad)(e, S.on.VOICE_AUTO_OPEN))
    }, [t, e])
  })(j);
  let P = i.useRef(!1);
  if (i.useEffect(() => {
      if (null == j || P.current) return;
      P.current = !0;
      let e = (0, h.K)(_.Z.getChannel(j.id), !0);
      (0, d.yw)(v.rMx.CHANNEL_OPENED, {
        ...e,
        ...(0, d.$H)(j.id),
        channel_view: R
      }), (0, m.a)(v.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: j.id
      })
    }, [j, R]), null == j || null == L) return null;
  let y = (0, l.jsx)(Z.Z, {
    channel: j,
    baseChannelId: s
  });
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.Z, {
      channel: j,
      draftType: I.d.ChannelMessage
    }), (0, l.jsx)(N.ZP, {
      toolbar: y,
      "aria-label": A.Z.Messages.THREAD_HEADER_BAR_A11Y_LABEL,
      children: (0, f.ud)({
        channel: j,
        channelName: O,
        guild: L,
        inSidebar: !0,
        handleContextMenu: function(e) {
          (0, c.jW)(e, async () => {
            let {
              default: e
            } = await n.e("40157").then(n.bind(n, 422200));
            return t => (0, l.jsx)(e, {
              ...t,
              channel: j
            })
          })
        },
        handleClick: function() {
          if (null != j)(0, C.Kh)(j.id)
        }
      })
    }), (0, l.jsx)("div", {
      className: M.chat,
      children: (0, l.jsx)(E.Z, {
        channel: j,
        guild: L,
        chatInputType: g.I.SIDEBAR
      }, t)
    })]
  })
}