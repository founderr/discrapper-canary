n.d(t, {
    $Z: function () {
        return y;
    },
    Cp: function () {
        return x;
    },
    F_: function () {
        return N;
    },
    Se: function () {
        return M;
    },
    tF: function () {
        return R;
    },
    yC: function () {
        return v;
    }
}), n(757143), n(47120);
var l = n(570140), a = n(493683), i = n(475179), s = n(925549), r = n(287734), c = n(212819), o = n(336197), u = n(359110), d = n(769654), _ = n(131704), E = n(592125), h = n(283595), f = n(944486), S = n(914010), g = n(626135), I = n(777754), A = n(823385), p = n(981631), m = n(176505);
let b = () => Promise.resolve();
b = n(346329).playApplication;
let C = Object.freeze({
        [c.xQ.USER]: c.h8.USER,
        [c.xQ.TEXT_CHANNEL]: c.h8.TEXT_CHANNEL,
        [c.xQ.VOICE_CHANNEL]: c.h8.VOICE_CHANNEL,
        [c.xQ.GUILD]: c.h8.GUILD,
        [c.xQ.APPLICATION]: c.h8.APPLICATION
    }), L = new RegExp('^'.concat(c.xQ.USER, '|').concat(c.xQ.TEXT_CHANNEL, '|').concat(c.xQ.VOICE_CHANNEL, '|\\').concat(c.xQ.GUILD, '|\\').concat(c.xQ.APPLICATION));
function N(e) {
    var t, n;
    let l;
    let [a, i] = (l = null !== (n = C[(t = e).charAt(0)]) && void 0 !== n ? n : null, [
        t.replace(L, ''),
        l
    ]);
    return {
        query: a,
        queryMode: i
    };
}
function T(e, t) {
    let {
            results: n,
            queryMode: l,
            query: a,
            maxQueryLength: i
        } = A.Z.getProps(), s = S.Z.getGuildId(), r = f.Z.getChannelId(s), o = n[(0, c.gJ)(c.a8.DOWN, -1, n)], u = I.Z.isEmail(a), d = I.Z.isPhoneNumber(a), h = I.Z.isUserTagLike(a), p = null != r && (0, m.AB)(r), b = {
            current_channel_id: p ? void 0 : r,
            current_channel_static_route: p ? r : void 0,
            current_guild_id: s,
            query_mode: null != l ? l : 'GENERAL',
            query_length: a.length,
            max_query_length: i,
            is_email_like: u,
            is_phone_like: d,
            is_username_like: h,
            query: u || d || h ? null : a,
            top_result_type: null != o ? o.type : null,
            top_result_score: null != o ? o.score : null,
            num_results_total: A.Z.getResultTotals(),
            num_results_users: A.Z.getResultTotals(c.h8.USER),
            num_results_text_channels: A.Z.getResultTotals(c.h8.TEXT_CHANNEL),
            num_results_voice_channels: A.Z.getResultTotals(c.h8.VOICE_CHANNEL),
            num_results_guilds: A.Z.getResultTotals(c.h8.GUILD),
            num_results_group_dms: A.Z.getResultTotals(c.h8.GROUP_DM)
        };
    if (null != r) {
        let e = E.Z.getChannel(r);
        b.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let {
            type: e,
            score: l,
            record: a
        } = t;
        switch (b.selected_type = e, b.selected_score = l, b.selected_index = n.indexOf(t), e) {
        case c.h8.GUILD:
            b.selected_guild_id = a.id;
            break;
        case c.h8.TEXT_CHANNEL:
        case c.h8.VOICE_CHANNEL:
            a instanceof _.Sf && (b.selected_guild_id = null != a.guild_id ? a.guild_id : null), b.selected_channel_id = a.id;
            break;
        case c.h8.GROUP_DM:
            b.selected_channel_id = a.id;
            break;
        case c.h8.USER:
            b.selected_user_id = a.id;
        }
    }
    g.default.track(e, b);
}
function Z() {
    l.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND', t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    !function (e) {
        let t;
        if (A.Z.isOpen())
            return;
        let n = S.Z.getGuildId(), l = f.Z.getChannelId(n);
        if (null != l) {
            let e = E.Z.getChannel(l);
            t = null != e ? e.type : null;
        }
        g.default.track(p.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: l,
            current_channel_type: t
        });
    }(e), l.Z.dispatch({
        type: 'QUICKSWITCHER_SHOW',
        ...N(t)
    });
}
function x() {
    T(p.rMx.QUICKSWITCHER_CLOSED), Z();
}
function v(e) {
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SEARCH',
        ...N(e)
    });
}
function R(e) {
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function M(e) {
    let t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    Z(), T(p.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let {
            type: _,
            record: f
        } = e, S = { page: p.ZY5.QUICK_SWITCHER };
    switch (_) {
    case c.h8.GUILD:
        (0, d.X)(f.id, { navigationReplace: !0 });
        break;
    case c.h8.TEXT_CHANNEL:
        null != (t = E.Z.getChannel(f.id)) && (0, u.Kh)(t.id, {
            state: { analyticsSource: S },
            navigationReplace: !0
        });
        break;
    case c.h8.VOICE_CHANNEL:
        null != (t = E.Z.getChannel(f.id)) && (n ? i.Z.updateChatOpen(f.id, !0) : r.default.selectVoiceChannel(f.id), (0, u.Kh)(t.id, {
            state: { analyticsSource: S },
            navigationReplace: !0
        }));
        break;
    case c.h8.USER:
        a.Z.openPrivateChannel([f.id], !1, !1, 'Quickswitcher'), s.Z.channelListScrollTo(p.ME, E.Z.getDMFromUserId(f.id));
        break;
    case c.h8.GROUP_DM:
        (0, u.Kh)(f.id, { navigationReplace: !0 }), s.Z.channelListScrollTo(p.ME, f.id);
        break;
    case c.h8.APPLICATION:
        let g = h.Z.getActiveLibraryApplication(f.id);
        b(f.id, g, {
            analyticsParams: {
                source: p.Sbl.QUICK_SWITCHER,
                location: p.Sbl.QUICK_SWITCHER
            }
        });
        break;
    case c.h8.LINK:
        (0, o.Z)(f.path, { navigationReplace: !0 });
    }
    l.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
