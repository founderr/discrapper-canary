n.d(t, {
    DE: function () {
        return p;
    },
    gr: function () {
        return I;
    },
    i1: function () {
        return h;
    },
    tD: function () {
        return m;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(512722),
    o = n.n(a),
    s = n(570140),
    l = n(821849),
    u = n(15640),
    c = n(509545),
    d = n(74538),
    _ = n(981631),
    E = n(474936);
let f = 10027;
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...E.YQ];
    return null == e || c.Z.hasPaymentSourceForSKUIds(e, t)
        ? Promise.resolve()
        : new Promise((e, n) => {
              s.Z.wait(async () => {
                  try {
                      await (0, l.Gn)(t), e();
                  } catch (e) {
                      n(e);
                  }
              });
          });
}
function p(e, t, n) {
    let r,
        i = [],
        a = [],
        s = { purchaseType: n ? _.tuJ.GIFT : _.tuJ.DEFAULT };
    return (r = 'string' == typeof e ? c.Z.get(e) : e), o()(r, 'subscription plan not loaded'), null != t && c.Z.hasPaymentSourceForSKUId(t, r.skuId) && (s.paymentSourceId = t), (i = (a = (0, d.T4)(r.id, s)).map((e) => e.currency)).length < 1 && (i = [_.pKx.USD]), i;
}
function m(e, t, n) {
    let r = c.Z.get(e);
    return o()(null != r, 'plan is undefined'), p(r, n, !1).includes(t);
}
function I(e, t, n, r, a) {
    let [o, s] = i.useReducer(
            (e, t) => ({
                ...e,
                ...t
            }),
            null != n
                ? {
                      paymentSourceId: n,
                      currency: e,
                      loaded: !1
                  }
                : {
                      currency: e,
                      loaded: !1
                  }
        ),
        l = (0, u.V)(a);
    i.useEffect(() => {
        (async () => {
            try {
                await h(n, a);
            } catch (e) {
                if (e.code !== f) throw e;
            }
            let e = [];
            null != t && null != c.Z.get(t) && (e = p(t, n, r)),
                e.length > 0
                    ? s({
                          paymentSourceId: n,
                          currency: e[0],
                          loaded: !0
                      })
                    : s({
                          paymentSourceId: n,
                          loaded: !1
                      });
        })();
    }, [n, JSON.stringify(a), t, r, l]);
    let d = o.paymentSourceId !== n || null == t || !l || !0 !== o.loaded;
    return {
        hasFetchedSubscriptionPlans: l,
        priceOptions: o,
        setCurrency: (e) => {
            s({ currency: e });
        },
        currencyLoading: d
    };
}
