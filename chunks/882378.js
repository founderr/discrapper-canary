n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(952265),
    s = n(481060),
    o = n(378298),
    c = n(444957),
    d = n(276618),
    u = n(367408),
    h = n(473092),
    p = n(819640),
    m = n(665149),
    f = n(134612),
    g = n(388032),
    C = n(629435);
t.Z = l.memo(function (e) {
    let { channel: t } = e,
        x = (0, c.h)(t.id),
        _ = (0, d.o)(t.id),
        v = (0, u.M)(t.id),
        I = (0, a.f9)(),
        E = (0, r.e7)([p.Z], () => p.Z.hasLayers()),
        b = l.useCallback(() => (_ ? g.intl.string(g.t['16QyDg']) : null != v ? g.intl.string(g.t.kCN9i4) : null), [_, v]),
        N = l.useMemo(() => (_ || null != v) && !I && !E, [_, v, I, E]),
        [S, Z] = l.useState(b());
    l.useEffect(() => {
        null != v &&
            null != x &&
            (s.AccessibilityAnnouncer.announce(g.intl.string(g.t.acsXuL)),
            setTimeout(() => {
                (0, o.T)(t.id, [v.id]);
            }, 5000),
            (0, h.KQ)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: v.id,
                warningType: v.type,
                isNudgeWarning: null != v,
                viewName: h.pb.SAFETY_TOOLS_NUDGE_TOOLTIP
            })),
            _ &&
                (s.AccessibilityAnnouncer.announce(g.intl.string(g.t['1dxCqK'])),
                setTimeout(() => {
                    (0, o.Ot)(t.id);
                }, 5000));
    }, [t, v, x, _]),
        l.useEffect(() => {
            null != x &&
                (0, h.KQ)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: x.id,
                    warningType: x.type,
                    isNudgeWarning: null != v,
                    viewName: h.pb.SAFETY_TOOLS_BUTTON
                });
        }, []),
        l.useEffect(() => {
            let e = b();
            null != e && Z(e);
        }, [_, v, b]);
    let T = l.useCallback(() => {
        if ((null != v && (0, o.T)(t.id, [v.id]), null != x))
            (0, s.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('37229'), n.e('89650')]).then(n.bind(n, 611446));
                    return (n) => {
                        let { onClose: l, transitionState: r } = n;
                        return (0, i.jsx)(e, {
                            otherUserId: t.getRecipientId(),
                            channelId: t.id,
                            warningId: x.id,
                            warningType: x.type,
                            onClose: l,
                            transitionState: r
                        });
                    };
                },
                { modalKey: f.X_ }
            ),
                (0, h.qc)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: x.id,
                    warningType: x.type,
                    cta: h.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != v
                });
    }, [v, x, t]);
    return null == x
        ? null
        : (0, i.jsx)(s.Tooltip, {
              forceOpen: N,
              text: S,
              color: s.TooltipColors.BRAND,
              position: 'bottom',
              tooltipClassName: C.tooltip,
              tooltipContentClassName: C.tooltipContent,
              children: () =>
                  (0, i.jsx)(m.ZP.Icon, {
                      icon: s.ShieldIcon,
                      onClick: T,
                      tooltip: g.intl.string(g.t.rpc2qq),
                      tooltipDisabled: null != v
                  })
          });
});
