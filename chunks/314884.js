var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(78839);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = !1,
    c = {};
function d(e) {
    let { guildBoostSlots: t } = e;
    (c = {}),
        t.forEach((e) => {
            c[e.id] = e;
        }),
        (u = !0);
}
function _(e) {
    let { guildBoostSlot: t } = e;
    c = {
        ...c,
        [t.id]: t
    };
}
function E() {
    (c = {}), (u = !1);
}
function f() {
    let e = {};
    for (let t of Object.values(c)) (e[t.id] = t), (t.subscription = s.ZP.getSubscriptionById(t.subscriptionId));
    c = e;
}
class h extends (r = a.ZP.Store) {
    initialize() {
        this.syncWith([s.ZP], f);
    }
    get hasFetched() {
        return u;
    }
    get boostSlots() {
        return c;
    }
    getGuildBoostSlot(e) {
        return c[e];
    }
}
l(h, 'displayName', 'GuildBoostSlotStore'),
    (t.Z = new h(o.Z, {
        GUILD_BOOST_SLOTS_FETCH_SUCCESS: d,
        GUILD_BOOST_SLOT_UPDATE_SUCCESS: _,
        GUILD_BOOST_SLOT_CREATE: _,
        GUILD_BOOST_SLOT_UPDATE: _,
        LOGOUT: E
    }));
