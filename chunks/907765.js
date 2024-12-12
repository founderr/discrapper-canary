r.d(t, {
    R: function () {
        return E;
    }
});
var a = r(622916),
    n = r(688838),
    _ = r(151122),
    o = r(255768);
let E = (0, _._I)(() => {
    let e;
    return {
        name: 'Dedupe',
        processEvent(t) {
            if (t.type) return t;
            try {
                if (
                    (function (e, t) {
                        return (
                            !!t &&
                            (!!(
                                (function (e, t) {
                                    let r = e.message,
                                        a = t.message;
                                    return !!((r || a) && (!r || a) && (r || !a) && r === a && c(e, t) && i(e, t)) || !1;
                                })(e, t) ||
                                (function (e, t) {
                                    let r = s(t),
                                        a = s(e);
                                    return !!(r && a && r.type === a.type && r.value === a.value && c(e, t) && i(e, t)) || !1;
                                })(e, t)
                            ) ||
                                !1)
                        );
                    })(t, e)
                )
                    return o.X && a.kg.warn('Event dropped due to being a duplicate of previously captured event.'), null;
            } catch (e) {}
            return (e = t);
        }
    };
});
function i(e, t) {
    let r = (0, n.Fr)(e),
        a = (0, n.Fr)(t);
    if (!r && !a) return !0;
    if ((r && !a) || (!r && a)) return !1;
    if (a.length !== r.length) return !1;
    for (let e = 0; e < a.length; e++) {
        let t = a[e],
            n = r[e];
        if (t.filename !== n.filename || t.lineno !== n.lineno || t.colno !== n.colno || t.function !== n.function) return !1;
    }
    return !0;
}
function c(e, t) {
    let r = e.fingerprint,
        a = t.fingerprint;
    if (!r && !a) return !0;
    if ((r && !a) || (!r && a)) return !1;
    try {
        return !(r.join('') !== a.join(''));
    } catch (e) {
        return !1;
    }
}
function s(e) {
    return e.exception && e.exception.values && e.exception.values[0];
}
