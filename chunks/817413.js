var r,
    n,
    i =
        (this && this.__read) ||
        function (t, e) {
            var r = 'function' == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
                i,
                o = r.call(t),
                a = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; ) a.push(n.value);
            } catch (t) {
                i = { error: t };
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o);
                } finally {
                    if (i) throw i.error;
                }
            }
            return a;
        };
function o(t) {
    for (var e = 0; e < t.length; e++) t[e] = a(t[e]);
}
Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.FORMAT_JS_POUND = e.FormatJsNodeType = void 0),
    (e.hydrateFormatJsAst = a),
    (e.hydrateMessages = function (t) {
        for (var e in t) t[e] = a(t[e]);
        return t;
    }),
    ((r = n || (e.FormatJsNodeType = n = {}))[(r.Literal = 0)] = 'Literal'),
    (r[(r.Argument = 1)] = 'Argument'),
    (r[(r.Number = 2)] = 'Number'),
    (r[(r.Date = 3)] = 'Date'),
    (r[(r.Time = 4)] = 'Time'),
    (r[(r.Select = 5)] = 'Select'),
    (r[(r.Plural = 6)] = 'Plural'),
    (r[(r.Pound = 7)] = 'Pound'),
    (r[(r.Tag = 8)] = 'Tag'),
    (e.FORMAT_JS_POUND = Object.freeze({ type: 7 }));
function a(t) {
    return Array.isArray(t[0])
        ? (o(t), t)
        : 0 === t.length
          ? t
          : (function (t) {
                var r = i(t, 1)[0];
                switch (r) {
                    case n.Literal:
                    case n.Argument:
                        return {
                            type: r,
                            value: t[1]
                        };
                    case n.Number:
                    case n.Date:
                    case n.Time:
                        return {
                            type: r,
                            value: t[1],
                            style: t[2]
                        };
                    case n.Select:
                    case n.Plural:
                        return (function (t) {
                            var e = i(t, 5),
                                r = e[0],
                                a = e[1],
                                s = e[2],
                                u = e[3],
                                c = e[4];
                            for (var l in s) o(s[l].value);
                            return r === n.Plural
                                ? {
                                      type: r,
                                      value: a,
                                      options: s,
                                      offset: u,
                                      pluralType: c
                                  }
                                : {
                                      type: r,
                                      value: a,
                                      options: s,
                                      offset: u
                                  };
                        })(t);
                    case n.Pound:
                        return e.FORMAT_JS_POUND;
                    case n.Tag:
                        var a = i(t, 3),
                            s = a[0],
                            u = a[1],
                            c = a[2];
                        return (
                            o(c),
                            {
                                type: s,
                                value: u,
                                children: c
                            }
                        );
                    default:
                        throw Error('FormatJS keyless JSON encountered an unknown type: '.concat(r));
                }
            })(t);
}
