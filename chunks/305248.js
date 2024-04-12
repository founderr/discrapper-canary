"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("392711"),
  i = n.n(s),
  r = n("442837"),
  o = n("570140"),
  u = n("45114"),
  d = n("404616"),
  c = n("470623"),
  f = n("344185"),
  h = n("488131"),
  E = n("592125"),
  m = n("823379"),
  p = n("709054"),
  S = n("124368"),
  g = n("223763");

function _(e) {
  let {
    channel: t,
    channelRecord: n,
    deleteChannel: s
  } = e, _ = (0, r.useStateFromStoresArray)([f.default, E.default], () => i()(f.default.getThreadsForParent(n.guild_id, n.id)).values().filter(e => {
    let {
      id: n
    } = e;
    return p.default.compare(n, t.oldestReadMessageId) > 0
  }).map(e => {
    let {
      id: t
    } = e;
    return E.default.getChannel(t)
  }).filter(m.isNotNullish).sort((e, t) => p.default.compare(e.id, t.id)).value(), [t.oldestReadMessageId, n.guild_id, n.id]), N = l.useCallback((e, t) => {
    (0, h.openThreadSidebarForViewing)(e, t, S.OpenThreadAnalyticsLocations.INBOX)
  }, []);
  return l.useEffect(() => {
    null != n && t.isFullyLoaded && !t.hasError && !t.collapsed && 0 === _.length && o.default.wait(() => {
      (0, u.ack)(t.channelId, !0), s(t.channelId)
    })
  }), (0, a.jsx)("div", {
    className: g.container,
    children: _.map(e => (0, a.jsx)(c.ForumPostComposerStoreProvider, {
      createStore: () => (0, c.createForumPostComposerStore)(n),
      children: (0, a.jsx)(d.default, {
        className: g.forumPost,
        threadId: e.id,
        goToThread: N
      })
    }, e.id))
  })
}