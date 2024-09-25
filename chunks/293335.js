var r = n(47120);
var i = n(724458);
var a = n(653041);
var o = n(470079);
let s = (e, t) => {
    let [n, r] = o.useState(-1),
        i = o.useRef(-1);
    return (
        o.useEffect(() => {
            let t = e.reduce((e, t) => (!e.includes(t.src) && e.push(t.src), e), []);
            r(t.length), (i.current = t.length);
        }, [e, i, r]),
        o.useEffect(() => {
            0 === n && t();
        }, [n, t]),
        {
            pending: n,
            pendingRef: i,
            setPending: r
        }
    );
};
t.Z = s;
