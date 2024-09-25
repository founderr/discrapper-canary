n.d(t, {
    Z: function () {
        return g;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(239091),
    u = n(901461),
    c = n(592125),
    d = n(709054),
    _ = n(723774),
    E = n(144140),
    f = n(91159),
    h = n(576799),
    p = n(488131),
    m = n(981631),
    I = n(689938),
    T = n(119487);
function g(e) {
    let { message: t, compact: n } = e,
        i = (0, o.e7)([c.Z], () => c.Z.getChannel(d.default.castMessageIdAsChannelId(t.id)));
    return null == i
        ? null
        : (0, r.jsx)(S, {
              channel: i,
              compact: n,
              isSystemMessage: (0, u.Z)(t)
          });
}
function S(e) {
    let { channel: t, compact: i, isSystemMessage: u } = e;
    function c(e) {
        e.stopPropagation(), (0, p.ok)(t, e.shiftKey);
    }
    function d(e) {
        e.stopPropagation();
        let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
            r = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
        (e.which === m.yXg.SPACE || e.which === m.yXg.ENTER) && (e.preventDefault(), (n || r) && (0, p.ok)(t, r));
    }
    function f(e) {
        (0, l.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e('39285'), n.e('40157')]).then(n.bind(n, 422200));
            return (n) =>
                (0, r.jsx)(e, {
                    channel: t,
                    ...n
                });
        });
    }
    let h = (0, o.e7)([E.Z], () => E.Z.getCount(t.id)),
        g = A(t),
        S = null != h && h > 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: a()(T.spine, {
                    [T.cozy]: !i,
                    [T.systemMessageSpine]: u
                })
            }),
            (0, r.jsx)(s.Clickable, {
                onClick: c,
                onKeyDown: d,
                onContextMenu: f,
                'aria-roledescription': I.Z.Messages.THREAD_MESSAGE_ROLE_DESCRIPTION,
                className: a()(T.container, { [T.systemMessageContainer]: u }),
                children: (0, r.jsxs)(s.BlockInteractions, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: T.topLine,
                            children: [
                                (0, r.jsx)(s.HiddenVisually, { children: I.Z.Messages.THREAD }),
                                (0, r.jsx)('span', {
                                    className: T.name,
                                    children: t.name
                                }),
                                (0, r.jsx)('span', {
                                    className: T.cta,
                                    'aria-hidden': !S,
                                    children: (0, _.WE)(h, t.id)
                                })
                            ]
                        }),
                        (0, r.jsx)('span', {
                            'aria-hidden': !0,
                            className: a()(T.bottomLine),
                            children: g
                        })
                    ]
                })
            })
        ]
    });
}
function A(e) {
    var t;
    let n = (0, o.e7)([E.Z], () => E.Z.getMostRecentMessage(e.id)),
        i = (0, o.e7)([E.Z], () => E.Z.getCount(e.id)),
        a = (0, f.Ok)(e);
    return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived)
        ? I.Z.Messages.NO_RECENT_THREAD_MESSAGES
        : null == i || 0 === i
          ? I.Z.Messages.NO_THREAD_MESSAGES
          : null == n
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)('span', { children: I.Z.Messages.NO_RECENT_THREAD_MESSAGES }),
                      (0, r.jsx)('span', {
                          className: T.timestamp,
                          children: (0, f.Ye)(a)
                      })
                  ]
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.Z, {
                          message: n,
                          channel: e
                      }),
                      (0, r.jsx)('span', {
                          className: T.timestamp,
                          children: (0, f.Ye)(a)
                      })
                  ]
              });
}
