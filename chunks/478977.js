var i = t(200651);
t(192379);
var a = t(866442),
    n = t(481060),
    l = t(102787);
s.Z = function (e) {
    let { colorKey: s, value: t, onChange: r, title: o } = e;
    return (0, i.jsxs)(n.FormItem, {
        children: [
            (0, i.jsx)(n.FormTitle, {
                tag: n.FormTitleTags.H5,
                children: o
            }),
            (0, i.jsx)(n.Popout, {
                renderPopout: (e) =>
                    (0, i.jsx)(n.CustomColorPicker, {
                        ...e,
                        value: t,
                        onChange: (e) => r(s, (0, a.Rf)(e))
                    }),
                children: (e) =>
                    (0, i.jsx)(n.Clickable, {
                        ...e,
                        tag: 'span',
                        'aria-label': 'Select a color',
                        className: l.swatchContainer,
                        style: { backgroundColor: t },
                        children: (0, i.jsx)(n.EyeDropperIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: l.swatchIcon
                        })
                    })
            })
        ]
    });
};
