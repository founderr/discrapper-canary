t.d(n, {
    SO: function () {
        return g;
    },
    eD: function () {
        return f;
    },
    hO: function () {
        return p;
    },
    r: function () {
        return E;
    },
    ue: function () {
        return _;
    }
}),
    t(47120);
var i = t(192379),
    r = t(442837);
t(935369);
var l = t(38618),
    o = t(160404),
    u = t(496675),
    a = t(914010),
    s = t(495437),
    c = t(240864),
    d = t(981631);
let f = (e) => {
        let n = (0, r.e7)([c.Z], () => (null != e ? c.Z.getGuildProductsForGuildFetchState(e) : c.M.FETCHED), [e]),
            t = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            [o, u] = i.useState(!0);
        return (
            i.useEffect(() => {
                o && (n === c.M.NOT_FETCHED || (n === c.M.FETCHED && c.Z.isGuildProductsCacheExpired(e))) && t && s.EB(e), u(!t);
            }, [e, t, n, o]),
            { listingsLoaded: n === c.M.FETCHED && !o }
        );
    },
    p = function (e, n) {
        let { requireCurrentGuild: t } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
            o = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            u = (0, r.e7)([a.Z], () => a.Z.getGuildId());
        return (
            i.useEffect(() => {
                let i = c.Z.getGuildProductFetchState(n);
                if ((!t || u === e) && o && i === c.M.NOT_FETCHED)
                    try {
                        s.cf(e, n);
                    } catch (e) {}
            }, [e, n, o, u, t]),
            (0, r.e7)([c.Z], () => c.Z.getGuildProduct(n))
        );
    },
    _ = function (e) {
        let { publishedOnly: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.e7)([c.Z, o.Z], () => c.Z.getGuildProductsForGuild(e, { publishedOnly: null != n ? n : !o.Z.isViewingServerShop(e) }));
    },
    E = (e) => (0, r.e7)([c.Z], () => (null == e ? void 0 : c.Z.getGuildProduct(e))),
    g = (e) => (0, r.e7)([u.Z], () => null != e && u.Z.can(d.Plq.ADMINISTRATOR, e));
