i.d(n, {
  Z: function() {
return f;
  }
}), i(653041);
var t = i(735250),
  l = i(470079),
  s = i(442837),
  o = i(481060),
  a = i(139387),
  u = i(230711),
  d = i(213459),
  r = i(434404),
  c = i(430824),
  Z = i(496675),
  M = i(981631),
  E = i(689938);

function f(e) {
  let {
user: n,
guildId: i,
channel: f,
context: _
  } = e, A = c.Z.getGuild(i), I = (0, s.e7)([Z.Z], () => null != A ? Z.Z.can(M.Plq.MANAGE_GUILD, A) : null), N = (0, d.em)(f, !0, !0), g = (0, d.PL)(!0, !0), {
isUserApp: v,
isGuildApp: b
  } = l.useMemo(() => {
var e, i, t, l;
if ((null == n ? void 0 : n.id) == null)
  return {
    isGuildApp: !1,
    isUserApp: !1
  };
let s = Object.values(null !== (t = null === (e = N.result) || void 0 === e ? void 0 : e.sections) && void 0 !== t ? t : {}),
  o = Object.values(null !== (l = null === (i = g.result) || void 0 === i ? void 0 : i.sections) && void 0 !== l ? l : {});
return {
  isGuildApp: s.some(e => {
    var i;
    return (null === (i = e.descriptor.application) || void 0 === i ? void 0 : i.id) === (null == n ? void 0 : n.id);
  }),
  isUserApp: o.some(e => {
    var i;
    return (null === (i = e.descriptor.application) || void 0 === i ? void 0 : i.id) === (null == n ? void 0 : n.id);
  })
};
  }, [
N,
g,
null == n ? void 0 : n.id
  ]), m = l.useCallback(() => {
if ((null == A ? void 0 : A.id) != null)
  r.Z.open(A.id, M.pNK.INTEGRATIONS), a.Z.setSection(M.b4C.APPLICATION, null == n ? void 0 : n.id);
  }, [
null == n ? void 0 : n.id,
null == A ? void 0 : A.id
  ]), p = l.useCallback(() => {
u.Z.open(M.oAB.AUTHORIZED_APPS);
  }, []), x = _ === M.IlC.POPOUT;
  if (!(null == n ? void 0 : n.bot) || !I || x || !b && !v)
return null;
  let O = [];
  return b && O.push((0, t.jsx)(o.MenuItem, {
id: 'manage-integration',
label: E.Z.Messages.MANAGE_INTEGRATION,
action: m
  }, 'manage-integration')), v && O.push((0, t.jsx)(o.MenuItem, {
id: 'manage-authorized-app',
label: E.Z.Messages.MANAGE_AUTHORIZED_APP,
action: p
  }, 'manage-authorized-app')), O;
}