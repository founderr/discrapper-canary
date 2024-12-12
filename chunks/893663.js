r.d(n, {
    k9: function () {
        return u;
    },
    tT: function () {
        return l;
    },
    zx: function () {
        return i;
    }
});
var i,
    a = r(442837),
    s = r(581883),
    o = r(710111);
function l(e) {
    return (0, a.e7)([s.Z], () => {
        var n, r;
        return c(e, null !== (r = null === (n = s.Z.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== r ? r : {});
    });
}
function u(e) {
    var n, r;
    return c(e, null !== (r = null === (n = s.Z.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== r ? r : {});
}
function c(e, n) {
    var r, i;
    let a = null === (r = n[e]) || void 0 === r ? void 0 : r.joinSound,
        s = null === (i = n[o.hY]) || void 0 === i ? void 0 : i.joinSound,
        l = null != a ? a : s;
    return null != l
        ? {
              ...l,
              type: null != a ? 1 : 0
          }
        : void 0;
}
!(function (e) {
    (e[(e.GLOBAL = 0)] = 'GLOBAL'), (e[(e.GUILD = 1)] = 'GUILD');
})(i || (i = {}));
