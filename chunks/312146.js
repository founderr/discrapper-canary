n.d(e, {
    Ui: function () {
        return a;
    },
    p$: function () {
        return c;
    }
});
var i = n(818083),
    o = n(981631);
let r = (0, i.B)({
    kind: 'guild',
    id: '2023-03_guild_media_channel',
    label: 'Media Channel',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enables guild to create a media channel',
            config: { enabled: !0 }
        }
    ]
});
function a(t) {
    var e;
    let { enabled: n } = r.useExperiment(
        {
            guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : o.lds,
            location: '96e84c_1'
        },
        { autoTrackExposure: !0 }
    );
    return (null == t ? void 0 : t.id) != null && n;
}
let d = (0, i.B)({
    kind: 'user',
    id: '2023-04_guild_media_channel_post_preview_embed_users',
    label: 'Guild Role Subscription Users',
    defaultConfig: { enabledForUser: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enables for users Guild Media Post Preview Embeds',
            config: { enabledForUser: !0 }
        }
    ]
});
function c() {
    let { enabledForUser: t } = d.useExperiment({ location: '96e84c_2' }, { autoTrackExposure: !0 });
    return t;
}
