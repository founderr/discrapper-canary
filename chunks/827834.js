t.default = (function () {
    function e(e, t, n, r, i, a) {
        (this.message = e), (this.expected = t), (this.found = n), (this.offset = r), (this.line = i), (this.column = a), (this.name = 'SyntaxError');
    }
    function t(t) {
        var n,
            r = arguments.length > 1 ? arguments[1] : {},
            i = {},
            a = { start: eD },
            o = eD,
            s = function (e) {
                return {
                    type: 'messageFormatPattern',
                    elements: e
                };
            },
            l = i,
            u = function (e) {
                var t,
                    n,
                    r,
                    i,
                    a,
                    o = '';
                for (t = 0, r = e.length; t < r; t += 1) for (n = 0, a = (i = e[t]).length; n < a; n += 1) o += i[n];
                return o;
            },
            c = function (e) {
                return {
                    type: 'messageTextElement',
                    value: e
                };
            },
            d = /^[^ \t\n\r,.+={}#]/,
            _ = {
                type: 'class',
                value: '[^ \\t\\n\\r,.+={}#]',
                description: '[^ \\t\\n\\r,.+={}#]'
            },
            E = '{',
            f = {
                type: 'literal',
                value: '{',
                description: '"{"'
            },
            h = null,
            p = ',',
            m = {
                type: 'literal',
                value: ',',
                description: '","'
            },
            I = '}',
            T = {
                type: 'literal',
                value: '}',
                description: '"}"'
            },
            g = function (e, t) {
                return {
                    type: 'argumentElement',
                    id: e,
                    format: t && t[2]
                };
            },
            S = 'number',
            A = {
                type: 'literal',
                value: 'number',
                description: '"number"'
            },
            v = 'date',
            N = {
                type: 'literal',
                value: 'date',
                description: '"date"'
            },
            O = 'time',
            R = {
                type: 'literal',
                value: 'time',
                description: '"time"'
            },
            C = function (e, t) {
                return {
                    type: e + 'Format',
                    style: t && t[2]
                };
            },
            y = 'plural',
            b = {
                type: 'literal',
                value: 'plural',
                description: '"plural"'
            },
            L = function (e) {
                return {
                    type: e.type,
                    ordinal: !1,
                    offset: e.offset || 0,
                    options: e.options
                };
            },
            D = 'selectordinal',
            M = {
                type: 'literal',
                value: 'selectordinal',
                description: '"selectordinal"'
            },
            P = function (e) {
                return {
                    type: e.type,
                    ordinal: !0,
                    offset: e.offset || 0,
                    options: e.options
                };
            },
            U = 'select',
            w = {
                type: 'literal',
                value: 'select',
                description: '"select"'
            },
            x = function (e) {
                return {
                    type: 'selectFormat',
                    options: e
                };
            },
            G = '=',
            k = {
                type: 'literal',
                value: '=',
                description: '"="'
            },
            B = function (e, t) {
                return {
                    type: 'optionalFormatPattern',
                    selector: e,
                    value: t
                };
            },
            F = 'offset:',
            Z = {
                type: 'literal',
                value: 'offset:',
                description: '"offset:"'
            },
            V = function (e) {
                return e;
            },
            H = function (e, t) {
                return {
                    type: 'pluralFormat',
                    offset: e,
                    options: t
                };
            },
            Y = {
                type: 'other',
                description: 'whitespace'
            },
            j = /^[ \t\n\r]/,
            W = {
                type: 'class',
                value: '[ \\t\\n\\r]',
                description: '[ \\t\\n\\r]'
            },
            K = {
                type: 'other',
                description: 'optionalWhitespace'
            },
            z = /^[0-9]/,
            q = {
                type: 'class',
                value: '[0-9]',
                description: '[0-9]'
            },
            Q = /^[0-9a-f]/i,
            X = {
                type: 'class',
                value: '[0-9a-f]i',
                description: '[0-9a-f]i'
            },
            $ = '0',
            J = {
                type: 'literal',
                value: '0',
                description: '"0"'
            },
            ee = /^[1-9]/,
            et = {
                type: 'class',
                value: '[1-9]',
                description: '[1-9]'
            },
            en = function (e) {
                return parseInt(e, 10);
            },
            er = /^[^{}\\\0-\x1F \t\n\r]/,
            ei = {
                type: 'class',
                value: '[^{}\\\\\\0-\\x1F\x7F \\t\\n\\r]',
                description: '[^{}\\\\\\0-\\x1F\x7F \\t\\n\\r]'
            },
            ea = '\\\\',
            eo = {
                type: 'literal',
                value: '\\\\',
                description: '"\\\\\\\\"'
            },
            es = function () {
                return '\\';
            },
            el = '\\#',
            eu = {
                type: 'literal',
                value: '\\#',
                description: '"\\\\#"'
            },
            ec = function () {
                return '\\#';
            },
            ed = '\\{',
            e_ = {
                type: 'literal',
                value: '\\{',
                description: '"\\\\{"'
            },
            eE = function () {
                return '{';
            },
            ef = '\\}',
            eh = {
                type: 'literal',
                value: '\\}',
                description: '"\\\\}"'
            },
            ep = function () {
                return '}';
            },
            em = '\\u',
            eI = {
                type: 'literal',
                value: '\\u',
                description: '"\\\\u"'
            },
            eT = function (e) {
                return String.fromCharCode(parseInt(e, 16));
            },
            eg = function (e) {
                return e.join('');
            },
            eS = 0,
            eA = 0,
            ev = 0,
            eN = {
                line: 1,
                column: 1,
                seenCR: !1
            },
            eO = 0,
            eR = [],
            eC = 0;
        if ('startRule' in r) {
            if (!(r.startRule in a)) throw Error('Can\'t start parsing from rule "' + r.startRule + '".');
            o = a[r.startRule];
        }
        function ey(e) {
            function n(e, n, r) {
                var i, a;
                for (i = n; i < r; i++) '\n' === (a = t.charAt(i)) ? (!e.seenCR && e.line++, (e.column = 1), (e.seenCR = !1)) : '\r' === a || '\u2028' === a || '\u2029' === a ? (e.line++, (e.column = 1), (e.seenCR = !0)) : (e.column++, (e.seenCR = !1));
            }
            return (
                ev !== e &&
                    (ev > e &&
                        ((ev = 0),
                        (eN = {
                            line: 1,
                            column: 1,
                            seenCR: !1
                        })),
                    n(eN, ev, e),
                    (ev = e)),
                eN
            );
        }
        function eb(e) {
            if (!(eS < eO)) eS > eO && ((eO = eS), (eR = [])), eR.push(e);
        }
        function eL(n, r, i) {
            function a(e) {
                var t = 1;
                for (
                    e.sort(function (e, t) {
                        return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
                    });
                    t < e.length;

                )
                    e[t - 1] === e[t] ? e.splice(t, 1) : t++;
            }
            function o(e, t) {
                function n(e) {
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
                }
                var r,
                    i,
                    a = Array(e.length);
                for (i = 0; i < e.length; i++) a[i] = e[i].description;
                return (r = e.length > 1 ? a.slice(0, -1).join(', ') + ' or ' + a[e.length - 1] : a[0]), 'Expected ' + r + ' but ' + (t ? '"' + n(t) + '"' : 'end of input') + ' found.';
            }
            var s = ey(i),
                l = i < t.length ? t.charAt(i) : null;
            return null !== r && a(r), new e(null !== n ? n : o(r, l), r, l, i, s.line, s.column);
        }
        function eD() {
            return eM();
        }
        function eM() {
            var e, t, n;
            for (e = eS, t = [], n = eP(); n !== i; ) t.push(n), (n = eP());
            return t !== i && ((eA = e), (t = s(t))), (e = t);
        }
        function eP() {
            var e;
            return (e = ew()) === i && (e = eG()), e;
        }
        function eU() {
            var e, n, r, a, o, s;
            if (((e = eS), (n = []), (r = eS), (a = ez()) !== i && (o = eJ()) !== i && (s = ez()) !== i ? (r = a = [a, o, s]) : ((eS = r), (r = l)), r !== i)) for (; r !== i; ) n.push(r), (r = eS), (a = ez()) !== i && (o = eJ()) !== i && (s = ez()) !== i ? (r = a = [a, o, s]) : ((eS = r), (r = l));
            else n = l;
            return n !== i && ((eA = e), (n = u(n))), (e = n) === i && ((e = eS), (n = eK()) !== i && (n = t.substring(e, eS)), (e = n)), e;
        }
        function ew() {
            var e, t;
            return (e = eS), (t = eU()) !== i && ((eA = e), (t = c(t))), (e = t);
        }
        function ex() {
            var e, n, r;
            if ((e = eX()) === i) {
                if (((e = eS), (n = []), d.test(t.charAt(eS)) ? ((r = t.charAt(eS)), eS++) : ((r = i), 0 === eC && eb(_)), r !== i)) for (; r !== i; ) n.push(r), d.test(t.charAt(eS)) ? ((r = t.charAt(eS)), eS++) : ((r = i), 0 === eC && eb(_));
                else n = l;
                n !== i && (n = t.substring(e, eS)), (e = n);
            }
            return e;
        }
        function eG() {
            var e, n, r, a, o, s, u;
            return (e = eS), 123 === t.charCodeAt(eS) ? ((n = E), eS++) : ((n = i), 0 === eC && eb(f)), n !== i && ez() !== i && (r = ex()) !== i && ez() !== i ? ((a = eS), 44 === t.charCodeAt(eS) ? ((o = p), eS++) : ((o = i), 0 === eC && eb(m)), o !== i && (s = ez()) !== i && (u = ek()) !== i ? (a = o = [o, s, u]) : ((eS = a), (a = l)), a === i && (a = h), a !== i && (o = ez()) !== i ? (125 === t.charCodeAt(eS) ? ((s = I), eS++) : ((s = i), 0 === eC && eb(T)), s !== i ? ((eA = e), (e = n = g(r, a))) : ((eS = e), (e = l))) : ((eS = e), (e = l))) : ((eS = e), (e = l)), e;
        }
        function ek() {
            var e;
            return (e = eB()) === i && (e = eF()) === i && (e = eZ()) === i && (e = eV()), e;
        }
        function eB() {
            var e, n, r, a, o, s;
            return (e = eS), t.substr(eS, 6) === S ? ((n = S), (eS += 6)) : ((n = i), 0 === eC && eb(A)), n === i && (t.substr(eS, 4) === v ? ((n = v), (eS += 4)) : ((n = i), 0 === eC && eb(N)), n === i && (t.substr(eS, 4) === O ? ((n = O), (eS += 4)) : ((n = i), 0 === eC && eb(R)))), n !== i && ez() !== i ? ((r = eS), 44 === t.charCodeAt(eS) ? ((a = p), eS++) : ((a = i), 0 === eC && eb(m)), a !== i && (o = ez()) !== i && (s = eJ()) !== i ? (r = a = [a, o, s]) : ((eS = r), (r = l)), r === i && (r = h), r !== i ? ((eA = e), (e = n = C(n, r))) : ((eS = e), (e = l))) : ((eS = e), (e = l)), e;
        }
        function eF() {
            var e, n, r, a;
            return (e = eS), t.substr(eS, 6) === y ? ((n = y), (eS += 6)) : ((n = i), 0 === eC && eb(b)), n !== i && ez() !== i ? (44 === t.charCodeAt(eS) ? ((r = p), eS++) : ((r = i), 0 === eC && eb(m)), r !== i && ez() !== i && (a = eW()) !== i ? ((eA = e), (e = n = L(a))) : ((eS = e), (e = l))) : ((eS = e), (e = l)), e;
        }
        function eZ() {
            var e, n, r, a;
            return (e = eS), t.substr(eS, 13) === D ? ((n = D), (eS += 13)) : ((n = i), 0 === eC && eb(M)), n !== i && ez() !== i ? (44 === t.charCodeAt(eS) ? ((r = p), eS++) : ((r = i), 0 === eC && eb(m)), r !== i && ez() !== i && (a = eW()) !== i ? ((eA = e), (e = n = P(a))) : ((eS = e), (e = l))) : ((eS = e), (e = l)), e;
        }
        function eV() {
            var e, n, r, a, o;
            if (((e = eS), t.substr(eS, 6) === U ? ((n = U), (eS += 6)) : ((n = i), 0 === eC && eb(w)), n !== i)) {
                if (ez() !== i) {
                    if ((44 === t.charCodeAt(eS) ? ((r = p), eS++) : ((r = i), 0 === eC && eb(m)), r !== i)) {
                        if (ez() !== i) {
                            if (((a = []), (o = eY()) !== i)) for (; o !== i; ) a.push(o), (o = eY());
                            else a = l;
                            a !== i ? ((eA = e), (e = n = x(a))) : ((eS = e), (e = l));
                        } else (eS = e), (e = l);
                    } else (eS = e), (e = l);
                } else (eS = e), (e = l);
            } else (eS = e), (e = l);
            return e;
        }
        function eH() {
            var e, n, r, a;
            return (e = eS), (n = eS), 61 === t.charCodeAt(eS) ? ((r = G), eS++) : ((r = i), 0 === eC && eb(k)), r !== i && (a = eX()) !== i ? (n = r = [r, a]) : ((eS = n), (n = l)), n !== i && (n = t.substring(e, eS)), (e = n) === i && (e = eJ()), e;
        }
        function eY() {
            var e, n, r, a, o, s;
            return (e = eS), (n = ez()) !== i && (r = eH()) !== i && ez() !== i ? (123 === t.charCodeAt(eS) ? ((a = E), eS++) : ((a = i), 0 === eC && eb(f)), a !== i && ez() !== i && (o = eM()) !== i && ez() !== i ? (125 === t.charCodeAt(eS) ? ((s = I), eS++) : ((s = i), 0 === eC && eb(T)), s !== i ? ((eA = e), (e = n = B(r, o))) : ((eS = e), (e = l))) : ((eS = e), (e = l))) : ((eS = e), (e = l)), e;
        }
        function ej() {
            var e, n, r;
            return (e = eS), t.substr(eS, 7) === F ? ((n = F), (eS += 7)) : ((n = i), 0 === eC && eb(Z)), n !== i && ez() !== i && (r = eX()) !== i ? ((eA = e), (e = n = V(r))) : ((eS = e), (e = l)), e;
        }
        function eW() {
            var e, t, n, r;
            if (((e = eS), (t = ej()) === i && (t = h), t !== i)) {
                if (ez() !== i) {
                    if (((n = []), (r = eY()) !== i)) for (; r !== i; ) n.push(r), (r = eY());
                    else n = l;
                    n !== i ? ((eA = e), (e = t = H(t, n))) : ((eS = e), (e = l));
                } else (eS = e), (e = l);
            } else (eS = e), (e = l);
            return e;
        }
        function eK() {
            var e, n;
            if ((eC++, (e = []), j.test(t.charAt(eS)) ? ((n = t.charAt(eS)), eS++) : ((n = i), 0 === eC && eb(W)), n !== i)) for (; n !== i; ) e.push(n), j.test(t.charAt(eS)) ? ((n = t.charAt(eS)), eS++) : ((n = i), 0 === eC && eb(W));
            else e = l;
            return eC--, e === i && ((n = i), 0 === eC && eb(Y)), e;
        }
        function ez() {
            var e, n, r;
            for (eC++, e = eS, n = [], r = eK(); r !== i; ) n.push(r), (r = eK());
            return n !== i && (n = t.substring(e, eS)), (e = n), eC--, e === i && ((n = i), 0 === eC && eb(K)), e;
        }
        function eq() {
            var e;
            return z.test(t.charAt(eS)) ? ((e = t.charAt(eS)), eS++) : ((e = i), 0 === eC && eb(q)), e;
        }
        function eQ() {
            var e;
            return Q.test(t.charAt(eS)) ? ((e = t.charAt(eS)), eS++) : ((e = i), 0 === eC && eb(X)), e;
        }
        function eX() {
            var e, n, r, a, o, s;
            if (((e = eS), 48 === t.charCodeAt(eS) ? ((n = $), eS++) : ((n = i), 0 === eC && eb(J)), n === i)) {
                if (((n = eS), (r = eS), ee.test(t.charAt(eS)) ? ((a = t.charAt(eS)), eS++) : ((a = i), 0 === eC && eb(et)), a !== i)) {
                    for (o = [], s = eq(); s !== i; ) o.push(s), (s = eq());
                    o !== i ? (r = a = [a, o]) : ((eS = r), (r = l));
                } else (eS = r), (r = l);
                r !== i && (r = t.substring(n, eS)), (n = r);
            }
            return n !== i && ((eA = e), (n = en(n))), (e = n);
        }
        function e$() {
            var e, n, r, a, o, s, u, c;
            return er.test(t.charAt(eS)) ? ((e = t.charAt(eS)), eS++) : ((e = i), 0 === eC && eb(ei)), e === i && ((e = eS), t.substr(eS, 2) === ea ? ((n = ea), (eS += 2)) : ((n = i), 0 === eC && eb(eo)), n !== i && ((eA = e), (n = es())), (e = n) === i && ((e = eS), t.substr(eS, 2) === el ? ((n = el), (eS += 2)) : ((n = i), 0 === eC && eb(eu)), n !== i && ((eA = e), (n = ec())), (e = n) === i && ((e = eS), t.substr(eS, 2) === ed ? ((n = ed), (eS += 2)) : ((n = i), 0 === eC && eb(e_)), n !== i && ((eA = e), (n = eE())), (e = n) === i && ((e = eS), t.substr(eS, 2) === ef ? ((n = ef), (eS += 2)) : ((n = i), 0 === eC && eb(eh)), n !== i && ((eA = e), (n = ep())), (e = n) === i && ((e = eS), t.substr(eS, 2) === em ? ((n = em), (eS += 2)) : ((n = i), 0 === eC && eb(eI)), n !== i ? ((r = eS), (a = eS), (o = eQ()) !== i && (s = eQ()) !== i && (u = eQ()) !== i && (c = eQ()) !== i ? (a = o = [o, s, u, c]) : ((eS = a), (a = l)), a !== i && (a = t.substring(r, eS)), (r = a) !== i ? ((eA = e), (e = n = eT(r))) : ((eS = e), (e = l))) : ((eS = e), (e = l))))))), e;
        }
        function eJ() {
            var e, t, n;
            if (((e = eS), (t = []), (n = e$()) !== i)) for (; n !== i; ) t.push(n), (n = e$());
            else t = l;
            return t !== i && ((eA = e), (t = eg(t))), (e = t);
        }
        if ((n = o()) !== i && eS === t.length) return n;
        throw (
            (n !== i &&
                eS < t.length &&
                eb({
                    type: 'end',
                    description: 'end of input'
                }),
            eL(null, eR, eO))
        );
    }
    return (
        (function e(e, t) {
            function n() {
                this.constructor = e;
            }
            (n.prototype = t.prototype), (e.prototype = new n());
        })(e, Error),
        {
            SyntaxError: e,
            parse: t
        }
    );
})();
