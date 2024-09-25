var r = n(47120);
var i = n(433517),
    a = n(147913);
function o(e, t, n) {
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
let s = 'formGuidelinesStorageKey';
class l extends a.Z {
    _initialize() {
        let e = i.K.get(s);
        null != e && (this.seenForumGuidelines = new Set(e));
    }
    _terminate() {
        i.K.set(s, this.seenForumGuidelines);
    }
    markAsSeen(e) {
        this.seenForumGuidelines.add(e), i.K.set(s, this.seenForumGuidelines);
    }
    hasSeen(e) {
        return this.seenForumGuidelines.has(e);
    }
    constructor(...e) {
        super(...e), o(this, 'seenForumGuidelines', new Set());
    }
}
t.Z = new l();
