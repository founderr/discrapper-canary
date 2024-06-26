"use strict";
n.d(t, {
  Z: function() {
    return L
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(140835),
  o = n(246521),
  a = n(481060),
  l = n(911969),
  u = n(555573),
  _ = n(10718),
  c = n(895924),
  d = n(585483),
  E = n(499254),
  I = n(541099),
  T = n(827498),
  h = n(496158),
  f = n(676161),
  S = n(660090),
  N = n(783097),
  A = n(870205),
  m = n(981631),
  O = n(689079),
  p = n(689938),
  R = n(271047);

function g(e) {
  var t, n;
  let {
    channel: o,
    command: l,
    section: _,
    sectionName: h
  } = e, f = r.useCallback(() => {
    let e = I.Z.entrypoint();
    E.y(T.ti.COMMAND), u.Po({
      channelId: o.id,
      command: l,
      section: _,
      location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW,
      sectionName: h,
      source: e
    }), d.S.dispatch(m.CkL.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: o.id
    })
  }, [o.id, l, _, h]), S = (null !== (n = null === (t = l.options) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0;
  return (0, i.jsxs)(a.Clickable, {
    className: R.command,
    onClick: f,
    children: [(0, i.jsxs)("div", {
      className: R.commandTextContainer,
      children: [(0, i.jsx)(a.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: l.displayName
      }), (0, i.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        lineClamp: 1,
        children: l.displayDescription
      })]
    }), S ? (0, i.jsx)(s.F, {}) : (0, i.jsx)(C, {
      channel: o,
      command: l,
      sectionName: h
    })]
  })
}

function C(e) {
  let {
    channel: t,
    command: n,
    sectionName: s
  } = e, l = (0, h.D)(t), [u, _] = r.useState(!1), c = r.useCallback(async e => {
    e.stopPropagation();
    try {
      await (0, N.Y$)({
        command: n,
        optionValues: {},
        context: l,
        sectionName: s
      }), E.y(T.ti.COMMAND)
    } finally {
      _(!1)
    }
  }, [n, l, s]);
  return (0, i.jsxs)(a.Button, {
    type: "submit",
    onClick: c,
    disabled: u,
    size: a.ButtonSizes.ICON,
    color: a.Button.Colors.PRIMARY,
    className: R.commandSentCTAButton,
    innerClassName: R.commandSentCTAButtonInner,
    children: [(0, i.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "redesign-button-primary-text",
      children: p.Z.Messages.SEND
    }), (0, i.jsx)(o.U, {
      size: "xs",
      color: a.tokens.colors.REDESIGN_BUTTON_PRIMARY_TEXT
    })]
  })
}

function v(e) {
  let {
    channel: t,
    commands: n,
    section: r,
    headerName: s,
    sectionName: o,
    children: l
  } = e;
  return 0 === n.length ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: R.commandListHeader,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-sm/semibold",
        children: s
      }), l]
    }), (0, i.jsx)("ul", {
      className: R.commandContainer,
      children: n.map(e => (0, i.jsx)(g, {
        channel: t,
        command: e,
        section: r,
        sectionName: o
      }, e.id))
    })]
  })
}

function L(e) {
  var t;
  let {
    channel: n,
    application: s,
    sectionName: o
  } = e, {
    filterSection: a,
    commandsByActiveSection: u,
    sectionDescriptors: c
  } = _.wi(n, {
    commandType: l.yU.CHAT
  }, {
    placeholderCount: 0,
    limit: O.tn,
    includeFrecency: !0
  }), d = null !== (t = c.find(e => e.id === s.id)) && void 0 !== t ? t : null, {
    sortOrder: E,
    setSortOrder: I,
    commands: T,
    canSort: h
  } = (0, S.Z)({
    sectionId: s.id,
    commandsByActiveSection: u
  });
  r.useEffect(() => {
    a(s.id)
  }, [s.id, a]);
  let N = (0, f.Z)({
    channel: n,
    commands: T,
    limit: 5
  });
  return (0, i.jsxs)("ul", {
    className: R.contentContainer,
    children: [(0, i.jsx)(v, {
      channel: n,
      section: d,
      commands: N,
      headerName: p.Z.Messages.APP_LAUNCHER_HOME_RECENT_COMMANDS_HEADER,
      sectionName: o
    }), (0, i.jsx)(v, {
      channel: n,
      section: d,
      commands: T,
      headerName: p.Z.Messages.APP_LAUNCHER_USE_THIS_APP_HEADER,
      sectionName: o,
      children: h && (0, i.jsx)(A.Z, {
        sortOrder: E,
        onSortOptionClick: I
      })
    })]
  })
}