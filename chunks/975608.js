n(411104);
var i = n(192379),
    l = n(960048);
t.Z = (e, t, n, r, a) => {
    let o = (0, i.useRef)(!1);
    (0, i.useEffect)(() => {
        if (t && !o.current) {
            o.current = !0;
            let t = setTimeout(() => {
                let t = Error(''.concat(e, ' is taking too long to load.'));
                l.Z.setExtra({
                    loadingState: r,
                    loadingTimeSeconds: n
                }),
                    l.Z.captureException(t, {
                        ...a,
                        tags: { ...(null == a ? void 0 : a.tags) }
                    });
            }, 1000 * n);
            return () => {
                clearTimeout(t);
            };
        }
    }, [t, n]);
};
