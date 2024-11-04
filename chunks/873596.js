e.d(n, {
    Z: function () {
        return x;
    }
}),
    e(47120);
var i = e(200651),
    s = e(192379),
    r = e(442837),
    o = e(481060),
    l = e(313201),
    a = e(19780),
    c = e(979651),
    u = e(362446),
    E = e(571826),
    d = e(277642),
    N = e(441894),
    C = e(160038),
    T = e(586646),
    g = e(760373),
    h = e(388032),
    I = e(739949);
function _(t) {
    let { lobbyId: n, connectionTypeText: e, closePopout: s } = t,
        o = (0, r.cj)([u.Z], () => ({
            connectionState: u.Z.getConnectionState(n),
            hostname: u.Z.getHostname(n),
            averagePing: u.Z.getAveragePing(n),
            lastPing: u.Z.getLastPing(n),
            pings: u.Z.getPings(),
            outboundLossRate: u.Z.getOutboundLossRate(n)
        }));
    return (0, i.jsx)(C.Z, {
        ...o,
        closePopout: s,
        connectionTypeText: e
    });
}
function R(t) {
    let { closePopout: n, connectionTypeText: e } = t,
        s = (0, r.cj)([a.Z], () => ({
            connectionState: a.Z.getState(),
            hostname: a.Z.getHostname(),
            averagePing: a.Z.getAveragePing(),
            lastPing: a.Z.getLastPing(),
            outboundLossRate: a.Z.getOutboundLossRate(),
            pings: a.Z.getPings()
        }));
    return (0, i.jsx)(C.Z, {
        ...s,
        closePopout: n,
        connectionTypeText: e
    });
}
function p(t) {
    let { channelId: n, isOverlay: e, lobbyId: s, closePopout: r } = t,
        o = (0, N.J)({
            channelId: n,
            location: 'RTCConnectionDebugPanelContainer'
        })
            ? h.intl.string(h.t['3BogKS'])
            : h.intl.string(h.t.ETIVvr);
    return e
        ? (0, i.jsx)(_, {
              lobbyId: s,
              closePopout: r,
              connectionTypeText: o
          })
        : (0, i.jsx)(R, {
              closePopout: r,
              connectionTypeText: o
          });
}
function O(t) {
    let n = (0, r.e7)([c.Z], () => c.Z.hasVideo(t.channelId)),
        [e, a] = s.useState(g.tu.RTC_DEBUG_PANEL),
        u = (0, l.Dt)(),
        N = s.useMemo(() => {
            switch (e) {
                case g.tu.RTC_DEBUG_PANEL:
                    return (0, i.jsx)(p, { ...t });
                case g.tu.RTC_SECURE_FRAMES:
                    return (0, i.jsx)(T.Z, { channelId: t.channelId });
            }
        }, [t, e]);
    s.useEffect(() => {
        (0, E.sN)({
            channelId: t.channelId,
            selectedTab: e
        });
    }, [t.channelId, e]);
    let C = (0, d.r)();
    return (
        s.useEffect(() => {
            C && a(g.tu.RTC_DEBUG_PANEL);
        }, [C]),
        (0, i.jsxs)('div', {
            className: I.container,
            children: [
                (0, i.jsx)(o.Heading, {
                    className: I.title,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    children: n ? h.intl.string(h.t.IlHdW1) : h.intl.string(h.t.WsOisr)
                }),
                (0, i.jsxs)(o.TabBar, {
                    className: I.tabs,
                    selectedItem: e,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: a,
                    children: [
                        (0, i.jsx)(o.TabBar.Item, {
                            id: g.tu.RTC_DEBUG_PANEL,
                            className: I.tabBarItem,
                            children: h.intl.string(h.t.MBY1Pj)
                        }),
                        C
                            ? null
                            : (0, i.jsx)(o.TabBar.Item, {
                                  id: g.tu.RTC_SECURE_FRAMES,
                                  className: I.tabBarItem,
                                  children: h.intl.string(h.t.zC6o3t)
                              })
                    ]
                }),
                (0, i.jsx)(o.TabBar.Panel, {
                    id: e,
                    'aria-labelledby': u,
                    children: N
                })
            ]
        })
    );
}
function x(t) {
    return (0, N.J)({
        channelId: t.channelId,
        location: 'RTCConnectionPopout'
    })
        ? (0, i.jsx)(O, { ...t })
        : (0, i.jsx)('div', {
              className: I.debugPanelStandalone,
              children: (0, i.jsx)('section', {
                  className: I.debugPanelSection,
                  children: (0, i.jsx)(p, { ...t })
              })
          });
}
