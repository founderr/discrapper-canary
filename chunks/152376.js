n.d(t, {
    C1: function () {
        return T;
    },
    Mo: function () {
        return b;
    },
    QG: function () {
        return y;
    },
    XQ: function () {
        return v;
    },
    _U: function () {
        return C;
    },
    dM: function () {
        return A;
    },
    k$: function () {
        return I;
    }
}),
    n(47120);
var r = n(392711),
    i = n(524437),
    a = n(570140),
    s = n(87051),
    o = n(367907),
    l = n(962086),
    u = n(160404),
    c = n(149071),
    d = n(675478),
    f = n(592125),
    _ = n(9156),
    h = n(626135),
    p = n(630388),
    m = n(621600),
    g = n(981631),
    E = n(526761);
function v(e, t, n, r) {
    if (null == e) return;
    if (u.Z.isFullServerPreview(e)) {
        (0, l.zS)(e, n ? [t] : [], n ? [] : [t]);
        return;
    }
    let i = _.ZP.getChannelIdFlags(e, t);
    !n && (i = (0, p.mB)(i, E.ic.FAVORITED, !1));
    let s = (0, m.I)(e, t),
        d = { flags: (0, p.mB)(i, E.ic.OPT_IN_ENABLED, n) };
    c.Z.saveUserGuildSettingsBulk({ [e]: { channel_overrides: { [t]: d } } }),
        a.Z.dispatch({
            type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE',
            guildId: e,
            channelId: t,
            settings: d
        }),
        (0, m.jz)(e, t, d, s, m.UE.optedIn(n), r),
        N(e),
        h.default.track(g.rMx.CHANNEL_LIST_UPDATED, {
            ...(0, o.hH)(e),
            ...(0, o.v_)(f.Z.getChannel(t)),
            action_type: n ? 'add' : 'remove',
            location: r
        });
}
function I(e, t, n, r) {
    if (null == e) return;
    if (u.Z.isFullServerPreview(e)) {
        (0, l.zS)(e, n ? [t] : [], n ? [] : [t]), (0, l.aq)(e, { optInEnabled: !0 });
        return;
    }
    let i = _.ZP.getChannelIdFlags(e, t);
    !n && (i = (0, p.mB)(i, E.ic.FAVORITED, !1));
    let s = (0, m.I)(e, t),
        d = { flags: (0, p.mB)(i, E.ic.OPT_IN_ENABLED, n) };
    if (!_.ZP.isOptInEnabled(e)) {
        let n = (0, p.mB)(_.ZP.getGuildFlags(e), E.vc.OPT_IN_CHANNELS_ON, !0);
        c.Z.saveUserGuildSettingsBulk({
            [e]: {
                channel_overrides: { [t]: d },
                flags: n
            }
        });
    }
    a.Z.dispatch({
        type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE',
        guildId: e,
        channelId: t,
        settings: d
    }),
        (0, m.jz)(e, t, d, s, m.UE.optedIn(n), r),
        N(e),
        h.default.track(g.rMx.CHANNEL_LIST_UPDATED, {
            ...(0, o.hH)(e),
            ...(0, o.v_)(f.Z.getChannel(t)),
            action_type: n ? 'add' : 'remove',
            location: r
        });
}
async function S(e, t) {
    if (!(null == e || u.Z.isFullServerPreview(e)))
        await c.Z.saveUserGuildSettingsBulk({ [e]: { channel_overrides: t } }),
            a.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES',
                guildId: e,
                updates: t
            });
}
let T = (0, r.debounce)((e, t) => S(e, t), 1000);
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (null == e) return;
    if (u.Z.isFullServerPreview(e)) {
        (0, l.zS)(e, t, []), n && (0, l.aq)(e, { optInEnabled: !0 });
        return;
    }
    let i = {};
    if (
        (t.forEach((t) => {
            let n = _.ZP.getChannelIdFlags(e, t);
            i[t] = { flags: (0, p.mB)(n, E.ic.OPT_IN_ENABLED, !0) };
        }),
        n)
    ) {
        let t = (0, p.mB)(_.ZP.getGuildFlags(e), E.vc.OPT_IN_CHANNELS_ON, !0);
        s.Z.updateGuildAndChannelNotificationSettings(
            e,
            {
                flags: t,
                channel_overrides: i
            },
            m.ZB.OptedIn
        ),
            h.default.track(g.rMx.CHANNEL_LIST_UPDATED, {
                ...(0, o.hH)(e),
                action_type: 'add_many_and_enable_guild',
                location: r
            });
    } else
        s.Z.updateChannelOverrideSettingsBulk(e, i, m.ZB.OptedIn),
            h.default.track(g.rMx.CHANNEL_LIST_UPDATED, {
                ...(0, o.hH)(e),
                action_type: 'add_many',
                location: r
            });
}
function y(e, t, n) {
    if (u.Z.isFullServerPreview(e)) {
        (0, l.aq)(e, { optInEnabled: t });
        return;
    }
    let r = _.ZP.getGuildFlags(e);
    s.Z.updateGuildNotificationSettings(e, { flags: (0, p.mB)(r, E.vc.OPT_IN_CHANNELS_ON, t) }, m.UE.optedIn(t)),
        h.default.track(g.rMx.CHANNEL_LIST_UPDATED, {
            ...(0, o.hH)(e),
            action_type: t ? 'guild_enabled' : 'guild_disabled',
            location: n
        });
}
function A(e, t, n, r) {
    if (null == e || u.Z.isFullServerPreview(e)) return;
    let i = _.ZP.getChannelIdFlags(e, t);
    !(0, p.yE)(i, E.ic.OPT_IN_ENABLED) && n && (i = (0, p.mB)(i, E.ic.OPT_IN_ENABLED, !0)),
        s.Z.updateChannelOverrideSettings(e, t, { flags: (0, p.mB)(i, E.ic.FAVORITED, n) }, m.UE.favorited(n)),
        h.default.track(g.rMx.CHANNEL_LIST_UPDATED, {
            ...(0, o.hH)(e),
            action_type: n ? 'favorited' : 'unfavorited',
            location: r
        });
}
function N(e) {
    (0, d.PS)(e, (e) => (!(0, p.yE)(e.guildOnboardingProgress, i.nI.GUILD_NOTICE_CLEARED) || !!(0, p.yE)(e.guildOnboardingProgress, i.nI.GUILD_NOTICE_SHOWN)) && ((e.guildOnboardingProgress = (0, p.pj)(e.guildOnboardingProgress, i.nI.GUILD_NOTICE_CLEARED)), (e.guildOnboardingProgress = (0, p.mB)(e.guildOnboardingProgress, i.nI.GUILD_NOTICE_SHOWN, !1)), !0), d.fy.INFREQUENT_USER_ACTION);
}
function C(e, t) {
    a.Z.dispatch({
        type: 'DISMISS_FAVORITE_SUGGESTION',
        guildId: e,
        channelId: t
    });
}
