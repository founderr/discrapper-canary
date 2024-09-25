n.d(t, {
    fU: function () {
        return c;
    },
    jX: function () {
        return d;
    },
    mb: function () {
        return s;
    },
    tV: function () {
        return u;
    }
});
var r = n(47120);
var i = n(664751),
    a = n(898450);
let o = 'event';
function s(e, t) {
    return null == t
        ? e
        : u({
              baseCode: e,
              guildScheduledEventId: l(t)
          });
}
function l(e) {
    let t = '?' === e.charAt(0) ? e.substring(1) : e;
    try {
        let e = i.parse(t);
        return (0, a.d)(e[o]);
    } catch (e) {
        return;
    }
}
function u(e) {
    let { baseCode: t, guildScheduledEventId: n } = e;
    return null == n ? t : ''.concat(t, '?').concat(o, '=').concat(n);
}
function c(e) {
    let [t, n] = e.split('?');
    if (null == n) return { baseCode: t };
    let r = i.parse(n);
    return {
        baseCode: t,
        guildScheduledEventId: (0, a.d)(r[o])
    };
}
function d(e) {
    let [t] = e.split('?');
    return t;
}
