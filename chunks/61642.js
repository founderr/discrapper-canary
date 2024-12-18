n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var l = n(239091),
    r = n(396828),
    a = n(703656),
    o = n(434479),
    s = n(981631),
    c = n(176505),
    u = n(388032);
function d(e) {
    let { guild: t, selected: d } = e;
    return (0, i.jsx)(o.m, {
        id: 'subscriptions-'.concat(t.id),
        renderIcon: (e) => (0, i.jsx)(r.Z, { className: e }),
        text: u.intl.string(u.t['KzCF//']),
        selected: d,
        onClick: () => {
            (0, a.uL)(s.Z5c.CHANNEL(t.id, c.oC.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: (e) => {
            null != t &&
                (0, l.jW)(e, async () => {
                    let { default: e } = await n.e('28249').then(n.bind(n, 613329));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guild: t
                        });
                });
        }
    });
}
