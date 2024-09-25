let r, i;
n.d(t, {
    Zh: function () {
        return l;
    },
    eJ: function () {
        return u;
    },
    f3: function () {
        return s;
    },
    p8: function () {
        return c;
    },
    zS: function () {
        return d;
    }
});
var a = n(411104);
function o() {
    if (null == r) throw Error('Native dependencies have not been injected.');
}
function s(e) {
    r = e;
}
function l() {
    return o(), r.supported();
}
function u(e) {
    return o(), r.supportsFeature(e);
}
function c(e) {
    o(), r.setProcessPriority(e);
}
function d() {
    return o(), null != i ? i : (i = r.getVoiceEngine());
}
