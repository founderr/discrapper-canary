t.d(s, {
    Z: function () {
        return C;
    }
}),
    t(47120);
var n = t(735250);
t(470079);
var a = t(392711),
    i = t.n(a),
    r = t(442837),
    o = t(780384),
    l = t(481060),
    c = t(846027),
    d = t(600164),
    u = t(463395),
    _ = t(131951),
    E = t(210887),
    T = t(962100),
    I = t(65154),
    S = t(689938),
    N = t(107246),
    m = t(224499);
function C() {
    let e, s;
    let a = (0, r.e7)([E.Z], () => E.Z.theme),
        {
            canSetInputDevice: C,
            canSetOutputDevice: g,
            inputDeviceId: A,
            outputDeviceId: h
        } = (0, r.cj)([_.Z], () => ({
            canSetInputDevice: _.Z.supports(I.AN.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: _.Z.supports(I.AN.AUDIO_OUTPUT_DEVICE),
            inputDeviceId: _.Z.getInputDeviceId(),
            outputDeviceId: _.Z.getOutputDeviceId()
        })),
        O = (0, r.e7)([_.Z], () => _.Z.getInputDevices()),
        p = (0, r.e7)([_.Z], () => _.Z.getOutputDevices());
    !C &&
        (e = (0, n.jsx)(l.FormText, {
            type: l.FormText.Types.DESCRIPTION,
            className: m.marginTop8,
            children: S.Z.Messages.BROWSER_INPUT_DEVICE_WARNING.format({ onDownloadClick: () => (0, T.y)('Help Text Input Devices') })
        })),
        !g &&
            (s = (0, n.jsx)(l.FormText, {
                type: l.FormText.Types.DESCRIPTION,
                className: m.marginTop8,
                children: S.Z.Messages.BROWSER_OUTPUT_DEVICE_WARNING.format({ onDownloadClick: () => (0, T.y)('Help Text Output Devices') })
            }));
    let x = i()(O).values().first(),
        R = null != x ? x.disabled : null != e,
        f = i()(p).values().first(),
        M = null != f ? f.disabled : null != s;
    function D(e) {
        let s,
            { label: i, value: r } = e;
        if (u.Z.isCertified(r)) {
            let e = (0, o.ap)(a) ? t(561259) : t(887695);
            s = (0, n.jsx)('img', {
                src: e,
                alt: 'Certified',
                className: N.deviceOptionCertified
            });
        }
        return (0, n.jsxs)(
            'span',
            {
                className: N.deviceOption,
                children: [
                    (0, n.jsx)('span', {
                        className: N.deviceOptionLabel,
                        children: u.Z.getCertifiedDeviceName(r, i)
                    }),
                    s
                ]
            },
            r
        );
    }
    function P(e) {
        return D(e[0]);
    }
    return (0, n.jsxs)(d.Z, {
        className: m.marginBottom20,
        children: [
            (0, n.jsxs)(d.Z.Child, {
                basis: '50%',
                children: [
                    (0, n.jsx)(l.FormTitle, {
                        tag: l.FormTitleTags.H5,
                        className: m.marginBottom8,
                        children: S.Z.Messages.FORM_LABEL_INPUT_DEVICE
                    }),
                    (0, n.jsx)(l.SingleSelect, {
                        value: A,
                        onChange: (e) => c.Z.setInputDevice(e, 'Settings'),
                        options: i().map(O, (e) => {
                            let { id: s, name: t } = e;
                            return {
                                value: s,
                                label: t
                            };
                        }),
                        isDisabled: R,
                        renderOptionValue: P,
                        renderOptionLabel: D
                    }),
                    e
                ]
            }),
            (0, n.jsxs)(d.Z.Child, {
                basis: '50%',
                children: [
                    (0, n.jsx)(l.FormTitle, {
                        tag: l.FormTitleTags.H5,
                        className: m.marginBottom8,
                        children: S.Z.Messages.FORM_LABEL_OUTPUT_DEVICE
                    }),
                    (0, n.jsx)(l.SingleSelect, {
                        value: h,
                        onChange: (e) => c.Z.setOutputDevice(e, 'Settings'),
                        options: i().map(p, (e) => {
                            let { id: s, name: t } = e;
                            return {
                                value: s,
                                label: t
                            };
                        }),
                        isDisabled: M,
                        renderOptionValue: P,
                        renderOptionLabel: D
                    }),
                    s
                ]
            })
        ]
    });
}
