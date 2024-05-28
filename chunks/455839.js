"use strict";
n.r(t), n.d(t, {
  GuildDiscoveryMenuPopout: function() {
    return _
  },
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("481060"),
  i = n("239091"),
  r = n("299206"),
  o = n("726521"),
  u = n("430824"),
  d = n("496675"),
  c = n("795295"),
  f = n("556017"),
  E = n("981631"),
  C = n("689938");

function h(e) {
  let {
    guild: t,
    shiftId: n,
    onSelect: h,
    closePopout: _,
    "aria-label": S
  } = e, m = (0, r.default)({
    id: t.id,
    label: C.default.Messages.COPY_ID_GUILD,
    shiftId: n,
    onSuccess: _
  }), p = (0, s.useStateFromStores)([u.default], () => u.default.getGuild(t.id), [t.id]), I = (0, s.useStateFromStores)([d.default], () => d.default.can(E.Permissions.ADMINISTRATOR, p)), {
    canSeeInAppReportingButtons: g
  } = f.DiscoveryInAppReportingExperiment.useExperiment({
    location: "0e35b9_1"
  }, {
    autoTrackExposure: !1
  }), T = () => {
    (0, i.closeContextMenu)(), null == _ || _()
  };
  return (0, a.jsxs)(l.Menu, {
    onSelect: h,
    navId: "guild-discovery-context-menu",
    "aria-label": null != S ? S : C.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: i.closeContextMenu,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: !I && g ? (0, a.jsx)(l.MenuItem, {
        id: "report-guild-discovery-listing",
        label: C.default.Messages.REPORT_SERVER_NO_NAME,
        action: () => {
          (0, o.showReportModalForDiscoverableGuild)(t), T()
        },
        icon: c.default,
        color: "danger"
      }) : null
    }), (0, a.jsx)(l.MenuGroup, {
      children: m
    })]
  })
}
let _ = e => {
  let {
    guild: t,
    children: n,
    onRequestOpen: s,
    onRequestClose: i
  } = e;
  return (0, a.jsx)(l.Popout, {
    onRequestOpen: s,
    onRequestClose: i,
    animation: l.Popout.Animation.NONE,
    position: "bottom",
    spacing: 4,
    align: "right",
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, a.jsx)(h, {
        guild: t,
        closePopout: n
      })
    },
    children: n
  })
}