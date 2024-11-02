e.r(t);
var r = e(200651);
e(192379);
var i = e(481060),
    o = e(239091),
    u = e(883385),
    c = e(108843),
    s = e(100527),
    a = e(299206),
    l = e(981631),
    d = e(388032);
t.default = (0, c.Z)(
    (0, u.Z)(
        function (n) {
            let { userId: t, onSelect: e } = n,
                u = (0, a.Z)({
                    id: t,
                    label: d.intl.string(d.t['/AXYnJ']),
                    showWithoutDeveloperMode: !0
                });
            return (0, r.jsx)(i.Menu, {
                navId: 'unknown-user-context',
                onClose: o.Zy,
                'aria-label': d.intl.string(d.t.liqwPD),
                onSelect: e,
                children: (0, r.jsx)(i.MenuGroup, { children: u })
            });
        },
        { object: l.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.UNKNOWN_USER_MENU]
);
