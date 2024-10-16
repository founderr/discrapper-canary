n(653041), n(47120), n(724458);
var i = n(735250),
    l = n(470079),
    r = n(442837),
    a = n(239091),
    s = n(749210),
    o = n(905423),
    c = n(664915),
    u = n(888369),
    d = n(430824),
    h = n(823379),
    p = n(179809),
    f = n(652376),
    _ = n(981631);
t.Z = l.memo(function (e) {
    let { folderNode: t, ...m } = e,
        { id: g, name: C, color: I, children: E } = t,
        N = E.map((e) => e.id),
        S = (0, o.Z)((e) => e.guildId),
        v = (0, r.e7)([c.Z], () => c.Z.isFolderExpanded(g)),
        x = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = d.Z.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(h.lm),
                n = 2 * _.dYL,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return ''.concat(i.join(', ')).concat(i.length < t.length ? ', ...' : '');
        })(t),
        T = (0, f.Z)(t),
        { mentionCount: Z, unread: b } = (0, r.cj)([u.default], () => ({
            mentionCount: N.map((e) => u.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            unread: N.some((e) => u.default.hasUnread(e))
        })),
        A = l.useCallback(() => {
            s.Z.toggleGuildFolderExpand(g);
        }, [g]),
        M = l.useCallback(
            (e) => {
                (0, a.jW)(e, async () => {
                    let { default: e } = await n.e('52590').then(n.bind(n, 205784));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            folderId: g,
                            folderName: C,
                            folderColor: I,
                            unread: b || Z > 0
                        });
                });
            },
            [g, C, I, b, Z]
        );
    return (0, i.jsx)(p.Z, {
        ...m,
        folderNode: t,
        expanded: v,
        selected: null != S && N.includes(S),
        mentionCount: Z,
        unread: b,
        mediaState: T,
        defaultFolderName: x,
        onExpandCollapse: A,
        onContextMenu: M
    });
});
