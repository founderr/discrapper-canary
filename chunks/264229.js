r.d(n, {
    fU: function () {
        return d;
    },
    jX: function () {
        return f;
    },
    mb: function () {
        return l;
    },
    tV: function () {
        return c;
    }
});
var i = r(47120);
var a = r(664751),
    s = r(898450);
let o = 'event';
function l(e, n) {
    return null == n
        ? e
        : c({
              baseCode: e,
              guildScheduledEventId: u(n)
          });
}
function u(e) {
    let n = '?' === e.charAt(0) ? e.substring(1) : e;
    try {
        let e = a.parse(n);
        return (0, s.d)(e[o]);
    } catch (e) {
        return;
    }
}
function c(e) {
    let { baseCode: n, guildScheduledEventId: r } = e;
    return null == r ? n : ''.concat(n, '?').concat(o, '=').concat(r);
}
function d(e) {
    let [n, r] = e.split('?');
    if (null == r) return { baseCode: n };
    let i = a.parse(r);
    return {
        baseCode: n,
        guildScheduledEventId: (0, s.d)(i[o])
    };
}
function f(e) {
    let [n] = e.split('?');
    return n;
}
