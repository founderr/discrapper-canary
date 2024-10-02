n.d(t, {
    C1: function () {
        return v;
    },
    Mo: function () {
        return N;
    },
    QG: function () {
        return R;
    },
    XQ: function () {
        return g;
    },
    _U: function () {
        return L;
    },
    dM: function () {
        return C;
    },
    k$: function () {
        return S;
    }
});
var r = n(47120);
var i = n(392711);
var a = n(524437),
    o = n(570140),
    s = n(87051),
    l = n(367907),
    u = n(962086),
    c = n(160404),
    d = n(149071),
    _ = n(675478),
    E = n(592125),
    f = n(9156),
    h = n(626135),
    p = n(630388),
    m = n(621600),
    I = n(981631),
    T = n(526761);
function g(e, t, n, r) {
    if (null == e) return;
    if (c.Z.isFullServerPreview(e)) {
        (0, u.zS)(e, n ? [t] : [], n ? [] : [t]);
        return;
    }
    let i = f.ZP.getChannelIdFlags(e, t);
    !n && (i = (0, p.mB)(i, T.ic.FAVORITED, !1));
    let a = (0, m.I)(e, t),
        s = { flags: (0, p.mB)(i, T.ic.OPT_IN_ENABLED, n) },
        _ = { channel_overrides: { [t]: s } };
    d.Z.saveUserGuildSettingsBulk({ [e]: _ }),
        o.Z.dispatch({
            type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE',
            guildId: e,
            channelId: t,
            settings: s
        }),
        (0, m.jz)(e, t, s, a, m.UE.optedIn(n), r),
        y(e),
        h.default.track(I.rMx.CHANNEL_LIST_UPDATED, {
            ...(0, l.hH)(e),
            ...(0, l.v_)(E.Z.getChannel(t)),
            action_type: n ? 'add' : 'remove',
            location: r
        });
}
function S(e, t, n, r) {
    if (null == e) return;
    if (c.Z.isFullServerPreview(e)) {
        (0, u.zS)(e, n ? [t] : [], n ? [] : [t]), (0, u.aq)(e, { optInEnabled: !0 });
        return;
    }
    let i = f.ZP.getChannelIdFlags(e, t);
    !n && (i = (0, p.mB)(i, T.ic.FAVORITED, !1));
    let a = (0, m.I)(e, t),
        s = { flags: (0, p.mB)(i, T.ic.OPT_IN_ENABLED, n) };
    if (!f.ZP.isOptInEnabled(e)) {
        let n = (0, p.mB)(f.ZP.getGuildFlags(e), T.vc.OPT_IN_CHANNELS_ON, !0);
        d.Z.saveUserGuildSettingsBulk({
            [e]: {
                channel_overrides: { [t]: s },
                flags: n
            }
        });
    }
    o.Z.dispatch({
        type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE',
        guildId: e,
        channelId: t,
        settings: s
    }),
        (0, m.jz)(e, t, s, a, m.UE.optedIn(n), r),
        y(e),
        h.default.track(I.rMx.CHANNEL_LIST_UPDATED, {
            ...(0, l.hH)(e),
            ...(0, l.v_)(E.Z.getChannel(t)),
            action_type: n ? 'add' : 'remove',
            location: r
        });
}
async function A(e, t) {
    if (null == e || c.Z.isFullServerPreview(e)) return;
    let n = { channel_overrides: t };
    await d.Z.saveUserGuildSettingsBulk({ [e]: n }),
        o.Z.dispatch({
            type: 'USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES',
            guildId: e,
            updates: t
        });
}
let v = (0, i.debounce)((e, t) => A(e, t), 1000);
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (null == e) return;
    if (c.Z.isFullServerPreview(e)) {
        (0, u.zS)(e, t, []), n && (0, u.aq)(e, { optInEnabled: !0 });
        return;
    }
    let i = {};
    if (
        (t.forEach((t) => {
            let n = f.ZP.getChannelIdFlags(e, t);
            i[t] = { flags: (0, p.mB)(n, T.ic.OPT_IN_ENABLED, !0) };
        }),
        n)
    ) {
        let t = (0, p.mB)(f.ZP.getGuildFlags(e), T.vc.OPT_IN_CHANNELS_ON, !0);
        s.Z.updateGuildAndChannelNotificationSettings(
            e,
            {
                flags: t,
                channel_overrides: i
            },
            m.ZB.OptedIn
        ),
            h.default.track(I.rMx.CHANNEL_LIST_UPDATED, {
                ...(0, l.hH)(e),
                action_type: 'add_many_and_enable_guild',
                location: r
            });
    } else
        s.Z.updateChannelOverrideSettingsBulk(e, i, m.ZB.OptedIn),
            h.default.track(I.rMx.CHANNEL_LIST_UPDATED, {
                ...(0, l.hH)(e),
                action_type: 'add_many',
                location: r
            });
}
function O(e, t, n) {
    if (null == e) return;
    if (ImpersonateStore.isFullServerPreview(e)) {
        updateImpersonatedChannels(e, [], t);
        return;
    }
    let r = {};
    t.forEach((t) => {
        let n = UserGuildSettingsStore.getChannelIdFlags(e, t);
        r[t] = { flags: setFlag(n, ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !1) };
    }),
        NotificationSettingsModalActionCreators.updateChannelOverrideSettingsBulk(e, r, NotificationLabels.OptedOut),
        AnalyticsUtils.track(AnalyticEvents.CHANNEL_LIST_UPDATED, {
            ...collectGuildAnalyticsMetadata(e),
            action_type: 'remove_many',
            location: n
        });
}
function R(e, t, n) {
    if (c.Z.isFullServerPreview(e)) {
        (0, u.aq)(e, { optInEnabled: t });
        return;
    }
    let r = f.ZP.getGuildFlags(e);
    s.Z.updateGuildNotificationSettings(e, { flags: (0, p.mB)(r, T.vc.OPT_IN_CHANNELS_ON, t) }, m.UE.optedIn(t)),
        h.default.track(I.rMx.CHANNEL_LIST_UPDATED, {
            ...(0, l.hH)(e),
            action_type: t ? 'guild_enabled' : 'guild_disabled',
            location: n
        });
}
function C(e, t, n, r) {
    if (null == e || c.Z.isFullServerPreview(e)) return;
    let i = f.ZP.getChannelIdFlags(e, t);
    !(0, p.yE)(i, T.ic.OPT_IN_ENABLED) && n && (i = (0, p.mB)(i, T.ic.OPT_IN_ENABLED, !0)),
        s.Z.updateChannelOverrideSettings(e, t, { flags: (0, p.mB)(i, T.ic.FAVORITED, n) }, m.UE.favorited(n)),
        h.default.track(I.rMx.CHANNEL_LIST_UPDATED, {
            ...(0, l.hH)(e),
            action_type: n ? 'favorited' : 'unfavorited',
            location: r
        });
}
function y(e) {
    (0, _.PS)(e, (e) => (!(0, p.yE)(e.guildOnboardingProgress, a.nI.GUILD_NOTICE_CLEARED) || !!(0, p.yE)(e.guildOnboardingProgress, a.nI.GUILD_NOTICE_SHOWN)) && ((e.guildOnboardingProgress = (0, p.pj)(e.guildOnboardingProgress, a.nI.GUILD_NOTICE_CLEARED)), (e.guildOnboardingProgress = (0, p.mB)(e.guildOnboardingProgress, a.nI.GUILD_NOTICE_SHOWN, !1)), !0), _.fy.INFREQUENT_USER_ACTION);
}
function L(e, t) {
    o.Z.dispatch({
        type: 'DISMISS_FAVORITE_SUGGESTION',
        guildId: e,
        channelId: t
    });
}
