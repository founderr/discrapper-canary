r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(192379),
    a = r(719711),
    s = r(433517),
    o = r(579806),
    l = r(626135),
    u = r(998502),
    c = r(286035),
    d = r(981631);
function f(e) {
    var n;
    return null == e ? void 0 : null === (n = e._state) || void 0 === n ? void 0 : n.lastTestTimestamp;
}
function _() {
    return (
        i.useEffect(() => {
            window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN &&
                !0 !== s.K.get(a.SV) &&
                u.ZP.supportsFeature(d.eRX.USER_DATA_CACHE) &&
                (c.Te(),
                o.Z.userDataCache.getCached().then((e) => {
                    if (null == e) {
                        c.kb(),
                            l.default.track(
                                d.rMx.DOMAIN_MIGRATED,
                                {
                                    success: !1,
                                    has_data: !1
                                },
                                { flush: !0 }
                            );
                        return;
                    }
                    let n = Object.keys(e),
                        r = 0 !== n.length,
                        i = null != e.token,
                        u = null == e.RTCRegionStore ? null : JSON.parse(e.RTCRegionStore),
                        _ = null == u || null == f(u) || f(u) <= f(s.K.get('RTCRegionStore'));
                    r &&
                        i &&
                        !_ &&
                        (s.K.clear(),
                        n.forEach((n) => {
                            let r = e[n];
                            try {
                                s.K.set(n, JSON.parse(r));
                            } catch (e) {}
                        })),
                        l.default.track(
                            d.rMx.DOMAIN_MIGRATED,
                            {
                                success: !0,
                                current_is_newer: _,
                                has_data: r
                            },
                            { flush: !0 }
                        ),
                        s.K.set(a.SV, !0),
                        o.Z.userDataCache.deleteCache(),
                        c.Pg();
                }));
        }, []),
        null
    );
}
