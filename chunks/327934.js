t.d(n, {
    I: function () {
        return d;
    }
});
var i = t(200651),
    a = t(192379),
    l = t(481060),
    s = t(296023),
    o = t(768581),
    r = t(585835);
function d(e) {
    var n;
    let { channel: d, application: c, showApplicationImage: u, ...I } = e,
        m = (0, s.w)(d),
        _ = a.useCallback(
            () =>
                (0, l.openModalLazy)(async () => {
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
        N = u ? (null !== (n = c.getIconURL(48)) && void 0 !== n ? n : o.pK['0']) : void 0;
    return (0, i.jsx)(r.Z, {
        imageSrc: N,
        onButtonClick: _,
        details: null != m ? [{ text: m }] : void 0,
        ...I
    });
}
