n.d(t, {
    E: function () {
        return s;
    }
});
var r = n(411104);
var i = n(47120);
function a(e, t, n) {
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
function o(e, t, n) {
    t.forEach((e) => {
        e.trackExposure(n);
    });
}
class s {
    registeredExperimentIds() {
        return this.experiments.map((e) => e.definition.id);
    }
    trigger() {
        o(this.triggerPoint, this.experiments, this.params);
    }
    constructor(e, t, n) {
        a(this, 'experiments', void 0), a(this, 'triggerPoint', void 0), a(this, 'params', void 0);
        (this.experiments = e), (this.triggerPoint = t), (this.params = n);
    }
}
