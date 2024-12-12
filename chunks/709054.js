r.r(n),
    r.d(n, {
        DISCORD_EPOCH: function () {
            return s.cj;
        },
        SnowflakeSequence: function () {
            return s.Tk;
        }
    });
var i = r(392711),
    a = r.n(i),
    s = r(67423);
function o(e) {
    return Object.keys(e);
}
function l(e) {
    return Object.entries(e);
}
function u(e, n) {
    for (let r in e) n(r);
}
function c(e, n) {
    a().forEach(e, (e, r) => n(e, r));
}
function d(e) {
    return s.Ol(e);
}
function f(e, n) {
    return s.P4(e, n);
}
function _(e) {
    return s.cO(e);
}
function h(e) {
    return s.B_(e);
}
function p(e) {
    return s.Lm(e);
}
function m(e, n) {
    return s.qu(e, n);
}
function g(e) {
    return s.qi(e);
}
function E(e) {
    return e;
}
function v(e) {
    return E(e);
}
function I(e) {
    return E(e);
}
function T(e) {
    return E(e);
}
n.default = {
    age: h,
    extractTimestamp: p,
    compare: m,
    atPreviousMillisecond: _,
    fromTimestamp: d,
    fromTimestampWithSequence: f,
    keys: o,
    forEach: c,
    forEachKey: u,
    entries: l,
    isProbablyAValidSnowflake: g,
    castChannelIdAsMessageId: v,
    castMessageIdAsChannelId: I,
    castGuildIdAsEveryoneGuildRoleId: T,
    cast: E
};
