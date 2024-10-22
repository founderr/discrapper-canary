var i = n(200651);
n(192379);
var l = n(399606),
    a = n(704215),
    r = n(481060),
    s = n(239091),
    o = n(765585),
    c = n(870569),
    u = n(819640),
    d = n(556296),
    h = n(13140),
    p = n(924557),
    f = n(435064),
    _ = n(39604),
    m = n(981631),
    g = n(689938),
    C = n(847744);
function I(e) {
    (0, s.jW)(e, async () => {
        let { default: e } = await n.e('21960').then(n.bind(n, 999466));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function E() {
    (0, _.C1)();
}
let N = (e) => {
    let { keybindString: t, children: n } = e,
        l = (e, t) => {
            e.stopPropagation(), e.preventDefault(), null == t || t();
        };
    return (0, i.jsx)(r.Popout, {
        shouldShow: !1,
        position: 'top',
        align: 'center',
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(o.Z, {
                dismissibleContent: a.z.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
                shouldUseHorizontalButtons: !0,
                inlineArt: !0,
                artClassName: C.clipsEducationArt,
                position: 'top',
                header: (0, i.jsx)('div', {
                    className: C.header,
                    children: g.Z.Messages.CLIPS_ONBOARDING_CLIP_BUTTON_ACTIVITY_PANEL_COACHMARK_TITLE.format({
                        keybind: t,
                        keybindHook: () =>
                            (0, i.jsx)('span', {
                                className: C.keybindHintKeys,
                                children: (0, i.jsx)(r.KeyCombo, {
                                    className: C.keybindShortcut,
                                    shortcut: t
                                })
                            })
                    })
                }),
                headerClassName: C.clipsEducationHeader,
                body: (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'always-white',
                        className: C.bodyText,
                        children: g.Z.Messages.CLIPS_ONBOARDING_CLIP_BUTTON_ACTIVITY_PANEL_COACHMARK_BODY.format({
                            keybindHook: () =>
                                (0, i.jsx)('div', {
                                    className: C.keyCombo,
                                    children: t
                                }),
                            keybind: t
                        })
                    })
                }),
                onClose: (e) => {
                    l(e, n);
                }
            });
        },
        children: () => n
    });
};
t.Z = () => {
    let e = (0, l.e7)([u.Z], () => u.Z.hasLayers()),
        t = (0, p.Go)(),
        { clipsEnabled: n, isAtMaxSavingClipsOperations: a } = (0, l.cj)([f.Z], () => ({
            clipsEnabled: f.Z.getSettings().clipsEnabled,
            isAtMaxSavingClipsOperations: f.Z.getIsAtMaxSaveClipOperations()
        })),
        s = (0, l.e7)([d.Z], () => d.Z.getKeybindForAction(m.kg4.SAVE_CLIP));
    if (!(t && n) || null == s || e) return null;
    let o = h.BB(s.shortcut, !0);
    return (0, i.jsx)(N, {
        keybindString: o,
        children: (0, i.jsx)(c.Z, {
            disabled: a,
            tooltipText: null != s ? g.Z.Messages.CLIPS_SAVE_CLIP_TOOLTIP.format({ hotkey: h.BB(null == s ? void 0 : s.shortcut, !0) }) : g.Z.Messages.CLIPS_EDIT_SAVE_CLIP,
            onClick: E,
            onContextMenu: I,
            icon: r.ClipsIcon
        })
    });
};
