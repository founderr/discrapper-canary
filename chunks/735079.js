e.d(n, {
    J: function () {
        return r;
    }
});
var i = e(601964);
class r extends i.ZP {
    constructor(t) {
        var n, e, i;
        super(t),
            (n = this),
            (i = void 0),
            (e = 'approximateMemberCount') in n
                ? Object.defineProperty(n, e, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (n[e] = i),
            (this.approximateMemberCount = t.approximate_member_count);
    }
}
