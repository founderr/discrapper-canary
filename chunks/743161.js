n.r(e);
var a = n(200651),
    o = n(192379),
    r = n(442837),
    c = n(481060),
    i = n(541099),
    u = n(827498),
    l = n(421591),
    s = n(314734),
    E = n(689938),
    d = n(574455);
e.default = o.memo(function (t) {
    let { channel: e, ...n } = t,
        C = (0, r.e7)([i.Z], () => i.Z.shouldShowModal());
    return (
        o.useEffect(() => {
            !C && (0, c.closeModalInAllContexts)(s.e9);
        }),
        (0, a.jsx)('span', {
            style: s.u$,
            children: (0, a.jsx)(c.ModalRoot, {
                className: d.root,
                'aria-label': E.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
                ...n,
                children: (0, a.jsx)(l.Z, {
                    channel: e,
                    entrypoint: u._b.VOICE
                })
            })
        })
    );
});
