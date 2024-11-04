n.d(t, {
    T: function () {
        return s;
    },
    h: function () {
        return a;
    }
}),
    n(47120);
var i = n(192379),
    l = n(392711);
let r = (e) => e,
    s = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            l = arguments.length > 3 ? arguments[3] : void 0,
            s = a(r, t, n, l),
            o = i.useRef(e);
        return (
            i.useEffect(() => {
                let t = s(e);
                o.current = t;
            }, [e, s]),
            0 === t ? e : o.current
        );
    },
    a = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 ? arguments[3] : void 0,
            s = i.useRef((0, l.throttle)(e, t, r));
        return (
            i.useEffect(
                () => (
                    (s.current = (0, l.throttle)(e, t, r)),
                    () => {
                        var e;
                        null === (e = s.current) || void 0 === e || e.cancel();
                    }
                ),
                [e, t, r, ...n]
            ),
            s.current
        );
    };
