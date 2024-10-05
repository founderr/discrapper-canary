n.d(t, {
    SO: function () {
        return S;
    },
    eD: function () {
        return _;
    },
    hO: function () {
        return E;
    },
    r: function () {
        return I;
    },
    ue: function () {
        return f;
    }
}),
    n(47120);
var r = n(470079),
    i = n(442837);
n(935369);
var o = n(38618),
    u = n(160404),
    l = n(496675),
    s = n(914010),
    a = n(495437),
    c = n(240864),
    d = n(981631);
let _ = (e) => {
        let t = (0, i.e7)([c.Z], () => (null != e ? c.Z.getGuildProductsForGuildFetchState(e) : c.M.FETCHED), [e]),
            n = (0, i.e7)([o.Z], () => o.Z.isConnected()),
            [u, l] = r.useState(!0);
        return (
            r.useEffect(() => {
                u && (t === c.M.NOT_FETCHED || (t === c.M.FETCHED && c.Z.isGuildProductsCacheExpired(e))) && n && a.EB(e), l(!n);
            }, [e, n, t, u]),
            { listingsLoaded: t === c.M.FETCHED && !u }
        );
    },
    E = function (e, t) {
        let { requireCurrentGuild: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
            u = (0, i.e7)([o.Z], () => o.Z.isConnected()),
            l = (0, i.e7)([s.Z], () => s.Z.getGuildId());
        return (
            r.useEffect(() => {
                let r = c.Z.getGuildProductFetchState(t);
                if ((!n || l === e) && u && r === c.M.NOT_FETCHED)
                    try {
                        a.cf(e, t);
                    } catch (e) {}
            }, [e, t, u, l, n]),
            (0, i.e7)([c.Z], () => c.Z.getGuildProduct(t))
        );
    },
    f = function (e) {
        let { publishedOnly: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, i.e7)([c.Z, u.Z], () => c.Z.getGuildProductsForGuild(e, { publishedOnly: null != t ? t : !u.Z.isViewingServerShop(e) }));
    },
    I = (e) => (0, i.e7)([c.Z], () => (null == e ? void 0 : c.Z.getGuildProduct(e))),
    S = (e) => (0, i.e7)([l.Z], () => null != e && l.Z.can(d.Plq.ADMINISTRATOR, e));
