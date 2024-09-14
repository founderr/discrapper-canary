n.r(t),
    n.d(t, {
        default: function () {
            return u;
        }
    });
var E = n(735250);
n(470079);
var _ = n(442837),
    i = n(481060),
    r = n(703656),
    I = n(314897),
    N = n(518560),
    S = n(800530),
    a = n(981631),
    o = n(689938),
    A = n(561306);
function s() {
    return (0, E.jsxs)(i.Notice, {
        color: i.NoticeColors.DANGER,
        className: A.nagbar,
        children: [
            (0, E.jsx)(i.Text, {
                tag: 'span',
                color: 'always-white',
                variant: 'text-md/normal',
                children: o.Z.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR
            }),
            (0, E.jsx)(i.NoticeButtonAnchor, {
                href: S.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                children: (0, E.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    color: 'always-white',
                    children: o.Z.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA
                })
            })
        ]
    });
}
function c() {
    return (0, E.jsx)('div', {
        className: A.pageContainer,
        children: (0, E.jsx)(N.Z, {})
    });
}
function u() {
    return (
        null == (0, _.e7)([I.default], () => I.default.getSuspendedUserToken()) && (0, r.uL)(a.Z5c.LOGIN),
        (0, E.jsxs)('div', {
            className: A.container,
            children: [(0, E.jsx)(s, {}), (0, E.jsx)(c, {})]
        })
    );
}
