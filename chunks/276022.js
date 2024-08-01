t.d(e, {
  Z: function() {
return A;
  }
}), t(653041);
var i = t(735250),
  l = t(470079),
  u = t(442837),
  r = t(481060),
  a = t(139387),
  s = t(230711),
  d = t(213459),
  o = t(434404),
  c = t(430824),
  _ = t(496675),
  E = t(981631),
  f = t(689938);

function A(n) {
  let {
user: e,
guildId: t,
channel: A,
context: T
  } = n, I = c.Z.getGuild(t), p = (0, u.e7)([_.Z], () => null != I ? _.Z.can(E.Plq.MANAGE_GUILD, I) : null), N = (0, d.em)(A, !0, !0), S = (0, d.PL)(!0, !0), {
isUserApp: h,
isGuildApp: M
  } = l.useMemo(() => {
var n, t, i, l;
if ((null == e ? void 0 : e.id) == null)
  return {
    isGuildApp: !1,
    isUserApp: !1
  };
let u = Object.values(null !== (i = null === (n = N.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {}),
  r = Object.values(null !== (l = null === (t = S.result) || void 0 === t ? void 0 : t.sections) && void 0 !== l ? l : {});
return {
  isGuildApp: u.some(n => {
    var t;
    return (null === (t = n.descriptor.application) || void 0 === t ? void 0 : t.id) === (null == e ? void 0 : e.id);
  }),
  isUserApp: r.some(n => {
    var t;
    return (null === (t = n.descriptor.application) || void 0 === t ? void 0 : t.id) === (null == e ? void 0 : e.id);
  })
};
  }, [
N,
S,
null == e ? void 0 : e.id
  ]), O = l.useCallback(() => {
if ((null == I ? void 0 : I.id) != null)
  o.Z.open(I.id, E.pNK.INTEGRATIONS), a.Z.setSection(E.b4C.APPLICATION, null == e ? void 0 : e.id);
  }, [
null == e ? void 0 : e.id,
null == I ? void 0 : I.id
  ]), m = l.useCallback(() => {
s.Z.open(E.oAB.AUTHORIZED_APPS);
  }, []), g = T === E.IlC.POPOUT;
  if (!(null == e ? void 0 : e.bot) || !p || g || !M && !h)
return null;
  let v = [];
  return M && v.push((0, i.jsx)(r.MenuItem, {
id: 'manage-integration',
label: f.Z.Messages.MANAGE_INTEGRATION,
action: O
  }, 'manage-integration')), h && v.push((0, i.jsx)(r.MenuItem, {
id: 'manage-authorized-app',
label: f.Z.Messages.MANAGE_AUTHORIZED_APP,
action: m
  }, 'manage-authorized-app')), v;
}