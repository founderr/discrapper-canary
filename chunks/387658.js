"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("481060"),
  a = n("911969"),
  o = n("555573"),
  l = n("10718"),
  u = n("895924"),
  d = n("585483"),
  _ = n("499254"),
  c = n("676161"),
  E = n("660090"),
  I = n("783097"),
  T = n("870205"),
  f = n("981631"),
  S = n("689079"),
  h = n("689938"),
  A = n("831330");

function m(e) {
  let {
    channel: t,
    command: n,
    section: a
  } = e, l = r.useCallback(() => {
    _.dismissAppLauncherPopup(), o.setActiveCommand({
      channelId: t.id,
      command: n,
      section: a,
      location: u.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW
    }), d.ComponentDispatch.dispatch(f.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: t.id
    })
  }, [t, n, a]);
  return (0, i.jsxs)(s.Clickable, {
    className: A.command,
    onClick: l,
    children: [(0, i.jsx)(s.Text, {
      variant: "text-sm/semibold",
      children: n.displayName
    }), (0, i.jsx)(s.Text, {
      variant: "text-xs/medium",
      lineClamp: 1,
      children: n.displayDescription
    })]
  })
}

function N(e) {
  var t;
  let {
    channel: n,
    application: o
  } = e, {
    filterSection: u,
    commandsByActiveSection: d,
    sectionDescriptors: _
  } = l.useDiscovery(n, {
    commandType: a.ApplicationCommandType.CHAT
  }, {
    placeholderCount: 0,
    limit: S.DISCOVERY_COMMANDS_QUERY_LIMIT,
    includeFrecency: !0
  }), c = null !== (t = _.find(e => e.id === o.id)) && void 0 !== t ? t : null, {
    sortOrder: f,
    setSortOrder: N,
    commands: O,
    canSort: C
  } = (0, E.default)({
    sectionId: o.id,
    commandsByActiveSection: d
  });
  return (r.useEffect(() => {
    u(o.id)
  }, [o.id, u]), 0 === O.length && (0, I.isEmbeddedApp)({
    application: o
  })) ? null : (0, i.jsxs)("ul", {
    className: A.contentContainer,
    children: [(0, i.jsx)(p, {
      commands: O,
      channel: n
    }), (0, i.jsxs)("div", {
      className: A.commandListHeader,
      children: [(0, i.jsx)(s.Heading, {
        variant: "text-md/medium",
        children: h.default.Messages.APP_LAUNCHER_ALL_COMMANDS_HEADER
      }), C && (0, i.jsx)(T.default, {
        sortOrder: f,
        onSortOptionClick: N
      })]
    }), (0, i.jsx)("ul", {
      children: O.map(e => (0, i.jsx)(m, {
        channel: n,
        command: e,
        section: c
      }, e.id))
    })]
  })
}

function p(e) {
  let {
    channel: t,
    commands: n
  } = e;
  return 0 === (0, c.default)({
    channel: t,
    commands: n,
    limit: 5
  }).length ? null : (0, i.jsx)("li", {})
}