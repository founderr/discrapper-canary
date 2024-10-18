n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(481060),
    l = n(541716),
    o = n(665149),
    c = n(910611),
    d = n(355298),
    u = n(333984),
    _ = n(26373),
    E = n(486622),
    h = n(718538),
    m = n(359110),
    I = n(6025),
    p = n(433355),
    g = n(933557),
    T = n(287746),
    f = n(689938),
    S = n(868912),
    C = n(542348);
function N(e) {
    let { channel: t, baseChannelId: n } = e,
        N = (0, g.ZP)(t),
        A = (0, _.K)(),
        v = (0, _.V)(),
        Z = (0, s.e7)([d.Z], () => d.Z.isMessageRequest(t.id)),
        L = (0, s.e7)([u.Z], () => u.Z.isSpam(t.id)),
        R = (0, h.V)(t.id, t.getRecipientId()),
        O = a.useCallback(() => {
            I.Z.closeChannelSidebar(p.uZ), Z && A && (0, m.Kh)(t.id), L && v && (0, m.Kh)(t.id);
        }, [t.id, L, v, Z, A]),
        x = a.useCallback(() => {
            (0, r.showToast)((0, r.createToast)(f.Z.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, r.ToastType.FAILURE));
        }, []),
        { markAsNotSpam: b } = (0, E.m)({
            onAcceptSuccess: O,
            onError: x
        });
    if (null == t || !t.isDM()) return null;
    let M = [
        (0, i.jsx)(
            o.ZP.Icon,
            {
                icon: r.XSmallIcon,
                tooltip: f.Z.Messages.CLOSE,
                onClick: () => I.Z.closeChannelSidebar(n)
            },
            'close'
        )
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.ZP, {
                toolbar: M,
                'aria-label': f.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
                children: (0, c.ud)({
                    channel: t,
                    channelName: N,
                    inSidebar: !0
                })
            }),
            L &&
                (0, i.jsxs)('div', {
                    className: C.hamBanner,
                    children: [
                        (0, i.jsx)(r.Text, {
                            className: C.__invalid_hamBannerText,
                            variant: 'text-sm/normal',
                            children: f.Z.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_HEADER
                        }),
                        (0, i.jsx)(r.Button, {
                            className: C.hamBannerButton,
                            size: r.ButtonSizes.SMALL,
                            onClick: () => b(t, R),
                            children: f.Z.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_BUTTON
                        })
                    ]
                }),
            (0, i.jsx)('div', {
                className: S.chat,
                children: (0, i.jsx)(
                    T.Z,
                    {
                        channel: t,
                        guild: null,
                        chatInputType: l.I.SIDEBAR
                    },
                    t.id
                )
            })
        ]
    });
}
