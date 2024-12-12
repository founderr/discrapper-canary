r.d(n, {
    L: function () {
        return d;
    }
});
var i = r(47120);
var a = r(411104);
var s = r(230367),
    o = r(320215),
    l = r(240773),
    u = r(495852);
class c extends u.C {
    create(e) {
        let n = {
            clientVersion: 0,
            serverVersion: 0,
            dataVersion: 0
        };
        return (
            globalThis.Object.defineProperty(n, l.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, o.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    a.clientVersion = e.uint32();
                    break;
                case 2:
                    a.serverVersion = e.uint32();
                    break;
                case 3:
                    a.dataVersion = e.uint32();
                    break;
                default:
                    let o = r.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let l = e.skip(i);
                    !1 !== o && (!0 === o ? s.z.onRead : o)(this.typeName, a, n, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        0 !== e.clientVersion && n.tag(1, s.TD.Varint).uint32(e.clientVersion), 0 !== e.serverVersion && n.tag(2, s.TD.Varint).uint32(e.serverVersion), 0 !== e.dataVersion && n.tag(3, s.TD.Varint).uint32(e.dataVersion);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, n), n;
    }
    constructor() {
        super('discord_protos.discord_users.v1.Versions', [
            {
                no: 1,
                name: 'client_version',
                kind: 'scalar',
                T: 13
            },
            {
                no: 2,
                name: 'server_version',
                kind: 'scalar',
                T: 13
            },
            {
                no: 3,
                name: 'data_version',
                kind: 'scalar',
                T: 13
            }
        ]);
    }
}
let d = new c();
