let i;
var a = r(757143);
var s = r(477660),
    o = r.n(s),
    l = r(800927),
    u = r(945884),
    c = r(594199);
let d = o().defaultRules.lheading,
    f = o().defaultRules.heading,
    _ = o().defaultRules.link,
    h = o().defaultRules.image,
    p = o().defaultRules.list,
    m = o().defaultRules.blockQuote,
    g = o().defaultRules.paragraph,
    E = /\{(.+?)}/,
    v = /^\$(\w+?)\$/;
i = r(235375);
let I = (e) => {
        let { transformUpperCase: n = !1 } = e;
        return (e, r, i) => {
            let a = E.exec(e[1]),
                s = e[1].replace(E, '');
            return (
                n && (s = s.toUpperCase()),
                {
                    className: null != a ? a[1] : null,
                    level: '=' === e[2] ? 1 : 2,
                    content: o().parseInline(r, s, i)
                }
            );
        };
    },
    T = (e) => ({
        ...i.baseRules,
        image: {
            ...h,
            ...('function' == typeof i.customRules.image ? i.customRules.image(e) : i.customRules.image)
        },
        link: {
            ..._,
            ...('function' == typeof i.customRules.link ? i.customRules.link(e) : i.customRules.link)
        },
        list: {
            ...p,
            ...('function' == typeof i.customRules.list ? i.customRules.list(e) : i.customRules.list)
        },
        interpolation: {
            order: c.ZP.order,
            match: (e) => v.exec(e),
            parse(e, n, r) {
                let i = r.interpolations[e[1]];
                return null == i
                    ? {
                          type: 'text',
                          content: e[0]
                      }
                    : {
                          type: 'interpolation',
                          renderer: i
                      };
            },
            react: (e) => e.renderer()
        },
        lheading: {
            ...d,
            parse: I({ transformUpperCase: !0 }),
            ...('function' == typeof i.customRules.lheading ? i.customRules.lheading(e) : i.customRules.lheading)
        },
        heading: {
            ...f,
            ...('function' == typeof i.customRules.heading ? i.customRules.heading(e) : i.customRules.heading)
        },
        blockQuote: {
            ...m,
            ...('function' == typeof i.customRules.blockQuote ? i.customRules.blockQuote(e) : i.customRules.blockQuote)
        },
        paragraph: {
            ...g,
            ...('function' == typeof i.customRules.paragraph ? i.customRules.paragraph(e) : i.customRules.paragraph)
        }
    }),
    b = (e) => ({
        lheading: {
            ...d,
            parse: I({ transformUpperCase: !1 }),
            ...('function' == typeof i.customRules.lheading ? i.customRules.lheading(e) : i.customRules.lheading)
        }
    }),
    y = (e) => ({
        ...T(e),
        newline: { ...o().defaultRules.newline },
        text: c.ZP,
        list: l.Z,
        subtext: u.Z
    });
n.Z = {
    getDefaultRules: (e) => ({ ...T(e) }),
    getSpecialRules: (e) => ({
        ...T(e),
        ...b(e)
    }),
    getMessageRules: (e) => ({ ...y(e) })
};
