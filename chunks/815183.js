var n = t(735250);
t(470079);
var a = t(481060),
    i = t(153867),
    r = t(410030),
    o = t(583901),
    l = t(231338);
s.Z = function () {
    let e = (0, r.ZP)();
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
                    (0, n.jsx)(o.bD, {
                        theme: l.BR.LIGHT,
                        isSelected: e === l.BR.LIGHT,
                        onSelect: () => (0, i.ZI)({ theme: l.BR.LIGHT })
                    }),
                    (0, n.jsx)(o.bD, {
                        theme: l.BR.DARK,
                        isSelected: e === l.BR.DARK,
                        onSelect: () => (0, i.ZI)({ theme: l.BR.DARK })
                    })
                ]
            })
        ]
    });
};
