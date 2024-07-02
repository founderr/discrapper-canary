n.d(t, {
    NX: function () {
        return _;
    },
    WS: function () {
        return d;
    },
    l5: function () {
        return c;
    },
    qB: function () {
        return E;
    }
});
var r = n(106351), i = n(442837), a = n(818083), o = n(592125), s = n(496675), l = n(231338);
let u = (0, a.B)({
    kind: 'user',
    id: '2023-08_activities_in_text',
    label: 'Activities in Text User',
    defaultConfig: {
        entryPointEnabled: !1,
        activitiesInTextEnabled: !1,
        showInOmniButtonMenu: !1,
        showNewMobileLeaveUI: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Enable Activities in Text, DM, and GDM channels',
            config: {
                entryPointEnabled: !0,
                activitiesInTextEnabled: !0,
                showInOmniButtonMenu: !0,
                showNewMobileLeaveUI: !1
            }
        },
        {
            id: 2,
            label: 'Enable Activities in Text, DM, and GDM channels with new mobile leave UI',
            config: {
                entryPointEnabled: !0,
                activitiesInTextEnabled: !0,
                showInOmniButtonMenu: !0,
                showNewMobileLeaveUI: !0
            }
        }
    ]
});
function c(e) {
    var t;
    if (null == e || void 0 === e)
        return !1;
    let n = o.Z.getChannel(e.parent_id);
    if (null != n && (null == n ? void 0 : n.type) !== r.d.GUILD_CATEGORY)
        return !1;
    return t = e.type, [
        r.d.GUILD_TEXT,
        r.d.GROUP_DM,
        r.d.DM
    ].includes(t);
}
function d(e, t, n) {
    if (null == e)
        return !1;
    let r = c(e), i = s.Z.can(l.Pl.USE_EMBEDDED_ACTIVITIES, e), a = i && s.Z.can(l.Pl.SEND_MESSAGES | l.Pl.USE_APPLICATION_COMMANDS, e);
    if ((null == e ? void 0 : e.guild_id) != null)
        return t ? a && r : i && r;
    return t ? u.getCurrentConfig({ location: n }, { autoTrackExposure: !0 }).activitiesInTextEnabled && r : r;
}
function _(e, t, n) {
    let {
            isActivitiesInTextEnabledForChannelType: r,
            channelGuildId: a,
            hasPermission: d
        } = (0, i.cj)([
            o.Z,
            s.Z
        ], () => {
            let n = o.Z.getChannel(e), r = s.Z.can(l.Pl.USE_EMBEDDED_ACTIVITIES, n), i = r && s.Z.can(l.Pl.SEND_MESSAGES | l.Pl.USE_APPLICATION_COMMANDS, n);
            return {
                isActivitiesInTextEnabledForChannelType: c(n),
                channelGuildId: null == n ? void 0 : n.guild_id,
                hasPermission: t ? i : r
            };
        }), _ = null != a, E = u.useExperiment({ location: n }, {
            autoTrackExposure: !_,
            disable: _
        });
    return _ ? d && r : t ? E.activitiesInTextEnabled && r : r;
}
function E(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.getChannel(e)), r = (0, i.e7)([s.Z], () => s.Z.can(l.Pl.USE_EMBEDDED_ACTIVITIES, n)), a = c(n), d = null == n ? void 0 : n.guild_id, _ = null != d, E = u.useExperiment({ location: t }, {
            autoTrackExposure: !_,
            disable: _
        });
    return _ ? r && a : E.showInOmniButtonMenu && a;
}
