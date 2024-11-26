r.d(t, {
    b: function () {
        return _;
    }
});
var a = r(394798),
    n = r(696486);
class _ {
    constructor(e = {}) {
        (this._traceId = e.traceId || (0, a.DM)()), (this._spanId = e.spanId || (0, a.DM)().substring(16));
    }
    spanContext() {
        return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: n.ve
        };
    }
    end(e) {}
    setAttribute(e, t) {
        return this;
    }
    setAttributes(e) {
        return this;
    }
    setStatus(e) {
        return this;
    }
    updateName(e) {
        return this;
    }
    isRecording() {
        return !1;
    }
    addEvent(e, t, r) {
        return this;
    }
    addLink(e) {
        return this;
    }
    addLinks(e) {
        return this;
    }
    recordException(e, t) {}
}
