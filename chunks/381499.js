n.d(t, {
    D5: function () {
        return D;
    },
    Gm: function () {
        return P;
    },
    T4: function () {
        return C;
    },
    r1: function () {
        return v;
    },
    wA: function () {
        return O;
    },
    yC: function () {
        return b;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(518263);
var o = n(970173);
var s = n(520712);
var l = n(268111);
var u = n(941497);
var c = n(32026);
var d = n(480839);
var _ = n(744285);
var E = n(492257);
var f = n(873817);
var h = n(36056),
    p = n(230367),
    m = n(320215),
    I = n(240773),
    T = n(495852);
class g extends T.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(2, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, 1, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, I.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, m.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.value = e.double();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? p.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, p.TD.Bit64).double(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? p.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('google.protobuf.DoubleValue', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 1
            }
        ]);
    }
}
new g();
class S extends T.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(1, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, 1, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, I.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, m.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.value = e.float();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? p.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, p.TD.Bit32).float(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? p.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('google.protobuf.FloatValue', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 2
            }
        ]);
    }
}
new S();
class A extends T.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(h.wx.INT64, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, h.wx.INT64, h.pz.STRING, 'value')), n;
    }
    create(e) {
        let t = { value: '0' };
        return (
            globalThis.Object.defineProperty(t, I.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, m.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.value = e.int64().toString();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? p.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        '0' !== e.value && t.tag(1, p.TD.Varint).int64(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? p.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('google.protobuf.Int64Value', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 3
            }
        ]);
    }
}
let v = new A();
class N extends T.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(h.wx.UINT64, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, h.wx.UINT64, h.pz.STRING, 'value')), n;
    }
    create(e) {
        let t = { value: '0' };
        return (
            globalThis.Object.defineProperty(t, I.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, m.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.value = e.uint64().toString();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? p.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        '0' !== e.value && t.tag(1, p.TD.Varint).uint64(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? p.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('google.protobuf.UInt64Value', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 4
            }
        ]);
    }
}
let O = new N();
class R extends T.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(5, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, 5, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, I.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, m.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.value = e.int32();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? p.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, p.TD.Varint).int32(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? p.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('google.protobuf.Int32Value', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 5
            }
        ]);
    }
}
let C = new R();
class y extends T.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(13, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, 13, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, I.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, m.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.value = e.uint32();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? p.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, p.TD.Varint).uint32(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? p.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('google.protobuf.UInt32Value', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 13
            }
        ]);
    }
}
let b = new y();
class L extends T.C {
    internalJsonWrite(e, t) {
        return e.value;
    }
    internalJsonRead(e, t, n) {
        return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, 8, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: !1 };
        return (
            globalThis.Object.defineProperty(t, I.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, m.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.value = e.bool();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? p.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.value && t.tag(1, p.TD.Varint).bool(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? p.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('google.protobuf.BoolValue', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 8
            }
        ]);
    }
}
let D = new L();
class M extends T.C {
    internalJsonWrite(e, t) {
        return e.value;
    }
    internalJsonRead(e, t, n) {
        return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, 9, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: '' };
        return (
            globalThis.Object.defineProperty(t, I.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, m.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.value = e.string();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? p.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        '' !== e.value && t.tag(1, p.TD.LengthDelimited).string(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? p.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('google.protobuf.StringValue', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 9
            }
        ]);
    }
}
let P = new M();
class U extends T.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(12, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, 12, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: new Uint8Array(0) };
        return (
            globalThis.Object.defineProperty(t, I.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, m.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.value = e.bytes();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let o = e.skip(r);
                !1 !== a && (!0 === a ? p.z.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.value.length && t.tag(1, p.TD.LengthDelimited).bytes(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? p.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('google.protobuf.BytesValue', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 12
            }
        ]);
    }
}
new U();
