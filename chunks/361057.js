var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(871499),
    s = n(447564),
    o = n(304388);
let c = l.forwardRef((e, t) => {
    let { channel: n, glow: l } = e;
    return (0, i.jsx)(o.Z, {
        renderPopout: () => null,
        children: (e) => {
            let { ...o } = e,
                { onClick: c, ...d } = o;
            return (0, i.jsx)(a.Z, {
                buttonRef: t,
                iconComponent: r.PotionIcon,
                iconColor: l ? '#eb90f1' : void 0,
                onClick: (e) => {
                    (0, s.openHDPotionModal)(n, 'ActionBar'), e.stopPropagation(), c(e);
                },
                ...d
            });
        }
    });
});
(c.displayName = 'ActionBarHDStreamingConsumableButton'), (t.Z = c);
