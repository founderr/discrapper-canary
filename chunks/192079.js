e.d(t, {
    ER: function () {
        return d;
    },
    kk: function () {
        return _;
    },
    s$: function () {
        return f;
    }
}),
    e(724458),
    e(47120),
    e(392711);
var i = e(19780),
    l = e(5192),
    r = e(700785),
    c = e(427679),
    o = e(157925),
    a = e(981631),
    s = e(71080),
    u = e(388032);
function d(n, t, e, i) {
    let r = t[0],
        c = l.ZP.getName(n, e, r),
        o = null != i ? i : t.length;
    return 1 === o && null != r
        ? c
        : null == r
          ? u.intl.formatToPlainString(u.t.chmM9P, { count: o })
          : u.intl.formatToPlainString(u.t.GhkJ29, {
                name: c,
                count: o - 1
            });
}
function _(n, t) {
    switch (n) {
        case s.aC.OWNER:
            return u.intl.string(u.t.icuNBA);
        case s.aC.ADMINISTRATOR:
            return u.intl.string(u.t.eTmN5e);
        case s.aC.MEMBER:
        case s.aC.ROLE:
            return t ? u.intl.string(u.t.Hw3XW1) : u.intl.string(u.t.YieyPj);
        case s.aC.EMPTY_STATE:
    }
    return null;
}
function f(n) {
    let t = c.Z.getStageInstanceByChannel(n.id);
    return {
        channel_id: n.id,
        guild_id: n.guild_id,
        topic: null == t ? void 0 : t.topic,
        media_session_id: i.Z.getMediaSessionId(),
        request_to_speak_state: r.Uu(a.Plq.REQUEST_TO_SPEAK, n) ? o.BM.EVERYONE : o.BM.NO_ONE,
        stage_instance_id: null == t ? void 0 : t.id
    };
}
