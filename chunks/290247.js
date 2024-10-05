t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(735250);
t(470079);
var a = t(120356),
    r = t.n(a),
    o = t(481060),
    l = t(769003);
function s(e) {
    let { supportedLanguages: n } = e;
    return (0, i.jsx)('ul', {
        className: l.outerContainer,
        children: n.map((e) =>
            (0, i.jsx)(
                'li',
                {
                    className: r()(l.innerContainer, l.languageItem),
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
