r.d(t, {
    EN: function () {
        return c;
    },
    IQ: function () {
        return s;
    },
    bU: function () {
        return o;
    }
});
var a = r(176984),
    n = r(573736),
    _ = r(622916);
let o = 'baggage',
    E = 'sentry-',
    i = /^sentry-/;
function c(e) {
    let t = (function (e) {
        return e && ((0, n.HD)(e) || Array.isArray(e))
            ? Array.isArray(e)
                ? e.reduce(
                      (e, t) => (
                          Object.entries(l(t)).forEach(([t, r]) => {
                              e[t] = r;
                          }),
                          e
                      ),
                      {}
                  )
                : l(e)
            : void 0;
    })(e);
    if (!t) return;
    let r = Object.entries(t).reduce((e, [t, r]) => (t.match(i) && (e[t.slice(E.length)] = r), e), {});
    return Object.keys(r).length > 0 ? r : void 0;
}
function s(e) {
    if (!!e)
        return (function (e) {
            if (0 !== Object.keys(e).length)
                return Object.entries(e).reduce((e, [t, r], n) => {
                    let o = `${encodeURIComponent(t)}=${encodeURIComponent(r)}`,
                        E = 0 === n ? o : `${e},${o}`;
                    return E.length > 8192 ? (a.X && _.kg.warn(`Not adding key: ${t} with val: ${r} to baggage header due to exceeding baggage size limits.`), e) : E;
                }, '');
        })(Object.entries(e).reduce((e, [t, r]) => (r && (e[`${E}${t}`] = r), e), {}));
}
function l(e) {
    return e
        .split(',')
        .map((e) => e.split('=').map((e) => decodeURIComponent(e.trim())))
        .reduce((e, [t, r]) => (t && r && (e[t] = r), e), {});
}
