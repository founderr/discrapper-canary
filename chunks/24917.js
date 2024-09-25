n.d(t, {
    O: function () {
        return a;
    }
});
var r = n(411104);
function i(e, t, n) {
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
class a extends Error {
    constructor(e, t) {
        super(t), i(this, 'errorCode', void 0), i(this, 'closeCode', void 0), i(this, 'code', void 0), i(this, 'message', void 0), i(this, 'name', void 0), 'closeCode' in e ? ((this.code = e.closeCode), (this.closeCode = e.closeCode)) : ((this.code = e.errorCode), (this.errorCode = e.errorCode)), (this.message = t), (this.name = 'RPCError');
    }
}
