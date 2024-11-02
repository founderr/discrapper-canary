n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(78839);
let c = !1,
    d = {};
function f(e) {
    let { guildBoostSlot: t } = e;
    d = {
        ...d,
        [t.id]: t
    };
}
function _() {
    let e = {};
    for (let t of Object.values(d)) (e[t.id] = t), (t.subscription = u.ZP.getSubscriptionById(t.subscriptionId));
    d = e;
}
class h extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith([u.ZP], _);
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
(s = 'GuildBoostSlotStore'),
    (a = 'displayName') in (i = h)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new h(l.Z, {
        GUILD_BOOST_SLOTS_FETCH_SUCCESS: function (e) {
            let { guildBoostSlots: t } = e;
            (d = {}),
                t.forEach((e) => {
                    d[e.id] = e;
                }),
                (c = !0);
        },
        GUILD_BOOST_SLOT_UPDATE_SUCCESS: f,
        GUILD_BOOST_SLOT_CREATE: f,
        GUILD_BOOST_SLOT_UPDATE: f,
        LOGOUT: function () {
            (d = {}), (c = !1);
        }
    }));
