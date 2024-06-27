t.d(n, {
  Z: function() {
    return S
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  a = t(140835),
  r = t(246521),
  s = t(481060),
  o = t(911969),
  c = t(555573),
  u = t(10718),
  d = t(895924),
  m = t(585483),
  p = t(499254),
  h = t(541099),
  N = t(827498),
  _ = t(496158),
  E = t(676161),
  C = t(660090),
  A = t(783097),
  f = t(870205),
  x = t(981631),
  v = t(689079),
  I = t(689938),
  g = t(271047);

function P(e) {
  var n, t;
  let {
    channel: r,
    command: o,
    section: u,
    sectionName: _
  } = e, E = l.useCallback(() => {
    let e = h.Z.entrypoint();
    p.y(N.ti.COMMAND), c.Po({
      channelId: r.id,
      command: o,
      section: u,
      location: d.Vh.APP_LAUNCHER_APPLICATION_VIEW,
      sectionName: _,
      source: e
    }), m.S.dispatch(x.CkL.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: r.id
    })
  }, [r.id, o, u, _]), C = (null !== (t = null === (n = o.options) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) > 0;
  return (0, i.jsxs)(s.Clickable, {
    className: g.command,
    onClick: E,
    children: [(0, i.jsxs)("div", {
      className: g.commandTextContainer,
      children: [(0, i.jsx)(s.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: o.displayName
      }), (0, i.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        lineClamp: 1,
        children: o.displayDescription
      })]
    }), C ? (0, i.jsx)(a.F, {}) : (0, i.jsx)(T, {
      channel: r,
      command: o,
      sectionName: _
    })]
  })
}

function T(e) {
  let {
    channel: n,
    command: t,
    sectionName: a
  } = e, o = (0, _.D)(n), [c, u] = l.useState(!1), d = l.useCallback(async e => {
    e.stopPropagation();
    try {
      await (0, A.Y$)({
        command: t,
        optionValues: {},
        context: o,
        sectionName: a
      }), p.y(N.ti.COMMAND)
    } finally {
      u(!1)
    }
  }, [t, o, a]);
  return (0, i.jsxs)(s.Button, {
    type: "submit",
    onClick: d,
    disabled: c,
    size: s.ButtonSizes.ICON,
    color: s.Button.Colors.PRIMARY,
    className: g.commandSentCTAButton,
    innerClassName: g.commandSentCTAButtonInner,
    children: [(0, i.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "redesign-button-primary-text",
      children: I.Z.Messages.SEND
    }), (0, i.jsx)(r.U, {
      size: "xs",
      color: s.tokens.colors.REDESIGN_BUTTON_PRIMARY_TEXT
    })]
  })
}

function M(e) {
  let {
    channel: n,
    commands: t,
    section: l,
    headerName: a,
    sectionName: r,
    children: o
  } = e;
  return 0 === t.length ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: g.commandListHeader,
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-sm/semibold",
        children: a
      }), o]
    }), (0, i.jsx)("ul", {
      className: g.commandContainer,
      children: t.map(e => (0, i.jsx)(P, {
        channel: n,
        command: e,
        section: l,
        sectionName: r
      }, e.id))
    })]
  })
}

function S(e) {
  var n;
  let {
    channel: t,
    application: a,
    sectionName: r
  } = e, {
    filterSection: s,
    commandsByActiveSection: c,
    sectionDescriptors: d
  } = u.wi(t, {
    commandType: o.yU.CHAT
  }, {
    placeholderCount: 0,
    limit: v.tn,
    includeFrecency: !0
  }), m = null !== (n = d.find(e => e.id === a.id)) && void 0 !== n ? n : null, {
    sortOrder: p,
    setSortOrder: h,
    commands: N,
    canSort: _
  } = (0, C.Z)({
    sectionId: a.id,
    commandsByActiveSection: c
  });
  l.useEffect(() => {
    s(a.id)
  }, [a.id, s]);
  let A = (0, E.Z)({
    channel: t,
    commands: N,
    limit: 5
  });
  return (0, i.jsxs)("ul", {
    className: g.contentContainer,
    children: [(0, i.jsx)(M, {
      channel: t,
      section: m,
      commands: A,
      headerName: I.Z.Messages.APP_LAUNCHER_HOME_RECENT_COMMANDS_HEADER,
      sectionName: r
    }), (0, i.jsx)(M, {
      channel: t,
      section: m,
      commands: N,
      headerName: I.Z.Messages.APP_LAUNCHER_USE_THIS_APP_HEADER,
      sectionName: r,
      children: _ && (0, i.jsx)(f.Z, {
        sortOrder: p,
        onSortOptionClick: h
      })
    })]
  })
}