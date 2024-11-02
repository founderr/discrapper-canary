n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(367907),
    c = n(626135),
    u = n(152376),
    d = n(981631),
    h = n(388032),
    m = n(237530);
function p(e) {
    let { channel: t, narrow: n } = e;
    return (
        l.useEffect(() => {
            c.default.track(d.rMx.CHANNEL_BANNER_VIEWED, {
                ...(0, o.hH)(t.getGuildId()),
                ...(0, o.v_)(t),
                banner_type: 'channel_opt_in'
            });
        }, [t]),
        (0, i.jsxs)('div', {
            className: a()(m.chatHeaderBar, { [m.narrow]: n }),
            children: [
                (0, i.jsx)(s.Text, {
                    className: m.chatHeaderBarText,
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: h.intl.string(h.t.iOWmmJ)
                }),
                (0, i.jsxs)(s.Button, {
                    size: s.Button.Sizes.TINY,
                    className: m.chatHeaderBarButton,
                    innerClassName: m.chatHeaderBarButtonInner,
                    color: s.Button.Colors.BRAND,
                    onClick: () => {
                        c.default.track(d.rMx.CHANNEL_BANNER_CTA_CLICKED, {
                            ...(0, o.hH)(t.getGuildId()),
                            ...(0, o.v_)(t),
                            banner_type: 'channel_opt_in',
                            cta_type: 'add channel'
                        }),
                            (0, u.XQ)(t.guild_id, t.id, !0, { section: d.jXE.CHANNEL });
                    },
                    children: [
                        (0, i.jsx)(s.PlusSmallIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 14,
                            height: 14
                        }),
                        h.intl.string(h.t.ZtIlQk)
                    ]
                })
            ]
        })
    );
}
