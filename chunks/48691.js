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
    o = n(44315),
    u = n(377171),
    l = n(981631),
    s = n(689938),
    a = n(405013);
function c(e) {
    let { label: t, backgroundColor: n = u.Z.BUTTON_SECONDARY_BACKGROUND, icon: o, iconColor: l } = e;
    return (0, r.jsxs)('div', {
        className: a.badge,
        style: { backgroundColor: n },
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                className: a.__invalid_badgeText,
                children: t
            }),
            (0, r.jsx)(o, {
                className: a.badgeIcon,
                color: null != l ? l : 'currentColor',
                'aria-hidden': !0
            })
        ]
    });
}
function d() {
    return (0, r.jsx)(c, {
        label: s.Z.Messages.GUILD_PRODUCT_STATUS_BADGE_PUBLISHED,
        backgroundColor: '#207B8D',
        icon: i.SparklesIcon
    });
}
function _() {
    return (0, r.jsx)(c, {
        label: s.Z.Messages.GUILD_PRODUCT_STATUS_BADGE_DRAFT,
        icon: i.PencilIcon,
        iconColor: (0, o.Lq)(l.Ilk.PRIMARY_330)
    });
}
