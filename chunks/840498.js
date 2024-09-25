n.d(t, {
    RA: function () {
        return l;
    },
    Rp: function () {
        return u;
    },
    ge: function () {
        return o;
    }
});
var r = n(653041);
function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return Array.isArray(e) ? e.forEach((e) => i(e, t)) : 'string' == typeof e.content ? t.push(e.content) : null != e.content && i(e.content, t), t;
}
function a(e, t) {
    if (Array.isArray(t)) {
        let { length: n } = t;
        for (let r = 0; r < n; r++) e.push(t[r]);
        return;
    }
    e.push(t);
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (Array.isArray(e)) {
        let n = e.length,
            r = [];
        for (let i = 0; i < n; i++) a(r, o(e[i], t));
        return r;
    }
    return (null != e.content && (e.content = o(e.content, e)), 'list' === e.type && (e.items = e.items.map((e) => (Array.isArray(e) ? o(e, null) : e))), null != t && e.type === t.type) ? e.content : e;
}
let s = {};
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: 200 };
    if (Array.isArray(e)) {
        let n = e.length;
        for (let r = 0; r < n; r++) {
            let n = l(e[r], t);
            if (n === s) {
                e.length = r;
                break;
            }
            e[r] = n;
        }
    } else if ('text' !== e.type) {
        if (((t.limit -= 1), t.limit <= 0)) return s;
        Array.isArray(e.content) && (e.content = l(e.content, t)), 'list' === e.type && (e.items = e.items.map((e) => l(e, t)));
    }
    return e;
}
function u(e) {
    return i(e).join('');
}
