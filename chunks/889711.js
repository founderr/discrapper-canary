function r(e) {
    return new ResizeObserver(e);
}
function o(e, t) {
    e.observe(t);
}
function i(e, t) {
    e.unobserve(t);
}
n.d(t, {
    UC: function () {
        return i;
    },
    YP: function () {
        return o;
    },
    pP: function () {
        return r;
    }
});
