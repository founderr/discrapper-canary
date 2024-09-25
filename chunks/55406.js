let r;
var i = n(757143);
var a = n(302454),
    o = n.n(a),
    s = n(800927),
    l = n(945884),
    u = n(594199);
let c = o().defaultRules.lheading,
    d = o().defaultRules.heading,
    _ = o().defaultRules.link,
    E = o().defaultRules.image,
    f = o().defaultRules.list,
    h = o().defaultRules.blockQuote,
    p = o().defaultRules.paragraph,
    m = /\{(.+?)}/,
    I = /^\$(\w+?)\$/;
r = n(235375);
let T = (e) => {
        let { transformUpperCase: t = !1 } = e;
        return (e, n, r) => {
            let i = m.exec(e[1]),
                a = e[1].replace(m, '');
            return (
                t && (a = a.toUpperCase()),
                {
                    className: null != i ? i[1] : null,
                    level: '=' === e[2] ? 1 : 2,
                    content: o().parseInline(n, a, r)
                }
            );
        };
    },
    g = (e) => ({
        ...r.baseRules,
        image: {
            ...E,
            ...('function' == typeof r.customRules.image ? r.customRules.image(e) : r.customRules.image)
        },
        link: {
            ..._,
            ...('function' == typeof r.customRules.link ? r.customRules.link(e) : r.customRules.link)
        },
        list: {
            ...f,
            ...('function' == typeof r.customRules.list ? r.customRules.list(e) : r.customRules.list)
        },
        interpolation: {
            order: u.ZP.order,
            match: (e) => I.exec(e),
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
            ...c,
            parse: T({ transformUpperCase: !0 }),
            ...('function' == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading)
        },
        heading: {
            ...d,
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
    S = (e) => ({
        lheading: {
            ...c,
            parse: T({ transformUpperCase: !1 }),
            ...('function' == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading)
        }
    }),
    A = (e) => ({
        ...g(e),
        newline: { ...o().defaultRules.newline },
        text: u.ZP,
        list: s.Z,
        subtext: l.Z
    });
t.Z = {
    getDefaultRules: (e) => ({ ...g(e) }),
    getSpecialRules: (e) => ({
        ...g(e),
        ...S(e)
    }),
    getMessageRules: (e) => ({ ...A(e) })
};
