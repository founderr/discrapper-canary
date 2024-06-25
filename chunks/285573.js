var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(442837),
  o = n(239091),
  u = n(146773),
  c = n(592125),
  d = n(984933),
  h = n(496675),
  p = n(98597),
  g = n(473403),
  m = n(981631),
  C = n(490897),
  E = n(47705);
let f = (0, u.B)(function(e) {
  let {
    guild: t,
    selectedChannelId: s,
    position: u,
    disableManageChannels: f,
    sorting: _,
    sortingType: I,
    sortingPosition: N,
    connectChannelDragSource: Z,
    connectChannelDropTarget: S,
    tabIndex: x
  } = e, L = (0, a.e7)([c.Z, d.ZP], () => {
    let e = d.ZP.getDirectoryChannelIds(t.id);
    return 0 === e.length ? null : c.Z.getChannel(e[0])
  }), T = (0, a.e7)([c.Z], () => c.Z.getChannel(null == L ? void 0 : L.parent_id)), v = s === (null == L ? void 0 : L.id), A = (0, a.e7)([h.Z], () => null != T ? h.Z.can(m.Plq.MANAGE_CHANNELS, T) : null != t && h.Z.can(m.Plq.MANAGE_CHANNELS, t)), M = i.useCallback(e => {
    null != L && (0, o.jW)(e, async () => {
      let {
        default: e
      } = await n.e("70623").then(n.bind(n, 99334));
      return t => (0, l.jsx)(e, {
        ...t,
        channel: L
      })
    })
  }, [L]);
  if (null == L) return null;
  let R = (0, p.jo)(u, N),
    O = (0, p.CN)(L, _, I),
    P = (0, l.jsx)("div", {
      className: r()(R, {
        [E.disabled]: O,
        [E.selected]: v
      }),
      "data-dnd-name": L.name,
      children: (0, l.jsxs)(g.Z, {
        className: E.iconVisibility,
        channel: L,
        guild: t,
        selected: v,
        onContextMenu: M,
        forceInteractable: !0,
        resolvedUnreadSetting: C.i.ONLY_MENTIONS,
        children: [(0, l.jsx)(p.eP, {
          channel: L,
          tabIndex: x
        }), (0, l.jsx)(p.hR, {
          channel: L,
          disableManageChannels: f,
          tabIndex: x
        })]
      })
    });
  return A && (P = S(Z(P))), P
});
t.Z = f