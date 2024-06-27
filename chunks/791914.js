n.d(t, {
  Z: function() {
    return N
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
  E = n(742989),
  I = n(802463),
  m = n(818186),
  T = n(689938),
  h = n(775132);

function N(e) {
  let {
    tab: t,
    setTab: n,
    children: a,
    badgeState: N,
    closePopout: f
  } = e, {
    showReminders: p
  } = E.Z.useExperiment({
    location: "RecentsHeader"
  }, {
    autoTrackExposure: !1
  }), {
    enabled: C
  } = _.Z.useExperiment({
    location: "RecentsHeader"
  }), g = (0, l.e7)([u.Z], () => u.Z.getUnseenInviteCount()), S = (0, l.e7)([I.Z], () => I.Z.getMessageReminders()).length;
  return (0, i.jsxs)(c.h4, {
    className: s()(h.header, h.expanded),
    children: [(0, i.jsxs)("div", {
      className: s()(h.expandedInboxHeader),
      children: [(0, i.jsx)(o.InboxIcon, {
        size: "md",
        color: "currentColor",
        className: h.inboxIcon
      }), (0, i.jsx)(o.Text, {
        className: h.inboxTitle,
        variant: "text-lg/semibold",
        children: T.Z.Messages.INBOX
      }), (0, i.jsx)(m.Z, {
        closePopout: f
      })]
    }), (0, i.jsxs)("div", {
      className: s()(h.expandedTabSection),
      children: [(0, i.jsxs)(o.TabBar, {
        selectedItem: t,
        type: "top-pill",
        onItemSelect: n,
        children: [(0, i.jsxs)(o.TabBar.Item, {
          id: r.X.FOR_YOU,
          "aria-label": T.Z.Messages.FOR_YOU,
          className: s()(h.tab, h.expanded, {
            [h.active]: t === r.X.FOR_YOU
          }),
          children: [T.Z.Messages.FOR_YOU, (null == N ? void 0 : N.badgeForYou) ? (0, i.jsx)(o.CircleBadge, {
            color: d.Z.STATUS_DANGER,
            className: s()(h.iconBadge)
          }) : null]
        }), (0, i.jsx)(o.TabBar.Item, {
          id: r.X.UNREADS,
          className: s()(h.tab, h.expanded, {
            [h.active]: t === r.X.UNREADS
          }),
          children: T.Z.Messages.UNREADS_TAB_LABEL
        }), (0, i.jsx)(o.TabBar.Item, {
          "aria-label": T.Z.Messages.MENTIONS,
          id: r.X.MENTIONS,
          className: s()(h.tab, h.expanded, {
            [h.active]: t === r.X.MENTIONS
          }),
          children: T.Z.Messages.MENTIONS
        }), C ? (0, i.jsxs)(o.TabBar.Item, {
          "aria-label": "game_invites",
          id: r.X.GAME_INVITES,
          className: s()(h.tab, h.expanded, {
            [h.active]: t === r.X.GAME_INVITES
          }),
          children: [T.Z.Messages.GAME_INVITES, g > 0 ? (0, i.jsx)(o.CircleBadge, {
            color: d.Z.STATUS_DANGER,
            className: s()(h.iconBadge)
          }) : null]
        }) : null, p ? (0, i.jsxs)(o.TabBar.Item, {
          "aria-label": "todos",
          id: r.X.TODOS,
          className: s()(h.tab, h.expanded, {
            [h.active]: t === r.X.TODOS
          }),
          children: [T.Z.Messages.MESSAGE_REMINDERS_HEADER, S > 0 ? (0, i.jsx)(o.CircleBadge, {
            color: d.Z.STATUS_DANGER,
            className: s()(h.iconBadge)
          }) : null]
        }) : null]
      }), (0, i.jsx)("div", {
        className: h.controls,
        children: a
      })]
    })]
  })
}