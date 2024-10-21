t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(200651);
t(192379);
var a = t(120356),
    r = t.n(a),
    o = t(481060),
    s = t(769003);
function l(e) {
    let { supportedLanguages: n } = e;
    return (0, i.jsx)('ul', {
        className: s.outerContainer,
        children: n.map((e) =>
            (0, i.jsx)(
                'li',
                {
                    className: r()(s.innerContainer, s.languageItem),
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: e
                    })
                },
                e
            )
        )
    });
}
