Object.defineProperty(t, '__esModule', { value: !0 }), (t.FormatBuilder = void 0), (t.bindFormatValuesWithBuilder = o), (t.bindFormatValues = l);
let r = n(927882),
    i = n(653027),
    a = n(914193);
function s(e) {
    return '$' === e[0];
}
function o(e, t, n, s, u, c = {}, d, _) {
    var E;
    if (1 === t.length && 'string' == typeof t[0]) {
        e.pushLiteralText(t[0]);
        return;
    }
    for (let f of t) {
        if ('string' == typeof f) {
            e.pushLiteralText(f);
            continue;
        }
        let t = f[0];
        if (t === i.FormatJsNodeType.Pound) {
            if ('number' == typeof d) {
                let t = s.getNumberFormat(n).format(d);
                e.pushLiteralText(t);
            }
            continue;
        }
        let h = f[1];
        if (!(h in c) && '$' !== h[0]) throw new a.MissingValueError(h, _);
        let p = c[h];
        switch (t) {
            case i.FormatJsNodeType.Argument:
                'object' == typeof p || 'function' == typeof p ? e.pushObject(p) : e.pushLiteralText(String(p));
                break;
            case i.FormatJsNodeType.Date: {
                let t = f[2],
                    i = t in u.date ? u.date[t] : null != t ? (0, r.parseDateTimeSkeleton)(t) : u.time.medium;
                e.pushLiteralText(s.getDateTimeFormat(n, i).format(p));
                break;
            }
            case i.FormatJsNodeType.Time: {
                let t = f[2],
                    i = t in u.time ? u.time[t] : null != t ? (0, r.parseDateTimeSkeleton)(t) : void 0;
                e.pushLiteralText(s.getDateTimeFormat(n, i).format(p));
                break;
            }
            case i.FormatJsNodeType.Number: {
                let t = f[2],
                    i = t in u.number ? u.number[t] : null != t ? (0, r.parseNumberSkeleton)((0, r.parseNumberSkeletonFromString)(t)) : void 0,
                    a = 'number' != typeof p ? p : p * (null !== (E = null == i ? void 0 : i.scale) && void 0 !== E ? E : 1);
                e.pushLiteralText(s.getNumberFormat(n, i).format(a));
                break;
            }
            case i.FormatJsNodeType.Tag: {
                let t = f[2],
                    r = f[3],
                    i = l(e.constructor, t, n, s, u, c, d),
                    a = null != r ? l(e.constructor, r, n, s, u, c, d) : [];
                if ('$' === h[0]) e.pushRichTextTag(h, i, a);
                else {
                    if ('function' != typeof p) throw `expected a function type for a Tag formatting value, ${h}. got ${typeof p}: ${p}`;
                    let t = p(i);
                    for (let n of (t = Array.isArray(t) ? t : [t])) 'string' == typeof n ? e.pushLiteralText(n) : e.pushObject(n);
                }
                break;
            }
            case i.FormatJsNodeType.Select: {
                let t = f[2],
                    r = p in t ? t[p] : t.other;
                if (null == r) throw `${p} is not a known option for select value ${h}. Valid options are ${Object.keys(t).join(', ')}`;
                o(e, r, n, s, u, c);
                break;
            }
            case i.FormatJsNodeType.Plural: {
                let t = f[2],
                    r = f[3],
                    i = f[4],
                    a = (() => {
                        var e;
                        let a = `=${p}`;
                        return a in t ? t[a] : null !== (e = t[s.getPluralRules(n, { type: i }).select(p - (null != r ? r : 0))]) && void 0 !== e ? e : t.other;
                    })();
                if (null == a) throw `${p} is not a known option for plural value ${h}. Valid options are ${Object.keys(t).join(', ')}`;
                o(e, a, n, s, u, c, p - (null != r ? r : 0));
            }
        }
    }
}
function l(e, t, n, r, i, a = {}, s) {
    let l = new e();
    return 'string' == typeof t ? (l.pushLiteralText(t), l.finish()) : (o(l, t, n, r, i, a, s), l.finish());
}
t.FormatBuilder = class e {};
