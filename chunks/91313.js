r.d(n, {
    HZ: function () {
        return E;
    },
    IB: function () {
        return T;
    },
    cr: function () {
        return g;
    },
    cu: function () {
        return v;
    },
    lk: function () {
        return b;
    },
    tM: function () {
        return I;
    },
    xi: function () {
        return y;
    },
    zb: function () {
        return S;
    }
});
var i = r(653041);
var a = r(47120);
var s = r(911969),
    o = r(555573),
    l = r(998698),
    u = r(509716),
    c = r(703558),
    d = r(117530),
    f = r(752305),
    _ = r(925994),
    h = r(887490),
    p = r(42530);
let m = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;
function g(e) {
    let n = h.bN.richValue(e)[0];
    return null == n || 'applicationCommand' !== n.type ? null : [n, p.YD];
}
function E(e) {
    var n, r;
    if (null == e.selection) return null;
    let i =
        null !==
            (n = h.bN.above(e, {
                at: e.selection.focus,
                match: (e) => h.aj.isType(e, 'applicationCommandOption')
            })) && void 0 !== n
            ? n
            : null;
    return null != i || h.M8.isCollapsed(e.selection)
        ? i
        : null !==
                (r = h.bN.above(e, {
                    at: e.selection.anchor,
                    match: (e) => h.aj.isType(e, 'applicationCommandOption')
                })) && void 0 !== r
          ? r
          : null;
}
function v(e) {
    let n = g(e),
        r = [],
        i = null == n ? void 0 : n[0].children;
    if (null != i) for (let e of i) h.aj.isType(e, 'applicationCommandOption') && r.push(e.optionName);
    return r;
}
function I(e, n, r) {
    let i = {};
    if (null == n.options) return {};
    let a = g(e),
        s = Object.fromEntries(n.options.map((e) => [e.name, e])),
        o = null == a ? void 0 : a[0].children;
    if (null != o) {
        for (let n of o)
            if (h.aj.isType(n, 'applicationCommandOption')) {
                let a = s[n.optionName];
                null != a && (i[n.optionName] = T(e, a, n, r));
            }
    }
    return i;
}
function T(e, n, r, i) {
    let a = r.children.map((r) => {
        if (n.type === s.jw.ATTACHMENT) {
            let e = d.Z.getUpload(i, n.name, c.d.SlashCommand);
            if (null != e) {
                var a;
                return {
                    type: 'text',
                    text: null !== (a = e.filename) && void 0 !== a ? a : ''
                };
            }
        }
        if (h.LC.isText(r))
            return {
                type: 'text',
                text: r.text
            };
        if (h.bN.isVoid(e, r)) {
            let e = (0, f.VI)(r);
            if (null != e) return e;
        }
        return {
            type: 'text',
            text: (0, _.sg)(r, { mode: 'raw' })
        };
    });
    if (n.type !== s.jw.STRING) {
        for (; a.length > 0 && 'text' === a[0].type && '' === a[0].text.trim(); ) a.shift();
        for (; a.length > 0 && 'text' === a[a.length - 1].type && '' === a[a.length - 1].text.trim(); ) a.pop();
    }
    return a;
}
function b(e, n, r, i, a) {
    if (null == e.options) return {};
    let s = Object.fromEntries(
        e.options.map((e) => {
            var s;
            return [
                e.name,
                u.f({
                    option: e,
                    content: null !== (s = i[e.name]) && void 0 !== s ? s : null,
                    guildId: n,
                    channelId: r,
                    allowEmptyValues: a
                })
            ];
        })
    );
    return o.VP(r, s), s;
}
function y(e, n, r, i, a) {
    var s;
    let [c] = i,
        d = l.Z.getActiveCommand(r),
        f = null == d ? void 0 : null === (s = d.options) || void 0 === s ? void 0 : s.find((e) => e.name === c.optionName);
    if (null == f) return;
    let _ = T(e, f, c, r),
        h = u.f({
            option: f,
            content: _,
            guildId: n,
            channelId: r,
            allowEmptyValues: a
        });
    return o.g7(r, { [c.optionName]: { lastValidationResult: h } }), h;
}
function S(e, n) {
    if (null == n.options || 0 === n.options.length) return [];
    let r = h.bN.richValue(e),
        i = [],
        a = new Set(v(e)),
        s = {},
        o = new Set();
    for (let e of n.options) (s[e.displayName] = e), !a.has(e.name) && o.add(e.displayName);
    let l = null;
    for (let n = 0; n < r.length; n++) {
        let a = r[n];
        if ('line' === a.type || 'applicationCommand' === a.type)
            for (let c = 0; c < a.children.length; c++) {
                let d;
                let f = a.children[c],
                    p = [n, c];
                if (h.aj.isType(f, 'applicationCommandOption')) {
                    if (null != l) {
                        var u;
                        (l.valueRange.focus = null !== (u = h.bN.before(e, p)) && void 0 !== u ? u : h.bN.start(e, [])),
                            (l.text = (0, _.sk)(r, {
                                mode: 'raw',
                                range: l.valueRange
                            }).trim()),
                            i.push(l),
                            (l = null);
                    }
                    continue;
                }
                if (!!h.LC.isText(f))
                    for (m.lastIndex = 0; null != (d = m.exec(f.text)); ) {
                        if (0 !== d.index && null == f.text.charAt(d.index - 1).match(/(\t|\s)/)) continue;
                        let e = d[1];
                        if (!o.has(e)) continue;
                        o.delete(e);
                        let n = s[e];
                        if (null == n) continue;
                        let a = {
                                path: p,
                                offset: d.index
                            },
                            u = {
                                path: p,
                                offset: a.offset + d[0].length
                            },
                            c = {
                                path: p,
                                offset: u.offset
                            },
                            h = {
                                name: n.name,
                                displayName: n.displayName,
                                type: n.type,
                                keyRange: {
                                    anchor: a,
                                    focus: u
                                },
                                valueRange: {
                                    anchor: c,
                                    focus: c
                                },
                                text: ''
                            };
                        null != l &&
                            ((l.valueRange.focus = h.keyRange.anchor),
                            (l.text = (0, _.sk)(r, {
                                mode: 'raw',
                                range: l.valueRange
                            }).trim()),
                            i.push(l)),
                            (l = h);
                    }
            }
    }
    return (
        null != l &&
            ((l.valueRange.focus = h.bN.end(e, [])),
            (l.text = (0, _.sk)(r, {
                mode: 'raw',
                range: l.valueRange
            }).trim()),
            i.push(l)),
        i
    );
}
