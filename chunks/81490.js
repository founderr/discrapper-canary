n(47120);
var a = n(192379),
    i = n(796075),
    r = n(481060);
let l = 'undefined' == typeof ResizeObserver ? i.d : ResizeObserver,
    s = new Map(),
    o = new l((e) => {
        e.forEach((e) => {
            var t;
            let { target: n } = e;
            null === (t = s.get(n)) || void 0 === t || t(e);
        });
    });
t.Z = () => {
    let e = a.useRef(null),
        [t, n] = a.useState(400),
        i = a.useCallback(() => {
            null !== e.current && n(e.current.clientWidth);
        }, [n, e]);
    return (
        (0, r.useResizeObserverSubscription)({
            ref: e,
            key: 'forum-container',
            onUpdate: i,
            resizeObserver: o,
            listenerMap: s
        }),
        {
            containerRef: e,
            containerWidth: t
        }
    );
};
