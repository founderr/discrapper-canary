var r = n(200651);
n(192379);
var i = n(481060),
    a = n(686546),
    s = n(768581),
    o = n(388032),
    l = n(977897);
t.Z = (e) => {
    var t;
    let { entry: n } = e,
        { id: u, icon: c, name: d } = n,
        f =
            null !==
                (t = s.ZP.getGuildIconURL({
                    id: u,
                    icon: c,
                    size: 32
                })) && void 0 !== t
                ? t
                : void 0;
    return (0, r.jsxs)('div', {
        className: l.container,
        children: [
            (0, r.jsx)(i.Heading, {
                className: l.header,
                variant: 'heading-sm/semibold',
                children: o.intl.string(o.t.nTe4HB)
            }),
            (0, r.jsx)('div', {
                className: l.guildContainer,
                children: (0, r.jsxs)('div', {
                    className: l.guildInfo,
                    children: [
                        (0, r.jsx)(a.ZP, {
                            mask: a.ZP.Masks.SQUIRCLE,
                            width: 32,
                            height: 32,
                            className: l.guildIconMask,
                            children: (0, r.jsx)('img', {
                                src: f,
                                alt: '',
                                className: l.guildIcon
                            })
                        }),
                        (0, r.jsx)(i.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: d
                        })
                    ]
                })
            })
        ]
    });
};
