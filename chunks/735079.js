n.d(e, {
    J: function () {
        return r;
    }
});
var i = n(601964);
class r extends i.ZP {
    constructor(t) {
        var e, n, i;
        super(t),
            (e = this),
            (i = void 0),
            (n = 'approximateMemberCount') in e
                ? Object.defineProperty(e, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[n] = i),
            (this.approximateMemberCount = t.approximate_member_count);
    }
}
