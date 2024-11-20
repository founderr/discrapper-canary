var a = t(200651);
t(192379);
var n = t(866442),
    r = t(481060),
    i = t(720778);
s.Z = function (e) {
    let { colorKey: s, value: t, onChange: l, title: o } = e;
    return (0, a.jsxs)(r.FormItem, {
        children: [
            (0, a.jsx)(r.FormTitle, {
                tag: r.FormTitleTags.H5,
                children: o
            }),
            (0, a.jsx)(r.Popout, {
                renderPopout: (e) =>
                    (0, a.jsx)(r.CustomColorPicker, {
                        ...e,
                        value: t,
                        onChange: (e) => l(s, (0, n.Rf)(e))
                    }),
                children: (e) =>
                    (0, a.jsx)(r.Clickable, {
                        ...e,
                        tag: 'span',
                        'aria-label': 'Select a color',
                        className: i.swatchContainer,
                        style: { backgroundColor: t },
                        children: (0, a.jsx)(r.EyeDropperIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: i.swatchIcon
                        })
                    })
            })
        ]
    });
};
