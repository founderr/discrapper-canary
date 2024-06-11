"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
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
  m = n("360629"),
  T = n("837062"),
  I = n("818186"),
  p = n("689938"),
  h = n("659047");

function N(e) {
  return (0, m.useInDesktopNotificationCenterExperiment)() ? (0, s.jsx)(S, {
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
    badgeState: m,
    closePopout: N
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
  }), g = (0, i.useStateFromStores)([c.default], () => c.default.getUnseenInviteCount()), A = (0, i.useStateFromStores)([_.default], () => _.default.getMessageReminders()).length;
  return (0, s.jsxs)(u.Header, {
    className: l()(h.header, h.expanded),
    children: [(0, s.jsxs)("div", {
      className: l()(h.expandedInboxHeader),
      children: [(0, s.jsx)(T.default, {
        className: h.inboxIcon
      }), (0, s.jsx)(o.Text, {
        className: h.inboxTitle,
        variant: "text-lg/semibold",
        children: p.default.Messages.INBOX
      }), (0, s.jsx)(I.default, {
        closePopout: N
      })]
    }), (0, s.jsxs)("div", {
      className: l()(h.expandedTabSection),
      children: [(0, s.jsxs)(o.TabBar, {
        selectedItem: t,
        type: "top-pill",
        onItemSelect: n,
        children: [(0, s.jsxs)(o.TabBar.Item, {
          id: r.InboxTab.FOR_YOU,
          "aria-label": p.default.Messages.FOR_YOU,
          className: l()(h.tab, h.expanded, {
            [h.active]: t === r.InboxTab.FOR_YOU
          }),
          children: [p.default.Messages.FOR_YOU, (null == m ? void 0 : m.badgeForYou) ? (0, s.jsx)(o.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: l()(h.iconBadge)
          }) : null]
        }), (0, s.jsx)(o.TabBar.Item, {
          id: r.InboxTab.UNREADS,
          className: l()(h.tab, h.expanded, {
            [h.active]: t === r.InboxTab.UNREADS
          }),
          children: p.default.Messages.UNREADS_TAB_LABEL
        }), (0, s.jsx)(o.TabBar.Item, {
          "aria-label": p.default.Messages.MENTIONS,
          id: r.InboxTab.MENTIONS,
          className: l()(h.tab, h.expanded, {
            [h.active]: t === r.InboxTab.MENTIONS
          }),
          children: p.default.Messages.MENTIONS
        }), C ? (0, s.jsxs)(o.TabBar.Item, {
          "aria-label": "game_invites",
          id: r.InboxTab.GAME_INVITES,
          className: l()(h.tab, h.expanded, {
            [h.active]: t === r.InboxTab.GAME_INVITES
          }),
          children: [p.default.Messages.GAME_INVITES, g > 0 ? (0, s.jsx)(o.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: l()(h.iconBadge)
          }) : null]
        }) : null, S ? (0, s.jsxs)(o.TabBar.Item, {
          "aria-label": "todos",
          id: r.InboxTab.TODOS,
          className: l()(h.tab, h.expanded, {
            [h.active]: t === r.InboxTab.TODOS
          }),
          children: [p.default.Messages.MESSAGE_REMINDERS_HEADER, A > 0 ? (0, s.jsx)(o.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: l()(h.iconBadge)
          }) : null]
        }) : null]
      }), (0, s.jsx)("div", {
        className: h.controls,
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
  }), d = (0, m.useInDesktopNotificationCenterExperiment)(), {
    enabled: c
  } = f.default.useExperiment({
    location: "RecentsHeader"
  });
  return (0, s.jsxs)(u.Header, {
    className: h.header,
    children: [(0, s.jsxs)(o.TabBar, {
      selectedItem: t,
      type: "top-pill",
      onItemSelect: n,
      className: h.tabBar,
      children: [d ? (0, s.jsx)(o.TabBar.Item, {
        id: r.InboxTab.FOR_YOU,
        className: l()(h.tab, {
          [h.active]: t === r.InboxTab.FOR_YOU
        }),
        children: p.default.Messages.FOR_YOU
      }) : null, (0, s.jsx)(o.TabBar.Item, {
        id: r.InboxTab.MENTIONS,
        className: l()(h.tab, {
          [h.active]: t === r.InboxTab.MENTIONS
        }),
        children: p.default.Messages.MENTIONS
      }), (0, s.jsx)(o.TabBar.Item, {
        id: r.InboxTab.UNREADS,
        className: l()(h.tab, {
          [h.active]: t === r.InboxTab.UNREADS
        }),
        children: p.default.Messages.UNREADS_TAB_LABEL
      }), c ? (0, s.jsx)(o.TabBar.Item, {
        id: r.InboxTab.GAME_INVITES,
        className: l()(h.tab, {
          [h.active]: t === r.InboxTab.GAME_INVITES
        }),
        children: p.default.Messages.GAME_INVITES
      }) : null, i ? (0, s.jsx)(o.TabBar.Item, {
        id: r.InboxTab.TODOS,
        className: l()(h.tab, {
          [h.active]: t === r.InboxTab.TODOS
        }),
        children: p.default.Messages.MESSAGE_REMINDERS_HEADER
      }) : null]
    }), (0, s.jsx)("div", {
      className: h.controls,
      children: a
    })]
  })
}