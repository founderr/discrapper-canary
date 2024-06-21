n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(481060),
  o = n(998951),
  c = n(702346),
  u = n(534469),
  d = n(511010),
  h = n(981631),
  m = n(689938),
  p = n(429759),
  E = n(105461);

function g(e) {
  let {
    expanded: t,
    onClick: n,
    count: i,
    compact: s,
    collapsedReason: a
  } = e;
  return (0, l.jsx)(o.Z, {
    compact: s,
    role: "group",
    childrenMessageContent: (0, l.jsx)(c.Z, {
      compact: s,
      className: p.blockedSystemMessage,
      iconNode: (0, l.jsx)(r.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
        className: p.blockedIcon
      }),
      children: (0, l.jsxs)("div", {
        className: p.blockedMessageText,
        children: [a.format({
          count: i
        }), " —", " ", (0, l.jsx)(r.Clickable, {
          tag: "span",
          onClick: n,
          className: p.blockedAction,
          children: t ? m.Z.Messages.BLOCKED_MESSAGES_HIDE.format({
            count: i
          }) : m.Z.Messages.BLOCKED_MESSAGES_SHOW.format({
            count: i
          })
        })]
      })
    })
  })
}
t.Z = i.memo(function(e) {
  var t;
  let {
    messages: n,
    channel: s,
    compact: r = !1,
    unreadId: o,
    collapsedReason: c
  } = e, {
    hasJumpTarget: m = !1
  } = n, [f, C] = i.useState(m), _ = i.useCallback(() => C(e => !e), []), I = n.hasUnread ? n.content.length - 1 : n.content.length;
  return (0, l.jsxs)("div", {
    className: a()({
      [E.groupStart]: !0,
      [p.expanded]: f
    }),
    children: [n.hasUnread && (!f || (null === (t = n.content[0]) || void 0 === t ? void 0 : t.type) === h.ys_.DIVIDER) ? (0, l.jsx)(d.Z, {
      isUnread: !0,
      id: o
    }, "divider") : null, (0, l.jsx)(g, {
      count: I,
      compact: r,
      expanded: f,
      onClick: _,
      collapsedReason: c
    }, "collapsed-message-item"), f ? n.content.map((e, t) => {
      if (e.type === h.ys_.DIVIDER && t > 0) {
        var i, a;
        let e = null !== (a = null === (i = n.content[t + 1]) || void 0 === i ? void 0 : i.isGroupStart) && void 0 !== a && a;
        return (0, l.jsx)(d.Z, {
          isUnread: !0,
          isBeforeGroup: e,
          id: o
        }, "divider")
      }
      if (e.type === h.ys_.MESSAGE || e.type === h.ys_.THREAD_STARTER_MESSAGE) {
        let t = e.type === h.ys_.THREAD_STARTER_MESSAGE ? u.Ru : u.ZP;
        return (0, l.jsx)(t, {
          className: p.__invalid_blocked,
          compact: r,
          channel: s,
          message: e.content,
          groupId: e.groupId,
          flashKey: e.flashKey,
          isLastItem: !1,
          renderContentOnly: !1
        }, e.content.id)
      }
    }) : null]
  })
})