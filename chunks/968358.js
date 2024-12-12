function i(e) {
    if (null == e) return !1;
    for (var n = 0; n < e.length; n++) if (e[n].voiceState.selfStream) return !0;
    return !1;
}
r.d(n, {
    a: function () {
        return i;
    }
});
