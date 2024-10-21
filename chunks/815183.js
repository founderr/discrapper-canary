var a = t(200651);
t(192379);
var n = t(481060),
    r = t(153867),
    i = t(410030),
    l = t(583901),
    o = t(231338);
s.Z = function () {
    let e = (0, i.ZP)();
    return (0, a.jsxs)(n.FormItem, {
        children: [
            (0, a.jsx)(n.FormTitle, {
                tag: n.FormTitleTags.H5,
                children: 'Theme'
            }),
            (0, a.jsxs)('div', {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                children: [
                    (0, a.jsx)(l.bD, {
                        theme: o.BR.LIGHT,
                        isSelected: e === o.BR.LIGHT,
                        onSelect: () => (0, r.ZI)({ theme: o.BR.LIGHT })
                    }),
                    (0, a.jsx)(l.bD, {
                        theme: o.BR.DARK,
                        isSelected: e === o.BR.DARK,
                        onSelect: () => (0, r.ZI)({ theme: o.BR.DARK })
                    })
                ]
            })
        ]
    });
};
