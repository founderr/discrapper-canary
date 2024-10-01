n.d(t, {
    q: function () {
        return l;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(212433),
    o = n(186325),
    s = n(717495);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'respect-motion-settings',
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = i.useContext(o.S).reducedMotion.enabled,
        l = e;
    !('animate-always' === t || ('respect-motion-settings' === t && !r)) &&
        (l =
            'function' == typeof e
                ? () => ({
                      ...e(),
                      ...s.F
                  })
                : {
                      ...e,
                      ...s.F
                  });
    let u = 'function' == typeof l,
        [c, d, _] = (0, a.useSpring)(l, n);
    return u || 3 == arguments.length ? [c, d, _] : c;
}
