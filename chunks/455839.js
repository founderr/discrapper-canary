n.r(t), n.d(t, {
  GuildDiscoveryMenuPopout: function() {
    return I
  },
  default: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var s = n(442837),
  l = n(481060),
  a = n(239091),
  r = n(299206),
  o = n(726521),
  c = n(430824),
  u = n(496675),
  d = n(556017),
  E = n(981631),
  h = n(689938);

function _(e) {
  let {
    guild: t,
    shiftId: n,
    onSelect: _,
    closePopout: I,
    "aria-label": m
  } = e, g = (0, r.Z)({
    id: t.id,
    label: h.Z.Messages.COPY_ID_GUILD,
    shiftId: n,
    onSuccess: I
  }), p = (0, s.e7)([c.Z], () => c.Z.getGuild(t.id), [t.id]), N = (0, s.e7)([u.Z], () => u.Z.can(E.Plq.ADMINISTRATOR, p)), {
    canSeeInAppReportingButtons: T
  } = d.N.useExperiment({
    location: "0e35b9_1"
  }, {
    autoTrackExposure: !1
  }), C = () => {
    (0, a.Zy)(), null == I || I()
  };
  return (0, i.jsxs)(l.Menu, {
    onSelect: _,
    navId: "guild-discovery-context-menu",
    "aria-label": null != m ? m : h.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: a.Zy,
    children: [(0, i.jsx)(l.MenuGroup, {
      children: !N && T ? (0, i.jsx)(l.MenuItem, {
        id: "report-guild-discovery-listing",
        label: h.Z.Messages.REPORT_SERVER_NO_NAME,
        action: () => {
          (0, o.lt)(t), C()
        },
        icon: l.FlagIcon,
        color: "danger"
      }) : null
    }), (0, i.jsx)(l.MenuGroup, {
      children: g
    })]
  })
}
let I = e => {
  let {
    guild: t,
    children: n,
    onRequestOpen: s,
    onRequestClose: a
  } = e;
  return (0, i.jsx)(l.Popout, {
    onRequestOpen: s,
    onRequestClose: a,
    animation: l.Popout.Animation.NONE,
    position: "bottom",
    spacing: 4,
    align: "right",
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, i.jsx)(_, {
        guild: t,
        closePopout: n
      })
    },
    children: n
  })
}