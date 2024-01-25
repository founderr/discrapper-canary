"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("65597"),
  r = n("151426"),
  o = n("77078"),
  u = n("590514"),
  d = n("20606"),
  c = n("954732"),
  f = n("22082"),
  h = n("979268"),
  E = n("520899"),
  m = n("913796"),
  p = n("826267"),
  S = n("956089"),
  g = n("124031"),
  _ = n("782340"),
  N = n("804220");

function T(e) {
  let t = (0, m.useInDesktopNotificationCenterExperiment)();
  return t ? (0, a.jsx)(I, {
    ...e
  }) : (0, a.jsx)(C, {
    ...e
  })
}

function I(e) {
  let {
    tab: t,
    setTab: n,
    children: l,
    badgeState: m,
    closePopout: T
  } = e, {
    showReminders: I
  } = h.default.useExperiment({
    location: "RecentsHeader"
  }, {
    autoTrackExposure: !1
  }), {
    enabled: C
  } = f.default.useExperiment({
    location: "RecentsHeader"
  }), A = (0, i.default)([c.default], () => c.default.getUnseenInviteCount()), M = (0, i.default)([E.default], () => E.default.getMessageReminders()), v = M.length;
  return (0, a.jsxs)(u.Header, {
    className: s(N.header, N.expanded),
    children: [(0, a.jsxs)("div", {
      className: s(N.expandedInboxHeader),
      children: [(0, a.jsx)(p.default, {
        className: N.inboxIcon
      }), (0, a.jsx)(o.Text, {
        className: N.inboxTitle,
        variant: "text-lg/semibold",
        children: _.default.Messages.INBOX
      }), (0, a.jsx)(g.default, {
        closePopout: T
      })]
    }), (0, a.jsxs)("div", {
      className: s(N.expandedTabSection),
      children: [(0, a.jsxs)(o.TabBar, {
        selectedItem: t,
        type: "top-pill",
        onItemSelect: n,
        children: [(0, a.jsxs)(o.TabBar.Item, {
          id: r.InboxTab.FOR_YOU,
          "aria-label": _.default.Messages.FOR_YOU,
          className: s(N.tab, N.expanded, {
            [N.active]: t === r.InboxTab.FOR_YOU
          }),
          children: [_.default.Messages.FOR_YOU, (null == m ? void 0 : m.badgeForYou) ? (0, a.jsx)(S.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: s(N.iconBadge)
          }) : null]
        }), (0, a.jsx)(o.TabBar.Item, {
          id: r.InboxTab.UNREADS,
          className: s(N.tab, N.expanded, {
            [N.active]: t === r.InboxTab.UNREADS
          }),
          children: _.default.Messages.UNREADS_TAB_LABEL
        }), (0, a.jsx)(o.TabBar.Item, {
          "aria-label": _.default.Messages.MENTIONS,
          id: r.InboxTab.MENTIONS,
          className: s(N.tab, N.expanded, {
            [N.active]: t === r.InboxTab.MENTIONS
          }),
          children: _.default.Messages.MENTIONS
        }), C ? (0, a.jsxs)(o.TabBar.Item, {
          "aria-label": "game_invites",
          id: r.InboxTab.GAME_INVITES,
          className: s(N.tab, N.expanded, {
            [N.active]: t === r.InboxTab.GAME_INVITES
          }),
          children: [_.default.Messages.GAME_INVITES, A > 0 ? (0, a.jsx)(S.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: s(N.iconBadge)
          }) : null]
        }) : null, I ? (0, a.jsxs)(o.TabBar.Item, {
          "aria-label": "todos",
          id: r.InboxTab.TODOS,
          className: s(N.tab, N.expanded, {
            [N.active]: t === r.InboxTab.TODOS
          }),
          children: [_.default.Messages.MESSAGE_REMINDERS_HEADER, v > 0 ? (0, a.jsx)(S.CircleBadge, {
            color: d.default.STATUS_DANGER,
            className: s(N.iconBadge)
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
        className: s(N.tab, {
          [N.active]: t === r.InboxTab.FOR_YOU
        }),
        children: _.default.Messages.FOR_YOU
      }) : null, (0, a.jsx)(o.TabBar.Item, {
        id: r.InboxTab.MENTIONS,
        className: s(N.tab, {
          [N.active]: t === r.InboxTab.MENTIONS
        }),
        children: _.default.Messages.MENTIONS
      }), (0, a.jsx)(o.TabBar.Item, {
        id: r.InboxTab.UNREADS,
        className: s(N.tab, {
          [N.active]: t === r.InboxTab.UNREADS
        }),
        children: _.default.Messages.UNREADS_TAB_LABEL
      }), c ? (0, a.jsx)(o.TabBar.Item, {
        id: r.InboxTab.GAME_INVITES,
        className: s(N.tab, {
          [N.active]: t === r.InboxTab.GAME_INVITES
        }),
        children: _.default.Messages.GAME_INVITES
      }) : null, i ? (0, a.jsx)(o.TabBar.Item, {
        id: r.InboxTab.TODOS,
        className: s(N.tab, {
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