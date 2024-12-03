n.d(t, {
    O: function () {
        return c;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(864094),
    a = n(411840),
    s = n(871499),
    o = n(388032);
function c(e) {
    let t,
        { hasPermission: n, streamActive: c, isSelfStream: d, centerButton: u, onMouseEnter: h, onMouseLeave: p, premiumGlow: m, buttonRef: f, ...g } = e,
        { mode: C } = (0, a.Z)({ location: 'StreamButton' }),
        x = u ? s.d : s.Z;
    t = c ? (d ? o.intl.string(o.t.S5anIS) : o.intl.string(o.t.q3O3Jy)) : n ? o.intl.string(o.t.fjBNo6) : o.intl.string(o.t.uQn9Bw);
    let { Component: v, events: _, play: I } = (0, r.P)(c ? 'disable' : 'enable');
    return (
        l.useEffect(() => () => I(), [c, I]),
        (0, i.jsx)(x, {
            buttonRef: f,
            label: t,
            disabled: !n,
            iconComponent: v,
            isActive: c,
            color: C === a.B.GroupedButtonsRedMic && c ? 'green' : void 0,
            ignoreColorForCaret: C === a.B.GroupedButtonsRedMic && c,
            onMouseEnter: (e) => {
                null == h || h(e), _.onMouseEnter();
            },
            onMouseLeave: (e) => {
                null == p || p(e), _.onMouseLeave();
            },
            premiumGlow: m,
            ...g
        })
    );
}
