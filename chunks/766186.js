n.d(t, {
    s: function () {
        return s;
    }
});
var r = n(280551),
    i = n(706454),
    a = n(689938);
function s(e) {
    let t;
    let n = i.default.locale;
    try {
        t = Intl.DateTimeFormat(n, e).format;
    } catch (n) {
        t = Intl.DateTimeFormat(void 0, e).format;
    }
    if (null != r.s)
        try {
            let i = null === r.s || void 0 === r.s ? void 0 : (0, r.s)(n !== a.Z.getDefaultLocale() ? n : void 0, e);
            if (null != i)
                return function (e) {
                    try {
                        return i(e);
                    } catch (e) {}
                    return t(e);
                };
        } catch (e) {}
    return t;
}
