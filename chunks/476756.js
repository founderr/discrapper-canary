t.d(s, {
    Z: function () {
        return E;
    }
});
var n = t(200651);
t(192379);
var a = t(512722),
    i = t.n(a),
    r = t(442837),
    o = t(481060),
    l = t(716364),
    c = t(474873),
    d = t(197344),
    _ = t(871465),
    u = t(689938);
function E() {
    let e = (0, r.e7)([c.Z], () => c.Z.getSoundpack()),
        s = d.Z.useHolidaySoundpack();
    i()(null != s, 'should not render this without a holiday soundpack');
    let t = [
        {
            value: _.YC.CLASSIC,
            label: u.Z.Messages.SOUNDPACK_DEFAULT_LABEL
        },
        {
            value: _.YC.HALLOWEEN,
            label: u.Z.Messages.SOUNDPACK_HALLOWEEN_LABEL
        }
    ];
    return (0, n.jsx)(o.SingleSelect, {
        onChange: l.c,
        value: e,
        options: t,
        maxVisibleItems: t.length
    });
}
