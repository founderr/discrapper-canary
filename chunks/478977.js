var n = t(735250);
t(470079);
var r = t(866442),
    a = t(481060),
    i = t(720778);
s.Z = function (e) {
    let { colorKey: s, value: t, onChange: l, title: o } = e;
    return (0, n.jsxs)(a.FormItem, {
        children: [
            (0, n.jsx)(a.FormTitle, {
                tag: a.FormTitleTags.H5,
                children: o
            }),
            (0, n.jsx)(a.Popout, {
                renderPopout: (e) =>
                    (0, n.jsx)(a.CustomColorPicker, {
                        ...e,
                        value: t,
                        onChange: (e) => l(s, (0, r.Rf)(e))
                    }),
                children: (e) =>
                    (0, n.jsx)(a.Clickable, {
                        ...e,
                        tag: 'span',
                        'aria-label': 'Select a color',
                        className: i.swatchContainer,
                        style: { backgroundColor: t },
                        children: (0, n.jsx)(a.EyeDropperIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: i.swatchIcon
                        })
                    })
            })
        ]
    });
};
