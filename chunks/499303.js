function i(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
r.d(n, {
    I: function () {
        return a;
    }
});
class a {
    schedule(e, n) {
        this.unschedule(),
            (this.timeoutId = setTimeout(() => {
                (this.timeoutId = null), e();
            }, n));
    }
    unschedule() {
        this.scheduled() && (clearTimeout(this.timeoutId), (this.timeoutId = null));
    }
    scheduled() {
        return null !== this.timeoutId;
    }
    constructor() {
        i(this, 'timeoutId', null);
    }
}
