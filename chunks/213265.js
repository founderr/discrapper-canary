var r = n(926515),
    i = n(581031),
    a = n(714050),
    o = n(572609),
    s = n(489412),
    l = n(972277),
    u = n(803938),
    c = n(644659).get,
    d = n(973326),
    _ = n(440196),
    E = l('native-string-replace', String.prototype.replace),
    f = RegExp.prototype.exec,
    h = f,
    p = i(''.charAt),
    m = i(''.indexOf),
    I = i(''.replace),
    T = i(''.slice),
    g = (function () {
        var e = /a/,
            t = /b*/g;
        return r(f, e, 'a'), r(f, t, 'a'), 0 !== e.lastIndex || 0 !== t.lastIndex;
    })(),
    S = s.BROKEN_CARET,
    A = void 0 !== /()??/.exec('')[1];
(g || A || S || d || _) &&
    (h = function (e) {
        var t,
            n,
            i,
            s,
            l,
            d,
            _,
            v = this,
            N = c(v),
            O = a(e),
            R = N.raw;
        if (R) return (R.lastIndex = v.lastIndex), (t = r(h, R, O)), (v.lastIndex = R.lastIndex), t;
        var C = N.groups,
            y = S && v.sticky,
            L = r(o, v),
            b = v.source,
            D = 0,
            M = O;
        if (
            (y && (-1 === m((L = I(L, 'y', '')), 'g') && (L += 'g'), (M = T(O, v.lastIndex)), v.lastIndex > 0 && (!v.multiline || (v.multiline && '\n' !== p(O, v.lastIndex - 1))) && ((b = '(?: ' + b + ')'), (M = ' ' + M), D++), (n = RegExp('^(?:' + b + ')', L))),
            A && (n = RegExp('^' + b + '$(?!\\s)', L)),
            g && (i = v.lastIndex),
            (s = r(f, y ? n : v, M)),
            y ? (s ? ((s.input = T(s.input, D)), (s[0] = T(s[0], D)), (s.index = v.lastIndex), (v.lastIndex += s[0].length)) : (v.lastIndex = 0)) : g && s && (v.lastIndex = v.global ? s.index + s[0].length : i),
            A &&
                s &&
                s.length > 1 &&
                r(E, s[0], n, function () {
                    for (l = 1; l < arguments.length - 2; l++) void 0 === arguments[l] && (s[l] = void 0);
                }),
            s && C)
        )
            for (l = 0, s.groups = d = u(null); l < C.length; l++) d[(_ = C[l])[0]] = s[_[1]];
        return s;
    }),
    (e.exports = h);
