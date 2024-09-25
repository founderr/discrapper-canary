n.d(t, {
    E: function () {
        return E;
    }
});
var r = n(411104);
var i = n(757143);
var a = n(47120);
var o = n(230367),
    s = n(320215),
    l = n(240773),
    u = n(660284),
    c = n(69122),
    d = n(495852);
class _ extends d.C {
    now() {
        let e = this.create(),
            t = Date.now();
        return (e.seconds = c.M.from(Math.floor(t / 1000)).toString()), (e.nanos = (t % 1000) * 1000000), e;
    }
    toDate(e) {
        return new Date(1000 * c.M.from(e.seconds).toNumber() + Math.ceil(e.nanos / 1000000));
    }
    fromDate(e) {
        let t = this.create(),
            n = e.getTime();
        return (t.seconds = c.M.from(Math.floor(n / 1000)).toString()), (t.nanos = (n % 1000) * 1000000), t;
    }
    internalJsonWrite(e, t) {
        let n = 1000 * c.M.from(e.seconds).toNumber();
        if (n < Date.parse('0001-01-01T00:00:00Z') || n > Date.parse('9999-12-31T23:59:59Z')) throw Error('Unable to encode Timestamp to JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.');
        if (e.nanos < 0) throw Error('Unable to encode invalid Timestamp to JSON. Nanos must not be negative.');
        let r = 'Z';
        if (e.nanos > 0) {
            let t = (e.nanos + 1000000000).toString().substring(1);
            r = '000000' === t.substring(3) ? '.' + t.substring(0, 3) + 'Z' : '000' === t.substring(6) ? '.' + t.substring(0, 6) + 'Z' : '.' + t + 'Z';
        }
        return new Date(n).toISOString().replace('.000Z', r);
    }
    internalJsonRead(e, t, n) {
        if ('string' != typeof e) throw Error('Unable to parse Timestamp from JSON ' + (0, u.Z)(e) + '.');
        let r = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!r) throw Error('Unable to parse Timestamp from JSON. Invalid format.');
        let i = Date.parse(r[1] + '-' + r[2] + '-' + r[3] + 'T' + r[4] + ':' + r[5] + ':' + r[6] + (r[8] ? r[8] : 'Z'));
        if (Number.isNaN(i)) throw Error('Unable to parse Timestamp from JSON. Invalid value.');
        if (i < Date.parse('0001-01-01T00:00:00Z') || i > Date.parse('9999-12-31T23:59:59Z')) throw new globalThis.Error('Unable to parse Timestamp from JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.');
        return !n && (n = this.create()), (n.seconds = c.M.from(i / 1000).toString()), (n.nanos = 0), r[7] && (n.nanos = parseInt('1' + r[7] + '0'.repeat(9 - r[7].length)) - 1000000000), n;
    }
    create(e) {
        let t = {
            seconds: '0',
            nanos: 0
        };
        return (
            globalThis.Object.defineProperty(t, l.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, s.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.seconds = e.int64().toString();
                    break;
                case 2:
                    i.nanos = e.int32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let s = e.skip(r);
                    !1 !== a && (!0 === a ? o.z.onRead : a)(this.typeName, i, t, r, s);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        '0' !== e.seconds && t.tag(1, o.TD.Varint).int64(e.seconds), 0 !== e.nanos && t.tag(2, o.TD.Varint).int32(e.nanos);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? o.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('google.protobuf.Timestamp', [
            {
                no: 1,
                name: 'seconds',
                kind: 'scalar',
                T: 3
            },
            {
                no: 2,
                name: 'nanos',
                kind: 'scalar',
                T: 5
            }
        ]);
    }
}
let E = new _();
