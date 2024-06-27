n.d(t, {
  Z: function() {
    return f
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(399606),
  r = n(524437),
  o = n(481060),
  c = n(494404),
  d = n(377171),
  u = n(317632),
  _ = n(602478),
  E = n(360629),
  I = n(742989),
  m = n(802463),
  T = n(818186),
  h = n(689938),
  N = n(775132);

function f(e) {
  return (0, E.sv)() ? (0, i.jsx)(p, {
    ...e
  }) : (0, i.jsx)(C, {
    ...e
  })
}

function p(e) {
  let {
    tab: t,
    setTab: n,
    children: a,
    badgeState: E,
    closePopout: f
  } = e, {
    showReminders: p
  } = I.Z.useExperiment({
    location: "RecentsHeader"
  }, {
    autoTrackExposure: !1
  }), {
    enabled: C
  } = _.Z.useExperiment({
    location: "RecentsHeader"
  }), g = (0, l.e7)([u.Z], () => u.Z.getUnseenInviteCount()), S = (0, l.e7)([m.Z], () => m.Z.getMessageReminders()).length;
  return (0, i.jsxs)(c.h4, {
    className: s()(N.header, N.expanded),
    children: [(0, i.jsxs)("div", {
      className: s()(N.expandedInboxHeader),
      children: [(0, i.jsx)(o.InboxIcon, {
        size: "md",
        color: "currentColor",
        className: N.inboxIcon
      }), (0, i.jsx)(o.Text, {
        className: N.inboxTitle,
        variant: "text-lg/semibold",
        children: h.Z.Messages.INBOX
      }), (0, i.jsx)(T.Z, {
        closePopout: f
      })]
    }), (0, i.jsxs)("div", {
      className: s()(N.expandedTabSection),
      children: [(0, i.jsxs)(o.TabBar, {
        selectedItem: t,
        type: "top-pill",
        onItemSelect: n,
        children: [(0, i.jsxs)(o.TabBar.Item, {
          id: r.X.FOR_YOU,
          "aria-label": h.Z.Messages.FOR_YOU,
          className: s()(N.tab, N.expanded, {
            [N.active]: t === r.X.FOR_YOU
          }),
          children: [h.Z.Messages.FOR_YOU, (null == E ? void 0 : E.badgeForYou) ? (0, i.jsx)(o.CircleBadge, {
            color: d.Z.STATUS_DANGER,
            className: s()(N.iconBadge)
          }) : null]
        }), (0, i.jsx)(o.TabBar.Item, {
          id: r.X.UNREADS,
          className: s()(N.tab, N.expanded, {
            [N.active]: t === r.X.UNREADS
          }),
          children: h.Z.Messages.UNREADS_TAB_LABEL
        }), (0, i.jsx)(o.TabBar.Item, {
          "aria-label": h.Z.Messages.MENTIONS,
          id: r.X.MENTIONS,
          className: s()(N.tab, N.expanded, {
            [N.active]: t === r.X.MENTIONS
          }),
          children: h.Z.Messages.MENTIONS
        }), C ? (0, i.jsxs)(o.TabBar.Item, {
          "aria-label": "game_invites",
          id: r.X.GAME_INVITES,
          className: s()(N.tab, N.expanded, {
            [N.active]: t === r.X.GAME_INVITES
          }),
          children: [h.Z.Messages.GAME_INVITES, g > 0 ? (0, i.jsx)(o.CircleBadge, {
            color: d.Z.STATUS_DANGER,
            className: s()(N.iconBadge)
          }) : null]
        }) : null, p ? (0, i.jsxs)(o.TabBar.Item, {
          "aria-label": "todos",
          id: r.X.TODOS,
          className: s()(N.tab, N.expanded, {
            [N.active]: t === r.X.TODOS
          }),
          children: [h.Z.Messages.MESSAGE_REMINDERS_HEADER, S > 0 ? (0, i.jsx)(o.CircleBadge, {
            color: d.Z.STATUS_DANGER,
            className: s()(N.iconBadge)
          }) : null]
        }) : null]
      }), (0, i.jsx)("div", {
        className: N.controls,
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
    showReminders: l
  } = I.Z.useExperiment({
    location: "489e3f_2"
  }, {
    autoTrackExposure: !1
  }), d = (0, E.sv)(), {
    enabled: u
  } = _.Z.useExperiment({
    location: "RecentsHeader"
  });
  return (0, i.jsxs)(c.h4, {
    className: N.header,
    children: [(0, i.jsxs)(o.TabBar, {
      selectedItem: t,
      type: "top-pill",
      onItemSelect: n,
      className: N.tabBar,
      children: [d ? (0, i.jsx)(o.TabBar.Item, {
        id: r.X.FOR_YOU,
        className: s()(N.tab, {
          [N.active]: t === r.X.FOR_YOU
        }),
        children: h.Z.Messages.FOR_YOU
      }) : null, (0, i.jsx)(o.TabBar.Item, {
        id: r.X.MENTIONS,
        className: s()(N.tab, {
          [N.active]: t === r.X.MENTIONS
        }),
        children: h.Z.Messages.MENTIONS
      }), (0, i.jsx)(o.TabBar.Item, {
        id: r.X.UNREADS,
        className: s()(N.tab, {
          [N.active]: t === r.X.UNREADS
        }),
        children: h.Z.Messages.UNREADS_TAB_LABEL
      }), u ? (0, i.jsx)(o.TabBar.Item, {
        id: r.X.GAME_INVITES,
        className: s()(N.tab, {
          [N.active]: t === r.X.GAME_INVITES
        }),
        children: h.Z.Messages.GAME_INVITES
      }) : null, l ? (0, i.jsx)(o.TabBar.Item, {
        id: r.X.TODOS,
        className: s()(N.tab, {
          [N.active]: t === r.X.TODOS
        }),
        children: h.Z.Messages.MESSAGE_REMINDERS_HEADER
      }) : null]
    }), (0, i.jsx)("div", {
      className: N.controls,
      children: a
    })]
  })
}