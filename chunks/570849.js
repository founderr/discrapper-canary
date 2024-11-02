n.d(t, {
    l: function () {
        return s;
    },
    u: function () {
        return r;
    }
});
var a = n(544891),
    l = n(570140),
    i = n(981631);
function s(e, t) {
    l.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS',
        selectedTemplate: e,
        guildId: t
    });
}
async function r(e) {
    let t = (await a.tn.get({ url: i.ANM.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e) })).body;
    null != t.templates &&
        l.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES',
            templates: t.templates,
            guildId: e
        });
}
