n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(47120);
var i = n(654861),
    a = n.n(i),
    o = n(108131),
    s = n.n(o),
    l = n(943881),
    u = n(650774),
    c = n(430824),
    d = n(70956),
    _ = n(709054);
function E(e, t, n) {
    let r = a()(e),
        i = null != t ? a()(t) : null,
        o = null != n ? a()(n) : null;
    return !((null != i && r.lesser(i)) || (null != o && r.greater(o))) && !0;
}
function f(e) {
    let t, n;
    for (let [r, i] of e)
        switch (r) {
            case s().v3('min_id'):
                t = i;
                break;
            case s().v3('max_id'):
                n = i;
        }
    return {
        min: t,
        max: n
    };
}
let h = {
    [s().v3('guild_ids')]: (e) => {
        let t = [];
        for (let [n, r] of e) n === s().v3('guild_ids') && (t = r);
        return (e) => t.includes(e);
    },
    [s().v3('guild_id_range')]: (e) => {
        let { min: t, max: n } = f(e);
        return (e) => E(e, t, n);
    },
    [s().v3('guild_age_range_days')]: (e) => {
        let { min: t, max: n } = f(e);
        return (e) => E(Math.floor(_.default.age(e) / d.Z.Millis.DAY), t, n);
    },
    [s().v3('guild_member_count_range')]: (e) => {
        let { min: t, max: n } = f(e);
        return (e) => {
            let r = u.Z.getMemberCount(e);
            return null != r && E(r, t, n);
        };
    },
    [s().v3('guild_has_feature')]: (e) => {
        let [[, t]] = e;
        return (e) => {
            var n;
            let r = null !== (n = c.Z.getGuild(e)) && void 0 !== n ? n : l.Z.getGuild(e);
            return null != r && t.some((e) => r.hasFeature(e));
        };
    },
    [s().v3('guild_hub_types')]: (e) => {
        let [[, t]] = e;
        return (e) => {
            var n;
            let r = null !== (n = c.Z.getGuild(e)) && void 0 !== n ? n : l.Z.getGuild(e);
            return null != r && 'number' == typeof r.hubType && t.some((e) => r.hubType === e);
        };
    },
    [s().v3('guild_has_vanity_url')]: (e) => {
        let [[, t]] = e;
        return (e) => {
            var n;
            let r = null !== (n = c.Z.getGuild(e)) && void 0 !== n ? n : l.Z.getGuild(e);
            return null != r && t === (null != r.vanityURLCode);
        };
    },
    [s().v3('guild_in_range_by_hash')]: (e) => {
        let t, n;
        for (let [i, a] of e)
            switch (i) {
                case s().v3('hash_key'):
                    t = a;
                    break;
                case s().v3('target'):
                    var r;
                    n = null !== (r = parseInt(a)) && void 0 !== r ? r : 0;
            }
        return (e) => {
            let r = s().v3(''.concat(t, ':').concat(e));
            return (r > 0 ? r + r : r >>> 0) % 10000 < n;
        };
    }
};
