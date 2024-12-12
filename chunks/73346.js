r.d(n, {
    Gg: function () {
        return U;
    },
    Kb: function () {
        return x;
    },
    Ww: function () {
        return G;
    },
    ZI: function () {
        return O;
    },
    _W: function () {
        return D;
    },
    uF: function () {
        return w;
    }
});
var i = r(653041);
var a = r(998459);
var s = r(47120);
var o = r(411104);
var l = r(789020);
var u = r(392711),
    c = r.n(u),
    d = r(913527),
    f = r.n(d),
    _ = r(991637),
    h = r.n(_),
    p = r(873546),
    m = r(544891),
    g = r(355467),
    E = r(134432),
    v = r(351402),
    I = r(853872),
    T = r(78839),
    b = r(526167),
    y = r(630388),
    S = r(823379);
r(358085);
var A = r(709054),
    N = r(981631);
r(388032), h().shim();
let C = !p.tq && !p.Em && -1 !== (0, b.vu)(),
    R = 3;
function O(e, n) {
    let { analyticsSource: r, analyticsProperties: i, storeListingId: a, slug: s, channelId: o, guildId: l } = n,
        u = {
            state: {
                analyticsSource: r,
                analyticsProperties: i
            },
            search: null != a ? '?store_listing_id='.concat(a) : ''
        };
    return {
        pathname: null != o && null != l ? N.Z5c.CHANNEL(l, o, e) : N.Z5c.APPLICATION_STORE_LISTING_SKU(e, s),
        ...u
    };
}
function D(e, n, r, i) {
    var a;
    let s;
    let o = window.GLOBAL_ENV.CDN_HOST;
    if (null == i)
        switch (n.mimeType || n.mime_type) {
            case 'video/quicktime':
            case 'video/mp4':
                i = 'mp4';
                break;
            case 'image/gif':
                i = 'gif';
                break;
            default:
                i = 'webp';
        }
    'webp' === i && !C && (i = 'png');
    let l = 'string' == typeof n ? n : n.id,
        u = ((a = 'https:'), 'https:');
    return (
        (s =
            null != o
                ? ''.concat(u, '//').concat(o, '/app-assets/').concat(e, '/store/').concat(l, '.').concat(i)
                : ''
                      .concat(u)
                      .concat(window.GLOBAL_ENV.API_ENDPOINT)
                      .concat(N.ANM.STORE_ASSET(e, l, i))),
        null != r && (s += '?size='.concat((0, E.oO)(r * (0, E.x_)()))),
        s
    );
}
function L() {
    return new Promise(async (e) => {
        if (T.ZP.hasFetchedSubscriptions()) e();
        else if (v.Z.isSubscriptionFetching) {
            let n = () => {
                v.Z.isSubscriptionFetching ? setTimeout(n, 50) : e();
            };
            n();
        } else await (0, g.jg)(), e();
    });
}
async function x(e) {
    var n, r, i, a;
    let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (s) {
        let e = [];
        !I.Z.hasFetchedPaymentSources && e.push(null !== (r = v.Z.paymentSourcesFetchRequest) && void 0 !== r ? r : (0, g.tZ)()), !v.Z.ipCountryCodeLoaded && e.push((0, g.GE)()), e.push(L()), await Promise.allSettled(e);
    }
    let o = I.Z.getDefaultBillingCountryCode(),
        l = null !== (i = null === (n = I.Z.defaultPaymentSource) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null,
        u = T.ZP.getPremiumTypeSubscription();
    null != u && null != u.paymentSourceId && (l = u.paymentSourceId), null === o && (o = null !== (a = v.Z.ipCountryCode) && void 0 !== a ? a : null);
    let c = {};
    if ((null != o && (c.country_code = o), null != l && (c.payment_source_id = l), null != o || null != l)) {
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
            ...c,
            ...e.query
        };
    }
    return m.tn.get(e);
}
function w(e, n, r) {
    let i = n.getApplication(e);
    return null == i || null == i.primarySkuId ? null : r.get(i.primarySkuId);
}
function P(e, n, r) {
    var i;
    let a = null !== (i = r.getNowPlaying(e)) && void 0 !== i ? i : {},
        s = A.default
            .keys(a)
            .map((e) => {
                let r = n.getUser(e);
                return null == r
                    ? null
                    : {
                          user: r,
                          startTime: a[r.id].startedPlaying
                      };
            })
            .filter(S.lm)
            .sort((e, n) => n.startTime - e.startTime);
    return 0 === s.length
        ? null
        : {
              type: N.AzA.NOW_PLAYING,
              userInfo: s
          };
}
function M(e, n, r) {
    let i = r.getStatisticsForApplication(e);
    if (null == i) return null;
    let a = i
        .map((e) => {
            let r = n.getUser(e.user_id);
            return null == r
                ? null
                : {
                      user: r,
                      endTime: Date.parse(e.last_played_at)
                  };
        })
        .filter(S.lm)
        .sort((e, n) => n.endTime - e.endTime);
    return 0 === a.length
        ? null
        : {
              type: N.AzA.EVER_PLAYED,
              userInfo: a
          };
}
let k = [];
function U(e, n, r, i, a) {
    let s = n.get(e);
    if (null == s) return k;
    let o = s.applicationId,
        l = [],
        u = [],
        d = P(o, r, i);
    null != d &&
        (l.push(d),
        (u = d.userInfo.map((e) => {
            let { user: n } = e;
            return n.id;
        })));
    let f = a.getStatisticsForApplication(o);
    if (null != f) {
        let e = f.map((e) => e.user_id);
        if (c().difference(e, u).length > 0) {
            let e = M(o, r, a);
            null != e && l.push(e);
        }
    }
    return l;
}
let B = [];
function G(e, n, r) {
    let i = n.get(e),
        a = r.getForSKU(e);
    if (null == i || null == a) return B;
    let s = [];
    (0, y.yE)(i.flags, N.l4R.HAS_FREE_PREMIUM_CONTENT) && s.push({ type: N.AzA.HAS_FREE_PREMIUM_CONTENT });
    let o = i.releaseDate;
    return (
        null != o &&
            f()().diff(o, 'months') < R &&
            (i.accessType === N.kGb.EARLY_ACCESS
                ? s.push({
                      type: N.AzA.EARLY_ACCESS,
                      releaseDate: o
                  })
                : s.push({
                      type: N.AzA.RECENT_RELEASE_DATE,
                      releaseDate: o
                  })),
        null != a.flavorText &&
            s.push({
                type: N.AzA.FLAVOR_TEXT,
                flavorText: a.flavorText
            }),
        s
    );
}
