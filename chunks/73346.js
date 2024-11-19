n.d(t, {
    Gg: function () {
        return C;
    },
    Kb: function () {
        return y;
    },
    Ww: function () {
        return O;
    },
    ZI: function () {
        return T;
    },
    _W: function () {
        return S;
    },
    uF: function () {
        return A;
    }
}),
    n(653041),
    n(998459),
    n(47120),
    n(411104),
    n(789020);
var r = n(392711),
    i = n.n(r),
    a = n(913527),
    s = n.n(a),
    o = n(991637),
    l = n.n(o),
    u = n(873546),
    c = n(544891),
    d = n(355467),
    f = n(134432),
    _ = n(351402),
    p = n(853872),
    h = n(78839),
    m = n(526167),
    g = n(630388),
    E = n(823379);
n(358085);
var v = n(709054),
    b = n(981631);
n(388032), l().shim();
let I = !u.tq && !u.Em && -1 !== (0, m.vu)();
function T(e, t) {
    let { analyticsSource: n, analyticsProperties: r, storeListingId: i, slug: a, channelId: s, guildId: o } = t;
    return {
        pathname: null != s && null != o ? b.Z5c.CHANNEL(o, s, e) : b.Z5c.APPLICATION_STORE_LISTING_SKU(e, a),
        state: {
            analyticsSource: n,
            analyticsProperties: r
        },
        search: null != i ? '?store_listing_id='.concat(i) : ''
    };
}
function S(e, t, n, r) {
    var i;
    let a;
    let s = window.GLOBAL_ENV.CDN_HOST;
    if (null == r)
        switch (t.mimeType || t.mime_type) {
            case 'video/quicktime':
            case 'video/mp4':
                r = 'mp4';
                break;
            case 'image/gif':
                r = 'gif';
                break;
            default:
                r = 'webp';
        }
    'webp' === r && !I && (r = 'png');
    let o = 'string' == typeof t ? t : t.id,
        l = ((i = 'https:'), 'https:');
    return (
        (a =
            null != s
                ? ''.concat(l, '//').concat(s, '/app-assets/').concat(e, '/store/').concat(o, '.').concat(r)
                : ''
                      .concat(l)
                      .concat(window.GLOBAL_ENV.API_ENDPOINT)
                      .concat(b.ANM.STORE_ASSET(e, o, r))),
        null != n && (a += '?size='.concat((0, f.oO)(n * (0, f.x_)()))),
        a
    );
}
async function y(e) {
    var t, n, r, i;
    let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (a) {
        let e = [];
        !p.Z.hasFetchedPaymentSources && e.push(null !== (n = _.Z.paymentSourcesFetchRequest) && void 0 !== n ? n : (0, d.tZ)()),
            !_.Z.ipCountryCodeLoaded && e.push((0, d.GE)()),
            e.push(
                new Promise(async (e) => {
                    if (h.ZP.hasFetchedSubscriptions()) e();
                    else if (_.Z.isSubscriptionFetching) {
                        let t = () => {
                            _.Z.isSubscriptionFetching ? setTimeout(t, 50) : e();
                        };
                        t();
                    } else await (0, d.jg)(), e();
                })
            ),
            await Promise.allSettled(e);
    }
    let s = p.Z.getDefaultBillingCountryCode(),
        o = null !== (r = null === (t = p.Z.defaultPaymentSource) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : null,
        l = h.ZP.getPremiumTypeSubscription();
    null != l && null != l.paymentSourceId && (o = l.paymentSourceId), null === s && (s = null !== (i = _.Z.ipCountryCode) && void 0 !== i ? i : null);
    let u = {};
    if ((null != s && (u.country_code = s), null != o && (u.payment_source_id = o), null != s || null != o)) {
        if (
            ('string' == typeof e &&
                (e = {
                    url: e,
                    oldFormErrors: !0,
                    rejectWithError: !1
                }),
            'string' == typeof e.query)
        )
            throw Error('string query not supported');
        e.query = {
            ...u,
            ...e.query
        };
    }
    return c.tn.get(e);
}
function A(e, t, n) {
    let r = t.getApplication(e);
    return null == r || null == r.primarySkuId ? null : n.get(r.primarySkuId);
}
let N = [];
function C(e, t, n, r, a) {
    let s = t.get(e);
    if (null == s) return N;
    let o = s.applicationId,
        l = [],
        u = [],
        c = (function (e, t, n) {
            var r;
            let i = null !== (r = n.getNowPlaying(e)) && void 0 !== r ? r : {},
                a = v.default
                    .keys(i)
                    .map((e) => {
                        let n = t.getUser(e);
                        return null == n
                            ? null
                            : {
                                  user: n,
                                  startTime: i[n.id].startedPlaying
                              };
                    })
                    .filter(E.lm)
                    .sort((e, t) => t.startTime - e.startTime);
            return 0 === a.length
                ? null
                : {
                      type: b.AzA.NOW_PLAYING,
                      userInfo: a
                  };
        })(o, n, r);
    null != c &&
        (l.push(c),
        (u = c.userInfo.map((e) => {
            let { user: t } = e;
            return t.id;
        })));
    let d = a.getStatisticsForApplication(o);
    if (null != d) {
        let e = d.map((e) => e.user_id);
        if (i().difference(e, u).length > 0) {
            let e = (function (e, t, n) {
                let r = n.getStatisticsForApplication(e);
                if (null == r) return null;
                let i = r
                    .map((e) => {
                        let n = t.getUser(e.user_id);
                        return null == n
                            ? null
                            : {
                                  user: n,
                                  endTime: Date.parse(e.last_played_at)
                              };
                    })
                    .filter(E.lm)
                    .sort((e, t) => t.endTime - e.endTime);
                return 0 === i.length
                    ? null
                    : {
                          type: b.AzA.EVER_PLAYED,
                          userInfo: i
                      };
            })(o, n, a);
            null != e && l.push(e);
        }
    }
    return l;
}
let R = [];
function O(e, t, n) {
    let r = t.get(e),
        i = n.getForSKU(e);
    if (null == r || null == i) return R;
    let a = [];
    (0, g.yE)(r.flags, b.l4R.HAS_FREE_PREMIUM_CONTENT) && a.push({ type: b.AzA.HAS_FREE_PREMIUM_CONTENT });
    let o = r.releaseDate;
    return (
        null != o &&
            3 > s()().diff(o, 'months') &&
            (r.accessType === b.kGb.EARLY_ACCESS
                ? a.push({
                      type: b.AzA.EARLY_ACCESS,
                      releaseDate: o
                  })
                : a.push({
                      type: b.AzA.RECENT_RELEASE_DATE,
                      releaseDate: o
                  })),
        null != i.flavorText &&
            a.push({
                type: b.AzA.FLAVOR_TEXT,
                flavorText: i.flavorText
            }),
        a
    );
}
