n.d(e, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var o = n(120356),
    s = n.n(o),
    l = n(481060),
    r = n(32501);
function a(t) {
    let { tips: e, className: n, headerText: o } = t;
    return (0, i.jsxs)('div', {
        className: s()(r.tipsSection, n),
        children: [
            (0, i.jsx)('div', {
                className: r.tipsHeader,
                children: (0, i.jsx)(l.Heading, {
                    variant: 'heading-lg/bold',
                    className: r.headerText,
                    children: o
                })
            }),
            (0, i.jsx)('ul', {
                className: r.tipsList,
                children: e.map((t, e) =>
                    (0, i.jsxs)(
                        'li',
                        {
                            className: r.tipRow,
                            children: [
                                (0, i.jsx)(l.Heading, {
                                    variant: 'heading-md/semibold',
                                    color: 'text-brand',
                                    className: r.tipNumber,
                                    children: e + 1
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    children: t
                                })
                            ]
                        },
                        'safety-tips-'.concat(e)
                    )
                )
            })
        ]
    });
}
