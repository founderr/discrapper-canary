"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("399606"),
  r = n("524437"),
  o = n("481060"),
  u = n("494404"),
  d = n("377171"),
  c = n("317632"),
  f = n("602478"),
  h = n("641051"),
  E = n("329461"),
  m = n("360629"),
  p = n("837062"),
  S = n("26290"),
  g = n("818186"),
  _ = n("689938"),
  N = n("551046");

function I(e) {
  return (0, m.useInDesktopNotificationCenterExperiment)() ? (0, a.jsx)(T, {
    ...e
  }) : (0, a.jsx)(C, {
    ...e
  })
}

function T(e) {
  let {
    tab: t,
    setTab: n,
    children: l,
    badgeState: m,
    closePopout: I
  } = e, {
    showReminders: T
  } = h.default.useExperiment({
    location: "RecentsHeader"
  }, {
    autoTrackExposure: !1
  }), {
    enabled: C
  } = f.default.useExperiment({
    location: "RecentsHeader"
  }), A = (0, i.useStateFromStores)([c.default], () => c.default.getUnseenInviteCount()), v = (0, i.useStateFromStores)([E.default], () => E.default.getMessageReminders()).length;
  return (0, a.jsxs)(u.Header, {
    className: s()(N.header, N.expanded),
    children: [(0, a.jsxs)("div", {
      className: s()(N.expandedInboxHeader),
      children: [(0, a.jsx)(p.default, {
        className: N.inboxIcon
      }), (0, a.jsx)(o.Text, {
        className: N.inboxTitle,
        variant: "text-lg/semibold",
        children: _.default.Messages.INBOX
      }), (0, a.jsx)(g.default, {
        closePopout: I
      })]
    }), (0, a.jsxs)("div", {
      className: s()(N.expandedTabSection),
      children: [(0, a.jsxs)(o.TabBar, {
        selectedItem: t,
        type: "top-pill",
        onItemSelect: n,
        children: [(0, a.jsxs)(o.TabBar.Item, {
          id: r.InboxTab.FOR_YOU,
          "aria-label": _.default.Messages.FOR_YOU,
          className: s()(N.tab, N.expanded, {
            [N.active]: t === r.InboxTab.FOR_YOU
          }),
          children: [_.default.Messages.FOR_YOU, (null == m ? void 0 : m.badgeForYou) ? (0, a.jsx)(S.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: s()(N.iconBadge)
          }) : null]
        }), (0, a.jsx)(o.TabBar.Item, {
          id: r.InboxTab.UNREADS,
          className: s()(N.tab, N.expanded, {
            [N.active]: t === r.InboxTab.UNREADS
          }),
          children: _.default.Messages.UNREADS_TAB_LABEL
        }), (0, a.jsx)(o.TabBar.Item, {
          "aria-label": _.default.Messages.MENTIONS,
          id: r.InboxTab.MENTIONS,
          className: s()(N.tab, N.expanded, {
            [N.active]: t === r.InboxTab.MENTIONS
          }),
          children: _.default.Messages.MENTIONS
        }), C ? (0, a.jsxs)(o.TabBar.Item, {
          "aria-label": "game_invites",
          id: r.InboxTab.GAME_INVITES,
          className: s()(N.tab, N.expanded, {
            [N.active]: t === r.InboxTab.GAME_INVITES
          }),
          children: [_.default.Messages.GAME_INVITES, A > 0 ? (0, a.jsx)(S.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: s()(N.iconBadge)
          }) : null]
        }) : null, T ? (0, a.jsxs)(o.TabBar.Item, {
          "aria-label": "todos",
          id: r.InboxTab.TODOS,
          className: s()(N.tab, N.expanded, {
            [N.active]: t === r.InboxTab.TODOS
          }),
          children: [_.default.Messages.MESSAGE_REMINDERS_HEADER, v > 0 ? (0, a.jsx)(S.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: s()(N.iconBadge)
          }) : null]
        }) : null]
      }), (0, a.jsx)("div", {
        className: N.controls,
        children: l
      })]
    })]
  })
}

function C(e) {
  let {
    tab: t,
    setTab: n,
    children: l
  } = e, {
    showReminders: i
  } = h.default.useExperiment({
    location: "489e3f_2"
  }, {
    autoTrackExposure: !1
  }), d = (0, m.useInDesktopNotificationCenterExperiment)(), {
    enabled: c
  } = f.default.useExperiment({
    location: "RecentsHeader"
  });
  return (0, a.jsxs)(u.Header, {
    className: N.header,
    children: [(0, a.jsxs)(o.TabBar, {
      selectedItem: t,
      type: "top-pill",
      onItemSelect: n,
      className: N.tabBar,
      children: [d ? (0, a.jsx)(o.TabBar.Item, {
        id: r.InboxTab.FOR_YOU,
        className: s()(N.tab, {
          [N.active]: t === r.InboxTab.FOR_YOU
        }),
        children: _.default.Messages.FOR_YOU
      }) : null, (0, a.jsx)(o.TabBar.Item, {
        id: r.InboxTab.MENTIONS,
        className: s()(N.tab, {
          [N.active]: t === r.InboxTab.MENTIONS
        }),
        children: _.default.Messages.MENTIONS
      }), (0, a.jsx)(o.TabBar.Item, {
        id: r.InboxTab.UNREADS,
        className: s()(N.tab, {
          [N.active]: t === r.InboxTab.UNREADS
        }),
        children: _.default.Messages.UNREADS_TAB_LABEL
      }), c ? (0, a.jsx)(o.TabBar.Item, {
        id: r.InboxTab.GAME_INVITES,
        className: s()(N.tab, {
          [N.active]: t === r.InboxTab.GAME_INVITES
        }),
        children: _.default.Messages.GAME_INVITES
      }) : null, i ? (0, a.jsx)(o.TabBar.Item, {
        id: r.InboxTab.TODOS,
        className: s()(N.tab, {
          [N.active]: t === r.InboxTab.TODOS
        }),
        children: _.default.Messages.MESSAGE_REMINDERS_HEADER
      }) : null]
    }), (0, a.jsx)("div", {
      className: N.controls,
      children: l
    })]
  })
}