"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var l = n(313361),
  a = n(683860),
  r = n(481060),
  i = n(109434),
  o = n(228392),
  c = n(689938),
  d = n(462114);

function u(e) {
  let {
    channel: t,
    closePopout: n
  } = e, {
    sortOrder: u,
    layoutType: m
  } = (0, i.H)(t.id), h = (0, i.v)(), g = t.isMediaChannel(), x = e => {
    (0, o.KR)({
      guildId: t.guild_id,
      channelId: t.id,
      sortOrder: e
    }), h.getState().setSortOrder(t.id, e), n()
  }, _ = e => {
    (0, o.Do)({
      guildId: t.guild_id,
      channelId: t.id,
      forumLayout: e
    }), h.getState().setLayoutType(t.id, e), n()
  };
  return (0, s.jsx)("div", {
    className: d.container,
    children: (0, s.jsxs)(r.Menu, {
      navId: "sort-and-view",
      "aria-label": g ? c.Z.Messages.MEDIA_CHANNEL_SORT_A11Y_LABEL : c.Z.Messages.FORUM_SORT_AND_VIEW_AY11_LABEL,
      hideScroller: !0,
      onClose: n,
      onSelect: n,
      children: [(0, s.jsxs)(r.MenuGroup, {
        label: c.Z.Messages.FORUM_CHANNEL_SORT_BY,
        children: [(0, s.jsx)(r.MenuRadioItem, {
          id: "sort-by-recent-activity",
          group: "sort-by",
          label: c.Z.Messages.FORUM_CHANNEL_SORT_BY_RECENTLY_ACTIVE,
          action: () => x(a.z.LATEST_ACTIVITY),
          checked: u === a.z.LATEST_ACTIVITY
        }), (0, s.jsx)(r.MenuRadioItem, {
          id: "sort-by-date-posted",
          group: "sort-by",
          label: c.Z.Messages.FORUM_CHANNEL_SORT_BY_DATE_POSTED,
          action: () => x(a.z.CREATION_DATE),
          checked: u === a.z.CREATION_DATE
        })]
      }), !t.isMediaChannel() && (0, s.jsxs)(r.MenuGroup, {
        label: c.Z.Messages.FORUM_CHANNEL_VIEW_AS,
        children: [(0, s.jsx)(r.MenuRadioItem, {
          id: "view-as-list",
          group: "view-as",
          label: c.Z.Messages.FORUM_CHANNEL_VIEW_AS_LIST,
          action: () => _(l.X.LIST),
          checked: m === l.X.LIST
        }), (0, s.jsx)(r.MenuRadioItem, {
          id: "view-as-grid",
          group: "view-as",
          label: c.Z.Messages.FORUM_CHANNEL_VIEW_AS_GRID,
          action: () => _(l.X.GRID),
          checked: m === l.X.GRID
        })]
      }), (0, s.jsx)(r.MenuGroup, {
        children: (0, s.jsx)(r.MenuItem, {
          id: "reset-all",
          className: d.clearText,
          label: (0, s.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: c.Z.Messages.FORUM_CHANNEL_RESET_ALL
          }),
          action: () => {
            x(t.getDefaultSortOrder()), _(t.getDefaultLayout())
          }
        })
      })]
    })
  })
}