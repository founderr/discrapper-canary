var r,
    a,
    l = n(200651),
    i = n(192379),
    o = n(120356),
    c = n.n(o),
    s = n(302454),
    d = n.n(s),
    u = n(663993),
    h = n(770146),
    m = n(772096),
    x = n(428595),
    f = n(532901),
    p = n(230568),
    b = n(110933);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let v = new RegExp('https?://'.concat(null !== (r = window.GLOBAL_ENV.CDN_HOST) && void 0 !== r ? r : ''));
function C(e) {
    return 'string' == typeof e.content ? e.content : T(e.content);
}
let _ = {
        ...d().defaultRules,
        heading: {
            ...d().defaultRules.heading,
            react(e, t, n) {
                let r = 'h'.concat(e.level);
                return (0, l.jsx)(
                    h.Z,
                    {
                        tag: r,
                        children: t(e.content, n)
                    },
                    n.key
                );
            }
        },
        paragraph: {
            ...d().defaultRules.paragraph,
            react: (e, t, n) =>
                (0, l.jsx)(
                    'div',
                    {
                        className: p.paragraph,
                        children: t(e.content, n)
                    },
                    n.key
                )
        },
        strong: {
            ...d().defaultRules.strong,
            order: 6
        },
        em: {
            ...d().defaultRules.em,
            order: 6
        },
        u: {
            ...d().defaultRules.u,
            order: 5
        },
        del: {
            ...d().defaultRules.del,
            order: 6
        },
        link: {
            ...m.ZP,
            ...(0, f.Z)({ enableBuildOverrides: !1 }),
            order: 6
        },
        blockQuote: {
            ...d().defaultRules.blockQuote,
            react: (e, t, n) =>
                (0, l.jsx)(
                    'blockquote',
                    {
                        className: p.blockquote,
                        children: C(e)
                    },
                    n.key
                )
        },
        image: {
            ...d().defaultRules.image,
            order: 6,
            match(e, t, n) {
                let r = d().defaultRules.image;
                if (null == r || null == r.match) return !1;
                let a = r.match(e, t, n);
                if (null != a && Array.isArray(a) && a.length >= 3) {
                    let e = a[2];
                    if ('string' == typeof e) return null != e.match(v) ? a : null;
                }
                return !1;
            }
        },
        inlineCode: {
            ...x.Z.RULES.inlineCode,
            order: 6,
            react: (e, t, n) =>
                (0, l.jsx)(
                    'code',
                    {
                        className: p.codeInline,
                        children: C(e)
                    },
                    n.key
                )
        },
        codeBlock: {
            ...d().defaultRules.codeBlock,
            react(e, t, r) {
                let a = () =>
                    (0, l.jsx)(
                        'pre',
                        {
                            children: (0, l.jsx)('code', {
                                className: c()(b.scrollbarGhostHairline, 'hljs'),
                                children: C(e)
                            })
                        },
                        r.key
                    );
                return (0, l.jsx)(
                    u.GI,
                    {
                        createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                        webpackId: 364964,
                        renderFallback: a,
                        render: (t) => {
                            if (!(e.lang && t.hasLanguage(e.lang)) || 'string' != typeof e.content) return a();
                            {
                                let n = t.highlight(e.lang, e.content, !0);
                                return null == n
                                    ? a()
                                    : (0, l.jsx)(
                                          'pre',
                                          {
                                              children: (0, l.jsx)('code', {
                                                  className: c()(b.scrollbarGhostHairline, 'hljs', n.language),
                                                  dangerouslySetInnerHTML: { __html: n.value }
                                              })
                                          },
                                          r.key
                                      );
                            }
                        }
                    },
                    r.key
                );
            }
        }
    },
    j = d().parserFor(_),
    T = d().reactFor(d().ruleOutput(_, 'react'));
class S extends (a = i.PureComponent) {
    render() {
        let { className: e, children: t, state: n, parser: r, output: a } = this.props,
            i = a(
                r(''.concat(t, '\n\n'), {
                    inline: !1,
                    ...n
                })
            );
        return (0, l.jsx)('div', {
            className: c()(p.markdown, e),
            children: i
        });
    }
}
g(S, 'rules', _),
    g(S, 'defaultProps', {
        parser: j,
        output: T
    }),
    (t.Z = S);
