"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var a = n("37983"),
  l = n("884691"),
  r = n("446674"),
  s = n("77078"),
  i = n("272030"),
  u = n("42203"),
  o = n("124948"),
  d = n("697218"),
  c = n("811305"),
  f = n("800843"),
  C = n("442184"),
  h = n("648564"),
  p = n("140407"),
  v = l.memo(function(e) {
    let {
      threadId: t,
      goToThread: l,
      showChannelName: o
    } = e, d = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(t)), c = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(d.parent_id));
    return (0, a.jsxs)(s.Clickable, {
      className: p.container,
      onClick: e => l(d, e.shiftKey),
      onContextMenu: e => (0, i.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("994827").then(n.bind(n, "994827"));
        return t => (0, a.jsx)(e, {
          ...t,
          channel: d
        })
      }),
      children: [(0, a.jsxs)("div", {
        className: p.left,
        children: [(0, a.jsxs)(s.Heading, {
          className: p.threadNameLine,
          variant: "heading-md/semibold",
          children: [(0, a.jsx)("span", {
            className: p.threadName,
            children: d.name
          }), o && null != c ? (0, a.jsx)("span", {
            className: p.parentName,
            children: "#".concat(c.name)
          }) : null]
        }), (0, C.default)(d)]
      }), (0, a.jsx)(m, {
        channel: d
      })]
    })
  });

function m(e) {
  let {
    channel: t
  } = e, n = (0, r.useStateFromStores)([f.default], () => {
    var e;
    return null !== (e = f.default.getMemberIdsPreview(t.id)) && void 0 !== e ? e : []
  }), s = (0, r.useStateFromStores)([f.default], () => {
    var e;
    return null !== (e = f.default.getMemberCount(t.id)) && void 0 !== e ? e : 0
  }), i = (0, r.useStateFromStoresArray)([d.default], () => n.map(e => d.default.getUser(e)));
  return (l.useEffect(() => {
    n.filter((e, t) => null == i[t]).forEach(e => {
      o.default.requestMember(t.guild_id, e)
    })
  }, []), 0 === n.length) ? null : (0, a.jsx)(c.default, {
    className: p.facepile,
    showDefaultAvatarsForNullUsers: !0,
    guildId: t.guild_id,
    users: i,
    count: s,
    max: h.MAX_THREAD_MEMBERS_PREVIEW
  })
}