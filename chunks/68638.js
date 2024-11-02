var i,
    r,
    l,
    s,
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(570140),
    u = n(314897),
    m = n(823379),
    h = n(891864);
let g = {},
    x = 0;
class p extends (s = c.ZP.Store) {
    initialize() {
        this.waitFor(u.default);
    }
    isFetching() {
        return x > 0;
    }
    getGuild(e) {
        return g[e];
    }
    getGuilds(e) {
        return e.map((e) => g[e]).filter(m.lm);
    }
}
(l = 'DiscoverGuildsStore'),
    (r = 'displayName') in (i = p)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new p(d.Z, {
        DISCOVER_GUILDS_FETCH_START: function (e) {
            x += 1;
        },
        DISCOVER_GUILDS_FETCH_SUCCESS: function (e) {
            let { guilds: t } = e;
            (x -= 1),
                o()
                    .map(t, h.Z)
                    .forEach((e) => (g[e.id] = e));
        },
        DISCOVER_GUILDS_FETCH_FAILURE: function (e) {
            x -= 1;
        }
    }));
