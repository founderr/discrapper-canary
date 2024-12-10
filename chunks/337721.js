n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(434404),
    l = n(970731),
    a = n(981631),
    o = n(388032),
    s = n(328835),
    c = n(930128);
function d(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, i.jsx)(l.ZP, {
        header: o.intl.string(o.t.Hgd22t),
        content: o.intl.string(o.t.SorTPD),
        asset: (0, i.jsx)('div', {
            className: s.image,
            children: (0, i.jsx)('img', {
                alt: '',
                src: c
            })
        }),
        buttonCTA: o.intl.string(o.t['9l+df3']),
        onClick: (e) => {
            var n;
            (n = t), r.Z.open(n.id, a.pNK.DISCOVERY_LANDING_PAGE);
        },
        secondaryButtonCTA: o.intl.string(o.t.duVdqq),
        onSecondaryClick: () => {},
        markAsDismissed: n
    });
}
