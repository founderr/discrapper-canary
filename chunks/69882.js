function i(e) {
    return null != e && new Date(e) > new Date();
}
function a(e) {
    return i(null == e ? void 0 : e.communicationDisabledUntil);
}
r.d(n, {
    J: function () {
        return i;
    },
    b: function () {
        return a;
    }
});
