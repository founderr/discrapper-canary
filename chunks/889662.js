n.r(e),
    n.d(e, {
        default: function () {
            return p;
        }
    }),
    n(47120);
var i = n(200651),
    l = n(192379),
    u = n(374470),
    c = n(481060),
    r = n(239091),
    a = n(886036),
    s = n(877794),
    o = n(358085),
    d = n(998502),
    f = n(388032);
function p(t) {
    let { text: e, target: n, onHeightUpdate: p, onSelect: E, isChannelTextArea: h = !1 } = t,
        m = l.useCallback(() => {
            (0, r.Zy)(), (0, u.k)(n, HTMLElement) && (n.focus(), setTimeout(() => n.focus(), 0));
        }, [n]),
        [M, b] = (0, s.Z)({
            text: e,
            target: n,
            onHeightUpdate: p
        }),
        x = (0, a.Z)();
    if (!o.isPlatformEmbedded || !((0, u.k)(n, HTMLInputElement) || (0, u.k)(n, HTMLTextAreaElement))) return null;
    let k =
        '' !== e
            ? [
                  (0, i.jsx)(
                      c.MenuItem,
                      {
                          id: 'copy',
                          label: f.intl.string(f.t.OpuAlJ),
                          hint: (0, o.isMac)() ? '\u2318C' : 'Ctrl+C',
                          action: () => d.ZP.copy(e)
                      },
                      'copy'
                  ),
                  (0, i.jsx)(
                      c.MenuItem,
                      {
                          id: 'cut',
                          label: f.intl.string(f.t.pNPVhY),
                          hint: (0, o.isMac)() ? '\u2318X' : 'Ctrl+X',
                          action: () => setTimeout(() => d.ZP.cut(), 0)
                      },
                      'cut'
                  )
              ]
            : null;
    return (0, i.jsxs)(c.Menu, {
        navId: 'textarea-context',
        onClose: m,
        'aria-label': f.intl.string(f.t.NWlDSE),
        onSelect: E,
        children: [
            h && (0, i.jsx)(c.MenuGroup, { children: x }),
            (0, i.jsx)(c.MenuGroup, { children: M }),
            (0, i.jsx)(c.MenuGroup, { children: b }),
            (0, i.jsxs)(c.MenuGroup, {
                children: [
                    k,
                    (0, i.jsx)(c.MenuItem, {
                        id: 'paste',
                        label: f.intl.string(f.t.lMUxVl),
                        hint: (0, o.isMac)() ? '\u2318V' : 'Ctrl+V',
                        action: () => setTimeout(() => d.ZP.paste(), 0)
                    })
                ]
            })
        ]
    });
}
