var r = n(735250);
n(470079);
var i = n(570140),
    a = n(367907),
    o = n(998698),
    s = n(895924),
    l = n(588468),
    u = n(285651),
    c = n(268350),
    d = n(926491),
    _ = n(373228),
    E = n(419922),
    f = n(483360),
    h = n(877565),
    p = n(590921),
    m = n(981631),
    I = n(689938);
let T = 8,
    g = {
        results: {
            command: null,
            stickers: []
        }
    };
function S(e, t) {
    return (0, r.jsx)(E.ZP, {
        sticker: e,
        isInteracting: t,
        size: 40
    });
}
let A = {
    stores: [d.Z],
    matches(e, t, n, r, i) {
        var a;
        return i.commands !== p.L8.DISABLED && i.commands !== p.L8.OLD_BUILT_INS && (null === (a = o.Z.getActiveCommand(e.id)) || void 0 === a ? void 0 : a.integrationType) === m.q9n.STICKER && o.Z.getOptionStates(e.id).query.hasValue;
    },
    queryResults(e, t, n, r) {
        var i;
        let a = null === (i = o.Z.getActiveCommand(e.id)) || void 0 === i ? void 0 : i.untranslatedName;
        if (null == a) return g;
        let s = [];
        (0, c.$p)();
        let l = f.ZP.queryStickers([n], !0, [e, (e, t) => t === u.eb.SENDABLE]),
            d = Math.max(T);
        return {
            results: {
                command: a,
                stickers: (s = l.slice(0, d))
            },
            metadata: { numStickerResults: s.length }
        };
    },
    renderResults(e) {
        let {
            results: { stickers: t },
            selectedIndex: n,
            query: i,
            onHover: a,
            onClick: o
        } = e;
        return (0, r.jsx)(r.Fragment, {
            children: (0, h.HI)({
                query: i,
                selectedIndex: n,
                autocompletes: t,
                onHover: a,
                onClick: o,
                titleWithQuery: I.Z.Messages.STICKERS_MATCHING,
                titleWithoutQuery: I.Z.Messages.STICKER,
                Component: l.ZP.Sticker,
                getProps: (e) => {
                    let { comparator: t, sticker: n } = e;
                    return {
                        renderSticker: S,
                        queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                        sticker: n,
                        key: n.id
                    };
                },
                getQuery: (e) => e,
                key: 'stickers'
            })
        });
    },
    onSelect(e) {
        let t,
            {
                results: { command: n, stickers: r },
                index: l,
                options: u,
                channel: c,
                guild: d,
                queryText: E
            } = e;
        if (null == n || l >= r.length) return { type: null };
        let f = o.Z.getActiveCommand(c.id);
        (null == f ? void 0 : f.inputType) === s.iw.BUILT_IN_INTEGRATION &&
            (i.Z.dispatch({
                type: 'APPLICATION_COMMAND_USED',
                context: {
                    channel: c,
                    guild: d
                },
                command: f,
                commandOrigin: s.bB.CHAT
            }),
            a.ZP.trackWithMetadata(m.rMx.APPLICATION_COMMAND_USED, {
                command_id: f.id,
                application_id: f.applicationId,
                command_type: f.type,
                source: o.Z.getSource(c.id)
            }));
        let h = r[l];
        return (
            u.sendSticker(h.sticker, _.V0.BUILT_IN_INTEGRATION),
            h.sticker.type === _.n0.GUILD && (t = h.sticker.guild_id),
            a.ZP.trackWithMetadata(m.rMx.SEARCH_RESULT_SELECTED, {
                load_id: h.sticker.id,
                search_type: m.aib.STICKER,
                source_object: '/'.concat(n),
                total_results: r.length,
                index_num: l,
                expression_guild_id: t,
                sticker_id: h.sticker.id,
                query: E
            }),
            {
                type: p.z2.STICKER,
                metadata: {
                    numStickerResults: r.length,
                    stickerId: h.sticker.id
                }
            }
        );
    }
};
t.Z = A;
