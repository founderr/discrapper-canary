var a = t(990547),
  l = t(881052),
  n = t(573261),
  i = t(981631);
async function o(e, s, t, o, r) {
  try {
    return (await n.Z.post({
      url: i.ANM.GUILDS,
      body: {
        name: e,
        icon: s,
        channels: t.channels,
        system_channel_id: t.system_channel_id,
        roles: t.roles,
        guild_template_code: t.code,
        staff_only: !!r || void 0
      },
      trackedActionData: {
        event: a.NetworkActionNames.GUILD_CREATE,
        properties: {
          template_name: t.id,
          is_community_intent: o
        }
      }
    })).body
  } catch (e) {
    throw new l.Hx(e)
  }
}
s.Z = {
  createGuildFromTemplate: o
}