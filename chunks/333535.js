n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(852229),
    a = n(399606),
    s = n(481060),
    o = n(367907),
    c = n(592125),
    u = n(934415),
    d = n(63063),
    h = n(158222),
    m = n(410992),
    p = n(981631),
    f = n(388032),
    g = n(638017);
function C(e) {
    let { threadId: t } = e,
        n = (0, a.e7)([c.Z], () => c.Z.getChannel(t)),
        C = (0, a.e7)([c.Z], () => c.Z.getChannel(null == n ? void 0 : n.parent_id)),
        x = l.useCallback(() => {
            null != n && null != C && ((0, o.yw)(p.rMx.MEDIA_POST_SHARE_PROMPT_CLICKED, { media_post_id: n.id }), (0, r.J)((0, u.EO)(n, C)));
        }, [n, C]);
    return (0, i.jsxs)('div', {
        className: g.sharePromptContainer,
        children: [
            (0, i.jsx)(m.Z, {}),
            (0, i.jsxs)('div', {
                className: g.sharePromptContent,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: f.intl.string(f.t['5uAO7e'])
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: f.intl.format(f.t.WnfPV1, { helpArticleUrl: d.Z.getCreatorSupportArticleURL(p.BhN.MEDIA_CHANNEL) })
                    }),
                    (0, i.jsx)(s.Spacer, { size: 4 }),
                    (0, i.jsxs)(s.Button, {
                        className: g.sharePromptCta,
                        innerClassName: g.ctaContent,
                        onClick: x,
                        children: [
                            (0, i.jsx)(s.LinkIcon, {
                                color: 'currentColor',
                                size: 'xs'
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: f.intl.string(f.t.C5UQCw)
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(s.Clickable, {
                className: g.closeButton,
                onClick: () => {
                    (0, h.fn)(t);
                },
                'aria-label': f.intl.string(f.t['0+xZHx']),
                children: (0, i.jsx)(s.XSmallIcon, {
                    color: 'currentColor',
                    size: 'xs'
                })
            })
        ]
    });
}
