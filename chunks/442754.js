t.d(n, {
  Z: function() {
    return _
  }
});
var a = t(735250);
t(470079);
var i = t(442837),
  l = t(481060),
  u = t(362658),
  r = t(152376),
  s = t(398758),
  o = t(9156),
  c = t(981631),
  d = t(689938);

function _(e) {
  let {
    isFavoritesPerk: n
  } = (0, u.z)("useChannelOptInItems"), t = (0, s.DM)(e.guild_id), _ = (0, i.e7)([o.ZP], () => o.ZP.isChannelOptedIn(e.guild_id, e.id)), E = (0, i.e7)([o.ZP], () => null != e.parent_id && o.ZP.isChannelOptedIn(e.guild_id, e.parent_id)), N = (0, i.e7)([o.ZP], () => o.ZP.isFavorite(e.guild_id, e.id)), Z = () => {
    (0, r.XQ)(e.guild_id, e.id, !_, {
      section: c.jXE.CONTEXT_MENU
    })
  }, M = () => {
    null != e.parent_id && (0, r.XQ)(e.guild_id, e.parent_id, !1, {
      section: c.jXE.CONTEXT_MENU
    })
  };
  if (!t || e.isThread()) return null;
  if (e.isCategory()) return (0, a.jsx)(l.MenuItem, {
    id: "opt-into-category",
    label: _ ? d.Z.Messages.CHANNEL_OPT_OUT : d.Z.Messages.CHANNEL_OPT_IN,
    action: () => Z()
  });
  let p = N ? d.Z.Messages.REMOVE_FAVORITE : d.Z.Messages.ADD_FAVORITE,
    C = N ? d.Z.Messages.UNPIN_CHANNEL : d.Z.Messages.PIN_CHANNEL_TO_TOP;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.MenuItem, {
      id: "opt-in-favorite-channel",
      label: n ? C : p,
      action: () => {
        (0, r.dM)(e.guild_id, e.id, !N, {
          section: c.jXE.CONTEXT_MENU
        })
      }
    }), E ? (0, a.jsx)(l.MenuItem, {
      id: "opt-out-category",
      label: d.Z.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
      action: () => M()
    }) : (0, a.jsx)(l.MenuItem, {
      id: "opt-into-channel",
      label: _ ? d.Z.Messages.CHANNEL_OPT_OUT : d.Z.Messages.CHANNEL_OPT_IN,
      action: () => Z()
    })]
  })
}