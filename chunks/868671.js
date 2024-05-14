"use strict";
n.r(t), n.d(t, {
  CONTENT_FEED_SECTION: function() {
    return E
  },
  useInjectContentInventoryFeed: function() {
    return C
  }
}), n("47120"), n("724458");
var a = n("470079"),
  l = n("442837"),
  s = n("439170"),
  i = n("592125"),
  r = n("451478"),
  o = n("626135"),
  u = n("146282"),
  d = n("590026"),
  c = n("178762"),
  f = n("206583"),
  h = n("809017"),
  m = n("981631"),
  p = n("689938");
let E = 0;

function C(e) {
  let {
    memberStoreProps: {
      groups: t,
      rows: n,
      version: E
    },
    channelId: C,
    guildId: g
  } = e, [S, _] = a.useState(!1), {
    requestId: T,
    entries: I
  } = (0, d.default)(C), A = (0, l.useStateFromStores)([u.default], () => u.default.hidden), N = (0, l.useStateFromStores)([r.default], () => r.default.isFocused()), v = (0, l.useStateFromStores)([i.default], () => i.default.getChannel(C)), x = (null == v ? void 0 : v.isForumChannel()) === !1, [M, R, L, y] = a.useMemo(() => {
    let e;
    if (null == I || 0 === I.length || null == T || !x) return [t, n, E];
    let a = S ? I.length : 3,
      l = I.slice(0, a);
    e = A ? [{
      type: s.MemberListRowTypes.HIDDEN_CONTENT_INVENTORY
    }] : l.map(e => ({
      type: s.MemberListRowTypes.CONTENT_INVENTORY,
      entry: e,
      requestId: T
    }));
    let i = {
        id: h.MEMBER_LIST_CONTENT_GROUP_ID,
        type: s.MemberListRowTypes.CONTENT_INVENTORY_GROUP,
        key: h.MEMBER_LIST_CONTENT_GROUP_ID,
        count: e.length,
        index: n.length,
        title: p.default.Messages.CONTENT_INVENTORY_MEMBERLIST_GROUP_TITLE,
        onToggleExpand: () => {
          _(e => {
            let t = !e;
            return o.default.track(m.AnalyticEvents.MEMBERLIST_CONTENT_FEED_TOGGLED, {
              channel_id: C,
              guild_id: g,
              expanded: t
            }), t
          })
        },
        expanded: S,
        expandedCount: I.length,
        feedHeight: e.map(c.getContentRowHeight).reduce((e, t) => e + t, 0)
      },
      r = [i, ...t],
      u = [...n, i, ...e];
    return [r, u, Math.random(), e]
  }, [C, I, S, t, g, T, n, E, A, x]), O = a.useRef(0), j = a.useRef(I), P = a.useRef(), D = a.useCallback(e => {
    var t;
    let n = Math.floor(e / c.DEFAULT_CONTENT_ROW_HEIGHT),
      a = Math.min(null !== (t = null == y ? void 0 : y.length) && void 0 !== t ? t : 0, n);
    O.current = Math.max(O.current, a)
  }, [y]);
  return a.useEffect(() => {
    j.current = I
  }, [I]), a.useEffect(() => (O.current = 0, P.current = Date.now(), () => {
    var e, t;
    if (null == T || null == P.current || Date.now() - P.current < 3e3) return;
    let n = null !== (t = null === (e = j.current) || void 0 === e ? void 0 : e.map(e => e.id)) && void 0 !== t ? t : [],
      a = n.slice(0, O.current);
    !A && N && x && o.default.track(m.AnalyticEvents.RANKING_ITEMS_SEEN, {
      request_id: T,
      first_shown_at: P.current,
      item_ids: a,
      surface_type: f.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
      channel_id: C,
      guild_id: g,
      all_item_ids: n
    })
  }), [T, C, g, A, N, x]), {
    groups: M,
    rows: R,
    version: L,
    updateMaxRowSeen: D
  }
}