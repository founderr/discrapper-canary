var i,
    r,
    a = n(200651),
    s = n(192379),
    l = n(120356),
    o = n.n(l),
    c = n(477660),
    d = n.n(c),
    u = n(663993),
    m = n(770146),
    g = n(772096),
    f = n(428595),
    p = n(532901),
    _ = n(374865),
    h = n(763971);
function E(e, t, n) {
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
let b = new RegExp('https?://'.concat(null !== (i = window.GLOBAL_ENV.CDN_HOST) && void 0 !== i ? i : ''));
function x(e) {
    return 'string' == typeof e.content ? e.content : v(e.content);
}
let C = {
        ...d().defaultRules,
        heading: {
            ...d().defaultRules.heading,
            react(e, t, n) {
                let i = 'h'.concat(e.level);
                return (0, a.jsx)(
                    m.Z,
                    {
                        tag: i,
                        children: t(e.content, n)
                    },
                    n.key
                );
            }
        },
        paragraph: {
            ...d().defaultRules.paragraph,
            react: (e, t, n) =>
                (0, a.jsx)(
                    'div',
                    {
                        className: _.paragraph,
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
            ...g.ZP,
            ...(0, p.Z)({ enableBuildOverrides: !1 }),
            order: 6
        },
        blockQuote: {
            ...d().defaultRules.blockQuote,
            react: (e, t, n) =>
                (0, a.jsx)(
                    'blockquote',
                    {
                        className: _.blockquote,
                        children: x(e)
                    },
                    n.key
                )
        },
        image: {
            ...d().defaultRules.image,
            order: 6,
            match(e, t, n) {
                let i = d().defaultRules.image;
                if (null == i || null == i.match) return !1;
                let r = i.match(e, t, n);
                if (null != r && Array.isArray(r) && r.length >= 3) {
                    let e = r[2];
                    if ('string' == typeof e) return null != e.match(b) ? r : null;
                }
                return !1;
            }
        },
        inlineCode: {
            ...f.Z.RULES.inlineCode,
            order: 6,
            react: (e, t, n) =>
                (0, a.jsx)(
                    'code',
                    {
                        className: _.codeInline,
                        children: x(e)
                    },
                    n.key
                )
        },
        codeBlock: {
            ...d().defaultRules.codeBlock,
            react(e, t, i) {
                let r = () =>
                    (0, a.jsx)(
                        'pre',
                        {
                            children: (0, a.jsx)('code', {
                                className: o()(h.scrollbarGhostHairline, 'hljs'),
                                children: x(e)
                            })
                        },
                        i.key
                    );
                return (0, a.jsx)(
                    u.GI,
                    {
                        createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                        webpackId: 364964,
                        renderFallback: r,
                        render: (t) => {
                            if (!(e.lang && t.hasLanguage(e.lang)) || 'string' != typeof e.content) return r();
                            {
                                let n = t.highlight(e.lang, e.content, !0);
                                return null == n
                                    ? r()
                                    : (0, a.jsx)(
                                          'pre',
                                          {
                                              children: (0, a.jsx)('code', {
                                                  className: o()(h.scrollbarGhostHairline, 'hljs', n.language),
                                                  dangerouslySetInnerHTML: { __html: n.value }
                                              })
                                          },
                                          i.key
                                      );
                            }
                        }
                    },
                    i.key
                );
            }
        }
    },
    T = d().parserFor(C),
    v = d().reactFor(d().ruleOutput(C, 'react'));
class N extends (r = s.PureComponent) {
    render() {
        let { className: e, children: t, state: n, parser: i, output: r } = this.props,
            s = r(
                i(''.concat(t, '\n\n'), {
                    inline: !1,
                    ...n
                })
            );
        return (0, a.jsx)('div', {
            className: o()(_.markdown, e),
            children: s
        });
    }
}
E(N, 'rules', C),
    E(N, 'defaultProps', {
        parser: T,
        output: v
    }),
    (t.Z = N);
