var n = t(735250);
t(470079);
var r = t(866442),
    i = t(481060),
    a = t(720778);
s.Z = function (e) {
    let { colorKey: s, value: t, onChange: l, title: o } = e;
    return (0, n.jsxs)(i.FormItem, {
        children: [
            (0, n.jsx)(i.FormTitle, {
                tag: i.FormTitleTags.H5,
                children: o
            }),
            (0, n.jsx)(i.Popout, {
                renderPopout: (e) =>
                    (0, n.jsx)(i.CustomColorPicker, {
                        ...e,
                        value: t,
                        onChange: (e) => l(s, (0, r.Rf)(e))
                    }),
                children: (e) =>
                    (0, n.jsx)(i.Clickable, {
                        ...e,
                        tag: 'span',
                        'aria-label': 'Select a color',
                        className: a.swatchContainer,
                        style: { backgroundColor: t },
                        children: (0, n.jsx)(i.EyeDropperIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: a.swatchIcon
                        })
                    })
            })
        ]
    });
};
