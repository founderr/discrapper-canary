n.d(t, {
    tS: function () {
        return m;
    },
    x3: function () {
        return g;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(846519),
    u = n(481060),
    c = n(607070),
    d = n(706454),
    f = n(70956),
    _ = n(506071),
    p = n(561308),
    h = n(910136);
function m(e) {
    let [t, n] = i.useState(Date.now()),
        r = (0, _.n)(),
        a = (0, o.e7)([c.Z], () => c.Z.useReducedMotion);
    return (
        i.useEffect(() => {
            let t = new l.Xp();
            return (
                t.start(f.Z.Millis.SECOND, () => {
                    n(Date.now());
                }),
                (!r || (a && !e)) && t.stop(),
                () => t.stop()
            );
        }, [r, a, e]),
        t
    );
}
let g = (e) => {
    let { entry: t, inline: n = !1, textColor: a, hovered: o = !1, bold: l = !1, scaleFontToUserSetting: c = !1 } = e,
        d = m(o),
        f = i.useMemo(() => (0, p.T_)(t, d), [t, d]),
        _ = i.useRef(f);
    return (
        i.useEffect(() => {
            _.current = f;
        }, [t]),
        (0, r.jsx)(u.Text, {
            className: s()(h.timestamp, {
                [h.inlineTimestamp]: n,
                [h.bold]: l
            }),
            variant: 'text-xs/medium',
            tabularNumbers: !0,
            color: a,
            scaleFontToUserSetting: c,
            'aria-label': _.current,
            children: f
        })
    );
};
t.ZP = (e) => {
    let { entry: t, textColor: n, hovered: i = !1, bold: a = !1, scaleFontToUserSetting: s = !1 } = e,
        l = (0, p.Jg)(t),
        c = (0, o.e7)([d.default], () => d.default.locale);
    return l
        ? (0, r.jsx)(g, {
              entry: t,
              textColor: n,
              hovered: i,
              bold: a,
              scaleFontToUserSetting: s
          })
        : (0, r.jsx)(u.Text, {
              variant: 'text-xs/normal',
              color: n,
              lineClamp: 1,
              scaleFontToUserSetting: s,
              children: (0, p.GL)(t, c)
          });
};
