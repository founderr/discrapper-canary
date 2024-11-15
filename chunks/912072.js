n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    c = n(481060),
    s = n(98357),
    d = n(432877),
    u = n(575731),
    h = n(986310);
function m(e) {
    let { devSettingsCategory: t } = e,
        n = (0, o.e7)([d.ZP], () => d.ZP.allByCategory(t), [t], o.pF),
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
                            className: u.switch,
                            children: a
                        },
                        t
                    );
                }),
            [n]
        );
    return (0, r.jsx)('div', {
        className: i()(h.panel, u.panel),
        children: l
    });
}
