r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(81825);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class s extends i.Z {
    constructor(e) {
        var n, r;
        super(), a(this, 'id', void 0), a(this, 'layoutId', void 0), a(this, 'type', void 0), a(this, 'anchor', void 0), a(this, 'size', void 0), a(this, 'pinned', void 0), a(this, 'zIndex', void 0), a(this, 'opacity', void 0), a(this, 'meta', void 0), (this.id = e.id || ''), (this.layoutId = e.layoutId || ''), (this.type = e.type);
        let {
            top: i,
            left: s,
            bottom: o,
            right: l
        } = null !== (n = e.anchor) && void 0 !== n
            ? n
            : {
                  top: 0,
                  left: 0
              };
        'number' == typeof o ? (i = void 0) : (o = void 0),
            'number' == typeof l ? (s = void 0) : (l = void 0),
            (this.anchor = {
                top: i,
                left: s,
                bottom: o,
                right: l
            }),
            (this.size = {
                width: 0,
                height: 0,
                ...e.size
            }),
            (this.pinned = !!e.pinned),
            (this.zIndex = e.zIndex || 0),
            (this.opacity = null !== (r = e.opacity) && void 0 !== r ? r : 1),
            (this.meta = { ...e.meta });
    }
}
