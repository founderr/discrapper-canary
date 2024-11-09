n.d(t, {
    NK: function () {
        return A;
    },
    R6: function () {
        return b;
    },
    ok: function () {
        return T;
    },
    vN: function () {
        return y;
    }
});
var r = n(512722),
    i = n.n(r),
    a = n(392711),
    s = n.n(a),
    o = n(570140),
    l = n(430742),
    u = n(40851),
    c = n(367907),
    d = n(727429),
    f = n(703656),
    _ = n(359110),
    h = n(695346),
    p = n(703558),
    m = n(944486),
    g = n(979651),
    E = n(585483),
    v = n(124368),
    I = n(981631),
    S = n(176505);
function T(e, t, n) {
    u.UI.dispatch(I.CkL.POPOUT_CLOSE);
    let r = !s().isEmpty(g.Z.getVoiceStatesForChannel(e.id));
    if (t || !h.vF.getSetting() || __OVERLAY__ || r) {
        o.Z.dispatch({
            type: 'SIDEBAR_CLOSE',
            baseChannelId: e.parent_id
        }),
            null != n ? (0, _.ad)(e, { source: n }) : (0, _.Kh)(e.id);
        return;
    }
    i()(null != e.parent_id, 'all threads must have parents');
    let a = m.Z.getChannelId();
    e.parent_id !== a && !(0, S.ME)(a) && (0, _.Kh)(e.parent_id),
        (0, f.uL)(I.Z5c.CHANNEL_THREAD_VIEW((0, d.e)(e), (0, S.ME)(a) ? S.oC.GUILD_HOME : e.parent_id, e.id), e.isForumPost() ? { source: v.on.FORUM } : void 0),
        setTimeout(() => {
            E.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0);
}
function b(e, t, n) {
    if (
        (i()(!e.isForumLikeChannel(), 'cannot open thread creation sidebar in forums'),
        i()(!__OVERLAY__, 'Cannot create threads in the overlay.'),
        (0, c.yw)(I.rMx.THREAD_CREATION_STARTED, {
            location: n,
            channel_id: e.id,
            guild_id: e.guild_id
        }),
        u.UI.dispatch(I.CkL.POPOUT_CLOSE),
        m.Z.getChannelId() !== e.id && (0, _.Kh)(e.id),
        '' === p.Z.getDraft(e.id, p.d.FirstThreadMessage))
    ) {
        let t = p.Z.getDraft(e.id, p.d.ChannelMessage);
        l.Z.saveDraft(e.id, '', p.d.ChannelMessage), l.Z.saveDraft(e.id, t, p.d.FirstThreadMessage);
    }
    setTimeout(() => {
        o.Z.dispatch({
            type: 'SIDEBAR_CREATE_THREAD',
            parentChannelId: e.id,
            parentMessageId: null == t ? void 0 : t.id,
            location: n
        });
    }, 0);
}
function y(e, t) {
    (0, f.uL)(I.Z5c.CHANNEL(e, (0, S.ME)(t) ? S.oC.GUILD_HOME : t)),
        o.Z.dispatch({
            type: 'SIDEBAR_CLOSE',
            baseChannelId: t
        });
}
function A(e) {
    o.Z.dispatch({
        type: 'SIDEBAR_CLOSE',
        baseChannelId: e
    }),
        o.Z.dispatch({
            type: 'DRAFT_CLEAR',
            channelId: e,
            draftType: p.d.FirstThreadMessage
        }),
        o.Z.dispatch({
            type: 'DRAFT_CLEAR',
            channelId: e,
            draftType: p.d.ThreadSettings
        });
}
