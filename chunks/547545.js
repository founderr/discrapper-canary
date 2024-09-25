n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(689938);
function i(e, t, n) {
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
class a {
    announce(e, t, n) {
        this.announcer.announce(e, t, n);
    }
    announceDrag(e, t) {
        if (null == e) return;
        let n = this.getName(e, t);
        this.announce(r.Z.Messages.DND_ITEM_PICKED_UP.format({ itemName: n }));
    }
    announceHover(e, t) {
        null != e && this.announce(this.getName(e, t));
    }
    announceDrop() {
        this.announce(r.Z.Messages.DND_ITEM_DROPPED);
    }
    announceCancel() {
        this.announce(r.Z.Messages.DND_DRAG_CANCELED);
    }
    clear() {
        this.announcer.clearAnnouncements();
    }
    getName(e, t) {
        var n, r;
        return null !== (r = null !== (n = e.getAttribute('data-dnd-name')) && void 0 !== n ? n : e.getAttribute('aria-label')) && void 0 !== r ? r : t;
    }
    constructor(e) {
        if ((i(this, 'announcer', void 0), null != e)) this.announcer = e;
        else {
            let e = n(408160);
            this.announcer = {
                announce: e.announce,
                clearAnnouncements: e.clearAnnouncer
            };
        }
    }
}
