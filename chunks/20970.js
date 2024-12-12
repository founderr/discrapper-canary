r.d(n, {
    j: function () {
        return p;
    }
});
var i = r(302454);
let { newline: a, paragraph: s, url: o, link: l, strong: u, u: c, br: d, em: f, image: _, text: h } = i.defaultRules,
    p = {
        newline: a,
        paragraph: s,
        url: o,
        link: {
            ...l,
            parse(e, n, r) {
                let i = l.parse(e, n, r);
                return (i.context = r.context), i;
            }
        },
        strong: u,
        u: c,
        br: d,
        em: f,
        image: _,
        hook: {
            order: h.order,
            match: (0, i.inlineRegex)(/^\$\[(.*?)\]\((\w+)\)/),
            parse(e, n, r) {
                let { context: i } = r;
                return {
                    render: i[e[2]],
                    content: n(e[1], r)
                };
            },
            react: (e, n, r) => e.render(n(e.content, r), r.key)
        },
        noparse: {
            order: h.order,
            match: (0, i.inlineRegex)(/^!!(\d+?)!!/),
            parse(e, n, r) {
                let { unsafeContext: i } = r,
                    a = i[e[1]];
                return (
                    'string' != typeof a && (a = null != a ? a.toString() : ''),
                    {
                        type: 'text',
                        content: a
                    }
                );
            },
            react: (e) => e.content
        },
        text: h
    };
