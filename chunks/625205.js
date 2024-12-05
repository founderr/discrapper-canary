n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var s = n(392711),
    r = n.n(s),
    l = n(442837),
    a = n(780384),
    o = n(481060),
    c = n(846027),
    d = n(906732),
    u = n(600164),
    m = n(463395),
    g = n(131951),
    h = n(210887),
    p = n(962100),
    x = n(65154),
    T = n(388032),
    S = n(43824),
    _ = n(232186);
function E() {
    let e, t;
    let { analyticsLocations: s } = (0, d.ZP)(),
        E = (0, l.e7)([h.Z], () => h.Z.theme),
        {
            canSetInputDevice: C,
            canSetOutputDevice: f,
            inputDeviceId: I,
            outputDeviceId: N
        } = (0, l.cj)([g.Z], () => ({
            canSetInputDevice: g.Z.supports(x.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: g.Z.supports(x.AN.AUDIO_OUTPUT_DEVICE),
            inputDeviceId: g.Z.getInputDeviceId(),
            outputDeviceId: g.Z.getOutputDeviceId()
        })),
        A = (0, l.e7)([g.Z], () => g.Z.getInputDevices()),
        b = (0, l.e7)([g.Z], () => g.Z.getOutputDevices());
    !C &&
        (e = (0, i.jsx)(o.FormText, {
            type: o.FormText.Types.DESCRIPTION,
            className: _.marginTop8,
            children: T.intl.format(T.t['1iK6UV'], { onDownloadClick: () => (0, p.y)('Help Text Input Devices') })
        })),
        !f &&
            (t = (0, i.jsx)(o.FormText, {
                type: o.FormText.Types.DESCRIPTION,
                className: _.marginTop8,
                children: T.intl.format(T.t.Ow0dbG, { onDownloadClick: () => (0, p.y)('Help Text Output Devices') })
            }));
    let v = r()(A).values().first(),
        j = null != v ? v.disabled : null != e,
        O = r()(b).values().first(),
        R = null != O ? O.disabled : null != t;
    function P(e) {
        let t,
            { label: s, value: r } = e;
        if (m.Z.isCertified(r)) {
            let e = (0, a.ap)(E) ? n(561259) : n(887695);
            t = (0, i.jsx)('img', {
                src: e,
                alt: 'Certified',
                className: S.deviceOptionCertified
            });
        }
        return (0, i.jsxs)(
            'span',
            {
                className: S.deviceOption,
                children: [
                    (0, i.jsx)('span', {
                        className: S.deviceOptionLabel,
                        children: m.Z.getCertifiedDeviceName(r, s)
                    }),
                    t
                ]
            },
            r
        );
    }
    function D(e) {
        return P(e[0]);
    }
    return (0, i.jsxs)(u.Z, {
        className: _.marginBottom20,
        children: [
            (0, i.jsxs)(u.Z.Child, {
                basis: '50%',
                children: [
                    (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        className: _.marginBottom8,
                        children: T.intl.string(T.t.hHMYbW)
                    }),
                    (0, i.jsx)(o.SingleSelect, {
                        value: I,
                        onChange: (e) =>
                            c.Z.setInputDevice(e, {
                                location: 'Settings',
                                analyticsLocations: s
                            }),
                        options: r().map(A, (e) => {
                            let { id: t, name: n } = e;
                            return {
                                value: t,
                                label: n
                            };
                        }),
                        isDisabled: j,
                        renderOptionValue: D,
                        renderOptionLabel: P
                    }),
                    e
                ]
            }),
            (0, i.jsxs)(u.Z.Child, {
                basis: '50%',
                children: [
                    (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        className: _.marginBottom8,
                        children: T.intl.string(T.t.dl18zc)
                    }),
                    (0, i.jsx)(o.SingleSelect, {
                        value: N,
                        onChange: (e) =>
                            c.Z.setOutputDevice(e, {
                                location: 'Settings',
                                analyticsLocations: s
                            }),
                        options: r().map(b, (e) => {
                            let { id: t, name: n } = e;
                            return {
                                value: t,
                                label: n
                            };
                        }),
                        isDisabled: R,
                        renderOptionValue: D,
                        renderOptionLabel: P
                    }),
                    t
                ]
            })
        ]
    });
}
