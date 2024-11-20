e.r(t);
var o = e(200651),
    s = e(192379),
    l = e(442837),
    u = e(481060),
    c = e(541099),
    r = e(827498),
    a = e(421591),
    i = e(314734),
    d = e(388032),
    h = e(574455);
t.default = s.memo(function (n) {
    let { channel: t, ...e } = n,
        f = (0, l.e7)([c.Z], () => c.Z.shouldShowModal());
    return (
        s.useEffect(() => {
            !f && (0, u.closeModalInAllContexts)(i.e9);
        }),
        (0, o.jsx)('span', {
            style: i.u$,
            children: (0, o.jsx)(u.ModalRoot, {
                className: h.root,
                'aria-label': d.intl.string(d.t.shUONj),
                ...e,
                children: (0, o.jsx)(a.Z, {
                    channel: t,
                    entrypoint: r._b.VOICE
                })
            })
        })
    );
});
