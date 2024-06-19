n.d(t, {
  v: function() {
    return i
  }
});
var l = n(570140);
let i = (e, t) => {
  l.Z.wait(() => {
    l.Z.dispatch({
      type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
      guildId: e,
      premiumCount: t
    })
  })
}