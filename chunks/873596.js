"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("436592"),
  o = n("608695"),
  u = n("19780"),
  d = n("362446"),
  c = n("153124"),
  f = n("160038"),
  h = n("689938"),
  m = n("713172");

function C(e) {
  let {
    lobbyId: t,
    connectionTypeText: n,
    closePopout: a
  } = e, i = (0, s.useStateFromStoresObject)([d.default], () => ({
    connectionState: d.default.getConnectionState(t),
    hostname: d.default.getHostname(t),
    averagePing: d.default.getAveragePing(t),
    lastPing: d.default.getLastPing(t),
    pings: d.default.getPings(),
    outboundLossRate: d.default.getOutboundLossRate(t)
  }));
  return (0, l.jsx)(f.default, {
    ...i,
    closePopout: a,
    connectionTypeText: n
  })
}

function p(e) {
  let {
    closePopout: t,
    connectionTypeText: n
  } = e, a = (0, s.useStateFromStoresObject)([u.default], () => ({
    connectionState: u.default.getState(),
    hostname: u.default.getHostname(),
    averagePing: u.default.getAveragePing(),
    lastPing: u.default.getLastPing(),
    outboundLossRate: u.default.getOutboundLossRate(),
    pings: u.default.getPings()
  }));
  return (0, l.jsx)(f.default, {
    ...a,
    closePopout: t,
    connectionTypeText: n
  })
}

function g(e) {
  let {
    channelId: t,
    isOverlay: n,
    lobbyId: a,
    closePopout: s
  } = e, i = (0, r.useIsSecureFramesUIEnabled)(t) ? h.default.Messages.E2EE_RTC_PANEL_CONNECTION : h.default.Messages.SECURE_CONNECTION;
  return n ? (0, l.jsx)(C, {
    lobbyId: a,
    closePopout: s,
    connectionTypeText: i
  }) : (0, l.jsx)(p, {
    closePopout: s,
    connectionTypeText: i
  })
}

function E(e) {
  let [t, n] = a.useState("rtc_debug_panel"), s = (0, c.useUID)(), r = a.useMemo(() => {
    switch (t) {
      case "rtc_debug_panel":
        return (0, l.jsx)(g, {
          ...e
        });
      case "rtc_secure_frames":
        return (0, l.jsx)(o.SecureFramesOverview, {
          code: "12345 67890 12345 67890 12345 67890 12345 67890 12345 67890 12345 67890"
        })
    }
  }, [e, t]);
  return (0, l.jsxs)("div", {
    className: m.container,
    children: [(0, l.jsx)(i.Heading, {
      className: m.title,
      variant: "heading-lg/bold",
      color: "header-primary",
      children: h.default.Messages.E2EE_VOICE_DETAILS
    }), (0, l.jsxs)(i.TabBar, {
      className: m.tabs,
      selectedItem: t,
      type: "top",
      look: "brand",
      onItemSelect: n,
      children: [(0, l.jsx)(i.TabBar.Item, {
        id: "rtc_debug_panel",
        className: m.tabBarItem,
        children: h.default.Messages.E2EE_CONNECTION
      }), (0, l.jsx)(i.TabBar.Item, {
        id: "rtc_secure_frames",
        className: m.tabBarItem,
        children: h.default.Messages.E2EE_PRIVACY
      })]
    }), (0, l.jsx)(i.TabBar.Panel, {
      id: t,
      "aria-labelledby": s,
      children: r
    })]
  })
}

function S(e) {
  return (0, r.useIsSecureFramesUIEnabled)(e.channelId) ? (0, l.jsx)(E, {
    ...e
  }) : (0, l.jsx)("div", {
    className: m.debugPanelStandalone,
    children: (0, l.jsx)("section", {
      className: m.debugPanelSection,
      children: (0, l.jsx)(g, {
        ...e
      })
    })
  })
}