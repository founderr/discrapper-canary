"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("498139"),
  s = n("629220"),
  r = n("512395"),
  o = n("282109"),
  d = n("49111"),
  c = n("782340");

function f(e) {
  let {
    isFavoritesPerk: t
  } = (0, u.useFavoritesServerExperiment)("useChannelOptInItems"), n = (0, r.useOptInEnabledForGuild)(e.guild_id), f = (0, i.useStateFromStores)([o.default], () => o.default.isChannelOptedIn(e.guild_id, e.id)), _ = (0, i.useStateFromStores)([o.default], () => null != e.parent_id && o.default.isChannelOptedIn(e.guild_id, e.parent_id)), E = (0, i.useStateFromStores)([o.default], () => o.default.isFavorite(e.guild_id, e.id)), p = () => {
    (0, s.setOptInChannel)(e.guild_id, e.id, !f, {
      section: d.AnalyticsSections.CONTEXT_MENU
    })
  }, h = () => {
    null != e.parent_id && (0, s.setOptInChannel)(e.guild_id, e.parent_id, !1, {
      section: d.AnalyticsSections.CONTEXT_MENU
    })
  };
  if (!n || e.isThread()) return null;
  if (e.isCategory()) return (0, a.jsx)(l.MenuItem, {
    id: "opt-into-category",
    label: f ? c.default.Messages.CHANNEL_OPT_OUT : c.default.Messages.CHANNEL_OPT_IN,
    action: () => p()
  });
  let m = E ? c.default.Messages.REMOVE_FAVORITE : c.default.Messages.ADD_FAVORITE,
    T = E ? c.default.Messages.UNPIN_CHANNEL : c.default.Messages.PIN_CHANNEL_TO_TOP;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.MenuItem, {
      id: "opt-in-favorite-channel",
      label: t ? T : m,
      action: () => {
        (0, s.setIsFavorite)(e.guild_id, e.id, !E, {
          section: d.AnalyticsSections.CONTEXT_MENU
        })
      }
    }), _ ? (0, a.jsx)(l.MenuItem, {
      id: "opt-out-category",
      label: c.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
      action: () => h()
    }) : (0, a.jsx)(l.MenuItem, {
      id: "opt-into-channel",
      label: f ? c.default.Messages.CHANNEL_OPT_OUT : c.default.Messages.CHANNEL_OPT_IN,
      action: () => p()
    })]
  })
}