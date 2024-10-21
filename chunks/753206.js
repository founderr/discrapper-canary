var r = t(200651),
    i = t(192379),
    l = t(120356),
    o = t.n(l),
    u = t(628238),
    s = t(492593),
    a = t(25015),
    c = t(963550),
    d = t(845080),
    _ = t(916315);
n.Z = i.memo(function (e) {
    var n;
    let { message: t, channel: i, compact: l, className: E, isGroupStart: f, hideSimpleEmbedContent: I = !0, disableInteraction: S } = e,
        p = (0, u.A)((null !== (n = t.editedTimestamp) && void 0 !== n ? n : t.timestamp).valueOf()),
        { content: T } = (0, a.Z)(t, {
            hideSimpleEmbedContent: I,
            allowList: p,
            allowHeading: p,
            allowLinks: !0,
            previewLinkTarget: !0
        });
    return (0, r.jsx)(s.Z, {
        compact: l,
        className: o()(E, {
            [_.message]: !0,
            [_.cozyMessage]: !l,
            [_.groupStart]: f
        }),
        childrenHeader: (0, d.Z)({
            ...e,
            channel: i,
            guildId: void 0
        }),
        childrenMessageContent: (0, c.Z)(e, T),
        disableInteraction: S
    });
});
