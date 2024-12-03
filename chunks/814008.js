i(47120);
var s = i(200651),
    a = i(192379),
    n = i(120356),
    r = i.n(n),
    l = i(418435),
    o = i.n(l),
    d = i(442837),
    c = i(481060),
    m = i(558324),
    u = i(367907),
    x = i(456268),
    g = i(626135),
    h = i(999382),
    p = i(654351),
    v = i(259674),
    f = i(203377),
    N = i(981631),
    T = i(388032),
    j = i(89388);
let C = /^[A-Za-z0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]+$/u;
t.Z = (e) => {
    var t;
    let { guild: i, guildMetadata: n, headerId: l } = e,
        [I, S] = a.useState(!1),
        b = (0, d.e7)([h.Z], () => 'keywords' in h.Z.getErrors()),
        E = (e) => {
            if (C.test(e)) S(!1);
            else {
                S(!0);
                return;
            }
            if ((null == i ? void 0 : i.id) == null) return;
            let { keywords: t } = n;
            !(t.length >= f.G7) && (0, x.zH)(i.id, o()([...t, e.toLowerCase()]));
        },
        _ = (e) => {
            E(e),
                g.default.track(N.rMx.DISCOVERY_SETUP_POPULAR_TAG_CLICKED, {
                    tag: e,
                    primary_category_id: n.primaryCategoryId,
                    ...(0, u.hH)(i.id)
                });
        },
        y = I
            ? T.intl.string(T.t['t/mtnZ'])
            : b
              ? T.intl.format(T.t.loup7u, {
                    onLearnMoreClick: () => {
                        (0, v.lW)({
                            articleId: N.BhN.SERVER_DISCOVERY_GUIDELINES,
                            guildId: i.id,
                            modalStep: v.tK.TAGS
                        });
                    }
                })
              : null,
        k = new Set(n.keywords);
    return (0, s.jsxs)('div', {
        className: j.container,
        children: [
            (0, s.jsxs)('div', {
                className: j.content,
                children: [
                    (0, s.jsx)('div', { className: r()(j.stepImage, j.tagImage) }),
                    (0, s.jsx)(c.Heading, {
                        variant: 'heading-xl/semibold',
                        className: j.header,
                        id: l,
                        children: T.intl.string(T.t['0PJZXl'])
                    }),
                    (0, s.jsx)(c.Text, {
                        color: 'none',
                        variant: 'text-md/normal',
                        className: j.headerCaption,
                        children: T.intl.string(T.t.MMEJFB)
                    })
                ]
            }),
            (0, s.jsxs)(c.FormSection, {
                className: j.form,
                children: [
                    (0, s.jsx)(c.FormTitle, {
                        required: !0,
                        children: T.intl.string(T.t['0PJZXl'])
                    }),
                    (0, s.jsx)(c.FormText, {
                        type: c.FormTextTypes.DESCRIPTION,
                        className: j.description,
                        children: T.intl.string(T.t.ztiTDA)
                    }),
                    (0, s.jsx)(m.Z, {
                        className: r()(j.tags, { [j.error]: null != y }),
                        tags: n.keywords,
                        onRemoveTag: (e) => {
                            if ((null == i ? void 0 : i.id) == null) return;
                            let t = [...n.keywords];
                            t.splice(e, 1), (0, x.zH)(i.id, t);
                        },
                        onAddTag: E,
                        maxTags: f.G7,
                        maxTaxLength: f._0,
                        placeholder: (null == n ? void 0 : null === (t = n.keywords) || void 0 === t ? void 0 : t.length) === 0 ? T.intl.string(T.t.EL4Lho) : ''
                    }),
                    (0, s.jsx)(c.Text, {
                        className: j.error,
                        color: 'text-danger',
                        variant: 'text-sm/normal',
                        children: y
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: j.form,
                children: (0, s.jsx)(c.FormTitle, { children: T.intl.string(T.t.sF28Oj) })
            }),
            (0, s.jsx)('div', {
                className: j.tagContainer,
                children: (0, p.P5)(n.primaryCategoryId).map((e) =>
                    (0, s.jsx)(
                        c.Anchor,
                        {
                            onClick: () => _(e),
                            className: r()(j.tag, { [j.usedTag]: k.has(e) }),
                            children: e
                        },
                        e
                    )
                )
            })
        ]
    });
};
