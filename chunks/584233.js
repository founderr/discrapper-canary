"use strict";
n.r(t), n.d(t, {
  doGuildOnboardingForPostAuthInvite: function() {
    return l
  }
});
var a = n("447543"),
  s = n("652898"),
  i = n("430824");
async function l(e) {
  let {
    code: t
  } = e, l = (await (0, s.default)(t)).invite;
  if (null == l || null == l.guild) return;
  if (await
    function() {
      return new Promise(e => {
        i.default.addConditionalChangeListener(() => !i.default.isLoaded() || (e(), !1))
      })
    }(), null == i.default.getGuild(l.guild.id)) return;
  let {
    default: r
  } = await Promise.resolve().then(n.bind(n, "17181"));
  await r({
    guildId: l.guild.id
  }), a.default.transitionToInvite(l)
}