n.d(t, {
    Gg: function () {
        return x;
    },
    Kb: function () {
        return D;
    },
    Ww: function () {
        return k;
    },
    ZI: function () {
        return y;
    },
    _W: function () {
        return b;
    },
    uF: function () {
        return M;
    }
});
var r = n(653041);
var i = n(998459);
var a = n(47120);
var o = n(411104);
var s = n(789020);
var l = n(392711),
    u = n.n(l),
    c = n(913527),
    d = n.n(c),
    _ = n(991637),
    E = n.n(_),
    f = n(873546),
    h = n(544891),
    p = n(355467),
    m = n(134432),
    I = n(351402),
    T = n(853872),
    g = n(78839),
    S = n(526167),
    A = n(630388),
    v = n(823379);
n(358085);
var N = n(709054),
    O = n(981631);
n(689938), E().shim();
let R = !f.tq && !f.Em && -1 !== (0, S.vu)(),
    C = 3;
function y(e, t) {
    let { analyticsSource: n, analyticsProperties: r, storeListingId: i, slug: a, channelId: o, guildId: s } = t,
        l = {
            state: {
                analyticsSource: n,
                analyticsProperties: r
            },
            search: null != i ? '?store_listing_id='.concat(i) : ''
        };
    return {
        pathname: null != o && null != s ? O.Z5c.CHANNEL(s, o, e) : O.Z5c.APPLICATION_STORE_LISTING_SKU(e, a),
        ...l
    };
}
function b(e, t, n, r) {
    var i;
    let a;
    let o = window.GLOBAL_ENV.CDN_HOST;
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
    'webp' === r && !R && (r = 'png');
    let s = 'string' == typeof t ? t : t.id,
        l = ((i = 'https:'), 'https:');
    return (
        (a =
            null != o
                ? ''.concat(l, '//').concat(o, '/app-assets/').concat(e, '/store/').concat(s, '.').concat(r)
                : ''
                      .concat(l)
                      .concat(window.GLOBAL_ENV.API_ENDPOINT)
                      .concat(O.ANM.STORE_ASSET(e, s, r))),
        null != n && (a += '?size='.concat((0, m.oO)(n * (0, m.x_)()))),
        a
    );
}
function L() {
    return new Promise(async (e) => {
        if (g.ZP.hasFetchedSubscriptions()) e();
        else if (I.Z.isSubscriptionFetching) {
            let t = () => {
                I.Z.isSubscriptionFetching ? setTimeout(t, 50) : e();
            };
            t();
        } else await (0, p.jg)(), e();
    });
}
async function D(e) {
    var t, n, r, i;
    let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (a) {
        let e = [];
        !T.Z.hasFetchedPaymentSources && e.push(null !== (n = I.Z.paymentSourcesFetchRequest) && void 0 !== n ? n : (0, p.tZ)()), !I.Z.ipCountryCodeLoaded && e.push((0, p.GE)()), e.push(L()), await Promise.allSettled(e);
    }
    let o = T.Z.getDefaultBillingCountryCode(),
        s = null !== (r = null === (t = T.Z.defaultPaymentSource) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : null,
        l = g.ZP.getPremiumTypeSubscription();
    null != l && null != l.paymentSourceId && (s = l.paymentSourceId), null === o && (o = null !== (i = I.Z.ipCountryCode) && void 0 !== i ? i : null);
    let u = {};
    if ((null != o && (u.country_code = o), null != s && (u.payment_source_id = s), null != o || null != s)) {
        if (
            ('string' == typeof e &&
                (e = {
                    url: e,
                    oldFormErrors: !0
                }),
            'string' == typeof e.query)
        )
            throw Error('string query not supported');
        e.query = {
            ...u,
            ...e.query
        };
    }
    return h.tn.get(e);
}
function M(e, t, n) {
    let r = t.getApplication(e);
    return null == r || null == r.primarySkuId ? null : n.get(r.primarySkuId);
}
function P(e, t, n) {
    var r;
    let i = null !== (r = n.getNowPlaying(e)) && void 0 !== r ? r : {},
        a = N.default
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
            .filter(v.lm)
            .sort((e, t) => t.startTime - e.startTime);
    return 0 === a.length
        ? null
        : {
              type: O.AzA.NOW_PLAYING,
              userInfo: a
          };
}
function U(e, t, n) {
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
        .filter(v.lm)
        .sort((e, t) => t.endTime - e.endTime);
    return 0 === i.length
        ? null
        : {
              type: O.AzA.EVER_PLAYED,
              userInfo: i
          };
}
let w = [];
function x(e, t, n, r, i) {
    let a = t.get(e);
    if (null == a) return w;
    let o = a.applicationId,
        s = [],
        l = [],
        c = P(o, n, r);
    null != c &&
        (s.push(c),
        (l = c.userInfo.map((e) => {
            let { user: t } = e;
            return t.id;
        })));
    let d = i.getStatisticsForApplication(o);
    if (null != d) {
        let e = d.map((e) => e.user_id);
        if (u().difference(e, l).length > 0) {
            let e = U(o, n, i);
            null != e && s.push(e);
        }
    }
    return s;
}
let G = [];
function k(e, t, n) {
    let r = t.get(e),
        i = n.getForSKU(e);
    if (null == r || null == i) return G;
    let a = [];
    (0, A.yE)(r.flags, O.l4R.HAS_FREE_PREMIUM_CONTENT) && a.push({ type: O.AzA.HAS_FREE_PREMIUM_CONTENT });
    let o = r.releaseDate;
    return (
        null != o &&
            d()().diff(o, 'months') < C &&
            (r.accessType === O.kGb.EARLY_ACCESS
                ? a.push({
                      type: O.AzA.EARLY_ACCESS,
                      releaseDate: o
                  })
                : a.push({
                      type: O.AzA.RECENT_RELEASE_DATE,
                      releaseDate: o
                  })),
        null != i.flavorText &&
            a.push({
                type: O.AzA.FLAVOR_TEXT,
                flavorText: i.flavorText
            }),
        a
    );
}
