function r(e) {
    return (r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
i = { value: !0 };
var i,
    a,
    s = 'https://js.stripe.com/v3',
    o = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
    l = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
    u = function () {
        for (var e = document.querySelectorAll('script[src^="'.concat(s, '"]')), n = 0; n < e.length; n++) {
            var r = e[n];
            if (!!o.test(r.src)) return r;
        }
        return null;
    },
    c = function (e) {
        var n = e && !e.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
            r = document.createElement('script');
        r.src = ''.concat(s).concat(n);
        var i = document.head || document.body;
        if (!i) throw Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
        return i.appendChild(r), r;
    },
    d = function (e, n) {
        if (!!e && !!e._registerWrapper)
            e._registerWrapper({
                name: 'stripe-js',
                version: '3.3.0',
                startTime: n
            });
    },
    f = null,
    _ = null,
    h = null,
    p = function (e) {
        return function () {
            e(Error('Failed to load Stripe.js'));
        };
    },
    m = function (e, n) {
        return function () {
            window.Stripe ? e(window.Stripe) : n(Error('Stripe.js not available'));
        };
    },
    g = function (e) {
        return null !== f
            ? f
            : (f = new Promise(function (n, r) {
                  if ('undefined' == typeof window || 'undefined' == typeof document) {
                      n(null);
                      return;
                  }
                  if ((window.Stripe && e && console.warn(l), window.Stripe)) {
                      n(window.Stripe);
                      return;
                  }
                  try {
                      var i,
                          a = u();
                      a && e ? console.warn(l) : a ? a && null !== h && null !== _ && (a.removeEventListener('load', h), a.removeEventListener('error', _), null === (i = a.parentNode) || void 0 === i || i.removeChild(a), (a = c(e))) : (a = c(e)), (h = m(n, r)), (_ = p(r)), a.addEventListener('load', h), a.addEventListener('error', _);
                  } catch (e) {
                      r(e);
                      return;
                  }
              })).catch(function (e) {
                  return (f = null), Promise.reject(e);
              });
    },
    E = function (e, n, r) {
        if (null === e) return null;
        var i = e.apply(void 0, n);
        return d(i, r), i;
    },
    v = function (e) {
        var n = 'invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    '.concat(JSON.stringify(e), '\n');
        if (null === e || 'object' !== r(e)) throw Error(n);
        if (1 === Object.keys(e).length && 'boolean' == typeof e.advancedFraudSignals) return e;
        throw Error(n);
    },
    I = !1,
    T = function () {
        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
        I = !0;
        var i = Date.now();
        return g(a).then(function (e) {
            return E(e, n, i);
        });
    };
(T.setLoadParameters = function (e) {
    if (
        !(
            I &&
            a &&
            Object.keys(v(e)).reduce(function (n, r) {
                var i;
                return n && e[r] === (null === (i = a) || void 0 === i ? void 0 : i[r]);
            }, !0)
        )
    ) {
        if (I) throw Error('You cannot change load parameters after calling loadStripe');
        a = v(e);
    }
}),
    (n.loadStripe = T);
