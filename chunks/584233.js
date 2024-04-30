"use strict";
a.r(t), a.d(t, {
  doGuildOnboardingForPostAuthInvite: function() {
    return i
  }
});
var n = a("447543"),
  s = a("652898"),
  l = a("430824");
async function i(e) {
  let {
    code: t
  } = e, i = (await (0, s.default)(t)).invite;
  if (null == i || null == i.guild) return;
  if (await
    function() {
      return new Promise(e => {
        l.default.addConditionalChangeListener(() => !l.default.isLoaded() || (e(), !1))
      })
    }(), null == l.default.getGuild(i.guild.id)) return;
  let {
    default: r
  } = await Promise.resolve().then(a.bind(a, "17181"));
  await r({
    guildId: i.guild.id
  }), n.default.transitionToInvite(i)
}