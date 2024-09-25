n.d(t, {
    B: function () {
        return r;
    },
    Z: function () {
        return T;
    }
});
var r,
    i = n(653041);
var a = n(47120);
var o = n(411104);
var s = n(536895);
function l(e, t) {
    return e.findIndex((e) => t === e.key);
}
function u(e) {
    return e.focusPath[e.focusPath.length - 1];
}
function c(e) {
    let t = e.items;
    for (let n = 0; n < e.focusPath.length - 1; n++) {
        if (null == t) return;
        let r = l(t, e.focusPath[n]);
        t = t[r].children;
    }
    return t;
}
function d(e, t) {
    let n = e,
        r = [];
    for (let e = 0; e < t.length && null != n; e++) {
        let i = t[e],
            a = l(n, i);
        if (a < 0 || a >= n.length) {
            let e = n[0];
            null != e && r.push(e.key);
            break;
        }
        r.push(i), (n = n[a].children);
    }
    return r;
}
function _(e, t) {
    let { items: n } = t,
        r = {
            ...e,
            items: n,
            focusPath: d(n, e.focusPath)
        };
    return {
        ...r,
        focusIndex: I(r)
    };
}
function E(e, t) {
    let { path: n } = t,
        r = {
            ...e,
            focusPath: d(e.items, n)
        };
    return {
        ...r,
        focusIndex: I(r)
    };
}
function f(e, t) {
    let n = u(e),
        r = c(e);
    if (null == r) return e;
    let i = (l(r, n) - 1) % r.length;
    if ((i < 0 && (i = r.length - 1), null == r[i])) return e;
    let a = {
        ...e,
        focusPath: [...e.focusPath.slice(0, -1), r[i].key]
    };
    return {
        ...a,
        focusIndex: I(a)
    };
}
function h(e, t) {
    let n = u(e),
        r = c(e);
    if (null == r) return e;
    let i = (l(r, n) + 1) % r.length;
    if (null == r[i]) return e;
    let a = {
        ...e,
        focusPath: [...e.focusPath.slice(0, -1), r[i].key]
    };
    return {
        ...a,
        focusIndex: I(a)
    };
}
function p(e, t) {
    var n;
    let r = u(e),
        i = c(e);
    if (null == i) return e;
    let a = i[l(i, r)],
        o = null == a ? void 0 : null === (n = a.children) || void 0 === n ? void 0 : n[0];
    if (null == o) return e;
    let s = {
        ...e,
        focusPath: [...e.focusPath, o.key]
    };
    return {
        ...s,
        focusIndex: I(s)
    };
}
function m(e, t) {
    if (e.focusPath.length <= 1) return e;
    let n = {
        ...e,
        focusPath: e.focusPath.slice(0, -1)
    };
    return {
        ...n,
        focusIndex: I(n)
    };
}
function I(e) {
    let t = u(e),
        n = c(e);
    return null == n ? -1 : l(n, t);
}
function T(e, t) {
    switch (t.type) {
        case s.Us.NAVIGATE_UP:
            return f(e, t);
        case s.Us.NAVIGATE_DOWN:
            return h(e, t);
        case s.Us.NAVIGATE_IN:
            return p(e, t);
        case s.Us.NAVIGATE_OUT:
            return m(e, t);
        case 'UPDATE_ITEMS':
            return _(e, t);
        case 'SET_FOCUS_PATH':
            return E(e, t);
        case s.Us.SELECT_FOCUSED_ITEM:
            break;
        default:
            throw Error('Menu navigator was given an unhandled action '.concat(t.type));
    }
    return e;
}
!(function (e) {
    (e.UPDATE_ITEMS = 'UPDATE_ITEMS'), (e.SET_FOCUS_PATH = 'SET_FOCUS_PATH');
})(r || (r = {}));
