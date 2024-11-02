i(47120);
var s = i(200651),
    a = i(192379),
    n = i(120356),
    r = i.n(n),
    l = i(418435),
    o = i.n(l),
    c = i(442837),
    d = i(481060),
    m = i(558324),
    u = i(367907),
    x = i(999382),
    g = i(626135),
    h = i(938502),
    p = i(296386),
    v = i(219369),
    f = i(981631),
    N = i(203377),
    b = i(388032),
    T = i(70047);
let j = /^[A-Za-z0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]+$/u;
t.Z = (e) => {
    var t;
    let { guild: i, guildMetadata: n, headerId: l } = e,
        [C, I] = a.useState(!1),
        S = (0, c.e7)([x.Z], () => 'keywords' in x.Z.getErrors()),
        E = (e) => {
            if (j.test(e)) I(!1);
            else {
                I(!0);
                return;
            }
            if ((null == i ? void 0 : i.id) == null) return;
            let { keywords: t } = n;
            !(t.length >= N.G7) && p.zH(i.id, o()([...t, e.toLowerCase()]));
        },
        _ = (e) => {
            E(e),
                g.default.track(f.rMx.DISCOVERY_SETUP_POPULAR_TAG_CLICKED, {
                    tag: e,
                    primary_category_id: n.primaryCategoryId,
                    ...(0, u.hH)(i.id)
                });
        },
        y = C
            ? b.intl.string(b.t['t/mtnZ'])
            : S
              ? b.intl.format(b.t.loup7u, {
                    onLearnMoreClick: () => {
                        (0, v.lW)({
                            articleId: f.BhN.SERVER_DISCOVERY_GUIDELINES,
                            guildId: i.id,
                            modalStep: v.tK.TAGS
                        });
                    }
                })
              : null,
        k = new Set(n.keywords);
    return (0, s.jsxs)('div', {
        className: T.container,
        children: [
            (0, s.jsxs)('div', {
                className: T.content,
                children: [
                    (0, s.jsx)('div', { className: r()(T.stepImage, T.tagImage) }),
                    (0, s.jsx)(d.Heading, {
                        variant: 'heading-xl/semibold',
                        className: T.header,
                        id: l,
                        children: b.intl.string(b.t['0PJZXl'])
                    }),
                    (0, s.jsx)(d.Text, {
                        color: 'none',
                        variant: 'text-md/normal',
                        className: T.headerCaption,
                        children: b.intl.string(b.t.MMEJFB)
                    })
                ]
            }),
            (0, s.jsxs)(d.FormSection, {
                className: T.form,
                children: [
                    (0, s.jsx)(d.FormTitle, {
                        required: !0,
                        children: b.intl.string(b.t['0PJZXl'])
                    }),
                    (0, s.jsx)(d.FormText, {
                        type: d.FormTextTypes.DESCRIPTION,
                        className: T.description,
                        children: b.intl.string(b.t.ztiTDA)
                    }),
                    (0, s.jsx)(m.Z, {
                        className: r()(T.tags, { [T.error]: null != y }),
                        tags: n.keywords,
                        onRemoveTag: (e) => {
                            if ((null == i ? void 0 : i.id) == null) return;
                            let t = [...n.keywords];
                            t.splice(e, 1), p.zH(i.id, t);
                        },
                        onAddTag: E,
                        maxTags: N.G7,
                        maxTaxLength: N._0,
                        placeholder: (null == n ? void 0 : null === (t = n.keywords) || void 0 === t ? void 0 : t.length) === 0 ? b.intl.string(b.t.EL4Lho) : ''
                    }),
                    (0, s.jsx)(d.Text, {
                        className: T.error,
                        color: 'text-danger',
                        variant: 'text-sm/normal',
                        children: y
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: T.form,
                children: (0, s.jsx)(d.FormTitle, { children: b.intl.string(b.t.sF28Oj) })
            }),
            (0, s.jsx)('div', {
                className: T.tagContainer,
                children: (0, h.P5)(n.primaryCategoryId).map((e) =>
                    (0, s.jsx)(
                        d.Anchor,
                        {
                            onClick: () => _(e),
                            className: r()(T.tag, { [T.usedTag]: k.has(e) }),
                            children: e
                        },
                        e
                    )
                )
            })
        ]
    });
};
