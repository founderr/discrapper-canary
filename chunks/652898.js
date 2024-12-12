r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(47120);
var a = r(773603);
var s = r(990547),
    o = r(283693),
    l = r(131704),
    u = r(314897),
    c = r(626135),
    d = r(573261),
    f = r(264229),
    _ = r(245335),
    h = r(981631);
function p(e) {
    let n = null;
    if (null != e && null != e.channel) {
        let r = e.channel;
        n = e.target_type === _.Iq.STREAM ? h.dAT.STREAM : e.target_type === _.Iq.EMBEDDED_APPLICATION ? h.dAT.APPLICATION : (0, l.bc)(r.type) ? h.dAT.GDM_INVITE : null == r || (0, l.hv)(r.type) ? h.dAT.FRIEND_INVITE : h.dAT.SERVER_INVITE;
    }
    return n;
}
let m = new Map();
function g(e, n, r) {
    if ((c.default.track(h.rMx.INVITE_OPENED, { invite_code: e }), m.has(e))) return m.get(e);
    let i = (0, f.fU)(e),
        a = {
            ...r,
            with_counts: !0,
            with_expiration: !0,
            guild_scheduled_event_id: i.guildScheduledEventId
        },
        l = d.Z.get({
            url: h.ANM.INVITE(i.baseCode),
            query: a,
            oldFormErrors: !0,
            trackedActionData: {
                event: s.NetworkActionNames.INVITE_RESOLVE,
                properties: (e) => {
                    var a, s, l, c, d, f;
                    let _ = e.body,
                        m = (null === (a = e.body) || void 0 === a ? void 0 : a.code) === h.evJ.USER_BANNED;
                    return (0, o.iG)({
                        resolved: e.ok,
                        guild_id: null == _ ? void 0 : null === (s = _.guild) || void 0 === s ? void 0 : s.id,
                        channel_id: null == _ ? void 0 : null === (l = _.channel) || void 0 === l ? void 0 : l.id,
                        channel_type: null == _ ? void 0 : null === (c = _.channel) || void 0 === c ? void 0 : c.type,
                        inviter_id: null == _ ? void 0 : null === (d = _.inviter) || void 0 === d ? void 0 : d.id,
                        code: i.baseCode,
                        input_value: null == r ? void 0 : r.inputValue,
                        location: n,
                        authenticated: u.default.isAuthenticated(),
                        size_total: null == _ ? void 0 : _.approximate_member_count,
                        size_online: null == _ ? void 0 : _.approximate_presence_count,
                        destination_user_id: null == _ ? void 0 : null === (f = _.target_user) || void 0 === f ? void 0 : f.id,
                        invite_type: p(_),
                        user_banned: m
                    });
                }
            },
            rejectWithError: !1
        })
            .then(
                (a) => {
                    let s = a.body;
                    return (
                        null != n &&
                            c.default.track(
                                h.rMx.INVITE_RESOLVED,
                                {
                                    resolved: !0,
                                    guild_id: null != s.guild ? s.guild.id : null,
                                    channel_id: null != s.channel ? s.channel.id : null,
                                    channel_type: null != s.channel ? s.channel.type : null,
                                    inviter_id: s.inviter ? s.inviter.id : null,
                                    code: i.baseCode,
                                    input_value: null == r ? void 0 : r.inputValue,
                                    location: n,
                                    authenticated: u.default.isAuthenticated(),
                                    size_total: s.approximate_member_count,
                                    size_online: s.approximate_presence_count,
                                    destination_user_id: null != s.target_user ? s.target_user.id : null,
                                    invite_type: p(s)
                                },
                                { flush: !0 }
                            ),
                        {
                            invite: s,
                            code: e
                        }
                    );
                },
                (a) => {
                    let s = null != a.body && a.body.code === h.evJ.USER_BANNED;
                    if (null != n) {
                        var o, l;
                        c.default.track(
                            h.rMx.INVITE_RESOLVED,
                            {
                                resolved: !1,
                                code: i.baseCode,
                                input_value: null == r ? void 0 : r.inputValue,
                                location: n,
                                authenticated: u.default.isAuthenticated(),
                                user_banned: s,
                                error_code: null === (o = a.body) || void 0 === o ? void 0 : o.code,
                                error_message: null === (l = a.body) || void 0 === l ? void 0 : l.message
                            },
                            { flush: !0 }
                        );
                    }
                    return {
                        invite: null,
                        code: e,
                        banned: s
                    };
                }
            )
            .finally(() => {
                m.delete(e);
            });
    return m.set(e, l), l;
}
