n.d(t, {
    Z: function () {
        return b;
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
    I = n(127379),
    E = n(388032);
function b(e) {
    let { channel: t, themeable: b, whichPopoutIsOpen: Z, setWhichPopoutIsOpen: N } = e,
        S = t.getGuildId(),
        { mute: T, suppress: j } = (0, p.Z)(t),
        A = (0, r.e7)([C.Z], () => C.Z.isDeaf()),
        y = T || j || A,
        P = (0, d.sR)({ isSoundboardButtonDisabled: y }),
        [M, R] = (0, c.cv)(P),
        { groupedButtons: L, mode: k } = (0, m.Z)({ location: 'ActionBarSoundboardButton' }),
        O = k === m.B.GroupedButtonsRedMic ? 'green' : void 0;
    function D() {
        if (T) return E.intl.string(E.t['Ox4/zc']);
        if (j) return E.intl.string(E.t['+YBKYG']);
        if (A) return E.intl.string(E.t.X1lQlp);
    }
    function w(e) {
        null != S &&
            (0, o.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: S,
                        ...t
                    });
            });
    }
    let B = l.useRef(null),
        U = l.useCallback(() => {
            var e;
            null === (e = B.current) || void 0 === e || e.hidePopout();
        }, []);
    return (
        (0, x.yp)({
            event: _.CkL.TOGGLE_SOUNDBOARD,
            handler: U
        }),
        (0, i.jsx)(v.Z, {
            ref: B,
            isPopoutBlocked: null != Z && Z !== I.D.SOUNDBOARD,
            onPopoutClose: () => (null == N ? void 0 : N(void 0)),
            onPopoutOpen: () => (null == N ? void 0 : N(I.D.SOUNDBOARD)),
            align: L ? 'center' : 'left',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return y
                    ? null
                    : (0, i.jsx)(f.Z, {
                          children: (0, i.jsx)(h.Z, {
                              guildId: S,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  M === a.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, i.jsx)(u.o, {
                                      onClose: n,
                                      markAsDismissed: R
                                  }),
                              analyticsSource: 'action bar button'
                          })
                      });
            },
            children: (e) =>
                L
                    ? (0, i.jsx)(g.d, {
                          themeable: b,
                          label: D(),
                          iconComponent: s.SoundboardIcon,
                          disabled: y,
                          onContextMenu: w,
                          ...e,
                          color: e.isActive ? O : void 0,
                          className: ''
                      })
                    : (0, i.jsx)(g.Z, {
                          themeable: b,
                          label: D(),
                          iconComponent: s.SoundboardIcon,
                          disabled: y,
                          onContextMenu: w,
                          ...e
                      })
        })
    );
}
