n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(920103);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'vertical',
        [n] = (0, i.useState)(
            () =>
                new a.Z({
                    tension: 200,
                    friction: 35,
                    mass: 2,
                    clamp: !0,
                    callback: (n, r) => {
                        let { current: i } = e;
                        if (null == i) return r();
                        'horizontal' === t ? (i.scrollLeft = n) : (i.scrollTop = n);
                    },
                    getNodeWindow: () => {
                        var t, n, r;
                        return null !== (r = null === (n = e.current) || void 0 === n ? void 0 : null === (t = n.ownerDocument) || void 0 === t ? void 0 : t.defaultView) && void 0 !== r ? r : null;
                    }
                })
        );
    return n;
}
