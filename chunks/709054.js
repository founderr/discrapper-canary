n.r(t),
    n.d(t, {
        DISCORD_EPOCH: function () {
            return a.cj;
        },
        SnowflakeSequence: function () {
            return a.Tk;
        }
    });
var r = n(392711),
    i = n.n(r),
    a = n(67423);
function o(e) {
    return Object.keys(e);
}
function s(e) {
    return Object.entries(e);
}
function l(e, t) {
    for (let n in e) t(n);
}
function u(e, t) {
    i().forEach(e, (e, n) => t(e, n));
}
function c(e) {
    return a.Ol(e);
}
function d(e, t) {
    return a.P4(e, t);
}
function _(e) {
    return a.cO(e);
}
function E(e) {
    return a.B_(e);
}
function f(e) {
    return a.Lm(e);
}
function h(e, t) {
    return a.qu(e, t);
}
function p(e) {
    return e;
}
function m(e) {
    return p(e);
}
function I(e) {
    return p(e);
}
function T(e) {
    return p(e);
}
t.default = {
    age: E,
    extractTimestamp: f,
    compare: h,
    atPreviousMillisecond: _,
    fromTimestamp: c,
    fromTimestampWithSequence: d,
    keys: o,
    forEach: u,
    forEachKey: l,
    entries: s,
    castChannelIdAsMessageId: m,
    castMessageIdAsChannelId: I,
    castGuildIdAsEveryoneGuildRoleId: T,
    cast: p
};
