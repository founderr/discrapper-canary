"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var a = n("37983"),
  r = n("884691"),
  l = n("446674"),
  i = n("77078"),
  s = n("272030"),
  u = n("42203"),
  o = n("124948"),
  d = n("697218"),
  c = n("811305"),
  f = n("800843"),
  h = n("442184"),
  C = n("648564"),
  p = n("140407"),
  v = r.memo(function(e) {
    let {
      threadId: t,
      goToThread: r,
      showChannelName: o
    } = e, d = (0, l.useStateFromStores)([u.default], () => u.default.getChannel(t)), c = (0, l.useStateFromStores)([u.default], () => u.default.getChannel(d.parent_id));
    return (0, a.jsxs)(i.Clickable, {
      className: p.container,
      onClick: e => r(d, e.shiftKey),
      onContextMenu: e => (0, s.openContextMenuLazy)(e, async () => {
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
        children: [(0, a.jsxs)(i.Heading, {
          className: p.threadNameLine,
          variant: "heading-md/semibold",
          children: [(0, a.jsx)("span", {
            className: p.threadName,
            children: d.name
          }), o && null != c ? (0, a.jsx)("span", {
            className: p.parentName,
            children: "#".concat(c.name)
          }) : null]
        }), (0, h.default)(d)]
      }), (0, a.jsx)(m, {
        channel: d
      })]
    })
  });

function m(e) {
  let {
    channel: t
  } = e, n = (0, l.useStateFromStores)([f.default], () => {
    var e;
    return null !== (e = f.default.getMemberIdsPreview(t.id)) && void 0 !== e ? e : []
  }), i = (0, l.useStateFromStores)([f.default], () => {
    var e;
    return null !== (e = f.default.getMemberCount(t.id)) && void 0 !== e ? e : 0
  }), s = (0, l.useStateFromStoresArray)([d.default], () => n.map(e => d.default.getUser(e)));
  return (r.useEffect(() => {
    n.filter((e, t) => null == s[t]).forEach(e => {
      o.default.requestMember(t.guild_id, e)
    })
  }, []), 0 === n.length) ? null : (0, a.jsx)(c.default, {
    className: p.facepile,
    showDefaultAvatarsForNullUsers: !0,
    guildId: t.guild_id,
    users: s,
    count: i,
    max: C.MAX_THREAD_MEMBERS_PREVIEW
  })
}