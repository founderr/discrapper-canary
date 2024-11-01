n.d(t, {
    Vb: function () {
        return a;
    },
    YI: function () {
        return s;
    },
    u5: function () {
        return i;
    },
    vJ: function () {
        return r;
    }
});
let r = n(139458).B || !1;
function i() {
    return a()
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((e) => {
            let { code: t, name: n } = e;
            return {
                value: t,
                name: n,
                localizedName: t
            };
        })
        .sort((e, t) => {
            let { name: n } = e,
                { name: r } = t;
            return (n = n.toLowerCase()), n < (r = r.toLowerCase()) ? -1 : n > r ? 1 : 0;
        });
}
function a() {
    return n(515297);
}
function s(e, t) {
    var n, r;
    let i = a()
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((e) => {
            let { code: t } = e;
            return t;
        });
    if (i.includes(e)) return e;
    let s = e.split('-');
    return i.includes(s[0]) ? s[0] : 'zh' === s[0] && s.length > 1 && 'Hant' === s[1] ? (null !== (n = i.find((e) => 'zh-TW' === e)) && void 0 !== n ? n : t) : null !== (r = i.find((e) => e.split('-')[0] === s[0])) && void 0 !== r ? r : t;
}
