l.r(t),
    l.d(t, {
        default: function () {
            return p;
        }
    });
var n = l(200651);
l(192379);
var i = l(442837),
    d = l(481060),
    u = l(239091),
    r = l(749210),
    a = l(664915),
    o = l(771845),
    s = l(181945),
    c = l(945983),
    f = l(981631),
    m = l(388032);
function p(e) {
    var t;
    let { folderId: p, folderName: b, folderColor: g, unread: j, onSelect: x } = e,
        Z = (0, i.e7)([o.ZP], () => o.ZP.getGuildFolderById(p), [p]),
        k = (0, c.Z)(null !== (t = null == Z ? void 0 : Z.guildIds) && void 0 !== t ? t : []),
        M = (0, i.e7)([a.Z], () => a.Z.getExpandedFolders().size > 0);
    return (0, n.jsxs)(d.Menu, {
        navId: 'guild-context',
        'aria-label': m.intl.string(m.t.HpQykZ),
        onClose: u.Zy,
        onSelect: x,
        children: [
            (0, n.jsx)(d.MenuGroup, {
                children: (0, n.jsx)(d.MenuItem, {
                    id: 'mark-folder-read',
                    label: m.intl.string(m.t.thzRJC),
                    action: function () {
                        if (null == Z) return;
                        let { guildIds: e } = Z;
                        (0, s.Z)(e, f.jXE.GUILD_LIST);
                    },
                    disabled: !j
                })
            }),
            null != k ? (0, n.jsx)(d.MenuGroup, { children: k }) : null,
            (0, n.jsxs)(d.MenuGroup, {
                children: [
                    (0, n.jsx)(d.MenuItem, {
                        id: 'folder-settings',
                        label: m.intl.string(m.t.Dx7im5),
                        action: () =>
                            (0, d.openModalLazy)(async () => {
                                let { default: e } = await l.e('66915').then(l.bind(l, 662708));
                                return (t) =>
                                    (0, n.jsx)(e, {
                                        ...t,
                                        folderId: p,
                                        folderName: b,
                                        folderColor: g
                                    });
                            })
                    }),
                    M &&
                        (0, n.jsx)(d.MenuItem, {
                            id: 'folder-collapse',
                            label: m.intl.string(m.t.rCPsbm),
                            action: () => r.Z.collapseAllFolders()
                        })
                ]
            })
        ]
    });
}
