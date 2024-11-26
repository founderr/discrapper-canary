r.d(t, {
    N: function () {
        return a;
    }
});
let a = (e, t, r) => {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            let a = new PerformanceObserver((e) => {
                Promise.resolve().then(() => {
                    t(e.getEntries());
                });
            });
            return (
                a.observe(
                    Object.assign(
                        {
                            type: e,
                            buffered: !0
                        },
                        r || {}
                    )
                ),
                a
            );
        }
    } catch (e) {}
};
