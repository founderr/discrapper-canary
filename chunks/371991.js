n.d(t, {
    tS: function () {
        return I;
    },
    x3: function () {
        return T;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(846519),
    c = n(481060),
    d = n(607070),
    _ = n(706454),
    E = n(70956),
    f = n(506071),
    h = n(561308),
    p = n(910136);
let m = (e) => {
    let { entry: t, textColor: n, hovered: r = !1, bold: a = !1, scaleFontToUserSetting: o = !1 } = e,
        s = (0, h.kr)(t),
        u = (0, l.e7)([_.default], () => _.default.locale);
    return s
        ? (0, i.jsx)(T, {
              entry: t,
              textColor: n,
              hovered: r,
              bold: a,
              scaleFontToUserSetting: o
          })
        : (0, i.jsx)(c.Text, {
              variant: 'text-xs/normal',
              color: n,
              lineClamp: 1,
              scaleFontToUserSetting: o,
              children: (0, h.GL)(t, u)
          });
};
function I(e) {
    let [t, n] = a.useState(Date.now()),
        r = (0, f.n)(),
        i = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
    return (
        a.useEffect(() => {
            let t = new u.Xp();
            return (
                t.start(E.Z.Millis.SECOND, () => {
                    n(Date.now());
                }),
                (!r || (i && !e)) && t.stop(),
                () => t.stop()
            );
        }, [r, i, e]),
        t
    );
}
let T = (e) => {
    let { entry: t, inline: n = !1, textColor: r, hovered: o = !1, bold: l = !1, scaleFontToUserSetting: u = !1 } = e,
        d = I(o),
        _ = a.useMemo(() => (0, h.T_)(t, d), [t, d]),
        E = a.useRef(_);
    return (
        a.useEffect(() => {
            E.current = _;
        }, [t]),
        (0, i.jsx)(c.Text, {
            className: s()(p.timestamp, {
                [p.inlineTimestamp]: n,
                [p.bold]: l
            }),
            variant: 'text-xs/medium',
            tabularNumbers: !0,
            color: r,
            scaleFontToUserSetting: u,
            'aria-label': E.current,
            children: _
        })
    );
};
t.ZP = m;
