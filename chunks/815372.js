n.d(t, {
    FL: function () {
        return l;
    },
    Ky: function () {
        return r;
    }
});
var r,
    i = n(411104);
var a = n(81825),
    o = n(981631);
function s(e, t, n) {
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
!(function (e) {
    (e.SHOP = 'SHOP'), (e.NITRO_HOME = 'NITRO_HOME'), (e.QUEST_HOME = 'QUEST_HOME');
})(r || (r = {}));
class l extends a.Z {
    static fromType(e) {
        switch (e) {
            case 'SHOP':
                return new l({
                    path: o.Z5c.COLLECTIBLES_SHOP,
                    type: 'SHOP'
                });
            case 'NITRO_HOME':
                return new l({
                    path: o.Z5c.NITRO_HOME,
                    type: 'NITRO_HOME'
                });
            case 'QUEST_HOME':
                return new l({
                    path: o.Z5c.QUEST_HOME,
                    type: 'QUEST_HOME'
                });
            default:
                throw Error('Unhandled InAppNavigationType');
        }
    }
    constructor(e) {
        super(), s(this, 'id', void 0), s(this, 'path', void 0), s(this, 'type', void 0), (this.id = e.type), (this.path = e.path), (this.type = e.type);
    }
}
