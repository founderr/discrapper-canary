n.d(t, {
    _: function () {
        return l;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(348466);
function l(e) {
    let { rank: t, hideInnerBorder: n = !1 } = e;
    return (0, r.jsx)('div', {
        className: a()(o.rankContainer, {
            [o.goldBorder]: 1 === t,
            [o.silverBorder]: 2 === t,
            [o.bronzeBorder]: 3 === t,
            [o.defaultBorder]: t > 3
        }),
        children: (0, r.jsx)(s.Text, {
            tabularNumbers: !0,
            variant: t <= 3 ? 'text-xs/semibold' : 'text-xs/medium',
            className: a()(o.rank, {
                [o.rankWithBorder]: !n,
                [o.goldText]: 1 === t,
                [o.silverText]: 2 === t,
                [o.bronzeText]: 3 === t,
                [o.rankNoBorder]: n
            }),
            children: t
        })
    });
}
