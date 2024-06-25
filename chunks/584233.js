n.d(t, {
  x: function() {
    return a
  }
});
var s = n(447543),
  i = n(652898),
  l = n(430824);
async function a(e) {
  let {
    code: t
  } = e, a = (await (0, i.Z)(t)).invite;
  if (null == a || null == a.guild) return;
  if (await
    function() {
      return new Promise(e => {
        l.Z.addConditionalChangeListener(() => !l.Z.isLoaded() || (e(), !1))
      })
    }(), null == l.Z.getGuild(a.guild.id)) return;
  let {
    default: r
  } = await Promise.resolve().then(n.bind(n, 17181));
  await r({
    guildId: a.guild.id
  }), s.Z.transitionToInvite(a)
}