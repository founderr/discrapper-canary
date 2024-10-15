var n, r, i, a;
function s(e) {
    for (let t = 0; t < e.length; t++) e[t] = o(e[t]);
    return !0;
}
Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.FORMAT_JS_POUND = t.AstNodeIndices = t.FormatJsNodeType = void 0),
    (t.hydrateFormatJsAst = function (e) {
        return 'string' == typeof e[0] ? (s(e), e) : 0 === e.length ? e : Array.isArray(e[0]) ? (s(e), e) : o(e);
    }),
    (t.compressFormatJsToAst = function e(t) {
        if (Array.isArray(t)) return t.map((t) => e(t));
        switch (t.type) {
            case n.Literal:
                return t.value;
            case n.Argument:
                return [t.type, t.value];
            case n.Number:
            case n.Date:
            case n.Time:
                return [t.type, t.value, t.style];
            case n.Select: {
                let n = {};
                for (let [r, i] of Object.entries(t.options)) n[r] = e(i.value);
                return [t.type, t.value, n];
            }
            case n.Plural: {
                let n = {};
                for (let [r, i] of Object.entries(t.options)) n[r] = e(i.value);
                return [t.type, t.value, n, t.offset, t.pluralType];
            }
            case n.Pound:
                return [t.type];
            case n.Tag:
                return [t.type, t.value, e(t.children)];
        }
    }),
    (t.isCompressedAst = function (e) {
        return !!Array.isArray(e) && (Array.isArray(e[0]) || 'string' == typeof e[0]);
    }),
    ((i = n || (t.FormatJsNodeType = n = {}))[(i.Literal = 0)] = 'Literal'),
    (i[(i.Argument = 1)] = 'Argument'),
    (i[(i.Number = 2)] = 'Number'),
    (i[(i.Date = 3)] = 'Date'),
    (i[(i.Time = 4)] = 'Time'),
    (i[(i.Select = 5)] = 'Select'),
    (i[(i.Plural = 6)] = 'Plural'),
    (i[(i.Pound = 7)] = 'Pound'),
    (i[(i.Tag = 8)] = 'Tag'),
    ((a = r || (t.AstNodeIndices = r = {}))[(a.Type = 0)] = 'Type'),
    (a[(a.Value = 1)] = 'Value'),
    (a[(a.Style = 2)] = 'Style'),
    (a[(a.Options = 2)] = 'Options'),
    (a[(a.Offset = 3)] = 'Offset'),
    (a[(a.PluralType = 4)] = 'PluralType'),
    (a[(a.Children = 2)] = 'Children'),
    (t.FORMAT_JS_POUND = Object.freeze({ type: 7 }));
function o(e) {
    if ('string' == typeof e)
        return {
            type: 0,
            value: e
        };
    let [r] = e;
    switch (r) {
        case n.Argument:
            return {
                type: r,
                value: e[1]
            };
        case n.Number:
        case n.Date:
        case n.Time:
            return {
                type: r,
                value: e[1],
                style: e[2]
            };
        case n.Select:
        case n.Plural:
            return (function (e) {
                let [t, r, i, a, o] = e;
                for (let e in i) s(i[e]), (i[e] = { value: i[e] });
                return t === n.Plural
                    ? {
                          type: t,
                          value: r,
                          options: i,
                          offset: a,
                          pluralType: o
                      }
                    : {
                          type: t,
                          value: r,
                          options: i,
                          offset: a
                      };
            })(e);
        case n.Pound:
            return t.FORMAT_JS_POUND;
        case n.Tag: {
            let [t, n, r] = e;
            return (
                s(r),
                {
                    type: t,
                    value: n,
                    children: r
                }
            );
        }
        default:
            throw Error(`FormatJS keyless JSON encountered an unknown type: ${r}`);
    }
}
