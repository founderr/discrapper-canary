let r;
n(757143);
var i = n(302454),
    a = n.n(i),
    s = n(800927),
    o = n(945884),
    l = n(594199);
let u = a().defaultRules.lheading,
    c = a().defaultRules.heading,
    d = a().defaultRules.link,
    f = a().defaultRules.image,
    _ = a().defaultRules.list,
    h = a().defaultRules.blockQuote,
    p = a().defaultRules.paragraph,
    m = /\{(.+?)}/,
    g = /^\$(\w+?)\$/;
r = n(235375);
let E = (e) => {
        let { transformUpperCase: t = !1 } = e;
        return (e, n, r) => {
            let i = m.exec(e[1]),
                s = e[1].replace(m, '');
            return (
                t && (s = s.toUpperCase()),
                {
                    className: null != i ? i[1] : null,
                    level: '=' === e[2] ? 1 : 2,
                    content: a().parseInline(n, s, r)
                }
            );
        };
    },
    v = (e) => ({
        ...r.baseRules,
        image: {
            ...f,
            ...('function' == typeof r.customRules.image ? r.customRules.image(e) : r.customRules.image)
        },
        link: {
            ...d,
            ...('function' == typeof r.customRules.link ? r.customRules.link(e) : r.customRules.link)
        },
        list: {
            ..._,
            ...('function' == typeof r.customRules.list ? r.customRules.list(e) : r.customRules.list)
        },
        interpolation: {
            order: l.ZP.order,
            match: (e) => g.exec(e),
            parse(e, t, n) {
                let r = n.interpolations[e[1]];
                return null == r
                    ? {
                          type: 'text',
                          content: e[0]
                      }
                    : {
                          type: 'interpolation',
                          renderer: r
                      };
            },
            react: (e) => e.renderer()
        },
        lheading: {
            ...u,
            parse: E({ transformUpperCase: !0 }),
            ...('function' == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading)
        },
        heading: {
            ...c,
            ...('function' == typeof r.customRules.heading ? r.customRules.heading(e) : r.customRules.heading)
        },
        blockQuote: {
            ...h,
            ...('function' == typeof r.customRules.blockQuote ? r.customRules.blockQuote(e) : r.customRules.blockQuote)
        },
        paragraph: {
            ...p,
            ...('function' == typeof r.customRules.paragraph ? r.customRules.paragraph(e) : r.customRules.paragraph)
        }
    }),
    I = (e) => ({
        lheading: {
            ...u,
            parse: E({ transformUpperCase: !1 }),
            ...('function' == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading)
        }
    }),
    S = (e) => ({
        ...v(e),
        newline: { ...a().defaultRules.newline },
        text: l.ZP,
        list: s.Z,
        subtext: o.Z
    });
t.Z = {
    getDefaultRules: (e) => ({ ...v(e) }),
    getSpecialRules: (e) => ({
        ...v(e),
        ...I(e)
    }),
    getMessageRules: (e) => ({ ...S(e) })
};
