n.d(t, {
    yw: function () {
        return b;
    }
}),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(411104);
var r = n(392711),
    i = n.n(r),
    a = n(31775),
    s = n.n(a);
n(711739);
var o = n(302454),
    l = n.n(o),
    u = n(830121),
    c = n(823379),
    d = n(172244),
    f = n(571989);
let _ = new (s())({ max: 50 });
function h(e) {
    let t = _.get(e);
    if (null != t) return t;
    let n = (0, f.yx)(e),
        r = (0, f.zq)(n),
        i = {
            whitespaceSanitized: n,
            fullySanitized: r
        };
    return _.set(e, i), i;
}
let p = ['http:', 'https:', 'discord:'],
    m = [d.b.TEXT, d.b.UNDERLINE, d.b.STRONG, d.b.ITALICS, d.b.STRIKETHROUGH, d.b.INLINE_CODE, d.b.SPOILER, d.b.LINE_BREAK, d.b.TIMESTAMP],
    g = [...m, d.b.EMOJI, d.b.CUSTOM_EMOJI],
    E = [d.b.LIST, d.b.HEADING, d.b.BLOCK_QUOTE, d.b.SUBTEXT],
    v = [d.b.TEXT],
    I = [d.b.UNDERLINE, d.b.STRONG, d.b.ITALICS, d.b.STRIKETHROUGH, d.b.INLINE_CODE, d.b.SPOILER, d.b.LINE_BREAK, d.b.TIMESTAMP, d.b.EMOJI, d.b.CUSTOM_EMOJI, d.b.LIST, d.b.HEADING, d.b.BLOCK_QUOTE, d.b.SUBTEXT];
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    for (let r of (!Array.isArray(e) && (e = [e]), e)) {
        if (void 0 === r || !t.includes(r.type)) return null;
        if (r.type === d.b.INLINE_CODE) {
            let e = [...t, ...n];
            if (null == S(r.validationChildContent, e)) return null;
        }
        if (Array.isArray(r.content) && null == S(r.content, t)) return null;
    }
    return e;
}
function b(e) {
    try {
        var t;
        let n = new URL(e),
            r = null !== (t = n.protocol) && void 0 !== t ? t : '';
        if (!p.includes(r.toLowerCase())) throw Error('Provided protocol is not allowed: ' + r);
        if (('http:' === r || 'https:' === r) && (null == n.hostname || 0 === n.hostname.length)) throw Error('no hostname');
        let i = (0, f.MO)(n);
        (n.username = ''), (n.password = '');
        let a = (0, f.MO)(n);
        return {
            target: i,
            displayTarget: a
        };
    } catch (e) {
        return null;
    }
}
t.ZP = {
    ...l().defaultRules.link,
    match: (e, t, n) => (t.allowLinks ? l().defaultRules.link.match(e, t, n) : null),
    parse(e, t, n) {
        let [r, a, s, o] = e,
            f = () => ({
                type: d.b.TEXT,
                content: r
            }),
            _ = h(s),
            p = h(a),
            T = h(null != o ? o : ''),
            y = _.whitespaceSanitized,
            A = p.fullySanitized,
            N = T.fullySanitized,
            C = A.trim();
        if (0 === y.trim().length || 0 === C.length) return f();
        let R = b(l().unescapeUrl(s)),
            O = (0, u.ZP)(a).length > 0 || (0, u.ZP)(o).length > 0;
        if (null == R || O) return f();
        let D = {
                ...n,
                allowEscape: !1,
                parseInlineCodeChildContent: !0
            },
            L = n.allowEmojiLinks ? g : m,
            x = [...L, ...E],
            w = [...v, ...I],
            M = S(t(A, D), x, [d.b.EMOJI]),
            P = S(t(N, D), w);
        if (
            null == M ||
            null == P ||
            0 ===
                (function e(t) {
                    let n = '';
                    for (let r of t)
                        switch (r.type) {
                            case d.b.TEXT:
                            case d.b.INLINE_CODE:
                                n += r.content;
                                break;
                            case d.b.CUSTOM_EMOJI:
                                n += r.name;
                                break;
                            case d.b.EMOJI:
                                n += r.surrogate;
                                break;
                            case d.b.LINE_BREAK:
                                n += '\n';
                                break;
                            case d.b.STRONG:
                            case d.b.ITALICS:
                            case d.b.UNDERLINE:
                            case d.b.STRIKETHROUGH:
                            case d.b.SPOILER:
                                n += e(r.content);
                                break;
                            case d.b.TIMESTAMP:
                                n += '<timestamp>';
                                break;
                            case d.b.BLOCK_QUOTE:
                            case d.b.LIST:
                            case d.b.HEADING:
                            case d.b.SUBTEXT:
                                n += '<'.concat(r.type, 'Content>');
                                break;
                            default:
                                (0, c.vE)(r.type);
                        }
                    return n;
                })(M).trim().length
        )
            return f();
        let k = i().pick(t.rules, L),
            U = l().parserFor(k)(p.whitespaceSanitized, D),
            G = T.whitespaceSanitized,
            { target: B } = R;
        return {
            content: U,
            target: B,
            title: G
        };
    }
};
