l.d(n, {
  Z: function() {
    return L
  }
}), l(653041);
var a = l(735250),
  i = l(470079),
  s = l(442837),
  r = l(481060),
  t = l(239091),
  d = l(561472),
  c = l(36311),
  o = l(367907),
  u = l(188471),
  h = l(541716),
  m = l(526120),
  g = l(563534),
  x = l(736052),
  Z = l(442336),
  C = l(910611),
  v = l(41776),
  f = l(703656),
  I = l(6025),
  j = l(592125),
  N = l(703558),
  p = l(731290),
  E = l(430824),
  _ = l(375954),
  b = l(594174),
  M = l(502568),
  A = l(933557),
  S = l(287746),
  T = l(981631),
  R = l(689938),
  P = l(415412);

function L(e) {
  let {
    channelId: n,
    baseChannelId: L,
    channelViewSource: H = "Split View",
    isResourceChannelView: y
  } = e, D = (0, s.e7)([j.Z], () => j.Z.getChannel(n)), k = (0, s.e7)([E.Z], () => E.Z.getGuild(null == D ? void 0 : D.getGuildId())), O = (0, s.e7)([b.default], () => b.default.getCurrentUser()), w = (0, s.e7)([p.Z], () => p.Z.didAgree(null == D ? void 0 : D.guild_id)), U = (null == O ? void 0 : O.nsfwAllowed) === !0, B = (0, A.ZP)(D), G = (0, s.e7)([v.Z], () => (null == k ? void 0 : k.id) != null && v.Z.isLurking(k.id), [k]), z = (0, x.Z)(n), W = (0, s.e7)([g.Z], () => {
    var e;
    return null === (e = g.Z.getResourceForChannel(null == k ? void 0 : k.id, n)) || void 0 === e ? void 0 : e.title
  }), F = i.useRef(!1);
  if (i.useEffect(() => {
      null != D && !F.current && (F.current = !0, (0, o.yw)(T.rMx.CHANNEL_OPENED, {
        ...(0, o.$H)(D.id),
        channel_view: H
      }), (0, u.a)(T.rMx.CHANNEL_OPENED_CLICKSTREAM, {
        channelId: D.id
      }))
    }, [D, H]), null == D || null == k) return null;
  let V = [];
  return (!G && V.push((0, a.jsx)(Z.Z, {
    channel: D
  }, "notifications")), V.push((0, a.jsx)(M.ZP.Icon, {
    icon: r.CloseSmallIcon,
    tooltip: R.Z.Messages.CLOSE,
    onClick: () => I.Z.closeChannelSidebar(L)
  }, "close")), !D.isNSFW() || U && w) ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.Z, {
      channel: D,
      draftType: N.d.ChannelMessage
    }), (0, a.jsx)(M.ZP, {
      toolbar: V,
      "aria-label": R.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
      children: (0, C.ud)({
        channel: D,
        channelName: z ? W : B,
        guild: k,
        inSidebar: !0,
        handleContextMenu: e => {
          (0, t.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([l.e("99387"), l.e("24783")]).then(l.bind(l, 439635));
            return n => (0, a.jsx)(e, {
              ...n,
              channel: D,
              guild: k
            })
          })
        },
        handleClick: () => {
          let e = _.Z.getMessages(D.id);
          if (y) {
            (0, f.uL)(T.Z5c.CHANNEL(D.guild_id, D.id)), (0, m.C3)(D.guild_id, null);
            return
          }(0, f.XU)(D.guild_id, D.id, e.jumpTargetId)
        }
      })
    }), (0, a.jsx)("div", {
      className: P.chat,
      children: (0, a.jsx)(S.Z, {
        channel: D,
        guild: k,
        chatInputType: h.I.SIDEBAR
      }, n)
    })]
  }) : (0, a.jsx)(c.Z, {
    guild: k
  })
}