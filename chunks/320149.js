n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(200651),
    r = n(192379),
    a = n(442837),
    l = n(481060),
    s = n(541716),
    o = n(665149),
    c = n(910611),
    d = n(355298),
    u = n(333984),
    h = n(26373),
    m = n(486622),
    p = n(718538),
    g = n(359110),
    f = n(6025),
    _ = n(433355),
    E = n(933557),
    I = n(287746),
    C = n(388032),
    v = n(868912),
    S = n(542348);
function N(e) {
    let { channel: t, baseChannelId: n } = e,
        N = (0, E.ZP)(t),
        T = (0, h.K)(),
        x = (0, h.V)(),
        b = (0, a.e7)([d.Z], () => d.Z.isMessageRequest(t.id)),
        A = (0, a.e7)([u.Z], () => u.Z.isSpam(t.id)),
        Z = (0, p.V)(t.id, t.getRecipientId()),
        y = r.useCallback(() => {
            f.Z.closeChannelSidebar(_.uZ), b && T && (0, g.Kh)(t.id), A && x && (0, g.Kh)(t.id);
        }, [t.id, A, x, b, T]),
        L = r.useCallback(() => {
            (0, l.showToast)((0, l.createToast)(C.intl.string(C.t.pIQ3h4), l.ToastType.FAILURE));
        }, []),
        { markAsNotSpam: R } = (0, m.m)({
            onAcceptSuccess: y,
            onError: L
        });
    if (null == t || !t.isDM()) return null;
    let P = [
        (0, i.jsx)(
            o.ZP.Icon,
            {
                icon: l.XSmallIcon,
                tooltip: C.intl.string(C.t.cpT0Cg),
                onClick: () => f.Z.closeChannelSidebar(n)
            },
            'close'
        )
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.ZP, {
                toolbar: P,
                'aria-label': C.intl.string(C.t.BIYAqa),
                children: (0, c.ud)({
                    channel: t,
                    channelName: N,
                    inSidebar: !0
                })
            }),
            A &&
                (0, i.jsxs)('div', {
                    className: S.hamBanner,
                    children: [
                        (0, i.jsx)(l.Text, {
                            className: S.__invalid_hamBannerText,
                            variant: 'text-sm/normal',
                            children: C.intl.string(C.t.XVOKgo)
                        }),
                        (0, i.jsx)(l.Button, {
                            className: S.hamBannerButton,
                            size: l.ButtonSizes.SMALL,
                            onClick: () => R(t, Z),
                            children: C.intl.string(C.t.koqL3d)
                        })
                    ]
                }),
            (0, i.jsx)('div', {
                className: v.chat,
                children: (0, i.jsx)(
                    I.Z,
                    {
                        channel: t,
                        guild: null,
                        chatInputType: s.I.SIDEBAR
                    },
                    t.id
                )
            })
        ]
    });
}
