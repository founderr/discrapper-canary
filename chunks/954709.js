var i = n(664081),
    a = n(570140),
    s = n(317770),
    r = n(863750),
    l = n(335131);
class o extends s.Z {
    _initialize() {
        a.Z.subscribe('POST_CONNECTION_OPEN', this.handlePostConnectionOpen);
    }
    _terminate() {
        a.Z.unsubscribe('POST_CONNECTION_OPEN', this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        let e = r.Z.get('shop_include_unpublished');
        (0, l.R2)({ release: e ? i.P.BETA : i.P.PROD });
    }
}
t.Z = new o();
