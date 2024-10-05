n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120),
    n(653041);
var i = n(735250),
    l = n(470079),
    r = n(442837),
    a = n(481060),
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
        N = (0, r.e7)([d.Z], () => d.Z.getGuildId()),
        S = (0, r.e7)([u.Z], () => u.Z.hasFetchedRequestToJoinGuilds),
        x = (0, f.Z)(),
        v = (0, s.Z)(N),
        T = l.useMemo(() => {
            let e = (0, p.qQ)({
                folderId: h.S.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: C.Z.Messages.MEMBER_VERIFICATION_FOLDER_NAME,
                expanded: n,
                guildIds: []
            });
            for (let t of x) e.children.push((0, p.Mg)(t, e.id));
            return e;
        }, [x, n]);
    l.useEffect(() => {
        n && !S && o.Z.fetchRequestToJoinGuilds();
    }, [n, S]);
    let Z = null != N && x.includes(N);
    return (l.useEffect(() => {
        !n && Z && v !== N && E(!0);
    }, [n, Z, v, N]),
    0 === x.length)
        ? null
        : (0, i.jsx)(m.TH, {
              onActivate: t,
              children: (0, i.jsx)(_.Z, {
                  folderNode: T,
                  expanded: n,
                  useCircleMask: !n && !Z,
                  selected: Z,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      E(!n), c.ZP.clearCoachmark();
                  },
                  folderIconContent: (0, i.jsx)(a.HourglassIcon, {
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
