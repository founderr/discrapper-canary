r.d(t, {
    O1: function () {
        return c;
    }
});
var a = r(349812),
    n = r(617726),
    _ = r(387486);
function o(e) {
    return new Promise((t, r) => {
        (e.oncomplete = e.onsuccess = () => t(e.result)), (e.onabort = e.onerror = () => r(e.error));
    });
}
function E(e) {
    return o(e.getAllKeys());
}
function i(e) {
    let t;
    function r() {
        return (
            void 0 == t &&
                (t = (function (e, t) {
                    let r = indexedDB.open(e);
                    r.onupgradeneeded = () => r.result.createObjectStore(t);
                    let a = o(r);
                    return (e) => a.then((r) => e(r.transaction(t, 'readwrite').objectStore(t)));
                })(e.dbName || 'sentry-offline', e.storeName || 'queue')),
            t
        );
    }
    return {
        push: async (t) => {
            try {
                var a, _, i;
                let c = await (0, n.V$)(t);
                await ((a = r()),
                (_ = c),
                (i = e.maxQueueSize || 30),
                a((e) =>
                    E(e).then((t) => {
                        if (!(t.length >= i)) return e.put(_, Math.max(...t, 0) + 1), o(e.transaction);
                    })
                ));
            } catch (e) {}
        },
        unshift: async (t) => {
            try {
                var a, _, i;
                let c = await (0, n.V$)(t);
                await ((a = r()),
                (_ = c),
                (i = e.maxQueueSize || 30),
                a((e) =>
                    E(e).then((t) => {
                        if (!(t.length >= i)) return e.put(_, Math.min(...t, 0) - 1), o(e.transaction);
                    })
                ));
            } catch (e) {}
        },
        shift: async () => {
            try {
                let e = await r()((e) =>
                    E(e).then((t) => {
                        let r = t[0];
                        if (null != r) return o(e.get(r)).then((t) => (e.delete(r), o(e.transaction).then(() => t)));
                    })
                );
                if (e) return (0, n.f4)(e);
            } catch (e) {}
        }
    };
}
function c(e = _.f) {
    var t;
    return (
        (t = (0, a.Pd)(e)),
        (e) =>
            t({
                ...e,
                createStore: i
            })
    );
}
