n.d(t, {
  Z: function() {
    return _
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(481060),
  a = n(235820),
  r = n(592125),
  o = n(944486),
  c = n(455199);
n(288552);
var u = n(981631),
  d = n(689938);

function E(e) {
  let {
    closePopout: t,
    onSelect: n
  } = e, E = (0, i.e7)([r.Z, o.Z], () => r.Z.getChannel(o.Z.getChannelId())), {
    everyoneFilter: _,
    roleFilter: I,
    guildFilter: T
  } = (0, i.cj)([c.Z], () => {
    let {
      everyoneFilter: e,
      roleFilter: t,
      guildFilter: n
    } = c.Z;
    return {
      everyoneFilter: e,
      roleFilter: t,
      guildFilter: n
    }
  });
  return (0, s.jsxs)(l.Menu, {
    navId: "mentions-filter",
    "aria-label": d.Z.Messages.FILTER,
    onClose: t,
    onSelect: n,
    children: [(0, s.jsx)(l.MenuCheckboxItem, {
      id: "Everyone",
      label: d.Z.Messages.RECENT_MENTIONS_FILTER_EVERYONE,
      action: function() {
        a.Z.setGuildFilter({
          everyoneFilter: !_
        })
      },
      checked: _
    }), (0, s.jsx)(l.MenuCheckboxItem, {
      id: "Roles",
      label: d.Z.Messages.RECENT_MENTIONS_FILTER_ROLES,
      action: function() {
        a.Z.setGuildFilter({
          roleFilter: !I
        })
      },
      checked: I
    }), null == E || E.isPrivate() ? null : (0, s.jsx)(l.MenuCheckboxItem, {
      id: "All Servers",
      label: d.Z.Messages.RECENT_MENTIONS_FILTER_ALL_SERVERS,
      action: function() {
        a.Z.setGuildFilter({
          guildFilter: T === u.NgX.THIS_SERVER ? u.NgX.ALL_SERVERS : u.NgX.THIS_SERVER
        })
      },
      checked: T === u.NgX.ALL_SERVERS
    })]
  })
}

function _() {
  return (0, s.jsx)(l.Popout, {
    align: "right",
    animation: l.Popout.Animation.NONE,
    position: "bottom",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, s.jsx)(E, {
        closePopout: t
      })
    },
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, s.jsx)(l.CircleIconButton, {
        tooltip: d.Z.Messages.FILTER,
        color: l.CircleIconButtonColors.SECONDARY,
        icon: (0, s.jsx)(l.FiltersHorizontalIcon, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: t
      })
    }
  })
}