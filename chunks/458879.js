"use strict";
s.r(t);
var l = s("990547"),
  a = s("881052"),
  i = s("573261"),
  n = s("981631");
async function d(e, t, s, d, r) {
  try {
    return (await i.default.post({
      url: n.Endpoints.GUILDS,
      body: {
        name: e,
        icon: t,
        channels: s.channels,
        system_channel_id: s.system_channel_id,
        roles: s.roles,
        guild_template_code: s.code,
        staff_only: !!r || void 0
      },
      trackedActionData: {
        event: l.NetworkActionNames.GUILD_CREATE,
        properties: {
          template_name: s.id,
          is_community_intent: d
        }
      }
    })).body
  } catch (e) {
    throw new a.APIError(e)
  }
}
t.default = {
  createGuildFromTemplate: d
}