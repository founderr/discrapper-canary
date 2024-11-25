n.r(t),
    n.d(t, {
        default: function () {
            return A;
        }
    });
var i = n(200651);
n(192379);
var E = n(442837),
    r = n(481060),
    _ = n(703656),
    I = n(314897),
    o = n(518560),
    a = n(800530),
    S = n(981631),
    N = n(388032),
    c = n(33869);
function u() {
    return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.DANGER,
        className: c.nagbar,
        children: [
            (0, i.jsx)(r.Text, {
                tag: 'span',
                color: 'always-white',
                variant: 'text-md/normal',
                children: N.intl.string(N.t['MG+Bzc'])
            }),
            (0, i.jsx)(r.NoticeButtonAnchor, {
                href: a.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    color: 'always-white',
                    children: N.intl.string(N.t['9JceHB'])
                })
            })
        ]
    });
}
function s() {
    return (0, i.jsx)('div', {
        className: c.pageContainer,
        children: (0, i.jsx)(o.Z, {})
    });
}
function A() {
    return (
        null == (0, E.e7)([I.default], () => I.default.getSuspendedUserToken()) && (0, _.uL)(S.Z5c.LOGIN),
        (0, i.jsxs)('div', {
            className: c.container,
            children: [(0, i.jsx)(u, {}), (0, i.jsx)(s, {})]
        })
    );
}
