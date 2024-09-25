a.r(t),
    a.d(t, {
        default: function () {
            return m;
        }
    });
var n = a(735250);
a(470079);
var r = a(442837),
    i = a(481060),
    o = a(703656),
    s = a(314897),
    c = a(518560),
    f = a(800530),
    u = a(981631),
    _ = a(689938),
    p = a(561306);
function l() {
    return (0, n.jsxs)(i.Notice, {
        color: i.NoticeColors.DANGER,
        className: p.nagbar,
        children: [
            (0, n.jsx)(i.Text, {
                tag: 'span',
                color: 'always-white',
                variant: 'text-md/normal',
                children: _.Z.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR
            }),
            (0, n.jsx)(i.NoticeButtonAnchor, {
                href: f.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, n.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    color: 'always-white',
                    children: _.Z.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA
                })
            })
        ]
    });
}
function d() {
    return (0, n.jsx)('div', {
        className: p.pageContainer,
        children: (0, n.jsx)(c.Z, {})
    });
}
function m() {
    return (
        null == (0, r.e7)([s.default], () => s.default.getSuspendedUserToken()) && (0, o.uL)(u.Z5c.LOGIN),
        (0, n.jsxs)('div', {
            className: p.container,
            children: [(0, n.jsx)(l, {}), (0, n.jsx)(d, {})]
        })
    );
}
