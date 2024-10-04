t.d(n, {
    Z: function () {
        return u;
    }
});
var o = t(735250);
t(470079);
var r = t(442837),
    a = t(481060),
    i = t(223245),
    l = t(246946),
    c = t(689938);
function u() {
    let e = (0, r.e7)([l.Z], () => l.Z.enabled, []);
    return (0, o.jsx)(a.MenuCheckboxItem, {
        id: 'streamer-mode-toggle',
        label: c.Z.Messages.ENABLE_STREAMER_MODE_LABEL,
        action: () => {
            i.Z.setEnabled(!e);
        },
        checked: e
    });
}
