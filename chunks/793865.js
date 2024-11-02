n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(200651);
n(192379);
var i = n(512722),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(410575),
    u = n(594174),
    c = n(907285),
    d = n(737013),
    f = n(981631),
    _ = n(388032);
function h(e) {
    let { onClose: t, onSelect: n } = e,
        i = (0, s.e7)([u.default], () => {
            let e = u.default.getCurrentUser();
            return a()(null != e, 'VideoDeviceMenu: currentUser cannot be undefined'), e;
        }),
        h = (0, c.Z)(),
        p = (0, d.Z)(i.id);
    return (0, r.jsx)(l.Z, {
        object: f.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(o.Menu, {
            onClose: t,
            navId: 'video-device-context',
            'aria-label': _.intl.string(_.t.F122Gx),
            onSelect: n,
            children: [
                (0, r.jsx)(o.MenuGroup, {
                    label: _.intl.string(_.t.F122Gx),
                    children: h
                }),
                (0, r.jsx)(o.MenuGroup, { children: p })
            ]
        })
    });
}
