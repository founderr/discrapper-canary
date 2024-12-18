n.d(t, {
    l: function () {
        return d;
    },
    v: function () {
        return u;
    }
});
var l = n(200651);
n(192379);
var i = n(481060),
    s = n(144114),
    r = n(489813),
    o = n(815660),
    a = n(388032);
function d() {
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsx)(r.PU, {
            icon: i.MobilePhoneIcon,
            text: a.intl.string(a.t.woMjLS),
            footnote: a.intl.string(a.t['jMh+TU']),
            meetsRequirement: !1,
            children: (0, l.jsx)(i.Tooltip, {
                text: a.intl.string(a.t.mGlP39),
                children: (e) =>
                    (0, l.jsx)(i.Button, {
                        ...e,
                        size: i.Button.Sizes.SMALL,
                        disabled: !0,
                        children: a.intl.string(a.t['13ofGh'])
                    })
            })
        })
    });
}
function u(e) {
    let { isUserVerified: t } = e,
        d = t ? a.intl.string(a.t.WWzQtb) : a.intl.string(a.t.woMjLS);
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsx)(r.PU, {
            icon: i.MobilePhoneIcon,
            text: d,
            footnote: a.intl.string(a.t['jMh+TU']),
            meetsRequirement: t,
            children: (0, l.jsx)(i.Button, {
                size: i.Button.Sizes.SMALL,
                onClick: () => {
                    (0, i.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e('76540'), n.e('98859')]).then(n.bind(n, 607018));
                            return (t) =>
                                (0, l.jsx)(e, {
                                    reason: s.L.GUILD_PHONE_REQUIRED,
                                    ...t
                                });
                        },
                        { modalKey: o.M }
                    );
                },
                children: a.intl.string(a.t['13ofGh'])
            })
        })
    });
}
