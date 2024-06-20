n.d(t, {
  Q: function() {
    return f
  }
});
var s = n(735250);
n(470079);
var o = n(120356),
  r = n.n(o),
  a = n(533627),
  l = n(432594),
  i = n(481060),
  c = n(230711),
  u = n(327192),
  d = n(796111),
  p = n(46140),
  x = n(981631),
  m = n(689938),
  g = n(600852);

function C(e) {
  let {
    isConnected: t,
    consoleType: n
  } = e;
  return (0, s.jsx)(i.Clickable, {
    className: g.connectConsoleButtonWrapper,
    onClick: () => (0, u.q)(n),
    children: n === x.ABu.PLAYSTATION ? (0, s.jsx)(a.K, {
      colorClass: r()(g.connectConsoleButton, t ? g.playstationButtonConnected : g.connectConsoleButtonUnconnected),
      size: "sm"
    }) : (0, s.jsx)(l.a, {
      colorClass: r()(g.connectConsoleButton, t ? g.xboxButtonConnected : g.connectConsoleButtonUnconnected),
      size: "sm"
    })
  })
}

function h(e) {
  let {
    text: t
  } = e;
  return (0, s.jsx)(i.Clickable, {
    className: g.showConnectionsButton,
    onClick: () => c.Z.open(x.oAB.CONNECTIONS),
    children: (0, s.jsx)(i.Text, {
      "aria-label": t,
      color: "none",
      variant: "text-xxs/normal",
      children: t
    })
  })
}

function S(e) {
  let {
    xboxAccounts: t,
    playstationAccounts: n,
    xboxAndPlaystationAccounts: o
  } = e, a = o.slice(0, 2), l = o.length > 0, c = t.length > 0, u = n.length > 0;
  return (0, s.jsxs)("div", {
    className: g.inlineConsoleConnectionDetails,
    children: [(0, s.jsxs)("div", {
      className: g.inlineConsoleConnectionDetailsUpper,
      children: [(0, s.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-xxs/normal",
        children: l ? m.Z.Messages.QUESTS_CONNECTED : m.Z.Messages.QUESTS_SELECT_TO_START
      }), (0, s.jsxs)("div", {
        className: g.inlineConsoleConnectionDetailsIcons,
        children: [(0, s.jsx)(C, {
          consoleType: x.ABu.PLAYSTATION,
          isConnected: u
        }), (0, s.jsx)("div", {
          className: g.consoleIconDivider
        }), (0, s.jsx)(C, {
          consoleType: x.ABu.XBOX,
          isConnected: c
        })]
      })]
    }), l && (0, s.jsxs)("div", {
      className: g.inlineConsoleConnectionDetailsLower,
      children: [a.map((e, t) => (0, s.jsxs)("div", {
        className: r()(g.inlineConsoleConnectionDetailsLowerItem, t > 0 ? g.marginTop4px : void 0),
        children: [(0, s.jsx)(i.Text, {
          color: "header-secondary",
          variant: "text-xxs/normal",
          children: e.type === x.ABu.XBOX ? m.Z.Messages.QUESTS_XBOX_ID : m.Z.Messages.QUESTS_PSN_ONLINE_ID
        }), (0, s.jsx)(i.Text, {
          color: "header-secondary",
          variant: "text-xxs/normal",
          children: e.name
        })]
      }, t)), o.length > 2 && (0, s.jsx)(h, {
        text: m.Z.Messages.QUESTS_VIEW_MORE_ACCOUNTS
      })]
    })]
  })
}

function E(e) {
  let {
    xboxAndPlaystationAccounts: t
  } = e;
  return t.length > 0 ? (0, s.jsx)(h, {
    text: m.Z.Messages.QUESTS_SHOW_CONNECTIONS
  }) : null
}

function f(e) {
  let t = (0, d.P)({
    location: p.dr.QUESTS_BAR
  });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(i.Text, {
      color: "text-muted",
      variant: "text-xs/medium",
      children: m.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT
    }), t ? (0, s.jsx)(S, {
      ...e
    }) : (0, s.jsx)(E, {
      ...e
    })]
  })
}