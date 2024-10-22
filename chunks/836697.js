n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(110924),
    o = n(693546),
    c = n(863249),
    u = n(937111),
    d = n(914010),
    h = n(289090),
    p = n(727258),
    f = n(234383),
    _ = n(179809),
    m = n(773182),
    g = n(588275),
    C = n(689938),
    I = n(496657);
function E(e) {
    let { onActivate: t } = e,
        [n, E] = l.useState(!1),
        N = (0, a.e7)([d.Z], () => d.Z.getGuildId()),
        x = (0, a.e7)([u.Z], () => u.Z.hasFetchedRequestToJoinGuilds),
        S = (0, f.Z)(),
        v = (0, s.Z)(N),
        Z = l.useMemo(() => {
            let e = (0, p.qQ)({
                folderId: h.S.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: C.Z.Messages.MEMBER_VERIFICATION_FOLDER_NAME,
                expanded: n,
                guildIds: []
            });
            for (let t of S) e.children.push((0, p.Mg)(t, e.id));
            return e;
        }, [S, n]);
    l.useEffect(() => {
        n && !x && o.Z.fetchRequestToJoinGuilds();
    }, [n, x]);
    let T = null != N && S.includes(N);
    return (l.useEffect(() => {
        !n && T && v !== N && E(!0);
    }, [n, T, v, N]),
    0 === S.length)
        ? null
        : (0, i.jsx)(m.TH, {
              onActivate: t,
              children: (0, i.jsx)(_.Z, {
                  folderNode: Z,
                  expanded: n,
                  useCircleMask: !n && !T,
                  selected: T,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      E(!n), c.ZP.clearCoachmark();
                  },
                  folderIconContent: (0, i.jsx)(r.HourglassIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: I.pendingIcon
                  }),
                  renderChildNode: function (e) {
                      return e.type !== p.eD.GUILD ? null : (0, i.jsx)(g.Z, { guildNode: e }, e.id);
                  }
              })
          });
}
