n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var l = n(399606),
    r = n(481060),
    a = n(125268),
    s = n(673125),
    o = n(292793),
    c = n(871499),
    u = n(304388),
    d = n(388032);
function h() {
    let e = (0, l.e7)([s.Z], () => s.Z.getDrawMode()),
        t = (null == e ? void 0 : e.type) === o.W.LINE,
        n = () => {
            t ? (0, a.Bo)(null) : (0, a.Bo)({ type: o.W.LINE });
        };
    return (0, i.jsx)(u.Z, {
        renderPopout: () => null,
        children: (e) => {
            let { ...l } = e;
            return (0, i.jsx)(c.Z, {
                ...l,
                label: d.intl.string(d.t.ZQCf9f),
                isActive: t,
                iconComponent: r.PencilIcon,
                onClick: n
            });
        }
    });
}
