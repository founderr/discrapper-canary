n.d(t, {
    m: function () {
        return l;
    }
});
var r = n(454585),
    i = n(551452),
    a = n(532901);
let o = {
        ...r.Z.guildEventRules.link,
        react: (0, a.Z)({
            enableBuildOverrides: !1,
            mustConfirmExternalLink: !0
        }).react
    },
    s = {
        ...r.Z.guildEventRules.channelMention,
        react: (0, i.Z)({
            enableBuildOverrides: !1,
            shouldCloseDefaultModals: !0,
            shouldStopPropagation: !0
        }).react
    },
    l = r.Z.reactParserFor({
        ...r.Z.guildEventRules,
        link: o,
        channelMention: s
    });
