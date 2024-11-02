t.d(e, {
    Z: function () {
        return s;
    }
});
var i = t(200651),
    l = t(192379),
    a = t(481060),
    r = t(493683),
    u = t(699516),
    o = t(594174),
    d = t(933557),
    c = t(388032);
function s(n, e) {
    let s = l.useCallback(() => {
        let l = (0, d.F6)(n, o.default, u.Z),
            s = c.intl.formatToPlainString(c.t.hJ5Ap6, { name: l }),
            f = c.intl.format(c.t.SSIVOj, { name: l });
        n.isManaged() && ((s = c.intl.formatToPlainString(c.t.hVGjER, { name: l })), (f = c.intl.format(c.t.IK1Qvr, { name: l })));
        let h = function (t) {
            let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            r.Z.closePrivateChannel(n.id, e, i);
        };
        (0, a.openModalLazy)(async () => {
            let { default: n } = await t.e('14604').then(t.bind(t, 960670));
            return (e) =>
                (0, i.jsx)(n, {
                    header: s,
                    body: f,
                    onSubmit: h,
                    ...e
                });
        });
    }, [n, e]);
    return (0, i.jsx)(a.MenuItem, {
        id: 'leave-channel',
        label: c.intl.string(c.t['26C4oq']),
        action: s,
        color: 'danger'
    });
}
