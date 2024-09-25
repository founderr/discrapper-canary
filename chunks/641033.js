n.d(t, {
    Eo: function () {
        return f;
    },
    KH: function () {
        return l;
    },
    nc: function () {
        return _;
    },
    yz: function () {
        return E;
    }
});
var r = n(47120);
var i = n(724458);
var a = n(524484),
    o = n(981631);
let s = function (e, t) {
        let { multiplier: n, value: r } = e,
            [i, a] = t,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            s = r * n;
        return s <= 0
            ? 0
            : Math.min(
                  o,
                  i.reduce((e, t, n) => {
                      if (s > t) {
                          let e = a[n];
                          if (n + 1 === i.length) return a[n];
                          let r = i[n + 1],
                              o = a[n + 1],
                              l = r - t;
                          return ((s - t) / l) * (o - e) + e;
                      }
                      return s === t ? a[n] : e;
                  }, 0)
              );
    },
    l = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.qi.LEVEL_3;
        return s(e, [a.JR[t], a.u4[t]], 100000);
    },
    u = [
        [1, 0.001],
        [25, 0.3],
        [100, 0.5],
        [250, 0.8],
        [500, 0.9],
        [2500, 0.95],
        [9001, 1]
    ],
    c = u.map((e) => {
        let [t] = e;
        return t;
    }),
    d = u.map((e) => {
        let [t, n] = e;
        return n;
    }),
    _ = (e) => s(e, [c, d], 1),
    E = (e) =>
        1 === e
            ? { color: o.Ilk.BRAND_500 }
            : 2 === e || 3 === e
              ? { color: o.Ilk.GREEN_360 }
              : 4 === e || 5 === e
                ? {
                      color: o.Ilk.YELLOW_300,
                      square: !0
                  }
                : 6 === e
                  ? {
                        color: o.Ilk.RED_400,
                        square: !0
                    }
                  : {
                        color: o.Ilk.ORANGE_345,
                        flair: !0
                    };
function f(e) {
    var t;
    return e.value * (null !== (t = e.multiplier) && void 0 !== t ? t : 1);
}
