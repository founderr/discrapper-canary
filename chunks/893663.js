n.d(t, {
    k9: function () {
        return l;
    },
    tT: function () {
        return s;
    },
    zx: function () {
        return r;
    }
});
var r,
    i = n(442837),
    a = n(581883),
    o = n(710111);
function s(e) {
    return (0, i.e7)([a.Z], () => {
        var t, n;
        return u(e, null !== (n = null === (t = a.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {});
    });
}
function l(e) {
    var t, n;
    return u(e, null !== (n = null === (t = a.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {});
}
function u(e, t) {
    var n, r;
    let i = null === (n = t[e]) || void 0 === n ? void 0 : n.joinSound,
        a = null === (r = t[o.hY]) || void 0 === r ? void 0 : r.joinSound,
        s = null != i ? i : a;
    return null != s
        ? {
              ...s,
              type: null != i ? 1 : 0
          }
        : void 0;
}
!(function (e) {
    (e[(e.GLOBAL = 0)] = 'GLOBAL'), (e[(e.GUILD = 1)] = 'GUILD');
})(r || (r = {}));
