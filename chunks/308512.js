t.d(n, {
    Z: function () {
        return u;
    }
});
var r = t(200651);
t(192379);
var o = t(442837),
    i = t(481060),
    a = t(223245),
    l = t(246946),
    c = t(388032);
function u() {
    let e = (0, o.e7)([l.Z], () => l.Z.enabled, []);
    return (0, r.jsx)(i.MenuCheckboxItem, {
        id: 'streamer-mode-toggle',
        label: c.intl.string(c.t.p9ZAJS),
        action: () => {
            a.Z.setEnabled(!e);
        },
        checked: e
    });
}
