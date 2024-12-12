r.d(n, {
    J: function () {
        return s;
    },
    Z: function () {
        return o;
    }
});
var i = r(192379),
    a = r(149203);
function s(e) {
    let { topEmojis: n, newlyAddedEmojis: r, rowSize: i = a.N6 } = e,
        s = n.slice(0, i - r.length);
    return {
        visibleTopEmojis: s,
        visibleNewlyAddedEmojis: r,
        allEmojis: s.concat(r)
    };
}
function o(e) {
    return i.useMemo(() => s(e), [e]);
}
