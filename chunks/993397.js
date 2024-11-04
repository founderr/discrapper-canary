n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(481060),
    o = n(492593),
    c = n(534469),
    u = n(511010),
    d = n(834129),
    h = n(981631),
    m = n(388032),
    p = n(590008),
    f = n(916315);
function g(e) {
    let { expanded: t, onClick: n, count: l, compact: r, collapsedReason: s } = e;
    return (0, i.jsx)(o.Z, {
        compact: r,
        role: 'group',
        childrenMessageContent: (0, i.jsx)(d.Z, {
            compact: r,
            className: p.blockedSystemMessage,
            iconNode: (0, i.jsx)(a.XSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: p.blockedIcon
            }),
            children: (0, i.jsxs)('div', {
                className: p.blockedMessageText,
                children: [
                    m.intl.format(s, { count: l }),
                    ' \u2014',
                    ' ',
                    (0, i.jsx)(a.Clickable, {
                        tag: 'span',
                        onClick: n,
                        className: p.blockedAction,
                        children: t ? m.intl.formatToPlainString(m.t['5XFZjY'], { count: l }) : m.intl.formatToPlainString(m.t.wUJXIi, { count: l })
                    })
                ]
            })
        })
    });
}
t.Z = l.memo(function (e) {
    var t;
    let { messages: n, channel: r, compact: a = !1, unreadId: o, collapsedReason: d } = e,
        { hasJumpTarget: m = !1 } = n,
        [C, x] = l.useState(m),
        v = l.useCallback(() => x((e) => !e), []),
        _ = n.hasUnread ? n.content.length - 1 : n.content.length;
    return (0, i.jsxs)('div', {
        className: s()({
            [f.groupStart]: !0,
            [p.expanded]: C
        }),
        children: [
            n.hasUnread && (!C || (null === (t = n.content[0]) || void 0 === t ? void 0 : t.type) === h.ys_.DIVIDER)
                ? (0, i.jsx)(
                      u.Z,
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
                    compact: a,
                    expanded: C,
                    onClick: v,
                    collapsedReason: d
                },
                'collapsed-message-item'
            ),
            C
                ? n.content.map((e, t) => {
                      if (e.type === h.ys_.DIVIDER && t > 0) {
                          var l, s;
                          let e = null !== (s = null === (l = n.content[t + 1]) || void 0 === l ? void 0 : l.isGroupStart) && void 0 !== s && s;
                          return (0, i.jsx)(
                              u.Z,
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
                                  className: p.__invalid_blocked,
                                  compact: a,
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
