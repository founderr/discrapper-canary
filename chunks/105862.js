t.d(n, {
    Z: function () {
        return v;
    }
});
var i = t(200651),
    l = t(192379),
    a = t(780384),
    o = t(481060),
    r = t(410030),
    s = t(782568),
    c = t(63063),
    d = t(827498),
    u = t(888617),
    m = t(981631),
    p = t(388032),
    h = t(6241),
    f = t(983008),
    C = t(478408);
function v() {
    let e = (0, r.ZP)(),
        n = (0, a.ap)(e) ? C : f,
        t = l.useCallback(() => {
            (0, s.Z)(c.Z.getArticleURL(m.BhN.LAUNCHING_APPS_WITH_SHAPES_BUTTON));
        }, []),
        { trackSectionImpressionRef: v } = (0, u.Z)({
            sectionName: d.L3.NEW_TO_APPS,
            numItems: 1,
            numVisibleItems: 1
        });
    return (0, i.jsxs)('div', {
        ref: (e) => (v.current = e),
        className: h.container,
        children: [
            (0, i.jsx)('img', {
                className: h.image,
                src: n,
                alt: '',
                'aria-hidden': !0
            }),
            (0, i.jsxs)('div', {
                className: h.body,
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: p.intl.string(p.t['kw8/ER'])
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-normal',
                        children: p.intl.string(p.t.GZoV1N)
                    })
                ]
            }),
            (0, i.jsx)(o.Button, {
                size: o.Button.Sizes.MEDIUM,
                'aria-label': p.intl.formatToPlainString(p.t.xx5Sur, {
                    sectionTitle: p.intl.string(p.t['kw8/ER']),
                    sectionBody: p.intl.string(p.t.GZoV1N)
                }),
                onClick: t,
                children: p.intl.string(p.t.Ye51oa)
            })
        ]
    });
}
