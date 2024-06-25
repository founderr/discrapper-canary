n.d(t, {
  Z: function() {
    return _
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  r = n(481060),
  a = n(19780),
  o = n(362446),
  u = n(153124),
  c = n(441894),
  d = n(160038),
  h = n(586646),
  p = n(689938),
  g = n(228233);

function m(e) {
  let {
    lobbyId: t,
    connectionTypeText: n,
    closePopout: i
  } = e, r = (0, s.cj)([o.Z], () => ({
    connectionState: o.Z.getConnectionState(t),
    hostname: o.Z.getHostname(t),
    averagePing: o.Z.getAveragePing(t),
    lastPing: o.Z.getLastPing(t),
    pings: o.Z.getPings(),
    outboundLossRate: o.Z.getOutboundLossRate(t)
  }));
  return (0, l.jsx)(d.Z, {
    ...r,
    closePopout: i,
    connectionTypeText: n
  })
}

function C(e) {
  let {
    closePopout: t,
    connectionTypeText: n
  } = e, i = (0, s.cj)([a.Z], () => ({
    connectionState: a.Z.getState(),
    hostname: a.Z.getHostname(),
    averagePing: a.Z.getAveragePing(),
    lastPing: a.Z.getLastPing(),
    outboundLossRate: a.Z.getOutboundLossRate(),
    pings: a.Z.getPings()
  }));
  return (0, l.jsx)(d.Z, {
    ...i,
    closePopout: t,
    connectionTypeText: n
  })
}

function E(e) {
  let {
    channelId: t,
    isOverlay: n,
    lobbyId: i,
    closePopout: s
  } = e, r = (0, c.J)(t) ? p.Z.Messages.E2EE_END_TO_END_ENCRYPTED : p.Z.Messages.SECURE_CONNECTION;
  return n ? (0, l.jsx)(m, {
    lobbyId: i,
    closePopout: s,
    connectionTypeText: r
  }) : (0, l.jsx)(C, {
    closePopout: s,
    connectionTypeText: r
  })
}

function f(e) {
  let [t, n] = i.useState("rtc_debug_panel"), s = (0, u.Dt)(), a = i.useMemo(() => {
    switch (t) {
      case "rtc_debug_panel":
        return (0, l.jsx)(E, {
          ...e
        });
      case "rtc_secure_frames":
        return (0, l.jsx)(h.Z, {})
    }
  }, [e, t]);
  return (0, l.jsxs)("div", {
    className: g.container,
    children: [(0, l.jsx)(r.Heading, {
      className: g.title,
      variant: "heading-lg/bold",
      color: "header-primary",
      children: p.Z.Messages.E2EE_VOICE_DETAILS
    }), (0, l.jsxs)(r.TabBar, {
      className: g.tabs,
      selectedItem: t,
      type: "top",
      look: "brand",
      onItemSelect: n,
      children: [(0, l.jsx)(r.TabBar.Item, {
        id: "rtc_debug_panel",
        className: g.tabBarItem,
        children: p.Z.Messages.E2EE_CONNECTION
      }), (0, l.jsx)(r.TabBar.Item, {
        id: "rtc_secure_frames",
        className: g.tabBarItem,
        children: p.Z.Messages.E2EE_PRIVACY
      })]
    }), (0, l.jsx)(r.TabBar.Panel, {
      id: t,
      "aria-labelledby": s,
      children: a
    })]
  })
}

function _(e) {
  return (0, c.J)(e.channelId) ? (0, l.jsx)(f, {
    ...e
  }) : (0, l.jsx)("div", {
    className: g.debugPanelStandalone,
    children: (0, l.jsx)("section", {
      className: g.debugPanelSection,
      children: (0, l.jsx)(E, {
        ...e
      })
    })
  })
}