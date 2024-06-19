t.d(n, {
  Z: function() {
    return _
  }
}), t(653041);
var i = t(735250),
  l = t(470079),
  r = t(442837),
  a = t(481060),
  u = t(139387),
  o = t(230711),
  s = t(213459),
  d = t(434404),
  E = t(430824),
  c = t(496675),
  I = t(981631),
  T = t(689938);

function _(e) {
  let {
    user: n,
    guildId: t,
    channel: _,
    context: N
  } = e, S = E.Z.getGuild(t), A = (0, r.e7)([c.Z], () => null != S ? c.Z.can(I.Plq.MANAGE_GUILD, S) : null), p = (0, s.em)(_, !0, !0), O = (0, s.PL)(!0, !0), {
    isUserApp: h,
    isGuildApp: f
  } = l.useMemo(() => {
    var e, t, i, l;
    if ((null == n ? void 0 : n.id) == null) return {
      isGuildApp: !1,
      isUserApp: !1
    };
    let r = Object.values(null !== (i = null === (e = p.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}),
      a = Object.values(null !== (l = null === (t = O.result) || void 0 === t ? void 0 : t.sections) && void 0 !== l ? l : {});
    return {
      isGuildApp: r.some(e => {
        var t;
        return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === (null == n ? void 0 : n.id)
      }),
      isUserApp: a.some(e => {
        var t;
        return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === (null == n ? void 0 : n.id)
      })
    }
  }, [p, O, null == n ? void 0 : n.id]), M = l.useCallback(() => {
    if ((null == S ? void 0 : S.id) != null) d.Z.open(S.id, I.pNK.INTEGRATIONS), u.Z.setSection(I.b4C.APPLICATION, null == n ? void 0 : n.id)
  }, [null == n ? void 0 : n.id, null == S ? void 0 : S.id]), R = l.useCallback(() => {
    o.Z.open(I.oAB.AUTHORIZED_APPS)
  }, []), Z = N === I.IlC.POPOUT;
  if (!(null == n ? void 0 : n.bot) || !A || Z || !f && !h) return null;
  let G = [];
  return f && G.push((0, i.jsx)(a.MenuItem, {
    id: "manage-integration",
    label: T.Z.Messages.MANAGE_INTEGRATION,
    action: M
  }, "manage-integration")), h && G.push((0, i.jsx)(a.MenuItem, {
    id: "manage-authorized-app",
    label: T.Z.Messages.MANAGE_AUTHORIZED_APP,
    action: R
  }, "manage-authorized-app")), G
}