t.d(s, {
    Z: function () {
        return N;
    }
});
var n = t(735250);
t(470079);
var a = t(442837),
    i = t(481060),
    r = t(230711),
    o = t(574755),
    l = t(663389),
    c = t(309739),
    d = t(293389),
    u = t(327885),
    _ = t(326528),
    E = t(332325),
    T = t(981631),
    I = t(689938),
    S = t(672280);
function N() {
    let e = (0, _.b)(),
        s = (0, a.e7)([l.Z], () => l.Z.getSubsection()),
        t = null != s && e.some((e) => e.id === s) ? s : e[0].id;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.Heading, {
                className: S.heading,
                variant: 'heading-xl/semibold',
                children: I.Z.Messages.GAMES
            }),
            (0, n.jsx)(i.TabBar, {
                className: S.tabBar,
                selectedItem: t,
                onItemSelect: (e) => {
                    r.Z.setSection(T.oAB.GAMES, e);
                },
                orientation: 'horizontal',
                type: 'top',
                look: 'brand',
                children: e.map((e) =>
                    (0, n.jsxs)(
                        i.TabBar.Item,
                        {
                            className: S.tab,
                            id: e.id,
                            'aria-label': e.title,
                            children: [
                                (0, n.jsx)(e.icon, {
                                    className: S.tabIcon,
                                    color: 'currentColor'
                                }),
                                (0, n.jsx)('div', {
                                    className: S.iconTitle,
                                    children: e.title
                                })
                            ]
                        },
                        e.id
                    )
                )
            }),
            (() => {
                switch (t) {
                    case E.Z.CLIPS:
                        return (0, n.jsx)(o.Z, {
                            className: S.body,
                            showHeader: !1
                        });
                    case E.Z.OVERLAY:
                        return (0, n.jsx)(u.Z, {
                            className: S.body,
                            showHeader: !1
                        });
                    case E.Z.ACTIVITY_PRIVACY:
                        return (0, n.jsx)(c.Z, {
                            className: S.body,
                            showHeader: !1
                        });
                    case E.Z.MY_GAMES:
                    default:
                        return (0, n.jsx)(d.Z, {
                            className: S.body,
                            showHeader: !1
                        });
                }
            })()
        ]
    });
}
