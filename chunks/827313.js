n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(531301),
    s = n(475413),
    o = n(228168),
    l = n(388032),
    u = n(745560);
function c(e) {
    let { userId: t, isHovering: n, onOpenProfile: c } = e,
        { note: d } = (0, a.Z)(t),
        f = null != d && '' !== d;
    return (0, r.jsx)(s.y, {
        action: 'PRESS_ADD_NOTE',
        icon: f ? i.PaperIcon : i.PaperPlusIcon,
        tooltipText: f ? d : l.intl.string(l.t.Dglxra),
        tooltipClassName: f ? u.tooltip : void 0,
        isHovering: n,
        onClick: () => (null == c ? void 0 : c({ subsection: o.Tb.NOTE }))
    });
}
