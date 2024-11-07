n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(492593),
    c = n(534469),
    d = n(511010),
    u = n(834129),
    h = n(981631),
    p = n(388032),
    m = n(590008),
    f = n(916315);
function g(e) {
    let { expanded: t, onClick: n, count: l, compact: r, collapsedReason: a } = e;
    return (0, i.jsx)(o.Z, {
        compact: r,
        role: 'group',
        childrenMessageContent: (0, i.jsx)(u.Z, {
            compact: r,
            className: m.blockedSystemMessage,
            iconNode: (0, i.jsx)(s.XSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: m.blockedIcon
            }),
            children: (0, i.jsxs)('div', {
                className: m.blockedMessageText,
                children: [
                    p.intl.format(a, { count: l }),
                    ' \u2014',
                    ' ',
                    (0, i.jsx)(s.Clickable, {
                        tag: 'span',
                        onClick: n,
                        className: m.blockedAction,
                        children: t ? p.intl.formatToPlainString(p.t['5XFZjY'], { count: l }) : p.intl.formatToPlainString(p.t.wUJXIi, { count: l })
                    })
                ]
            })
        })
    });
}
t.Z = l.memo(function (e) {
    var t;
    let { messages: n, channel: r, compact: s = !1, unreadId: o, collapsedReason: u } = e,
        { hasJumpTarget: p = !1 } = n,
        [C, x] = l.useState(p),
        v = l.useCallback(() => x((e) => !e), []),
        _ = n.hasUnread ? n.content.length - 1 : n.content.length;
    return (0, i.jsxs)('div', {
        className: a()({
            [f.groupStart]: !0,
            [m.expanded]: C
        }),
        children: [
            n.hasUnread && (!C || (null === (t = n.content[0]) || void 0 === t ? void 0 : t.type) === h.ys_.DIVIDER)
                ? (0, i.jsx)(
                      d.Z,
                      {
                          isUnread: !0,
                          id: o
                      },
                      'divider'
                  )
                : null,
            (0, i.jsx)(
                g,
                {
                    count: _,
                    compact: s,
                    expanded: C,
                    onClick: v,
                    collapsedReason: u
                },
                'collapsed-message-item'
            ),
            C
                ? n.content.map((e, t) => {
                      if (e.type === h.ys_.DIVIDER && t > 0) {
                          var l, a;
                          let e = null !== (a = null === (l = n.content[t + 1]) || void 0 === l ? void 0 : l.isGroupStart) && void 0 !== a && a;
                          return (0, i.jsx)(
                              d.Z,
                              {
                                  isUnread: !0,
                                  isBeforeGroup: e,
                                  id: o
                              },
                              'divider'
                          );
                      }
                      if (e.type === h.ys_.MESSAGE || e.type === h.ys_.THREAD_STARTER_MESSAGE) {
                          let t = e.type === h.ys_.THREAD_STARTER_MESSAGE ? c.Ru : c.ZP;
                          return (0, i.jsx)(
                              t,
                              {
                                  className: m.__invalid_blocked,
                                  compact: s,
                                  channel: r,
                                  message: e.content,
                                  groupId: e.groupId,
                                  flashKey: e.flashKey,
                                  isLastItem: !1,
                                  renderContentOnly: !1
                              },
                              e.content.id
                          );
                      }
                  })
                : null
        ]
    });
});
