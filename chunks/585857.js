n.d(t, {
  Q: function() {
    return T
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
  d = n(231757),
  u = n(617136),
  p = n(497505),
  m = n(796111),
  x = n(46140),
  g = n(981631),
  C = n(689938),
  f = n(600852);

function h(e) {
  let {
    quest: t,
    isConnected: n,
    consoleType: s
  } = e;
  return (0, o.jsx)(l.Clickable, {
    className: f.connectConsoleButtonWrapper,
    onClick: () => {
      (0, u._3)({
        questId: t.id,
        questContent: p.jn.QUEST_BAR_V2,
        questContentCTA: u.jZ.CONNECT_CONSOLE
      }), (0, d.Z)({
        platformType: s
      })
    },
    children: s === g.ABu.PLAYSTATION ? (0, o.jsx)(a.K, {
      colorClass: r()(f.connectConsoleButton, n ? f.playstationButtonConnected : f.connectConsoleButtonUnconnected),
      size: "sm"
    }) : (0, o.jsx)(i.a, {
      colorClass: r()(f.connectConsoleButton, n ? f.xboxButtonConnected : f.connectConsoleButtonUnconnected),
      size: "sm"
    })
  })
}

function _(e) {
  let {
    text: t,
    quest: n
  } = e;
  return (0, o.jsx)(l.Clickable, {
    className: f.showConnectionsButton,
    onClick: () => {
      (0, u._3)({
        questId: n.id,
        questContent: p.jn.QUEST_BAR_V2,
        questContentCTA: u.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
      }), c.Z.open(g.oAB.CONNECTIONS)
    },
    children: (0, o.jsx)(l.Text, {
      "aria-label": t,
      color: "none",
      variant: "text-xxs/normal",
      children: t
    })
  })
}

function E(e) {
  let {
    quest: t,
    xboxAccounts: n,
    playstationAccounts: s,
    xboxAndPlaystationAccounts: a
  } = e, i = a.slice(0, 2), c = a.length > 0, d = n.length > 0, u = s.length > 0;
  return (0, o.jsxs)("div", {
    className: f.inlineConsoleConnectionDetails,
    children: [(0, o.jsxs)("div", {
      className: f.inlineConsoleConnectionDetailsUpper,
      children: [(0, o.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-xxs/normal",
        children: c ? C.Z.Messages.QUESTS_CONNECTED : C.Z.Messages.QUESTS_SELECT_TO_START
      }), (0, o.jsxs)("div", {
        className: f.inlineConsoleConnectionDetailsIcons,
        children: [(0, o.jsx)(h, {
          consoleType: g.ABu.PLAYSTATION,
          isConnected: u,
          quest: t
        }), (0, o.jsx)("div", {
          className: f.consoleIconDivider
        }), (0, o.jsx)(h, {
          consoleType: g.ABu.XBOX,
          isConnected: d,
          quest: t
        })]
      })]
    }), c && (0, o.jsxs)("div", {
      className: f.inlineConsoleConnectionDetailsLower,
      children: [i.map((e, t) => (0, o.jsxs)("div", {
        className: r()(f.inlineConsoleConnectionDetailsLowerItem, t > 0 ? f.marginTop4px : void 0),
        children: [(0, o.jsx)(l.Text, {
          color: "header-secondary",
          variant: "text-xxs/normal",
          children: e.type === g.ABu.XBOX ? C.Z.Messages.QUESTS_XBOX_ID : C.Z.Messages.QUESTS_PSN_ONLINE_ID_V2
        }), (0, o.jsx)(l.Text, {
          color: "header-secondary",
          variant: "text-xxs/normal",
          children: e.name
        })]
      }, t)), a.length > 2 && (0, o.jsx)(_, {
        text: C.Z.Messages.QUESTS_VIEW_MORE_ACCOUNTS,
        quest: t
      })]
    })]
  })
}

function S(e) {
  let {
    xboxAndPlaystationAccounts: t,
    quest: n
  } = e;
  return t.length > 0 ? (0, o.jsx)(_, {
    text: C.Z.Messages.QUESTS_SHOW_CONNECTIONS,
    quest: n
  }) : null
}

function T(e) {
  let t = (0, m.P)({
    location: x.dr.QUESTS_BAR
  });
  return (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(l.Text, {
      color: "text-muted",
      variant: "text-xs/medium",
      children: C.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT
    }), t ? (0, o.jsx)(E, {
      ...e
    }) : (0, o.jsx)(S, {
      ...e
    })]
  })
}