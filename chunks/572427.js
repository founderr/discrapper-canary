t.d(n, {
    Z: function () {
        return E;
    }
});
var l = t(735250);
t(470079);
var i = t(481060),
    u = t(572004),
    s = t(592126),
    a = t(981631),
    r = t(689938);
function E(e, n, t) {
    let E = null != t,
        { isMember: d } = (0, s.Z)(n, e);
    if (!d) return null;
    function o() {
        let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (0, u.JG)(
            ''
                .concat(location.protocol, '//')
                .concat(location.host)
                .concat(a.Z5c.GUILD_EVENT_DETAILS(n, e, l ? null : t))
        ),
            (0, i.showToast)((0, i.createToast)(r.Z.Messages.COPIED_LINK, i.ToastType.SUCCESS));
    }
    return (0, l.jsx)(i.MenuItem, {
        id: r.Z.Messages.COPY_EVENT_LINK,
        label: r.Z.Messages.COPY_EVENT_LINK,
        action: E ? void 0 : () => o(!0),
        children:
            E &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i.MenuItem, {
                        id: r.Z.Messages.COPY_RECURRENCE_LINK,
                        label: r.Z.Messages.COPY_RECURRENCE_LINK,
                        action: () => o(!1)
                    }),
                    (0, l.jsx)(i.MenuItem, {
                        id: r.Z.Messages.COPY_SERIES_LINK,
                        label: r.Z.Messages.COPY_SERIES_LINK,
                        action: () => o(!0)
                    })
                ]
            })
    });
}
