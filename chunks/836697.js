n.d(t, {
  Z: function() {
    return I
  }
}), n(47120), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  r = n(481060),
  a = n(110924),
  o = n(693546),
  u = n(863249),
  c = n(937111),
  d = n(914010),
  h = n(289090),
  p = n(727258),
  g = n(234383),
  m = n(179809),
  C = n(773182),
  E = n(588275),
  f = n(689938),
  _ = n(388555);

function I(e) {
  let {
    onActivate: t
  } = e, [n, I] = i.useState(!1), N = (0, s.e7)([d.Z], () => d.Z.getGuildId()), Z = (0, s.e7)([c.Z], () => c.Z.hasFetchedRequestToJoinGuilds), S = (0, g.Z)(), x = (0, a.Z)(N), L = i.useMemo(() => {
    let e = (0, p.qQ)({
      folderId: h.S.PENDING_JOIN_REQUESTS_FOLDER,
      folderName: f.Z.Messages.MEMBER_VERIFICATION_FOLDER_NAME,
      expanded: n,
      guildIds: []
    });
    for (let t of S) e.children.push((0, p.Mg)(t, e.id));
    return e
  }, [S, n]);
  i.useEffect(() => {
    n && !Z && o.Z.fetchRequestToJoinGuilds()
  }, [n, Z]);
  let T = null != N && S.includes(N);
  return (i.useEffect(() => {
    !n && T && x !== N && I(!0)
  }, [n, T, x, N]), 0 === S.length) ? null : (0, l.jsx)(C.TH, {
    onActivate: t,
    children: (0, l.jsx)(m.Z, {
      folderNode: L,
      expanded: n,
      useCircleMask: !n && !T,
      selected: T,
      draggable: !1,
      sorting: !1,
      onExpandCollapse: () => {
        I(!n), u.Z.clearCoachmark()
      },
      folderIconContent: (0, l.jsx)(r.HourglassIcon, {
        size: "custom",
        color: "currentColor",
        width: 24,
        height: 24,
        className: _.pendingIcon
      }),
      renderChildNode: function(e) {
        return e.type !== p.eD.GUILD ? null : (0, l.jsx)(E.Z, {
          guildNode: e
        }, e.id)
      }
    })
  })
}