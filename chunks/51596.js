n.d(t, {
    $Z: function () {
        return Z;
    },
    Cp: function () {
        return U;
    },
    F_: function () {
        return O;
    },
    Se: function () {
        return y;
    },
    tF: function () {
        return H;
    },
    yC: function () {
        return x;
    }
}),
    n(757143),
    n(47120);
var c = n(570140),
    l = n(493683),
    i = n(475179),
    a = n(925549),
    r = n(287734),
    s = n(212819),
    o = n(336197),
    u = n(359110),
    _ = n(769654),
    d = n(131704),
    h = n(592125),
    E = n(283595),
    f = n(944486),
    p = n(914010),
    C = n(626135),
    T = n(777754),
    A = n(823385),
    I = n(981631),
    S = n(176505);
let R = () => Promise.resolve();
R = n(346329).playApplication;
let N = Object.freeze({
        [s.xQ.USER]: s.h8.USER,
        [s.xQ.TEXT_CHANNEL]: s.h8.TEXT_CHANNEL,
        [s.xQ.VOICE_CHANNEL]: s.h8.VOICE_CHANNEL,
        [s.xQ.GUILD]: s.h8.GUILD,
        [s.xQ.APPLICATION]: s.h8.APPLICATION
    }),
    g = new RegExp('^'.concat(s.xQ.USER, '|').concat(s.xQ.TEXT_CHANNEL, '|').concat(s.xQ.VOICE_CHANNEL, '|\\').concat(s.xQ.GUILD, '|\\').concat(s.xQ.APPLICATION));
function O(e) {
    var t, n;
    let c;
    let [l, i] = ((c = null !== (n = N[(t = e).charAt(0)]) && void 0 !== n ? n : null), [t.replace(g, ''), c]);
    return {
        query: l,
        queryMode: i
    };
}
function L(e, t) {
    let { results: n, queryMode: c, query: l, maxQueryLength: i } = A.Z.getProps(),
        a = p.Z.getGuildId(),
        r = f.Z.getChannelId(a),
        o = n[(0, s.gJ)(s.a8.DOWN, -1, n)],
        u = T.Z.isEmail(l),
        _ = T.Z.isPhoneNumber(l),
        E = T.Z.isUserTagLike(l),
        I = null != r && (0, S.AB)(r),
        R = (e) => (null == e ? null : e.type === s.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type),
        N = {
            current_channel_id: I ? void 0 : r,
            current_channel_static_route: I ? r : void 0,
            current_guild_id: a,
            query_mode: null != c ? c : 'GENERAL',
            query_length: l.length,
            max_query_length: i,
            is_email_like: u,
            is_phone_like: _,
            is_username_like: E,
            query: u || _ || E ? null : l,
            top_result_type: R(o),
            top_result_score: null != o ? o.score : null,
            num_results_total: A.Z.getResultTotals(),
            num_results_users: A.Z.getResultTotals(s.h8.USER),
            num_results_text_channels: A.Z.getResultTotals(s.h8.TEXT_CHANNEL),
            num_results_voice_channels: A.Z.getResultTotals(s.h8.VOICE_CHANNEL),
            num_results_guilds: A.Z.getResultTotals(s.h8.GUILD),
            num_results_group_dms: A.Z.getResultTotals(s.h8.GROUP_DM)
        };
    if (null != r) {
        let e = h.Z.getChannel(r);
        N.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let { type: e, score: c, record: l } = t;
        switch (((N.selected_type = R(t)), (N.selected_score = c), (N.selected_index = n.indexOf(t)), e)) {
            case s.h8.GUILD:
                N.selected_guild_id = l.id;
                break;
            case s.h8.TEXT_CHANNEL:
            case s.h8.VOICE_CHANNEL:
                l instanceof d.Sf && (N.selected_guild_id = null != l.guild_id ? l.guild_id : null), (N.selected_channel_id = l.id);
                break;
            case s.h8.GROUP_DM:
                N.selected_channel_id = l.id;
                break;
            case s.h8.USER:
                N.selected_user_id = l.id;
        }
    }
    C.default.track(e, N);
}
function m() {
    c.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function Z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    !(function (e) {
        let t;
        if (A.Z.isOpen()) return;
        let n = p.Z.getGuildId(),
            c = f.Z.getChannelId(n);
        if (null != c) {
            let e = h.Z.getChannel(c);
            t = null != e ? e.type : null;
        }
        C.default.track(I.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: c,
            current_channel_type: t
        });
    })(e),
        c.Z.dispatch({
            type: 'QUICKSWITCHER_SHOW',
            ...O(t)
        });
}
function U() {
    L(I.rMx.QUICKSWITCHER_CLOSED), m();
}
function x(e) {
    c.Z.dispatch({
        type: 'QUICKSWITCHER_SEARCH',
        ...O(e)
    });
}
function H(e) {
    c.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function y(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    m(), L(I.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let { type: d, record: f } = e,
        p = { page: I.ZY5.QUICK_SWITCHER };
    switch (d) {
        case s.h8.GUILD:
            (0, _.X)(f.id, { navigationReplace: !0 });
            break;
        case s.h8.TEXT_CHANNEL:
            null != (t = h.Z.getChannel(f.id)) &&
                (0, u.Kh)(t.id, {
                    state: { analyticsSource: p },
                    navigationReplace: !0
                });
            break;
        case s.h8.VOICE_CHANNEL:
            null != (t = h.Z.getChannel(f.id)) &&
                (n ? i.Z.updateChatOpen(f.id, !0) : r.default.selectVoiceChannel(f.id),
                (0, u.Kh)(t.id, {
                    state: { analyticsSource: p },
                    navigationReplace: !0
                }));
            break;
        case s.h8.USER:
            l.Z.openPrivateChannel([f.id], !1, !1, 'Quickswitcher'), a.Z.channelListScrollTo(I.ME, h.Z.getDMFromUserId(f.id));
            break;
        case s.h8.GROUP_DM:
            (0, u.Kh)(f.id, { navigationReplace: !0 }), a.Z.channelListScrollTo(I.ME, f.id);
            break;
        case s.h8.APPLICATION:
            let C = E.Z.getActiveLibraryApplication(f.id);
            R(f.id, C, {
                analyticsParams: {
                    source: I.Sbl.QUICK_SWITCHER,
                    location: I.Sbl.QUICK_SWITCHER
                }
            });
            break;
        case s.h8.LINK:
            (0, o.Z)(f.path, { navigationReplace: !0 });
            break;
        case s.h8.IN_APP_NAVIGATION:
            (0, o.Z)(f.path, { navigationReplace: !0 });
    }
    c.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
