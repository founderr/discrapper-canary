n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    c = n(481060),
    s = n(98357),
    u = n(432877),
    d = n(891362),
    h = n(535271);
function m(e) {
    let { devSettingsCategory: t } = e,
        n = (0, o.e7)([u.ZP], () => u.ZP.allByCategory(t), [t], o.pF),
        l = a.useMemo(
            () =>
                n.map((e) => {
                    let [t, n, { label: a }] = e;
                    return (0, r.jsx)(
                        c.FormSwitch,
                        {
                            value: n,
                            onChange: (e) => (0, s.Z)(t, e),
                            hideBorder: !0,
                            className: d.switch,
                            children: a
                        },
                        t
                    );
                }),
            [n]
        );
    return (0, r.jsx)('div', {
        className: i()(h.panel, d.panel),
        children: l
    });
}
