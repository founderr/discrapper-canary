r.d(n, {
    s: function () {
        return o;
    }
});
var i = r(280551),
    a = r(706454),
    s = r(388032);
function o(e) {
    let n;
    let r = a.default.locale;
    try {
        n = Intl.DateTimeFormat(r, e).format;
    } catch (r) {
        n = Intl.DateTimeFormat(void 0, e).format;
    }
    if (null != i.s)
        try {
            let a = r === s.initialLocale,
                o = null != r && r.split('-')[0] === (null === s.systemLocale || void 0 === s.systemLocale ? void 0 : s.systemLocale.split('-')[0]),
                l = (0, i.s)(a && o ? void 0 : r, e);
            if (null != l)
                return function (e) {
                    try {
                        return l(e);
                    } catch (e) {}
                    return n(e);
                };
        } catch (e) {}
    return n;
}
