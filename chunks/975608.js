n(411104);
var i = n(192379),
    l = n(960048);
t.Z = (e, t, n, a, r) => {
    let s = (0, i.useRef)(!1);
    (0, i.useEffect)(() => {
        if (t && !s.current) {
            s.current = !0;
            let t = setTimeout(() => {
                let t = Error(''.concat(e, ' is taking too long to load.'));
                l.Z.setExtra({
                    loadingState: a,
                    loadingTimeSeconds: n
                }),
                    l.Z.captureException(t, {
                        ...r,
                        tags: { ...(null == r ? void 0 : r.tags) }
                    });
            }, 1000 * n);
            return () => {
                clearTimeout(t);
            };
        }
    }, [t, n]);
};
