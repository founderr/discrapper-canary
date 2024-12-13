n.d(e, {
    Z: function () {
        return a;
    }
});
var o = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    l = n(481060),
    r = n(437323);
function a(t) {
    let { tips: e, className: n, headerText: i } = t;
    return (0, o.jsxs)('div', {
        className: s()(r.tipsSection, n),
        children: [
            (0, o.jsx)('div', {
                className: r.tipsHeader,
                children: (0, o.jsx)(l.Heading, {
                    variant: 'heading-lg/bold',
                    className: r.headerText,
                    children: i
                })
            }),
            (0, o.jsx)('ul', {
                className: r.tipsList,
                children: e.map((t, e) =>
                    (0, o.jsxs)(
                        'li',
                        {
                            className: r.tipRow,
                            children: [
                                (0, o.jsx)(l.Heading, {
                                    variant: 'heading-md/semibold',
                                    color: 'text-brand',
                                    className: r.tipNumber,
                                    children: e + 1
                                }),
                                (0, o.jsx)(l.Text, {
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
