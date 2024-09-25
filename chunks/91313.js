n.d(t, {
    HZ: function () {
        return m;
    },
    IB: function () {
        return g;
    },
    cr: function () {
        return p;
    },
    cu: function () {
        return I;
    },
    lk: function () {
        return S;
    },
    tM: function () {
        return T;
    },
    xi: function () {
        return A;
    },
    zb: function () {
        return v;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(911969),
    o = n(555573),
    s = n(998698),
    l = n(509716),
    u = n(703558),
    c = n(117530),
    d = n(752305),
    _ = n(925994),
    E = n(887490),
    f = n(42530);
let h = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;
function p(e) {
    let t = E.bN.richValue(e)[0];
    return null == t || 'applicationCommand' !== t.type ? null : [t, f.YD];
}
function m(e) {
    var t, n;
    if (null == e.selection) return null;
    let r =
        null !==
            (t = E.bN.above(e, {
                at: e.selection.focus,
                match: (e) => E.aj.isType(e, 'applicationCommandOption')
            })) && void 0 !== t
            ? t
            : null;
    return null != r || E.M8.isCollapsed(e.selection)
        ? r
        : null !==
                (n = E.bN.above(e, {
                    at: e.selection.anchor,
                    match: (e) => E.aj.isType(e, 'applicationCommandOption')
                })) && void 0 !== n
          ? n
          : null;
}
function I(e) {
    let t = p(e),
        n = [],
        r = null == t ? void 0 : t[0].children;
    if (null != r) for (let e of r) E.aj.isType(e, 'applicationCommandOption') && n.push(e.optionName);
    return n;
}
function T(e, t, n) {
    let r = {};
    if (null == t.options) return {};
    let i = p(e),
        a = Object.fromEntries(t.options.map((e) => [e.name, e])),
        o = null == i ? void 0 : i[0].children;
    if (null != o) {
        for (let t of o)
            if (E.aj.isType(t, 'applicationCommandOption')) {
                let i = a[t.optionName];
                null != i && (r[t.optionName] = g(e, i, t, n));
            }
    }
    return r;
}
function g(e, t, n, r) {
    let i = n.children.map((n) => {
        if (t.type === a.jw.ATTACHMENT) {
            let e = c.Z.getUpload(r, t.name, u.d.SlashCommand);
            if (null != e) {
                var i;
                return {
                    type: 'text',
                    text: null !== (i = e.filename) && void 0 !== i ? i : ''
                };
            }
        }
        if (E.LC.isText(n))
            return {
                type: 'text',
                text: n.text
            };
        if (E.bN.isVoid(e, n)) {
            let e = (0, d.VI)(n);
            if (null != e) return e;
        }
        return {
            type: 'text',
            text: (0, _.sg)(n, { mode: 'raw' })
        };
    });
    if (t.type !== a.jw.STRING) {
        for (; i.length > 0 && 'text' === i[0].type && '' === i[0].text.trim(); ) i.shift();
        for (; i.length > 0 && 'text' === i[i.length - 1].type && '' === i[i.length - 1].text.trim(); ) i.pop();
    }
    return i;
}
function S(e, t, n, r, i) {
    if (null == e.options) return {};
    let a = Object.fromEntries(
        e.options.map((e) => {
            var a;
            return [
                e.name,
                l.f({
                    option: e,
                    content: null !== (a = r[e.name]) && void 0 !== a ? a : null,
                    guildId: t,
                    channelId: n,
                    allowEmptyValues: i
                })
            ];
        })
    );
    return o.VP(n, a), a;
}
function A(e, t, n, r, i) {
    var a;
    let [u] = r,
        c = s.Z.getActiveCommand(n),
        d = null == c ? void 0 : null === (a = c.options) || void 0 === a ? void 0 : a.find((e) => e.name === u.optionName);
    if (null == d) return;
    let _ = g(e, d, u, n),
        E = l.f({
            option: d,
            content: _,
            guildId: t,
            channelId: n,
            allowEmptyValues: i
        });
    return o.g7(n, { [u.optionName]: { lastValidationResult: E } }), E;
}
function v(e, t) {
    if (null == t.options || 0 === t.options.length) return [];
    let n = E.bN.richValue(e),
        r = [],
        i = new Set(I(e)),
        a = {},
        o = new Set();
    for (let e of t.options) (a[e.displayName] = e), !i.has(e.name) && o.add(e.displayName);
    let s = null;
    for (let t = 0; t < n.length; t++) {
        let i = n[t];
        if ('line' === i.type || 'applicationCommand' === i.type)
            for (let u = 0; u < i.children.length; u++) {
                let c;
                let d = i.children[u],
                    f = [t, u];
                if (E.aj.isType(d, 'applicationCommandOption')) {
                    if (null != s) {
                        var l;
                        (s.valueRange.focus = null !== (l = E.bN.before(e, f)) && void 0 !== l ? l : E.bN.start(e, [])),
                            (s.text = (0, _.sk)(n, {
                                mode: 'raw',
                                range: s.valueRange
                            }).trim()),
                            r.push(s),
                            (s = null);
                    }
                    continue;
                }
                if (!!E.LC.isText(d))
                    for (h.lastIndex = 0; null != (c = h.exec(d.text)); ) {
                        if (0 !== c.index && null == d.text.charAt(c.index - 1).match(/(\t|\s)/)) continue;
                        let e = c[1];
                        if (!o.has(e)) continue;
                        o.delete(e);
                        let t = a[e];
                        if (null == t) continue;
                        let i = {
                                path: f,
                                offset: c.index
                            },
                            l = {
                                path: f,
                                offset: i.offset + c[0].length
                            },
                            u = {
                                path: f,
                                offset: l.offset
                            },
                            E = {
                                name: t.name,
                                displayName: t.displayName,
                                type: t.type,
                                keyRange: {
                                    anchor: i,
                                    focus: l
                                },
                                valueRange: {
                                    anchor: u,
                                    focus: u
                                },
                                text: ''
                            };
                        null != s &&
                            ((s.valueRange.focus = E.keyRange.anchor),
                            (s.text = (0, _.sk)(n, {
                                mode: 'raw',
                                range: s.valueRange
                            }).trim()),
                            r.push(s)),
                            (s = E);
                    }
            }
    }
    return (
        null != s &&
            ((s.valueRange.focus = E.bN.end(e, [])),
            (s.text = (0, _.sk)(n, {
                mode: 'raw',
                range: s.valueRange
            }).trim()),
            r.push(s)),
        r
    );
}
