n.d(t, {
    EY: function () {
        return f;
    },
    Ow: function () {
        return _;
    },
    no: function () {
        return E;
    },
    ux: function () {
        return h;
    }
});
var r = n(47120);
var i = n(724458);
var a = n(653041);
var o = n(789020);
var s = n(442837),
    l = n(271383),
    u = n(630388),
    c = n(372897);
let d = [c.q.AUTOMOD_QUARANTINED_BIO, c.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME, c.q.AUTOMOD_QUARANTINED_CLAN_TAG];
function _(e) {
    return null == e ? new Set() : new Set(d.reduce((t, n) => ((0, u.yE)(null != e ? e : 0, n) && t.push(n), t), []));
}
function E(e) {
    return null == e ? new Set() : _(e.flags);
}
function f(e) {
    return (
        null != e &&
        null != e.flags &&
        d.some((t) => {
            var n;
            return (0, u.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, t);
        })
    );
}
function h(e) {
    return (0, s.e7)([l.ZP], () => null != e && f(l.ZP.getSelfMember(e)), [e]);
}
