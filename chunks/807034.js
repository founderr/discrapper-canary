function n() {
    return {
        get: (e, t, r = { miss: () => Promise.resolve() }) =>
            t()
                .then((e) => Promise.all([e, r.miss(e)]))
                .then(([e]) => e),
        set: (e, t) => Promise.resolve(t),
        delete: (e) => Promise.resolve(),
        clear: () => Promise.resolve()
    };
}
r.d(t, {
    A: function () {
        return n;
    }
});
