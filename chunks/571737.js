n(653041);
var i = n(200651),
    r = n(192379),
    l = n(622535),
    a = n(481060),
    s = n(783097),
    o = n(768581),
    c = n(956965),
    d = n(548514),
    u = n(388032),
    h = n(137762);
let m = 52;
t.Z = function (e) {
    let { application: t, onButtonsVisibilityChange: n } = e,
        p = r.useMemo(
            () =>
                o.ZP.getApplicationIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 96
                }),
            [t]
        ),
        g = r.useMemo(() => {
            let e = [];
            return (0, s.vJ)(t) && e.push(u.intl.string(u.t.LO4f0N)), (0, s.Cb)(t) && (0 !== e.length && e.push('\u2022'), e.push(u.intl.string(u.t['8z5B2d']))), (0, s.Hu)(t) && (0 !== e.length && e.push('\u2022'), e.push(u.intl.string(u.t['5khEk5']))), e;
        }, [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, {
                application: t,
                bannerType: 'detail',
                iconURL: p
            }),
            (0, i.jsx)('div', {
                className: h.avatarContainer,
                style: { height: m },
                children: (0, i.jsx)('img', {
                    src: p,
                    alt: '',
                    className: h.avatar,
                    height: 96,
                    width: 96,
                    style: {
                        borderWidth: 4,
                        marginLeft: 28
                    }
                })
            }),
            (0, i.jsxs)('div', {
                className: h.infoContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: h.metadataContainer,
                        children: [
                            (0, i.jsx)(a.Heading, {
                                variant: 'heading-xxl/bold',
                                color: 'header-primary',
                                children: t.name
                            }),
                            (0, i.jsx)('div', {
                                className: h.disclosuresContainer,
                                children: g.map((e, t) =>
                                    (0, i.jsx)(
                                        a.Text,
                                        {
                                            className: h.disclosuresText,
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: e
                                        },
                                        t
                                    )
                                )
                            })
                        ]
                    }),
                    (0, i.jsx)(l.$, {
                        onChange: n,
                        active: !0,
                        children: (0, i.jsx)(d.Z, {
                            application: t,
                            size: 'md'
                        })
                    })
                ]
            })
        ]
    });
};
