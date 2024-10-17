n.d(s, {
    W: function () {
        return i;
    },
    Z: function () {
        return E;
    }
});
var t = n(735250);
n(470079);
var o = n(120356),
    a = n.n(o),
    l = n(481060),
    r = n(915938);
let i = {
    RED: r.redMessageBlock,
    YELLOW: r.yellowMessageBlock,
    BROWN: r.brownMessageBlock
};
function E(e) {
    let { color: s, icon: n, children: o, className: i } = e;
    return (0, t.jsx)(l.FormErrorBlock, {
        icon: (e) =>
            (0, t.jsx)(n, {
                height: 20,
                width: 20,
                ...e
            }),
        iconClassName: r.messageBlockIcon,
        className: a()(s, i),
        children: o
    });
}
