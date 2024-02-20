"use strict";
a.r(t), a.d(t, {
  default: function() {
    return p
  }
});
var l = a("37983"),
  n = a("884691"),
  r = a("446674"),
  s = a("77078"),
  i = a("272030"),
  u = a("42203"),
  o = a("124948"),
  d = a("697218"),
  c = a("811305"),
  f = a("800843"),
  C = a("442184"),
  h = a("648564"),
  m = a("963906"),
  p = n.memo(function(e) {
    let {
      threadId: t,
      goToThread: n,
      showChannelName: o
    } = e, d = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(t)), c = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(d.parent_id));
    return (0, l.jsxs)(s.Clickable, {
      className: m.container,
      onClick: e => n(d, e.shiftKey),
      onContextMenu: e => (0, i.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await a.el("994827").then(a.bind(a, "994827"));
        return t => (0, l.jsx)(e, {
          ...t,
          channel: d
        })
      }),
      children: [(0, l.jsxs)("div", {
        className: m.left,
        children: [(0, l.jsxs)(s.Heading, {
          className: m.threadNameLine,
          variant: "heading-md/semibold",
          children: [(0, l.jsx)("span", {
            className: m.threadName,
            children: d.name
          }), o && null != c ? (0, l.jsx)("span", {
            className: m.parentName,
            children: "#".concat(c.name)
          }) : null]
        }), (0, C.default)(d)]
      }), (0, l.jsx)(v, {
        channel: d
      })]
    })
  });

function v(e) {
  let {
    channel: t
  } = e, a = (0, r.useStateFromStores)([f.default], () => {
    var e;
    return null !== (e = f.default.getMemberIdsPreview(t.id)) && void 0 !== e ? e : []
  }), s = (0, r.useStateFromStores)([f.default], () => {
    var e;
    return null !== (e = f.default.getMemberCount(t.id)) && void 0 !== e ? e : 0
  }), i = (0, r.useStateFromStoresArray)([d.default], () => a.map(e => d.default.getUser(e)));
  return (n.useEffect(() => {
    a.filter((e, t) => null == i[t]).forEach(e => {
      o.default.requestMember(t.guild_id, e)
    })
  }, []), 0 === a.length) ? null : (0, l.jsx)(c.default, {
    className: m.facepile,
    showDefaultAvatarsForNullUsers: !0,
    guildId: t.guild_id,
    users: i,
    count: s,
    max: h.MAX_THREAD_MEMBERS_PREVIEW
  })
}