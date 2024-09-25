n.d(t, {
    s: function () {
        return c;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(168504);
let u = 2;
function c() {
    let [e, t] = a.useState(!1);
    function n(e) {
        let { showAll: n = !1, className: r, children: a, lineClamp: o = u } = e,
            c = {
                lineClamp: o,
                WebkitLineClamp: o
            },
            d = (e) => {
                null != e && t(e.scrollHeight - e.clientHeight > 1);
            };
        return (0, i.jsx)('div', {
            ref: d,
            className: s()(l.lineClamp, r),
            style: n ? void 0 : c,
            children: a
        });
    }
    return {
        isTruncated: e,
        ExpandableTextContainer: a.memo(n)
    };
}
