n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(916752),
    s = n(665162);
function o(e) {
    let { node: t } = e,
        n = (0, a.Z)(t);
    return (0, r.jsx)(i.Tooltip, {
        text: t.full,
        tooltipClassName: s.timestampTooltip,
        children: (e) =>
            (0, r.jsx)('span', {
                ...e,
                className: s.timestamp,
                children: n
            })
    });
}
