s.d(t, {
    Z: function () {
        return _;
    }
});
var T = s(735250);
s(470079);
var o = s(120356),
    a = s.n(o),
    n = s(481060),
    l = s(32501);
function _(e) {
    let { tips: t, className: s, headerText: o } = e;
    return (0, T.jsxs)('div', {
        className: a()(l.tipsSection, s),
        children: [
            (0, T.jsx)('div', {
                className: l.tipsHeader,
                children: (0, T.jsx)(n.Heading, {
                    variant: 'heading-lg/bold',
                    className: l.headerText,
                    children: o
                })
            }),
            (0, T.jsx)('ul', {
                className: l.tipsList,
                children: t.map((e, t) =>
                    (0, T.jsxs)(
                        'li',
                        {
                            className: l.tipRow,
                            children: [
                                (0, T.jsx)(n.Heading, {
                                    variant: 'heading-md/semibold',
                                    color: 'text-brand',
                                    className: l.tipNumber,
                                    children: t + 1
                                }),
                                (0, T.jsx)(n.Text, {
                                    variant: 'text-sm/medium',
                                    children: e
                                })
                            ]
                        },
                        'safety-tips-'.concat(t)
                    )
                )
            })
        ]
    });
}
