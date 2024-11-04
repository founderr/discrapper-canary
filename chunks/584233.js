n.d(t, {
    x: function () {
        return l;
    }
});
var i = n(447543),
    r = n(652898),
    a = n(430824);
async function l(e) {
    let { code: t } = e,
        l = (await (0, r.Z)(t)).invite;
    if (null == l || null == l.guild) return;
    if (
        (await (function () {
            return new Promise((e) => {
                a.Z.addConditionalChangeListener(() => !a.Z.isLoaded() || (e(), !1));
            });
        })(),
        null == a.Z.getGuild(l.guild.id))
    )
        return;
    let { default: s } = await Promise.resolve().then(n.bind(n, 17181));
    await s({ guildId: l.guild.id }), i.Z.transitionToInvite(l);
}
