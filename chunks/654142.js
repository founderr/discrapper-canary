n(653041), n(47120), n(724458);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(239091),
    a = n(749210),
    s = n(905423),
    c = n(664915),
    u = n(888369),
    d = n(430824),
    h = n(823379),
    p = n(179809),
    m = n(652376),
    f = n(981631);
t.Z = l.memo(function (e) {
    let { folderNode: t, ...g } = e,
        { id: C, name: v, color: _, children: x } = t,
        I = x.map((e) => e.id),
        b = (0, s.Z)((e) => e.guildId),
        E = (0, r.e7)([c.Z], () => c.Z.isFolderExpanded(C)),
        S = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = d.Z.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(h.lm),
                n = 2 * f.dYL,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return ''.concat(i.join(', ')).concat(i.length < t.length ? ', ...' : '');
        })(t),
        Z = (0, m.Z)(t),
        {
            mentionCount: N,
            isMentionLowImportance: y,
            unread: T
        } = (0, r.cj)([u.default], () => ({
            mentionCount: I.map((e) => u.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: I.every((e) => u.default.getIsMentionLowImportance(e)),
            unread: I.some((e) => u.default.hasUnread(e))
        })),
        j = l.useCallback(() => {
            a.Z.toggleGuildFolderExpand(C);
        }, [C]),
        A = l.useCallback(
            (e) => {
                (0, o.jW)(e, async () => {
                    let { default: e } = await n.e('52590').then(n.bind(n, 205784));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            folderId: C,
                            folderName: v,
                            folderColor: _,
                            unread: T || N > 0
                        });
                });
            },
            [C, v, _, T, N]
        );
    return (0, i.jsx)(p.Z, {
        ...g,
        folderNode: t,
        expanded: E,
        selected: null != b && I.includes(b),
        mentionCount: N,
        isMentionLowImportance: y,
        unread: T,
        mediaState: Z,
        defaultFolderName: S,
        onExpandCollapse: j,
        onContextMenu: A
    });
});
