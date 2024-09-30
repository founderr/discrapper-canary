a.d(n, {
    Z: function () {
        return o;
    }
});
var i = a(735250);
a(470079);
var t = a(120356),
    r = a.n(t),
    l = a(481060),
    s = a(769003);
function o(e) {
    let { supportedLanguages: n } = e;
    return (0, i.jsx)('ul', {
        className: s.outerContainer,
        children: n.map((e) =>
            (0, i.jsx)(
                'li',
                {
                    className: r()(s.innerContainer, s.languageItem),
                    children: (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: e
                    })
                },
                e
            )
        )
    });
}
