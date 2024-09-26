n.d(t, {
    yw: function () {
        return D;
    }
});
var r = n(47120);
var i = n(315314);
var a = n(610138);
var o = n(216116);
var s = n(78328);
var l = n(815648);
var u = n(411104);
var c = n(392711),
    d = n.n(c),
    _ = n(31775),
    E = n.n(_),
    f = n(711739);
var h = n(302454),
    p = n.n(h),
    m = n(830121),
    I = n(823379),
    T = n(172244),
    g = n(571989);
let S = new (E())({ max: 50 });
function A(e) {
    let t = e,
        n = S.get(t);
    if (null != n) return n;
    let r = (0, g.yx)(e),
        i = (0, g.zq)(r),
        a = {
            whitespaceSanitized: r,
            fullySanitized: i
        };
    return S.set(t, a), a;
}
let v = ['http:', 'https:', 'discord:'],
    N = [T.b.TEXT, T.b.UNDERLINE, T.b.STRONG, T.b.ITALICS, T.b.STRIKETHROUGH, T.b.INLINE_CODE, T.b.SPOILER, T.b.LINE_BREAK, T.b.TIMESTAMP],
    O = [...N, T.b.EMOJI, T.b.CUSTOM_EMOJI],
    R = [T.b.LIST, T.b.HEADING, T.b.BLOCK_QUOTE, T.b.SUBTEXT],
    C = [T.b.TEXT],
    y = [T.b.UNDERLINE, T.b.STRONG, T.b.ITALICS, T.b.STRIKETHROUGH, T.b.INLINE_CODE, T.b.SPOILER, T.b.LINE_BREAK, T.b.TIMESTAMP, T.b.EMOJI, T.b.CUSTOM_EMOJI, T.b.LIST, T.b.HEADING, T.b.BLOCK_QUOTE, T.b.SUBTEXT];
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let r of (!Array.isArray(e) && (e = [e]), e)) {
        if (void 0 === r || !t.includes(r.type)) return null;
        if (r.type === T.b.INLINE_CODE) {
            let e = [...t, ...n];
            if (null == L(r.validationChildContent, e)) return null;
        }
        if (Array.isArray(r.content) && null == L(r.content, t)) return null;
    }
    return e;
}
function b(e) {
    let t = '';
    for (let n of e)
        switch (n.type) {
            case T.b.TEXT:
            case T.b.INLINE_CODE:
                t += n.content;
                break;
            case T.b.CUSTOM_EMOJI:
                t += n.name;
                break;
            case T.b.EMOJI:
                t += n.surrogate;
                break;
            case T.b.LINE_BREAK:
                t += '\n';
                break;
            case T.b.STRONG:
            case T.b.ITALICS:
            case T.b.UNDERLINE:
            case T.b.STRIKETHROUGH:
            case T.b.SPOILER:
                t += b(n.content);
                break;
            case T.b.TIMESTAMP:
                t += '<timestamp>';
                break;
            case T.b.BLOCK_QUOTE:
            case T.b.LIST:
            case T.b.HEADING:
            case T.b.SUBTEXT:
                t += '<'.concat(n.type, 'Content>');
                break;
            default:
                (0, I.vE)(n.type);
        }
    return t;
}
function D(e) {
    try {
        var t;
        let n = new URL(e),
            r = null !== (t = n.protocol) && void 0 !== t ? t : '';
        if (!v.includes(r.toLowerCase())) throw Error('Provided protocol is not allowed: ' + r);
        if (('http:' === r || 'https:' === r) && (null == n.hostname || 0 === n.hostname.length)) throw Error('no hostname');
        let i = (0, g.MO)(n);
        (n.username = ''), (n.password = '');
        let a = (0, g.MO)(n);
        return {
            target: i,
            displayTarget: a
        };
    } catch (e) {
        return null;
    }
}
t.ZP = {
    ...p().defaultRules.link,
    match: (e, t, n) => (t.allowLinks ? p().defaultRules.link.match(e, t, n) : null),
    parse(e, t, n) {
        let [r, i, a, o] = e,
            s = () => ({
                type: T.b.TEXT,
                content: r
            }),
            l = A(a),
            u = A(i),
            c = A(null != o ? o : ''),
            _ = l.whitespaceSanitized,
            E = u.fullySanitized,
            f = c.fullySanitized,
            h = E.trim();
        if (0 === _.trim().length || 0 === h.length) return s();
        let I = D(p().unescapeUrl(a)),
            g = null == I,
            S = (0, m.ZP)(i).length > 0 || (0, m.ZP)(o).length > 0;
        if (g || S) return s();
        let v = {
                ...n,
                allowEscape: !1,
                parseInlineCodeChildContent: !0
            },
            M = n.allowEmojiLinks ? O : N,
            P = [...M, ...R],
            U = [...C, ...y],
            w = L(t(E, v), P, [T.b.EMOJI]),
            x = L(t(f, v), U);
        if (null == w || null == x || 0 === b(w).trim().length) return s();
        let G = d().pick(t.rules, M),
            k = p().parserFor(G)(u.whitespaceSanitized, v),
            B = c.whitespaceSanitized,
            { target: F } = I;
        return {
            content: k,
            target: F,
            title: B
        };
    }
};
