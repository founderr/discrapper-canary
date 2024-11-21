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
    h = n(131951),
    g = n(210887),
    p = n(962100),
    x = n(65154),
    S = n(388032),
    T = n(416805),
    C = n(113207);
function E() {
    let e, t;
    let { analyticsLocations: s } = (0, d.ZP)(),
        E = (0, l.e7)([g.Z], () => g.Z.theme),
        {
            canSetInputDevice: _,
            canSetOutputDevice: I,
            inputDeviceId: f,
            outputDeviceId: N
        } = (0, l.cj)([h.Z], () => ({
            canSetInputDevice: h.Z.supports(x.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: h.Z.supports(x.AN.AUDIO_OUTPUT_DEVICE),
            inputDeviceId: h.Z.getInputDeviceId(),
            outputDeviceId: h.Z.getOutputDeviceId()
        })),
        A = (0, l.e7)([h.Z], () => h.Z.getInputDevices()),
        b = (0, l.e7)([h.Z], () => h.Z.getOutputDevices());
    !_ &&
        (e = (0, i.jsx)(o.FormText, {
            type: o.FormText.Types.DESCRIPTION,
            className: C.marginTop8,
            children: S.intl.format(S.t['1iK6UV'], { onDownloadClick: () => (0, p.y)('Help Text Input Devices') })
        })),
        !I &&
            (t = (0, i.jsx)(o.FormText, {
                type: o.FormText.Types.DESCRIPTION,
                className: C.marginTop8,
                children: S.intl.format(S.t.Ow0dbG, { onDownloadClick: () => (0, p.y)('Help Text Output Devices') })
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
                className: T.deviceOptionCertified
            });
        }
        return (0, i.jsxs)(
            'span',
            {
                className: T.deviceOption,
                children: [
                    (0, i.jsx)('span', {
                        className: T.deviceOptionLabel,
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
        className: C.marginBottom20,
        children: [
            (0, i.jsxs)(u.Z.Child, {
                basis: '50%',
                children: [
                    (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        className: C.marginBottom8,
                        children: S.intl.string(S.t.hHMYbW)
                    }),
                    (0, i.jsx)(o.SingleSelect, {
                        value: f,
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
                        className: C.marginBottom8,
                        children: S.intl.string(S.t.dl18zc)
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
