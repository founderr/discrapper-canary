n.d(t, {
    SO: function () {
        return I;
    },
    eD: function () {
        return f;
    },
    hO: function () {
        return h;
    },
    r: function () {
        return m;
    },
    ue: function () {
        return p;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837);
n(935369);
var o = n(38618),
    s = n(160404),
    l = n(496675),
    u = n(914010),
    c = n(495437),
    d = n(240864),
    _ = n(981631);
function E(e) {
    return 'createNewRole' in e && null != e.image && null != e.imageName;
}
let f = (e) => {
        let t = (0, a.e7)([d.Z], () => (null != e ? d.Z.getGuildProductsForGuildFetchState(e) : d.M.FETCHED), [e]),
            n = (0, a.e7)([o.Z], () => o.Z.isConnected()),
            [r, s] = i.useState(!0);
        return (
            i.useEffect(() => {
                r && (t === d.M.NOT_FETCHED || (t === d.M.FETCHED && d.Z.isGuildProductsCacheExpired(e))) && n && c.EB(e), s(!n);
            }, [e, n, t, r]),
            { listingsLoaded: t === d.M.FETCHED && !r }
        );
    },
    h = function (e, t) {
        let { requireCurrentGuild: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
            r = (0, a.e7)([o.Z], () => o.Z.isConnected()),
            s = (0, a.e7)([u.Z], () => u.Z.getGuildId());
        return (
            i.useEffect(() => {
                let i = d.Z.getGuildProductFetchState(t);
                if ((!n || s === e) && r && i === d.M.NOT_FETCHED)
                    try {
                        c.cf(e, t);
                    } catch (e) {}
            }, [e, t, r, s, n]),
            (0, a.e7)([d.Z], () => d.Z.getGuildProduct(t))
        );
    },
    p = function (e) {
        let { publishedOnly: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, a.e7)([d.Z, s.Z], () => d.Z.getGuildProductsForGuild(e, { publishedOnly: null != t ? t : !s.Z.isViewingServerShop(e) }));
    },
    m = (e) => (0, a.e7)([d.Z], () => (null == e ? void 0 : d.Z.getGuildProduct(e))),
    I = (e) => (0, a.e7)([l.Z], () => null != e && l.Z.can(_.Plq.ADMINISTRATOR, e));
