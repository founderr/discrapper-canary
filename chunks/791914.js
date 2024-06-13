"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  i = n("399606"),
  r = n("524437"),
  o = n("481060"),
  u = n("494404"),
  d = n("377171"),
  c = n("317632"),
  f = n("602478"),
  E = n("641051"),
  _ = n("329461"),
  T = n("360629"),
  m = n("837062"),
  I = n("818186"),
  N = n("689938"),
  p = n("659047");

function h(e) {
  return (0, T.useInDesktopNotificationCenterExperiment)() ? (0, s.jsx)(S, {
    ...e
  }) : (0, s.jsx)(C, {
    ...e
  })
}

function S(e) {
  let {
    tab: t,
    setTab: n,
    children: a,
    badgeState: T,
    closePopout: h
  } = e, {
    showReminders: S
  } = E.default.useExperiment({
    location: "RecentsHeader"
  }, {
    autoTrackExposure: !1
  }), {
    enabled: C
  } = f.default.useExperiment({
    location: "RecentsHeader"
  }), A = (0, i.useStateFromStores)([c.default], () => c.default.getUnseenInviteCount()), g = (0, i.useStateFromStores)([_.default], () => _.default.getMessageReminders()).length;
  return (0, s.jsxs)(u.Header, {
    className: l()(p.header, p.expanded),
    children: [(0, s.jsxs)("div", {
      className: l()(p.expandedInboxHeader),
      children: [(0, s.jsx)(m.default, {
        className: p.inboxIcon
      }), (0, s.jsx)(o.Text, {
        className: p.inboxTitle,
        variant: "text-lg/semibold",
        children: N.default.Messages.INBOX
      }), (0, s.jsx)(I.default, {
        closePopout: h
      })]
    }), (0, s.jsxs)("div", {
      className: l()(p.expandedTabSection),
      children: [(0, s.jsxs)(o.TabBar, {
        selectedItem: t,
        type: "top-pill",
        onItemSelect: n,
        children: [(0, s.jsxs)(o.TabBar.Item, {
          id: r.InboxTab.FOR_YOU,
          "aria-label": N.default.Messages.FOR_YOU,
          className: l()(p.tab, p.expanded, {
            [p.active]: t === r.InboxTab.FOR_YOU
          }),
          children: [N.default.Messages.FOR_YOU, (null == T ? void 0 : T.badgeForYou) ? (0, s.jsx)(o.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: l()(p.iconBadge)
          }) : null]
        }), (0, s.jsx)(o.TabBar.Item, {
          id: r.InboxTab.UNREADS,
          className: l()(p.tab, p.expanded, {
            [p.active]: t === r.InboxTab.UNREADS
          }),
          children: N.default.Messages.UNREADS_TAB_LABEL
        }), (0, s.jsx)(o.TabBar.Item, {
          "aria-label": N.default.Messages.MENTIONS,
          id: r.InboxTab.MENTIONS,
          className: l()(p.tab, p.expanded, {
            [p.active]: t === r.InboxTab.MENTIONS
          }),
          children: N.default.Messages.MENTIONS
        }), C ? (0, s.jsxs)(o.TabBar.Item, {
          "aria-label": "game_invites",
          id: r.InboxTab.GAME_INVITES,
          className: l()(p.tab, p.expanded, {
            [p.active]: t === r.InboxTab.GAME_INVITES
          }),
          children: [N.default.Messages.GAME_INVITES, A > 0 ? (0, s.jsx)(o.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: l()(p.iconBadge)
          }) : null]
        }) : null, S ? (0, s.jsxs)(o.TabBar.Item, {
          "aria-label": "todos",
          id: r.InboxTab.TODOS,
          className: l()(p.tab, p.expanded, {
            [p.active]: t === r.InboxTab.TODOS
          }),
          children: [N.default.Messages.MESSAGE_REMINDERS_HEADER, g > 0 ? (0, s.jsx)(o.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: l()(p.iconBadge)
          }) : null]
        }) : null]
      }), (0, s.jsx)("div", {
        className: p.controls,
        children: a
      })]
    })]
  })
}

function C(e) {
  let {
    tab: t,
    setTab: n,
    children: a
  } = e, {
    showReminders: i
  } = E.default.useExperiment({
    location: "489e3f_2"
  }, {
    autoTrackExposure: !1
  }), d = (0, T.useInDesktopNotificationCenterExperiment)(), {
    enabled: c
  } = f.default.useExperiment({
    location: "RecentsHeader"
  });
  return (0, s.jsxs)(u.Header, {
    className: p.header,
    children: [(0, s.jsxs)(o.TabBar, {
      selectedItem: t,
      type: "top-pill",
      onItemSelect: n,
      className: p.tabBar,
      children: [d ? (0, s.jsx)(o.TabBar.Item, {
        id: r.InboxTab.FOR_YOU,
        className: l()(p.tab, {
          [p.active]: t === r.InboxTab.FOR_YOU
        }),
        children: N.default.Messages.FOR_YOU
      }) : null, (0, s.jsx)(o.TabBar.Item, {
        id: r.InboxTab.MENTIONS,
        className: l()(p.tab, {
          [p.active]: t === r.InboxTab.MENTIONS
        }),
        children: N.default.Messages.MENTIONS
      }), (0, s.jsx)(o.TabBar.Item, {
        id: r.InboxTab.UNREADS,
        className: l()(p.tab, {
          [p.active]: t === r.InboxTab.UNREADS
        }),
        children: N.default.Messages.UNREADS_TAB_LABEL
      }), c ? (0, s.jsx)(o.TabBar.Item, {
        id: r.InboxTab.GAME_INVITES,
        className: l()(p.tab, {
          [p.active]: t === r.InboxTab.GAME_INVITES
        }),
        children: N.default.Messages.GAME_INVITES
      }) : null, i ? (0, s.jsx)(o.TabBar.Item, {
        id: r.InboxTab.TODOS,
        className: l()(p.tab, {
          [p.active]: t === r.InboxTab.TODOS
        }),
        children: N.default.Messages.MESSAGE_REMINDERS_HEADER
      }) : null]
    }), (0, s.jsx)("div", {
      className: p.controls,
      children: a
    })]
  })
}