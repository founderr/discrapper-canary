n.d(t, {
    s: function () {
        return a;
    }
});
var r = n(280551),
    i = n(689938);
function a(e) {
    let t;
    let n = i.Z.getLocale();
    try {
        t = Intl.DateTimeFormat(n, e).format;
    } catch (n) {
        t = Intl.DateTimeFormat(void 0, e).format;
    }
    if ((null == e ? void 0 : e.hourCycle) == null)
        try {
            let a = null === r.s || void 0 === r.s ? void 0 : (0, r.s)(n !== i.Z.getDefaultLocale() ? n : void 0, e);
            if (null != a)
                return function (e) {
                    try {
                        return a(e);
                    } catch (e) {}
                    return t(e);
                };
        } catch (e) {}
    return t;
}
