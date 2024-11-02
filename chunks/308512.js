t.d(n, {
    Z: function () {
        return u;
    }
});
var r = t(200651);
t(192379);
var o = t(442837),
    i = t(481060),
    l = t(223245),
    a = t(246946),
    c = t(388032);
function u() {
    let e = (0, o.e7)([a.Z], () => a.Z.enabled, []);
    return (0, r.jsx)(i.MenuCheckboxItem, {
        id: 'streamer-mode-toggle',
        label: c.intl.string(c.t.p9ZAJS),
        action: () => {
            l.Z.setEnabled(!e);
        },
        checked: e
    });
}
