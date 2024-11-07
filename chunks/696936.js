e.d(n, {
    W: function () {
        return a;
    },
    Z: function () {
        return c;
    }
});
var i = e(200651);
e(192379);
var s = e(120356),
    l = e.n(s),
    o = e(481060),
    r = e(58700);
let a = {
    RED: r.redMessageBlock,
    YELLOW: r.yellowMessageBlock,
    BROWN: r.brownMessageBlock
};
function c(t) {
    let { color: n, icon: e, children: s, className: a } = t;
    return (0, i.jsx)(o.FormErrorBlock, {
        icon: (t) =>
            (0, i.jsx)(e, {
                height: 20,
                width: 20,
                ...t
            }),
        iconClassName: r.messageBlockIcon,
        className: l()(n, a),
        children: s
    });
}
