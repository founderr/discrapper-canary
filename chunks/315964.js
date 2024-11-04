var i = n(570140),
    r = n(142497),
    a = n(190378);
t.Z = {
    init() {
        i.Z.subscribe('VOICE_CHANNEL_SELECT', (e) => {
            let { channelId: t } = e;
            null == t && r.Kw(a.v.VOICE_PANEL_INTRODUCTION);
        });
    }
};
