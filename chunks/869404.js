n.d(t, {
    IO: function () {
        return E;
    },
    h3: function () {
        return _;
    },
    k1: function () {
        return l;
    },
    tU: function () {
        return d;
    }
});
var r = n(47120);
var i = n(724458);
var a = n(709054),
    o = n(355298),
    s = n(333984);
function l(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, s.Z];
    return c(
        u(e).filter((e) => {
            let [, r] = e;
            return !t.isMessageRequest(r.id) && !n.isSpam(r.id);
        })
    );
}
function u(e) {
    return a.default.keys(e).map((t) => [t, e[t]]);
}
function c(e) {
    return Array.from(e).reduce((e, t) => {
        let [n, r] = t;
        return Object.assign(e, { [n]: r });
    }, {});
}
function d(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, s.Z];
    return e.filter((e) => !t.isMessageRequest(e) && !n.isSpam(e));
}
function _(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, s.Z];
    return t.isMessageRequest(e) || n.isSpam(e);
}
function E() {
    let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [o.Z, s.Z],
        n = t.getSpamChannelsCount();
    return e.getMessageRequestsCount() > 0 || n > 0;
}
