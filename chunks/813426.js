var r = 'function' == typeof Map && Map.prototype,
    i = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null,
    a = r && i && 'function' == typeof i.get ? i.get : null,
    o = r && Map.prototype.forEach,
    s = 'function' == typeof Set && Set.prototype,
    l = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null,
    u = s && l && 'function' == typeof l.get ? l.get : null,
    c = s && Set.prototype.forEach,
    d = 'function' == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
    _ = 'function' == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
    E = 'function' == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
    f = Boolean.prototype.valueOf,
    h = Object.prototype.toString,
    p = Function.prototype.toString,
    m = String.prototype.match,
    I = String.prototype.slice,
    T = String.prototype.replace,
    g = String.prototype.toUpperCase,
    S = String.prototype.toLowerCase,
    A = RegExp.prototype.test,
    v = Array.prototype.concat,
    N = Array.prototype.join,
    O = Array.prototype.slice,
    R = Math.floor,
    C = 'function' == typeof BigInt ? BigInt.prototype.valueOf : null,
    y = Object.getOwnPropertySymbols,
    L = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? Symbol.prototype.toString : null,
    b = 'function' == typeof Symbol && 'object' == typeof Symbol.iterator,
    D = 'function' == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === b ? 'object' : 'symbol') ? Symbol.toStringTag : null,
    M = Object.prototype.propertyIsEnumerable,
    P =
        ('function' == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
            ? function (e) {
                  return e.__proto__;
              }
            : null);
function U(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1000 && e < 1000) || A.call(/e/, t)) return t;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ('number' == typeof e) {
        var r = e < 0 ? -R(-e) : R(e);
        if (r !== e) {
            var i = String(r),
                a = I.call(t, i.length + 1);
            return T.call(i, n, '$&_') + '.' + T.call(T.call(a, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return T.call(t, n, '$&_');
}
var w = n(771673),
    x = w.custom,
    G = K(x) ? x : null;
function k(e, t, n) {
    var r = 'double' === (n.quoteStyle || t) ? '"' : "'";
    return r + e + r;
}
function B(e) {
    return T.call(String(e), /"/g, '&quot;');
}
function F(e) {
    return '[object Array]' === X(e) && (!D || !('object' == typeof e && D in e));
}
function Z(e) {
    return '[object Date]' === X(e) && (!D || !('object' == typeof e && D in e));
}
function V(e) {
    return '[object RegExp]' === X(e) && (!D || !('object' == typeof e && D in e));
}
function H(e) {
    return '[object Error]' === X(e) && (!D || !('object' == typeof e && D in e));
}
function Y(e) {
    return '[object String]' === X(e) && (!D || !('object' == typeof e && D in e));
}
function j(e) {
    return '[object Number]' === X(e) && (!D || !('object' == typeof e && D in e));
}
function W(e) {
    return '[object Boolean]' === X(e) && (!D || !('object' == typeof e && D in e));
}
function K(e) {
    if (b) return e && 'object' == typeof e && e instanceof Symbol;
    if ('symbol' == typeof e) return !0;
    if (!e || 'object' != typeof e || !L) return !1;
    try {
        return L.call(e), !0;
    } catch (e) {}
    return !1;
}
function z(e) {
    if (!e || 'object' != typeof e || !C) return !1;
    try {
        return C.call(e), !0;
    } catch (e) {}
    return !1;
}
e.exports = function e(t, r, i, s) {
    var l = r || {};
    if (Q(l, 'quoteStyle') && 'single' !== l.quoteStyle && 'double' !== l.quoteStyle) throw TypeError('option "quoteStyle" must be "single" or "double"');
    if (Q(l, 'maxStringLength') && ('number' == typeof l.maxStringLength ? l.maxStringLength < 0 && l.maxStringLength !== 1 / 0 : null !== l.maxStringLength)) throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var d = !Q(l, 'customInspect') || l.customInspect;
    if ('boolean' != typeof d && 'symbol' !== d) throw TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    if (Q(l, 'indent') && null !== l.indent && '\t' !== l.indent && !(parseInt(l.indent, 10) === l.indent && l.indent > 0)) throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Q(l, 'numericSeparator') && 'boolean' != typeof l.numericSeparator) throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var _ = l.numericSeparator;
    if (void 0 === t) return 'undefined';
    if (null === t) return 'null';
    if ('boolean' == typeof t) return t ? 'true' : 'false';
    if ('string' == typeof t) return eo(t, l);
    if ('number' == typeof t) {
        if (0 === t) return 1 / 0 / t > 0 ? '0' : '-0';
        var E = String(t);
        return _ ? U(t, E) : E;
    }
    if ('bigint' == typeof t) {
        var h = String(t) + 'n';
        return _ ? U(t, h) : h;
    }
    var p = void 0 === l.depth ? 5 : l.depth;
    if ((void 0 === i && (i = 0), i >= p && p > 0 && 'object' == typeof t)) return F(t) ? '[Array]' : '[Object]';
    var m = e_(l, i);
    if (void 0 === s) s = [];
    else if (J(s, t) >= 0) return '[Circular]';
    function g(t, n, r) {
        if ((n && (s = O.call(s)).push(n), r)) {
            var a = { depth: l.depth };
            return Q(l, 'quoteStyle') && (a.quoteStyle = l.quoteStyle), e(t, a, i + 1, s);
        }
        return e(t, l, i + 1, s);
    }
    if ('function' == typeof t && !V(t)) {
        var A = $(t),
            R = ef(t, g);
        return '[Function' + (A ? ': ' + A : ' (anonymous)') + ']' + (R.length > 0 ? ' { ' + N.call(R, ', ') + ' }' : '');
    }
    if (K(t)) {
        var y = b ? T.call(String(t), /^(Symbol\(.*\))_[^)]*$/, '$1') : L.call(t);
        return 'object' != typeof t || b ? y : el(y);
    }
    if (ea(t)) {
        for (var x = '<' + S.call(String(t.nodeName)), q = t.attributes || [], es = 0; es < q.length; es++) x += ' ' + q[es].name + '=' + k(B(q[es].value), 'double', l);
        return (x += '>'), t.childNodes && t.childNodes.length && (x += '...'), (x += '</' + S.call(String(t.nodeName)) + '>');
    }
    if (F(t)) {
        if (0 === t.length) return '[]';
        var eh = ef(t, g);
        return m && !ed(eh) ? '[' + eE(eh, m) + ']' : '[ ' + N.call(eh, ', ') + ' ]';
    }
    if (H(t)) {
        var ep = ef(t, g);
        return 'cause' in Error.prototype || !('cause' in t) || M.call(t, 'cause') ? (0 === ep.length ? '[' + String(t) + ']' : '{ [' + String(t) + '] ' + N.call(ep, ', ') + ' }') : '{ [' + String(t) + '] ' + N.call(v.call('[cause]: ' + g(t.cause), ep), ', ') + ' }';
    }
    if ('object' == typeof t && d) {
        if (G && 'function' == typeof t[G] && w) return w(t, { depth: p - i });
        if ('symbol' !== d && 'function' == typeof t.inspect) return t.inspect();
    }
    if (ee(t)) {
        var em = [];
        return (
            o &&
                o.call(t, function (e, n) {
                    em.push(g(n, t, !0) + ' => ' + g(e, t));
                }),
            ec('Map', a.call(t), em, m)
        );
    }
    if (er(t)) {
        var eI = [];
        return (
            c &&
                c.call(t, function (e) {
                    eI.push(g(e, t));
                }),
            ec('Set', u.call(t), eI, m)
        );
    }
    if (et(t)) return eu('WeakMap');
    if (ei(t)) return eu('WeakSet');
    if (en(t)) return eu('WeakRef');
    if (j(t)) return el(g(Number(t)));
    if (z(t)) return el(g(C.call(t)));
    if (W(t)) return el(f.call(t));
    if (Y(t)) return el(g(String(t)));
    if ('undefined' != typeof window && t === window) return '{ [object Window] }';
    if (t === n.g) return '{ [object globalThis] }';
    if (!Z(t) && !V(t)) {
        var eT = ef(t, g),
            eg = P ? P(t) === Object.prototype : t instanceof Object || t.constructor === Object,
            eS = t instanceof Object ? '' : 'null prototype',
            eA = !eg && D && Object(t) === t && D in t ? I.call(X(t), 8, -1) : eS ? 'Object' : '',
            ev = (eg || 'function' != typeof t.constructor ? '' : t.constructor.name ? t.constructor.name + ' ' : '') + (eA || eS ? '[' + N.call(v.call([], eA || [], eS || []), ': ') + '] ' : '');
        return 0 === eT.length ? ev + '{}' : m ? ev + '{' + eE(eT, m) + '}' : ev + '{ ' + N.call(eT, ', ') + ' }';
    }
    return String(t);
};
var q =
    Object.prototype.hasOwnProperty ||
    function (e) {
        return e in this;
    };
function Q(e, t) {
    return q.call(e, t);
}
function X(e) {
    return h.call(e);
}
function $(e) {
    if (e.name) return e.name;
    var t = m.call(p.call(e), /^function\s*([\w$]+)/);
    return t ? t[1] : null;
}
function J(e, t) {
    if (e.indexOf) return e.indexOf(t);
    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
    return -1;
}
function ee(e) {
    if (!a || !e || 'object' != typeof e) return !1;
    try {
        a.call(e);
        try {
            u.call(e);
        } catch (e) {
            return !0;
        }
        return e instanceof Map;
    } catch (e) {}
    return !1;
}
function et(e) {
    if (!d || !e || 'object' != typeof e) return !1;
    try {
        d.call(e, d);
        try {
            _.call(e, _);
        } catch (e) {
            return !0;
        }
        return e instanceof WeakMap;
    } catch (e) {}
    return !1;
}
function en(e) {
    if (!E || !e || 'object' != typeof e) return !1;
    try {
        return E.call(e), !0;
    } catch (e) {}
    return !1;
}
function er(e) {
    if (!u || !e || 'object' != typeof e) return !1;
    try {
        u.call(e);
        try {
            a.call(e);
        } catch (e) {
            return !0;
        }
        return e instanceof Set;
    } catch (e) {}
    return !1;
}
function ei(e) {
    if (!_ || !e || 'object' != typeof e) return !1;
    try {
        _.call(e, _);
        try {
            d.call(e, d);
        } catch (e) {
            return !0;
        }
        return e instanceof WeakSet;
    } catch (e) {}
    return !1;
}
function ea(e) {
    return !!e && 'object' == typeof e && (!!('undefined' != typeof HTMLElement && e instanceof HTMLElement) || ('string' == typeof e.nodeName && 'function' == typeof e.getAttribute));
}
function eo(e, t) {
    if (e.length > t.maxStringLength) {
        var n = e.length - t.maxStringLength,
            r = '... ' + n + ' more character' + (n > 1 ? 's' : '');
        return eo(I.call(e, 0, t.maxStringLength), t) + r;
    }
    return k(T.call(T.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, es), 'single', t);
}
function es(e) {
    var t = e.charCodeAt(0),
        n = {
            8: 'b',
            9: 't',
            10: 'n',
            12: 'f',
            13: 'r'
        }[t];
    return n ? '\\' + n : '\\x' + (t < 16 ? '0' : '') + g.call(t.toString(16));
}
function el(e) {
    return 'Object(' + e + ')';
}
function eu(e) {
    return e + ' { ? }';
}
function ec(e, t, n, r) {
    return e + ' (' + t + ') {' + (r ? eE(n, r) : N.call(n, ', ')) + '}';
}
function ed(e) {
    for (var t = 0; t < e.length; t++) if (J(e[t], '\n') >= 0) return !1;
    return !0;
}
function e_(e, t) {
    var n;
    if ('\t' === e.indent) n = '\t';
    else {
        if ('number' != typeof e.indent || !(e.indent > 0)) return null;
        n = N.call(Array(e.indent + 1), ' ');
    }
    return {
        base: n,
        prev: N.call(Array(t + 1), n)
    };
}
function eE(e, t) {
    if (0 === e.length) return '';
    var n = '\n' + t.prev + t.base;
    return n + N.call(e, ',' + n) + '\n' + t.prev;
}
function ef(e, t) {
    var n,
        r = F(e),
        i = [];
    if (r) {
        i.length = e.length;
        for (var a = 0; a < e.length; a++) i[a] = Q(e, a) ? t(e[a], e) : '';
    }
    var o = 'function' == typeof y ? y(e) : [];
    if (b) {
        n = {};
        for (var s = 0; s < o.length; s++) n['$' + o[s]] = o[s];
    }
    for (var l in e) {
        if (!Q(e, l) || (r && String(Number(l)) === l && l < e.length)) continue;
        if (!(b && n['$' + l] instanceof Symbol)) A.call(/[^\w$]/, l) ? i.push(t(l, e) + ': ' + t(e[l], e)) : i.push(l + ': ' + t(e[l], e));
    }
    if ('function' == typeof y) for (var u = 0; u < o.length; u++) M.call(e, o[u]) && i.push('[' + t(o[u]) + ']: ' + t(e[o[u]], e));
    return i;
}
