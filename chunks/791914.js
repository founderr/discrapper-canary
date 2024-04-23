"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var s = n("735250");
n("470079");
var l = n("120356"),
  a = n.n(l),
  i = n("399606"),
  r = n("524437"),
  o = n("481060"),
  u = n("494404"),
  d = n("377171"),
  c = n("317632"),
  f = n("602478"),
  E = n("641051"),
  _ = n("329461"),
  m = n("360629"),
  T = n("837062"),
  I = n("26290"),
  p = n("818186"),
  h = n("689938"),
  N = n("551046");

function S(e) {
  return (0, m.useInDesktopNotificationCenterExperiment)() ? (0, s.jsx)(C, {
    ...e
  }) : (0, s.jsx)(A, {
    ...e
  })
}

function C(e) {
  let {
    tab: t,
    setTab: n,
    children: l,
    badgeState: m,
    closePopout: S
  } = e, {
    showReminders: C
  } = E.default.useExperiment({
    location: "RecentsHeader"
  }, {
    autoTrackExposure: !1
  }), {
    enabled: A
  } = f.default.useExperiment({
    location: "RecentsHeader"
  }), g = (0, i.useStateFromStores)([c.default], () => c.default.getUnseenInviteCount()), M = (0, i.useStateFromStores)([_.default], () => _.default.getMessageReminders()).length;
  return (0, s.jsxs)(u.Header, {
    className: a()(N.header, N.expanded),
    children: [(0, s.jsxs)("div", {
      className: a()(N.expandedInboxHeader),
      children: [(0, s.jsx)(T.default, {
        className: N.inboxIcon
      }), (0, s.jsx)(o.Text, {
        className: N.inboxTitle,
        variant: "text-lg/semibold",
        children: h.default.Messages.INBOX
      }), (0, s.jsx)(p.default, {
        closePopout: S
      })]
    }), (0, s.jsxs)("div", {
      className: a()(N.expandedTabSection),
      children: [(0, s.jsxs)(o.TabBar, {
        selectedItem: t,
        type: "top-pill",
        onItemSelect: n,
        children: [(0, s.jsxs)(o.TabBar.Item, {
          id: r.InboxTab.FOR_YOU,
          "aria-label": h.default.Messages.FOR_YOU,
          className: a()(N.tab, N.expanded, {
            [N.active]: t === r.InboxTab.FOR_YOU
          }),
          children: [h.default.Messages.FOR_YOU, (null == m ? void 0 : m.badgeForYou) ? (0, s.jsx)(I.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: a()(N.iconBadge)
          }) : null]
        }), (0, s.jsx)(o.TabBar.Item, {
          id: r.InboxTab.UNREADS,
          className: a()(N.tab, N.expanded, {
            [N.active]: t === r.InboxTab.UNREADS
          }),
          children: h.default.Messages.UNREADS_TAB_LABEL
        }), (0, s.jsx)(o.TabBar.Item, {
          "aria-label": h.default.Messages.MENTIONS,
          id: r.InboxTab.MENTIONS,
          className: a()(N.tab, N.expanded, {
            [N.active]: t === r.InboxTab.MENTIONS
          }),
          children: h.default.Messages.MENTIONS
        }), A ? (0, s.jsxs)(o.TabBar.Item, {
          "aria-label": "game_invites",
          id: r.InboxTab.GAME_INVITES,
          className: a()(N.tab, N.expanded, {
            [N.active]: t === r.InboxTab.GAME_INVITES
          }),
          children: [h.default.Messages.GAME_INVITES, g > 0 ? (0, s.jsx)(I.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: a()(N.iconBadge)
          }) : null]
        }) : null, C ? (0, s.jsxs)(o.TabBar.Item, {
          "aria-label": "todos",
          id: r.InboxTab.TODOS,
          className: a()(N.tab, N.expanded, {
            [N.active]: t === r.InboxTab.TODOS
          }),
          children: [h.default.Messages.MESSAGE_REMINDERS_HEADER, M > 0 ? (0, s.jsx)(I.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: a()(N.iconBadge)
          }) : null]
        }) : null]
      }), (0, s.jsx)("div", {
        className: N.controls,
        children: l
      })]
    })]
  })
}

function A(e) {
  let {
    tab: t,
    setTab: n,
    children: l
  } = e, {
    showReminders: i
  } = E.default.useExperiment({
    location: "489e3f_2"
  }, {
    autoTrackExposure: !1
  }), d = (0, m.useInDesktopNotificationCenterExperiment)(), {
    enabled: c
  } = f.default.useExperiment({
    location: "RecentsHeader"
  });
  return (0, s.jsxs)(u.Header, {
    className: N.header,
    children: [(0, s.jsxs)(o.TabBar, {
      selectedItem: t,
      type: "top-pill",
      onItemSelect: n,
      className: N.tabBar,
      children: [d ? (0, s.jsx)(o.TabBar.Item, {
        id: r.InboxTab.FOR_YOU,
        className: a()(N.tab, {
          [N.active]: t === r.InboxTab.FOR_YOU
        }),
        children: h.default.Messages.FOR_YOU
      }) : null, (0, s.jsx)(o.TabBar.Item, {
        id: r.InboxTab.MENTIONS,
        className: a()(N.tab, {
          [N.active]: t === r.InboxTab.MENTIONS
        }),
        children: h.default.Messages.MENTIONS
      }), (0, s.jsx)(o.TabBar.Item, {
        id: r.InboxTab.UNREADS,
        className: a()(N.tab, {
          [N.active]: t === r.InboxTab.UNREADS
        }),
        children: h.default.Messages.UNREADS_TAB_LABEL
      }), c ? (0, s.jsx)(o.TabBar.Item, {
        id: r.InboxTab.GAME_INVITES,
        className: a()(N.tab, {
          [N.active]: t === r.InboxTab.GAME_INVITES
        }),
        children: h.default.Messages.GAME_INVITES
      }) : null, i ? (0, s.jsx)(o.TabBar.Item, {
        id: r.InboxTab.TODOS,
        className: a()(N.tab, {
          [N.active]: t === r.InboxTab.TODOS
        }),
        children: h.default.Messages.MESSAGE_REMINDERS_HEADER
      }) : null]
    }), (0, s.jsx)("div", {
      className: N.controls,
      children: l
    })]
  })
}