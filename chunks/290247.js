n.d(a, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var t = n(120356),
    r = n.n(t),
    l = n(481060),
    s = n(769003);
function o(e) {
    let { supportedLanguages: a } = e;
    return (0, i.jsx)('ul', {
        className: s.outerContainer,
        children: a.map((e) =>
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
