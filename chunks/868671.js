n.d(t, {
  H: function() {
    return _
  },
  T: function() {
    return C
  }
}), n(47120), n(724458);
var l = n(470079),
  i = n(442837),
  s = n(570140),
  a = n(439170),
  r = n(592125),
  o = n(451478),
  c = n(626135),
  u = n(162461),
  d = n(146282),
  h = n(590026),
  m = n(178762),
  E = n(206583),
  p = n(809017),
  g = n(981631),
  f = n(689938);
let C = 0;

function _(e) {
  let {
    memberStoreProps: {
      groups: t,
      rows: n,
      version: C
    },
    channelId: _,
    guildId: I
  } = e, [x, T] = l.useState(!1), {
    requestId: N,
    entries: Z,
    impressionCappedEntryIds: S
  } = (0, h.Z)(_), v = (0, i.e7)([d.Z], () => d.Z.hidden), A = (0, i.e7)([o.Z], () => o.Z.isFocused()), M = (0, i.e7)([r.Z], () => r.Z.getChannel(_)), R = (null == M ? void 0 : M.isForumChannel()) === !1, [j, L, O, P] = l.useMemo(() => {
    let e;
    if (null == Z || 0 === Z.length || null == N || !R) return [t, n, C];
    let l = x ? Z.length : 3,
      i = Z.slice(0, l);
    e = v ? [{
      type: a.so.HIDDEN_CONTENT_INVENTORY
    }] : i.map(e => ({
      type: a.so.CONTENT_INVENTORY,
      entry: e,
      requestId: N
    }));
    let s = {
      id: p.G,
      type: a.so.CONTENT_INVENTORY_GROUP,
      key: p.G,
      count: e.length,
      index: n.length,
      title: f.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_GROUP_TITLE,
      onToggleExpand: () => {
        T(e => {
          let t = !e;
          return c.default.track(g.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
            channel_id: _,
            guild_id: I,
            expanded: t
          }), t
        })
      },
      expanded: x,
      expandedCount: Z.length,
      feedHeight: e.map(m.iZ).reduce((e, t) => e + t, 0)
    };
    return [
      [s, ...t],
      [...n, s, ...e], Math.random(), e
    ]
  }, [_, Z, x, t, I, N, n, C, v, R]), y = l.useRef(0), b = l.useRef(Z), D = l.useRef(), U = l.useRef({
    impressionCappedEntryIds: S
  }), k = l.useCallback(e => {
    var t;
    let n = Math.floor(e / m.YN),
      l = Math.min(null !== (t = null == P ? void 0 : P.length) && void 0 !== t ? t : 0, n);
    y.current = Math.max(y.current, l)
  }, [P]);
  return l.useEffect(() => {
    b.current = Z
  }, [Z]), l.useEffect(() => {
    U.current = {
      impressionCappedEntryIds: S
    }
  }, [S]), l.useEffect(() => (y.current = 0, D.current = Date.now(), () => {
    var e, t;
    if (null == N || null == D.current || Date.now() - D.current < 3e3) return;
    let n = null !== (t = null === (e = b.current) || void 0 === e ? void 0 : e.map(e => e.id)) && void 0 !== t ? t : [],
      l = n.slice(0, y.current);
    if (!v && !!A && !!R) c.default.track(g.rMx.RANKING_ITEMS_SEEN, {
      request_id: N,
      first_shown_at: D.current,
      item_ids: l,
      surface_type: E.Kd.GUILD_MEMBER_LIST,
      channel_id: _,
      guild_id: I,
      all_item_ids: n,
      impression_capped_item_ids: [...U.current.impressionCappedEntryIds]
    }), (0, u.wm)("useInjectContentInventoryFeed") && s.Z.dispatch({
      type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS",
      itemIds: l
    })
  }), [N, _, I, v, A, R]), {
    groups: j,
    rows: L,
    version: O,
    updateMaxRowSeen: k
  }
}