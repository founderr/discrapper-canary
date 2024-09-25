n.d(t, {
    $Z: function () {
        return M;
    },
    Cp: function () {
        return P;
    },
    F_: function () {
        return y;
    },
    Se: function () {
        return x;
    },
    tF: function () {
        return w;
    },
    yC: function () {
        return U;
    }
});
var r = n(757143);
var i = n(47120);
var a = n(570140),
    o = n(493683),
    s = n(475179),
    l = n(925549),
    u = n(287734),
    c = n(212819),
    d = n(336197),
    _ = n(359110),
    E = n(769654),
    f = n(131704),
    h = n(592125),
    p = n(283595),
    m = n(944486),
    I = n(914010),
    T = n(626135),
    g = n(777754),
    S = n(823385),
    A = n(981631),
    v = n(176505);
let N = () => Promise.resolve();
N = n(346329).playApplication;
let O = Object.freeze({
        [c.xQ.USER]: c.h8.USER,
        [c.xQ.TEXT_CHANNEL]: c.h8.TEXT_CHANNEL,
        [c.xQ.VOICE_CHANNEL]: c.h8.VOICE_CHANNEL,
        [c.xQ.GUILD]: c.h8.GUILD,
        [c.xQ.APPLICATION]: c.h8.APPLICATION
    }),
    R = new RegExp('^'.concat(c.xQ.USER, '|').concat(c.xQ.TEXT_CHANNEL, '|').concat(c.xQ.VOICE_CHANNEL, '|\\').concat(c.xQ.GUILD, '|\\').concat(c.xQ.APPLICATION));
function C(e) {
    var t;
    let n = null !== (t = O[e.charAt(0)]) && void 0 !== t ? t : null;
    return [e.replace(R, ''), n];
}
function y(e) {
    let [t, n] = C(e);
    return {
        query: t,
        queryMode: n
    };
}
function b(e) {
    let t;
    if (S.Z.isOpen()) return;
    let n = I.Z.getGuildId(),
        r = m.Z.getChannelId(n);
    if (null != r) {
        let e = h.Z.getChannel(r);
        t = null != e ? e.type : null;
    }
    T.default.track(A.rMx.QUICKSWITCHER_OPENED, {
        source: e,
        current_guild_id: n,
        current_channel_id: r,
        current_channel_type: t
    });
}
function L(e, t) {
    let { results: n, queryMode: r, query: i, maxQueryLength: a } = S.Z.getProps(),
        o = I.Z.getGuildId(),
        s = m.Z.getChannelId(o),
        l = n[(0, c.gJ)(c.a8.DOWN, -1, n)],
        u = g.Z.isEmail(i),
        d = g.Z.isPhoneNumber(i),
        _ = g.Z.isUserTagLike(i),
        E = null != s && (0, v.AB)(s),
        p = (e) => (null == e ? null : e.type === c.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type),
        A = {
            current_channel_id: E ? void 0 : s,
            current_channel_static_route: E ? s : void 0,
            current_guild_id: o,
            query_mode: null != r ? r : 'GENERAL',
            query_length: i.length,
            max_query_length: a,
            is_email_like: u,
            is_phone_like: d,
            is_username_like: _,
            query: u || d || _ ? null : i,
            top_result_type: p(l),
            top_result_score: null != l ? l.score : null,
            num_results_total: S.Z.getResultTotals(),
            num_results_users: S.Z.getResultTotals(c.h8.USER),
            num_results_text_channels: S.Z.getResultTotals(c.h8.TEXT_CHANNEL),
            num_results_voice_channels: S.Z.getResultTotals(c.h8.VOICE_CHANNEL),
            num_results_guilds: S.Z.getResultTotals(c.h8.GUILD),
            num_results_group_dms: S.Z.getResultTotals(c.h8.GROUP_DM)
        };
    if (null != s) {
        let e = h.Z.getChannel(s);
        A.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: r, record: i } = t;
        switch (((A.selected_type = p(t)), (A.selected_score = r), (A.selected_index = n.indexOf(t)), e)) {
            case c.h8.GUILD:
                A.selected_guild_id = i.id;
                break;
            case c.h8.TEXT_CHANNEL:
            case c.h8.VOICE_CHANNEL:
                i instanceof f.Sf && (A.selected_guild_id = null != i.guild_id ? i.guild_id : null), (A.selected_channel_id = i.id);
                break;
            case c.h8.GROUP_DM:
                A.selected_channel_id = i.id;
                break;
            case c.h8.USER:
                A.selected_user_id = i.id;
        }
    }
    T.default.track(e, A);
}
function D() {
    a.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    b(e),
        a.Z.dispatch({
            type: 'QUICKSWITCHER_SHOW',
            ...y(t)
        });
}
function P() {
    L(A.rMx.QUICKSWITCHER_CLOSED), D();
}
function U(e) {
    a.Z.dispatch({
        type: 'QUICKSWITCHER_SEARCH',
        ...y(e)
    });
}
function w(e) {
    a.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function x(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    D(), L(A.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: r, record: i } = e,
        f = { page: A.ZY5.QUICK_SWITCHER };
    switch (r) {
        case c.h8.GUILD:
            (0, E.X)(i.id, { navigationReplace: !0 });
            break;
        case c.h8.TEXT_CHANNEL:
            null != (t = h.Z.getChannel(i.id)) &&
                (0, _.Kh)(t.id, {
                    state: { analyticsSource: f },
                    navigationReplace: !0
                });
            break;
        case c.h8.VOICE_CHANNEL:
            null != (t = h.Z.getChannel(i.id)) &&
                (n ? s.Z.updateChatOpen(i.id, !0) : u.default.selectVoiceChannel(i.id),
                (0, _.Kh)(t.id, {
                    state: { analyticsSource: f },
                    navigationReplace: !0
                }));
            break;
        case c.h8.USER:
            o.Z.openPrivateChannel([i.id], !1, !1, 'Quickswitcher'), l.Z.channelListScrollTo(A.ME, h.Z.getDMFromUserId(i.id));
            break;
        case c.h8.GROUP_DM:
            (0, _.Kh)(i.id, { navigationReplace: !0 }), l.Z.channelListScrollTo(A.ME, i.id);
            break;
        case c.h8.APPLICATION:
            let m = p.Z.getActiveLibraryApplication(i.id);
            N(i.id, m, {
                analyticsParams: {
                    source: A.Sbl.QUICK_SWITCHER,
                    location: A.Sbl.QUICK_SWITCHER
                }
            });
            break;
        case c.h8.LINK:
            (0, d.Z)(i.path, { navigationReplace: !0 });
            break;
        case c.h8.IN_APP_NAVIGATION:
            (0, d.Z)(i.path, { navigationReplace: !0 });
    }
    a.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
