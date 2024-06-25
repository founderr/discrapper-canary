n.d(t, {
  Z: function() {
    return C
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(399606),
  r = n(524437),
  o = n(481060),
  c = n(494404),
  u = n(377171),
  d = n(317632),
  E = n(602478),
  _ = n(641051),
  I = n(329461),
  T = n(360629),
  m = n(818186),
  N = n(689938),
  h = n(775132);

function C(e) {
  return (0, T.sv)() ? (0, s.jsx)(S, {
    ...e
  }) : (0, s.jsx)(A, {
    ...e
  })
}

function S(e) {
  let {
    tab: t,
    setTab: n,
    children: i,
    badgeState: T,
    closePopout: C
  } = e, {
    showReminders: S
  } = _.Z.useExperiment({
    location: "RecentsHeader"
  }, {
    autoTrackExposure: !1
  }), {
    enabled: A
  } = E.Z.useExperiment({
    location: "RecentsHeader"
  }), g = (0, a.e7)([d.Z], () => d.Z.getUnseenInviteCount()), p = (0, a.e7)([I.Z], () => I.Z.getMessageReminders()).length;
  return (0, s.jsxs)(c.h4, {
    className: l()(h.header, h.expanded),
    children: [(0, s.jsxs)("div", {
      className: l()(h.expandedInboxHeader),
      children: [(0, s.jsx)(o.InboxIcon, {
        size: "md",
        color: "currentColor",
        className: h.inboxIcon
      }), (0, s.jsx)(o.Text, {
        className: h.inboxTitle,
        variant: "text-lg/semibold",
        children: N.Z.Messages.INBOX
      }), (0, s.jsx)(m.Z, {
        closePopout: C
      })]
    }), (0, s.jsxs)("div", {
      className: l()(h.expandedTabSection),
      children: [(0, s.jsxs)(o.TabBar, {
        selectedItem: t,
        type: "top-pill",
        onItemSelect: n,
        children: [(0, s.jsxs)(o.TabBar.Item, {
          id: r.X.FOR_YOU,
          "aria-label": N.Z.Messages.FOR_YOU,
          className: l()(h.tab, h.expanded, {
            [h.active]: t === r.X.FOR_YOU
          }),
          children: [N.Z.Messages.FOR_YOU, (null == T ? void 0 : T.badgeForYou) ? (0, s.jsx)(o.CircleBadge, {
            color: u.Z.STATUS_DANGER,
            className: l()(h.iconBadge)
          }) : null]
        }), (0, s.jsx)(o.TabBar.Item, {
          id: r.X.UNREADS,
          className: l()(h.tab, h.expanded, {
            [h.active]: t === r.X.UNREADS
          }),
          children: N.Z.Messages.UNREADS_TAB_LABEL
        }), (0, s.jsx)(o.TabBar.Item, {
          "aria-label": N.Z.Messages.MENTIONS,
          id: r.X.MENTIONS,
          className: l()(h.tab, h.expanded, {
            [h.active]: t === r.X.MENTIONS
          }),
          children: N.Z.Messages.MENTIONS
        }), A ? (0, s.jsxs)(o.TabBar.Item, {
          "aria-label": "game_invites",
          id: r.X.GAME_INVITES,
          className: l()(h.tab, h.expanded, {
            [h.active]: t === r.X.GAME_INVITES
          }),
          children: [N.Z.Messages.GAME_INVITES, g > 0 ? (0, s.jsx)(o.CircleBadge, {
            color: u.Z.STATUS_DANGER,
            className: l()(h.iconBadge)
          }) : null]
        }) : null, S ? (0, s.jsxs)(o.TabBar.Item, {
          "aria-label": "todos",
          id: r.X.TODOS,
          className: l()(h.tab, h.expanded, {
            [h.active]: t === r.X.TODOS
          }),
          children: [N.Z.Messages.MESSAGE_REMINDERS_HEADER, p > 0 ? (0, s.jsx)(o.CircleBadge, {
            color: u.Z.STATUS_DANGER,
            className: l()(h.iconBadge)
          }) : null]
        }) : null]
      }), (0, s.jsx)("div", {
        className: h.controls,
        children: i
      })]
    })]
  })
}

function A(e) {
  let {
    tab: t,
    setTab: n,
    children: i
  } = e, {
    showReminders: a
  } = _.Z.useExperiment({
    location: "489e3f_2"
  }, {
    autoTrackExposure: !1
  }), u = (0, T.sv)(), {
    enabled: d
  } = E.Z.useExperiment({
    location: "RecentsHeader"
  });
  return (0, s.jsxs)(c.h4, {
    className: h.header,
    children: [(0, s.jsxs)(o.TabBar, {
      selectedItem: t,
      type: "top-pill",
      onItemSelect: n,
      className: h.tabBar,
      children: [u ? (0, s.jsx)(o.TabBar.Item, {
        id: r.X.FOR_YOU,
        className: l()(h.tab, {
          [h.active]: t === r.X.FOR_YOU
        }),
        children: N.Z.Messages.FOR_YOU
      }) : null, (0, s.jsx)(o.TabBar.Item, {
        id: r.X.MENTIONS,
        className: l()(h.tab, {
          [h.active]: t === r.X.MENTIONS
        }),
        children: N.Z.Messages.MENTIONS
      }), (0, s.jsx)(o.TabBar.Item, {
        id: r.X.UNREADS,
        className: l()(h.tab, {
          [h.active]: t === r.X.UNREADS
        }),
        children: N.Z.Messages.UNREADS_TAB_LABEL
      }), d ? (0, s.jsx)(o.TabBar.Item, {
        id: r.X.GAME_INVITES,
        className: l()(h.tab, {
          [h.active]: t === r.X.GAME_INVITES
        }),
        children: N.Z.Messages.GAME_INVITES
      }) : null, a ? (0, s.jsx)(o.TabBar.Item, {
        id: r.X.TODOS,
        className: l()(h.tab, {
          [h.active]: t === r.X.TODOS
        }),
        children: N.Z.Messages.MESSAGE_REMINDERS_HEADER
      }) : null]
    }), (0, s.jsx)("div", {
      className: h.controls,
      children: i
    })]
  })
}