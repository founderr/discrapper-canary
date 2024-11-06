var a,
    i,
    r = n(200651),
    s = n(192379),
    l = n(120356),
    o = n.n(l),
    d = n(302454),
    u = n.n(d),
    c = n(663993),
    h = n(770146),
    p = n(772096),
    m = n(428595),
    g = n(532901),
    f = n(207533),
    b = n(112864);
function C(e, t, n) {
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
let I = new RegExp('https?://'.concat(null !== (a = window.GLOBAL_ENV.CDN_HOST) && void 0 !== a ? a : ''));
function x(e) {
    return 'string' == typeof e.content ? e.content : P(e.content);
}
let v = {
        ...u().defaultRules,
        heading: {
            ...u().defaultRules.heading,
            react(e, t, n) {
                let a = 'h'.concat(e.level);
                return (0, r.jsx)(
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
            ...u().defaultRules.paragraph,
            react: (e, t, n) =>
                (0, r.jsx)(
                    'div',
                    {
                        className: f.paragraph,
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
                (0, r.jsx)(
                    'blockquote',
                    {
                        className: f.blockquote,
                        children: x(e)
                    },
                    n.key
                )
        },
        image: {
            ...u().defaultRules.image,
            order: 6,
            match(e, t, n) {
                let a = u().defaultRules.image;
                if (null == a || null == a.match) return !1;
                let i = a.match(e, t, n);
                if (null != i && Array.isArray(i) && i.length >= 3) {
                    let e = i[2];
                    if ('string' == typeof e) return null != e.match(I) ? i : null;
                }
                return !1;
            }
        },
        inlineCode: {
            ...m.Z.RULES.inlineCode,
            order: 6,
            react: (e, t, n) =>
                (0, r.jsx)(
                    'code',
                    {
                        className: f.codeInline,
                        children: x(e)
                    },
                    n.key
                )
        },
        codeBlock: {
            ...u().defaultRules.codeBlock,
            react(e, t, a) {
                let i = () =>
                    (0, r.jsx)(
                        'pre',
                        {
                            children: (0, r.jsx)('code', {
                                className: o()(b.scrollbarGhostHairline, 'hljs'),
                                children: x(e)
                            })
                        },
                        a.key
                    );
                return (0, r.jsx)(
                    c.GI,
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
                                    : (0, r.jsx)(
                                          'pre',
                                          {
                                              children: (0, r.jsx)('code', {
                                                  className: o()(b.scrollbarGhostHairline, 'hljs', n.language),
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
    _ = u().parserFor(v),
    P = u().reactFor(u().ruleOutput(v, 'react'));
class N extends (i = s.PureComponent) {
    render() {
        let { className: e, children: t, state: n, parser: a, output: i } = this.props,
            s = i(
                a(''.concat(t, '\n\n'), {
                    inline: !1,
                    ...n
                })
            );
        return (0, r.jsx)('div', {
            className: o()(f.markdown, e),
            children: s
        });
    }
}
C(N, 'rules', v),
    C(N, 'defaultProps', {
        parser: _,
        output: P
    }),
    (t.Z = N);
