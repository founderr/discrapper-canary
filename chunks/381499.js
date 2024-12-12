r.d(n, {
    A8: function () {
        return y;
    },
    D5: function () {
        return w;
    },
    Gm: function () {
        return M;
    },
    T4: function () {
        return O;
    },
    r1: function () {
        return A;
    },
    wA: function () {
        return C;
    },
    yC: function () {
        return L;
    }
});
var i = r(47120);
var a = r(411104);
var s = r(518263);
var o = r(970173);
var l = r(520712);
var u = r(268111);
var c = r(941497);
var d = r(32026);
var f = r(480839);
var _ = r(744285);
var h = r(492257);
var p = r(873817);
var m = r(36056),
    g = r(230367),
    E = r(320215),
    v = r(240773),
    I = r(495852);
class T extends I.C {
    internalJsonWrite(e, n) {
        return this.refJsonWriter.scalar(2, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, 1, void 0, 'value')), r;
    }
    create(e) {
        let n = { value: 0 };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + n;
        for (; e.pos < s; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.double();
            else {
                let s = r.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? g.z.onRead : s)(this.typeName, a, n, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        0 !== e.value && n.tag(1, g.TD.Bit64).double(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
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
new T();
class b extends I.C {
    internalJsonWrite(e, n) {
        return this.refJsonWriter.scalar(1, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, 1, void 0, 'value')), r;
    }
    create(e) {
        let n = { value: 0 };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + n;
        for (; e.pos < s; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.float();
            else {
                let s = r.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? g.z.onRead : s)(this.typeName, a, n, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        0 !== e.value && n.tag(1, g.TD.Bit32).float(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
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
let y = new b();
class S extends I.C {
    internalJsonWrite(e, n) {
        return this.refJsonWriter.scalar(m.wx.INT64, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, m.wx.INT64, m.pz.STRING, 'value')), r;
    }
    create(e) {
        let n = { value: '0' };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + n;
        for (; e.pos < s; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.int64().toString();
            else {
                let s = r.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? g.z.onRead : s)(this.typeName, a, n, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        '0' !== e.value && n.tag(1, g.TD.Varint).int64(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
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
let A = new S();
class N extends I.C {
    internalJsonWrite(e, n) {
        return this.refJsonWriter.scalar(m.wx.UINT64, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, m.wx.UINT64, m.pz.STRING, 'value')), r;
    }
    create(e) {
        let n = { value: '0' };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + n;
        for (; e.pos < s; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.uint64().toString();
            else {
                let s = r.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? g.z.onRead : s)(this.typeName, a, n, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        '0' !== e.value && n.tag(1, g.TD.Varint).uint64(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
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
let C = new N();
class R extends I.C {
    internalJsonWrite(e, n) {
        return this.refJsonWriter.scalar(5, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, 5, void 0, 'value')), r;
    }
    create(e) {
        let n = { value: 0 };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + n;
        for (; e.pos < s; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.int32();
            else {
                let s = r.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? g.z.onRead : s)(this.typeName, a, n, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        0 !== e.value && n.tag(1, g.TD.Varint).int32(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
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
let O = new R();
class D extends I.C {
    internalJsonWrite(e, n) {
        return this.refJsonWriter.scalar(13, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, 13, void 0, 'value')), r;
    }
    create(e) {
        let n = { value: 0 };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + n;
        for (; e.pos < s; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.uint32();
            else {
                let s = r.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? g.z.onRead : s)(this.typeName, a, n, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        0 !== e.value && n.tag(1, g.TD.Varint).uint32(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
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
let L = new D();
class x extends I.C {
    internalJsonWrite(e, n) {
        return e.value;
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, 8, void 0, 'value')), r;
    }
    create(e) {
        let n = { value: !1 };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + n;
        for (; e.pos < s; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.bool();
            else {
                let s = r.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? g.z.onRead : s)(this.typeName, a, n, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        !1 !== e.value && n.tag(1, g.TD.Varint).bool(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
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
let w = new x();
class P extends I.C {
    internalJsonWrite(e, n) {
        return e.value;
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, 9, void 0, 'value')), r;
    }
    create(e) {
        let n = { value: '' };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + n;
        for (; e.pos < s; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.string();
            else {
                let s = r.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? g.z.onRead : s)(this.typeName, a, n, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        '' !== e.value && n.tag(1, g.TD.LengthDelimited).string(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
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
let M = new P();
class k extends I.C {
    internalJsonWrite(e, n) {
        return this.refJsonWriter.scalar(12, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, 12, void 0, 'value')), r;
    }
    create(e) {
        let n = { value: new Uint8Array(0) };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + n;
        for (; e.pos < s; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.bytes();
            else {
                let s = r.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? g.z.onRead : s)(this.typeName, a, n, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        e.value.length && n.tag(1, g.TD.LengthDelimited).bytes(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
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
new k();
