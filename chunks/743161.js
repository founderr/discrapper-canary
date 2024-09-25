o.r(t);
var s = o(735250),
    r = o(470079),
    n = o(442837),
    a = o(481060),
    l = o(541099),
    c = o(827498),
    d = o(421591),
    p = o(314734),
    E = o(689938),
    h = o(574455);
t.default = r.memo(function (e) {
    let { channel: t, ...o } = e,
        i = (0, n.e7)([l.Z], () => l.Z.shouldShowModal());
    return (
        r.useEffect(() => {
            !i && (0, a.closeModalInAllContexts)(p.e9);
        }),
        (0, s.jsx)('span', {
            style: p.u$,
            children: (0, s.jsx)(a.ModalRoot, {
                className: h.root,
                'aria-label': E.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
                ...o,
                children: (0, s.jsx)(d.Z, {
                    channel: t,
                    entrypoint: c._b.VOICE
                })
            })
        })
    );
});
