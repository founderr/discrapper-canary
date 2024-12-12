r.d(t, {
    UK: function () {
        return c;
    },
    xU: function () {
        return i;
    }
});
var a = r(578346),
    n = r(370336),
    _ = r(101284),
    o = r(573736),
    E = r(395848);
let i = '__sentry_xhr_v3__';
function c(e) {
    (0, a.Hj)('xhr', e), (0, a.D2)('xhr', s);
}
function s() {
    if (!E.m.XMLHttpRequest) return;
    let e = XMLHttpRequest.prototype;
    (0, n.hl)(e, 'open', function (e) {
        return function (...t) {
            let r = 1000 * (0, _.ph)(),
                E = (0, o.HD)(t[0]) ? t[0].toUpperCase() : void 0,
                c = (function (e) {
                    if ((0, o.HD)(e)) return e;
                    try {
                        return e.toString();
                    } catch (e) {}
                })(t[1]);
            if (!E || !c) return e.apply(this, t);
            (this[i] = {
                method: E,
                url: c,
                request_headers: {}
            }),
                'POST' === E && c.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
            let s = () => {
                let e = this[i];
                if (!!e) {
                    if (4 === this.readyState) {
                        try {
                            e.status_code = this.status;
                        } catch (e) {}
                        let t = {
                            endTimestamp: 1000 * (0, _.ph)(),
                            startTimestamp: r,
                            xhr: this
                        };
                        (0, a.rK)('xhr', t);
                    }
                }
            };
            return (
                'onreadystatechange' in this && 'function' == typeof this.onreadystatechange
                    ? (0, n.hl)(this, 'onreadystatechange', function (e) {
                          return function (...t) {
                              return s(), e.apply(this, t);
                          };
                      })
                    : this.addEventListener('readystatechange', s),
                (0, n.hl)(this, 'setRequestHeader', function (e) {
                    return function (...t) {
                        let [r, a] = t,
                            n = this[i];
                        return n && (0, o.HD)(r) && (0, o.HD)(a) && (n.request_headers[r.toLowerCase()] = a), e.apply(this, t);
                    };
                }),
                e.apply(this, t)
            );
        };
    }),
        (0, n.hl)(e, 'send', function (e) {
            return function (...t) {
                let r = this[i];
                if (!r) return e.apply(this, t);
                void 0 !== t[0] && (r.body = t[0]);
                let n = {
                    startTimestamp: 1000 * (0, _.ph)(),
                    xhr: this
                };
                return (0, a.rK)('xhr', n), e.apply(this, t);
            };
        });
}
