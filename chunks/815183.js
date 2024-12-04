var i = t(200651);
t(192379);
var a = t(481060),
    n = t(153867),
    l = t(410030),
    r = t(583901),
    o = t(231338);
s.Z = function () {
    let e = (0, l.ZP)();
    return (0, i.jsxs)(a.FormItem, {
        children: [
            (0, i.jsx)(a.FormTitle, {
                tag: a.FormTitleTags.H5,
                children: 'Theme'
            }),
            (0, i.jsxs)('div', {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                children: [
                    (0, i.jsx)(r.bD, {
                        theme: o.BR.LIGHT,
                        isSelected: e === o.BR.LIGHT,
                        onSelect: () => (0, n.ZI)({ theme: o.BR.LIGHT })
                    }),
                    (0, i.jsx)(r.bD, {
                        theme: o.BR.DARK,
                        isSelected: e === o.BR.DARK,
                        onSelect: () => (0, n.ZI)({ theme: o.BR.DARK })
                    })
                ]
            })
        ]
    });
};
