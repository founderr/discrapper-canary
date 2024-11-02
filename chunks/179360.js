n.d(t, {
    C0: function () {
        return c;
    },
    W3: function () {
        return _;
    },
    X8: function () {
        return f;
    },
    bG: function () {
        return m;
    },
    dG: function () {
        return h;
    },
    pD: function () {
        return p;
    },
    tH: function () {
        return d;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(881052),
    s = n(932015),
    o = n(209747),
    l = n(78839),
    u = n(981631);
async function c(e) {
    let t = (
        await r.tn.get({
            url: u.ANM.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
            oldFormErrors: !0
        })
    ).body.map((e) => s.Z.createFromServer(e));
    return (
        i.Z.dispatch({
            type: 'GUILD_APPLIED_BOOSTS_FETCH_SUCCESS',
            guildId: e,
            appliedBoosts: t
        }),
        t
    );
}
async function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (
            await r.tn.get({
                url: u.ANM.USER_APPLIED_GUILD_BOOSTS,
                oldFormErrors: !0,
                query: { paused: e }
            })
        ).body.map((e) => s.Z.createFromServer(e));
    return (
        i.Z.dispatch({
            type: 'USER_APPLIED_BOOSTS_FETCH_SUCCESS',
            appliedGuildBoosts: t
        }),
        t
    );
}
async function f() {
    let e = (
        await r.tn.get({
            url: u.ANM.USER_GUILD_BOOST_SLOTS,
            oldFormErrors: !0
        })
    ).body.map((e) => o.Z.createFromServer(e, l.ZP.getSubscriptionById(e.subscription_id)));
    return (
        i.Z.dispatch({
            type: 'GUILD_BOOST_SLOTS_FETCH_SUCCESS',
            guildBoostSlots: e
        }),
        e
    );
}
async function _(e, t) {
    i.Z.dispatch({ type: 'GUILD_APPLY_BOOST_START' });
    try {
        let n = await r.tn.put({
                url: u.ANM.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                body: { user_premium_guild_subscription_slot_ids: t },
                oldFormErrors: !0
            }),
            a = Array.isArray(n.body) ? n.body.map(s.Z.createFromServer) : [s.Z.createFromServer(n.body)];
        return (
            i.Z.dispatch({
                type: 'GUILD_APPLY_BOOST_SUCCESS',
                appliedGuildBoost: a
            }),
            f(),
            a
        );
    } catch (t) {
        let e = new a.zN(t);
        throw (
            (i.Z.dispatch({
                type: 'GUILD_APPLY_BOOST_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function h(e, t) {
    i.Z.dispatch({ type: 'GUILD_UNAPPLY_BOOST_START' });
    try {
        await r.tn.del({
            url: u.ANM.APPLIED_GUILD_BOOST(e, t),
            oldFormErrors: !0
        }),
            f();
    } catch (t) {
        let e = new a.zN(t);
        throw (
            (i.Z.dispatch({
                type: 'GUILD_UNAPPLY_BOOST_FAIL',
                error: e
            }),
            e)
        );
    }
    i.Z.dispatch({
        type: 'GUILD_UNAPPLY_BOOST_SUCCESS',
        boostId: t
    });
}
async function p(e) {
    let t = await r.tn.post({
            url: u.ANM.USER_GUILD_BOOST_SLOT_CANCEL(e),
            oldFormErrors: !0
        }),
        n = o.Z.createFromServer(t.body, l.ZP.getSubscriptionById(t.body.subscription_id));
    return (
        i.Z.dispatch({
            type: 'GUILD_BOOST_SLOT_UPDATE_SUCCESS',
            guildBoostSlot: n
        }),
        n
    );
}
async function m(e) {
    let t = await r.tn.post({
            url: u.ANM.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
            oldFormErrors: !0
        }),
        n = o.Z.createFromServer(t.body, l.ZP.getSubscriptionById(t.body.subscription_id));
    return (
        i.Z.dispatch({
            type: 'GUILD_BOOST_SLOT_UPDATE_SUCCESS',
            guildBoostSlot: n
        }),
        n
    );
}
