t.default = (function () {
    function e(e, t, n, r, i, a) {
        (this.message = e), (this.expected = t), (this.found = n), (this.offset = r), (this.line = i), (this.column = a), (this.name = 'SyntaxError');
    }
    return (
        !(function (e, t) {
            function n() {
                this.constructor = e;
            }
            (n.prototype = t.prototype), (e.prototype = new n());
        })(e, Error),
        {
            SyntaxError: e,
            parse: function (t) {
                var n,
                    r,
                    i,
                    a,
                    s,
                    o,
                    l,
                    u = arguments.length > 1 ? arguments[1] : {},
                    c = {},
                    d = { start: ea },
                    f = ea,
                    _ = function (e) {
                        var t,
                            n,
                            r,
                            i,
                            a,
                            s = '';
                        for (t = 0, r = e.length; t < r; t += 1) for (n = 0, a = (i = e[t]).length; n < a; n += 1) s += i[n];
                        return s;
                    },
                    h = /^[^ \t\n\r,.+={}#]/,
                    p = {
                        type: 'class',
                        value: '[^ \\t\\n\\r,.+={}#]',
                        description: '[^ \\t\\n\\r,.+={}#]'
                    },
                    m = {
                        type: 'literal',
                        value: '{',
                        description: '"{"'
                    },
                    g = {
                        type: 'literal',
                        value: ',',
                        description: '","'
                    },
                    E = {
                        type: 'literal',
                        value: '}',
                        description: '"}"'
                    },
                    v = 'number',
                    I = {
                        type: 'literal',
                        value: 'number',
                        description: '"number"'
                    },
                    S = 'date',
                    T = {
                        type: 'literal',
                        value: 'date',
                        description: '"date"'
                    },
                    b = 'time',
                    y = {
                        type: 'literal',
                        value: 'time',
                        description: '"time"'
                    },
                    A = 'plural',
                    N = {
                        type: 'literal',
                        value: 'plural',
                        description: '"plural"'
                    },
                    C = 'selectordinal',
                    R = {
                        type: 'literal',
                        value: 'selectordinal',
                        description: '"selectordinal"'
                    },
                    O = 'select',
                    D = {
                        type: 'literal',
                        value: 'select',
                        description: '"select"'
                    },
                    L = {
                        type: 'literal',
                        value: '=',
                        description: '"="'
                    },
                    x = 'offset:',
                    w = {
                        type: 'literal',
                        value: 'offset:',
                        description: '"offset:"'
                    },
                    M = {
                        type: 'other',
                        description: 'whitespace'
                    },
                    P = /^[ \t\n\r]/,
                    k = {
                        type: 'class',
                        value: '[ \\t\\n\\r]',
                        description: '[ \\t\\n\\r]'
                    },
                    U = {
                        type: 'other',
                        description: 'optionalWhitespace'
                    },
                    G = /^[0-9]/,
                    B = {
                        type: 'class',
                        value: '[0-9]',
                        description: '[0-9]'
                    },
                    Z = /^[0-9a-f]/i,
                    F = {
                        type: 'class',
                        value: '[0-9a-f]i',
                        description: '[0-9a-f]i'
                    },
                    V = {
                        type: 'literal',
                        value: '0',
                        description: '"0"'
                    },
                    H = /^[1-9]/,
                    j = {
                        type: 'class',
                        value: '[1-9]',
                        description: '[1-9]'
                    },
                    Y = /^[^{}\\\0-\x1F \t\n\r]/,
                    W = {
                        type: 'class',
                        value: '[^{}\\\\\\0-\\x1F\x7F \\t\\n\\r]',
                        description: '[^{}\\\\\\0-\\x1F\x7F \\t\\n\\r]'
                    },
                    K = {
                        type: 'literal',
                        value: '\\\\',
                        description: '"\\\\\\\\"'
                    },
                    z = {
                        type: 'literal',
                        value: '\\#',
                        description: '"\\\\#"'
                    },
                    q = {
                        type: 'literal',
                        value: '\\{',
                        description: '"\\\\{"'
                    },
                    Q = {
                        type: 'literal',
                        value: '\\}',
                        description: '"\\\\}"'
                    },
                    X = {
                        type: 'literal',
                        value: '\\u',
                        description: '"\\\\u"'
                    },
                    J = 0,
                    $ = 0,
                    ee = {
                        line: 1,
                        column: 1,
                        seenCR: !1
                    },
                    et = 0,
                    en = [],
                    er = 0;
                if ('startRule' in u) {
                    if (!(u.startRule in d)) throw Error('Can\'t start parsing from rule "' + u.startRule + '".');
                    f = d[u.startRule];
                }
                function ei(e) {
                    if (!(J < et)) J > et && ((et = J), (en = [])), en.push(e);
                }
                function ea() {
                    return es();
                }
                function es() {
                    var e, t, n;
                    for (e = J, t = [], n = eo(); n !== c; ) t.push(n), (n = eo());
                    if (t !== c)
                        t = {
                            type: 'messageFormatPattern',
                            elements: t
                        };
                    return (e = t);
                }
                function eo() {
                    var e;
                    return (
                        (e = (function () {
                            var e, n;
                            if (
                                ((e = J),
                                (n = (function () {
                                    var e, n, r, i, a, s;
                                    if (((e = J), (n = []), (r = J), (i = ed()) !== c && (a = em()) !== c && (s = ed()) !== c ? (r = i = [i, a, s]) : ((J = r), (r = c)), r !== c)) for (; r !== c; ) n.push(r), (r = J), (i = ed()) !== c && (a = em()) !== c && (s = ed()) !== c ? (r = i = [i, a, s]) : ((J = r), (r = c));
                                    else n = c;
                                    return n !== c && (n = _(n)), (e = n) === c && ((e = J), (n = ec()) !== c && (n = t.substring(e, J)), (e = n)), e;
                                })()) !== c)
                            )
                                n = {
                                    type: 'messageTextElement',
                                    value: n
                                };
                            return (e = n);
                        })()) === c &&
                            (e = (function () {
                                var e, n, r, i, a, s, o, l;
                                if (((e = J), 123 === t.charCodeAt(J) ? ((n = '{'), J++) : ((n = c), 0 === er && ei(m)), n !== c)) {
                                    if (ed() !== c) {
                                        if (
                                            (r = (function () {
                                                var e, n, r;
                                                if ((e = eh()) === c) {
                                                    if (((e = J), (n = []), h.test(t.charAt(J)) ? ((r = t.charAt(J)), J++) : ((r = c), 0 === er && ei(p)), r !== c)) for (; r !== c; ) n.push(r), h.test(t.charAt(J)) ? ((r = t.charAt(J)), J++) : ((r = c), 0 === er && ei(p));
                                                    else n = c;
                                                    n !== c && (n = t.substring(e, J)), (e = n);
                                                }
                                                return e;
                                            })()) !== c
                                        ) {
                                            if (ed() !== c) {
                                                if (
                                                    ((i = J),
                                                    44 === t.charCodeAt(J) ? ((a = ','), J++) : ((a = c), 0 === er && ei(g)),
                                                    a !== c &&
                                                    (s = ed()) !== c &&
                                                    (o = (function () {
                                                        var e;
                                                        return (
                                                            (e = (function () {
                                                                var e, n, r, i, a, s, o;
                                                                if (((e = J), t.substr(J, 6) === v ? ((n = v), (J += 6)) : ((n = c), 0 === er && ei(I)), n === c && (t.substr(J, 4) === S ? ((n = S), (J += 4)) : ((n = c), 0 === er && ei(T)), n === c && (t.substr(J, 4) === b ? ((n = b), (J += 4)) : ((n = c), 0 === er && ei(y)))), n !== c)) {
                                                                    if (ed() !== c) {
                                                                        if (((r = J), 44 === t.charCodeAt(J) ? ((i = ','), J++) : ((i = c), 0 === er && ei(g)), i !== c && (a = ed()) !== c && (s = em()) !== c ? (r = i = [i, a, s]) : ((J = r), (r = c)), r === c && (r = null), r !== c)) {
                                                                            e = n = {
                                                                                type: n + 'Format',
                                                                                style: (o = r) && o[2]
                                                                            };
                                                                        } else (J = e), (e = c);
                                                                    } else (J = e), (e = c);
                                                                } else (J = e), (e = c);
                                                                return e;
                                                            })()) === c &&
                                                                (e = (function () {
                                                                    var e, n, r, i, a;
                                                                    if (((e = J), t.substr(J, 6) === A ? ((n = A), (J += 6)) : ((n = c), 0 === er && ei(N)), n !== c)) {
                                                                        if (ed() !== c) {
                                                                            if ((44 === t.charCodeAt(J) ? ((r = ','), J++) : ((r = c), 0 === er && ei(g)), r !== c)) {
                                                                                if (ed() !== c) {
                                                                                    if ((i = eu()) !== c) {
                                                                                        e = n = {
                                                                                            type: (a = i).type,
                                                                                            ordinal: !1,
                                                                                            offset: a.offset || 0,
                                                                                            options: a.options
                                                                                        };
                                                                                    } else (J = e), (e = c);
                                                                                } else (J = e), (e = c);
                                                                            } else (J = e), (e = c);
                                                                        } else (J = e), (e = c);
                                                                    } else (J = e), (e = c);
                                                                    return e;
                                                                })()) === c &&
                                                                (e = (function () {
                                                                    var e, n, r, i, a;
                                                                    if (((e = J), t.substr(J, 13) === C ? ((n = C), (J += 13)) : ((n = c), 0 === er && ei(R)), n !== c)) {
                                                                        if (ed() !== c) {
                                                                            if ((44 === t.charCodeAt(J) ? ((r = ','), J++) : ((r = c), 0 === er && ei(g)), r !== c)) {
                                                                                if (ed() !== c) {
                                                                                    if ((i = eu()) !== c) {
                                                                                        e = n = {
                                                                                            type: (a = i).type,
                                                                                            ordinal: !0,
                                                                                            offset: a.offset || 0,
                                                                                            options: a.options
                                                                                        };
                                                                                    } else (J = e), (e = c);
                                                                                } else (J = e), (e = c);
                                                                            } else (J = e), (e = c);
                                                                        } else (J = e), (e = c);
                                                                    } else (J = e), (e = c);
                                                                    return e;
                                                                })()) === c &&
                                                                (e = (function () {
                                                                    var e, n, r, i, a;
                                                                    if (((e = J), t.substr(J, 6) === O ? ((n = O), (J += 6)) : ((n = c), 0 === er && ei(D)), n !== c)) {
                                                                        if (ed() !== c) {
                                                                            if ((44 === t.charCodeAt(J) ? ((r = ','), J++) : ((r = c), 0 === er && ei(g)), r !== c)) {
                                                                                if (ed() !== c) {
                                                                                    if (((i = []), (a = el()) !== c)) for (; a !== c; ) i.push(a), (a = el());
                                                                                    else i = c;
                                                                                    if (i !== c)
                                                                                        e = n = {
                                                                                            type: 'selectFormat',
                                                                                            options: i
                                                                                        };
                                                                                    else (J = e), (e = c);
                                                                                } else (J = e), (e = c);
                                                                            } else (J = e), (e = c);
                                                                        } else (J = e), (e = c);
                                                                    } else (J = e), (e = c);
                                                                    return e;
                                                                })()),
                                                            e
                                                        );
                                                    })()) !== c
                                                        ? (i = a = [a, s, o])
                                                        : ((J = i), (i = c)),
                                                    i === c && (i = null),
                                                    i !== c)
                                                ) {
                                                    if ((a = ed()) !== c) {
                                                        if ((125 === t.charCodeAt(J) ? ((s = '}'), J++) : ((s = c), 0 === er && ei(E)), s !== c)) {
                                                            e = n = {
                                                                type: 'argumentElement',
                                                                id: r,
                                                                format: (l = i) && l[2]
                                                            };
                                                        } else (J = e), (e = c);
                                                    } else (J = e), (e = c);
                                                } else (J = e), (e = c);
                                            } else (J = e), (e = c);
                                        } else (J = e), (e = c);
                                    } else (J = e), (e = c);
                                } else (J = e), (e = c);
                                return e;
                            })()),
                        e
                    );
                }
                function el() {
                    var e, n, r, i, a, s, o, l, u, d;
                    if (((e = J), (n = ed()) !== c)) {
                        if (((o = J), (l = J), 61 === t.charCodeAt(J) ? ((u = '='), J++) : ((u = c), 0 === er && ei(L)), u !== c && (d = eh()) !== c ? (l = u = [u, d]) : ((J = l), (l = c)), l !== c && (l = t.substring(o, J)), (o = l) === c && (o = em()), (r = o) !== c)) {
                            if (ed() !== c) {
                                if ((123 === t.charCodeAt(J) ? ((i = '{'), J++) : ((i = c), 0 === er && ei(m)), i !== c)) {
                                    if (ed() !== c) {
                                        if ((a = es()) !== c) {
                                            if (ed() !== c) {
                                                if ((125 === t.charCodeAt(J) ? ((s = '}'), J++) : ((s = c), 0 === er && ei(E)), s !== c))
                                                    e = n = {
                                                        type: 'optionalFormatPattern',
                                                        selector: r,
                                                        value: a
                                                    };
                                                else (J = e), (e = c);
                                            } else (J = e), (e = c);
                                        } else (J = e), (e = c);
                                    } else (J = e), (e = c);
                                } else (J = e), (e = c);
                            } else (J = e), (e = c);
                        } else (J = e), (e = c);
                    } else (J = e), (e = c);
                    return e;
                }
                function eu() {
                    var e, n, r, i;
                    if (
                        ((e = J),
                        (n = (function () {
                            var e, n, r;
                            if (((e = J), t.substr(J, 7) === x ? ((n = x), (J += 7)) : ((n = c), 0 === er && ei(w)), n !== c)) {
                                if (ed() !== c) {
                                    if ((r = eh()) !== c) e = n = r;
                                    else (J = e), (e = c);
                                } else (J = e), (e = c);
                            } else (J = e), (e = c);
                            return e;
                        })()) === c && (n = null),
                        n !== c)
                    ) {
                        if (ed() !== c) {
                            if (((r = []), (i = el()) !== c)) for (; i !== c; ) r.push(i), (i = el());
                            else r = c;
                            if (r !== c)
                                e = n = {
                                    type: 'pluralFormat',
                                    offset: n,
                                    options: r
                                };
                            else (J = e), (e = c);
                        } else (J = e), (e = c);
                    } else (J = e), (e = c);
                    return e;
                }
                function ec() {
                    var e, n;
                    if ((er++, (e = []), P.test(t.charAt(J)) ? ((n = t.charAt(J)), J++) : ((n = c), 0 === er && ei(k)), n !== c)) for (; n !== c; ) e.push(n), P.test(t.charAt(J)) ? ((n = t.charAt(J)), J++) : ((n = c), 0 === er && ei(k));
                    else e = c;
                    return er--, e === c && ((n = c), 0 === er && ei(M)), e;
                }
                function ed() {
                    var e, n, r;
                    for (er++, e = J, n = [], r = ec(); r !== c; ) n.push(r), (r = ec());
                    return n !== c && (n = t.substring(e, J)), (e = n), er--, e === c && ((n = c), 0 === er && ei(U)), e;
                }
                function ef() {
                    var e;
                    return G.test(t.charAt(J)) ? ((e = t.charAt(J)), J++) : ((e = c), 0 === er && ei(B)), e;
                }
                function e_() {
                    var e;
                    return Z.test(t.charAt(J)) ? ((e = t.charAt(J)), J++) : ((e = c), 0 === er && ei(F)), e;
                }
                function eh() {
                    var e, n, r, i, a, s;
                    if (((e = J), 48 === t.charCodeAt(J) ? ((n = '0'), J++) : ((n = c), 0 === er && ei(V)), n === c)) {
                        if (((n = J), (r = J), H.test(t.charAt(J)) ? ((i = t.charAt(J)), J++) : ((i = c), 0 === er && ei(j)), i !== c)) {
                            for (a = [], s = ef(); s !== c; ) a.push(s), (s = ef());
                            a !== c ? (r = i = [i, a]) : ((J = r), (r = c));
                        } else (J = r), (r = c);
                        r !== c && (r = t.substring(n, J)), (n = r);
                    }
                    if (n !== c) n = parseInt(n, 10);
                    return (e = n);
                }
                function ep() {
                    var e, n, r, i, a, s, o, l;
                    if ((Y.test(t.charAt(J)) ? ((e = t.charAt(J)), J++) : ((e = c), 0 === er && ei(W)), e === c && ((e = J), '\\\\' === t.substr(J, 2) ? ((n = '\\\\'), (J += 2)) : ((n = c), 0 === er && ei(K)), n !== c && (n = '\\'), (e = n) === c && ((e = J), '\\#' === t.substr(J, 2) ? ((n = '\\#'), (J += 2)) : ((n = c), 0 === er && ei(z)), n !== c && (n = '\\#'), (e = n) === c && ((e = J), '\\{' === t.substr(J, 2) ? ((n = '\\{'), (J += 2)) : ((n = c), 0 === er && ei(q)), n !== c && (n = '{'), (e = n) === c && ((e = J), '\\}' === t.substr(J, 2) ? ((n = '\\}'), (J += 2)) : ((n = c), 0 === er && ei(Q)), n !== c && (n = '}'), (e = n) === c)))))) {
                        if (((e = J), '\\u' === t.substr(J, 2) ? ((n = '\\u'), (J += 2)) : ((n = c), 0 === er && ei(X)), n !== c)) {
                            if (((r = J), (i = J), (a = e_()) !== c && (s = e_()) !== c && (o = e_()) !== c && (l = e_()) !== c ? (i = a = [a, s, o, l]) : ((J = i), (i = c)), i !== c && (i = t.substring(r, J)), (r = i) !== c)) e = n = String.fromCharCode(parseInt(r, 16));
                            else (J = e), (e = c);
                        } else (J = e), (e = c);
                    }
                    return e;
                }
                function em() {
                    var e, t, n;
                    if (((e = J), (t = []), (n = ep()) !== c)) for (; n !== c; ) t.push(n), (n = ep());
                    else t = c;
                    if (t !== c) t = t.join('');
                    return (e = t);
                }
                if ((l = f()) !== c && J === t.length) return l;
                throw (
                    (l !== c &&
                        J < t.length &&
                        ei({
                            type: 'end',
                            description: 'end of input'
                        }),
                    (n = null),
                    (r = en),
                    (s =
                        ($ !== (a = i = et) &&
                            ($ > a &&
                                (($ = 0),
                                (ee = {
                                    line: 1,
                                    column: 1,
                                    seenCR: !1
                                })),
                            !(function (e, n, r) {
                                var i, a;
                                for (i = n; i < r; i++) '\n' === (a = t.charAt(i)) ? (!e.seenCR && e.line++, (e.column = 1), (e.seenCR = !1)) : '\r' === a || '\u2028' === a || '\u2029' === a ? (e.line++, (e.column = 1), (e.seenCR = !0)) : (e.column++, (e.seenCR = !1));
                            })(ee, $, a),
                            ($ = a)),
                        ee)),
                    (o = i < t.length ? t.charAt(i) : null),
                    null !== r &&
                        !(function (e) {
                            var t = 1;
                            for (
                                e.sort(function (e, t) {
                                    return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
                                });
                                t < e.length;

                            )
                                e[t - 1] === e[t] ? e.splice(t, 1) : t++;
                        })(r),
                    new e(
                        (function (e, t) {
                            var n,
                                r,
                                i = Array(e.length);
                            for (r = 0; r < e.length; r++) i[r] = e[r].description;
                            return (
                                (n = e.length > 1 ? i.slice(0, -1).join(', ') + ' or ' + i[e.length - 1] : i[0]),
                                'Expected ' +
                                    n +
                                    ' but ' +
                                    (t
                                        ? '"' +
                                          (function (e) {
                                              function t(e) {
                                                  return e.charCodeAt(0).toString(16).toUpperCase();
                                              }
                                              return e
                                                  .replace(/\\/g, '\\\\')
                                                  .replace(/"/g, '\\"')
                                                  .replace(/\x08/g, '\\b')
                                                  .replace(/\t/g, '\\t')
                                                  .replace(/\n/g, '\\n')
                                                  .replace(/\f/g, '\\f')
                                                  .replace(/\r/g, '\\r')
                                                  .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (e) {
                                                      return '\\x0' + t(e);
                                                  })
                                                  .replace(/[\x10-\x1F\x80-\xFF]/g, function (e) {
                                                      return '\\x' + t(e);
                                                  })
                                                  .replace(/[\u0180-\u0FFF]/g, function (e) {
                                                      return '\\u0' + t(e);
                                                  })
                                                  .replace(/[\u1080-\uFFFF]/g, function (e) {
                                                      return '\\u' + t(e);
                                                  });
                                          })(t) +
                                          '"'
                                        : 'end of input') +
                                    ' found.'
                            );
                        })(r, o),
                        r,
                        o,
                        i,
                        s.line,
                        s.column
                    ))
                );
            }
        }
    );
})();
