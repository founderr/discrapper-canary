n.d(t, {
    Q: function () {
        return x;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(757143);
var o = n(653041);
var s = n(512722),
    l = n.n(s),
    u = n(31775),
    c = n.n(u),
    d = n(302454);
var _ = n(25209),
    E = n(710845),
    f = n(772096),
    h = n(428595),
    p = n(594199),
    m = n(364458),
    I = n(70956),
    T = n(40786),
    g = n(362092);
let S = {
        link: { type: 'skip' },
        highlight: { type: 'skip' },
        blockQuote: { type: 'skip' },
        codeBlock: { type: 'skip' },
        list: { type: 'skip' },
        heading: { type: 'skip' },
        channelOrMessageUrl: { type: 'skip' },
        mediaPostLink: { type: 'skip' },
        attachmentLink: { type: 'skip' },
        newline: { type: 'verbatim' },
        br: { type: 'verbatim' },
        paragraph: { type: 'verbatim' },
        text: { type: 'verbatim' },
        emoticon: { type: 'verbatim' },
        mention: { type: 'inlineObject' },
        roleMention: { type: 'inlineObject' },
        commandMention: { type: 'inlineObject' },
        channelMention: { type: 'inlineObject' },
        emoji: { type: 'inlineObject' },
        customEmoji: { type: 'inlineObject' },
        looseEm: {
            type: 'inlineStyle',
            before: '*',
            after: ' *'
        },
        autolink: {
            type: 'inlineStyle',
            before: '<',
            after: '>'
        },
        strong: {
            type: 'inlineStyle',
            before: '**',
            after: '**'
        },
        u: {
            type: 'inlineStyle',
            before: '__',
            after: '__'
        },
        s: {
            type: 'inlineStyle',
            before: '~~',
            after: '~~'
        },
        escape: {
            type: 'inlineStyle',
            before: '\\',
            after: ''
        },
        staticRouteLink: {
            type: 'inlineStyle',
            before: '<id:',
            after: '>'
        },
        soundboard: {
            type: 'inlineStyle',
            before: '<sound:',
            after: '>'
        },
        spoiler: {
            type: 'inlineStyle',
            before: '||',
            after: '||'
        },
        url: {
            type: 'inlineStyle',
            before: '',
            after: ''
        },
        codeBlockText: {
            type: 'inlineStyle',
            before: '',
            after: ''
        },
        codeBlockSyntax: {
            type: 'inlineStyle',
            before: '',
            after: ''
        },
        codeBlockLang: {
            type: 'inlineStyle',
            before: '',
            after: ''
        },
        timestamp: { type: 'inlineObject' },
        em: {
            type: 'inlineStyle',
            before: '*',
            after: '*'
        },
        inlineCode: {
            type: 'inlineStyle',
            before: '`',
            after: '`'
        },
        subtext: {
            type: 'inlineStyle',
            before: '-# ',
            after: ''
        }
    },
    A = new Set(['*', '_', '\\']),
    v = {},
    N = {};
for (let e in h.Z.RULES) {
    if (!(e in S)) throw Error('Slate: Unknown markdown rule: '.concat(e, '.  If you have just added a new markdown rule ') + 'then you probably need to add it to this file so that the rich chat box understands it.');
    let t = S[e];
    'skip' !== t.type && (v[e] = O(h.Z.RULES[e])), 'skip' !== t.type && 'inlineObject' !== t.type && (N[e] = O('text' === e ? p.ZP : h.Z.RULES[e]));
}
function O(e) {
    l()(null != e.parse, 'Slate: rule must have a parse function');
    let t = e.parse;
    return {
        ...e,
        parse(e, n, r) {
            let i = t.call(this, e, n, r);
            return !(i instanceof Array) && (i.originalMatch = e), i;
        }
    };
}
let R = {
        url: {
            parse: (e) =>
                null == (0, f.yw)(e[1])
                    ? {
                          type: 'text',
                          content: e[0],
                          originalMatch: e
                      }
                    : {
                          type: 'link',
                          content: e[1],
                          originalMatch: e
                      }
        },
        autolink: {
            parse: (e) =>
                null == (0, f.yw)(e[1])
                    ? {
                          type: 'text',
                          content: e[0],
                          originalMatch: e
                      }
                    : {
                          type: 'autolink',
                          content: e[1],
                          originalMatch: e
                      }
        },
        codeBlockSyntax: {
            order: d.defaultRules.inlineCode.order - 0.1,
            match: (e) => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
            parse: (e) =>
                null != e[2] && '' !== e[2] && g.i6(e[2])
                    ? [
                          {
                              type: 'codeBlockSyntax',
                              content: e[1],
                              originalMatch: e
                          },
                          {
                              type: 'codeBlockLang',
                              content: e[2],
                              originalMatch: e
                          }
                      ]
                    : {
                          type: 'codeBlockSyntax',
                          content: e[0],
                          originalMatch: e
                      }
        }
    },
    C = /(-# +)/,
    y = (0, m.Z)([v, R]),
    L = (0, m.Z)([N, R]),
    b = _._p(y),
    D = _._p(L),
    M = {
        max: 1 / 0,
        maxAge: 1 * I.Z.Millis.MINUTE,
        updateAgeOnGet: !0
    },
    P = new (c())(M),
    U = new (c())(M);
function w(e, t, n) {
    let r = [],
        i = {
            returnMentionIds: !0,
            disableAutoBlockNewlines: !0,
            guildId: t
        },
        a = n ? D : b,
        o = n ? U : P,
        s = o.get(e);
    if (null != s) return s;
    let l =
            e
                .replace(/\r\n/g, ' \n')
                .replace(/[\r\f]/g, ' ')
                .replace(/\t/g, ' ') + '\n\n',
        u = {
            originalMatch: {
                index: 0,
                0: ''
            },
            type: 'paragraph',
            content: a(l, !0, i)
        };
    k(r, l, u, 0, []);
    let c = G(r);
    return o.set(e, c), c;
}
function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = g.rN(e);
    if ((i.push(e.length), 1 === i.length && n)) return [];
    let a = 0,
        o = n,
        s = [];
    for (let n of i) {
        if (o)
            s.push({
                text: e.substring(a, n),
                start: a,
                attributes: ['codeBlockText'],
                data: void 0
            });
        else {
            let o = n === i[i.length - 2] ? e.substring(n + 3) : '';
            n += 3 + (null != o.match(g.Q2) ? o : '').length;
            let l = e.substring(a, n);
            '' !== l &&
                w(l, t, r).forEach((e) => {
                    s.push({
                        ...e,
                        start: e.start + a
                    });
                });
        }
        (o = !o), (a = n);
    }
    return s;
}
function G(e) {
    if (0 === (e = e.filter((e) => e.text.length > 0)).length) return e;
    let t = [e[0]];
    for (let n = 1; n < e.length; n++) {
        let r = t[t.length - 1],
            i = r.start + r.text.length,
            a = e[n];
        a.start === i && null == r.data && null == a.data && r.attributes.join('-') === a.attributes.join('-') ? (r.text += a.text) : t.push(a);
    }
    return t;
}
function k(e, t, n, r, i) {
    let { content: a, type: o, originalMatch: s } = n;
    switch ((l()(null != s, 'Slate: originalMatch must be set ' + JSON.stringify(n, void 0, 2)), o)) {
        case 'newline':
        case 'br':
        case 'paragraph':
        case 'text':
        case 'emoticon':
            return F(e, t, a || '', r, i);
        case 'emoji':
        case 'customEmoji': {
            let i = t.substring(r);
            if ((!i.startsWith(s[0]) && ((r = Y(e, t, r, t.length)), (i = t.substring(r))), i.startsWith(s[0])))
                return V({
                    result: e,
                    sourceText: t,
                    text: s[0],
                    originalStart: r,
                    attributes: [o],
                    data: n
                });
            throw Error('Slate: Unable to find emoji: '.concat(s[0], ' in ').concat(t, ' at ').concat(r));
        }
        case 'mention':
        case 'roleMention':
        case 'channelMention':
        case 'commandMention':
        case 'soundboard':
        case 'channel': {
            let { text: i, id: a } = n;
            if (null != i)
                return (
                    l()(i === s[0], 'Slate: text mentions must exactly match the regex match'),
                    V({
                        result: e,
                        sourceText: t,
                        text: i,
                        originalStart: r,
                        attributes: ['textMention'],
                        data: { text: i }
                    })
                );
            return V({
                result: e,
                sourceText: t,
                text: s[0],
                originalStart: r,
                attributes: [o],
                data: { id: a }
            });
        }
        case 'staticRouteLink':
            let { id: u, itemId: c } = n;
            return V({
                result: e,
                sourceText: t,
                text: s[0],
                originalStart: r,
                attributes: [o],
                data: {
                    id: u,
                    itemId: c
                }
            });
        case 'timestamp':
            if (T.Z.getCurrentConfig({ location: 'c70cbb_1' }, { autoTrackExposure: !1 }).enabled)
                return V({
                    result: e,
                    sourceText: t,
                    text: s[0],
                    originalStart: r,
                    attributes: [o],
                    data: n
                });
            return F(e, t, s[0], r, i);
        case 'em':
        case 'autolink':
        case 'strong':
        case 'u':
        case 's':
        case 'escape':
        case 'inlineCode':
        case 'codeBlockSyntax':
        case 'codeBlockLang':
        case 'spoiler':
        case 'url':
        case 'link':
        case 'subtext': {
            r = H(t, r);
            let { before: n, after: l } = B(t, o, r, s);
            return (r = Z(e, t, n, r, 'syntaxBefore')), i.push(o), (r = F(e, t, null != a ? a : '', r, i)), i.pop(), (r = Z(e, t, l, r, 'syntaxAfter')), H(t, r);
        }
        default:
            throw Error('Slate: Unknown rule type: '.concat(o));
    }
}
function B(e, t, n, r) {
    if ('inlineCode' === t)
        return {
            before: r[1],
            after: r[1]
        };
    if ('em' === t && '_' === e.substring(n, n + 1))
        return {
            before: '_',
            after: '_'
        };
    if ('subtext' === t)
        return {
            before: C.exec(r.input)[1],
            after: ''
        };
    let i = S['link' === t ? 'url' : t];
    if ('inlineStyle' === i.type) return i;
    throw Error('Slate: rule must be an inlineStyle');
}
function F(e, t, n, r, i) {
    return (
        'string' == typeof n
            ? (r = V({
                  result: e,
                  sourceText: t,
                  text: n,
                  originalStart: r,
                  attributes: i,
                  data: null
              }))
            : (!(n instanceof Array) && (n = [n]),
              n.forEach((n) => {
                  r = k(e, t, n, r, i);
              })),
        H(t, r)
    );
}
function Z(e, t, n, r, i) {
    if (n.length > 0) {
        let a = t.indexOf(n, r),
            o = t.substring(r, a + n.length);
        l()(a >= 0, 'Slate: Unable to find syntax characters'),
            e.push({
                text: o,
                attributes: [i],
                start: r,
                data: null
            }),
            (r = a + n.length);
    }
    return r;
}
function V(e) {
    let { result: t, sourceText: n, text: r, originalStart: i, attributes: a, data: o } = e,
        s = H(n, i);
    for (; '\n' === r.charAt(0) || ' ' === r.charAt(0); ) r = r.substring(1);
    let l = n.indexOf(r, s);
    if ((l !== s ? (s = i = Y(t, n, s, l)) : '\\' === r && '\\' === n.charAt(l + 1) && (l++, (i = ++s)), l !== s))
        throw (
            (new E.Z('MarkdownToSlate').error(
                JSON.stringify({
                    sourceText: n,
                    searchText: r,
                    searchStartsAt: n.substring(s),
                    startPos: s
                })
            ),
            Error('Slate: Unable to find content in source text!'))
        );
    let u = s + r.length,
        c = n.substring(i, u);
    return (
        t.push({
            text: c,
            attributes: a.slice(),
            start: i,
            data: o
        }),
        u
    );
}
function H(e, t) {
    for (; '\n' === e.charAt(t) || ' ' === e.charAt(t); ) t++;
    return t;
}
function Y(e, t, n, r) {
    for (; n < r; )
        if (A.has(t[n])) (n = Z(e, t, t[n], n, 'syntaxBefore')), (n = H(t, n));
        else break;
    return n;
}
