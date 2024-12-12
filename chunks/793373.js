r.d(t, {
    OP: function () {
        return n;
    },
    Q0: function () {
        return E;
    },
    ix: function () {
        return o;
    },
    jt: function () {
        return _;
    },
    pq: function () {
        return a;
    }
});
let a = 0,
    n = 1,
    _ = 2;
function o(e) {
    if (e < 400 && e >= 100) return { code: n };
    if (e >= 400 && e < 500)
        switch (e) {
            case 401:
                return {
                    code: _,
                    message: 'unauthenticated'
                };
            case 403:
                return {
                    code: _,
                    message: 'permission_denied'
                };
            case 404:
                return {
                    code: _,
                    message: 'not_found'
                };
            case 409:
                return {
                    code: _,
                    message: 'already_exists'
                };
            case 413:
                return {
                    code: _,
                    message: 'failed_precondition'
                };
            case 429:
                return {
                    code: _,
                    message: 'resource_exhausted'
                };
            case 499:
                return {
                    code: _,
                    message: 'cancelled'
                };
            default:
                return {
                    code: _,
                    message: 'invalid_argument'
                };
        }
    if (e >= 500 && e < 600)
        switch (e) {
            case 501:
                return {
                    code: _,
                    message: 'unimplemented'
                };
            case 503:
                return {
                    code: _,
                    message: 'unavailable'
                };
            case 504:
                return {
                    code: _,
                    message: 'deadline_exceeded'
                };
            default:
                return {
                    code: _,
                    message: 'internal_error'
                };
        }
    return {
        code: _,
        message: 'unknown_error'
    };
}
function E(e, t) {
    e.setAttribute('http.response.status_code', t);
    let r = o(t);
    'unknown_error' !== r.message && e.setStatus(r);
}
