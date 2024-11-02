n.d(t, {
    Z: function () {
        return I;
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
    u = n(242291),
    d = n(792165),
    h = n(603074),
    m = n(294629),
    p = n(390322),
    f = n(871499),
    g = n(131951),
    C = n(459273),
    x = n(304388),
    v = n(981631),
    _ = n(388032);
function I(e) {
    let { channel: t, themeable: I } = e,
        E = t.getGuildId(),
        { mute: b, suppress: S } = (0, m.Z)(t),
        Z = (0, r.e7)([g.Z], () => g.Z.isDeaf()),
        T = b || S || Z,
        N = (0, u.sR)({ isSoundboardButtonDisabled: T }),
        [j, A] = (0, c.cv)(N);
    function y(e) {
        null != E &&
            (0, o.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: E,
                        ...t
                    });
            });
    }
    let P = l.useRef(null),
        M = l.useCallback(() => {
            var e;
            null === (e = P.current) || void 0 === e || e.hidePopout();
        }, []);
    return (
        (0, C.yp)({
            event: v.CkL.TOGGLE_SOUNDBOARD,
            handler: M
        }),
        (0, i.jsx)(x.Z, {
            ref: P,
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return T
                    ? null
                    : (0, i.jsx)(p.Z, {
                          children: (0, i.jsx)(h.Z, {
                              guildId: E,
                              channel: t,
                              onClose: n,
                              gridNotice:
                                  j === a.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                  (0, i.jsx)(d.o, {
                                      onClose: n,
                                      markAsDismissed: A
                                  }),
                              analyticsSource: 'action bar button'
                          })
                      });
            },
            children: (e) =>
                (0, i.jsx)(f.Z, {
                    themeable: I,
                    label: (function () {
                        if (b) return _.intl.string(_.t['Ox4/zc']);
                        if (S) return _.intl.string(_.t['+YBKYG']);
                        if (Z) return _.intl.string(_.t.X1lQlp);
                    })(),
                    iconComponent: s.SoundboardIcon,
                    disabled: T,
                    onContextMenu: y,
                    ...e
                })
        })
    );
}
