r.d(t, {
    $2: function () {
        return E;
    },
    WD: function () {
        return o;
    },
    cW: function () {
        return i;
    }
});
var a,
    n,
    _ = r(573736);
function o(e) {
    return new i((t) => {
        t(e);
    });
}
function E(e) {
    return new i((t, r) => {
        r(e);
    });
}
((a = n || (n = {}))[(a.PENDING = 0)] = 'PENDING'), (a[(a.RESOLVED = 1)] = 'RESOLVED'), (a[(a.REJECTED = 2)] = 'REJECTED');
class i {
    constructor(e) {
        i.prototype.__init.call(this), i.prototype.__init2.call(this), i.prototype.__init3.call(this), i.prototype.__init4.call(this), (this._state = n.PENDING), (this._handlers = []);
        try {
            e(this._resolve, this._reject);
        } catch (e) {
            this._reject(e);
        }
    }
    then(e, t) {
        return new i((r, a) => {
            this._handlers.push([
                !1,
                (t) => {
                    if (e)
                        try {
                            r(e(t));
                        } catch (e) {
                            a(e);
                        }
                    else r(t);
                },
                (e) => {
                    if (t)
                        try {
                            r(t(e));
                        } catch (e) {
                            a(e);
                        }
                    else a(e);
                }
            ]),
                this._executeHandlers();
        });
    }
    catch(e) {
        return this.then((e) => e, e);
    }
    finally(e) {
        return new i((t, r) => {
            let a, n;
            return this.then(
                (t) => {
                    (n = !1), (a = t), e && e();
                },
                (t) => {
                    (n = !0), (a = t), e && e();
                }
            ).then(() => {
                if (n) {
                    r(a);
                    return;
                }
                t(a);
            });
        });
    }
    __init() {
        this._resolve = (e) => {
            this._setResult(n.RESOLVED, e);
        };
    }
    __init2() {
        this._reject = (e) => {
            this._setResult(n.REJECTED, e);
        };
    }
    __init3() {
        this._setResult = (e, t) => {
            if (this._state === n.PENDING) {
                if ((0, _.J8)(t)) {
                    t.then(this._resolve, this._reject);
                    return;
                }
                (this._state = e), (this._value = t), this._executeHandlers();
            }
        };
    }
    __init4() {
        this._executeHandlers = () => {
            if (this._state === n.PENDING) return;
            let e = this._handlers.slice();
            (this._handlers = []),
                e.forEach((e) => {
                    if (!e[0]) this._state === n.RESOLVED && e[1](this._value), this._state === n.REJECTED && e[2](this._value), (e[0] = !0);
                });
        };
    }
}
