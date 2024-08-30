t.d(s, {
    Z: function () {
        return x;
    }
});
var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(442837),
    o = t(481060),
    l = t(846027),
    c = t(230711),
    d = t(825209),
    u = t(600164),
    _ = t(313201),
    E = t(131951),
    T = t(358085),
    I = t(962100),
    S = t(981631),
    N = t(689938),
    m = t(570243),
    C = t(224499);
let g = !T.isPlatformEmbedded,
    A = (0, _.hQ)();
function h(e) {
    let { value: s } = e;
    s === S.pM4.PUSH_TO_TALK &&
        g &&
        (0, o.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(t.bind(t, 468026));
            return (s) =>
                (0, n.jsx)(e, {
                    title: N.Z.Messages.PTT_LIMITED_TITLE,
                    confirmText: N.Z.Messages.DOWNLOAD,
                    cancelText: N.Z.Messages.OKAY,
                    onConfirm: () => (0, I.y)('PTT Limited Modal'),
                    body: N.Z.Messages.PTT_LIMITED_BODY,
                    ...s
                });
        }),
        l.Z.setMode(s);
}
function O(e) {
    return e >= 1000 ? ((e /= 1000), ''.concat(e.toFixed(2), 's')) : ''.concat(e.toFixed(0), ' ms');
}
function p(e) {
    let s,
        { inputMode: t } = e,
        { shortcut: a, delay: _ } = (0, r.cj)([E.Z], () => E.Z.getModeOptions());
    return (
        (s =
            T.isPlatformEmbedded || t !== S.pM4.PUSH_TO_TALK
                ? (0, n.jsx)(o.FormText, {
                      type: o.FormText.Types.DESCRIPTION,
                      className: i()(m.pttToolsMessage, C.marginBottom8),
                      children: N.Z.Messages.USER_SETTINGS_VOICE_ADD_MULTIPLE.format({ onClick: () => c.Z.setSection(S.oAB.KEYBINDS) })
                  })
                : (0, n.jsx)(o.FormText, {
                      type: o.FormText.Types.DESCRIPTION,
                      className: i()(m.pttToolsMessage, m.pttToolsWarning, C.marginBottom8),
                      children: N.Z.Messages.PTT_LIMITED_WARNING.format({ onDownloadClick: () => (0, I.y)('Help Text PTT') })
                  })),
        (0, n.jsxs)('div', {
            className: m.pttTools,
            children: [
                (0, n.jsxs)(u.Z, {
                    children: [
                        (0, n.jsx)(u.Z.Child, {
                            basis: '50%',
                            children: (0, n.jsx)(o.FormItem, {
                                title: N.Z.Messages.FORM_LABEL_SHORTCUT,
                                children: (0, n.jsx)(d.Z, {
                                    defaultValue: a,
                                    onChange: (e) => l.Z.setMode(t, { shortcut: e })
                                })
                            })
                        }),
                        (0, n.jsx)(u.Z.Child, {
                            basis: '50%',
                            children: (0, n.jsxs)(o.FormItem, {
                                children: [
                                    (0, n.jsx)(o.FormTitle, {
                                        id: A,
                                        tag: o.FormTitleTags.H5,
                                        className: C.marginBottom8,
                                        children: N.Z.Messages.INPUT_MODE_PTT_RELEASE_DELAY
                                    }),
                                    (0, n.jsx)(o.Slider, {
                                        initialValue: _,
                                        onValueChange: (e) => l.Z.setMode(t, { delay: e }),
                                        onValueRender: O,
                                        maxValue: S.qhL,
                                        'aria-labelledby': A
                                    })
                                ]
                            })
                        })
                    ]
                }),
                s
            ]
        })
    );
}
function x() {
    let e = (0, r.e7)([E.Z], () => E.Z.getMode()),
        s = [
            {
                value: S.pM4.VOICE_ACTIVITY,
                name: N.Z.Messages.INPUT_MODE_VAD
            },
            {
                value: S.pM4.PUSH_TO_TALK,
                name: g ? N.Z.Messages.INPUT_MODE_PTT_LIMITED : N.Z.Messages.INPUT_MODE_PTT
            }
        ];
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(o.FormItem, {
                title: N.Z.Messages.FORM_LABEL_INPUT_MODE,
                className: C.marginBottom20,
                children: (0, n.jsx)(o.RadioGroup, {
                    onChange: h,
                    options: s,
                    value: e
                })
            }),
            e === S.pM4.PUSH_TO_TALK && (0, n.jsx)(p, { inputMode: e })
        ]
    });
}
