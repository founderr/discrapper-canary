n.r(e),
    n.d(e, {
        default: function () {
            return k;
        }
    }),
    n(47120);
var i = n(200651),
    l = n(192379),
    u = n(270445),
    c = n(442837),
    o = n(481060),
    a = n(239091),
    r = n(857595),
    s = n(607070),
    d = n(886036),
    b = n(877794),
    p = n(695346),
    f = n(626135),
    h = n(358085),
    m = n(998502),
    E = n(887490),
    x = n(981631),
    g = n(388032);
function k(t) {
    var e, n, k, M, C, v, I, S, T;
    let { text: j, editor: L, target: Z, onHeightUpdate: G, onSelect: N } = t,
        y = l.useCallback(() => {
            (0, a.Zy)(() => {
                u.F3.focus(L), setTimeout(() => E.bN.focus(L), 0);
            });
        }, [L]),
        [_, A] = (0, b.Z)({
            text: j,
            target: Z,
            onHeightUpdate: G
        }),
        O = (0, c.e7)([s.Z], () => s.Z.isSubmitButtonEnabled),
        D = (0, d.Z)(),
        P = p.Xk.useSetting();
    if (!h.isPlatformEmbedded) return null;
    let R = null !== (I = null === (n = L.chatInputType) || void 0 === n ? void 0 : null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) && void 0 !== I && I,
        H = null !== (S = null === (M = L.chatInputType) || void 0 === M ? void 0 : null === (k = M.stickers) || void 0 === k ? void 0 : k.autoSuggest) && void 0 !== S && S,
        X = null !== (T = null === (v = L.chatInputType) || void 0 === v ? void 0 : null === (C = v.submit) || void 0 === C ? void 0 : C.button) && void 0 !== T && T,
        K = R || H,
        U =
            '' !== j
                ? [
                      (0, i.jsx)(
                          o.MenuItem,
                          {
                              id: 'copy',
                              label: g.intl.string(g.t.OpuAlJ),
                              hint: (0, h.isMac)() ? '\u2318C' : 'Ctrl+C',
                              action: () => setTimeout(() => m.ZP.copy(), 0)
                          },
                          'copy'
                      ),
                      (0, i.jsx)(
                          o.MenuItem,
                          {
                              id: 'cut',
                              label: g.intl.string(g.t.pNPVhY),
                              hint: (0, h.isMac)() ? '\u2318X' : 'Ctrl+X',
                              action: () => setTimeout(() => m.ZP.cut(), 0)
                          },
                          'cut'
                      )
                  ]
                : null,
        W = (0, i.jsx)(o.MenuCheckboxItem, {
            id: 'command-suggestions',
            label: g.intl.string(g.t['9rJKFx']),
            checked: P,
            action: () => {
                let t = !P;
                p.Xk.updateSetting(t),
                    f.default.track(x.rMx.SLASH_COMMAND_SUGGESTIONS_TOGGLED, {
                        enabled: t,
                        location: { object: x.qAy.CONTEXT_MENU }
                    });
            }
        });
    return (0, i.jsxs)(o.Menu, {
        navId: 'textarea-context',
        onClose: y,
        'aria-label': g.intl.string(g.t.NWlDSE),
        onSelect: N,
        children: [
            K &&
                (0, i.jsxs)(o.MenuItem, {
                    id: 'suggestions',
                    label: g.intl.string(g.t.zgxg7u),
                    children: [H && D, R && W]
                }),
            X &&
                (0, i.jsx)(o.MenuCheckboxItem, {
                    id: 'submit-button',
                    label: g.intl.string(g.t.G8XDys),
                    checked: O,
                    action: () => {
                        (0, r.eN)();
                    }
                }),
            (0, i.jsx)(o.MenuGroup, { children: _ }),
            (0, i.jsx)(o.MenuGroup, { children: A }),
            (0, i.jsxs)(o.MenuGroup, {
                children: [
                    U,
                    (0, i.jsx)(o.MenuItem, {
                        id: 'paste',
                        label: g.intl.string(g.t.lMUxVl),
                        hint: (0, h.isMac)() ? '\u2318V' : 'Ctrl+V',
                        action: () => setTimeout(() => m.ZP.paste(), 0)
                    })
                ]
            })
        ]
    });
}
