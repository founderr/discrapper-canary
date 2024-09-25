n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120),
    n(653041);
var r = n(470079),
    i = n(468988),
    l = n(817460),
    s = n(570533),
    a = n(689938);
function o(e) {
    let { includeFlairAsBenefit: t, listing: n, guildId: o } = e,
        u = 0,
        c = 0;
    for (let e of n.role_benefits.benefits) (0, l.rC)(e) ? (u += 1) : (0, l.lL)(e) && (c += 1);
    let d = n.role_id,
        h = (0, s.Z)(o).filter((e) => e.roles.includes(d)).length;
    return r.useMemo(() => {
        let e = [];
        return !0 === t && e.push(a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_VISUAL_FLAIR), 0 !== u && e.push(a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({ channelCount: u })), 0 !== c && e.push(a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({ benefitCount: c })), 0 !== h && e.push(a.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EMOJI_SUBTITLE.format({ emojiCount: h })), new i.Z(e);
    }, [u, c, h, t]);
}
