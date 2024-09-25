n.d(t, {
    L: function () {
        return c;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(230367),
    o = n(320215),
    s = n(240773),
    l = n(495852);
class u extends l.C {
    create(e) {
        let t = {
            clientVersion: 0,
            serverVersion: 0,
            dataVersion: 0
        };
        return (
            globalThis.Object.defineProperty(t, s.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, o.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.clientVersion = e.uint32();
                    break;
                case 2:
                    i.serverVersion = e.uint32();
                    break;
                case 3:
                    i.dataVersion = e.uint32();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let s = e.skip(r);
                    !1 !== o && (!0 === o ? a.z.onRead : o)(this.typeName, i, t, r, s);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.clientVersion && t.tag(1, a.TD.Varint).uint32(e.clientVersion), 0 !== e.serverVersion && t.tag(2, a.TD.Varint).uint32(e.serverVersion), 0 !== e.dataVersion && t.tag(3, a.TD.Varint).uint32(e.dataVersion);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
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
let c = new u();
