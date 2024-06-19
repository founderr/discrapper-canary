n.d(t, {
  Q: function() {
    return N
  }
});
var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  l = n(533627),
  r = n(432594),
  o = n(481060),
  c = n(230711),
  d = n(327192),
  u = n(796111),
  E = n(46140),
  _ = n(981631),
  h = n(689938),
  m = n(600852);

function T(e) {
  let {
    isConnected: t,
    consoleType: n
  } = e;
  return (0, s.jsx)(o.Clickable, {
    className: m.connectConsoleButtonWrapper,
    onClick: () => (0, d.q)(n),
    children: n === _.ABu.PLAYSTATION ? (0, s.jsx)(l.K, {
      colorClass: i()(m.connectConsoleButton, t ? m.playstationButtonConnected : m.connectConsoleButtonUnconnected),
      size: "sm"
    }) : (0, s.jsx)(r.a, {
      colorClass: i()(m.connectConsoleButton, t ? m.xboxButtonConnected : m.connectConsoleButtonUnconnected),
      size: "sm"
    })
  })
}

function C(e) {
  let {
    text: t
  } = e;
  return (0, s.jsx)(o.Clickable, {
    className: m.showConnectionsButton,
    onClick: () => c.Z.open(_.oAB.CONNECTIONS),
    children: (0, s.jsx)(o.Text, {
      "aria-label": t,
      color: "none",
      variant: "text-xxs/normal",
      children: t
    })
  })
}

function g(e) {
  let {
    xboxAccounts: t,
    playstationAccounts: n,
    xboxAndPlaystationAccounts: a
  } = e, l = a.slice(0, 2), r = a.length > 0, c = t.length > 0, d = n.length > 0;
  return (0, s.jsxs)("div", {
    className: m.inlineConsoleConnectionDetails,
    children: [(0, s.jsxs)("div", {
      className: m.inlineConsoleConnectionDetailsUpper,
      children: [(0, s.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-xxs/normal",
        children: r ? h.Z.Messages.QUESTS_CONNECTED : h.Z.Messages.QUESTS_SELECT_TO_START
      }), (0, s.jsxs)("div", {
        className: m.inlineConsoleConnectionDetailsIcons,
        children: [(0, s.jsx)(T, {
          consoleType: _.ABu.PLAYSTATION,
          isConnected: d
        }), (0, s.jsx)("div", {
          className: m.consoleIconDivider
        }), (0, s.jsx)(T, {
          consoleType: _.ABu.XBOX,
          isConnected: c
        })]
      })]
    }), r && (0, s.jsxs)("div", {
      className: m.inlineConsoleConnectionDetailsLower,
      children: [l.map((e, t) => (0, s.jsxs)("div", {
        className: i()(m.inlineConsoleConnectionDetailsLowerItem, t > 0 ? m.marginTop4px : void 0),
        children: [(0, s.jsx)(o.Text, {
          color: "header-secondary",
          variant: "text-xxs/normal",
          children: e.type === _.ABu.XBOX ? h.Z.Messages.QUESTS_XBOX_ID : h.Z.Messages.QUESTS_PSN_ONLINE_ID
        }), (0, s.jsx)(o.Text, {
          color: "header-secondary",
          variant: "text-xxs/normal",
          children: e.name
        })]
      }, t)), a.length > 2 && (0, s.jsx)(C, {
        text: h.Z.Messages.QUESTS_VIEW_MORE_ACCOUNTS
      })]
    })]
  })
}

function p(e) {
  let {
    xboxAndPlaystationAccounts: t
  } = e;
  return t.length > 0 ? (0, s.jsx)(C, {
    text: h.Z.Messages.QUESTS_SHOW_CONNECTIONS
  }) : null
}

function N(e) {
  let t = (0, u.P)({
    location: E.dr.QUESTS_BAR
  });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(o.Text, {
      color: "text-muted",
      variant: "text-xs/medium",
      children: h.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT
    }), t ? (0, s.jsx)(g, {
      ...e
    }) : (0, s.jsx)(p, {
      ...e
    })]
  })
}