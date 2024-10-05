var r,
    i,
    a = n(926515),
    s = n(581031),
    o = n(714050),
    l = n(572609),
    u = n(489412),
    c = n(972277),
    d = n(803938),
    _ = n(644659).get,
    E = n(973326),
    f = n(440196),
    h = c('native-string-replace', String.prototype.replace),
    p = RegExp.prototype.exec,
    I = p,
    m = s(''.charAt),
    T = s(''.indexOf),
    S = s(''.replace),
    g = s(''.slice);
var A = ((i = /b*/g), a(p, (r = /a/), 'a'), a(p, i, 'a'), 0 !== r.lastIndex || 0 !== i.lastIndex),
    N = u.BROKEN_CARET,
    O = void 0 !== /()??/.exec('')[1];
(A || O || N || E || f) &&
    (I = function (e) {
        var t,
            n,
            r,
            i,
            s,
            u,
            c,
            E = _(this),
            f = o(e),
            R = E.raw;
        if (R) return (R.lastIndex = this.lastIndex), (t = a(I, R, f)), (this.lastIndex = R.lastIndex), t;
        var v = E.groups,
            C = N && this.sticky,
            L = a(l, this),
            D = this.source,
            y = 0,
            b = f;
        if (
            (C && (-1 === T((L = S(L, 'y', '')), 'g') && (L += 'g'), (b = g(f, this.lastIndex)), this.lastIndex > 0 && (!this.multiline || (this.multiline && '\n' !== m(f, this.lastIndex - 1))) && ((D = '(?: ' + D + ')'), (b = ' ' + b), y++), (n = RegExp('^(?:' + D + ')', L))),
            O && (n = RegExp('^' + D + '$(?!\\s)', L)),
            A && (r = this.lastIndex),
            (i = a(p, C ? n : this, b)),
            C ? (i ? ((i.input = g(i.input, y)), (i[0] = g(i[0], y)), (i.index = this.lastIndex), (this.lastIndex += i[0].length)) : (this.lastIndex = 0)) : A && i && (this.lastIndex = this.global ? i.index + i[0].length : r),
            O &&
                i &&
                i.length > 1 &&
                a(h, i[0], n, function () {
                    for (s = 1; s < arguments.length - 2; s++) void 0 === arguments[s] && (i[s] = void 0);
                }),
            i && v)
        )
            for (s = 0, i.groups = u = d(null); s < v.length; s++) u[(c = v[s])[0]] = i[c[1]];
        return i;
    }),
    (e.exports = I);
