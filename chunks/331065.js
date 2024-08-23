t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(81825),
    a = t(156570);
function r(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class o extends i.Z {
    static createFromServer(e) {
        return new o({
            subscriptions: e.subscriptions.map((e) => a.Z.createFromServer(o.convertStoreListing(e))),
            otps: e.otps.map((e) => a.Z.createFromServer(o.convertStoreListing(e)))
        });
    }
    static convertStoreListing(e) {
        var n;
        return {
            ...e,
            summary: e.summary.default,
            description: null === (n = e.description) || void 0 === n ? void 0 : n.default
        };
    }
    constructor(e) {
        super(), r(this, 'subscriptions', void 0), r(this, 'otps', void 0), (this.subscriptions = e.subscriptions), (this.otps = e.otps);
    }
}
