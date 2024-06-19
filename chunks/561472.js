n(47120);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(998698),
  r = n(933557),
  o = n(703558),
  c = n(731290),
  u = n(607744),
  d = n(819640),
  h = n(496675),
  m = n(699516),
  p = n(594174),
  E = n(585483),
  g = n(127654),
  f = n(205822),
  C = n(731994),
  _ = n(981631),
  I = n(689938);
t.Z = function(e) {
  let {
    className: t,
    style: n,
    channel: x,
    draftType: T
  } = e, [N, Z] = i.useState(!0), S = (0, s.e7)([d.Z], () => d.Z.hasLayers()), v = (0, s.e7)([h.Z], () => null != x && h.Z.can(_.Plq.ATTACH_FILES, x), [x]), A = null != (0, s.e7)([a.Z], () => a.Z.getActiveCommand(x.id)), M = x.getGuildId(), R = T === o.d.FirstThreadMessage, j = (0, s.e7)([p.default], () => {
    var e;
    return !0 == !(null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed)
  }), L = (0, s.e7)([c.Z], () => c.Z.didAgree(M)) && !j, O = i.useMemo(() => !S && (x.isPrivate() && !x.isManaged() || null != M && (!x.isNSFW() || L) && v && u.Z.canChatInGuild(M)), [v, L, x, M, S]), P = R ? _.TPd.GUILD_THREADS_ONLY.has(x.type) ? I.Z.Messages.UPLOAD_TO_NEW_POST : I.Z.Messages.UPLOAD_TO_NEW_THREAD : N ? I.Z.Messages.UPLOAD_TO.format({
    destination: (0, r.F6)(x, p.default, m.Z, !0)
  }) : I.Z.Messages.UPLOAD_AREA_TITLE_NO_CONFIRMATION;
  return A || !O ? null : (0, l.jsx)(f.Z, {
    className: t,
    style: n,
    title: P,
    description: R ? I.Z.Messages.UPLOAD_AREA_NEW_THREAD_HELP : I.Z.Messages.UPLOAD_AREA_HELP,
    icons: C.J6,
    onDrop: e => {
      if (A) return !1;
      O && null != x && ((0, g.d)(e, x, T, {
        requireConfirm: N,
        showLargeMessageDialog: !1
      }), E.S.dispatchToLastSubscribed(_.CkL.TEXTAREA_FOCUS))
    },
    onDragClear: () => Z(!0),
    onDragOver: e => {
      if (A) return !1;
      !R && e.shiftKey === N && Z(!e.shiftKey)
    }
  })
}