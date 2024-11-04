n.r(e);
var o = n(200651),
    a = n(192379),
    r = n(442837),
    c = n(481060),
    i = n(541099),
    u = n(827498),
    l = n(421591),
    s = n(314734),
    E = n(388032),
    d = n(574455);
e.default = a.memo(function (t) {
    let { channel: e, ...n } = t,
        f = (0, r.e7)([i.Z], () => i.Z.shouldShowModal());
    return (
        a.useEffect(() => {
            !f && (0, c.closeModalInAllContexts)(s.e9);
        }),
        (0, o.jsx)('span', {
            style: s.u$,
            children: (0, o.jsx)(c.ModalRoot, {
                className: d.root,
                'aria-label': E.intl.string(E.t.shUONj),
                ...n,
                children: (0, o.jsx)(l.Z, {
                    channel: e,
                    entrypoint: u._b.VOICE
                })
            })
        })
    );
});
