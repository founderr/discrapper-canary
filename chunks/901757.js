var i,
    a,
    s = r(544891),
    o = r(388032);
!(function (e) {
    e.ASSET_SIZE = 'BINARY_TYPE_MAX_SIZE';
})(i || (i = {})),
    !(function (e) {
        e.ASSET = 'asset';
    })(a || (a = {}));
class l extends s.sX {
    constructor(e, n) {
        var r;
        super(e, n, o.intl.string(o.t.Mt8yDA));
        let i = this.getFieldErrors('asset');
        null != i && (null === (r = i[0]) || void 0 === r ? void 0 : r.code) === 'BINARY_TYPE_MAX_SIZE' && (this.message = o.intl.string(o.t.mrlScX));
    }
}
n.Z = l;
