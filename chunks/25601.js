n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(831209),
    r = n(481060),
    a = n(184214);
function o(e) {
    let { mentionsCount: t } = e;
    return (0, i.jsx)('div', {
        className: a.mentionsBadge,
        'aria-hidden': !0,
        children: (0, i.jsx)(r.NumberBadge, {
            count: t,
            color: l.Z.STATUS_DANGER
        })
    });
}
