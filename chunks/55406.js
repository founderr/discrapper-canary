let i;
r.d(n, {
    n: function () {
        return N;
    }
});
var a = r(757143);
var s = r(477660),
    o = r.n(s),
    l = r(800927),
    u = r(945884),
    c = r(594199),
    d = r(454585);
let f = o().defaultRules.lheading,
    _ = o().defaultRules.heading,
    h = o().defaultRules.link,
    p = o().defaultRules.image,
    m = o().defaultRules.list,
    g = o().defaultRules.blockQuote,
    E = o().defaultRules.paragraph,
    v = /\{(.+?)}/,
    I = /^\$(\w+?)\$/;
i = r(235375);
let T = (e) => {
        let { transformUpperCase: n = !1 } = e;
        return (e, r, i) => {
            let a = v.exec(e[1]),
                s = e[1].replace(v, '');
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
    b = (e) => ({
        ...i.baseRules,
        image: {
            ...p,
            ...('function' == typeof i.customRules.image ? i.customRules.image(e) : i.customRules.image)
        },
        link: {
            ...h,
            ...('function' == typeof i.customRules.link ? i.customRules.link(e) : i.customRules.link)
        },
        list: {
            ...m,
            ...('function' == typeof i.customRules.list ? i.customRules.list(e) : i.customRules.list)
        },
        interpolation: {
            order: c.ZP.order,
            match: (e) => I.exec(e),
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
            ...f,
            parse: T({ transformUpperCase: !0 }),
            ...('function' == typeof i.customRules.lheading ? i.customRules.lheading(e) : i.customRules.lheading)
        },
        heading: {
            ..._,
            ...('function' == typeof i.customRules.heading ? i.customRules.heading(e) : i.customRules.heading)
        },
        blockQuote: {
            ...g,
            ...('function' == typeof i.customRules.blockQuote ? i.customRules.blockQuote(e) : i.customRules.blockQuote)
        },
        paragraph: {
            ...E,
            ...('function' == typeof i.customRules.paragraph ? i.customRules.paragraph(e) : i.customRules.paragraph)
        }
    }),
    y = (e) => ({
        lheading: {
            ...f,
            parse: T({ transformUpperCase: !1 }),
            ...('function' == typeof i.customRules.lheading ? i.customRules.lheading(e) : i.customRules.lheading)
        }
    }),
    S = (e) => ({
        ...b(e),
        newline: { ...o().defaultRules.newline },
        text: c.ZP,
        list: l.Z,
        subtext: u.Z
    });
function A(e) {
    return { ...b(e) };
}
function N(e, n, r) {
    return {
        hasSpoilerEmbeds: !1,
        content: d.Z.reactParserFor(A(n))(e.content, !1, null != r ? { changeLog: r } : {})
    };
}
n.Z = {
    getDefaultRules: A,
    getSpecialRules: (e) => ({
        ...b(e),
        ...y(e)
    }),
    getMessageRules: (e) => ({ ...S(e) })
};
