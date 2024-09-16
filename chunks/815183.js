var n = t(735250);
t(470079);
var a = t(481060),
    i = t(583901),
    r = t(981631);
s.Z = function (e) {
    let { onSelect: s, theme: t } = e;
    return (0, n.jsxs)(a.FormItem, {
        children: [
            (0, n.jsx)(a.FormTitle, {
                tag: a.FormTitleTags.H5,
                children: 'Theme'
            }),
            (0, n.jsxs)('div', {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                children: [
                    (0, n.jsx)(i.bD, {
                        theme: r.BRd.LIGHT,
                        isSelected: t === r.BRd.LIGHT,
                        onSelect: () => s(r.BRd.LIGHT)
                    }),
                    (0, n.jsx)(i.bD, {
                        theme: r.BRd.DARK,
                        isSelected: t === r.BRd.DARK,
                        onSelect: () => s(r.BRd.DARK)
                    })
                ]
            })
        ]
    });
};
