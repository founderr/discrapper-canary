n.d(t, {
  Q: function() {
    return E
  }
});
var o = n(735250);
n(470079);
var s = n(120356),
  r = n.n(s),
  a = n(533627),
  i = n(432594),
  l = n(481060),
  c = n(230711),
  d = n(327192),
  u = n(796111),
  p = n(46140),
  m = n(981631),
  x = n(689938),
  g = n(600852);

function f(e) {
  let {
    isConnected: t,
    consoleType: n
  } = e;
  return (0, o.jsx)(l.Clickable, {
    className: g.connectConsoleButtonWrapper,
    onClick: () => (0, d.q)(n),
    children: n === m.ABu.PLAYSTATION ? (0, o.jsx)(a.K, {
      colorClass: r()(g.connectConsoleButton, t ? g.playstationButtonConnected : g.connectConsoleButtonUnconnected),
      size: "sm"
    }) : (0, o.jsx)(i.a, {
      colorClass: r()(g.connectConsoleButton, t ? g.xboxButtonConnected : g.connectConsoleButtonUnconnected),
      size: "sm"
    })
  })
}

function C(e) {
  let {
    text: t
  } = e;
  return (0, o.jsx)(l.Clickable, {
    className: g.showConnectionsButton,
    onClick: () => c.Z.open(m.oAB.CONNECTIONS),
    children: (0, o.jsx)(l.Text, {
      "aria-label": t,
      color: "none",
      variant: "text-xxs/normal",
      children: t
    })
  })
}

function h(e) {
  let {
    xboxAccounts: t,
    playstationAccounts: n,
    xboxAndPlaystationAccounts: s
  } = e, a = s.slice(0, 2), i = s.length > 0, c = t.length > 0, d = n.length > 0;
  return (0, o.jsxs)("div", {
    className: g.inlineConsoleConnectionDetails,
    children: [(0, o.jsxs)("div", {
      className: g.inlineConsoleConnectionDetailsUpper,
      children: [(0, o.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-xxs/normal",
        children: i ? x.Z.Messages.QUESTS_CONNECTED : x.Z.Messages.QUESTS_SELECT_TO_START
      }), (0, o.jsxs)("div", {
        className: g.inlineConsoleConnectionDetailsIcons,
        children: [(0, o.jsx)(f, {
          consoleType: m.ABu.PLAYSTATION,
          isConnected: d
        }), (0, o.jsx)("div", {
          className: g.consoleIconDivider
        }), (0, o.jsx)(f, {
          consoleType: m.ABu.XBOX,
          isConnected: c
        })]
      })]
    }), i && (0, o.jsxs)("div", {
      className: g.inlineConsoleConnectionDetailsLower,
      children: [a.map((e, t) => (0, o.jsxs)("div", {
        className: r()(g.inlineConsoleConnectionDetailsLowerItem, t > 0 ? g.marginTop4px : void 0),
        children: [(0, o.jsx)(l.Text, {
          color: "header-secondary",
          variant: "text-xxs/normal",
          children: e.type === m.ABu.XBOX ? x.Z.Messages.QUESTS_XBOX_ID : x.Z.Messages.QUESTS_PSN_ONLINE_ID
        }), (0, o.jsx)(l.Text, {
          color: "header-secondary",
          variant: "text-xxs/normal",
          children: e.name
        })]
      }, t)), s.length > 2 && (0, o.jsx)(C, {
        text: x.Z.Messages.QUESTS_VIEW_MORE_ACCOUNTS
      })]
    })]
  })
}

function _(e) {
  let {
    xboxAndPlaystationAccounts: t
  } = e;
  return t.length > 0 ? (0, o.jsx)(C, {
    text: x.Z.Messages.QUESTS_SHOW_CONNECTIONS
  }) : null
}

function E(e) {
  let t = (0, u.P)({
    location: p.dr.QUESTS_BAR
  });
  return (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(l.Text, {
      color: "text-muted",
      variant: "text-xs/medium",
      children: x.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT
    }), t ? (0, o.jsx)(h, {
      ...e
    }) : (0, o.jsx)(_, {
      ...e
    })]
  })
}