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
  g = n(98597),
  p = n(473403),
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
  } = e, T = (0, a.e7)([c.Z, d.ZP], () => {
    let e = d.ZP.getDirectoryChannelIds(t.id);
    return 0 === e.length ? null : c.Z.getChannel(e[0])
  }), L = (0, a.e7)([c.Z], () => c.Z.getChannel(null == T ? void 0 : T.parent_id)), v = s === (null == T ? void 0 : T.id), A = (0, a.e7)([h.Z], () => null != L ? h.Z.can(m.Plq.MANAGE_CHANNELS, L) : null != t && h.Z.can(m.Plq.MANAGE_CHANNELS, t)), M = i.useCallback(e => {
    null != T && (0, o.jW)(e, async () => {
      let {
        default: e
      } = await n.e("70623").then(n.bind(n, 99334));
      return t => (0, l.jsx)(e, {
        ...t,
        channel: T
      })
    })
  }, [T]);
  if (null == T) return null;
  let R = (0, g.jo)(u, N),
    O = (0, g.CN)(T, _, I),
    P = (0, l.jsx)("div", {
      className: r()(R, {
        [E.disabled]: O,
        [E.selected]: v
      }),
      "data-dnd-name": T.name,
      children: (0, l.jsxs)(p.Z, {
        className: E.iconVisibility,
        channel: T,
        guild: t,
        selected: v,
        onContextMenu: M,
        forceInteractable: !0,
        resolvedUnreadSetting: C.i.ONLY_MENTIONS,
        children: [(0, l.jsx)(g.eP, {
          channel: T,
          tabIndex: x
        }), (0, l.jsx)(g.hR, {
          channel: T,
          disableManageChannels: f,
          tabIndex: x
        })]
      })
    });
  return A && (P = S(Z(P))), P
});
t.Z = f