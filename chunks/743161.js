n.r(e);
var o = n(200651),
    a = n(192379),
    r = n(442837),
    i = n(481060),
    c = n(541099),
    l = n(827498),
    u = n(421591),
    s = n(314734),
    E = n(388032),
    d = n(574455);
e.default = a.memo(function (t) {
    let { channel: e, ...n } = t,
        f = (0, r.e7)([c.Z], () => c.Z.shouldShowModal());
    return (
        a.useEffect(() => {
            !f && (0, i.closeModalInAllContexts)(s.e9);
        }),
        (0, o.jsx)('span', {
            style: s.u$,
            children: (0, o.jsx)(i.ModalRoot, {
                className: d.root,
                'aria-label': E.intl.string(E.t.shUONj),
                ...n,
                children: (0, o.jsx)(u.Z, {
                    channel: e,
                    entrypoint: l._b.VOICE
                })
            })
        })
    );
});
