var n,
    a,
    i = s(735250),
    r = s(470079),
    l = s(120356),
    o = s.n(l),
    h = s(302454),
    d = s.n(h),
    u = s(663993),
    c = s(770146),
    p = s(772096),
    m = s(428595),
    g = s(532901),
    I = s(207533),
    x = s(112864);
function C(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
let v = new RegExp('https?://'.concat(null !== (n = window.GLOBAL_ENV.CDN_HOST) && void 0 !== n ? n : ''));
function N(e) {
    return 'string' == typeof e.content ? e.content : P(e.content);
}
let f = {
        ...d().defaultRules,
        heading: {
            ...d().defaultRules.heading,
            react(e, t, s) {
                let n = 'h'.concat(e.level);
                return (0, i.jsx)(
                    c.Z,
                    {
                        tag: n,
                        children: t(e.content, s)
                    },
                    s.key
                );
            }
        },
        paragraph: {
            ...d().defaultRules.paragraph,
            react: (e, t, s) =>
                (0, i.jsx)(
                    'div',
                    {
                        className: I.paragraph,
                        children: t(e.content, s)
                    },
                    s.key
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
            ...p.ZP,
            ...(0, g.Z)({ enableBuildOverrides: !1 }),
            order: 6
        },
        blockQuote: {
            ...d().defaultRules.blockQuote,
            react: (e, t, s) =>
                (0, i.jsx)(
                    'blockquote',
                    {
                        className: I.blockquote,
                        children: N(e)
                    },
                    s.key
                )
        },
        image: {
            ...d().defaultRules.image,
            order: 6,
            match(e, t, s) {
                let n = d().defaultRules.image;
                if (null == n || null == n.match) return !1;
                let a = n.match(e, t, s);
                if (null != a && Array.isArray(a) && a.length >= 3) {
                    let e = a[2];
                    if ('string' == typeof e) return null != e.match(v) ? a : null;
                }
                return !1;
            }
        },
        inlineCode: {
            ...m.Z.RULES.inlineCode,
            order: 6,
            react: (e, t, s) =>
                (0, i.jsx)(
                    'code',
                    {
                        className: I.codeInline,
                        children: N(e)
                    },
                    s.key
                )
        },
        codeBlock: {
            ...d().defaultRules.codeBlock,
            react(e, t, n) {
                let a = () =>
                    (0, i.jsx)(
                        'pre',
                        {
                            children: (0, i.jsx)('code', {
                                className: o()(x.scrollbarGhostHairline, 'hljs'),
                                children: N(e)
                            })
                        },
                        n.key
                    );
                return (0, i.jsx)(
                    u.GI,
                    {
                        createPromise: () => Promise.resolve().then(s.bind(s, 364964)),
                        webpackId: 364964,
                        renderFallback: a,
                        render: (t) => {
                            if (!(e.lang && t.hasLanguage(e.lang)) || 'string' != typeof e.content) return a();
                            {
                                let s = t.highlight(e.lang, e.content, !0);
                                return null == s
                                    ? a()
                                    : (0, i.jsx)(
                                          'pre',
                                          {
                                              children: (0, i.jsx)('code', {
                                                  className: o()(x.scrollbarGhostHairline, 'hljs', s.language),
                                                  dangerouslySetInnerHTML: { __html: s.value }
                                              })
                                          },
                                          n.key
                                      );
                            }
                        }
                    },
                    n.key
                );
            }
        }
    },
    b = d().parserFor(f),
    P = d().reactFor(d().ruleOutput(f, 'react'));
class S extends (a = r.PureComponent) {
    render() {
        let { className: e, children: t, state: s, parser: n, output: a } = this.props,
            r = a(
                n(''.concat(t, '\n\n'), {
                    inline: !1,
                    ...s
                })
            );
        return (0, i.jsx)('div', {
            className: o()(I.markdown, e),
            children: r
        });
    }
}
C(S, 'rules', f),
    C(S, 'defaultProps', {
        parser: b,
        output: P
    }),
    (t.Z = S);
