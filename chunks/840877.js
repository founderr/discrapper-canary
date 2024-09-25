n.d(t, {
    ZP: function () {
        return E;
    },
    tJ: function () {
        return f;
    }
});
var r = n(411104);
var i = n(664751),
    a = n(544891),
    o = n(710845),
    s = n(70956),
    l = n(981631);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = 5000,
    d = 5;
class _ {
    async fetch(e, t, n) {
        if (!this.isCanceled)
            try {
                let i = await this.makeRequest();
                if (null == i || this.isCanceled) return;
                if (200 === i.status) e(i);
                else if (202 === i.status) {
                    var r;
                    if (((this.query.attempts = (null !== (r = this.query.attempts) && void 0 !== r ? r : 0) + 1), this.query.attempts > d)) return;
                    let a = parseInt(i.headers['retry-after']);
                    (this.retryDelay = isNaN(a) || 0 === a ? c : a * s.Z.Millis.SECOND), this.retryLater(e, t, n), t(i);
                }
            } catch (e) {
                new o.Z('SearchFetcher').error(e), n(e);
            }
    }
    cancel() {
        (this.isCanceled = !0), null != this.indexingPollId && clearTimeout(this.indexingPollId);
    }
    retryLater(e, t, n) {
        null != this.indexingPollId && clearTimeout(this.indexingPollId), (this.indexingPollId = setTimeout(this.fetch.bind(this, e, t, n), this.retryDelay));
    }
    constructor(e, t, n) {
        u(this, 'indexingPollId', void 0), u(this, 'searchId', void 0), u(this, 'searchType', void 0), u(this, 'query', void 0), u(this, 'retryDelay', void 0), u(this, 'isCanceled', !1), (this.searchId = e), (this.searchType = t), (this.query = n);
    }
}
class E extends _ {
    getEndpoint() {
        switch (this.searchType) {
            case l.aib.DMS:
                return l.ANM.SEARCH_DMS;
            case l.aib.FAVORITES:
                return l.ANM.SEARCH_FAVORITES;
            case l.aib.GUILD:
                if (null == this.searchId || '' === this.searchId) return;
                return l.ANM.SEARCH_GUILD(this.searchId);
            case l.aib.CHANNEL:
                if (null == this.searchId || '' === this.searchId) return;
                return l.ANM.SEARCH_CHANNEL(this.searchId);
            default:
                throw Error('[SearchFetcher] Unhandled search type: '.concat(this.searchType));
        }
    }
    makeRequest() {
        let e = this.getEndpoint();
        return null == e
            ? null
            : a.tn.get({
                  url: e,
                  query: i.stringify(this.query),
                  oldFormErrors: !0
              });
    }
}
class f extends _ {
    getEndpoint() {
        switch (this.searchType) {
            case l.aib.DMS:
                return l.ANM.SEARCH_TABS_DMS;
            case l.aib.GUILD_CHANNEL:
            case l.aib.GUILD:
                if (null == this.searchId || '' === this.searchId) return;
                return l.ANM.SEARCH_TABS_GUILD(this.searchId);
            case l.aib.CHANNEL:
                if (null == this.searchId || '' === this.searchId) return;
                return l.ANM.SEARCH_TABS_CHANNEL(this.searchId);
            default:
                throw Error('[SearchFetcher] Unhandled search type: '.concat(this.searchType));
        }
    }
    makeRequest() {
        let e = this.getEndpoint();
        return null == e
            ? null
            : a.tn.post({
                  url: e,
                  body: this.payload,
                  oldFormErrors: !0
              });
    }
    constructor(e, t, n, r) {
        super(e, t, n), u(this, 'payload', void 0), (this.payload = r);
    }
}
