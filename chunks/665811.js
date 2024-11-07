n.d(t, {
    U: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(542094),
    r = n(388032),
    o = n(887477);
function s(e) {
    let { action: t, onClick: n } = e,
        s = t === a.JS.JOIN ? r.intl.string(r.t['4i2vj4']) : r.intl.string(r.t['R/FK4O']),
        c = t === a.JS.JOIN ? l.Button.Colors.PRIMARY : l.Button.Colors.RED;
    return (0, i.jsx)('div', {
        className: o.activityOverlay,
        children: (0, i.jsx)(l.Button, {
            className: o.actionButton,
            onClick: n,
            size: l.Button.Sizes.MEDIUM,
            color: c,
            children: s
        })
    });
}
