n.d(t, {
    Z: function () {
        return s;
    },
    j: function () {
        return o;
    }
});
var r = n(47120);
var i = n(433517);
let a = 'recentBuildOverrides';
function o() {
    var e;
    return (null !== (e = i.K.get(a)) && void 0 !== e ? e : []).filter((e) => null == e.exp || e.exp > Date.now());
}
function s(e, t) {
    if (null == t || null == e || null == e.targetBuildOverride.discord_web) return;
    let n = {
            id: e.targetBuildOverride.discord_web.id,
            payload: t,
            exp: Date.parse(e.expiresAt)
        },
        r = [n, ...o().filter((e) => n.id !== e.id)].slice(0, 5);
    i.K.set(a, r);
}
