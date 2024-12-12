var i = r(544891),
    a = r(626135);
function s(e, n, r) {
    let { trackedActionData: i, ...s } = n,
        o = {
            url: s.url,
            request_method: r
        };
    return new Promise((n, r) => {
        e(s)
            .then((e) => {
                let r = i.properties;
                'function' == typeof i.properties && (r = i.properties(e)),
                    (0, a.trackNetworkAction)(i.event, {
                        status_code: e.status,
                        ...o,
                        ...r
                    }),
                    n(e);
            })
            .catch((e) => {
                var n, s;
                let l = i.properties;
                'function' == typeof i.properties && (l = i.properties(e)),
                    (0, a.trackNetworkAction)(i.event, {
                        status_code: e.status,
                        error_code: null === (n = e.body) || void 0 === n ? void 0 : n.code,
                        error_message: null === (s = e.body) || void 0 === s ? void 0 : s.message,
                        ...o,
                        ...l
                    }),
                    r(e);
            });
    });
}
let o = {
    get: function e(e) {
        return s(i.tn.get, e, 'get');
    },
    post: function e(e) {
        return s(i.tn.post, e, 'post');
    },
    put: function e(e) {
        return s(i.tn.put, e, 'put');
    },
    patch: function e(e) {
        return s(i.tn.patch, e, 'patch');
    },
    delete: function e(e) {
        return s(i.tn.del, e, 'del');
    }
};
n.Z = o;
