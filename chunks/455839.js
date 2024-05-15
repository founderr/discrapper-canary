"use strict";
n.r(t), n.d(t, {
  GuildDiscoveryMenuPopout: function() {
    return C
  },
  default: function() {
    return _
  }
});
var a = n("735250");
n("470079");
var s = n("442837"),
  i = n("481060"),
  l = n("239091"),
  r = n("299206"),
  o = n("726521"),
  u = n("430824"),
  d = n("496675"),
  c = n("795295"),
  f = n("556017"),
  E = n("981631"),
  h = n("689938");

function _(e) {
  let {
    guild: t,
    shiftId: n,
    onSelect: _,
    closePopout: C,
    "aria-label": m
  } = e, p = (0, r.default)({
    id: t.id,
    label: h.default.Messages.COPY_ID_GUILD,
    shiftId: n,
    onSuccess: C
  }), S = (0, s.useStateFromStores)([u.default], () => u.default.getGuild(t.id), [t.id]), g = (0, s.useStateFromStores)([d.default], () => d.default.can(E.Permissions.ADMINISTRATOR, S)), {
    canSeeInAppReportingButtons: I
  } = f.DiscoveryInAppReportingExperiment.useExperiment({
    location: "0e35b9_1"
  }, {
    autoTrackExposure: !1
  }), T = () => {
    (0, l.closeContextMenu)(), null == C || C()
  };
  return (0, a.jsxs)(i.Menu, {
    onSelect: _,
    navId: "guild-discovery-context-menu",
    "aria-label": null != m ? m : h.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: l.closeContextMenu,
    children: [(0, a.jsx)(i.MenuGroup, {
      children: !g && I ? (0, a.jsx)(i.MenuItem, {
        id: "report-guild-discovery-listing",
        label: h.default.Messages.REPORT_SERVER_NO_NAME,
        action: () => {
          (0, o.showReportModalForDiscoverableGuild)(t), T()
        },
        icon: c.default,
        color: "danger"
      }) : null
    }), (0, a.jsx)(i.MenuGroup, {
      children: p
    })]
  })
}
let C = e => {
  let {
    guild: t,
    children: n,
    onRequestOpen: s,
    onRequestClose: l
  } = e;
  return (0, a.jsx)(i.Popout, {
    onRequestOpen: s,
    onRequestClose: l,
    animation: i.Popout.Animation.NONE,
    position: "bottom",
    spacing: 4,
    align: "right",
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, a.jsx)(_, {
        guild: t,
        closePopout: n
      })
    },
    children: n
  })
}