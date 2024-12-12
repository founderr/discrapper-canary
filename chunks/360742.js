r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(81825),
    a = r(598077);
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
class o extends i.Z {
    static createFromServer(e) {
        return new o({
            ...e,
            user: new a.Z(e.user)
        });
    }
    constructor(e) {
        var n;
        super(), s(this, 'id', void 0), s(this, 'name', void 0), s(this, 'type', void 0), s(this, 'user', void 0), s(this, 'displayName', void 0), (this.id = e.id), (this.name = e.name), (this.type = e.type), (this.user = e.user), (this.displayName = null !== (n = e.name_localized) && void 0 !== n ? n : e.name);
    }
}
