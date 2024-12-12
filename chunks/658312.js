var i = r(192379);
let a = 1000 / 24,
    s = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
            r = i.useRef(0),
            s = i.useRef(),
            o = i.useRef(!0),
            l = i.useCallback(() => {
                (o.current = !1), cancelAnimationFrame(r.current);
            }, []),
            u = i.useCallback(
                (i) => {
                    if (!o.current) return;
                    null == s.current && (s.current = i);
                    let a = i - s.current;
                    a >= n && ((s.current = i), e(a)), (r.current = requestAnimationFrame(u));
                },
                [e, n]
            ),
            c = i.useCallback(() => {
                (o.current = !0), (s.current = void 0), (r.current = requestAnimationFrame(u));
            }, [u]);
        return (
            i.useEffect(() => ((r.current = requestAnimationFrame(u)), () => l()), []),
            {
                stop: l,
                reset: c,
                ticking: o
            }
        );
    };
n.Z = s;
