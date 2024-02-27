"use strict";
n.r(t), n.d(t, {
  CONTENT_FEED_SECTION: function() {
    return c
  },
  useInjectContentInventoryFeed: function() {
    return f
  }
}), n("222007"), n("808653");
var l = n("884691"),
  a = n("446674"),
  s = n("19766"),
  i = n("265596"),
  r = n("346967"),
  u = n("709377"),
  o = n("447313"),
  d = n("782340");
let c = 0;

function f(e) {
  let {
    groups: t,
    rows: n,
    version: c
  } = e, [f, h] = l.useState(!1), m = (0, a.useStateFromStores)([i.default], () => i.default.getFeed(u.ContentInventoryFeedKey.GLOBAL_FEED)), [p, E, g] = l.useMemo(() => {
    if (null == m || 0 === m.entries.length) return [t, n, c];
    let e = f ? m.entries.length : 3,
      l = m.entries.slice(0, e),
      a = l.map(e => ({
        type: s.MemberListRowTypes.CONTENT_INVENTORY,
        entry: e
      })),
      i = {
        id: o.MEMBER_LIST_CONTENT_GROUP_ID,
        type: s.MemberListRowTypes.CONTENT_INVENTORY_GROUP,
        key: o.MEMBER_LIST_CONTENT_GROUP_ID,
        count: a.length,
        index: n.length,
        title: d.default.Messages.CONTENT_INVENTORY_MEMBERLIST_GROUP_TITLE,
        onToggleExpand: () => h(e => !e),
        expanded: f,
        expandedCount: m.entries.length,
        feedHeight: a.map(r.getContentRowHeight).reduce((e, t) => e + t, 0)
      },
      u = [i, ...t],
      p = [...n, i, ...a];
    return [u, p, Math.random()]
  }, [f, m, t, n, c]);
  return {
    groups: p,
    rows: E,
    version: g
  }
}