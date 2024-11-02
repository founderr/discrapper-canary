e.d(t, {
    Z: function () {
        return o;
    }
});
var l = e(200651);
e(192379);
var i = e(481060),
    r = e(572004),
    u = e(592126),
    d = e(981631),
    a = e(388032);
function o(n, t, e) {
    let o = null != e,
        { isMember: c } = (0, u.Z)(t, n);
    if (!c) return null;
    function s() {
        let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (0, r.JG)(
            ''
                .concat(location.protocol, '//')
                .concat(location.host)
                .concat(d.Z5c.GUILD_EVENT_DETAILS(t, n, l ? null : e))
        ),
            (0, i.showToast)((0, i.createToast)(a.intl.string(a.t['L/PwZW']), i.ToastType.SUCCESS));
    }
    return (0, l.jsx)(i.MenuItem, {
        id: a.intl.string(a.t['9o+VKy']),
        label: a.intl.string(a.t['9o+VKy']),
        action: o ? void 0 : () => s(!0),
        children:
            o &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i.MenuItem, {
                        id: a.intl.string(a.t.QLtDqK),
                        label: a.intl.string(a.t.QLtDqK),
                        action: () => s(!1)
                    }),
                    (0, l.jsx)(i.MenuItem, {
                        id: a.intl.string(a.t.AYnhBw),
                        label: a.intl.string(a.t.AYnhBw),
                        action: () => s(!0)
                    })
                ]
            })
    });
}
