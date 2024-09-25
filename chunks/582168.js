n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(376398),
    s = n(825040);
function l(e) {
    null != e && e.getTracks().forEach((e) => e.stop());
}
async function u(e) {
    let { deviceId: t, width: n, height: r, disabled: i } = e;
    if (i) return null;
    try {
        return await navigator.mediaDevices.getUserMedia({
            audio: !1,
            video: {
                width: n * window.devicePixelRatio,
                height: r * window.devicePixelRatio,
                frameRate: 30,
                deviceId: t
            }
        });
    } catch (e) {
        return null;
    }
}
function c(e) {
    let { deviceId: t, width: n, height: r, disabled: c } = e,
        [d, _] = a.useState();
    return (
        a.useEffect(() => {
            let e = u({
                deviceId: t,
                width: n,
                height: r,
                disabled: c
            }).then((e) => {
                let t = null != e ? (0, o.N7)(e) : null;
                return (
                    _(t),
                    {
                        stream: e,
                        streamId: t
                    }
                );
            });
            return () => {
                e.then((e) => {
                    let { stream: t, streamId: n } = e;
                    l(t), null != n && (0, o.jC)(n);
                });
            };
        }, [t, n, r, c]),
        null == d
            ? (0, i.jsx)('div', {
                  className: 'media-engine-video',
                  style: {
                      width: n,
                      height: r
                  }
              })
            : (0, i.jsx)(s.Z, {
                  streamId: d,
                  style: {
                      width: n,
                      height: r
                  }
              })
    );
}
c.defaultProps = {
    disabled: !1,
    width: 320,
    height: 180
};
