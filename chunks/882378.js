n(47120);
var i = n(200651),
    s = n(192379),
    a = n(442837),
    l = n(952265),
    r = n(481060),
    o = n(378298),
    c = n(444957),
    u = n(276618),
    d = n(367408),
    h = n(473092),
    p = n(819640),
    m = n(665149),
    _ = n(134612),
    f = n(689938),
    E = n(830711);
t.Z = s.memo(function (e) {
    let { channel: t } = e,
        g = (0, c.h)(t.id),
        C = (0, u.o)(t.id),
        I = (0, d.M)(t.id),
        T = (0, l.f9)(),
        x = (0, a.e7)([p.Z], () => p.Z.hasLayers()),
        v = s.useCallback(() => (C ? f.Z.Messages.INAPPROPRIATE_CONVERSATION_INITIAL_TOOLTIP : null != I ? f.Z.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TOOLTIP : null), [C, I]),
        S = s.useMemo(() => (C || null != I) && !T && !x, [C, I, T, x]),
        [N, A] = s.useState(v());
    s.useEffect(() => {
        null != I &&
            null != g &&
            (r.AccessibilityAnnouncer.announce(f.Z.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TOOLTIP_ANNOUNCEMENT),
            setTimeout(() => {
                (0, o.T)(t.id, [I.id]);
            }, 5000),
            (0, h.KQ)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: I.id,
                warningType: I.type,
                isNudgeWarning: null != I,
                viewName: h.pb.SAFETY_TOOLS_NUDGE_TOOLTIP
            })),
            C &&
                (r.AccessibilityAnnouncer.announce(f.Z.Messages.INAPPROPRIATE_CONVERSATION_INITIAL_TOOLTIP_ANNOUNCEMENT),
                setTimeout(() => {
                    (0, o.Ot)(t.id);
                }, 5000));
    }, [t, I, g, C]),
        s.useEffect(() => {
            null != g &&
                (0, h.KQ)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: g.id,
                    warningType: g.type,
                    isNudgeWarning: null != I,
                    viewName: h.pb.SAFETY_TOOLS_BUTTON
                });
        }, []),
        s.useEffect(() => {
            let e = v();
            null != e && A(e);
        }, [C, I, v]);
    let Z = s.useCallback(() => {
        if ((null != I && (0, o.T)(t.id, [I.id]), null != g))
            (0, r.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('37229'), n.e('89650')]).then(n.bind(n, 611446));
                    return (n) => {
                        let { onClose: s, transitionState: a } = n;
                        return (0, i.jsx)(e, {
                            otherUserId: t.getRecipientId(),
                            channelId: t.id,
                            warningId: g.id,
                            warningType: g.type,
                            onClose: s,
                            transitionState: a
                        });
                    };
                },
                { modalKey: _.X_ }
            ),
                (0, h.qc)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: g.id,
                    warningType: g.type,
                    cta: h.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != I
                });
    }, [I, g, t]);
    return null == g
        ? null
        : (0, i.jsx)(r.Tooltip, {
              forceOpen: S,
              text: N,
              color: r.TooltipColors.BRAND,
              position: 'bottom',
              tooltipClassName: E.tooltip,
              tooltipContentClassName: E.tooltipContent,
              children: () =>
                  (0, i.jsx)(m.ZP.Icon, {
                      icon: r.ShieldIcon,
                      onClick: Z,
                      tooltip: f.Z.Messages.SAFETY_TOOLS_BUTTON_LABEL,
                      tooltipDisabled: null != I
                  })
          });
});
