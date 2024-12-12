r.d(n, {
    E: function () {
        return l;
    }
});
var i = r(411104);
var a = r(47120);
function s(e, n, r) {
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
function o(e, n, r) {
    n.forEach((e) => {
        e.trackExposure(r);
    });
}
r(987338);
class l {
    registeredExperimentIds() {
        return this.experiments.map((e) => e.definition.id);
    }
    trigger() {
        o(this.triggerPoint, this.experiments, this.params);
    }
    constructor(e, n, r) {
        s(this, 'experiments', void 0), s(this, 'triggerPoint', void 0), s(this, 'params', void 0);
        (this.experiments = e), (this.triggerPoint = n), (this.params = r);
    }
}
