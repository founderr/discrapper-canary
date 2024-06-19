var n = t(913527),
  l = t.n(n),
  a = t(749210);
s.Z = {
  async setCommunicationDisabledDuration(e, s, t, n, o) {
    let i = null != t ? l()().add(t, "s").toISOString() : null;
    await a.Z.setCommunicationDisabledUntil({
      guildId: e,
      userId: s,
      communicationDisabledUntilTimestamp: i,
      duration: t,
      reason: n,
      location: o
    })
  }
}