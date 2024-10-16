Object.defineProperty(t, '__esModule', { value: !0 }), (t.FormatBuilder = void 0), (t.bindFormatValuesWithBuilder = o), (t.bindFormatValues = l);
let r = n(927882),
    i = n(22215),
    a = n(914193);
function s(e) {
    return '$' === e[0];
}
function o(e, t, n, s, u, c = {}, d, _) {
    var E, f;
    if (1 === t.length && 'string' == typeof t[0]) {
        e.pushLiteralText(t[0]);
        return;
    }
    for (let h of t) {
        if ('string' == typeof h) {
            e.pushLiteralText(h);
            continue;
        }
        let t = h[0];
        if (t === i.FormatJsNodeType.Pound) {
            if ('number' == typeof d) {
                let t = s.getNumberFormat(n).format(d);
                e.pushLiteralText(t);
            }
            continue;
        }
        let p = h[1];
        if (!(p in c) && '$' !== p[0]) throw new a.MissingValueError(p, _);
        let I = c[p];
        switch (t) {
            case i.FormatJsNodeType.Argument:
                'object' == typeof I || 'function' == typeof I ? e.pushObject(I) : e.pushLiteralText(String(I));
                break;
            case i.FormatJsNodeType.Date: {
                let t = h[2],
                    i = t in u.date ? u.date[t] : null != t ? (0, r.parseDateTimeSkeleton)(t) : u.time.medium;
                e.pushLiteralText(s.getDateTimeFormat(n, i).format(I));
                break;
            }
            case i.FormatJsNodeType.Time: {
                let t = h[2],
                    i = t in u.time ? u.time[t] : null != t ? (0, r.parseDateTimeSkeleton)(t) : void 0;
                e.pushLiteralText(s.getDateTimeFormat(n, i).format(I));
                break;
            }
            case i.FormatJsNodeType.Number: {
                let t = h[2],
                    i = t in u.number ? u.number[t] : null != t ? (0, r.parseNumberSkeleton)((0, r.parseNumberSkeletonFromString)(t)) : void 0,
                    a = 'number' != typeof I ? I : I * (null !== (E = null == i ? void 0 : i.scale) && void 0 !== E ? E : 1);
                e.pushLiteralText(s.getNumberFormat(n, i).format(a));
                break;
            }
            case i.FormatJsNodeType.Tag: {
                let t = h[2],
                    r = h[3],
                    i = l(e.constructor, t, n, s, u, c, d),
                    a = null != r ? l(e.constructor, r, n, s, u, c, d) : [];
                if ('$' === p[0]) e.pushRichTextTag(p, i, a);
                else {
                    if ('function' != typeof I) throw `expected a function type for a Tag formatting value, ${p}. got ${typeof I}: ${I}`;
                    let t = I(i);
                    for (let n of (t = Array.isArray(t) ? t : [t])) 'string' == typeof n ? e.pushLiteralText(n) : e.pushObject(n);
                }
                break;
            }
            case i.FormatJsNodeType.Select: {
                let t = h[1],
                    r = h[2],
                    i = t in r ? r[t] : r.other;
                if (null == i) throw `${t} is not a known option for select value ${p}. Valid options are ${Object.keys(r).join(', ')}`;
                o(e, i, n, s, u, c);
                break;
            }
            case i.FormatJsNodeType.Plural: {
                let t = h[1],
                    r = h[2],
                    i = h[3],
                    a = h[4],
                    l = (() => {
                        var e;
                        let o = `=${t}`;
                        return o in r ? r[o] : null !== (e = r[s.getPluralRules(n, { type: a }).select(t - (null != i ? i : 0))]) && void 0 !== e ? e : r.other;
                    })();
                if (null == l) throw `${t} is not a known option for plural value ${p}. Valid options are ${Object.keys(r).join(', ')}`;
                o(e, l, n, s, u, c, t - (null !== (f = h.offset) && void 0 !== f ? f : 0));
            }
        }
    }
}
function l(e, t, n, r, i, a = {}, s) {
    let l = new e();
    return o(l, t, n, r, i, a, s), l.finish();
}
t.FormatBuilder = class e {};
