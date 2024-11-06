var i = n(570140),
    r = n(142497),
    l = n(190378);
t.Z = {
    init() {
        i.Z.subscribe('VOICE_CHANNEL_SELECT', (e) => {
            let { channelId: t } = e;
            null == t && r.Kw(l.v.VOICE_PANEL_INTRODUCTION);
        });
    }
};
