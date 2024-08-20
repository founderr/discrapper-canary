n.r(t);
var r = n(735250),
    o = n(470079),
    a = n(442837),
    c = n(481060),
    i = n(541099),
    l = n(827498),
    u = n(421591),
    s = n(314734),
    E = n(689938),
    d = n(551397);
t.default = o.memo(function (e) {
    let { channel: t, ...n } = e,
        _ = (0, a.e7)([i.Z], () => i.Z.shouldShowModal());
    return (
        o.useEffect(() => {
            !_ && (0, c.closeModal)(s.e9);
        }),
        (0, r.jsx)('span', {
            style: s.u$,
            children: (0, r.jsx)(c.ModalRoot, {
                className: d.root,
                'aria-label': E.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
                ...n,
                children: (0, r.jsx)(u.Z, {
                    channel: t,
                    entrypoint: l._b.VOICE
                })
            })
        })
    );
});
