r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(47120);
var a = r(654861),
    s = r.n(a),
    o = r(108131),
    l = r.n(o),
    u = r(943881),
    c = r(650774),
    d = r(430824),
    f = r(70956),
    _ = r(709054);
function h(e, n, r) {
    let i = s()(e),
        a = null != n ? s()(n) : null,
        o = null != r ? s()(r) : null;
    return !((null != a && i.lesser(a)) || (null != o && i.greater(o))) && !0;
}
function p(e) {
    let n, r;
    for (let [i, a] of e)
        switch (i) {
            case l().v3('min_id'):
                n = a;
                break;
            case l().v3('max_id'):
                r = a;
        }
    return {
        min: n,
        max: r
    };
}
let m = {
    [l().v3('guild_ids')]: (e) => {
        let n = [];
        for (let [r, i] of e) r === l().v3('guild_ids') && (n = i);
        return (e) => n.includes(e);
    },
    [l().v3('guild_id_range')]: (e) => {
        let { min: n, max: r } = p(e);
        return (e) => h(e, n, r);
    },
    [l().v3('guild_age_range_days')]: (e) => {
        let { min: n, max: r } = p(e);
        return (e) => h(Math.floor(_.default.age(e) / f.Z.Millis.DAY), n, r);
    },
    [l().v3('guild_member_count_range')]: (e) => {
        let { min: n, max: r } = p(e);
        return (e) => {
            let i = c.Z.getMemberCount(e);
            return null != i && h(i, n, r);
        };
    },
    [l().v3('guild_has_feature')]: (e) => {
        let [[, n]] = e;
        return (e) => {
            var r;
            let i = null !== (r = d.Z.getGuild(e)) && void 0 !== r ? r : u.Z.getGuild(e);
            return null != i && n.some((e) => i.hasFeature(e));
        };
    },
    [l().v3('guild_hub_types')]: (e) => {
        let [[, n]] = e;
        return (e) => {
            var r;
            let i = null !== (r = d.Z.getGuild(e)) && void 0 !== r ? r : u.Z.getGuild(e);
            return null != i && 'number' == typeof i.hubType && n.some((e) => i.hubType === e);
        };
    },
    [l().v3('guild_has_vanity_url')]: (e) => {
        let [[, n]] = e;
        return (e) => {
            var r;
            let i = null !== (r = d.Z.getGuild(e)) && void 0 !== r ? r : u.Z.getGuild(e);
            return null != i && n === (null != i.vanityURLCode);
        };
    },
    [l().v3('guild_in_range_by_hash')]: (e) => {
        let n, r;
        for (let [a, s] of e)
            switch (a) {
                case l().v3('hash_key'):
                    n = s;
                    break;
                case l().v3('target'):
                    var i;
                    r = null !== (i = parseInt(s)) && void 0 !== i ? i : 0;
            }
        return (e) => {
            let i = l().v3(''.concat(n, ':').concat(e));
            return (i > 0 ? i + i : i >>> 0) % 10000 < r;
        };
    }
};
