var i = n(200651),
    l = n(192379),
    r = n(704215),
    a = n(481060),
    s = n(475179),
    o = n(561472),
    c = n(287746),
    u = n(325708),
    d = n(541716),
    h = n(605236),
    m = n(665149),
    p = n(703558),
    f = n(585483),
    g = n(909820),
    C = n(981631),
    x = n(921944),
    v = n(388032),
    _ = n(972270);
t.Z = function (e) {
    let { channel: t, guild: n, maxWidth: I } = e;
    l.useEffect(() => {
        (0, h.EW)(r.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: x.L.AUTO });
    }, []);
    let E = l.useCallback(() => {
            s.Z.updateChatOpen(t.id, !1), f.S.safeDispatch(C.CkL.FOCUS_CHAT_BUTTON);
        }, [t.id]),
        b = (0, i.jsx)(m.ZP.Icon, {
            icon: a.XSmallIcon,
            tooltip: v.intl.string(v.t.cpT0Cg),
            onClick: E
        });
    return (0, i.jsxs)(u.Z, {
        sidebarType: u.y.CallChatSidebar,
        maxWidth: I,
        floatingLayer: g.ZP,
        children: [
            (0, i.jsx)(o.Z, {
                channel: t,
                draftType: p.d.ChannelMessage
            }),
            (0, i.jsxs)(m.ZP, {
                toolbar: b,
                'aria-label': v.intl.string(v.t.BIYAqa),
                children: [
                    (0, i.jsx)(m.ZP.Icon, {
                        icon: a.ChatIcon,
                        disabled: !0,
                        'aria-label': v.intl.string(v.t.Kx5kCA)
                    }),
                    (0, i.jsx)(m.ZP.Title, { children: t.name })
                ]
            }),
            (0, i.jsx)('div', {
                className: _.chat,
                children: (0, i.jsx)(
                    c.Z,
                    {
                        channel: t,
                        guild: n,
                        chatInputType: d.I.SIDEBAR
                    },
                    t.id
                )
            })
        ]
    });
};
