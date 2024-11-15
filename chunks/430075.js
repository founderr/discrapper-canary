n.r(t),
    n.d(t, {
        default: function () {
            return A;
        }
    });
var i = n(200651);
n(192379);
var r = n(442837),
    E = n(481060),
    _ = n(703656),
    I = n(314897),
    o = n(518560),
    a = n(800530),
    S = n(981631),
    c = n(388032),
    N = n(506486);
function u() {
    return (0, i.jsxs)(E.Notice, {
        color: E.NoticeColors.DANGER,
        className: N.nagbar,
        children: [
            (0, i.jsx)(E.Text, {
                tag: 'span',
                color: 'always-white',
                variant: 'text-md/normal',
                children: c.intl.string(c.t['MG+Bzc'])
            }),
            (0, i.jsx)(E.NoticeButtonAnchor, {
                href: a.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, i.jsx)(E.Text, {
                    variant: 'text-md/normal',
                    color: 'always-white',
                    children: c.intl.string(c.t['9JceHB'])
                })
            })
        ]
    });
}
function s() {
    return (0, i.jsx)('div', {
        className: N.pageContainer,
        children: (0, i.jsx)(o.Z, {})
    });
}
function A() {
    return (
        null == (0, r.e7)([I.default], () => I.default.getSuspendedUserToken()) && (0, _.uL)(S.Z5c.LOGIN),
        (0, i.jsxs)('div', {
            className: N.container,
            children: [(0, i.jsx)(u, {}), (0, i.jsx)(s, {})]
        })
    );
}
