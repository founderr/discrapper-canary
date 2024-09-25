var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(648820);
let s = (e) => {
    let { message: t, className: n, noResultsImageURL: i, forceLightTheme: s, suggestions: l } = e,
        u = null != i ? { backgroundImage: 'url('.concat(i, ')') } : {};
    return (0, r.jsx)('div', {
        className: a()({ [o.forceLightTheme]: s }, n),
        children: (0, r.jsxs)('div', {
            className: o.wrapper,
            children: [
                (0, r.jsx)('div', {
                    className: o.sadImage,
                    style: u
                }),
                (0, r.jsx)('div', { children: t }),
                l
            ]
        })
    });
};
t.Z = s;
