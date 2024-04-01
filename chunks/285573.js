"use strict";
n.r(t);
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("239091"),
  u = n("146773"),
  d = n("592125"),
  c = n("984933"),
  f = n("496675"),
  h = n("98597"),
  p = n("473403"),
  C = n("981631"),
  m = n("490897"),
  g = n("294639");
let E = (0, u.makeChannelSortable)(function(e) {
  let {
    guild: t,
    selectedChannelId: s,
    position: u,
    disableManageChannels: E,
    sorting: S,
    sortingType: _,
    sortingPosition: I,
    connectChannelDragSource: N,
    connectChannelDropTarget: T,
    tabIndex: A
  } = e, L = (0, r.useStateFromStores)([d.default, c.default], () => {
    let e = c.default.getDirectoryChannelIds(t.id);
    return 0 === e.length ? null : d.default.getChannel(e[0])
  }), v = (0, r.useStateFromStores)([d.default], () => d.default.getChannel(null == L ? void 0 : L.parent_id)), x = s === (null == L ? void 0 : L.id), R = (0, r.useStateFromStores)([f.default], () => null != v ? f.default.can(C.Permissions.MANAGE_CHANNELS, v) : null != t && f.default.can(C.Permissions.MANAGE_CHANNELS, t)), O = a.useCallback(e => {
    null != L && (0, o.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("70623").then(n.bind(n, "99334"));
      return t => (0, l.jsx)(e, {
        ...t,
        channel: L
      })
    })
  }, [L]);
  if (null == L) return null;
  let y = (0, h.getChannelItemClassName)(u, I),
    M = (0, h.isChannelItemDisabled)(L, S, _),
    D = (0, l.jsx)("div", {
      className: i()(y, {
        [g.disabled]: M,
        [g.selected]: x
      }),
      "data-dnd-name": L.name,
      children: (0, l.jsxs)(p.default, {
        className: g.iconVisibility,
        channel: L,
        guild: t,
        selected: x,
        onContextMenu: O,
        forceInteractable: !0,
        resolvedUnreadSetting: m.UnreadSetting.ONLY_MENTIONS,
        children: [(0, l.jsx)(h.ChannelItemInviteButton, {
          channel: L,
          tabIndex: A
        }), (0, l.jsx)(h.ChannelItemEditButton, {
          channel: L,
          disableManageChannels: E,
          tabIndex: A
        })]
      })
    });
  return R && (D = T(N(D))), D
});
t.default = E