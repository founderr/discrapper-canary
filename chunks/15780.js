t.d(s, {
  Z: function() {
    return S
  }
});
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(481060),
  o = t(630388),
  c = t(88658),
  E = t(695346),
  d = t(981631),
  _ = t(689938),
  T = t(331651);

function S() {
  let e = E.xq.useSetting(),
    s = i.useMemo(() => (0, c.bL)(e), [e]);
  return (0, n.jsx)(r.FormSection, {
    tag: r.FormTitleTags.H1,
    title: _.Z.Messages.FRIEND_REQUESTS,
    children: (0, n.jsxs)(r.FormSection, {
      title: _.Z.Messages.FRIEND_PERMITTED_SOURCE,
      className: T.marginBottom40,
      children: [(0, n.jsx)(r.FormSwitch, {
        className: l()(T.marginTop8, T.marginBottom20),
        value: s.all,
        onChange: e => E.xq.updateSetting(e ? d.HGf : d.HGf & ~d.SOq.NO_RELATION),
        children: _.Z.Messages.FRIEND_PERMITTED_SOURCE_ALL
      }), (0, n.jsx)(r.FormSwitch, {
        value: s.all || s.mutualFriends,
        onChange: s => E.xq.updateSetting(s ? o.pj(e, d.SOq.MUTUAL_FRIENDS) : o.M1(e, d.SOq.MUTUAL_FRIENDS, d.SOq.NO_RELATION)),
        children: _.Z.Messages.FRIEND_PERMITTED_SOURCE_MUTUAL_FRIENDS
      }), (0, n.jsx)(r.FormSwitch, {
        value: s.all || s.mutualGuilds,
        onChange: s => E.xq.updateSetting(s ? o.pj(e, d.SOq.MUTUAL_GUILDS) : o.M1(e, d.SOq.MUTUAL_GUILDS, d.SOq.NO_RELATION)),
        children: _.Z.Messages.FRIEND_PERMITTED_SOURCE_MUTUAL_GUILDS
      })]
    })
  })
}