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
    C = n(830711);
t.Z = l.memo(function (e) {
    let { channel: t } = e,
        x = (0, c.h)(t.id),
        v = (0, d.o)(t.id),
        _ = (0, u.M)(t.id),
        I = (0, a.f9)(),
        E = (0, r.e7)([p.Z], () => p.Z.hasLayers()),
        b = l.useCallback(() => (v ? g.intl.string(g.t['16QyDg']) : null != _ ? g.intl.string(g.t.kCN9i4) : null), [v, _]),
        N = l.useMemo(() => (v || null != _) && !I && !E, [v, _, I, E]),
        [Z, S] = l.useState(b());
    l.useEffect(() => {
        null != _ &&
            null != x &&
            (s.AccessibilityAnnouncer.announce(g.intl.string(g.t.acsXuL)),
            setTimeout(() => {
                (0, o.T)(t.id, [_.id]);
            }, 5000),
            (0, h.KQ)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: _.id,
                warningType: _.type,
                isNudgeWarning: null != _,
                viewName: h.pb.SAFETY_TOOLS_NUDGE_TOOLTIP
            })),
            v &&
                (s.AccessibilityAnnouncer.announce(g.intl.string(g.t['1dxCqK'])),
                setTimeout(() => {
                    (0, o.Ot)(t.id);
                }, 5000));
    }, [t, _, x, v]),
        l.useEffect(() => {
            null != x &&
                (0, h.KQ)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: x.id,
                    warningType: x.type,
                    isNudgeWarning: null != _,
                    viewName: h.pb.SAFETY_TOOLS_BUTTON
                });
        }, []),
        l.useEffect(() => {
            let e = b();
            null != e && S(e);
        }, [v, _, b]);
    let T = l.useCallback(() => {
        if ((null != _ && (0, o.T)(t.id, [_.id]), null != x))
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
                    isNudgeWarning: null != _
                });
    }, [_, x, t]);
    return null == x
        ? null
        : (0, i.jsx)(s.Tooltip, {
              forceOpen: N,
              text: Z,
              color: s.TooltipColors.BRAND,
              position: 'bottom',
              tooltipClassName: C.tooltip,
              tooltipContentClassName: C.tooltipContent,
              children: () =>
                  (0, i.jsx)(m.ZP.Icon, {
                      icon: s.ShieldIcon,
                      onClick: T,
                      tooltip: g.intl.string(g.t.rpc2qq),
                      tooltipDisabled: null != _
                  })
          });
});
