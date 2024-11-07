n.d(t, {
    Z: function () {
        return o;
    }
});
var a = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    r = n(481060),
    l = n(769003);
function o(e) {
    let { supportedLanguages: t } = e;
    return (0, a.jsx)('ul', {
        className: l.outerContainer,
        children: t.map((e) =>
            (0, a.jsx)(
                'li',
                {
                    className: s()(l.innerContainer, l.languageItem),
                    children: (0, a.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: e
                    })
                },
                e
            )
        )
    });
}
