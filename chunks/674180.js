r.d(n, {
    eC: function () {
        return p;
    },
    gX: function () {
        return h;
    },
    uP: function () {
        return _;
    }
});
var i = r(192379),
    a = r(442837),
    s = r(81897),
    o = r(423117),
    l = r(289393),
    u = r(430824),
    c = r(738774),
    d = r(981631);
let f = (e) => {
        let n = (0, s.Z)();
        i.useEffect(() => {
            if (null != e && !!e.hasFeature(d.oNc.CREATOR_MONETIZABLE_RESTRICTED) && l.Z.getMonetizationRestrictionsFetchState(e.id) === l.M.NOT_FETCHED) o.Xj(e.id, { signal: n });
        }, [e, n]);
        let r = null == e ? void 0 : e.id,
            u = (0, a.Wu)([l.Z], () => {
                var e;
                return null !== (e = l.Z.getMonetizationRestrictions(null != r ? r : d.lds)) && void 0 !== e ? e : [];
            });
        return {
            restrictions: u,
            restrictionsLoading: (0, a.e7)([l.Z], () => l.Z.getMonetizationRestrictionsFetchState(null != r ? r : d.lds) === l.M.FETCHING)
        };
    },
    _ = (e) => {
        var n;
        let r = (0, a.e7)([u.Z], () => u.Z.getGuild(e), [e]),
            { restrictions: i, restrictionsLoading: s } = f(r);
        return {
            shouldHideGuildPurchaseEntryPoints: !((null == r ? void 0 : r.hasFeature(d.oNc.CREATOR_MONETIZABLE)) || (null == r ? void 0 : r.hasFeature(d.oNc.CREATOR_MONETIZABLE_PROVISIONAL))) || (s ? null === (n = null == r ? void 0 : r.hasFeature(d.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === n || n : (0, c.uq)(i)),
            restrictionsLoading: s
        };
    },
    h = (e) => {
        var n;
        let r = (0, a.e7)([u.Z], () => u.Z.getGuild(e), [e]),
            { restrictions: i, restrictionsLoading: s } = f(r),
            o = s ? null === (n = null == r ? void 0 : r.hasFeature(d.oNc.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === n || n : (0, c.Q6)(i),
            l = !!(null == r ? void 0 : r.hasFeature(d.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING));
        return {
            shouldRestrictUpdatingCreatorMonetizationSettings: o || l,
            allowSelfRemoveMonetization: !o,
            restrictionsLoading: s
        };
    },
    p = (e) => {
        let { restrictions: n, restrictionsLoading: r } = f((0, a.e7)([u.Z], () => u.Z.getGuild(e), [e]));
        return {
            isMonetizationReapplicationDisabled: (0, c.m8)(n),
            restrictionsLoading: r
        };
    };
