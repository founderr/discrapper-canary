n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(313201),
    s = n(19780),
    c = n(979651),
    u = n(362446),
    d = n(571826),
    h = n(277642),
    p = n(441894),
    f = n(160038),
    m = n(586646),
    g = n(760373),
    C = n(388032),
    _ = n(739949);
function x(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: l } = e,
        a = (0, r.cj)([u.Z], () => ({
            connectionState: u.Z.getConnectionState(t),
            hostname: u.Z.getHostname(t),
            averagePing: u.Z.getAveragePing(t),
            lastPing: u.Z.getLastPing(t),
            pings: u.Z.getPings(),
            outboundLossRate: u.Z.getOutboundLossRate(t)
        }));
    return (0, i.jsx)(f.Z, {
        ...a,
        closePopout: l,
        connectionTypeText: n
    });
}
function v(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = (0, r.cj)([s.Z], () => ({
            connectionState: s.Z.getState(),
            hostname: s.Z.getHostname(),
            averagePing: s.Z.getAveragePing(),
            lastPing: s.Z.getLastPing(),
            outboundLossRate: s.Z.getOutboundLossRate(),
            pings: s.Z.getPings()
        }));
    return (0, i.jsx)(f.Z, {
        ...l,
        closePopout: t,
        connectionTypeText: n
    });
}
function I(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: r } = e,
        a = (0, p.J)({
            channelId: t,
            location: 'RTCConnectionDebugPanelContainer'
        })
            ? C.intl.string(C.t['3BogKS'])
            : C.intl.string(C.t.ETIVvr);
    return n
        ? (0, i.jsx)(x, {
              lobbyId: l,
              closePopout: r,
              connectionTypeText: a
          })
        : (0, i.jsx)(v, {
              closePopout: r,
              connectionTypeText: a
          });
}
function b(e) {
    let t = (0, r.e7)([c.Z], () => c.Z.hasVideo(e.channelId)),
        [n, s] = l.useState(g.tu.RTC_DEBUG_PANEL),
        u = (0, o.Dt)(),
        p = l.useMemo(() => {
            switch (n) {
                case g.tu.RTC_DEBUG_PANEL:
                    return (0, i.jsx)(I, { ...e });
                case g.tu.RTC_SECURE_FRAMES:
                    return (0, i.jsx)(m.Z, { channelId: e.channelId });
            }
        }, [e, n]);
    l.useEffect(() => {
        (0, d.sN)({
            channelId: e.channelId,
            selectedTab: n
        });
    }, [e.channelId, n]);
    let f = (0, h.r)();
    return (
        l.useEffect(() => {
            f && s(g.tu.RTC_DEBUG_PANEL);
        }, [f]),
        (0, i.jsxs)('div', {
            className: _.container,
            children: [
                (0, i.jsx)(a.Heading, {
                    className: _.title,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    children: t ? C.intl.string(C.t.IlHdW1) : C.intl.string(C.t.WsOisr)
                }),
                (0, i.jsxs)(a.TabBar, {
                    className: _.tabs,
                    selectedItem: n,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: s,
                    children: [
                        (0, i.jsx)(a.TabBar.Item, {
                            id: g.tu.RTC_DEBUG_PANEL,
                            className: _.tabBarItem,
                            children: C.intl.string(C.t.MBY1Pj)
                        }),
                        f
                            ? null
                            : (0, i.jsx)(a.TabBar.Item, {
                                  id: g.tu.RTC_SECURE_FRAMES,
                                  className: _.tabBarItem,
                                  children: C.intl.string(C.t.zC6o3t)
                              })
                    ]
                }),
                (0, i.jsx)(a.TabBar.Panel, {
                    id: n,
                    'aria-labelledby': u,
                    children: p
                })
            ]
        })
    );
}
function N(e) {
    return (0, p.J)({
        channelId: e.channelId,
        location: 'RTCConnectionPopout'
    })
        ? (0, i.jsx)(b, { ...e })
        : (0, i.jsx)('div', {
              className: _.debugPanelStandalone,
              children: (0, i.jsx)('section', {
                  className: _.debugPanelSection,
                  children: (0, i.jsx)(I, { ...e })
              })
          });
}
