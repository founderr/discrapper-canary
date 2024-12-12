var i = r(55935),
    a = r(70956),
    s = r(34756),
    o = r(388032);
class l extends s.Z {
    _getMessageFromRateLimit(e) {
        let n = e.body.retry_after,
            r = (0, i.TD)(0, n * a.Z.Millis.SECOND);
        return (0, i.QX)(r, {
            days: o.t['iXc/IS'],
            hours: o.t['WW9P5+'],
            minutes: o.t.I7rYen
        });
    }
    constructor(e, n) {
        super(e, n), 429 === this.status && (this.message = this._getMessageFromRateLimit(e));
    }
}
n.Z = l;
