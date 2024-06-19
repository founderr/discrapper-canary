n(47120);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  r = n(664915),
  a = n(888369),
  o = n(358652),
  u = n(771845),
  c = n(613060),
  d = n(451478),
  h = n(816779),
  g = n(251625),
  p = n(981631),
  m = n(689938);
let C = "app-download-item",
  E = "add-server-item";

function f() {
  return !1
}

function _(e) {
  var t;
  let n = a.default.getMutableGuildStates();
  return e === p.x8Z.SERVER_DISCOVERY_BADGE && !c.Z.hasViewed(p.x8Z.SERVER_DISCOVERY_BADGE) || e !== C && e !== E && (null === (t = n[null != e ? e : "null"]) || void 0 === t ? void 0 : t.mentionCount) > 0
}
let I = (0, g.oH)((e, t, n) => ["null", ...t, ...e, E, p.x8Z.E3_SERVER_DISCOVERY_BADGE, C]);
t.Z = i.forwardRef(function(e, t) {
  let n = (0, s.Wu)([u.ZP, o.Z, a.default], () => I(u.ZP.getGuildFolders(), o.Z.getUnreadPrivateChannelIds(), a.default.getStoreChangeSentinel())),
    i = (0, s.e7)([d.Z], () => d.Z.isFocused()),
    c = (0, s.e7)([r.Z], () => r.Z.getExpandedFolders());
  return (0, l.jsx)(h.Z, {
    ...e,
    ref: t,
    items: n,
    isUnread: f,
    textUnread: m.Z.Messages.NEW,
    textMention: m.Z.Messages.NEW,
    isMentioned: _,
    animate: i,
    expandedFolders: c
  })
})