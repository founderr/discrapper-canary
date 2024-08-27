t.d(n, {
    Z: function () {
        return Z;
    }
}),
    t(724458),
    t(47120);
var l = t(735250),
    s = t(470079),
    a = t(512722),
    r = t.n(a),
    i = t(392711),
    o = t.n(i),
    u = t(856901),
    c = t(442837),
    d = t(481060),
    m = t(131951),
    E = t(537135),
    S = t(176940),
    _ = t(689938),
    g = t(51449),
    h = t(458623),
    x = t(224499);
function Z(e) {
    let { selectedSource: n, onChangeVideoDeviceSource: t, onChangeAudioDevice: a } = e;
    r()(null != n, 'Camera capture device cannot be null');
    let i = (0, S.Z)(),
        Z = (0, c.e7)([m.Z], () => m.Z.getInputDevices()),
        [f, C] = s.useState(
            (function (e, n, t) {
                if (null != n && null != t) {
                    let l = n.find((n) => n.id === e);
                    if (null == l) return;
                    let s = o().reduce(t, (e, n) => ((0, u.stringSimilarity)(l.name, n.name) > (0, u.stringSimilarity)(l.name, e.name) ? n : e));
                    if (null != s) return s.id;
                }
            })(n.id, i, Z)
        );
    return (
        null != f && a(f),
        (0, l.jsx)(s.Fragment, {
            children: (0, l.jsxs)(d.FormItem, {
                title: 'Capture Device',
                className: h.modalContent,
                children: [
                    (0, l.jsx)(d.FormItem, {
                        className: x.marginTop8,
                        children: (0, l.jsxs)(E.Z, {
                            children: [
                                (0, l.jsx)('span', {
                                    className: g.ellipsisText,
                                    children: n.name
                                }),
                                (0, l.jsx)(d.Button, {
                                    className: g.changeButton,
                                    color: d.Button.Colors.PRIMARY,
                                    size: d.Button.Sizes.SMALL,
                                    onClick: t,
                                    children: _.Z.Messages.CHANGE
                                })
                            ]
                        })
                    }),
                    (0, l.jsx)(d.FormItem, {
                        className: x.marginTop8,
                        title: _.Z.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
                        children: (0, l.jsx)(d.SingleSelect, {
                            value: f,
                            className: x.__invalid_marginaTop8,
                            onChange: (e) => {
                                C(e), a(e);
                            },
                            options: o().map(Z, (e) => {
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
