t.d(s, {
    Z: function () {
        return _;
    }
}),
    t(47120);
var n = t(200651),
    a = t(192379),
    i = t(692547),
    r = t(531057),
    o = t(865824),
    l = t(481060),
    c = t(689938),
    d = t(287744);
function _(e) {
    let { children: s, lineClamp: t = 2, ..._ } = e,
        [u, E] = a.useState(!1),
        [T, S] = a.useState(null),
        I =
            null != T &&
            (0, n.jsx)('button', {
                className: d.button,
                onClick: () => E((e) => !e),
                children: (0, n.jsxs)(l.Text, {
                    className: d.seeMore,
                    variant: 'text-sm/medium',
                    color: 'text-brand',
                    children: [
                        u ? c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_PAGE_DESCRIPTION_SEE_LESS : c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_PAGE_DESCRIPTION_SEE_MORE,
                        u
                            ? (0, n.jsx)(o.u, {
                                  color: i.Z.colors.TEXT_BRAND,
                                  size: 'xs'
                              })
                            : (0, n.jsx)(r.C, {
                                  color: i.Z.colors.TEXT_BRAND,
                                  size: 'xs'
                              })
                    ]
                })
            }),
        [N, m] = a.useState(null),
        C = a.useCallback(() => {
            if (null == N) return;
            let { scrollHeight: e, clientHeight: s } = N;
            e > s &&
                S({
                    truncatedHeight: s,
                    expandedHeight: e
                });
        }, [N]);
    a.useEffect(() => {
        requestAnimationFrame(C);
    }, [C, s, t]);
    let A = 'auto';
    return (
        null != T && (A = u ? ''.concat(T.expandedHeight, 'px') : ''.concat(T.truncatedHeight, 'px')),
        (0, n.jsxs)('div', {
            children: [
                (0, n.jsx)(l.Text, {
                    ..._,
                    className: d.content,
                    lineClamp: u ? void 0 : t,
                    ref: m,
                    style: { height: A },
                    children: s
                }),
                I
            ]
        })
    );
}
