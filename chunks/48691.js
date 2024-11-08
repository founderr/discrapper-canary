t.d(n, {
    b: function () {
        return f;
    },
    t: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(44315),
    o = t(377171),
    u = t(981631),
    a = t(388032),
    s = t(503880);
function c(e) {
    let { label: n, backgroundColor: t = o.Z.BUTTON_SECONDARY_BACKGROUND, icon: l, iconColor: u } = e;
    return (0, i.jsxs)('div', {
        className: s.badge,
        style: { backgroundColor: t },
        children: [
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                className: s.__invalid_badgeText,
                children: n
            }),
            (0, i.jsx)(l, {
                className: s.badgeIcon,
                color: null != u ? u : 'currentColor',
                'aria-hidden': !0
            })
        ]
    });
}
function d() {
    return (0, i.jsx)(c, {
        label: a.intl.string(a.t['I+02Gh']),
        backgroundColor: '#207B8D',
        icon: r.SparklesIcon
    });
}
function f() {
    return (0, i.jsx)(c, {
        label: a.intl.string(a.t.TgsPaG),
        icon: r.PencilIcon,
        iconColor: (0, l.Lq)(u.Ilk.PRIMARY_330)
    });
}
