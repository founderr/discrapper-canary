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
var n = r(309544),
    a = r(573736),
    _ = r(622916);
let o = 'baggage',
    i = 'sentry-',
    E = /^sentry-/;
function c(e) {
    let t = (function (e) {
        return e && ((0, a.HD)(e) || Array.isArray(e))
            ? Array.isArray(e)
                ? e.reduce(
                      (e, t) => (
                          Object.entries(I(t)).forEach(([t, r]) => {
                              e[t] = r;
                          }),
                          e
                      ),
                      {}
                  )
                : I(e)
            : void 0;
    })(e);
    if (!t) return;
    let r = Object.entries(t).reduce((e, [t, r]) => (t.match(E) && (e[t.slice(i.length)] = r), e), {});
    return Object.keys(r).length > 0 ? r : void 0;
}
function s(e) {
    if (!!e)
        return (function (e) {
            if (0 !== Object.keys(e).length)
                return Object.entries(e).reduce((e, [t, r], a) => {
                    let o = `${encodeURIComponent(t)}=${encodeURIComponent(r)}`,
                        i = 0 === a ? o : `${e},${o}`;
                    return i.length > 8192 ? (n.X && _.kg.warn(`Not adding key: ${t} with val: ${r} to baggage header due to exceeding baggage size limits.`), e) : i;
                }, '');
        })(Object.entries(e).reduce((e, [t, r]) => (r && (e[`${i}${t}`] = r), e), {}));
}
function I(e) {
    return e
        .split(',')
        .map((e) => e.split('=').map((e) => decodeURIComponent(e.trim())))
        .reduce((e, [t, r]) => (t && r && (e[t] = r), e), {});
}
