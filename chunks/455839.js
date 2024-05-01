"use strict";
a.r(t), a.d(t, {
  GuildDiscoveryMenuPopout: function() {
    return C
  },
  default: function() {
    return _
  }
});
var n = a("735250");
a("470079");
var s = a("442837"),
  l = a("481060"),
  i = a("239091"),
  r = a("299206"),
  o = a("726521"),
  u = a("430824"),
  d = a("496675"),
  c = a("795295"),
  f = a("556017"),
  E = a("981631"),
  h = a("689938");

function _(e) {
  let {
    guild: t,
    shiftId: a,
    onSelect: _,
    closePopout: C,
    "aria-label": m
  } = e, S = (0, r.default)({
    id: t.id,
    label: h.default.Messages.COPY_ID_GUILD,
    shiftId: a,
    onSuccess: C
  }), p = (0, s.useStateFromStores)([u.default], () => u.default.getGuild(t.id), [t.id]), I = (0, s.useStateFromStores)([d.default], () => d.default.can(E.Permissions.ADMINISTRATOR, p)), {
    canSeeInAppReportingButtons: g
  } = f.DiscoveryInAppReportingExperiment.useExperiment({
    location: "0e35b9_1"
  }, {
    autoTrackExposure: !1
  }), T = () => {
    (0, i.closeContextMenu)(), null == C || C()
  };
  return (0, n.jsxs)(l.Menu, {
    onSelect: _,
    navId: "guild-discovery-context-menu",
    "aria-label": null != m ? m : h.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: i.closeContextMenu,
    children: [(0, n.jsx)(l.MenuGroup, {
      children: !I && g ? (0, n.jsx)(l.MenuItem, {
        id: "report-guild-discovery-listing",
        label: h.default.Messages.REPORT_SERVER_NO_NAME,
        action: () => {
          (0, o.showReportModalForDiscoverableGuild)(t), T()
        },
        icon: c.default,
        color: "danger"
      }) : null
    }), (0, n.jsx)(l.MenuGroup, {
      children: S
    })]
  })
}
let C = e => {
  let {
    guild: t,
    children: a,
    onRequestOpen: s,
    onRequestClose: i
  } = e;
  return (0, n.jsx)(l.Popout, {
    onRequestOpen: s,
    onRequestClose: i,
    animation: l.Popout.Animation.NONE,
    position: "bottom",
    spacing: 4,
    align: "right",
    renderPopout: e => {
      let {
        closePopout: a
      } = e;
      return (0, n.jsx)(_, {
        guild: t,
        closePopout: a
      })
    },
    children: a
  })
}