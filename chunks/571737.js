n(653041);
var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(783097),
    l = n(768581),
    o = n(956965),
    c = n(689938),
    d = n(613909);
let u = 64;
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
        _ = a.useMemo(() => {
            let e = [];
            return (0, r.vJ)(t) && e.push(c.Z.Messages.APP_DIRECTORY_PARTNER), (0, r.Cb)(t) && (0 !== e.length && e.push('\u2022'), e.push(c.Z.Messages.APP_LAUNCHER_IAP_DISCLOSURE)), (0, r.Hu)(t) && (0 !== e.length && e.push('\u2022'), e.push(c.Z.Messages.APP_LAUNCHER_ADS_DISCLOSURE)), e;
        }, [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Z, {
                application: t,
                bannerType: 'detail',
                iconURL: n
            }),
            (0, i.jsx)('div', {
                className: d.avatarContainer,
                style: { height: u },
                children: (0, i.jsx)('img', {
                    src: n,
                    alt: '',
                    className: d.avatar,
                    height: 120,
                    width: 120,
                    style: {
                        borderWidth: 4,
                        marginLeft: 28
                    }
                })
            }),
            (0, i.jsxs)('div', {
                className: d.infoContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: d.metadataContainer,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: 'heading-xxl/bold',
                                color: 'header-primary',
                                children: t.name
                            }),
                            (0, i.jsx)('div', {
                                className: d.disclosuresContainer,
                                children: _.map((e, t) =>
                                    (0, i.jsx)(
                                        s.Text,
                                        {
                                            className: d.disclosuresText,
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
                    (0, i.jsx)('div', { className: d.actionContainer })
                ]
            })
        ]
    });
};
