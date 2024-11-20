var a,
    i,
    s = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    d = n(302454),
    c = n.n(d),
    u = n(663993),
    h = n(770146),
    p = n(772096),
    m = n(428595),
    g = n(532901),
    b = n(207533),
    f = n(112864);
function I(e, t, n) {
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
let C = new RegExp('https?://'.concat(null !== (a = window.GLOBAL_ENV.CDN_HOST) && void 0 !== a ? a : ''));
function x(e) {
    return 'string' == typeof e.content ? e.content : N(e.content);
}
let _ = {
        ...c().defaultRules,
        heading: {
            ...c().defaultRules.heading,
            react(e, t, n) {
                let a = 'h'.concat(e.level);
                return (0, s.jsx)(
                    h.Z,
                    {
                        tag: a,
                        children: t(e.content, n)
                    },
                    n.key
                );
            }
        },
        paragraph: {
            ...c().defaultRules.paragraph,
            react: (e, t, n) =>
                (0, s.jsx)(
                    'div',
                    {
                        className: b.paragraph,
                        children: t(e.content, n)
                    },
                    n.key
                )
        },
        strong: {
            ...c().defaultRules.strong,
            order: 6
        },
        em: {
            ...c().defaultRules.em,
            order: 6
        },
        u: {
            ...c().defaultRules.u,
            order: 5
        },
        del: {
            ...c().defaultRules.del,
            order: 6
        },
        link: {
            ...p.ZP,
            ...(0, g.Z)({ enableBuildOverrides: !1 }),
            order: 6
        },
        blockQuote: {
            ...c().defaultRules.blockQuote,
            react: (e, t, n) =>
                (0, s.jsx)(
                    'blockquote',
                    {
                        className: b.blockquote,
                        children: x(e)
                    },
                    n.key
                )
        },
        image: {
            ...c().defaultRules.image,
            order: 6,
            match(e, t, n) {
                let a = c().defaultRules.image;
                if (null == a || null == a.match) return !1;
                let i = a.match(e, t, n);
                if (null != i && Array.isArray(i) && i.length >= 3) {
                    let e = i[2];
                    if ('string' == typeof e) return null != e.match(C) ? i : null;
                }
                return !1;
            }
        },
        inlineCode: {
            ...m.Z.RULES.inlineCode,
            order: 6,
            react: (e, t, n) =>
                (0, s.jsx)(
                    'code',
                    {
                        className: b.codeInline,
                        children: x(e)
                    },
                    n.key
                )
        },
        codeBlock: {
            ...c().defaultRules.codeBlock,
            react(e, t, a) {
                let i = () =>
                    (0, s.jsx)(
                        'pre',
                        {
                            children: (0, s.jsx)('code', {
                                className: o()(f.scrollbarGhostHairline, 'hljs'),
                                children: x(e)
                            })
                        },
                        a.key
                    );
                return (0, s.jsx)(
                    u.GI,
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
                                    : (0, s.jsx)(
                                          'pre',
                                          {
                                              children: (0, s.jsx)('code', {
                                                  className: o()(f.scrollbarGhostHairline, 'hljs', n.language),
                                                  dangerouslySetInnerHTML: { __html: n.value }
                                              })
                                          },
                                          a.key
                                      );
                            }
                        }
                    },
                    a.key
                );
            }
        }
    },
    v = c().parserFor(_),
    N = c().reactFor(c().ruleOutput(_, 'react'));
class P extends (i = r.PureComponent) {
    render() {
        let { className: e, children: t, state: n, parser: a, output: i } = this.props,
            r = i(
                a(''.concat(t, '\n\n'), {
                    inline: !1,
                    ...n
                })
            );
        return (0, s.jsx)('div', {
            className: o()(b.markdown, e),
            children: r
        });
    }
}
I(P, 'rules', _),
    I(P, 'defaultProps', {
        parser: v,
        output: N
    }),
    (t.Z = P);
