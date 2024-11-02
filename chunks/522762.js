t.d(n, {
    Z: function () {
        return o;
    }
});
var l = t(200651);
t(192379);
var a = t(442837),
    i = t(481060),
    r = t(5036),
    u = t(9156),
    d = t(388032);
function o(e) {
    let n = (0, a.e7)([u.ZP], () => u.ZP.isGuildCollapsed(e), [e]);
    return (0, l.jsx)(i.MenuCheckboxItem, {
        id: 'hide-muted-channels',
        label: d.intl.string(d.t.UwOLJC),
        action: () => r.Z.toggleCollapseGuild(e),
        checked: n
    });
}
