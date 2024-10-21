t.d(s, {
    Z: function () {
        return o;
    }
});
var n = t(200651);
t(192379);
var a = t(481060),
    i = t(689938),
    r = t(453981);
function o(e) {
    let { count: s } = e;
    return (0, n.jsxs)('div', {
        className: r.countContainer,
        children: [
            (0, n.jsx)('div', { className: r.dot }),
            (0, n.jsx)(a.Text, {
                variant: 'text-xs/medium',
                color: 'header-secondary',
                children: i.Z.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({ count: s })
            })
        ]
    });
}
