r.d(n, {
    H: function () {
        return o;
    }
});
var i = r(411104);
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
function s(e, n) {
    if ('string' == typeof e)
        return {
            message: e,
            code: n
        };
    if (null != e.body) {
        if (null != e.body.message && !Array.isArray(e.body.message) && (null == e.body.code || !Array.isArray(e.body.code)))
            return {
                message: e.body.message,
                code: e.body.code,
                retryAfter: e.body.retry_after,
                status: e.status
            };
        {
            let n = e.body,
                r = null != n ? Object.values(n)[0] : null;
            return {
                message: null != r ? r[0] : void 0,
                fields: n,
                status: e.status
            };
        }
    }
    return {};
}
class o {
    getFieldMessage(e) {
        return null != this.fields[e] ? this.fields[e][0] : null;
    }
    constructor(e, n, r = 'An unexpected error occurred.') {
        a(this, 'message', void 0), a(this, 'code', void 0), a(this, 'retryAfter', void 0), a(this, 'fields', void 0), a(this, 'error', void 0), a(this, 'status', void 0);
        let { message: i, code: o, retryAfter: l, fields: u, status: c } = s(e, n);
        (this.message = i || r), (this.retryAfter = l), (this.code = o || -1), (this.fields = u || {}), (this.status = c), (this.error = Error(i));
    }
}
