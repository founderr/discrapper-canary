var n = { exports: {} };
function r(e) {
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
        Object.getOwnPropertyNames(e).forEach(function (n) {
            var i = e[n];
            'object' == typeof i && !Object.isFrozen(i) && r(i);
        }),
        e
    );
}
(n.exports = r), (n.exports.default = r);
class i {
    constructor(e) {
        void 0 === e.data && (e.data = {}), (this.data = e.data), (this.isMatchIgnored = !1);
    }
    ignoreMatch() {
        this.isMatchIgnored = !0;
    }
}
function a(e) {
    return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
}
function s(e, ...n) {
    let r = Object.create(null);
    for (let n in e) r[n] = e[n];
    return (
        n.forEach(function (e) {
            for (let n in e) r[n] = e[n];
        }),
        r
    );
}
let o = '</span>',
    l = (e) => !!e.scope || (e.sublanguage && e.language),
    u = (e, { prefix: n }) => {
        if (e.includes('.')) {
            let r = e.split('.');
            return [`${n}${r.shift()}`, ...r.map((e, n) => `${e}${'_'.repeat(n + 1)}`)].join(' ');
        }
        return `${n}${e}`;
    };
class c {
    constructor(e, n) {
        (this.buffer = ''), (this.classPrefix = n.classPrefix), e.walk(this);
    }
    addText(e) {
        this.buffer += a(e);
    }
    openNode(e) {
        if (!l(e)) return;
        let n = '';
        (n = e.sublanguage ? `language-${e.language}` : u(e.scope, { prefix: this.classPrefix })), this.span(n);
    }
    closeNode(e) {
        l(e) && (this.buffer += o);
    }
    value() {
        return this.buffer;
    }
    span(e) {
        this.buffer += `<span class="${e}">`;
    }
}
let d = (e = {}) => {
    let n = { children: [] };
    return Object.assign(n, e), n;
};
class f {
    constructor() {
        (this.rootNode = d()), (this.stack = [this.rootNode]);
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
        let n = d({ scope: e });
        this.add(n), this.stack.push(n);
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
    static _walk(e, n) {
        return 'string' == typeof n ? e.addText(n) : n.children && (e.openNode(n), n.children.forEach((n) => this._walk(e, n)), e.closeNode(n)), e;
    }
    static _collapse(e) {
        if ('string' != typeof e)
            e.children &&
                (e.children.every((e) => 'string' == typeof e)
                    ? (e.children = [e.children.join('')])
                    : e.children.forEach((e) => {
                          f._collapse(e);
                      }));
    }
}
class _ extends f {
    constructor(e) {
        super(), (this.options = e);
    }
    addKeyword(e, n) {
        if ('' !== e) this.openNode(n), this.addText(e), this.closeNode();
    }
    addText(e) {
        if ('' !== e) this.add(e);
    }
    addSublanguage(e, n) {
        let r = e.root;
        (r.sublanguage = !0), (r.language = n), this.add(r);
    }
    toHTML() {
        return new c(this, this.options).value();
    }
    finalize() {
        return !0;
    }
}
function h(e) {
    return e ? ('string' == typeof e ? e : e.source) : null;
}
function p(e) {
    return E('(?=', e, ')');
}
function m(e) {
    return E('(?:', e, ')*');
}
function g(e) {
    return E('(?:', e, ')?');
}
function E(...e) {
    return e.map((e) => h(e)).join('');
}
function v(e) {
    let n = e[e.length - 1];
    return 'object' == typeof n && n.constructor === Object ? (e.splice(e.length - 1, 1), n) : {};
}
function I(...e) {
    return '(' + (v(e).capture ? '' : '?:') + e.map((e) => h(e)).join('|') + ')';
}
function T(e) {
    return RegExp(e.toString() + '|').exec('').length - 1;
}
function b(e, n) {
    let r = e && e.exec(n);
    return r && 0 === r.index;
}
let y = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function S(e, { joinWith: n }) {
    let r = 0;
    return e
        .map((e) => {
            let n = (r += 1),
                i = h(e),
                a = '';
            for (; i.length > 0; ) {
                let e = y.exec(i);
                if (!e) {
                    a += i;
                    break;
                }
                (a += i.substring(0, e.index)), (i = i.substring(e.index + e[0].length)), '\\' === e[0][0] && e[1] ? (a += '\\' + String(Number(e[1]) + n)) : ((a += e[0]), '(' === e[0] && r++);
            }
            return a;
        })
        .map((e) => `(${e})`)
        .join(n);
}
let A = /\b\B/,
    N = '[a-zA-Z]\\w*',
    C = '[a-zA-Z_]\\w*',
    R = '\\b\\d+(\\.\\d+)?',
    O = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
    D = '\\b(0b[01]+)',
    L = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
    x = (e = {}) => {
        let n = /^#![ ]*\//;
        return (
            e.binary && (e.begin = E(n, /.*\b/, e.binary, /\b.*/)),
            s(
                {
                    scope: 'meta',
                    begin: n,
                    end: /$/,
                    relevance: 0,
                    'on:begin': (e, n) => {
                        0 !== e.index && n.ignoreMatch();
                    }
                },
                e
            )
        );
    },
    w = {
        begin: '\\\\[\\s\\S]',
        relevance: 0
    },
    P = {
        scope: 'string',
        begin: "'",
        end: "'",
        illegal: '\\n',
        contains: [w]
    },
    M = {
        scope: 'string',
        begin: '"',
        end: '"',
        illegal: '\\n',
        contains: [w]
    },
    k = { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ },
    U = function (e, n, r = {}) {
        let i = s(
            {
                scope: 'comment',
                begin: e,
                end: n,
                contains: []
            },
            r
        );
        i.contains.push({
            scope: 'doctag',
            begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
            end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
            excludeBegin: !0,
            relevance: 0
        });
        let a = I('I', 'a', 'is', 'so', 'us', 'to', 'at', 'if', 'in', 'it', 'on', /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return i.contains.push({ begin: E(/[ ]+/, '(', a, /[.]?[:]?([.][ ]|[ ])/, '){3}') }), i;
    },
    B = U('//', '$'),
    G = U('/\\*', '\\*/'),
    Z = U('#', '$'),
    F = {
        scope: 'number',
        begin: R,
        relevance: 0
    },
    V = {
        scope: 'number',
        begin: O,
        relevance: 0
    },
    j = {
        scope: 'number',
        begin: D,
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
                    w,
                    {
                        begin: /\[/,
                        end: /\]/,
                        relevance: 0,
                        contains: [w]
                    }
                ]
            }
        ]
    },
    Y = {
        scope: 'title',
        begin: N,
        relevance: 0
    },
    W = {
        scope: 'title',
        begin: C,
        relevance: 0
    },
    K = {
        begin: '\\.\\s*' + C,
        relevance: 0
    };
var z = Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: A,
    IDENT_RE: N,
    UNDERSCORE_IDENT_RE: C,
    NUMBER_RE: R,
    C_NUMBER_RE: O,
    BINARY_NUMBER_RE: D,
    RE_STARTERS_RE: L,
    SHEBANG: x,
    BACKSLASH_ESCAPE: w,
    APOS_STRING_MODE: P,
    QUOTE_STRING_MODE: M,
    PHRASAL_WORDS_MODE: k,
    COMMENT: U,
    C_LINE_COMMENT_MODE: B,
    C_BLOCK_COMMENT_MODE: G,
    HASH_COMMENT_MODE: Z,
    NUMBER_MODE: F,
    C_NUMBER_MODE: V,
    BINARY_NUMBER_MODE: j,
    REGEXP_MODE: H,
    TITLE_MODE: Y,
    UNDERSCORE_TITLE_MODE: W,
    METHOD_GUARD: K,
    END_SAME_AS_BEGIN: function (e) {
        return Object.assign(e, {
            'on:begin': (e, n) => {
                n.data._beginMatch = e[1];
            },
            'on:end': (e, n) => {
                n.data._beginMatch !== e[1] && n.ignoreMatch();
            }
        });
    }
});
function q(e, n) {
    '.' === e.input[e.index - 1] && n.ignoreMatch();
}
function Q(e, n) {
    void 0 !== e.className && ((e.scope = e.className), delete e.className);
}
function X(e, n) {
    if (!!n) e.beginKeywords && ((e.begin = '\\b(' + e.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'), (e.__beforeBegin = q), (e.keywords = e.keywords || e.beginKeywords), delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0));
}
function J(e, n) {
    Array.isArray(e.illegal) && (e.illegal = I(...e.illegal));
}
function $(e, n) {
    if (e.match) {
        if (e.begin || e.end) throw Error('begin & end are not supported with match');
        (e.begin = e.match), delete e.match;
    }
}
function ee(e, n) {
    void 0 === e.relevance && (e.relevance = 1);
}
let et = (e, n) => {
        if (!e.beforeMatch) return;
        if (e.starts) throw Error('beforeMatch cannot be used with starts');
        let r = Object.assign({}, e);
        Object.keys(e).forEach((n) => {
            delete e[n];
        }),
            (e.keywords = r.keywords),
            (e.begin = E(r.beforeMatch, p(r.begin))),
            (e.starts = {
                relevance: 0,
                contains: [Object.assign(r, { endsParent: !0 })]
            }),
            (e.relevance = 0),
            delete r.beforeMatch;
    },
    en = ['of', 'and', 'for', 'in', 'not', 'or', 'if', 'then', 'parent', 'list', 'value'],
    er = 'keyword';
function ei(e, n, r = er) {
    let i = Object.create(null);
    return (
        'string' == typeof e
            ? a(r, e.split(' '))
            : Array.isArray(e)
              ? a(r, e)
              : Object.keys(e).forEach(function (r) {
                    Object.assign(i, ei(e[r], n, r));
                }),
        i
    );
    function a(e, r) {
        n && (r = r.map((e) => e.toLowerCase())),
            r.forEach(function (n) {
                let r = n.split('|');
                i[r[0]] = [e, ea(r[0], r[1])];
            });
    }
}
function ea(e, n) {
    return n ? Number(n) : es(e) ? 0 : 1;
}
function es(e) {
    return en.includes(e.toLowerCase());
}
let eo = {},
    el = (e) => {
        console.error(e);
    },
    eu = (e, ...n) => {
        console.log(`WARN: ${e}`, ...n);
    },
    ec = (e, n) => {
        !eo[`${e}/${n}`] && (console.log(`Deprecated as of ${e}. ${n}`), (eo[`${e}/${n}`] = !0));
    },
    ed = Error();
function ef(e, n, { key: r }) {
    let i = 0,
        a = e[r],
        s = {},
        o = {};
    for (let e = 1; e <= n.length; e++) (o[e + i] = a[e]), (s[e + i] = !0), (i += T(n[e - 1]));
    (e[r] = o), (e[r]._emit = s), (e[r]._multi = !0);
}
function e_(e) {
    if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin) throw (el('skip, excludeBegin, returnBegin not compatible with beginScope: {}'), ed);
        if ('object' != typeof e.beginScope || null === e.beginScope) throw (el('beginScope must be object'), ed);
        ef(e, e.begin, { key: 'beginScope' }), (e.begin = S(e.begin, { joinWith: '' }));
    }
}
function eh(e) {
    if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd) throw (el('skip, excludeEnd, returnEnd not compatible with endScope: {}'), ed);
        if ('object' != typeof e.endScope || null === e.endScope) throw (el('endScope must be object'), ed);
        ef(e, e.end, { key: 'endScope' }), (e.end = S(e.end, { joinWith: '' }));
    }
}
function ep(e) {
    e.scope && 'object' == typeof e.scope && null !== e.scope && ((e.beginScope = e.scope), delete e.scope);
}
function em(e) {
    ep(e), 'string' == typeof e.beginScope && (e.beginScope = { _wrap: e.beginScope }), 'string' == typeof e.endScope && (e.endScope = { _wrap: e.endScope }), e_(e), eh(e);
}
function eg(e) {
    function n(n, r) {
        return RegExp(h(n), 'm' + (e.case_insensitive ? 'i' : '') + (e.unicodeRegex ? 'u' : '') + (r ? 'g' : ''));
    }
    class r {
        constructor() {
            (this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0);
        }
        addRule(e, n) {
            (n.position = this.position++), (this.matchIndexes[this.matchAt] = n), this.regexes.push([n, e]), (this.matchAt += T(e) + 1);
        }
        compile() {
            0 === this.regexes.length && (this.exec = () => null);
            let e = this.regexes.map((e) => e[1]);
            (this.matcherRe = n(S(e, { joinWith: '|' }), !0)), (this.lastIndex = 0);
        }
        exec(e) {
            this.matcherRe.lastIndex = this.lastIndex;
            let n = this.matcherRe.exec(e);
            if (!n) return null;
            let r = n.findIndex((e, n) => n > 0 && void 0 !== e),
                i = this.matchIndexes[r];
            return n.splice(0, r), Object.assign(n, i);
        }
    }
    class i {
        constructor() {
            (this.rules = []), (this.multiRegexes = []), (this.count = 0), (this.lastIndex = 0), (this.regexIndex = 0);
        }
        getMatcher(e) {
            if (this.multiRegexes[e]) return this.multiRegexes[e];
            let n = new r();
            return this.rules.slice(e).forEach(([e, r]) => n.addRule(e, r)), n.compile(), (this.multiRegexes[e] = n), n;
        }
        resumingScanAtSamePosition() {
            return 0 !== this.regexIndex;
        }
        considerAll() {
            this.regexIndex = 0;
        }
        addRule(e, n) {
            this.rules.push([e, n]), 'begin' === n.type && this.count++;
        }
        exec(e) {
            let n = this.getMatcher(this.regexIndex);
            n.lastIndex = this.lastIndex;
            let r = n.exec(e);
            if (this.resumingScanAtSamePosition()) {
                if (r && r.index === this.lastIndex);
                else {
                    let n = this.getMatcher(0);
                    (n.lastIndex = this.lastIndex + 1), (r = n.exec(e));
                }
            }
            return r && ((this.regexIndex += r.position + 1), this.regexIndex === this.count && this.considerAll()), r;
        }
    }
    function a(e) {
        let n = new i();
        return (
            e.contains.forEach((e) =>
                n.addRule(e.begin, {
                    rule: e,
                    type: 'begin'
                })
            ),
            e.terminatorEnd && n.addRule(e.terminatorEnd, { type: 'end' }),
            e.illegal && n.addRule(e.illegal, { type: 'illegal' }),
            n
        );
    }
    function o(r, i) {
        let s = r;
        if (r.isCompiled) return s;
        [Q, $, em, et].forEach((e) => e(r, i)), e.compilerExtensions.forEach((e) => e(r, i)), (r.__beforeBegin = null), [X, J, ee].forEach((e) => e(r, i)), (r.isCompiled = !0);
        let l = null;
        return (
            'object' == typeof r.keywords && r.keywords.$pattern && ((r.keywords = Object.assign({}, r.keywords)), (l = r.keywords.$pattern), delete r.keywords.$pattern),
            (l = l || /\w+/),
            r.keywords && (r.keywords = ei(r.keywords, e.case_insensitive)),
            (s.keywordPatternRe = n(l, !0)),
            i && (!r.begin && (r.begin = /\B|\b/), (s.beginRe = n(s.begin)), !r.end && !r.endsWithParent && (r.end = /\B|\b/), r.end && (s.endRe = n(s.end)), (s.terminatorEnd = h(s.end) || ''), r.endsWithParent && i.terminatorEnd && (s.terminatorEnd += (r.end ? '|' : '') + i.terminatorEnd)),
            r.illegal && (s.illegalRe = n(r.illegal)),
            !r.contains && (r.contains = []),
            (r.contains = [].concat(
                ...r.contains.map(function (e) {
                    return ev('self' === e ? r : e);
                })
            )),
            r.contains.forEach(function (e) {
                o(e, s);
            }),
            r.starts && o(r.starts, i),
            (s.matcher = a(s)),
            s
        );
    }
    if ((!e.compilerExtensions && (e.compilerExtensions = []), e.contains && e.contains.includes('self'))) throw Error('ERR: contains `self` is not supported at the top-level of a language.  See documentation.');
    return (e.classNameAliases = s(e.classNameAliases || {})), o(e);
}
function eE(e) {
    return !!e && (e.endsWithParent || eE(e.starts));
}
function ev(e) {
    return (e.variants &&
        !e.cachedVariants &&
        (e.cachedVariants = e.variants.map(function (n) {
            return s(e, { variants: null }, n);
        })),
    e.cachedVariants)
        ? e.cachedVariants
        : eE(e)
          ? s(e, { starts: e.starts ? s(e.starts) : null })
          : Object.isFrozen(e)
            ? s(e)
            : e;
}
var eI = '11.7.0';
class eT extends Error {
    constructor(e, n) {
        super(e), (this.name = 'HTMLInjectionError'), (this.html = n);
    }
}
let eb = a,
    ey = s,
    eS = Symbol('nomatch'),
    eA = 7;
var eN = (function (e) {
    let r = Object.create(null),
        a = Object.create(null),
        s = [],
        o = !0,
        l = "Could not find the language '{}', did you forget to load/include a language module?",
        u = {
            disableAutodetect: !0,
            name: 'Plain text',
            contains: []
        },
        c = {
            ignoreUnescapedHTML: !1,
            throwUnescapedHTML: !1,
            noHighlightRe: /^(no-?highlight)$/i,
            languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
            classPrefix: 'hljs-',
            cssSelector: 'pre code',
            languages: null,
            __emitter: _
        };
    function d(e) {
        return c.noHighlightRe.test(e);
    }
    function f(e) {
        let n = e.className + ' ';
        n += e.parentNode ? e.parentNode.className : '';
        let r = c.languageDetectRe.exec(n);
        if (r) {
            let n = w(r[1]);
            return !n && (eu(l.replace('{}', r[1])), eu('Falling back to no-highlight mode for this block.', e)), n ? r[1] : 'no-highlight';
        }
        return n.split(/\s+/).find((e) => d(e) || w(e));
    }
    function h(e, n, r) {
        let i = '',
            a = '';
        'object' == typeof n ? ((i = e), (r = n.ignoreIllegals), (a = n.language)) : (ec('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'), ec('10.7.0', 'Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277'), (a = e), (i = n)), void 0 === r && (r = !0);
        let s = {
            code: i,
            language: a
        };
        U('before:highlight', s);
        let o = s.result ? s.result : v(s.language, s.code, r);
        return (o.code = s.code), U('after:highlight', o), o;
    }
    function v(e, n, a, s) {
        let u = Object.create(null);
        function d(e, n) {
            return e.keywords[n];
        }
        function f() {
            if (!D.keywords) {
                x.addText(P);
                return;
            }
            let e = 0;
            D.keywordPatternRe.lastIndex = 0;
            let n = D.keywordPatternRe.exec(P),
                r = '';
            for (; n; ) {
                r += P.substring(e, n.index);
                let i = C.case_insensitive ? n[0].toLowerCase() : n[0],
                    a = d(D, i);
                if (a) {
                    let [e, s] = a;
                    if ((x.addText(r), (r = ''), (u[i] = (u[i] || 0) + 1), u[i] <= eA && (M += s), e.startsWith('_'))) r += n[0];
                    else {
                        let r = C.classNameAliases[e] || e;
                        x.addKeyword(n[0], r);
                    }
                } else r += n[0];
                (e = D.keywordPatternRe.lastIndex), (n = D.keywordPatternRe.exec(P));
            }
            (r += P.substring(e)), x.addText(r);
        }
        function _() {
            if ('' === P) return;
            let e = null;
            if ('string' == typeof D.subLanguage) {
                if (!r[D.subLanguage]) {
                    x.addText(P);
                    return;
                }
                (e = v(D.subLanguage, P, !0, L[D.subLanguage])), (L[D.subLanguage] = e._top);
            } else e = y(P, D.subLanguage.length ? D.subLanguage : null);
            D.relevance > 0 && (M += e.relevance), x.addSublanguage(e._emitter, e.language);
        }
        function h() {
            null != D.subLanguage ? _() : f(), (P = '');
        }
        function p(e, n) {
            let r = 1,
                i = n.length - 1;
            for (; r <= i; ) {
                if (!e._emit[r]) {
                    r++;
                    continue;
                }
                let i = C.classNameAliases[e[r]] || e[r],
                    a = n[r];
                i ? x.addKeyword(a, i) : ((P = a), f(), (P = '')), r++;
            }
        }
        function m(e, n) {
            return e.scope && 'string' == typeof e.scope && x.openNode(C.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (x.addKeyword(P, C.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), (P = '')) : e.beginScope._multi && (p(e.beginScope, n), (P = ''))), (D = Object.create(e, { parent: { value: D } }));
        }
        function g(e, n, r) {
            let a = b(e.endRe, r);
            if (a) {
                if (e['on:end']) {
                    let r = new i(e);
                    e['on:end'](n, r), r.isMatchIgnored && (a = !1);
                }
                if (a) {
                    for (; e.endsParent && e.parent; ) e = e.parent;
                    return e;
                }
            }
            if (e.endsWithParent) return g(e.parent, n, r);
        }
        function E(e) {
            return 0 === D.matcher.regexIndex ? ((P += e[0]), 1) : ((B = !0), 0);
        }
        function I(e) {
            let n = e[0],
                r = e.rule,
                a = new i(r);
            for (let i of [r.__beforeBegin, r['on:begin']]) if (i && (i(e, a), a.isMatchIgnored)) return E(n);
            return r.skip ? (P += n) : (r.excludeBegin && (P += n), h(), !r.returnBegin && !r.excludeBegin && (P = n)), m(r, e), r.returnBegin ? 0 : n.length;
        }
        function T(e) {
            let r = e[0],
                i = n.substring(e.index),
                a = g(D, e, i);
            if (!a) return eS;
            let s = D;
            D.endScope && D.endScope._wrap ? (h(), x.addKeyword(r, D.endScope._wrap)) : D.endScope && D.endScope._multi ? (h(), p(D.endScope, e)) : s.skip ? (P += r) : (!(s.returnEnd || s.excludeEnd) && (P += r), h(), s.excludeEnd && (P = r));
            do D.scope && x.closeNode(), !D.skip && !D.subLanguage && (M += D.relevance), (D = D.parent);
            while (D !== a.parent);
            return a.starts && m(a.starts, e), s.returnEnd ? 0 : r.length;
        }
        function S() {
            let e = [];
            for (let n = D; n !== C; n = n.parent) n.scope && e.unshift(n.scope);
            e.forEach((e) => x.openNode(e));
        }
        let A = {};
        function N(r, i) {
            let s = i && i[0];
            if (((P += r), null == s)) return h(), 0;
            if ('begin' === A.type && 'end' === i.type && A.index === i.index && '' === s) {
                if (((P += n.slice(i.index, i.index + 1)), !o)) {
                    let n = Error(`0 width match regex (${e})`);
                    throw ((n.languageName = e), (n.badRule = A.rule), n);
                }
                return 1;
            }
            if (((A = i), 'begin' === i.type)) return I(i);
            if ('illegal' !== i.type || a) {
                if ('end' === i.type) {
                    let e = T(i);
                    if (e !== eS) return e;
                }
            } else {
                let e = Error('Illegal lexeme "' + s + '" for mode "' + (D.scope || '<unnamed>') + '"');
                throw ((e.mode = D), e);
            }
            if ('illegal' === i.type && '' === s) return 1;
            if (U > 100000 && U > 3 * i.index) throw Error('potential infinite loop, way more iterations than matches');
            return (P += s), s.length;
        }
        let C = w(e);
        if (!C) throw (el(l.replace('{}', e)), Error('Unknown language: "' + e + '"'));
        let R = eg(C),
            O = '',
            D = s || R,
            L = {},
            x = new c.__emitter(c);
        S();
        let P = '',
            M = 0,
            k = 0,
            U = 0,
            B = !1;
        try {
            for (D.matcher.considerAll(); ; ) {
                U++, B ? (B = !1) : D.matcher.considerAll(), (D.matcher.lastIndex = k);
                let e = D.matcher.exec(n);
                if (!e) break;
                let r = n.substring(k, e.index),
                    i = N(r, e);
                k = e.index + i;
            }
            return (
                N(n.substring(k)),
                x.closeAllNodes(),
                x.finalize(),
                (O = x.toHTML()),
                {
                    language: e,
                    value: O,
                    relevance: M,
                    illegal: !1,
                    _emitter: x,
                    _top: D
                }
            );
        } catch (r) {
            if (r.message && r.message.includes('Illegal'))
                return {
                    language: e,
                    value: eb(n),
                    illegal: !0,
                    relevance: 0,
                    _illegalBy: {
                        message: r.message,
                        index: k,
                        context: n.slice(k - 100, k + 100),
                        mode: r.mode,
                        resultSoFar: O
                    },
                    _emitter: x
                };
            if (o)
                return {
                    language: e,
                    value: eb(n),
                    illegal: !1,
                    relevance: 0,
                    errorRaised: r,
                    _emitter: x,
                    _top: D
                };
            else throw r;
        }
    }
    function T(e) {
        let n = {
            value: eb(e),
            illegal: !1,
            relevance: 0,
            _top: u,
            _emitter: new c.__emitter(c)
        };
        return n._emitter.addText(e), n;
    }
    function y(e, n) {
        n = n || c.languages || Object.keys(r);
        let i = T(e),
            a = n
                .filter(w)
                .filter(M)
                .map((n) => v(n, e, !1));
        a.unshift(i);
        let [s, o] = a.sort((e, n) => {
                if (e.relevance !== n.relevance) return n.relevance - e.relevance;
                if (e.language && n.language) {
                    if (w(e.language).supersetOf === n.language) return 1;
                    if (w(n.language).supersetOf === e.language) return -1;
                }
                return 0;
            }),
            l = s;
        return (l.secondBest = o), l;
    }
    function S(e, n, r) {
        let i = (n && a[n]) || r;
        e.classList.add('hljs'), e.classList.add(`language-${i}`);
    }
    function A(e) {
        let n = null,
            r = f(e);
        if (d(r)) return;
        if (
            (U('before:highlightElement', {
                el: e,
                language: r
            }),
            e.children.length > 0 && (!c.ignoreUnescapedHTML && (console.warn('One of your code blocks includes unescaped HTML. This is a potentially serious security risk.'), console.warn('https://github.com/highlightjs/highlight.js/wiki/security'), console.warn('The element with unescaped HTML:'), console.warn(e)), c.throwUnescapedHTML))
        )
            throw new eT('One of your code blocks includes unescaped HTML.', e.innerHTML);
        let i = (n = e).textContent,
            a = r
                ? h(i, {
                      language: r,
                      ignoreIllegals: !0
                  })
                : y(i);
        (e.innerHTML = a.value),
            S(e, r, a.language),
            (e.result = {
                language: a.language,
                re: a.relevance,
                relevance: a.relevance
            }),
            a.secondBest &&
                (e.secondBest = {
                    language: a.secondBest.language,
                    relevance: a.secondBest.relevance
                }),
            U('after:highlightElement', {
                el: e,
                result: a,
                text: i
            });
    }
    function N(e) {
        c = ey(c, e);
    }
    let C = () => {
        D(), ec('10.6.0', 'initHighlighting() deprecated.  Use highlightAll() now.');
    };
    function R() {
        D(), ec('10.6.0', 'initHighlightingOnLoad() deprecated.  Use highlightAll() now.');
    }
    let O = !1;
    function D() {
        if ('loading' === document.readyState) {
            O = !0;
            return;
        }
        document.querySelectorAll(c.cssSelector).forEach(A);
    }
    function L() {
        O && D();
    }
    function x(n, i) {
        let a = null;
        try {
            a = i(e);
        } catch (e) {
            if ((el("Language definition for '{}' could not be registered.".replace('{}', n)), o)) el(e);
            else throw e;
            a = u;
        }
        !a.name && (a.name = n), (r[n] = a), (a.rawDefinition = i.bind(null, e)), a.aliases && P(a.aliases, { languageName: n });
    }
    function w(e) {
        return r[(e = (e || '').toLowerCase())] || r[a[e]];
    }
    function P(e, { languageName: n }) {
        'string' == typeof e && (e = [e]),
            e.forEach((e) => {
                a[e.toLowerCase()] = n;
            });
    }
    function M(e) {
        let n = w(e);
        return n && !n.disableAutodetect;
    }
    function k(e) {
        e['before:highlightBlock'] &&
            !e['before:highlightElement'] &&
            (e['before:highlightElement'] = (n) => {
                e['before:highlightBlock'](Object.assign({ block: n.el }, n));
            }),
            e['after:highlightBlock'] &&
                !e['after:highlightElement'] &&
                (e['after:highlightElement'] = (n) => {
                    e['after:highlightBlock'](Object.assign({ block: n.el }, n));
                });
    }
    function U(e, n) {
        let r = e;
        s.forEach(function (e) {
            e[r] && e[r](n);
        });
    }
    function B(e) {
        return ec('10.7.0', 'highlightBlock will be removed entirely in v12.0'), ec('10.7.0', 'Please use highlightElement now.'), A(e);
    }
    for (let i in ('undefined' != typeof window && window.addEventListener && window.addEventListener('DOMContentLoaded', L, !1),
    Object.assign(e, {
        highlight: h,
        highlightAuto: y,
        highlightAll: D,
        highlightElement: A,
        highlightBlock: B,
        configure: N,
        initHighlighting: C,
        initHighlightingOnLoad: R,
        registerLanguage: x,
        unregisterLanguage: function e(e) {
            for (let n of (delete r[e], Object.keys(a))) a[n] === e && delete a[n];
        },
        listLanguages: function e() {
            return Object.keys(r);
        },
        getLanguage: w,
        registerAliases: P,
        autoDetection: M,
        inherit: ey,
        addPlugin: function e(e) {
            k(e), s.push(e);
        }
    }),
    (e.debugMode = function () {
        o = !1;
    }),
    (e.safeMode = function () {
        o = !0;
    }),
    (e.versionString = eI),
    (e.regex = {
        concat: E,
        lookahead: p,
        either: I,
        optional: g,
        anyNumberOfTimes: m
    }),
    z))
        'object' == typeof z[i] && n.exports(z[i]);
    return Object.assign(e, z), e;
})({});
(e.exports = eN), (eN.HighlightJS = eN), (eN.default = eN);
