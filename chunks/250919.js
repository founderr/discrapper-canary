r.d(n, {
    F: function () {
        return o;
    }
});
var i = r(411104);
var a = r(153102);
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
class o {
    attach(e) {
        let { stores: n } = this;
        n.forEach((n, r) => {
            if (null == n) throw Error(''.concat(e, " tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded ").concat(r, ' stores before error.'));
            n.addReactChangeListener(this.handleStoreChange);
        });
    }
    detach() {
        let { stores: e } = this;
        e.forEach((e) => e.removeReactChangeListener(this.handleStoreChange));
    }
    constructor(e, n) {
        s(this, 'stores', void 0),
            s(this, 'changeCallback', void 0),
            s(this, 'storeVersionHandled', void 0),
            s(this, 'handleStoreChange', () => {
                let e = a.Z.getChangeSentinel();
                if (this.storeVersionHandled !== e) this.changeCallback(), (this.storeVersionHandled = e);
            }),
            (this.stores = e),
            (this.changeCallback = n);
    }
}
