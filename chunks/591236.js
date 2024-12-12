var i = r(588468),
    a = r(496675),
    s = r(483360),
    o = r(877565),
    l = r(590921),
    u = r(665692),
    c = r(981631),
    d = r(185923),
    f = r(388032);
let _ = {
    sentinel: u.a4,
    matches(e, n, r, i, s) {
        var o, l;
        return i && null !== (l = null === (o = s.chatInputType.autocomplete) || void 0 === o ? void 0 : o.addReactionShortcut) && void 0 !== l && l && (a.Z.can(c.Plq.ADD_REACTIONS, e) || e.isPrivate());
    },
    queryResults(e, n, r, i, a) {
        let { emojis: o } = s.ZP.queryEmojiResults({
            query: r,
            channel: e,
            intention: d.Hz.REACTION
        });
        return { results: { emojis: o.unlocked } };
    },
    renderResults(e) {
        let {
            results: { emojis: n },
            selectedIndex: r,
            query: a,
            onHover: s,
            onClick: l
        } = e;
        return (0, o.HI)({
            query: a,
            selectedIndex: r,
            autocompletes: n,
            onHover: s,
            onClick: l,
            titleWithQuery: f.t.o1Nmpa,
            titleWithoutQuery: f.intl.string(f.t.sMOuub),
            Component: i.ZP.Emoji,
            getProps: (e) => ({
                emoji: e,
                key: e.id || e.uniqueName || e.name,
                sentinel: u.Iv
            }),
            getQuery: (e) => ''.concat(u.a4).concat(e),
            key: 'reactions'
        });
    },
    onSelect(e) {
        let {
                results: { emojis: n },
                index: r,
                options: i
            } = e,
            a = n[r];
        return i.sendMessage(h(a)), { type: l.z2.REACTION };
    }
};
function h(e) {
    return ''.concat(u.a4).concat(e.name).concat(u.jp);
}
n.Z = _;
