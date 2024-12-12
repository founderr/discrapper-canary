r.d(n, {
    Nd: function () {
        return s;
    },
    bk: function () {
        return a;
    },
    d3: function () {
        return o;
    },
    oP: function () {
        return l;
    }
});
var i = r(246364);
function a(e) {
    return e === i.wB.APPROVED || e === i.wB.REJECTED;
}
function s(e) {
    return e === i.wB.SUBMITTED;
}
function o(e) {
    return e.applicationStatus === i.wB.APPROVED && null != e.lastSeen;
}
function l(e) {
    return a(e.applicationStatus) && null == e.lastSeen;
}
