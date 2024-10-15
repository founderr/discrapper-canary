t.d(n, {
    b: function () {
        return _;
    },
    t: function () {
        return d;
    }
});
var i = t(735250);
t(470079);
var r = t(481060),
    l = t(44315),
    o = t(377171),
    u = t(981631),
    s = t(689938),
    a = t(405013);
function c(e) {
    let { label: n, backgroundColor: t = o.Z.BUTTON_SECONDARY_BACKGROUND, icon: l, iconColor: u } = e;
    return (0, i.jsxs)('div', {
        className: a.badge,
        style: { backgroundColor: t },
        children: [
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                className: a.__invalid_badgeText,
                children: n
            }),
            (0, i.jsx)(l, {
                className: a.badgeIcon,
                color: null != u ? u : 'currentColor',
                'aria-hidden': !0
            })
        ]
    });
}
function d() {
    return (0, i.jsx)(c, {
        label: s.Z.Messages.GUILD_PRODUCT_STATUS_BADGE_PUBLISHED,
        backgroundColor: '#207B8D',
        icon: r.SparklesIcon
    });
}
function _() {
    return (0, i.jsx)(c, {
        label: s.Z.Messages.GUILD_PRODUCT_STATUS_BADGE_DRAFT,
        icon: r.PencilIcon,
        iconColor: (0, l.Lq)(u.Ilk.PRIMARY_330)
    });
}
