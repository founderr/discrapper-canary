r.d(t, {
    DM: function () {
        return i;
    },
    Db: function () {
        return s;
    },
    EG: function () {
        return c;
    },
    YO: function () {
        return u;
    },
    go: function () {
        return I;
    },
    jH: function () {
        return E;
    },
    lE: function () {
        return l;
    }
});
var n = r(370336),
    a = r(886115),
    o = r(899517);
function i() {
    let e = o.n,
        t = e.crypto || e.msCrypto,
        r = () => 16 * Math.random();
    try {
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, '');
        t &&
            t.getRandomValues &&
            (r = () => {
                let e = new Uint8Array(1);
                return t.getRandomValues(e), e[0];
            });
    } catch (e) {}
    return '10000000100040008000100000000000'.replace(/[018]/g, (e) => (e ^ ((15 & r()) >> (e / 4))).toString(16));
}
function _(e) {
    return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function E(e) {
    let { message: t, event_id: r } = e;
    if (t) return t;
    let n = _(e);
    if (n) return n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || '<unknown>';
    return r || '<unknown>';
}
function s(e, t, r) {
    let n = (e.exception = e.exception || {}),
        a = (n.values = n.values || []),
        o = (a[0] = a[0] || {});
    !o.value && (o.value = t || ''), !o.type && (o.type = r || 'Error');
}
function c(e, t) {
    let r = _(e);
    if (!r) return;
    let n = r.mechanism;
    if (
        ((r.mechanism = {
            type: 'generic',
            handled: !0,
            ...n,
            ...t
        }),
        t && 'data' in t)
    ) {
        let e = {
            ...(n && n.data),
            ...t.data
        };
        r.mechanism.data = e;
    }
}
function I(e, t, r = 5) {
    if (void 0 === t.lineno) return;
    let n = e.length,
        o = Math.max(Math.min(n - 1, t.lineno - 1), 0);
    t.pre_context = e.slice(Math.max(0, o - r), o).map((e) => (0, a.JM)(e, 0));
    let i = Math.min(n - 1, o);
    (t.context_line = (0, a.JM)(e[i], t.colno || 0)), (t.post_context = e.slice(Math.min(o + 1, n), o + 1 + r).map((e) => (0, a.JM)(e, 0)));
}
function u(e) {
    if (e && e.__sentry_captured__) return !0;
    try {
        (0, n.xp)(e, '__sentry_captured__', !0);
    } catch (e) {}
    return !1;
}
function l(e) {
    return Array.isArray(e) ? e : [e];
}
