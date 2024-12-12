r.d(n, {
    C0: function () {
        return d;
    },
    W3: function () {
        return h;
    },
    X8: function () {
        return _;
    },
    bG: function () {
        return g;
    },
    dG: function () {
        return p;
    },
    pD: function () {
        return m;
    },
    tH: function () {
        return f;
    }
});
var i = r(544891),
    a = r(570140),
    s = r(881052),
    o = r(932015),
    l = r(209747),
    u = r(78839),
    c = r(981631);
async function d(e) {
    let n = (
        await i.tn.get({
            url: c.ANM.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })
    ).body.map((e) => o.Z.createFromServer(e));
    return (
        a.Z.dispatch({
            type: 'GUILD_APPLIED_BOOSTS_FETCH_SUCCESS',
            guildId: e,
            appliedBoosts: n
        }),
        n
    );
}
async function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = (
            await i.tn.get({
                url: c.ANM.USER_APPLIED_GUILD_BOOSTS,
                oldFormErrors: !0,
                query: { paused: e },
                rejectWithError: !0
            })
        ).body.map((e) => o.Z.createFromServer(e));
    return (
        a.Z.dispatch({
            type: 'USER_APPLIED_BOOSTS_FETCH_SUCCESS',
            appliedGuildBoosts: n
        }),
        n
    );
}
async function _() {
    let e = (
        await i.tn.get({
            url: c.ANM.USER_GUILD_BOOST_SLOTS,
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ).body.map((e) => l.Z.createFromServer(e, u.ZP.getSubscriptionById(e.subscription_id)));
    return (
        a.Z.dispatch({
            type: 'GUILD_BOOST_SLOTS_FETCH_SUCCESS',
            guildBoostSlots: e
        }),
        e
    );
}
async function h(e, n) {
    a.Z.dispatch({ type: 'GUILD_APPLY_BOOST_START' });
    try {
        let r = await i.tn.put({
                url: c.ANM.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                body: { user_premium_guild_subscription_slot_ids: n },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            s = Array.isArray(r.body) ? r.body.map(o.Z.createFromServer) : [o.Z.createFromServer(r.body)];
        return (
            a.Z.dispatch({
                type: 'GUILD_APPLY_BOOST_SUCCESS',
                appliedGuildBoost: s
            }),
            _(),
            s
        );
    } catch (n) {
        let e = new s.zN(n);
        throw (
            (a.Z.dispatch({
                type: 'GUILD_APPLY_BOOST_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function p(e, n) {
    a.Z.dispatch({ type: 'GUILD_UNAPPLY_BOOST_START' });
    try {
        await i.tn.del({
            url: c.ANM.APPLIED_GUILD_BOOST(e, n),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
            _();
    } catch (n) {
        let e = new s.zN(n);
        throw (
            (a.Z.dispatch({
                type: 'GUILD_UNAPPLY_BOOST_FAIL',
                error: e
            }),
            e)
        );
    }
    a.Z.dispatch({
        type: 'GUILD_UNAPPLY_BOOST_SUCCESS',
        boostId: n
    });
}
async function m(e) {
    let n = await i.tn.post({
            url: c.ANM.USER_GUILD_BOOST_SLOT_CANCEL(e),
            oldFormErrors: !0,
            rejectWithError: !0
        }),
        r = l.Z.createFromServer(n.body, u.ZP.getSubscriptionById(n.body.subscription_id));
    return (
        a.Z.dispatch({
            type: 'GUILD_BOOST_SLOT_UPDATE_SUCCESS',
            guildBoostSlot: r
        }),
        r
    );
}
async function g(e) {
    let n = await i.tn.post({
            url: c.ANM.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
            oldFormErrors: !0,
            rejectWithError: !0
        }),
        r = l.Z.createFromServer(n.body, u.ZP.getSubscriptionById(n.body.subscription_id));
    return (
        a.Z.dispatch({
            type: 'GUILD_BOOST_SLOT_UPDATE_SUCCESS',
            guildBoostSlot: r
        }),
        r
    );
}
