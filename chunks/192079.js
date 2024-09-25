n.d(t, {
    ER: function () {
        return f;
    },
    kk: function () {
        return h;
    },
    s$: function () {
        return p;
    }
});
var r = n(724458);
var i = n(47120);
var a = n(392711);
var o = n(19780),
    s = n(5192),
    l = n(700785),
    u = n(427679),
    c = n(157925),
    d = n(981631),
    _ = n(71080),
    E = n(689938);
function f(e, t, n, r) {
    let i = t[0],
        a = s.ZP.getName(e, n, i),
        o = null != r ? r : t.length;
    return 1 === o && null != i
        ? a
        : null == i
          ? E.Z.Messages.SPEAKING_COUNT.format({ count: o })
          : E.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: a,
                count: o - 1
            });
}
function h(e, t) {
    switch (e) {
        case _.aC.OWNER:
            return E.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
        case _.aC.ADMINISTRATOR:
            return E.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
        case _.aC.MEMBER:
        case _.aC.ROLE:
            return t ? E.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : E.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
        case _.aC.EMPTY_STATE:
    }
    return null;
}
function p(e) {
    let t = u.Z.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: null == t ? void 0 : t.topic,
        media_session_id: o.Z.getMediaSessionId(),
        request_to_speak_state: l.Uu(d.Plq.REQUEST_TO_SPEAK, e) ? c.BM.EVERYONE : c.BM.NO_ONE,
        stage_instance_id: null == t ? void 0 : t.id
    };
}
