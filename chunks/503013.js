r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(81825),
    a = r(388032);
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
            id: e.id,
            liveBuildId: e.live_build_id,
            name: e.name
        });
    }
    getName(e) {
        return null != this.name ? this.name : this.id === e ? a.intl.string(a.t.AHqj6e) : a.intl.string(a.t['62f4nJ']);
    }
    constructor(e) {
        super(), s(this, 'id', void 0), s(this, 'liveBuildId', void 0), s(this, 'name', void 0), (this.id = e.id), (this.liveBuildId = e.liveBuildId), (this.name = e.name);
    }
}
