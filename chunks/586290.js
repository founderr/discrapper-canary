n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(724458),
    n(47120);
var l = n(200651),
    i = n(192379),
    r = n(512722),
    s = n.n(r),
    a = n(392711),
    o = n.n(a),
    c = n(856901),
    d = n(442837),
    u = n(481060),
    f = n(131951),
    h = n(537135),
    m = n(176940),
    x = n(388032),
    g = n(378967),
    p = n(456963),
    v = n(232186);
function j(e) {
    let { selectedSource: t, onChangeVideoDeviceSource: n, onChangeAudioDevice: r } = e;
    s()(null != t, 'Camera capture device cannot be null');
    let a = (0, m.Z)(),
        j = (0, d.e7)([f.Z], () => f.Z.getInputDevices()),
        [C, S] = i.useState(
            (function (e, t, n) {
                if (null != t && null != n) {
                    let l = t.find((t) => t.id === e);
                    if (null == l) return;
                    let i = o().reduce(n, (e, t) => ((0, c.stringSimilarity)(l.name, t.name) > (0, c.stringSimilarity)(l.name, e.name) ? t : e));
                    if (null != i) return i.id;
                }
            })(t.id, a, j)
        );
    return (
        null != C && r(C),
        (0, l.jsx)(i.Fragment, {
            children: (0, l.jsxs)(u.FormItem, {
                title: 'Capture Device',
                className: p.modalContent,
                children: [
                    (0, l.jsx)(u.FormItem, {
                        className: v.marginTop8,
                        children: (0, l.jsxs)(h.Z, {
                            children: [
                                (0, l.jsx)('span', {
                                    className: g.ellipsisText,
                                    children: t.name
                                }),
                                (0, l.jsx)(u.Button, {
                                    className: g.changeButton,
                                    color: u.Button.Colors.PRIMARY,
                                    size: u.Button.Sizes.SMALL,
                                    onClick: n,
                                    children: x.intl.string(x.t.GEgsAw)
                                })
                            ]
                        })
                    }),
                    (0, l.jsx)(u.FormItem, {
                        className: v.marginTop8,
                        title: x.intl.string(x.t.y4ooen),
                        children: (0, l.jsx)(u.SingleSelect, {
                            value: C,
                            className: v.__invalid_marginaTop8,
                            onChange: (e) => {
                                S(e), r(e);
                            },
                            options: o().map(j, (e) => {
                                let { id: t, name: n } = e;
                                return {
                                    value: t,
                                    label: n
                                };
                            })
                        })
                    })
                ]
            })
        })
    );
}
