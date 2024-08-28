r.d(t, {
    O: function () {
        return u;
    }
});
var n = r(573736),
    a = r(592014),
    o = r(307854),
    i = r(356442);
class _ {
    constructor(e, t) {
        let r, n;
        (r = e ? e : new o.s()), (n = t ? t : new o.s()), (this._stack = [{ scope: r }]), (this._isolationScope = n);
    }
    withScope(e) {
        let t;
        let r = this._pushScope();
        try {
            t = e(r);
        } catch (e) {
            throw (this._popScope(), e);
        }
        return (0, n.J8)(t)
            ? t.then(
                  (e) => (this._popScope(), e),
                  (e) => {
                      throw (this._popScope(), e);
                  }
              )
            : (this._popScope(), t);
    }
    getClient() {
        return this.getStackTop().client;
    }
    getScope() {
        return this.getStackTop().scope;
    }
    getIsolationScope() {
        return this._isolationScope;
    }
    getStackTop() {
        return this._stack[this._stack.length - 1];
    }
    _pushScope() {
        let e = this.getScope().clone();
        return (
            this._stack.push({
                client: this.getClient(),
                scope: e
            }),
            e
        );
    }
    _popScope() {
        return !(this._stack.length <= 1) && !!this._stack.pop();
    }
}
function E() {
    let e = (0, i.c)(),
        t = (0, i.q)(e);
    return (t.stack = t.stack || new _((0, a.X)(), (0, a.T)()));
}
function s(e) {
    return E().withScope(e);
}
function c(e, t) {
    let r = E();
    return r.withScope(() => ((r.getStackTop().scope = e), t(e)));
}
function I(e) {
    return E().withScope(() => e(E().getIsolationScope()));
}
function u() {
    return {
        withIsolationScope: I,
        withScope: s,
        withSetScope: c,
        withSetIsolationScope: (e, t) => I(t),
        getCurrentScope: () => E().getScope(),
        getIsolationScope: () => E().getIsolationScope()
    };
}
