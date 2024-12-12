r.d(n, {
    M: function () {
        return o;
    }
});
var i = r(192379),
    a = r(409447),
    s = r(330905);
let o = (e) => {
    let n;
    let r = (0, a.u)();
    if (!r.display) return null;
    let { display: o, ...l } = r;
    return (n = 'children' in e ? ('function' == typeof e.children ? e.children(l) : e.children) : e.generator(l)), i.createElement(s._.Provider, { value: l }, n);
};
