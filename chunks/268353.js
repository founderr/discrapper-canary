var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(928518),
    o = n(451478),
    l = n(228488),
    u = n(871499),
    c = n(388032);
t.Z = i.ZP.connectStores([o.Z, s.Z], (e) => {
    let { node: t, guestWindow: n } = e;
    return { enabled: (0, l.rB)(t, null == n ? void 0 : n.document) };
})(function (e) {
    let { enabled: t, ...n } = e,
        i = t ? c.intl.string(c.t.Z7MyND) : c.intl.string(c.t.OIDkcn),
        s = t ? a.FullscreenExitIcon : a.FullscreenEnterIcon;
    return (0, r.jsx)(u.Z, {
        label: i,
        iconComponent: s,
        ...n
    });
});
