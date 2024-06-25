n.d(t, {
  Z: function() {
    return I
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  r = n(442837),
  a = n(481060),
  s = n(19780),
  o = n(362446),
  c = n(153124),
  u = n(441894),
  d = n(160038),
  h = n(586646),
  p = n(689938),
  f = n(228233);

function _(e) {
  let {
    lobbyId: t,
    connectionTypeText: n,
    closePopout: l
  } = e, a = (0, r.cj)([o.Z], () => ({
    connectionState: o.Z.getConnectionState(t),
    hostname: o.Z.getHostname(t),
    averagePing: o.Z.getAveragePing(t),
    lastPing: o.Z.getLastPing(t),
    pings: o.Z.getPings(),
    outboundLossRate: o.Z.getOutboundLossRate(t)
  }));
  return (0, i.jsx)(d.Z, {
    ...a,
    closePopout: l,
    connectionTypeText: n
  })
}

function g(e) {
  let {
    closePopout: t,
    connectionTypeText: n
  } = e, l = (0, r.cj)([s.Z], () => ({
    connectionState: s.Z.getState(),
    hostname: s.Z.getHostname(),
    averagePing: s.Z.getAveragePing(),
    lastPing: s.Z.getLastPing(),
    outboundLossRate: s.Z.getOutboundLossRate(),
    pings: s.Z.getPings()
  }));
  return (0, i.jsx)(d.Z, {
    ...l,
    closePopout: t,
    connectionTypeText: n
  })
}

function m(e) {
  let {
    channelId: t,
    isOverlay: n,
    lobbyId: l,
    closePopout: r
  } = e, a = (0, u.J)(t) ? p.Z.Messages.E2EE_END_TO_END_ENCRYPTED : p.Z.Messages.SECURE_CONNECTION;
  return n ? (0, i.jsx)(_, {
    lobbyId: l,
    closePopout: r,
    connectionTypeText: a
  }) : (0, i.jsx)(g, {
    closePopout: r,
    connectionTypeText: a
  })
}

function C(e) {
  let [t, n] = l.useState("rtc_debug_panel"), r = (0, c.Dt)(), s = l.useMemo(() => {
    switch (t) {
      case "rtc_debug_panel":
        return (0, i.jsx)(m, {
          ...e
        });
      case "rtc_secure_frames":
        return (0, i.jsx)(h.Z, {})
    }
  }, [e, t]);
  return (0, i.jsxs)("div", {
    className: f.container,
    children: [(0, i.jsx)(a.Heading, {
      className: f.title,
      variant: "heading-lg/bold",
      color: "header-primary",
      children: p.Z.Messages.E2EE_VOICE_DETAILS
    }), (0, i.jsxs)(a.TabBar, {
      className: f.tabs,
      selectedItem: t,
      type: "top",
      look: "brand",
      onItemSelect: n,
      children: [(0, i.jsx)(a.TabBar.Item, {
        id: "rtc_debug_panel",
        className: f.tabBarItem,
        children: p.Z.Messages.E2EE_CONNECTION
      }), (0, i.jsx)(a.TabBar.Item, {
        id: "rtc_secure_frames",
        className: f.tabBarItem,
        children: p.Z.Messages.E2EE_PRIVACY
      })]
    }), (0, i.jsx)(a.TabBar.Panel, {
      id: t,
      "aria-labelledby": r,
      children: s
    })]
  })
}

function I(e) {
  return (0, u.J)(e.channelId) ? (0, i.jsx)(C, {
    ...e
  }) : (0, i.jsx)("div", {
    className: f.debugPanelStandalone,
    children: (0, i.jsx)("section", {
      className: f.debugPanelSection,
      children: (0, i.jsx)(m, {
        ...e
      })
    })
  })
}