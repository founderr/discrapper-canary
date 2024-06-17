"use strict";
n.d(t, {
  Z: function() {
    return m
  }
});
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(911969),
  a = n(555573),
  l = n(10718),
  u = n(895924),
  _ = n(585483),
  d = n(499254),
  c = n(676161),
  E = n(660090),
  I = n(783097),
  T = n(870205),
  h = n(981631),
  S = n(689079),
  f = n(689938),
  N = n(831330);

function A(e) {
  let {
    channel: t,
    command: n,
    section: o
  } = e, l = r.useCallback(() => {
    d.y(), a.Po({
      channelId: t.id,
      command: n,
      section: o,
      location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW
    }), _.S.dispatch(h.CkL.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: t.id
    })
  }, [t, n, o]);
  return (0, i.jsxs)(s.Clickable, {
    className: N.command,
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

function m(e) {
  var t;
  let {
    channel: n,
    application: a
  } = e, {
    filterSection: u,
    commandsByActiveSection: _,
    sectionDescriptors: d
  } = l.wi(n, {
    commandType: o.yU.CHAT
  }, {
    placeholderCount: 0,
    limit: S.tn,
    includeFrecency: !0
  }), c = null !== (t = d.find(e => e.id === a.id)) && void 0 !== t ? t : null, {
    sortOrder: h,
    setSortOrder: m,
    commands: R,
    canSort: C
  } = (0, E.Z)({
    sectionId: a.id,
    commandsByActiveSection: _
  });
  return (r.useEffect(() => {
    u(a.id)
  }, [a.id, u]), 0 === R.length && (0, I.ye)({
    application: a
  })) ? null : (0, i.jsxs)("ul", {
    className: N.contentContainer,
    children: [(0, i.jsx)(O, {
      commands: R,
      channel: n
    }), (0, i.jsxs)("div", {
      className: N.commandListHeader,
      children: [(0, i.jsx)(s.Heading, {
        variant: "text-md/medium",
        children: f.Z.Messages.APP_LAUNCHER_ALL_COMMANDS_HEADER
      }), C && (0, i.jsx)(T.Z, {
        sortOrder: h,
        onSortOptionClick: m
      })]
    }), (0, i.jsx)("ul", {
      children: R.map(e => (0, i.jsx)(A, {
        channel: n,
        command: e,
        section: c
      }, e.id))
    })]
  })
}

function O(e) {
  let {
    channel: t,
    commands: n
  } = e;
  return 0 === (0, c.Z)({
    channel: t,
    commands: n,
    limit: 5
  }).length ? null : (0, i.jsx)("li", {})
}