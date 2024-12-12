var i = r(192379);
let a = (e, n) => {
    let r = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        r.current = e;
    }, [e]),
        (0, i.useEffect)(() => {
            if (null === n) return;
            let e = setTimeout(() => r.current(), n);
            return () => clearTimeout(e);
        }, [n, r]);
};
n.Z = a;
