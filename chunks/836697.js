n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(110924),
    s = n(693546),
    c = n(863249),
    u = n(937111),
    d = n(914010),
    h = n(289090),
    p = n(727258),
    m = n(234383),
    f = n(179809),
    g = n(773182),
    C = n(588275),
    _ = n(388032),
    v = n(496657);
function x(e) {
    let { onActivate: t } = e,
        [n, x] = l.useState(!1),
        I = (0, r.e7)([d.Z], () => d.Z.getGuildId()),
        b = (0, r.e7)([u.Z], () => u.Z.hasFetchedRequestToJoinGuilds),
        S = (0, m.Z)(),
        E = (0, o.Z)(I),
        N = l.useMemo(() => {
            let e = (0, p.qQ)({
                folderId: h.S.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: _.intl.string(_.t['scsU+v']),
                expanded: n,
                guildIds: []
            });
            for (let t of S) e.children.push((0, p.Mg)(t, e.id));
            return e;
        }, [S, n]);
    l.useEffect(() => {
        n && !b && s.Z.fetchRequestToJoinGuilds();
    }, [n, b]);
    let Z = null != I && S.includes(I);
    return (l.useEffect(() => {
        !n && Z && E !== I && x(!0);
    }, [n, Z, E, I]),
    0 === S.length)
        ? null
        : (0, i.jsx)(g.TH, {
              onActivate: t,
              children: (0, i.jsx)(f.Z, {
                  folderNode: N,
                  expanded: n,
                  useCircleMask: !n && !Z,
                  selected: Z,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      x(!n), c.ZP.clearCoachmark();
                  },
                  folderIconContent: (0, i.jsx)(a.HourglassIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: v.pendingIcon
                  }),
                  renderChildNode: function (e) {
                      return e.type !== p.eD.GUILD ? null : (0, i.jsx)(C.Z, { guildNode: e }, e.id);
                  }
              })
          });
}
