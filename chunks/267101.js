n.d(t, {
    SO: function () {
        return E;
    },
    eD: function () {
        return f;
    },
    hO: function () {
        return _;
    },
    r: function () {
        return g;
    },
    ue: function () {
        return p;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837);
n(935369);
var o = n(38618),
    l = n(160404),
    u = n(496675),
    a = n(914010),
    s = n(495437),
    c = n(240864),
    d = n(981631);
let f = (e) => {
        let t = (0, r.e7)([c.Z], () => (null != e ? c.Z.getGuildProductsForGuildFetchState(e) : c.M.FETCHED), [e]),
            n = (0, r.e7)([o.Z], () => o.Z.isConnected()),
            [l, u] = i.useState(!0);
        return (
            i.useEffect(() => {
                l && (t === c.M.NOT_FETCHED || (t === c.M.FETCHED && c.Z.isGuildProductsCacheExpired(e))) && n && s.EB(e), u(!n);
            }, [e, n, t, l]),
            { listingsLoaded: t === c.M.FETCHED && !l }
        );
    },
    _ = function (e, t) {
        let { requireCurrentGuild: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
            l = (0, r.e7)([o.Z], () => o.Z.isConnected()),
            u = (0, r.e7)([a.Z], () => a.Z.getGuildId());
        return (
            i.useEffect(() => {
                let i = c.Z.getGuildProductFetchState(t);
                if ((!n || u === e) && l && i === c.M.NOT_FETCHED)
                    try {
                        s.cf(e, t);
                    } catch (e) {}
            }, [e, t, l, u, n]),
            (0, r.e7)([c.Z], () => c.Z.getGuildProduct(t))
        );
    },
    p = function (e) {
        let { publishedOnly: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.e7)([c.Z, l.Z], () => c.Z.getGuildProductsForGuild(e, { publishedOnly: null != t ? t : !l.Z.isViewingServerShop(e) }));
    },
    g = (e) => (0, r.e7)([c.Z], () => (null == e ? void 0 : c.Z.getGuildProduct(e))),
    E = (e) => (0, r.e7)([u.Z], () => null != e && u.Z.can(d.Plq.ADMINISTRATOR, e));
