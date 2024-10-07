n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(979554),
    s = n(481060),
    o = n(436774),
    l = n(981631),
    u = n(689938),
    c = n(320663);
function d(e) {
    let { product: t, onSecondaryClick: d } = e,
        _ = i.useCallback(() => {
            if (null != t)
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await n.e('43360').then(n.bind(n, 73415));
                    return (n) =>
                        (0, r.jsx)(e, {
                            collectableType: null == t ? void 0 : t.type,
                            analyticsSource: l.Sbl.PROFILE_PANEL,
                            analyticsLocation: {
                                section: l.jXE.USER_PROFILE,
                                object: l.qAy.BUTTON_CTA
                            },
                            onSecondaryClick: d,
                            ...n
                        });
                });
        }, [t, d]),
        E = i.useMemo(() => {
            switch (null == t ? void 0 : t.type) {
                case a.Z.AVATAR_DECORATION:
                    return u.Z.Messages.PREMIUM_UPSELL_PROFILE_AVATAR_DECO_INLINE_UPSELL.format({ onClick: _ });
                case a.Z.PROFILE_EFFECT:
                    return u.Z.Messages.PREMIUM_UPSELL_PROFILE_EFFECT_INLINE_UPSELL.format({ onClick: _ });
            }
        }, [null == t ? void 0 : t.type, _]);
    return (0, r.jsxs)('div', {
        className: c.nitroUpsellContainer,
        children: [
            (0, r.jsx)(s.NitroWheelIcon, {
                className: c.nitroWheel,
                size: 'md',
                color: o.JX.PREMIUM_TIER_2
            }),
            (0, r.jsx)(s.Text, {
                className: c.nitroText,
                variant: 'text-md/medium',
                children: E
            })
        ]
    });
}
