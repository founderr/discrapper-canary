let i, a;
r.d(n, {
    Zh: function () {
        return u;
    },
    eJ: function () {
        return c;
    },
    f3: function () {
        return l;
    },
    p8: function () {
        return d;
    },
    zS: function () {
        return f;
    }
});
var s = r(411104);
function o() {
    if (null == i) throw Error('Native dependencies have not been injected.');
}
function l(e) {
    i = e;
}
function u() {
    return o(), i.supported();
}
function c(e) {
    return o(), i.supportsFeature(e);
}
function d(e) {
    o(), i.setProcessPriority(e);
}
function f() {
    return o(), null != a ? a : (a = i.getVoiceEngine());
}
