n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(724458),
    n(47120);
var l = n(200651),
    s = n(192379),
    i = n(512722),
    r = n.n(i),
    a = n(392711),
    o = n.n(a),
    c = n(856901),
    d = n(442837),
    u = n(481060),
    f = n(131951),
    h = n(537135),
    m = n(176940),
    x = n(689938),
    _ = n(836471),
    g = n(410894),
    p = n(113207);
function C(e) {
    let { selectedSource: t, onChangeVideoDeviceSource: n, onChangeAudioDevice: i } = e;
    r()(null != t, 'Camera capture device cannot be null');
    let a = (0, m.Z)(),
        C = (0, d.e7)([f.Z], () => f.Z.getInputDevices()),
        [S, E] = s.useState(
            (function (e, t, n) {
                if (null != t && null != n) {
                    let l = t.find((t) => t.id === e);
                    if (null == l) return;
                    let s = o().reduce(n, (e, t) => ((0, c.stringSimilarity)(l.name, t.name) > (0, c.stringSimilarity)(l.name, e.name) ? t : e));
                    if (null != s) return s.id;
                }
            })(t.id, a, C)
        );
    return (
        null != S && i(S),
        (0, l.jsx)(s.Fragment, {
            children: (0, l.jsxs)(u.FormItem, {
                title: 'Capture Device',
                className: g.modalContent,
                children: [
                    (0, l.jsx)(u.FormItem, {
                        className: p.marginTop8,
                        children: (0, l.jsxs)(h.Z, {
                            children: [
                                (0, l.jsx)('span', {
                                    className: _.ellipsisText,
                                    children: t.name
                                }),
                                (0, l.jsx)(u.Button, {
                                    className: _.changeButton,
                                    color: u.Button.Colors.PRIMARY,
                                    size: u.Button.Sizes.SMALL,
                                    onClick: n,
                                    children: x.Z.Messages.CHANGE
                                })
                            ]
                        })
                    }),
                    (0, l.jsx)(u.FormItem, {
                        className: p.marginTop8,
                        title: x.Z.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
                        children: (0, l.jsx)(u.SingleSelect, {
                            value: S,
                            className: p.__invalid_marginaTop8,
                            onChange: (e) => {
                                E(e), i(e);
                            },
                            options: o().map(C, (e) => {
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
