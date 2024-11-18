n.d(t, {
    l: function () {
        return r;
    },
    u: function () {
        return s;
    }
});
var a = n(544891),
    l = n(570140),
    i = n(981631);
function r(e, t) {
    l.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS',
        selectedTemplate: e,
        guildId: t
    });
}
async function s(e) {
    let t = (
        await a.tn.get({
            url: i.ANM.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e),
            rejectWithError: !1
        })
    ).body;
    null != t.templates &&
        l.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES',
            templates: t.templates,
            guildId: e
        });
}
