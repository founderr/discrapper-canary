var i = n(200651);
n(192379);
var r = n(481060),
    a = n(388032),
    l = n(860768);
t.Z = (e) => {
    let { hasHub: t } = e;
    return (0, i.jsxs)('div', {
        className: l.container,
        children: [
            (0, i.jsx)('div', {
                className: l.iconContainer,
                children: (0, i.jsx)(r.HubIcon, {
                    size: 'md',
                    color: r.tokens.colors.WHITE.css
                })
            }),
            (0, i.jsx)(r.Text, {
                color: 'header-primary',
                variant: 'text-lg/semibold',
                className: l.header,
                children: t ? a.intl.string(a.t.hsSHh4) : a.intl.string(a.t.Wf6iio)
            }),
            (0, i.jsx)(r.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                className: l.__invalid_description,
                children: t ? a.intl.string(a.t.FZ2J3d) : a.intl.string(a.t.TvHcv7)
            }),
            (0, i.jsx)('div', { className: l.gap }),
            (0, i.jsx)(r.Button, {
                size: r.Button.Sizes.LARGE,
                color: t ? r.Button.Colors.PRIMARY : r.Button.Colors.GREEN,
                onClick: () =>
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-sm/semibold',
                    className: l.addButton,
                    color: 'none',
                    children: t ? a.intl.string(a.t.IyjHDw) : a.intl.string(a.t['KU/aNz'])
                })
            })
        ]
    });
};
