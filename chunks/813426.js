var r = 'function' == typeof Map && Map.prototype,
    i = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null,
    a = r && i && 'function' == typeof i.get ? i.get : null,
    s = r && Map.prototype.forEach,
    o = 'function' == typeof Set && Set.prototype,
    l = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null,
    u = o && l && 'function' == typeof l.get ? l.get : null,
    c = o && Set.prototype.forEach,
    d = 'function' == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
    f = 'function' == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
    _ = 'function' == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
    h = Boolean.prototype.valueOf,
    p = Object.prototype.toString,
    m = Function.prototype.toString,
    g = String.prototype.match,
    E = String.prototype.slice,
    v = String.prototype.replace,
    I = String.prototype.toUpperCase,
    S = String.prototype.toLowerCase,
    T = RegExp.prototype.test,
    b = Array.prototype.concat,
    y = Array.prototype.join,
    A = Array.prototype.slice,
    N = Math.floor,
    C = 'function' == typeof BigInt ? BigInt.prototype.valueOf : null,
    R = Object.getOwnPropertySymbols,
    O = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? Symbol.prototype.toString : null,
    D = 'function' == typeof Symbol && 'object' == typeof Symbol.iterator,
    L = 'function' == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === D ? 'object' : 'symbol') ? Symbol.toStringTag : null,
    x = Object.prototype.propertyIsEnumerable,
    w =
        ('function' == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
            ? function (e) {
                  return e.__proto__;
              }
            : null);
function M(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1000 && e < 1000) || T.call(/e/, t)) return t;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ('number' == typeof e) {
        var r = e < 0 ? -N(-e) : N(e);
        if (r !== e) {
            var i = String(r),
                a = E.call(t, i.length + 1);
            return v.call(i, n, '$&_') + '.' + v.call(v.call(a, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return v.call(t, n, '$&_');
}
var P = n(771673),
    k = P.custom,
    U = F(k) ? k : null;
function G(e, t, n) {
    var r = 'double' === (n.quoteStyle || t) ? '"' : "'";
    return r + e + r;
}
e.exports = function e(t, r, i, o) {
    var l = r || {};
    if (H(l, 'quoteStyle') && 'single' !== l.quoteStyle && 'double' !== l.quoteStyle) throw TypeError('option "quoteStyle" must be "single" or "double"');
    if (H(l, 'maxStringLength') && ('number' == typeof l.maxStringLength ? l.maxStringLength < 0 && l.maxStringLength !== 1 / 0 : null !== l.maxStringLength)) throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var p = !H(l, 'customInspect') || l.customInspect;
    if ('boolean' != typeof p && 'symbol' !== p) throw TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    if (H(l, 'indent') && null !== l.indent && '\t' !== l.indent && !(parseInt(l.indent, 10) === l.indent && l.indent > 0)) throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (H(l, 'numericSeparator') && 'boolean' != typeof l.numericSeparator) throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var I = l.numericSeparator;
    if (void 0 === t) return 'undefined';
    if (null === t) return 'null';
    if ('boolean' == typeof t) return t ? 'true' : 'false';
    if ('string' == typeof t)
        return (function e(t, n) {
            if (t.length > n.maxStringLength) {
                var r = t.length - n.maxStringLength;
                return e(E.call(t, 0, n.maxStringLength), n) + ('... ' + r + ' more character') + (r > 1 ? 's' : '');
            }
            return G(v.call(v.call(t, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, W), 'single', n);
        })(t, l);
    if ('number' == typeof t) {
        if (0 === t) return 1 / 0 / t > 0 ? '0' : '-0';
        var T = String(t);
        return I ? M(t, T) : T;
    }
    if ('bigint' == typeof t) {
        var N = String(t) + 'n';
        return I ? M(t, N) : N;
    }
    var R = void 0 === l.depth ? 5 : l.depth;
    if ((void 0 === i && (i = 0), i >= R && R > 0 && 'object' == typeof t)) return B(t) ? '[Array]' : '[Object]';
    var k = (function (e, t) {
        var n;
        if ('\t' === e.indent) n = '\t';
        else {
            if ('number' != typeof e.indent || !(e.indent > 0)) return null;
            n = y.call(Array(e.indent + 1), ' ');
        }
        return {
            base: n,
            prev: y.call(Array(t + 1), n)
        };
    })(l, i);
    if (void 0 === o) o = [];
    else if (Y(o, t) >= 0) return '[Circular]';
    function V(t, n, r) {
        if ((n && (o = A.call(o)).push(n), r)) {
            var a = { depth: l.depth };
            return H(l, 'quoteStyle') && (a.quoteStyle = l.quoteStyle), e(t, a, i + 1, o);
        }
        return e(t, l, i + 1, o);
    }
    if ('function' == typeof t && !Z(t)) {
        var J = (function (e) {
                if (e.name) return e.name;
                var t = g.call(m.call(e), /^function\s*([\w$]+)/);
                return t ? t[1] : null;
            })(t),
            $ = X(t, V);
        return '[Function' + (J ? ': ' + J : ' (anonymous)') + ']' + ($.length > 0 ? ' { ' + y.call($, ', ') + ' }' : '');
    }
    if (F(t)) {
        var ee = D ? v.call(String(t), /^(Symbol\(.*\))_[^)]*$/, '$1') : O.call(t);
        return 'object' != typeof t || D ? ee : K(ee);
    }
    if (
        (function (e) {
            return !!e && 'object' == typeof e && (!!('undefined' != typeof HTMLElement && e instanceof HTMLElement) || ('string' == typeof e.nodeName && 'function' == typeof e.getAttribute));
        })(t)
    ) {
        for (var et = '<' + S.call(String(t.nodeName)), en = t.attributes || [], er = 0; er < en.length; er++)
            et +=
                ' ' +
                en[er].name +
                '=' +
                G(
                    (function (e) {
                        return v.call(String(e), /"/g, '&quot;');
                    })(en[er].value),
                    'double',
                    l
                );
        return (et += '>'), t.childNodes && t.childNodes.length && (et += '...'), (et += '</' + S.call(String(t.nodeName)) + '>');
    }
    if (B(t)) {
        if (0 === t.length) return '[]';
        var ei = X(t, V);
        return k &&
            !(function (e) {
                for (var t = 0; t < e.length; t++) if (Y(e[t], '\n') >= 0) return !1;
                return !0;
            })(ei)
            ? '[' + Q(ei, k) + ']'
            : '[ ' + y.call(ei, ', ') + ' ]';
    }
    if (
        (function (e) {
            return '[object Error]' === j(e) && (!L || !('object' == typeof e && L in e));
        })(t)
    ) {
        var ea = X(t, V);
        return 'cause' in Error.prototype || !('cause' in t) || x.call(t, 'cause') ? (0 === ea.length ? '[' + String(t) + ']' : '{ [' + String(t) + '] ' + y.call(ea, ', ') + ' }') : '{ [' + String(t) + '] ' + y.call(b.call('[cause]: ' + V(t.cause), ea), ', ') + ' }';
    }
    if ('object' == typeof t && p) {
        if (U && 'function' == typeof t[U] && P) return P(t, { depth: R - i });
        if ('symbol' !== p && 'function' == typeof t.inspect) return t.inspect();
    }
    if (
        (function (e) {
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
        })(t)
    ) {
        var es = [];
        return (
            s &&
                s.call(t, function (e, n) {
                    es.push(V(n, t, !0) + ' => ' + V(e, t));
                }),
            q('Map', a.call(t), es, k)
        );
    }
    if (
        (function (e) {
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
        })(t)
    ) {
        var eo = [];
        return (
            c &&
                c.call(t, function (e) {
                    eo.push(V(e, t));
                }),
            q('Set', u.call(t), eo, k)
        );
    }
    if (
        (function (e) {
            if (!d || !e || 'object' != typeof e) return !1;
            try {
                d.call(e, d);
                try {
                    f.call(e, f);
                } catch (e) {
                    return !0;
                }
                return e instanceof WeakMap;
            } catch (e) {}
            return !1;
        })(t)
    )
        return z('WeakMap');
    if (
        (function (e) {
            if (!f || !e || 'object' != typeof e) return !1;
            try {
                f.call(e, f);
                try {
                    d.call(e, d);
                } catch (e) {
                    return !0;
                }
                return e instanceof WeakSet;
            } catch (e) {}
            return !1;
        })(t)
    )
        return z('WeakSet');
    if (
        (function (e) {
            if (!_ || !e || 'object' != typeof e) return !1;
            try {
                return _.call(e), !0;
            } catch (e) {}
            return !1;
        })(t)
    )
        return z('WeakRef');
    if (
        (function (e) {
            return '[object Number]' === j(e) && (!L || !('object' == typeof e && L in e));
        })(t)
    )
        return K(V(Number(t)));
    if (
        (function (e) {
            if (!e || 'object' != typeof e || !C) return !1;
            try {
                return C.call(e), !0;
            } catch (e) {}
            return !1;
        })(t)
    )
        return K(V(C.call(t)));
    if (
        (function (e) {
            return '[object Boolean]' === j(e) && (!L || !('object' == typeof e && L in e));
        })(t)
    )
        return K(h.call(t));
    if (
        (function (e) {
            return '[object String]' === j(e) && (!L || !('object' == typeof e && L in e));
        })(t)
    )
        return K(V(String(t)));
    if ('undefined' != typeof window && t === window) return '{ [object Window] }';
    if (t === n.g) return '{ [object globalThis] }';
    if (
        !(function (e) {
            return '[object Date]' === j(e) && (!L || !('object' == typeof e && L in e));
        })(t) &&
        !Z(t)
    ) {
        var el = X(t, V),
            eu = w ? w(t) === Object.prototype : t instanceof Object || t.constructor === Object,
            ec = t instanceof Object ? '' : 'null prototype',
            ed = !eu && L && Object(t) === t && L in t ? E.call(j(t), 8, -1) : ec ? 'Object' : '',
            ef = (eu || 'function' != typeof t.constructor ? '' : t.constructor.name ? t.constructor.name + ' ' : '') + (ed || ec ? '[' + y.call(b.call([], ed || [], ec || []), ': ') + '] ' : '');
        return 0 === el.length ? ef + '{}' : k ? ef + '{' + Q(el, k) + '}' : ef + '{ ' + y.call(el, ', ') + ' }';
    }
    return String(t);
};
function B(e) {
    return '[object Array]' === j(e) && (!L || !('object' == typeof e && L in e));
}
function Z(e) {
    return '[object RegExp]' === j(e) && (!L || !('object' == typeof e && L in e));
}
function F(e) {
    if (D) return e && 'object' == typeof e && e instanceof Symbol;
    if ('symbol' == typeof e) return !0;
    if (!e || 'object' != typeof e || !O) return !1;
    try {
        return O.call(e), !0;
    } catch (e) {}
    return !1;
}
var V =
    Object.prototype.hasOwnProperty ||
    function (e) {
        return e in this;
    };
function H(e, t) {
    return V.call(e, t);
}
function j(e) {
    return p.call(e);
}
function Y(e, t) {
    if (e.indexOf) return e.indexOf(t);
    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
    return -1;
}
function W(e) {
    var t = e.charCodeAt(0),
        n = {
            8: 'b',
            9: 't',
            10: 'n',
            12: 'f',
            13: 'r'
        }[t];
    return n ? '\\' + n : '\\x' + (t < 16 ? '0' : '') + I.call(t.toString(16));
}
function K(e) {
    return 'Object(' + e + ')';
}
function z(e) {
    return e + ' { ? }';
}
function q(e, t, n, r) {
    return e + ' (' + t + ') {' + (r ? Q(n, r) : y.call(n, ', ')) + '}';
}
function Q(e, t) {
    if (0 === e.length) return '';
    var n = '\n' + t.prev + t.base;
    return n + y.call(e, ',' + n) + '\n' + t.prev;
}
function X(e, t) {
    var n,
        r = B(e),
        i = [];
    if (r) {
        i.length = e.length;
        for (var a = 0; a < e.length; a++) i[a] = H(e, a) ? t(e[a], e) : '';
    }
    var s = 'function' == typeof R ? R(e) : [];
    if (D) {
        n = {};
        for (var o = 0; o < s.length; o++) n['$' + s[o]] = s[o];
    }
    for (var l in e) {
        if (!H(e, l) || (r && String(Number(l)) === l && l < e.length)) continue;
        if (!(D && n['$' + l] instanceof Symbol)) T.call(/[^\w$]/, l) ? i.push(t(l, e) + ': ' + t(e[l], e)) : i.push(l + ': ' + t(e[l], e));
    }
    if ('function' == typeof R) for (var u = 0; u < s.length; u++) x.call(e, s[u]) && i.push('[' + t(s[u]) + ']: ' + t(e[s[u]], e));
    return i;
}
