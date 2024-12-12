r.d(n, {
    Om: function () {
        return o;
    },
    Qf: function () {
        return s;
    }
});
var i = r(100527);
let a = (0, r(818083).B)({
        kind: 'guild',
        id: '2023-08_guild_member_mod_view',
        label: 'Guild Member Mod View',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Guild Member Mod View',
                config: { enabled: !0 }
            }
        ]
    }),
    s = function (e) {
        let { autoTrackExposure: n = !1, disable: r = !1, location: s = i.Z.GUILD_MEMBER_MOD_VIEW } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { enabled: o } = a.getCurrentConfig(
                {
                    guildId: e,
                    location: s
                },
                {
                    autoTrackExposure: n,
                    disable: r
                }
            );
        return o;
    },
    o = function (e) {
        let { autoTrackExposure: n = !1, disable: r = !1, location: s = i.Z.GUILD_MEMBER_MOD_VIEW } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { enabled: o } = a.useExperiment(
                {
                    guildId: null != e ? e : void 0,
                    location: s
                },
                {
                    autoTrackExposure: n,
                    disable: r
                }
            );
        return o;
    };
