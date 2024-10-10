r.d(t, {
    QV: function () {
        return E;
    },
    XL: function () {
        return c;
    },
    Y: function () {
        return i;
    },
    nl: function () {
        return o;
    }
});
var n = r(696486),
    a = r(152228),
    _ = r(395848);
function o(e) {
    return 'number' == typeof e && isFinite(e);
}
function i(e, t, r, { ..._ }) {
    let o = (0, n.XU)(e).start_timestamp;
    return (
        o && o > t && 'function' == typeof e.updateStartTime && e.updateStartTime(t),
        (0, a._d)(e, () => {
            let e = (0, a.qp)({
                startTime: t,
                ..._
            });
            return e && e.end(r), e;
        })
    );
}
function E() {
    return _.m && _.m.addEventListener && _.m.performance;
}
function c(e) {
    return e / 1000;
}
