n.d(t, {
    R: function () {
        return o;
    },
    i: function () {
        return a;
    }
});
var r = n(470079),
    l = n(442837),
    i = n(19780),
    u = n(959457),
    s = n(630759);
function o(e) {
    let { userId: t } = e;
    return (0, l.e7)([i.Z, u.Z], () => (0, s.MA)(t, [i.Z, u.Z]));
}
function a(e) {
    let { isKeyConsistent: t, channelId: n, userId: l, nickname: i, onAlertOpen: u } = e,
        o = r.useRef(null);
    r.useEffect(() => {
        t || null != o.current
            ? (clearTimeout(o.current), (o.current = null))
            : (o.current = setTimeout(() => {
                  u(),
                      (0, s.lg)({
                          userId: l,
                          channelId: n,
                          nickname: i
                      });
              }, 1000));
        let e = o.current;
        return () => {
            clearTimeout(e);
        };
    }, [n, t, i, u, l]);
}
