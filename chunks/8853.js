n.d(t, {
    t: function () {
        return c;
    }
}),
    n(47120),
    n(411104);
var i = n(230367),
    r = n(320215),
    a = n(240773),
    l = n(495852),
    s = n(740111);
class o extends l.C {
    create(e) {
        let t = {
            properties: { oneofKind: void 0 },
            contentIdentifier: ''
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, r.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = null != r ? r : this.create(),
            l = e.pos + t;
        for (; e.pos < l; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.properties = {
                        oneofKind: 'placeholder',
                        placeholder: e.string()
                    };
                    break;
                case 2:
                    a.properties = {
                        oneofKind: 'announcementModalVariant1',
                        announcementModalVariant1: s.xY.internalBinaryRead(e, e.uint32(), n, a.properties.announcementModalVariant1)
                    };
                    break;
                case 3:
                    a.contentIdentifier = e.string();
                    break;
                default:
                    let l = n.readUnknownField;
                    if ('throw' === l) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== l && (!0 === l ? i.z.onRead : l)(this.typeName, a, t, r, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        'placeholder' === e.properties.oneofKind && t.tag(1, i.TD.LengthDelimited).string(e.properties.placeholder), 'announcementModalVariant1' === e.properties.oneofKind && s.xY.internalBinaryWrite(e.properties.announcementModalVariant1, t.tag(2, i.TD.LengthDelimited).fork(), n).join(), '' !== e.contentIdentifier && t.tag(3, i.TD.LengthDelimited).string(e.contentIdentifier);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties', [
            {
                no: 1,
                name: 'placeholder',
                kind: 'scalar',
                oneof: 'properties',
                T: 9
            },
            {
                no: 2,
                name: 'announcement_modal_variant_1',
                kind: 'message',
                oneof: 'properties',
                T: () => s.xY
            },
            {
                no: 3,
                name: 'content_identifier',
                kind: 'scalar',
                T: 9
            }
        ]);
    }
}
let c = new o();
