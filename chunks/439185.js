var n =
    (this && this.__values) ||
    function (t) {
        var e = 'function' == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0;
        if (r) return r.call(t);
        if (t && 'number' == typeof t.length)
            return {
                next: function () {
                    return (
                        t && n >= t.length && (t = void 0),
                        {
                            value: t && t[n++],
                            done: !t
                        }
                    );
                }
            };
        throw TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
    };
Object.defineProperty(e, '__esModule', { value: !0 }), (e.FormatBuilder = void 0), (e.bindFormatValuesWithBuilder = s), (e.bindFormatValues = u);
var i = r(817413),
    o = r(766989);
function a(t) {
    return '$' === t[0];
}
function s(t, e, r, a, c, l, h, f) {
    if ((void 0 === l && (l = {}), 1 === e.length && e[0].type === i.FormatJsNodeType.Literal)) {
        t.pushLiteralText(e[0].value);
        return;
    }
    var p,
        d,
        m,
        v = function (e) {
            switch (e.type) {
                case i.FormatJsNodeType.Literal:
                    return t.pushLiteralText(e.value), 'continue';
                case i.FormatJsNodeType.Pound:
                    if ('number' == typeof h) {
                        var p,
                            d,
                            v = a.getNumberFormat(r).format(h);
                        t.pushLiteralText(v);
                    }
                    return 'continue';
            }
            var g = e.value;
            if (!(g in l) && '$' !== g[0]) throw new o.MissingValueError(g, f);
            var y = l[g];
            switch (e.type) {
                case i.FormatJsNodeType.Argument:
                    if ('$_' == g) break;
                    'object' == typeof y ? t.pushObject(y) : t.pushLiteralText(String(y));
                    break;
                case i.FormatJsNodeType.Date:
                    if ('string' != typeof e.style) throw '@discord/intl does not currently support non-string format skeletons';
                    var b = e.style in c.date ? c.date[e.style] : void 0;
                    t.pushLiteralText(a.getDateTimeFormat(r, b).format(y));
                    break;
                case i.FormatJsNodeType.Time:
                    if ('string' != typeof e.style) throw '@discord/intl does not currently support non-string format skeletons';
                    var b = e.style in c.time ? c.time[e.style] : void 0;
                    t.pushLiteralText(a.getDateTimeFormat(r, b).format(y));
                    break;
                case i.FormatJsNodeType.Number:
                    if ('string' != typeof e.style) throw '@discord/intl does not currently support non-string format skeletons';
                    var b = e.style in c.number ? c.number[e.style] : void 0;
                    t.pushLiteralText(a.getNumberFormat(r, b).format(y));
                    break;
                case i.FormatJsNodeType.Tag:
                    var E = e.children,
                        T = u(t.constructor, E, r, a, c, l, h);
                    if ('$' === g[0]) t.pushRichTextTag(g, T);
                    else {
                        if ('function' != typeof y)
                            throw 'expected a function type for a Tag formatting value, '
                                .concat(g, '. got ')
                                .concat(typeof y, ': ')
                                .concat(y);
                        var _ = y(T);
                        _ = Array.isArray(_) ? _ : [_];
                        try {
                            for (var A = ((p = void 0), n(_)), L = A.next(); !L.done; L = A.next()) {
                                var I = L.value;
                                'string' == typeof I ? t.pushLiteralText(I) : t.pushObject(I);
                            }
                        } catch (t) {
                            p = { error: t };
                        } finally {
                            try {
                                L && !L.done && (d = A.return) && d.call(A);
                            } finally {
                                if (p) throw p.error;
                            }
                        }
                    }
                    break;
                case i.FormatJsNodeType.Select:
                    var S = e.value in e.options ? e.options[e.value] : e.options.other;
                    if (null == S) throw ''.concat(e.value, ' is not a known option for select value ').concat(g, '. Valid options are ').concat(Object.keys(e.options).join(', '));
                    s(t, S.value, r, a, c, l);
                    break;
                case i.FormatJsNodeType.Plural:
                    var S = (function () {
                        var t,
                            n,
                            i = '='.concat(y);
                        if (i in e.options) return e.options[i];
                        var o = a.getPluralRules(r, { type: e.pluralType }).select(y - (null !== (t = e.offset) && void 0 !== t ? t : 0));
                        return null !== (n = e.options[o]) && void 0 !== n ? n : e.options.other;
                    })();
                    if (null == S) throw ''.concat(e.value, ' is not a known option for plural value ').concat(g, '. Valid options are ').concat(Object.keys(e.options).join(', '));
                    s(t, S.value, r, a, c, l, y - (null !== (m = e.offset) && void 0 !== m ? m : 0));
            }
        };
    try {
        for (var g = n(e), y = g.next(); !y.done; y = g.next()) {
            var b = y.value;
            v(b);
        }
    } catch (t) {
        p = { error: t };
    } finally {
        try {
            y && !y.done && (d = g.return) && d.call(g);
        } finally {
            if (p) throw p.error;
        }
    }
}
function u(t, e, r, n, i, o, a) {
    void 0 === o && (o = {});
    var u = new t();
    return s(u, e, r, n, i, o, a), u.finish();
}
e.FormatBuilder = function () {};
