n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(313201),
    o = n(19780),
    c = n(979651),
    u = n(362446),
    d = n(571826),
    h = n(277642),
    p = n(441894),
    f = n(160038),
    _ = n(586646),
    m = n(760373),
    g = n(689938),
    C = n(739949);
function I(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: l } = e,
        r = (0, a.cj)([u.Z], () => ({
            connectionState: u.Z.getConnectionState(t),
            hostname: u.Z.getHostname(t),
            averagePing: u.Z.getAveragePing(t),
            lastPing: u.Z.getLastPing(t),
            pings: u.Z.getPings(),
            outboundLossRate: u.Z.getOutboundLossRate(t)
        }));
    return (0, i.jsx)(f.Z, {
        ...r,
        closePopout: l,
        connectionTypeText: n
    });
}
function E(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = (0, a.cj)([o.Z], () => ({
            connectionState: o.Z.getState(),
            hostname: o.Z.getHostname(),
            averagePing: o.Z.getAveragePing(),
            lastPing: o.Z.getLastPing(),
            outboundLossRate: o.Z.getOutboundLossRate(),
            pings: o.Z.getPings()
        }));
    return (0, i.jsx)(f.Z, {
        ...l,
        closePopout: t,
        connectionTypeText: n
    });
}
function N(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: a } = e,
        r = (0, p.J)({
            channelId: t,
            location: 'RTCConnectionDebugPanelContainer'
        })
            ? g.Z.Messages.E2EE_END_TO_END_ENCRYPTED
            : g.Z.Messages.SECURE_CONNECTION;
    return n
        ? (0, i.jsx)(I, {
              lobbyId: l,
              closePopout: a,
              connectionTypeText: r
          })
        : (0, i.jsx)(E, {
              closePopout: a,
              connectionTypeText: r
          });
}
function x(e) {
    let t = (0, a.e7)([c.Z], () => c.Z.hasVideo(e.channelId)),
        [n, o] = l.useState(m.tu.RTC_DEBUG_PANEL),
        u = (0, s.Dt)(),
        p = l.useMemo(() => {
            switch (n) {
                case m.tu.RTC_DEBUG_PANEL:
                    return (0, i.jsx)(N, { ...e });
                case m.tu.RTC_SECURE_FRAMES:
                    return (0, i.jsx)(_.Z, { channelId: e.channelId });
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
            f && o(m.tu.RTC_DEBUG_PANEL);
        }, [f]),
        (0, i.jsxs)('div', {
            className: C.container,
            children: [
                (0, i.jsx)(r.Heading, {
                    className: C.title,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    children: t ? g.Z.Messages.E2EE_VIDEO_DETAILS : g.Z.Messages.E2EE_VOICE_DETAILS
                }),
                (0, i.jsxs)(r.TabBar, {
                    className: C.tabs,
                    selectedItem: n,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: o,
                    children: [
                        (0, i.jsx)(r.TabBar.Item, {
                            id: m.tu.RTC_DEBUG_PANEL,
                            className: C.tabBarItem,
                            children: g.Z.Messages.E2EE_CONNECTION
                        }),
                        f
                            ? null
                            : (0, i.jsx)(r.TabBar.Item, {
                                  id: m.tu.RTC_SECURE_FRAMES,
                                  className: C.tabBarItem,
                                  children: g.Z.Messages.E2EE_PRIVACY
                              })
                    ]
                }),
                (0, i.jsx)(r.TabBar.Panel, {
                    id: n,
                    'aria-labelledby': u,
                    children: p
                })
            ]
        })
    );
}
function S(e) {
    return (0, p.J)({
        channelId: e.channelId,
        location: 'RTCConnectionPopout'
    })
        ? (0, i.jsx)(x, { ...e })
        : (0, i.jsx)('div', {
              className: C.debugPanelStandalone,
              children: (0, i.jsx)('section', {
                  className: C.debugPanelSection,
                  children: (0, i.jsx)(N, { ...e })
              })
          });
}
