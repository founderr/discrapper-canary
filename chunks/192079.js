t.d(n, {
    ER: function () {
        return d;
    },
    kk: function () {
        return h;
    },
    s$: function () {
        return m;
    }
}),
    t(724458),
    t(47120),
    t(392711);
var l = t(19780),
    i = t(5192),
    a = t(700785),
    s = t(427679),
    r = t(157925),
    c = t(981631),
    o = t(71080),
    u = t(388032);
function d(e, n, t, l) {
    let a = n[0],
        s = i.ZP.getName(e, t, a),
        r = null != l ? l : n.length;
    return 1 === r && null != a
        ? s
        : null == a
          ? u.intl.formatToPlainString(u.t.chmM9P, { count: r })
          : u.intl.formatToPlainString(u.t.GhkJ29, {
                name: s,
                count: r - 1
            });
}
function h(e, n) {
    switch (e) {
        case o.aC.OWNER:
            return u.intl.string(u.t.icuNBA);
        case o.aC.ADMINISTRATOR:
            return u.intl.string(u.t.eTmN5e);
        case o.aC.MEMBER:
        case o.aC.ROLE:
            return n ? u.intl.string(u.t.Hw3XW1) : u.intl.string(u.t.YieyPj);
        case o.aC.EMPTY_STATE:
    }
    return null;
}
function m(e) {
    let n = s.Z.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: null == n ? void 0 : n.topic,
        media_session_id: l.Z.getMediaSessionId(),
        request_to_speak_state: a.Uu(c.Plq.REQUEST_TO_SPEAK, e) ? r.BM.EVERYONE : r.BM.NO_ONE,
        stage_instance_id: null == n ? void 0 : n.id
    };
}
