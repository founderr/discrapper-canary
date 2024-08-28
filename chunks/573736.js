r.d(t, {
    Cy: function () {
        return d;
    },
    HD: function () {
        return s;
    },
    J8: function () {
        return T;
    },
    Kj: function () {
        return A;
    },
    Le: function () {
        return c;
    },
    PO: function () {
        return u;
    },
    TX: function () {
        return _;
    },
    V9: function () {
        return N;
    },
    VW: function () {
        return i;
    },
    VZ: function () {
        return a;
    },
    cO: function () {
        return l;
    },
    fm: function () {
        return E;
    },
    kK: function () {
        return R;
    },
    pt: function () {
        return I;
    },
    y1: function () {
        return p;
    }
});
let n = Object.prototype.toString;
function a(e) {
    switch (n.call(e)) {
        case '[object Error]':
        case '[object Exception]':
        case '[object DOMException]':
            return !0;
        default:
            return N(e, Error);
    }
}
function o(e, t) {
    return n.call(e) === `[object ${t}]`;
}
function i(e) {
    return o(e, 'ErrorEvent');
}
function _(e) {
    return o(e, 'DOMError');
}
function E(e) {
    return o(e, 'DOMException');
}
function s(e) {
    return o(e, 'String');
}
function c(e) {
    return 'object' == typeof e && null !== e && '__sentry_template_string__' in e && '__sentry_template_values__' in e;
}
function I(e) {
    return null === e || c(e) || ('object' != typeof e && 'function' != typeof e);
}
function u(e) {
    return o(e, 'Object');
}
function l(e) {
    return 'undefined' != typeof Event && N(e, Event);
}
function R(e) {
    return 'undefined' != typeof Element && N(e, Element);
}
function A(e) {
    return o(e, 'RegExp');
}
function T(e) {
    return !!(e && e.then && 'function' == typeof e.then);
}
function d(e) {
    return u(e) && 'nativeEvent' in e && 'preventDefault' in e && 'stopPropagation' in e;
}
function N(e, t) {
    try {
        return e instanceof t;
    } catch (e) {
        return !1;
    }
}
function p(e) {
    return !!('object' == typeof e && null !== e && (e.__isVue || e._isVue));
}
