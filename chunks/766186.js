n.d(t, {
    s: function () {
        return s;
    }
});
var r = n(280551),
    i = n(706454),
    a = n(388032);
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
            let i = n === a.initialLocale,
                s = null != n && n.split('-')[0] === (null === a.systemLocale || void 0 === a.systemLocale ? void 0 : a.systemLocale.split('-')[0]),
                o = (0, r.s)(i && s ? void 0 : n, e);
            if (null != o)
                return function (e) {
                    try {
                        return o(e);
                    } catch (e) {}
                    return t(e);
                };
        } catch (e) {}
    return t;
}
