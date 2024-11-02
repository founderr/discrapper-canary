t.d(n, {
    I: function () {
        return d;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(481060),
    a = t(296023),
    o = t(768581),
    s = t(585835);
function d(e) {
    var n;
    let { channel: d, application: c, showApplicationImage: u, ...m } = e,
        h = (0, a.w)(d),
        p = l.useCallback(
            () =>
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await t.e('14089').then(t.bind(t, 262528));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: d,
                            application: c
                        });
                }),
            [c, d]
        ),
        g = u ? (null !== (n = c.getIconURL(48)) && void 0 !== n ? n : o.pK['0']) : void 0;
    return (0, i.jsx)(s.Z, {
        imageSrc: g,
        onButtonClick: p,
        details: null != h ? [{ text: h }] : void 0,
        ...m
    });
}
