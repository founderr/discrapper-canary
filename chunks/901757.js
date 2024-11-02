var r,
    i,
    a = n(544891),
    s = n(388032);
((r || (r = {})).ASSET_SIZE = 'BINARY_TYPE_MAX_SIZE'), ((i || (i = {})).ASSET = 'asset');
class o extends a.sX {
    constructor(e, t) {
        var n;
        super(e, t, s.intl.string(s.t.Mt8yDA));
        let r = this.getFieldErrors('asset');
        null != r && (null === (n = r[0]) || void 0 === n ? void 0 : n.code) === 'BINARY_TYPE_MAX_SIZE' && (this.message = s.intl.string(s.t.mrlScX));
    }
}
t.Z = o;
