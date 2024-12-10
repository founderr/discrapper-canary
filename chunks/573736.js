n.d(e, {
    HD: function () {
        return o;
    },
    J8: function () {
        return _;
    },
    Kj: function () {
        return h;
    },
    PO: function () {
        return u;
    },
    V9: function () {
        return d;
    },
    VZ: function () {
        return i;
    },
    cO: function () {
        return c;
    },
    kK: function () {
        return a;
    },
    y1: function () {
        return p;
    }
});
let r = Object.prototype.toString;
function i(t) {
    switch (r.call(t)) {
        case '[object Error]':
        case '[object Exception]':
        case '[object DOMException]':
            return !0;
        default:
            return d(t, Error);
    }
}
function s(t, e) {
    return r.call(t) === `[object ${e}]`;
}
function o(t) {
    return s(t, 'String');
}
function u(t) {
    return s(t, 'Object');
}
function c(t) {
    return 'undefined' != typeof Event && d(t, Event);
}
function a(t) {
    return 'undefined' != typeof Element && d(t, Element);
}
function h(t) {
    return s(t, 'RegExp');
}
function _(t) {
    return !!(t && t.then && 'function' == typeof t.then);
}
function d(t, e) {
    try {
        return t instanceof e;
    } catch (t) {
        return !1;
    }
}
function p(t) {
    return !!('object' == typeof t && null !== t && (t.__isVue || t._isVue));
}
