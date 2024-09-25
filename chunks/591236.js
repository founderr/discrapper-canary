var r = n(588468),
    i = n(496675),
    a = n(483360),
    o = n(877565),
    s = n(590921),
    l = n(665692),
    u = n(981631),
    c = n(185923),
    d = n(689938);
let _ = {
    sentinel: l.a4,
    matches(e, t, n, r, a) {
        var o, s;
        return r && null !== (s = null === (o = a.chatInputType.autocomplete) || void 0 === o ? void 0 : o.addReactionShortcut) && void 0 !== s && s && (i.Z.can(u.Plq.ADD_REACTIONS, e) || e.isPrivate());
    },
    queryResults(e, t, n, r, i) {
        let { emojis: o } = a.ZP.queryEmojiResults({
            query: n,
            channel: e,
            intention: c.Hz.REACTION
        });
        return { results: { emojis: o.unlocked } };
    },
    renderResults(e) {
        let {
            results: { emojis: t },
            selectedIndex: n,
            query: i,
            onHover: a,
            onClick: s
        } = e;
        return (0, o.HI)({
            query: i,
            selectedIndex: n,
            autocompletes: t,
            onHover: a,
            onClick: s,
            titleWithQuery: d.Z.Messages.REACTIONS_MATCHING,
            titleWithoutQuery: d.Z.Messages.EMOJI,
            Component: r.ZP.Emoji,
            getProps: (e) => ({
                emoji: e,
                key: e.id || e.uniqueName || e.name,
                sentinel: l.Iv
            }),
            getQuery: (e) => ''.concat(l.a4).concat(e),
            key: 'reactions'
        });
    },
    onSelect(e) {
        let {
                results: { emojis: t },
                index: n,
                options: r
            } = e,
            i = t[n];
        return r.sendMessage(E(i)), { type: s.z2.REACTION };
    }
};
function E(e) {
    return ''.concat(l.a4).concat(e.name).concat(l.jp);
}
t.Z = _;
