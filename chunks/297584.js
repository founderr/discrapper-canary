r.d(n, {
    R: function () {
        return l;
    }
});
var i = r(230367),
    a = r(36056),
    s = r(17146),
    o = r(69122);
class l {
    constructor(e) {
        this.info = e;
    }
    prepare() {
        if (!this.fields) {
            let e = this.info.fields ? this.info.fields.concat() : [];
            this.fields = e.sort((e, n) => e.no - n.no);
        }
    }
    write(e, n, r) {
        for (let i of (this.prepare(), this.fields)) {
            let o,
                l,
                u = i.repeat,
                c = i.localName;
            if (i.oneof) {
                let n = e[i.oneof];
                if (n.oneofKind !== c) continue;
                (o = n[c]), (l = !0);
            } else (o = e[c]), (l = !1);
            switch (i.kind) {
                case 'scalar':
                case 'enum':
                    let d = 'enum' == i.kind ? a.wx.INT32 : i.T;
                    if (u) {
                        if (((0, s.hu)(Array.isArray(o)), u == a.P0.PACKED)) this.packed(n, d, i.no, o);
                        else for (let e of o) this.scalar(n, d, i.no, e, !0);
                    } else void 0 === o ? (0, s.hu)(i.opt) : this.scalar(n, d, i.no, o, l || i.opt);
                    break;
                case 'message':
                    if (u) for (let e of ((0, s.hu)(Array.isArray(o)), o)) this.message(n, r, i.T(), i.no, e);
                    else this.message(n, r, i.T(), i.no, o);
                    break;
                case 'map':
                    for (let [e, a] of ((0, s.hu)('object' == typeof o && null !== o), Object.entries(o))) this.mapEntry(n, r, i, e, a);
            }
        }
        let o = r.writeUnknownFields;
        !1 !== o && (!0 === o ? i.z.onWrite : o)(this.info.typeName, e, n);
    }
    mapEntry(e, n, r, o, l) {
        e.tag(r.no, i.TD.LengthDelimited), e.fork();
        let u = o;
        switch (r.K) {
            case a.wx.INT32:
            case a.wx.FIXED32:
            case a.wx.UINT32:
            case a.wx.SFIXED32:
            case a.wx.SINT32:
                u = Number.parseInt(o);
                break;
            case a.wx.BOOL:
                (0, s.hu)('true' == o || 'false' == o), (u = 'true' == o);
        }
        switch ((this.scalar(e, r.K, 1, u, !0), r.V.kind)) {
            case 'scalar':
                this.scalar(e, r.V.T, 2, l, !0);
                break;
            case 'enum':
                this.scalar(e, a.wx.INT32, 2, l, !0);
                break;
            case 'message':
                this.message(e, n, r.V.T(), 2, l);
        }
        e.join();
    }
    message(e, n, r, a, s) {
        void 0 !== s && (r.internalBinaryWrite(s, e.tag(a, i.TD.LengthDelimited).fork(), n), e.join());
    }
    scalar(e, n, r, i, a) {
        let [s, o, l] = this.scalarInfo(n, i);
        (!l || a) && (e.tag(r, s), e[o](i));
    }
    packed(e, n, r, o) {
        if (!o.length) return;
        (0, s.hu)(n !== a.wx.BYTES && n !== a.wx.STRING), e.tag(r, i.TD.LengthDelimited), e.fork();
        let [, l] = this.scalarInfo(n);
        for (let n = 0; n < o.length; n++) e[l](o[n]);
        e.join();
    }
    scalarInfo(e, n) {
        let r,
            s = i.TD.Varint,
            l = void 0 === n,
            u = 0 === n;
        switch (e) {
            case a.wx.INT32:
                r = 'int32';
                break;
            case a.wx.STRING:
                (u = l || !n.length), (s = i.TD.LengthDelimited), (r = 'string');
                break;
            case a.wx.BOOL:
                (u = !1 === n), (r = 'bool');
                break;
            case a.wx.UINT32:
                r = 'uint32';
                break;
            case a.wx.DOUBLE:
                (s = i.TD.Bit64), (r = 'double');
                break;
            case a.wx.FLOAT:
                (s = i.TD.Bit32), (r = 'float');
                break;
            case a.wx.INT64:
                (u = l || o.M.from(n).isZero()), (r = 'int64');
                break;
            case a.wx.UINT64:
                (u = l || o.p.from(n).isZero()), (r = 'uint64');
                break;
            case a.wx.FIXED64:
                (u = l || o.p.from(n).isZero()), (s = i.TD.Bit64), (r = 'fixed64');
                break;
            case a.wx.BYTES:
                (u = l || !n.byteLength), (s = i.TD.LengthDelimited), (r = 'bytes');
                break;
            case a.wx.FIXED32:
                (s = i.TD.Bit32), (r = 'fixed32');
                break;
            case a.wx.SFIXED32:
                (s = i.TD.Bit32), (r = 'sfixed32');
                break;
            case a.wx.SFIXED64:
                (u = l || o.M.from(n).isZero()), (s = i.TD.Bit64), (r = 'sfixed64');
                break;
            case a.wx.SINT32:
                r = 'sint32';
                break;
            case a.wx.SINT64:
                (u = l || o.M.from(n).isZero()), (r = 'sint64');
        }
        return [s, r, l || u];
    }
}
