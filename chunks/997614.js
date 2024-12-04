n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(399606),
    a = n(704215),
    s = n(481060),
    o = n(239091),
    c = n(706140),
    d = n(242291),
    u = n(792165),
    h = n(603074),
    p = n(294629),
    m = n(411840),
    f = n(390322),
    g = n(871499),
    C = n(131951),
    x = n(459273),
    v = n(304388),
    _ = n(981631),
    I = n(388032);
function E(e) {
    let { channel: t, themeable: E } = e,
        b = t.getGuildId(),
        { mute: N, suppress: Z } = (0, p.Z)(t),
        S = (0, r.e7)([C.Z], () => C.Z.isDeaf()),
        T = N || Z || S,
        j = (0, d.sR)({ isSoundboardButtonDisabled: T }),
        [A, y] = (0, c.cv)(j),
        { groupedButtons: P, mode: M } = (0, m.Z)({ location: 'ActionBarSoundboardButton' }),
        R = M === m.B.GroupedButtonsRedMic ? 'green' : void 0;
    function L() {
        if (N) return I.intl.string(I.t['Ox4/zc']);
        if (Z) return I.intl.string(I.t['+YBKYG']);
        if (S) return I.intl.string(I.t.X1lQlp);
    }
    function k(e) {
        null != b &&
            (0, o.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: b,
                        ...t
                    });
            });
    }
    let O = l.useRef(null),
        D = l.useCallback(() => {
            var e;
            null === (e = O.current) || void 0 === e || e.hidePopout();
        }, []);
    return (
        (0, x.yp)({
            event: _.CkL.TOGGLE_SOUNDBOARD,
            handler: D
        }),
        (0, i.jsx)(v.Z, {
            ref: O,
            align: P ? 'center' : 'left',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return T
                    ? null
                    : (0, i.jsx)(f.Z, {
                          children: (0, i.jsx)(h.Z, {
                              guildId: b,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  A === a.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, i.jsx)(u.o, {
                                      onClose: n,
                                      markAsDismissed: y
                                  }),
                              analyticsSource: 'action bar button'
                          })
                      });
            },
            children: (e) =>
                P
                    ? (0, i.jsx)(g.d, {
                          themeable: E,
                          label: L(),
                          iconComponent: s.SoundboardIcon,
                          disabled: T,
                          onContextMenu: k,
                          ...e,
                          color: e.isActive ? R : void 0,
                          className: ''
                      })
                    : (0, i.jsx)(g.Z, {
                          themeable: E,
                          label: L(),
                          iconComponent: s.SoundboardIcon,
                          disabled: T,
                          onContextMenu: k,
                          ...e
                      })
        })
    );
}
