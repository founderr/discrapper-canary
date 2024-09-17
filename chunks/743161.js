s.r(o);
var t = s(735250),
    n = s(470079),
    a = s(442837),
    l = s(481060),
    r = s(541099),
    c = s(827498),
    i = s(421591),
    u = s(314734),
    d = s(689938),
    h = s(574455);
o.default = n.memo(function (e) {
    let { channel: o, ...s } = e,
        p = (0, a.e7)([r.Z], () => r.Z.shouldShowModal());
    return (
        n.useEffect(() => {
            !p && (0, l.closeModalInAllContexts)(u.e9);
        }),
        (0, t.jsx)('span', {
            style: u.u$,
            children: (0, t.jsx)(l.ModalRoot, {
                className: h.root,
                'aria-label': d.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
                ...s,
                children: (0, t.jsx)(i.Z, {
                    channel: o,
                    entrypoint: c._b.VOICE
                })
            })
        })
    );
});
