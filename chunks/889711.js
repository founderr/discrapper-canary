function r(e) {
    return new ResizeObserver(e);
}
function i(e, t) {
    e.observe(t);
}
function l(e, t) {
    e.unobserve(t);
}
n.d(t, {
    UC: function () {
        return l;
    },
    YP: function () {
        return i;
    },
    pP: function () {
        return r;
    }
});
