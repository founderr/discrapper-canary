var n = 'undefined' != typeof Element,
    r = 'function' == typeof Map,
    i = 'function' == typeof Set,
    a = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView;
function s(e, o) {
    if (e === o) return !0;
    if (e && o && 'object' == typeof e && 'object' == typeof o) {
        var l, u, c, d;
        if (e.constructor !== o.constructor) return !1;
        if (Array.isArray(e)) {
            if ((l = e.length) != o.length) return !1;
            for (u = l; 0 != u--; ) if (!s(e[u], o[u])) return !1;
            return !0;
        }
        if (r && e instanceof Map && o instanceof Map) {
            if (e.size !== o.size) return !1;
            for (d = e.entries(); !(u = d.next()).done; ) if (!o.has(u.value[0])) return !1;
            for (d = e.entries(); !(u = d.next()).done; ) if (!s(u.value[1], o.get(u.value[0]))) return !1;
            return !0;
        }
        if (i && e instanceof Set && o instanceof Set) {
            if (e.size !== o.size) return !1;
            for (d = e.entries(); !(u = d.next()).done; ) if (!o.has(u.value[0])) return !1;
            return !0;
        }
        if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(o)) {
            if ((l = e.length) != o.length) return !1;
            for (u = l; 0 != u--; ) if (e[u] !== o[u]) return !1;
            return !0;
        }
        if (e.constructor === RegExp) return e.source === o.source && e.flags === o.flags;
        if (e.valueOf !== Object.prototype.valueOf && 'function' == typeof e.valueOf && 'function' == typeof o.valueOf) return e.valueOf() === o.valueOf();
        if (e.toString !== Object.prototype.toString && 'function' == typeof e.toString && 'function' == typeof o.toString) return e.toString() === o.toString();
        if ((l = (c = Object.keys(e)).length) !== Object.keys(o).length) return !1;
        for (u = l; 0 != u--; ) if (!Object.prototype.hasOwnProperty.call(o, c[u])) return !1;
        if (n && e instanceof Element) return !1;
        for (u = l; 0 != u--; ) {
            if (('_owner' !== c[u] && '__v' !== c[u] && '__o' !== c[u]) || !e.$$typeof) {
                if (!s(e[c[u]], o[c[u]])) return !1;
            }
        }
        return !0;
    }
    return e != e && o != o;
}
e.exports = function (e, n) {
    try {
        return s(e, n);
    } catch (e) {
        if ((e.message || '').match(/stack|recursion/i)) return console.warn('react-fast-compare cannot handle circular refs'), !1;
        throw e;
    }
};
