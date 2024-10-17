n(653041);
var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(783097),
    l = n(768581),
    o = n(956965),
    c = n(548514),
    d = n(689938),
    u = n(613909);
let _ = 64;
t.Z = function (e) {
    let { application: t } = e,
        n = a.useMemo(
            () =>
                l.ZP.getApplicationIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 120
                }),
            [t]
        ),
        E = a.useMemo(() => {
            let e = [];
            return (0, r.vJ)(t) && e.push(d.Z.Messages.APP_DIRECTORY_PARTNER), (0, r.Cb)(t) && (0 !== e.length && e.push('\u2022'), e.push(d.Z.Messages.APP_LAUNCHER_IAP_DISCLOSURE)), (0, r.Hu)(t) && (0 !== e.length && e.push('\u2022'), e.push(d.Z.Messages.APP_LAUNCHER_ADS_DISCLOSURE)), e;
        }, [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Z, {
                application: t,
                bannerType: 'detail',
                iconURL: n
            }),
            (0, i.jsx)('div', {
                className: u.avatarContainer,
                style: { height: _ },
                children: (0, i.jsx)('img', {
                    src: n,
                    alt: '',
                    className: u.avatar,
                    height: 120,
                    width: 120,
                    style: {
                        borderWidth: 4,
                        marginLeft: 28
                    }
                })
            }),
            (0, i.jsxs)('div', {
                className: u.infoContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: u.metadataContainer,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: 'heading-xxl/bold',
                                color: 'header-primary',
                                children: t.name
                            }),
                            (0, i.jsx)('div', {
                                className: u.disclosuresContainer,
                                children: E.map((e, t) =>
                                    (0, i.jsx)(
                                        s.Text,
                                        {
                                            className: u.disclosuresText,
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
                    (0, i.jsx)(c.Z, { application: t })
                ]
            })
        ]
    });
};
