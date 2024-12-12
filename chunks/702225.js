var i = r(772848);
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
function s(e) {
    return {
        channelId: e,
        sessionId: (0, i.Z)()
    };
}
class o {
    getForumChannelSessionId(e) {
        return null == this.session && (this.session = s(e)), this.session.channelId !== e && (this.session = s(e)), this.session.sessionId;
    }
    constructor() {
        a(this, 'session', void 0);
    }
}
n.Z = new o();
