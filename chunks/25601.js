n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(831209),
    a = n(481060),
    r = n(494075);
function s(e) {
    let { mentionsCount: t } = e;
    return (0, i.jsx)('div', {
        className: r.mentionsBadge,
        'aria-hidden': !0,
        children: (0, i.jsx)(a.NumberBadge, {
            count: t,
            color: l.Z.STATUS_DANGER
        })
    });
}
