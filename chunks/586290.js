t.d(n, {
    Z: function () {
        return C;
    }
}),
    t(724458),
    t(47120);
var l = t(200651),
    i = t(192379),
    s = t(512722),
    r = t.n(s),
    a = t(392711),
    o = t.n(a),
    u = t(856901),
    c = t(442837),
    d = t(481060),
    m = t(131951),
    g = t(537135),
    h = t(176940),
    x = t(388032),
    S = t(378967),
    v = t(456963),
    Z = t(232186);
function C(e) {
    let { selectedSource: n, onChangeVideoDeviceSource: t, onChangeAudioDevice: s } = e;
    r()(null != n, 'Camera capture device cannot be null');
    let a = (0, h.Z)(),
        C = (0, c.e7)([m.Z], () => m.Z.getInputDevices()),
        [f, j] = i.useState(
            (function (e, n, t) {
                if (null != n && null != t) {
                    let l = n.find((n) => n.id === e);
                    if (null == l) return;
                    let i = o().reduce(t, (e, n) => ((0, u.stringSimilarity)(l.name, n.name) > (0, u.stringSimilarity)(l.name, e.name) ? n : e));
                    if (null != i) return i.id;
                }
            })(n.id, a, C)
        );
    return (
        null != f && s(f),
        (0, l.jsx)(i.Fragment, {
            children: (0, l.jsxs)(d.FormItem, {
                title: 'Capture Device',
                className: v.modalContent,
                children: [
                    (0, l.jsx)(d.FormItem, {
                        className: Z.marginTop8,
                        children: (0, l.jsxs)(g.Z, {
                            children: [
                                (0, l.jsx)('span', {
                                    className: S.ellipsisText,
                                    children: n.name
                                }),
                                (0, l.jsx)(d.Button, {
                                    className: S.changeButton,
                                    color: d.Button.Colors.PRIMARY,
                                    size: d.Button.Sizes.SMALL,
                                    onClick: t,
                                    children: x.intl.string(x.t.GEgsAw)
                                })
                            ]
                        })
                    }),
                    (0, l.jsx)(d.FormItem, {
                        className: Z.marginTop8,
                        title: x.intl.string(x.t.y4ooen),
                        children: (0, l.jsx)(d.SingleSelect, {
                            value: f,
                            className: Z.__invalid_marginaTop8,
                            onChange: (e) => {
                                j(e), s(e);
                            },
                            options: o().map(C, (e) => {
                                let { id: n, name: t } = e;
                                return {
                                    value: n,
                                    label: t
                                };
                            })
                        })
                    })
                ]
            })
        })
    );
}
