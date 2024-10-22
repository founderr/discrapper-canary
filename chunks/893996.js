t.d(s, {
    Z: function () {
        return o;
    }
});
var n = t(200651);
t(192379);
var a = t(481060),
    i = t(921801),
    r = t(607922);
function o(e) {
    let { children: s, title: t, description: o, webSetting: l } = e;
    return (0, n.jsx)(i.F, {
        setting: l,
        children: (0, n.jsxs)('div', {
            className: r.category,
            children: [
                (0, n.jsxs)('div', {
                    className: r.categoryHeader,
                    children: [
                        (0, n.jsx)(a.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            children: t
                        }),
                        null != o
                            ? (0, n.jsx)(a.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: o
                              })
                            : null
                    ]
                }),
                (0, n.jsx)('div', {
                    className: r.categoryContent,
                    children: s
                }),
                (0, n.jsx)(a.FormDivider, { className: r.categoryDivider })
            ]
        })
    });
}
