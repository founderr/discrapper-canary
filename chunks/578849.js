var t = { exports: {} };
function n(e) {
    return (
        e instanceof Map
            ? (e.clear =
                  e.delete =
                  e.set =
                      function () {
                          throw Error('map is read-only');
                      })
            : e instanceof Set &&
              (e.add =
                  e.clear =
                  e.delete =
                      function () {
                          throw Error('set is read-only');
                      }),
        Object.freeze(e),
        Object.getOwnPropertyNames(e).forEach(function (t) {
            var r = e[t];
            'object' == typeof r && !Object.isFrozen(r) && n(r);
        }),
        e
    );
}
(t.exports = n), (t.exports.default = n);
class r {
    constructor(e) {
        void 0 === e.data && (e.data = {}), (this.data = e.data), (this.isMatchIgnored = !1);
    }
    ignoreMatch() {
        this.isMatchIgnored = !0;
    }
}
function i(e) {
    return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
}
function a(e, ...t) {
    let n = Object.create(null);
    for (let t in e) n[t] = e[t];
    return (
        t.forEach(function (e) {
            for (let t in e) n[t] = e[t];
        }),
        n
    );
}
let o = '</span>',
    s = (e) => !!e.scope || (e.sublanguage && e.language),
    l = (e, { prefix: t }) => {
        if (e.includes('.')) {
            let n = e.split('.');
            return [`${t}${n.shift()}`, ...n.map((e, t) => `${e}${'_'.repeat(t + 1)}`)].join(' ');
        }
        return `${t}${e}`;
    };
class u {
    constructor(e, t) {
        (this.buffer = ''), (this.classPrefix = t.classPrefix), e.walk(this);
    }
    addText(e) {
        this.buffer += i(e);
    }
    openNode(e) {
        if (!s(e)) return;
        let t = '';
        (t = e.sublanguage ? `language-${e.language}` : l(e.scope, { prefix: this.classPrefix })), this.span(t);
    }
    closeNode(e) {
        s(e) && (this.buffer += o);
    }
    value() {
        return this.buffer;
    }
    span(e) {
        this.buffer += `<span class="${e}">`;
    }
}
let c = (e = {}) => {
    let t = { children: [] };
    return Object.assign(t, e), t;
};
class d {
    constructor() {
        (this.rootNode = c()), (this.stack = [this.rootNode]);
    }
    get top() {
        return this.stack[this.stack.length - 1];
    }
    get root() {
        return this.rootNode;
    }
    add(e) {
        this.top.children.push(e);
    }
    openNode(e) {
        let t = c({ scope: e });
        this.add(t), this.stack.push(t);
    }
    closeNode() {
        if (this.stack.length > 1) return this.stack.pop();
    }
    closeAllNodes() {
        for (; this.closeNode(); );
    }
    toJSON() {
        return JSON.stringify(this.rootNode, null, 4);
    }
    walk(e) {
        return this.constructor._walk(e, this.rootNode);
    }
    static _walk(e, t) {
        return 'string' == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach((t) => this._walk(e, t)), e.closeNode(t)), e;
    }
    static _collapse(e) {
        if ('string' != typeof e)
            e.children &&
                (e.children.every((e) => 'string' == typeof e)
                    ? (e.children = [e.children.join('')])
                    : e.children.forEach((e) => {
                          d._collapse(e);
                      }));
    }
}
class _ extends d {
    constructor(e) {
        super(), (this.options = e);
    }
    addKeyword(e, t) {
        if ('' !== e) this.openNode(t), this.addText(e), this.closeNode();
    }
    addText(e) {
        if ('' !== e) this.add(e);
    }
    addSublanguage(e, t) {
        let n = e.root;
        (n.sublanguage = !0), (n.language = t), this.add(n);
    }
    toHTML() {
        return new u(this, this.options).value();
    }
    finalize() {
        return !0;
    }
}
function E(e) {
    return e ? ('string' == typeof e ? e : e.source) : null;
}
function f(e) {
    return m('(?=', e, ')');
}
function h(e) {
    return m('(?:', e, ')*');
}
function p(e) {
    return m('(?:', e, ')?');
}
function m(...e) {
    return e.map((e) => E(e)).join('');
}
function I(e) {
    let t = e[e.length - 1];
    return 'object' == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function T(...e) {
    return '(' + (I(e).capture ? '' : '?:') + e.map((e) => E(e)).join('|') + ')';
}
function g(e) {
    return RegExp(e.toString() + '|').exec('').length - 1;
}
function S(e, t) {
    let n = e && e.exec(t);
    return n && 0 === n.index;
}
let A = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function v(e, { joinWith: t }) {
    let n = 0;
    return e
        .map((e) => {
            let t = (n += 1),
                r = E(e),
                i = '';
            for (; r.length > 0; ) {
                let e = A.exec(r);
                if (!e) {
                    i += r;
                    break;
                }
                (i += r.substring(0, e.index)), (r = r.substring(e.index + e[0].length)), '\\' === e[0][0] && e[1] ? (i += '\\' + String(Number(e[1]) + t)) : ((i += e[0]), '(' === e[0] && n++);
            }
            return i;
        })
        .map((e) => `(${e})`)
        .join(t);
}
let N = /\b\B/,
    O = '[a-zA-Z]\\w*',
    R = '[a-zA-Z_]\\w*',
    C = '\\b\\d+(\\.\\d+)?',
    y = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
    b = '\\b(0b[01]+)',
    L = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
    D = (e = {}) => {
        let t = /^#![ ]*\//;
        return (
            e.binary && (e.begin = m(t, /.*\b/, e.binary, /\b.*/)),
            a(
                {
                    scope: 'meta',
                    begin: t,
                    end: /$/,
                    relevance: 0,
                    'on:begin': (e, t) => {
                        0 !== e.index && t.ignoreMatch();
                    }
                },
                e
            )
        );
    },
    M = {
        begin: '\\\\[\\s\\S]',
        relevance: 0
    },
    P = {
        scope: 'string',
        begin: "'",
        end: "'",
        illegal: '\\n',
        contains: [M]
    },
    U = {
        scope: 'string',
        begin: '"',
        end: '"',
        illegal: '\\n',
        contains: [M]
    },
    w = { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ },
    x = function (e, t, n = {}) {
        let r = a(
            {
                scope: 'comment',
                begin: e,
                end: t,
                contains: []
            },
            n
        );
        r.contains.push({
            scope: 'doctag',
            begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
            end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
            excludeBegin: !0,
            relevance: 0
        });
        let i = T('I', 'a', 'is', 'so', 'us', 'to', 'at', 'if', 'in', 'it', 'on', /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return r.contains.push({ begin: m(/[ ]+/, '(', i, /[.]?[:]?([.][ ]|[ ])/, '){3}') }), r;
    },
    G = x('//', '$'),
    k = x('/\\*', '\\*/'),
    B = x('#', '$'),
    F = {
        scope: 'number',
        begin: C,
        relevance: 0
    },
    Z = {
        scope: 'number',
        begin: y,
        relevance: 0
    },
    V = {
        scope: 'number',
        begin: b,
        relevance: 0
    },
    H = {
        begin: /(?=\/[^/\n]*\/)/,
        contains: [
            {
                scope: 'regexp',
                begin: /\//,
                end: /\/[gimuy]*/,
                illegal: /\n/,
                contains: [
                    M,
                    {
                        begin: /\[/,
                        end: /\]/,
                        relevance: 0,
                        contains: [M]
                    }
                ]
            }
        ]
    },
    Y = {
        scope: 'title',
        begin: O,
        relevance: 0
    },
    j = {
        scope: 'title',
        begin: R,
        relevance: 0
    },
    W = {
        begin: '\\.\\s*' + R,
        relevance: 0
    };
var K = Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: N,
    IDENT_RE: O,
    UNDERSCORE_IDENT_RE: R,
    NUMBER_RE: C,
    C_NUMBER_RE: y,
    BINARY_NUMBER_RE: b,
    RE_STARTERS_RE: L,
    SHEBANG: D,
    BACKSLASH_ESCAPE: M,
    APOS_STRING_MODE: P,
    QUOTE_STRING_MODE: U,
    PHRASAL_WORDS_MODE: w,
    COMMENT: x,
    C_LINE_COMMENT_MODE: G,
    C_BLOCK_COMMENT_MODE: k,
    HASH_COMMENT_MODE: B,
    NUMBER_MODE: F,
    C_NUMBER_MODE: Z,
    BINARY_NUMBER_MODE: V,
    REGEXP_MODE: H,
    TITLE_MODE: Y,
    UNDERSCORE_TITLE_MODE: j,
    METHOD_GUARD: W,
    END_SAME_AS_BEGIN: function (e) {
        return Object.assign(e, {
            'on:begin': (e, t) => {
                t.data._beginMatch = e[1];
            },
            'on:end': (e, t) => {
                t.data._beginMatch !== e[1] && t.ignoreMatch();
            }
        });
    }
});
function z(e, t) {
    '.' === e.input[e.index - 1] && t.ignoreMatch();
}
function q(e, t) {
    void 0 !== e.className && ((e.scope = e.className), delete e.className);
}
function Q(e, t) {
    if (!!t) e.beginKeywords && ((e.begin = '\\b(' + e.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'), (e.__beforeBegin = z), (e.keywords = e.keywords || e.beginKeywords), delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0));
}
function X(e, t) {
    Array.isArray(e.illegal) && (e.illegal = T(...e.illegal));
}
function $(e, t) {
    if (e.match) {
        if (e.begin || e.end) throw Error('begin & end are not supported with match');
        (e.begin = e.match), delete e.match;
    }
}
function J(e, t) {
    void 0 === e.relevance && (e.relevance = 1);
}
let ee = (e, t) => {
        if (!e.beforeMatch) return;
        if (e.starts) throw Error('beforeMatch cannot be used with starts');
        let n = Object.assign({}, e);
        Object.keys(e).forEach((t) => {
            delete e[t];
        }),
            (e.keywords = n.keywords),
            (e.begin = m(n.beforeMatch, f(n.begin))),
            (e.starts = {
                relevance: 0,
                contains: [Object.assign(n, { endsParent: !0 })]
            }),
            (e.relevance = 0),
            delete n.beforeMatch;
    },
    et = ['of', 'and', 'for', 'in', 'not', 'or', 'if', 'then', 'parent', 'list', 'value'],
    en = 'keyword';
function er(e, t, n = en) {
    let r = Object.create(null);
    return (
        'string' == typeof e
            ? i(n, e.split(' '))
            : Array.isArray(e)
              ? i(n, e)
              : Object.keys(e).forEach(function (n) {
                    Object.assign(r, er(e[n], t, n));
                }),
        r
    );
    function i(e, n) {
        t && (n = n.map((e) => e.toLowerCase())),
            n.forEach(function (t) {
                let n = t.split('|');
                r[n[0]] = [e, ei(n[0], n[1])];
            });
    }
}
function ei(e, t) {
    return t ? Number(t) : ea(e) ? 0 : 1;
}
function ea(e) {
    return et.includes(e.toLowerCase());
}
let eo = {},
    es = (e) => {
        console.error(e);
    },
    el = (e, ...t) => {
        console.log(`WARN: ${e}`, ...t);
    },
    eu = (e, t) => {
        !eo[`${e}/${t}`] && (console.log(`Deprecated as of ${e}. ${t}`), (eo[`${e}/${t}`] = !0));
    },
    ec = Error();
function ed(e, t, { key: n }) {
    let r = 0,
        i = e[n],
        a = {},
        o = {};
    for (let e = 1; e <= t.length; e++) (o[e + r] = i[e]), (a[e + r] = !0), (r += g(t[e - 1]));
    (e[n] = o), (e[n]._emit = a), (e[n]._multi = !0);
}
function e_(e) {
    if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin) throw (es('skip, excludeBegin, returnBegin not compatible with beginScope: {}'), ec);
        if ('object' != typeof e.beginScope || null === e.beginScope) throw (es('beginScope must be object'), ec);
        ed(e, e.begin, { key: 'beginScope' }), (e.begin = v(e.begin, { joinWith: '' }));
    }
}
function eE(e) {
    if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd) throw (es('skip, excludeEnd, returnEnd not compatible with endScope: {}'), ec);
        if ('object' != typeof e.endScope || null === e.endScope) throw (es('endScope must be object'), ec);
        ed(e, e.end, { key: 'endScope' }), (e.end = v(e.end, { joinWith: '' }));
    }
}
function ef(e) {
    e.scope && 'object' == typeof e.scope && null !== e.scope && ((e.beginScope = e.scope), delete e.scope);
}
function eh(e) {
    ef(e), 'string' == typeof e.beginScope && (e.beginScope = { _wrap: e.beginScope }), 'string' == typeof e.endScope && (e.endScope = { _wrap: e.endScope }), e_(e), eE(e);
}
function ep(e) {
    function t(t, n) {
        return RegExp(E(t), 'm' + (e.case_insensitive ? 'i' : '') + (e.unicodeRegex ? 'u' : '') + (n ? 'g' : ''));
    }
    class n {
        constructor() {
            (this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0);
        }
        addRule(e, t) {
            (t.position = this.position++), (this.matchIndexes[this.matchAt] = t), this.regexes.push([t, e]), (this.matchAt += g(e) + 1);
        }
        compile() {
            0 === this.regexes.length && (this.exec = () => null);
            let e = this.regexes.map((e) => e[1]);
            (this.matcherRe = t(v(e, { joinWith: '|' }), !0)), (this.lastIndex = 0);
        }
        exec(e) {
            this.matcherRe.lastIndex = this.lastIndex;
            let t = this.matcherRe.exec(e);
            if (!t) return null;
            let n = t.findIndex((e, t) => t > 0 && void 0 !== e),
                r = this.matchIndexes[n];
            return t.splice(0, n), Object.assign(t, r);
        }
    }
    class r {
        constructor() {
            (this.rules = []), (this.multiRegexes = []), (this.count = 0), (this.lastIndex = 0), (this.regexIndex = 0);
        }
        getMatcher(e) {
            if (this.multiRegexes[e]) return this.multiRegexes[e];
            let t = new n();
            return this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)), t.compile(), (this.multiRegexes[e] = t), t;
        }
        resumingScanAtSamePosition() {
            return 0 !== this.regexIndex;
        }
        considerAll() {
            this.regexIndex = 0;
        }
        addRule(e, t) {
            this.rules.push([e, t]), 'begin' === t.type && this.count++;
        }
        exec(e) {
            let t = this.getMatcher(this.regexIndex);
            t.lastIndex = this.lastIndex;
            let n = t.exec(e);
            if (this.resumingScanAtSamePosition()) {
                if (n && n.index === this.lastIndex);
                else {
                    let t = this.getMatcher(0);
                    (t.lastIndex = this.lastIndex + 1), (n = t.exec(e));
                }
            }
            return n && ((this.regexIndex += n.position + 1), this.regexIndex === this.count && this.considerAll()), n;
        }
    }
    function i(e) {
        let t = new r();
        return (
            e.contains.forEach((e) =>
                t.addRule(e.begin, {
                    rule: e,
                    type: 'begin'
                })
            ),
            e.terminatorEnd && t.addRule(e.terminatorEnd, { type: 'end' }),
            e.illegal && t.addRule(e.illegal, { type: 'illegal' }),
            t
        );
    }
    function o(n, r) {
        let a = n;
        if (n.isCompiled) return a;
        [q, $, eh, ee].forEach((e) => e(n, r)), e.compilerExtensions.forEach((e) => e(n, r)), (n.__beforeBegin = null), [Q, X, J].forEach((e) => e(n, r)), (n.isCompiled = !0);
        let s = null;
        return (
            'object' == typeof n.keywords && n.keywords.$pattern && ((n.keywords = Object.assign({}, n.keywords)), (s = n.keywords.$pattern), delete n.keywords.$pattern),
            (s = s || /\w+/),
            n.keywords && (n.keywords = er(n.keywords, e.case_insensitive)),
            (a.keywordPatternRe = t(s, !0)),
            r && (!n.begin && (n.begin = /\B|\b/), (a.beginRe = t(a.begin)), !n.end && !n.endsWithParent && (n.end = /\B|\b/), n.end && (a.endRe = t(a.end)), (a.terminatorEnd = E(a.end) || ''), n.endsWithParent && r.terminatorEnd && (a.terminatorEnd += (n.end ? '|' : '') + r.terminatorEnd)),
            n.illegal && (a.illegalRe = t(n.illegal)),
            !n.contains && (n.contains = []),
            (n.contains = [].concat(
                ...n.contains.map(function (e) {
                    return eI('self' === e ? n : e);
                })
            )),
            n.contains.forEach(function (e) {
                o(e, a);
            }),
            n.starts && o(n.starts, r),
            (a.matcher = i(a)),
            a
        );
    }
    if ((!e.compilerExtensions && (e.compilerExtensions = []), e.contains && e.contains.includes('self'))) throw Error('ERR: contains `self` is not supported at the top-level of a language.  See documentation.');
    return (e.classNameAliases = a(e.classNameAliases || {})), o(e);
}
function em(e) {
    return !!e && (e.endsWithParent || em(e.starts));
}
function eI(e) {
    return (e.variants &&
        !e.cachedVariants &&
        (e.cachedVariants = e.variants.map(function (t) {
            return a(e, { variants: null }, t);
        })),
    e.cachedVariants)
        ? e.cachedVariants
        : em(e)
          ? a(e, { starts: e.starts ? a(e.starts) : null })
          : Object.isFrozen(e)
            ? a(e)
            : e;
}
var eT = '11.7.0';
class eg extends Error {
    constructor(e, t) {
        super(e), (this.name = 'HTMLInjectionError'), (this.html = t);
    }
}
let eS = i,
    eA = a,
    ev = Symbol('nomatch'),
    eN = 7;
var eO = (function (e) {
    let n = Object.create(null),
        i = Object.create(null),
        a = [],
        o = !0,
        s = "Could not find the language '{}', did you forget to load/include a language module?",
        l = {
            disableAutodetect: !0,
            name: 'Plain text',
            contains: []
        },
        u = {
            ignoreUnescapedHTML: !1,
            throwUnescapedHTML: !1,
            noHighlightRe: /^(no-?highlight)$/i,
            languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
            classPrefix: 'hljs-',
            cssSelector: 'pre code',
            languages: null,
            __emitter: _
        };
    function c(e) {
        return u.noHighlightRe.test(e);
    }
    function d(e) {
        let t = e.className + ' ';
        t += e.parentNode ? e.parentNode.className : '';
        let n = u.languageDetectRe.exec(t);
        if (n) {
            let t = M(n[1]);
            return !t && (el(s.replace('{}', n[1])), el('Falling back to no-highlight mode for this block.', e)), t ? n[1] : 'no-highlight';
        }
        return t.split(/\s+/).find((e) => c(e) || M(e));
    }
    function E(e, t, n) {
        let r = '',
            i = '';
        'object' == typeof t ? ((r = e), (n = t.ignoreIllegals), (i = t.language)) : (eu('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'), eu('10.7.0', 'Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277'), (i = e), (r = t)), void 0 === n && (n = !0);
        let a = {
            code: r,
            language: i
        };
        x('before:highlight', a);
        let o = a.result ? a.result : I(a.language, a.code, n);
        return (o.code = a.code), x('after:highlight', o), o;
    }
    function I(e, t, i, a) {
        let l = Object.create(null);
        function c(e, t) {
            return e.keywords[t];
        }
        function d() {
            if (!b.keywords) {
                D.addText(P);
                return;
            }
            let e = 0;
            b.keywordPatternRe.lastIndex = 0;
            let t = b.keywordPatternRe.exec(P),
                n = '';
            for (; t; ) {
                n += P.substring(e, t.index);
                let r = R.case_insensitive ? t[0].toLowerCase() : t[0],
                    i = c(b, r);
                if (i) {
                    let [e, a] = i;
                    if ((D.addText(n), (n = ''), (l[r] = (l[r] || 0) + 1), l[r] <= eN && (U += a), e.startsWith('_'))) n += t[0];
                    else {
                        let n = R.classNameAliases[e] || e;
                        D.addKeyword(t[0], n);
                    }
                } else n += t[0];
                (e = b.keywordPatternRe.lastIndex), (t = b.keywordPatternRe.exec(P));
            }
            (n += P.substring(e)), D.addText(n);
        }
        function _() {
            if ('' === P) return;
            let e = null;
            if ('string' == typeof b.subLanguage) {
                if (!n[b.subLanguage]) {
                    D.addText(P);
                    return;
                }
                (e = I(b.subLanguage, P, !0, L[b.subLanguage])), (L[b.subLanguage] = e._top);
            } else e = A(P, b.subLanguage.length ? b.subLanguage : null);
            b.relevance > 0 && (U += e.relevance), D.addSublanguage(e._emitter, e.language);
        }
        function E() {
            null != b.subLanguage ? _() : d(), (P = '');
        }
        function f(e, t) {
            let n = 1,
                r = t.length - 1;
            for (; n <= r; ) {
                if (!e._emit[n]) {
                    n++;
                    continue;
                }
                let r = R.classNameAliases[e[n]] || e[n],
                    i = t[n];
                r ? D.addKeyword(i, r) : ((P = i), d(), (P = '')), n++;
            }
        }
        function h(e, t) {
            return e.scope && 'string' == typeof e.scope && D.openNode(R.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (D.addKeyword(P, R.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), (P = '')) : e.beginScope._multi && (f(e.beginScope, t), (P = ''))), (b = Object.create(e, { parent: { value: b } }));
        }
        function p(e, t, n) {
            let i = S(e.endRe, n);
            if (i) {
                if (e['on:end']) {
                    let n = new r(e);
                    e['on:end'](t, n), n.isMatchIgnored && (i = !1);
                }
                if (i) {
                    for (; e.endsParent && e.parent; ) e = e.parent;
                    return e;
                }
            }
            if (e.endsWithParent) return p(e.parent, t, n);
        }
        function m(e) {
            return 0 === b.matcher.regexIndex ? ((P += e[0]), 1) : ((G = !0), 0);
        }
        function T(e) {
            let t = e[0],
                n = e.rule,
                i = new r(n);
            for (let r of [n.__beforeBegin, n['on:begin']]) if (r && (r(e, i), i.isMatchIgnored)) return m(t);
            return n.skip ? (P += t) : (n.excludeBegin && (P += t), E(), !n.returnBegin && !n.excludeBegin && (P = t)), h(n, e), n.returnBegin ? 0 : t.length;
        }
        function g(e) {
            let n = e[0],
                r = t.substring(e.index),
                i = p(b, e, r);
            if (!i) return ev;
            let a = b;
            b.endScope && b.endScope._wrap ? (E(), D.addKeyword(n, b.endScope._wrap)) : b.endScope && b.endScope._multi ? (E(), f(b.endScope, e)) : a.skip ? (P += n) : (!(a.returnEnd || a.excludeEnd) && (P += n), E(), a.excludeEnd && (P = n));
            do b.scope && D.closeNode(), !b.skip && !b.subLanguage && (U += b.relevance), (b = b.parent);
            while (b !== i.parent);
            return i.starts && h(i.starts, e), a.returnEnd ? 0 : n.length;
        }
        function v() {
            let e = [];
            for (let t = b; t !== R; t = t.parent) t.scope && e.unshift(t.scope);
            e.forEach((e) => D.openNode(e));
        }
        let N = {};
        function O(n, r) {
            let a = r && r[0];
            if (((P += n), null == a)) return E(), 0;
            if ('begin' === N.type && 'end' === r.type && N.index === r.index && '' === a) {
                if (((P += t.slice(r.index, r.index + 1)), !o)) {
                    let t = Error(`0 width match regex (${e})`);
                    throw ((t.languageName = e), (t.badRule = N.rule), t);
                }
                return 1;
            }
            if (((N = r), 'begin' === r.type)) return T(r);
            if ('illegal' !== r.type || i) {
                if ('end' === r.type) {
                    let e = g(r);
                    if (e !== ev) return e;
                }
            } else {
                let e = Error('Illegal lexeme "' + a + '" for mode "' + (b.scope || '<unnamed>') + '"');
                throw ((e.mode = b), e);
            }
            if ('illegal' === r.type && '' === a) return 1;
            if (x > 100000 && x > 3 * r.index) throw Error('potential infinite loop, way more iterations than matches');
            return (P += a), a.length;
        }
        let R = M(e);
        if (!R) throw (es(s.replace('{}', e)), Error('Unknown language: "' + e + '"'));
        let C = ep(R),
            y = '',
            b = a || C,
            L = {},
            D = new u.__emitter(u);
        v();
        let P = '',
            U = 0,
            w = 0,
            x = 0,
            G = !1;
        try {
            for (b.matcher.considerAll(); ; ) {
                x++, G ? (G = !1) : b.matcher.considerAll(), (b.matcher.lastIndex = w);
                let e = b.matcher.exec(t);
                if (!e) break;
                let n = t.substring(w, e.index),
                    r = O(n, e);
                w = e.index + r;
            }
            return (
                O(t.substring(w)),
                D.closeAllNodes(),
                D.finalize(),
                (y = D.toHTML()),
                {
                    language: e,
                    value: y,
                    relevance: U,
                    illegal: !1,
                    _emitter: D,
                    _top: b
                }
            );
        } catch (n) {
            if (n.message && n.message.includes('Illegal'))
                return {
                    language: e,
                    value: eS(t),
                    illegal: !0,
                    relevance: 0,
                    _illegalBy: {
                        message: n.message,
                        index: w,
                        context: t.slice(w - 100, w + 100),
                        mode: n.mode,
                        resultSoFar: y
                    },
                    _emitter: D
                };
            if (o)
                return {
                    language: e,
                    value: eS(t),
                    illegal: !1,
                    relevance: 0,
                    errorRaised: n,
                    _emitter: D,
                    _top: b
                };
            else throw n;
        }
    }
    function g(e) {
        let t = {
            value: eS(e),
            illegal: !1,
            relevance: 0,
            _top: l,
            _emitter: new u.__emitter(u)
        };
        return t._emitter.addText(e), t;
    }
    function A(e, t) {
        t = t || u.languages || Object.keys(n);
        let r = g(e),
            i = t
                .filter(M)
                .filter(U)
                .map((t) => I(t, e, !1));
        i.unshift(r);
        let [a, o] = i.sort((e, t) => {
                if (e.relevance !== t.relevance) return t.relevance - e.relevance;
                if (e.language && t.language) {
                    if (M(e.language).supersetOf === t.language) return 1;
                    if (M(t.language).supersetOf === e.language) return -1;
                }
                return 0;
            }),
            s = a;
        return (s.secondBest = o), s;
    }
    function v(e, t, n) {
        let r = (t && i[t]) || n;
        e.classList.add('hljs'), e.classList.add(`language-${r}`);
    }
    function N(e) {
        let t = null,
            n = d(e);
        if (c(n)) return;
        if (
            (x('before:highlightElement', {
                el: e,
                language: n
            }),
            e.children.length > 0 && (!u.ignoreUnescapedHTML && (console.warn('One of your code blocks includes unescaped HTML. This is a potentially serious security risk.'), console.warn('https://github.com/highlightjs/highlight.js/wiki/security'), console.warn('The element with unescaped HTML:'), console.warn(e)), u.throwUnescapedHTML))
        )
            throw new eg('One of your code blocks includes unescaped HTML.', e.innerHTML);
        let r = (t = e).textContent,
            i = n
                ? E(r, {
                      language: n,
                      ignoreIllegals: !0
                  })
                : A(r);
        (e.innerHTML = i.value),
            v(e, n, i.language),
            (e.result = {
                language: i.language,
                re: i.relevance,
                relevance: i.relevance
            }),
            i.secondBest &&
                (e.secondBest = {
                    language: i.secondBest.language,
                    relevance: i.secondBest.relevance
                }),
            x('after:highlightElement', {
                el: e,
                result: i,
                text: r
            });
    }
    function O(e) {
        u = eA(u, e);
    }
    let R = () => {
        b(), eu('10.6.0', 'initHighlighting() deprecated.  Use highlightAll() now.');
    };
    function C() {
        b(), eu('10.6.0', 'initHighlightingOnLoad() deprecated.  Use highlightAll() now.');
    }
    let y = !1;
    function b() {
        if ('loading' === document.readyState) {
            y = !0;
            return;
        }
        document.querySelectorAll(u.cssSelector).forEach(N);
    }
    function L() {
        y && b();
    }
    function D(t, r) {
        let i = null;
        try {
            i = r(e);
        } catch (e) {
            if ((es("Language definition for '{}' could not be registered.".replace('{}', t)), o)) es(e);
            else throw e;
            i = l;
        }
        !i.name && (i.name = t), (n[t] = i), (i.rawDefinition = r.bind(null, e)), i.aliases && P(i.aliases, { languageName: t });
    }
    function M(e) {
        return n[(e = (e || '').toLowerCase())] || n[i[e]];
    }
    function P(e, { languageName: t }) {
        'string' == typeof e && (e = [e]),
            e.forEach((e) => {
                i[e.toLowerCase()] = t;
            });
    }
    function U(e) {
        let t = M(e);
        return t && !t.disableAutodetect;
    }
    function w(e) {
        e['before:highlightBlock'] &&
            !e['before:highlightElement'] &&
            (e['before:highlightElement'] = (t) => {
                e['before:highlightBlock'](Object.assign({ block: t.el }, t));
            }),
            e['after:highlightBlock'] &&
                !e['after:highlightElement'] &&
                (e['after:highlightElement'] = (t) => {
                    e['after:highlightBlock'](Object.assign({ block: t.el }, t));
                });
    }
    function x(e, t) {
        let n = e;
        a.forEach(function (e) {
            e[n] && e[n](t);
        });
    }
    function G(e) {
        return eu('10.7.0', 'highlightBlock will be removed entirely in v12.0'), eu('10.7.0', 'Please use highlightElement now.'), N(e);
    }
    for (let r in ('undefined' != typeof window && window.addEventListener && window.addEventListener('DOMContentLoaded', L, !1),
    Object.assign(e, {
        highlight: E,
        highlightAuto: A,
        highlightAll: b,
        highlightElement: N,
        highlightBlock: G,
        configure: O,
        initHighlighting: R,
        initHighlightingOnLoad: C,
        registerLanguage: D,
        unregisterLanguage: function e(e) {
            for (let t of (delete n[e], Object.keys(i))) i[t] === e && delete i[t];
        },
        listLanguages: function e() {
            return Object.keys(n);
        },
        getLanguage: M,
        registerAliases: P,
        autoDetection: U,
        inherit: eA,
        addPlugin: function e(e) {
            w(e), a.push(e);
        }
    }),
    (e.debugMode = function () {
        o = !1;
    }),
    (e.safeMode = function () {
        o = !0;
    }),
    (e.versionString = eT),
    (e.regex = {
        concat: m,
        lookahead: f,
        either: T,
        optional: p,
        anyNumberOfTimes: h
    }),
    K))
        'object' == typeof K[r] && t.exports(K[r]);
    return Object.assign(e, K), e;
})({});
(e.exports = eO), (eO.HighlightJS = eO), (eO.default = eO);
