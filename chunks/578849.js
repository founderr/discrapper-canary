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
let s = (e) => !!e.scope || (e.sublanguage && e.language),
    o = (e, { prefix: t }) => {
        if (e.includes('.')) {
            let n = e.split('.');
            return [`${t}${n.shift()}`, ...n.map((e, t) => `${e}${'_'.repeat(t + 1)}`)].join(' ');
        }
        return `${t}${e}`;
    };
class l {
    constructor(e, t) {
        (this.buffer = ''), (this.classPrefix = t.classPrefix), e.walk(this);
    }
    addText(e) {
        this.buffer += i(e);
    }
    openNode(e) {
        if (!s(e)) return;
        let t = '';
        (t = e.sublanguage ? `language-${e.language}` : o(e.scope, { prefix: this.classPrefix })), this.span(t);
    }
    closeNode(e) {
        s(e) && (this.buffer += '</span>');
    }
    value() {
        return this.buffer;
    }
    span(e) {
        this.buffer += `<span class="${e}">`;
    }
}
let u = (e = {}) => {
    let t = { children: [] };
    return Object.assign(t, e), t;
};
class c {
    constructor() {
        (this.rootNode = u()), (this.stack = [this.rootNode]);
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
        let t = u({ scope: e });
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
                          c._collapse(e);
                      }));
    }
}
class d extends c {
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
        return new l(this, this.options).value();
    }
    finalize() {
        return !0;
    }
}
function f(e) {
    return e ? ('string' == typeof e ? e : e.source) : null;
}
function _(e) {
    return m('(?=', e, ')');
}
function p(e) {
    return m('(?:', e, ')*');
}
function h(e) {
    return m('(?:', e, ')?');
}
function m(...e) {
    return e.map((e) => f(e)).join('');
}
function g(...e) {
    return (
        '(' +
        ((function (e) {
            let t = e[e.length - 1];
            return 'object' == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
        })(e).capture
            ? ''
            : '?:') +
        e.map((e) => f(e)).join('|') +
        ')'
    );
}
function E(e) {
    return RegExp(e.toString() + '|').exec('').length - 1;
}
let v = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function I(e, { joinWith: t }) {
    let n = 0;
    return e
        .map((e) => {
            let t = (n += 1),
                r = f(e),
                i = '';
            for (; r.length > 0; ) {
                let e = v.exec(r);
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
let b = '[a-zA-Z]\\w*',
    S = '[a-zA-Z_]\\w*',
    T = '\\b\\d+(\\.\\d+)?',
    y = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
    A = '\\b(0b[01]+)',
    N = {
        begin: '\\\\[\\s\\S]',
        relevance: 0
    },
    C = function (e, t, n = {}) {
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
        let i = g('I', 'a', 'is', 'so', 'us', 'to', 'at', 'if', 'in', 'it', 'on', /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return r.contains.push({ begin: m(/[ ]+/, '(', i, /[.]?[:]?([.][ ]|[ ])/, '){3}') }), r;
    },
    R = C('//', '$'),
    O = C('/\\*', '\\*/'),
    D = C('#', '$');
var L = Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: /\b\B/,
    IDENT_RE: b,
    UNDERSCORE_IDENT_RE: S,
    NUMBER_RE: T,
    C_NUMBER_RE: y,
    BINARY_NUMBER_RE: A,
    RE_STARTERS_RE: '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
    SHEBANG: (e = {}) => {
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
    BACKSLASH_ESCAPE: N,
    APOS_STRING_MODE: {
        scope: 'string',
        begin: "'",
        end: "'",
        illegal: '\\n',
        contains: [N]
    },
    QUOTE_STRING_MODE: {
        scope: 'string',
        begin: '"',
        end: '"',
        illegal: '\\n',
        contains: [N]
    },
    PHRASAL_WORDS_MODE: { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ },
    COMMENT: C,
    C_LINE_COMMENT_MODE: R,
    C_BLOCK_COMMENT_MODE: O,
    HASH_COMMENT_MODE: D,
    NUMBER_MODE: {
        scope: 'number',
        begin: T,
        relevance: 0
    },
    C_NUMBER_MODE: {
        scope: 'number',
        begin: y,
        relevance: 0
    },
    BINARY_NUMBER_MODE: {
        scope: 'number',
        begin: A,
        relevance: 0
    },
    REGEXP_MODE: {
        begin: /(?=\/[^/\n]*\/)/,
        contains: [
            {
                scope: 'regexp',
                begin: /\//,
                end: /\/[gimuy]*/,
                illegal: /\n/,
                contains: [
                    N,
                    {
                        begin: /\[/,
                        end: /\]/,
                        relevance: 0,
                        contains: [N]
                    }
                ]
            }
        ]
    },
    TITLE_MODE: {
        scope: 'title',
        begin: b,
        relevance: 0
    },
    UNDERSCORE_TITLE_MODE: {
        scope: 'title',
        begin: S,
        relevance: 0
    },
    METHOD_GUARD: {
        begin: '\\.\\s*' + S,
        relevance: 0
    },
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
function x(e, t) {
    '.' === e.input[e.index - 1] && t.ignoreMatch();
}
function w(e, t) {
    void 0 !== e.className && ((e.scope = e.className), delete e.className);
}
function M(e, t) {
    if (!!t) e.beginKeywords && ((e.begin = '\\b(' + e.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'), (e.__beforeBegin = x), (e.keywords = e.keywords || e.beginKeywords), delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0));
}
function P(e, t) {
    Array.isArray(e.illegal) && (e.illegal = g(...e.illegal));
}
function k(e, t) {
    if (e.match) {
        if (e.begin || e.end) throw Error('begin & end are not supported with match');
        (e.begin = e.match), delete e.match;
    }
}
function U(e, t) {
    void 0 === e.relevance && (e.relevance = 1);
}
let G = (e, t) => {
        if (!e.beforeMatch) return;
        if (e.starts) throw Error('beforeMatch cannot be used with starts');
        let n = Object.assign({}, e);
        Object.keys(e).forEach((t) => {
            delete e[t];
        }),
            (e.keywords = n.keywords),
            (e.begin = m(n.beforeMatch, _(n.begin))),
            (e.starts = {
                relevance: 0,
                contains: [Object.assign(n, { endsParent: !0 })]
            }),
            (e.relevance = 0),
            delete n.beforeMatch;
    },
    B = ['of', 'and', 'for', 'in', 'not', 'or', 'if', 'then', 'parent', 'list', 'value'],
    Z = {},
    F = (e) => {
        console.error(e);
    },
    V = (e, ...t) => {
        console.log(`WARN: ${e}`, ...t);
    },
    j = (e, t) => {
        !Z[`${e}/${t}`] && (console.log(`Deprecated as of ${e}. ${t}`), (Z[`${e}/${t}`] = !0));
    },
    H = Error();
function Y(e, t, { key: n }) {
    let r = 0,
        i = e[n],
        a = {},
        s = {};
    for (let e = 1; e <= t.length; e++) (s[e + r] = i[e]), (a[e + r] = !0), (r += E(t[e - 1]));
    (e[n] = s), (e[n]._emit = a), (e[n]._multi = !0);
}
function W(e) {
    var t;
    (t = e).scope && 'object' == typeof t.scope && null !== t.scope && ((t.beginScope = t.scope), delete t.scope),
        'string' == typeof e.beginScope && (e.beginScope = { _wrap: e.beginScope }),
        'string' == typeof e.endScope && (e.endScope = { _wrap: e.endScope }),
        !(function (e) {
            if (Array.isArray(e.begin)) {
                if (e.skip || e.excludeBegin || e.returnBegin) throw (F('skip, excludeBegin, returnBegin not compatible with beginScope: {}'), H);
                if ('object' != typeof e.beginScope || null === e.beginScope) throw (F('beginScope must be object'), H);
                Y(e, e.begin, { key: 'beginScope' }), (e.begin = I(e.begin, { joinWith: '' }));
            }
        })(e),
        !(function (e) {
            if (Array.isArray(e.end)) {
                if (e.skip || e.excludeEnd || e.returnEnd) throw (F('skip, excludeEnd, returnEnd not compatible with endScope: {}'), H);
                if ('object' != typeof e.endScope || null === e.endScope) throw (F('endScope must be object'), H);
                Y(e, e.end, { key: 'endScope' }), (e.end = I(e.end, { joinWith: '' }));
            }
        })(e);
}
class K extends Error {
    constructor(e, t) {
        super(e), (this.name = 'HTMLInjectionError'), (this.html = t);
    }
}
let z = Symbol('nomatch');
var q = (function (e) {
    let n = Object.create(null),
        s = Object.create(null),
        o = [],
        l = !0,
        u = "Could not find the language '{}', did you forget to load/include a language module?",
        c = {
            disableAutodetect: !0,
            name: 'Plain text',
            contains: []
        },
        v = {
            ignoreUnescapedHTML: !1,
            throwUnescapedHTML: !1,
            noHighlightRe: /^(no-?highlight)$/i,
            languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
            classPrefix: 'hljs-',
            cssSelector: 'pre code',
            languages: null,
            __emitter: d
        };
    function b(e) {
        return v.noHighlightRe.test(e);
    }
    function S(e, t, n) {
        let r = '',
            i = '';
        'object' == typeof t ? ((r = e), (n = t.ignoreIllegals), (i = t.language)) : (j('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'), j('10.7.0', 'Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277'), (i = e), (r = t)), void 0 === n && (n = !0);
        let a = {
            code: r,
            language: i
        };
        x('before:highlight', a);
        let s = a.result ? a.result : T(a.language, a.code, n);
        return (s.code = a.code), x('after:highlight', s), s;
    }
    function T(e, t, s, o) {
        let c = Object.create(null);
        function d() {
            if (!N.keywords) {
                O.addText(D);
                return;
            }
            let e = 0;
            N.keywordPatternRe.lastIndex = 0;
            let t = N.keywordPatternRe.exec(D),
                n = '';
            for (; t; ) {
                var r, i;
                n += D.substring(e, t.index);
                let a = b.case_insensitive ? t[0].toLowerCase() : t[0];
                let s = ((r = N), (i = a), r.keywords[i]);
                if (s) {
                    let [e, r] = s;
                    if ((O.addText(n), (n = ''), (c[a] = (c[a] || 0) + 1), c[a] <= 7 && (L += r), e.startsWith('_'))) n += t[0];
                    else {
                        let n = b.classNameAliases[e] || e;
                        O.addKeyword(t[0], n);
                    }
                } else n += t[0];
                (e = N.keywordPatternRe.lastIndex), (t = N.keywordPatternRe.exec(D));
            }
            (n += D.substring(e)), O.addText(n);
        }
        function _() {
            null != N.subLanguage
                ? !(function () {
                      if ('' === D) return;
                      let e = null;
                      if ('string' == typeof N.subLanguage) {
                          if (!n[N.subLanguage]) {
                              O.addText(D);
                              return;
                          }
                          (e = T(N.subLanguage, D, !0, C[N.subLanguage])), (C[N.subLanguage] = e._top);
                      } else e = y(D, N.subLanguage.length ? N.subLanguage : null);
                      N.relevance > 0 && (L += e.relevance), O.addSublanguage(e._emitter, e.language);
                  })()
                : d(),
                (D = '');
        }
        function p(e, t) {
            let n = 1,
                r = t.length - 1;
            for (; n <= r; ) {
                if (!e._emit[n]) {
                    n++;
                    continue;
                }
                let r = b.classNameAliases[e[n]] || e[n],
                    i = t[n];
                r ? O.addKeyword(i, r) : ((D = i), d(), (D = '')), n++;
            }
        }
        function h(e, t) {
            return e.scope && 'string' == typeof e.scope && O.openNode(b.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (O.addKeyword(D, b.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), (D = '')) : e.beginScope._multi && (p(e.beginScope, t), (D = ''))), (N = Object.create(e, { parent: { value: N } }));
        }
        let m = {};
        function g(n, i) {
            let a = i && i[0];
            if (((D += n), null == a)) return _(), 0;
            if ('begin' === m.type && 'end' === i.type && m.index === i.index && '' === a) {
                if (((D += t.slice(i.index, i.index + 1)), !l)) {
                    let t = Error(`0 width match regex (${e})`);
                    throw ((t.languageName = e), (t.badRule = m.rule), t);
                }
                return 1;
            }
            if (((m = i), 'begin' === i.type))
                return (function (e) {
                    let t = e[0],
                        n = e.rule,
                        i = new r(n);
                    for (let r of [n.__beforeBegin, n['on:begin']])
                        if (r && (r(e, i), i.isMatchIgnored)) {
                            var a;
                            return (a = t), 0 === N.matcher.regexIndex ? ((D += a[0]), 1) : ((V = !0), 0);
                        }
                    return n.skip ? (D += t) : (n.excludeBegin && (D += t), _(), !n.returnBegin && !n.excludeBegin && (D = t)), h(n, e), n.returnBegin ? 0 : t.length;
                })(i);
            if ('illegal' !== i.type || s) {
                if ('end' === i.type) {
                    let e = (function (e) {
                        let n = e[0],
                            i = t.substring(e.index),
                            a = (function e(t, n, i) {
                                let a = (function (e, t) {
                                    let n = e && e.exec(t);
                                    return n && 0 === n.index;
                                })(t.endRe, i);
                                if (a) {
                                    if (t['on:end']) {
                                        let e = new r(t);
                                        t['on:end'](n, e), e.isMatchIgnored && (a = !1);
                                    }
                                    if (a) {
                                        for (; t.endsParent && t.parent; ) t = t.parent;
                                        return t;
                                    }
                                }
                                if (t.endsWithParent) return e(t.parent, n, i);
                            })(N, e, i);
                        if (!a) return z;
                        let s = N;
                        N.endScope && N.endScope._wrap ? (_(), O.addKeyword(n, N.endScope._wrap)) : N.endScope && N.endScope._multi ? (_(), p(N.endScope, e)) : s.skip ? (D += n) : (!(s.returnEnd || s.excludeEnd) && (D += n), _(), s.excludeEnd && (D = n));
                        do N.scope && O.closeNode(), !N.skip && !N.subLanguage && (L += N.relevance), (N = N.parent);
                        while (N !== a.parent);
                        return a.starts && h(a.starts, e), s.returnEnd ? 0 : n.length;
                    })(i);
                    if (e !== z) return e;
                }
            } else {
                let e = Error('Illegal lexeme "' + a + '" for mode "' + (N.scope || '<unnamed>') + '"');
                throw ((e.mode = N), e);
            }
            if ('illegal' === i.type && '' === a) return 1;
            if (Z > 100000 && Z > 3 * i.index) throw Error('potential infinite loop, way more iterations than matches');
            return (D += a), a.length;
        }
        let b = R(e);
        if (!b) throw (F(u.replace('{}', e)), Error('Unknown language: "' + e + '"'));
        let S = (function (e) {
                function t(t, n) {
                    return RegExp(f(t), 'm' + (e.case_insensitive ? 'i' : '') + (e.unicodeRegex ? 'u' : '') + (n ? 'g' : ''));
                }
                class n {
                    constructor() {
                        (this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0);
                    }
                    addRule(e, t) {
                        (t.position = this.position++), (this.matchIndexes[this.matchAt] = t), this.regexes.push([t, e]), (this.matchAt += E(e) + 1);
                    }
                    compile() {
                        0 === this.regexes.length && (this.exec = () => null);
                        let e = this.regexes.map((e) => e[1]);
                        (this.matcherRe = t(I(e, { joinWith: '|' }), !0)), (this.lastIndex = 0);
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
                if ((!e.compilerExtensions && (e.compilerExtensions = []), e.contains && e.contains.includes('self'))) throw Error('ERR: contains `self` is not supported at the top-level of a language.  See documentation.');
                return (
                    (e.classNameAliases = a(e.classNameAliases || {})),
                    (function n(i, s) {
                        if (i.isCompiled) return i;
                        [w, k, W, G].forEach((e) => e(i, s)), e.compilerExtensions.forEach((e) => e(i, s)), (i.__beforeBegin = null), [M, P, U].forEach((e) => e(i, s)), (i.isCompiled = !0);
                        let o = null;
                        return (
                            'object' == typeof i.keywords && i.keywords.$pattern && ((i.keywords = Object.assign({}, i.keywords)), (o = i.keywords.$pattern), delete i.keywords.$pattern),
                            (o = o || /\w+/),
                            i.keywords &&
                                (i.keywords = (function e(t, n, r = 'keyword') {
                                    let i = Object.create(null);
                                    return (
                                        'string' == typeof t
                                            ? a(r, t.split(' '))
                                            : Array.isArray(t)
                                              ? a(r, t)
                                              : Object.keys(t).forEach(function (r) {
                                                    Object.assign(i, e(t[r], n, r));
                                                }),
                                        i
                                    );
                                    function a(e, t) {
                                        n && (t = t.map((e) => e.toLowerCase())),
                                            t.forEach(function (t) {
                                                let n = t.split('|');
                                                i[n[0]] = [
                                                    e,
                                                    (function (e, t) {
                                                        return t
                                                            ? Number(t)
                                                            : (function (e) {
                                                                    return B.includes(e.toLowerCase());
                                                                })(e)
                                                              ? 0
                                                              : 1;
                                                    })(n[0], n[1])
                                                ];
                                            });
                                    }
                                })(i.keywords, e.case_insensitive)),
                            (i.keywordPatternRe = t(o, !0)),
                            s && (!i.begin && (i.begin = /\B|\b/), (i.beginRe = t(i.begin)), !i.end && !i.endsWithParent && (i.end = /\B|\b/), i.end && (i.endRe = t(i.end)), (i.terminatorEnd = f(i.end) || ''), i.endsWithParent && s.terminatorEnd && (i.terminatorEnd += (i.end ? '|' : '') + s.terminatorEnd)),
                            i.illegal && (i.illegalRe = t(i.illegal)),
                            !i.contains && (i.contains = []),
                            (i.contains = [].concat(
                                ...i.contains.map(function (e) {
                                    return (function (e) {
                                        return (e.variants &&
                                            !e.cachedVariants &&
                                            (e.cachedVariants = e.variants.map(function (t) {
                                                return a(e, { variants: null }, t);
                                            })),
                                        e.cachedVariants)
                                            ? e.cachedVariants
                                            : (function e(t) {
                                                    return !!t && (t.endsWithParent || e(t.starts));
                                                })(e)
                                              ? a(e, { starts: e.starts ? a(e.starts) : null })
                                              : Object.isFrozen(e)
                                                ? a(e)
                                                : e;
                                    })('self' === e ? i : e);
                                })
                            )),
                            i.contains.forEach(function (e) {
                                n(e, i);
                            }),
                            i.starts && n(i.starts, s),
                            (i.matcher = (function (e) {
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
                            })(i)),
                            i
                        );
                    })(e)
                );
            })(b),
            A = '',
            N = o || S,
            C = {},
            O = new v.__emitter(v);
        !(function () {
            let e = [];
            for (let t = N; t !== b; t = t.parent) t.scope && e.unshift(t.scope);
            e.forEach((e) => O.openNode(e));
        })();
        let D = '',
            L = 0,
            x = 0,
            Z = 0,
            V = !1;
        try {
            for (N.matcher.considerAll(); ; ) {
                Z++, V ? (V = !1) : N.matcher.considerAll(), (N.matcher.lastIndex = x);
                let e = N.matcher.exec(t);
                if (!e) break;
                let n = t.substring(x, e.index),
                    r = g(n, e);
                x = e.index + r;
            }
            return (
                g(t.substring(x)),
                O.closeAllNodes(),
                O.finalize(),
                (A = O.toHTML()),
                {
                    language: e,
                    value: A,
                    relevance: L,
                    illegal: !1,
                    _emitter: O,
                    _top: N
                }
            );
        } catch (n) {
            if (n.message && n.message.includes('Illegal'))
                return {
                    language: e,
                    value: i(t),
                    illegal: !0,
                    relevance: 0,
                    _illegalBy: {
                        message: n.message,
                        index: x,
                        context: t.slice(x - 100, x + 100),
                        mode: n.mode,
                        resultSoFar: A
                    },
                    _emitter: O
                };
            if (l)
                return {
                    language: e,
                    value: i(t),
                    illegal: !1,
                    relevance: 0,
                    errorRaised: n,
                    _emitter: O,
                    _top: N
                };
            else throw n;
        }
    }
    function y(e, t) {
        t = t || v.languages || Object.keys(n);
        let r = (function (e) {
                let t = {
                    value: i(e),
                    illegal: !1,
                    relevance: 0,
                    _top: c,
                    _emitter: new v.__emitter(v)
                };
                return t._emitter.addText(e), t;
            })(e),
            a = t
                .filter(R)
                .filter(D)
                .map((t) => T(t, e, !1));
        a.unshift(r);
        let [s, o] = a.sort((e, t) => {
            if (e.relevance !== t.relevance) return t.relevance - e.relevance;
            if (e.language && t.language) {
                if (R(e.language).supersetOf === t.language) return 1;
                if (R(t.language).supersetOf === e.language) return -1;
            }
            return 0;
        });
        return (s.secondBest = o), s;
    }
    function A(e) {
        let t = null,
            n = (function (e) {
                let t = e.className + ' ';
                t += e.parentNode ? e.parentNode.className : '';
                let n = v.languageDetectRe.exec(t);
                if (n) {
                    let t = R(n[1]);
                    return !t && (V(u.replace('{}', n[1])), V('Falling back to no-highlight mode for this block.', e)), t ? n[1] : 'no-highlight';
                }
                return t.split(/\s+/).find((e) => b(e) || R(e));
            })(e);
        if (b(n)) return;
        if (
            (x('before:highlightElement', {
                el: e,
                language: n
            }),
            e.children.length > 0 && (!v.ignoreUnescapedHTML && (console.warn('One of your code blocks includes unescaped HTML. This is a potentially serious security risk.'), console.warn('https://github.com/highlightjs/highlight.js/wiki/security'), console.warn('The element with unescaped HTML:'), console.warn(e)), v.throwUnescapedHTML))
        )
            throw new K('One of your code blocks includes unescaped HTML.', e.innerHTML);
        let r = (t = e).textContent,
            i = n
                ? S(r, {
                      language: n,
                      ignoreIllegals: !0
                  })
                : y(r);
        (e.innerHTML = i.value),
            !(function (e, t, n) {
                let r = (t && s[t]) || n;
                e.classList.add('hljs'), e.classList.add(`language-${r}`);
            })(e, n, i.language),
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
    let N = !1;
    function C() {
        if ('loading' === document.readyState) {
            N = !0;
            return;
        }
        document.querySelectorAll(v.cssSelector).forEach(A);
    }
    'undefined' != typeof window &&
        window.addEventListener &&
        window.addEventListener(
            'DOMContentLoaded',
            function () {
                N && C();
            },
            !1
        );
    function R(e) {
        return n[(e = (e || '').toLowerCase())] || n[s[e]];
    }
    function O(e, { languageName: t }) {
        'string' == typeof e && (e = [e]),
            e.forEach((e) => {
                s[e.toLowerCase()] = t;
            });
    }
    function D(e) {
        let t = R(e);
        return t && !t.disableAutodetect;
    }
    function x(e, t) {
        o.forEach(function (n) {
            n[e] && n[e](t);
        });
    }
    for (let r in (Object.assign(e, {
        highlight: S,
        highlightAuto: y,
        highlightAll: C,
        highlightElement: A,
        highlightBlock: function (e) {
            return j('10.7.0', 'highlightBlock will be removed entirely in v12.0'), j('10.7.0', 'Please use highlightElement now.'), A(e);
        },
        configure: function (e) {
            v = a(v, e);
        },
        initHighlighting: () => {
            C(), j('10.6.0', 'initHighlighting() deprecated.  Use highlightAll() now.');
        },
        initHighlightingOnLoad: function () {
            C(), j('10.6.0', 'initHighlightingOnLoad() deprecated.  Use highlightAll() now.');
        },
        registerLanguage: function (t, r) {
            let i = null;
            try {
                i = r(e);
            } catch (e) {
                if ((F("Language definition for '{}' could not be registered.".replace('{}', t)), l)) F(e);
                else throw e;
                i = c;
            }
            !i.name && (i.name = t), (n[t] = i), (i.rawDefinition = r.bind(null, e)), i.aliases && O(i.aliases, { languageName: t });
        },
        unregisterLanguage: function (e) {
            for (let t of (delete n[e], Object.keys(s))) s[t] === e && delete s[t];
        },
        listLanguages: function () {
            return Object.keys(n);
        },
        getLanguage: R,
        registerAliases: O,
        autoDetection: D,
        inherit: a,
        addPlugin: function (e) {
            var t;
            (t = e)['before:highlightBlock'] &&
                !t['before:highlightElement'] &&
                (t['before:highlightElement'] = (e) => {
                    t['before:highlightBlock'](Object.assign({ block: e.el }, e));
                }),
                t['after:highlightBlock'] &&
                    !t['after:highlightElement'] &&
                    (t['after:highlightElement'] = (e) => {
                        t['after:highlightBlock'](Object.assign({ block: e.el }, e));
                    }),
                o.push(e);
        }
    }),
    (e.debugMode = function () {
        l = !1;
    }),
    (e.safeMode = function () {
        l = !0;
    }),
    (e.versionString = '11.7.0'),
    (e.regex = {
        concat: m,
        lookahead: _,
        either: g,
        optional: h,
        anyNumberOfTimes: p
    }),
    L))
        'object' == typeof L[r] && t.exports(L[r]);
    return Object.assign(e, L), e;
})({});
(e.exports = q), (q.HighlightJS = q), (q.default = q);
