t.r(e);
var r = t(735250),
    i = t(470079),
    o = t(442837),
    u = t(481060),
    c = t(541099),
    a = t(827498),
    s = t(421591),
    l = t(314734),
    E = t(689938),
    _ = t(551397);
e.default = i.memo(function (n) {
    let { channel: e, ...t } = n,
        d = (0, o.e7)([c.Z], () => c.Z.shouldShowModal());
    return (
        i.useEffect(() => {
            !d && (0, u.closeModal)(l.e9);
        }),
        (0, r.jsx)('span', {
            style: l.u$,
            children: (0, r.jsx)(u.ModalRoot, {
                className: _.root,
                'aria-label': E.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
                ...t,
                children: (0, r.jsx)(s.Z, {
                    channel: e,
                    entrypoint: a._b.VOICE
                })
            })
        })
    );
});
