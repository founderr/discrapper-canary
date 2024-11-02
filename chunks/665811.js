n.d(t, {
    U: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    l = n(542094),
    r = n(388032),
    s = n(87694);
function o(e) {
    let { action: t, onClick: n } = e,
        o = t === l.JS.JOIN ? r.intl.string(r.t['4i2vj4']) : r.intl.string(r.t['R/FK4O']),
        c = t === l.JS.JOIN ? a.Button.Colors.PRIMARY : a.Button.Colors.RED;
    return (0, i.jsx)('div', {
        className: s.activityOverlay,
        children: (0, i.jsx)(a.Button, {
            className: s.actionButton,
            onClick: n,
            size: a.Button.Sizes.MEDIUM,
            color: c,
            children: o
        })
    });
}
