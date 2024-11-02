var s,
    i,
    a = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    h = n(302454),
    u = n.n(h),
    d = n(663993),
    c = n(770146),
    p = n(772096),
    m = n(428595),
    g = n(532901),
    C = n(207533),
    I = n(112864);
function x(e, t, n) {
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
let f = new RegExp('https?://'.concat(null !== (s = window.GLOBAL_ENV.CDN_HOST) && void 0 !== s ? s : ''));
function v(e) {
    return 'string' == typeof e.content ? e.content : N(e.content);
}
let b = {
        ...u().defaultRules,
        heading: {
            ...u().defaultRules.heading,
            react(e, t, n) {
                let s = 'h'.concat(e.level);
                return (0, a.jsx)(
                    c.Z,
                    {
                        tag: s,
                        children: t(e.content, n)
                    },
                    n.key
                );
            }
        },
        paragraph: {
            ...u().defaultRules.paragraph,
            react: (e, t, n) =>
                (0, a.jsx)(
                    'div',
                    {
                        className: C.paragraph,
                        children: t(e.content, n)
                    },
                    n.key
                )
        },
        strong: {
            ...u().defaultRules.strong,
            order: 6
        },
        em: {
            ...u().defaultRules.em,
            order: 6
        },
        u: {
            ...u().defaultRules.u,
            order: 5
        },
        del: {
            ...u().defaultRules.del,
            order: 6
        },
        link: {
            ...p.ZP,
            ...(0, g.Z)({ enableBuildOverrides: !1 }),
            order: 6
        },
        blockQuote: {
            ...u().defaultRules.blockQuote,
            react: (e, t, n) =>
                (0, a.jsx)(
                    'blockquote',
                    {
                        className: C.blockquote,
                        children: v(e)
                    },
                    n.key
                )
        },
        image: {
            ...u().defaultRules.image,
            order: 6,
            match(e, t, n) {
                let s = u().defaultRules.image;
                if (null == s || null == s.match) return !1;
                let i = s.match(e, t, n);
                if (null != i && Array.isArray(i) && i.length >= 3) {
                    let e = i[2];
                    if ('string' == typeof e) return null != e.match(f) ? i : null;
                }
                return !1;
            }
        },
        inlineCode: {
            ...m.Z.RULES.inlineCode,
            order: 6,
            react: (e, t, n) =>
                (0, a.jsx)(
                    'code',
                    {
                        className: C.codeInline,
                        children: v(e)
                    },
                    n.key
                )
        },
        codeBlock: {
            ...u().defaultRules.codeBlock,
            react(e, t, s) {
                let i = () =>
                    (0, a.jsx)(
                        'pre',
                        {
                            children: (0, a.jsx)('code', {
                                className: o()(I.scrollbarGhostHairline, 'hljs'),
                                children: v(e)
                            })
                        },
                        s.key
                    );
                return (0, a.jsx)(
                    d.GI,
                    {
                        createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                        webpackId: 364964,
                        renderFallback: i,
                        render: (t) => {
                            if (!(e.lang && t.hasLanguage(e.lang)) || 'string' != typeof e.content) return i();
                            {
                                let n = t.highlight(e.lang, e.content, !0);
                                return null == n
                                    ? i()
                                    : (0, a.jsx)(
                                          'pre',
                                          {
                                              children: (0, a.jsx)('code', {
                                                  className: o()(I.scrollbarGhostHairline, 'hljs', n.language),
                                                  dangerouslySetInnerHTML: { __html: n.value }
                                              })
                                          },
                                          s.key
                                      );
                            }
                        }
                    },
                    s.key
                );
            }
        }
    },
    E = u().parserFor(b),
    N = u().reactFor(u().ruleOutput(b, 'react'));
class P extends (i = r.PureComponent) {
    render() {
        let { className: e, children: t, state: n, parser: s, output: i } = this.props,
            r = i(
                s(''.concat(t, '\n\n'), {
                    inline: !1,
                    ...n
                })
            );
        return (0, a.jsx)('div', {
            className: o()(C.markdown, e),
            children: r
        });
    }
}
x(P, 'rules', b),
    x(P, 'defaultProps', {
        parser: E,
        output: N
    }),
    (t.Z = P);
