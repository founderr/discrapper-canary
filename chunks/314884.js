var i,
    a = r(47120);
var s = r(442837),
    o = r(570140),
    l = r(78839);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = !1,
    d = {};
function f(e) {
    let { guildBoostSlots: n } = e;
    (d = {}),
        n.forEach((e) => {
            d[e.id] = e;
        }),
        (c = !0);
}
function _(e) {
    let { guildBoostSlot: n } = e;
    d = {
        ...d,
        [n.id]: n
    };
}
function h() {
    (d = {}), (c = !1);
}
function p() {
    let e = {};
    for (let n of Object.values(d)) (e[n.id] = n), (n.subscription = l.ZP.getSubscriptionById(n.subscriptionId));
    d = e;
}
class m extends (i = s.ZP.Store) {
    initialize() {
        this.syncWith([l.ZP], p);
    }
    get hasFetched() {
        return c;
    }
    get boostSlots() {
        return d;
    }
    getGuildBoostSlot(e) {
        return d[e];
    }
}
u(m, 'displayName', 'GuildBoostSlotStore'),
    (n.Z = new m(o.Z, {
        GUILD_BOOST_SLOTS_FETCH_SUCCESS: f,
        GUILD_BOOST_SLOT_UPDATE_SUCCESS: _,
        GUILD_BOOST_SLOT_CREATE: _,
        GUILD_BOOST_SLOT_UPDATE: _,
        LOGOUT: h
    }));
