n.d(t, {
    b: function () {
        return _;
    },
    t: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(44315),
    o = n(377171),
    s = n(981631),
    l = n(689938),
    u = n(405013);
function c(e) {
    let { label: t, backgroundColor: n = o.Z.BUTTON_SECONDARY_BACKGROUND, icon: a, iconColor: s } = e;
    return (0, r.jsxs)('div', {
        className: u.badge,
        style: { backgroundColor: n },
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                className: u.__invalid_badgeText,
                children: t
            }),
            (0, r.jsx)(a, {
                className: u.badgeIcon,
                color: null != s ? s : 'currentColor',
                'aria-hidden': !0
            })
        ]
    });
}
function d() {
    return (0, r.jsx)(c, {
        label: l.Z.Messages.GUILD_PRODUCT_STATUS_BADGE_PUBLISHED,
        backgroundColor: '#207B8D',
        icon: i.SparklesIcon
    });
}
function _() {
    return (0, r.jsx)(c, {
        label: l.Z.Messages.GUILD_PRODUCT_STATUS_BADGE_DRAFT,
        icon: i.PencilIcon,
        iconColor: (0, a.Lq)(s.Ilk.PRIMARY_330)
    });
}
