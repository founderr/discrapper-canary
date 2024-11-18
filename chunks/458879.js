var i = n(990547),
    l = n(881052),
    s = n(573261),
    a = n(981631);
async function o(e, t, n, o, r) {
    try {
        return (
            await s.Z.post({
                url: a.ANM.GUILDS,
                body: {
                    name: e,
                    icon: t,
                    channels: n.channels,
                    system_channel_id: n.system_channel_id,
                    roles: n.roles,
                    guild_template_code: n.code,
                    staff_only: !!r || void 0
                },
                trackedActionData: {
                    event: i.NetworkActionNames.GUILD_CREATE,
                    properties: {
                        template_name: n.id,
                        is_community_intent: o
                    }
                },
                rejectWithError: !1
            })
        ).body;
    } catch (e) {
        throw new l.Hx(e);
    }
}
t.Z = { createGuildFromTemplate: o };
