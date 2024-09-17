t(411104);
var l = t(470079),
    i = t(960048);
n.Z = (e, n, t, u, o) => {
    let a = (0, l.useRef)(!1);
    (0, l.useEffect)(() => {
        if (n && !a.current) {
            a.current = !0;
            let n = setTimeout(() => {
                let n = Error(''.concat(e, ' is taking too long to load.'));
                i.Z.setExtra({
                    loadingState: u,
                    loadingTimeSeconds: t
                }),
                    i.Z.captureException(n, {
                        ...o,
                        tags: { ...(null == o ? void 0 : o.tags) }
                    });
            }, 1000 * t);
            return () => {
                clearTimeout(n);
            };
        }
    }, [n, t]);
};
