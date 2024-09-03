t.d(s, {
    Z: function () {
        return r;
    }
});
var n = t(735250);
t(470079);
var a = t(481060),
    i = t(56309);
function r(e) {
    let { children: s, title: t } = e;
    return (0, n.jsxs)('div', {
        className: i.category,
        children: [
            (0, n.jsx)(a.Heading, {
                variant: 'heading-lg/normal',
                color: 'text-normal',
                className: i.categoryHeader,
                children: t
            }),
            (0, n.jsx)('div', {
                className: i.categoryContent,
                children: s
            }),
            (0, n.jsx)(a.FormDivider, { className: i.categoryDivider })
        ]
    });
}
