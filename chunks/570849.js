t.d(s, {
  l: function() {
    return i
  },
  u: function() {
    return r
  }
});
var a = t(544891),
  n = t(570140),
  l = t(981631);

function i(e, s) {
  n.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS",
    selectedTemplate: e,
    guildId: s
  })
}
async function r(e) {
  let s = (await a.tn.get({
    url: l.ANM.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e)
  })).body;
  null != s.templates && n.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES",
    templates: s.templates,
    guildId: e
  })
}