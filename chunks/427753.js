var t = 'undefined' != typeof Element,
    n = 'function' == typeof Map,
    r = 'function' == typeof Set,
    i = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView;
function a(e, o) {
    if (e === o) return !0;
    if (e && o && 'object' == typeof e && 'object' == typeof o) {
        var s, l, u, c;
        if (e.constructor !== o.constructor) return !1;
        if (Array.isArray(e)) {
            if ((s = e.length) != o.length) return !1;
            for (l = s; 0 != l--; ) if (!a(e[l], o[l])) return !1;
            return !0;
        }
        if (n && e instanceof Map && o instanceof Map) {
            if (e.size !== o.size) return !1;
            for (c = e.entries(); !(l = c.next()).done; ) if (!o.has(l.value[0])) return !1;
            for (c = e.entries(); !(l = c.next()).done; ) if (!a(l.value[1], o.get(l.value[0]))) return !1;
            return !0;
        }
        if (r && e instanceof Set && o instanceof Set) {
            if (e.size !== o.size) return !1;
            for (c = e.entries(); !(l = c.next()).done; ) if (!o.has(l.value[0])) return !1;
            return !0;
        }
        if (i && ArrayBuffer.isView(e) && ArrayBuffer.isView(o)) {
            if ((s = e.length) != o.length) return !1;
            for (l = s; 0 != l--; ) if (e[l] !== o[l]) return !1;
            return !0;
        }
        if (e.constructor === RegExp) return e.source === o.source && e.flags === o.flags;
        if (e.valueOf !== Object.prototype.valueOf && 'function' == typeof e.valueOf && 'function' == typeof o.valueOf) return e.valueOf() === o.valueOf();
        if (e.toString !== Object.prototype.toString && 'function' == typeof e.toString && 'function' == typeof o.toString) return e.toString() === o.toString();
        if ((s = (u = Object.keys(e)).length) !== Object.keys(o).length) return !1;
        for (l = s; 0 != l--; ) if (!Object.prototype.hasOwnProperty.call(o, u[l])) return !1;
        if (t && e instanceof Element) return !1;
        for (l = s; 0 != l--; ) {
            if (('_owner' !== u[l] && '__v' !== u[l] && '__o' !== u[l]) || !e.$$typeof) {
                if (!a(e[u[l]], o[u[l]])) return !1;
            }
        }
        return !0;
    }
    return e != e && o != o;
}
e.exports = function (e, t) {
    try {
        return a(e, t);
    } catch (e) {
        if ((e.message || '').match(/stack|recursion/i)) return console.warn('react-fast-compare cannot handle circular refs'), !1;
        throw e;
    }
};
