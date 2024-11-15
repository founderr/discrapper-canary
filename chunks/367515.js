n.d(t, {
    B: function () {
        return h;
    }
});
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    l = n(399606),
    o = n(481060),
    c = n(594174),
    d = n(880257),
    u = n(631885),
    g = n(933970),
    m = n(340453),
    f = n(292352),
    _ = n(388032),
    p = n(791937);
function h(e) {
    let { user: t } = e,
        a = (0, d.Z)(),
        h = (0, u.VM)(),
        E = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        b = r.useCallback(() => {
            s()(void 0 !== E, 'User must be logged in to accept a link request'),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('59716').then(n.bind(n, 275370));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            currentUser: E,
                            otherUser: t
                        });
                });
        }, [E, t]),
        x = r.useCallback(() => {
            s()(void 0 !== E, 'User must be logged in to decline a link request'),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('958').then(n.bind(n, 4526));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            currentUser: E,
                            otherUser: t
                        });
                });
        }, [E, t]),
        C = r.useCallback(() => {
            s()(void 0 !== E, 'User must be logged in to decline a link request'),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('69015').then(n.bind(n, 247265));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            currentUser: E,
                            otherUser: t
                        });
                });
        }, [E, t]);
    return (0, i.jsxs)('div', {
        className: p.container,
        children: [
            (0, i.jsx)('div', {
                className: p.details,
                children: (0, i.jsx)(m.Z, {
                    otherUser: t,
                    status: f.ne.PENDING
                })
            }),
            (0, i.jsx)('div', {
                className: p.actions,
                children: a
                    ? (0, i.jsx)(g.Z, {
                          icon: o.XSmallIcon,
                          className: p.__invalid_actionDeny,
                          tooltip: _.intl.string(_.t.e5iHmZ),
                          onClick: C
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              h
                                  ? null
                                  : (0, i.jsx)(g.Z, {
                                        icon: o.CheckmarkLargeIcon,
                                        className: p.__invalid_actionAccept,
                                        tooltip: _.intl.string(_.t.krWQZG),
                                        onClick: b
                                    }),
                              (0, i.jsx)(g.Z, {
                                  icon: o.XSmallIcon,
                                  className: p.__invalid_actionDeny,
                                  tooltip: _.intl.string(_.t.bBDeND),
                                  onClick: x
                              })
                          ]
                      })
            })
        ]
    });
}
