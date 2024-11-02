e.d(t, {
    Z: function () {
        return s;
    }
});
var i = e(200651);
e(192379);
var r = e(442837),
    l = e(481060),
    a = e(211739),
    u = e(680089),
    d = e(388032);
function s(n) {
    let t = (0, r.e7)([u.Z], () => u.Z.isCollapsed(n.id), [n.id]);
    return (0, i.jsx)(l.MenuCheckboxItem, {
        id: 'collapse-category',
        label: d.intl.string(d.t.SvVRsr),
        action: () => (t ? (0, a.mJ)(n.id) : (0, a.c4)(n.id)),
        checked: t
    });
}
