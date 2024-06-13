"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("481060"),
  i = n("235820"),
  r = n("592125"),
  o = n("944486"),
  u = n("157318"),
  d = n("455199");
n("288552");
var c = n("981631"),
  f = n("689938");

function E(e) {
  let {
    closePopout: t,
    onSelect: n
  } = e, u = (0, a.useStateFromStores)([r.default, o.default], () => r.default.getChannel(o.default.getChannelId())), {
    everyoneFilter: E,
    roleFilter: _,
    guildFilter: T
  } = (0, a.useStateFromStoresObject)([d.default], () => {
    let {
      everyoneFilter: e,
      roleFilter: t,
      guildFilter: n
    } = d.default;
    return {
      everyoneFilter: e,
      roleFilter: t,
      guildFilter: n
    }
  });
  return (0, s.jsxs)(l.Menu, {
    navId: "mentions-filter",
    "aria-label": f.default.Messages.FILTER,
    onClose: t,
    onSelect: n,
    children: [(0, s.jsx)(l.MenuCheckboxItem, {
      id: "Everyone",
      label: f.default.Messages.RECENT_MENTIONS_FILTER_EVERYONE,
      action: function() {
        i.default.setGuildFilter({
          everyoneFilter: !E
        })
      },
      checked: E
    }), (0, s.jsx)(l.MenuCheckboxItem, {
      id: "Roles",
      label: f.default.Messages.RECENT_MENTIONS_FILTER_ROLES,
      action: function() {
        i.default.setGuildFilter({
          roleFilter: !_
        })
      },
      checked: _
    }), null == u || u.isPrivate() ? null : (0, s.jsx)(l.MenuCheckboxItem, {
      id: "All Servers",
      label: f.default.Messages.RECENT_MENTIONS_FILTER_ALL_SERVERS,
      action: function() {
        i.default.setGuildFilter({
          guildFilter: T === c.RecentMentionsFilters.THIS_SERVER ? c.RecentMentionsFilters.ALL_SERVERS : c.RecentMentionsFilters.THIS_SERVER
        })
      },
      checked: T === c.RecentMentionsFilters.ALL_SERVERS
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
        tooltip: f.default.Messages.FILTER,
        color: l.CircleIconButtonColors.SECONDARY,
        icon: (0, s.jsx)(u.default, {}),
        onClick: t
      })
    }
  })
}