n.d(t, {
    C: function () {
        return f;
    },
    u: function () {
        return p;
    }
});
var r = n(47120);
var i = n(149765),
    a = n(668781),
    o = n(434404),
    s = n(430824),
    l = n(745752),
    u = n(45966),
    c = n(637853),
    d = n(290511),
    _ = n(981631),
    E = n(689938);
async function f(e, t) {
    return (
        null == e ||
        (await h(e, t, {
            removingView: !0,
            removingChat: !0
        }))
    );
}
async function h(e, t, n) {
    var r;
    let i = s.Z.getGuild(e);
    if (null == i) return !0;
    let a = null != i && (null === (r = i.features) || void 0 === r ? void 0 : r.has(_.oNc.GUILD_ONBOARDING));
    if (!a) return !0;
    a && u.Z.shouldFetchPrompts(e) && (await (0, l.eM)(e));
    let o = u.Z.getDefaultChannelIds(e),
        [E, f] = (0, c.d9)(e, o);
    if (!o.includes(t)) return !0;
    let h = n.removingView && f.length - 1 < d.md,
        p = (n.removingChat || n.removingView) && E.length - 1 < d.X;
    return !h && !p;
}
async function p(e, t, n) {
    let r = e.getGuildId();
    if (null == r) return !0;
    null != n && (t = i.hX(t, i.U_(n)));
    let s = e.permissionOverwrites[r],
        l = null != s ? i.hX(s.deny, i.U_(s.allow)) : i.vB(0),
        u = {
            removingView: i.e$(t, _.Plq.VIEW_CHANNEL) && !i.e$(l, _.Plq.VIEW_CHANNEL),
            removingChat: !1
        };
    return (
        e.isForumLikeChannel() ? (u.removingChat = i.e$(t, _.Plq.SEND_MESSAGES_IN_THREADS) && !i.e$(l, _.Plq.SEND_MESSAGES_IN_THREADS)) : (u.removingChat = i.e$(t, _.Plq.SEND_MESSAGES) && !i.e$(l, _.Plq.SEND_MESSAGES)),
        (!u.removingChat && !u.removingView) ||
            !!(await h(r, e.id, u)) ||
            (a.Z.show({
                title: E.Z.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
                body: E.Z.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                    onClick: () => {
                        a.Z.close(), o.Z.open(r, _.pNK.ONBOARDING);
                    }
                })
            }),
            !1)
    );
}
