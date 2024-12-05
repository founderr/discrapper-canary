r(47120);
var i = r(192379);
t.Z = function (e, t) {
    let [r, s] = i.useState(e);
    return (
        i.useEffect(() => {
            let r = setTimeout(() => {
                s(e);
            }, t);
            return () => {
                clearTimeout(r);
            };
        }, [e, t]),
        r
    );
};
