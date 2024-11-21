n.d(t, {
    Z: function () {
        return L;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(230711),
    c = n(351773),
    d = n(607070),
    f = n(100527),
    _ = n(906732),
    p = n(639119),
    h = n(197115),
    m = n(587446),
    g = n(594174),
    E = n(626135),
    v = n(74538),
    b = n(94795),
    I = n(327943),
    T = n(539873),
    S = n(981631),
    y = n(921944),
    A = n(474936),
    N = n(388032),
    C = n(891304);
let R = () => {
        var e, t, n;
        let i = (0, o.e7)([g.default], () => v.ZP.isPremium(g.default.getCurrentUser())),
            a = (0, p.N)(),
            s = (null == a ? void 0 : null === (e = a.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === A.Si.TIER_2;
        return (0, r.jsx)(h.Z, {
            size: l.Button.Sizes.MEDIUM,
            buttonText: i
                ? N.intl.string(N.t.IJI7ys)
                : s
                  ? (0, v.Rt)({
                        intervalType: null == a ? void 0 : null === (t = a.subscription_trial) || void 0 === t ? void 0 : t.interval,
                        intervalCount: null == a ? void 0 : null === (n = a.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                    })
                  : N.intl.string(N.t.mr4K7O),
            subscriptionTier: A.Si.TIER_2
        });
    },
    O = (e) => {
        let { markAsDismissed: t } = e,
            n = () => {
                null == t || t(y.L.DISMISS), (0, b.G8)();
            };
        return (0, r.jsxs)('div', {
            className: C.editorHeader,
            children: [
                (0, r.jsx)(l.Clickable, {
                    className: C.closeCircleButton,
                    onClick: () => n(),
                    children: (0, r.jsx)(l.CircleXIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: C.closeCircle
                    })
                }),
                (0, r.jsxs)('div', {
                    className: C.title,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: 'heading-lg/extrabold',
                            children: N.intl.string(N.t['hb/wEx'])
                        }),
                        (0, r.jsx)(m.Z, { className: C.premiumIcon })
                    ]
                })
            ]
        });
    },
    D = (e) => {
        let { isCoachmark: t, markAsDismissed: n } = e,
            i = (0, o.e7)([I.Z], () => I.Z.isUpsellPreview);
        return (0, r.jsxs)('div', {
            className: C.editorFooter,
            children: [
                i && (0, r.jsx)(R, {}),
                (0, r.jsx)(l.Button, {
                    className: C.footerButton,
                    onClick: () => {
                        null == n || n(y.L.DISMISS), (0, b.G8)(), !t && u.Z.open();
                    },
                    color: l.Button.Colors.PRIMARY,
                    size: l.Button.Sizes.MEDIUM,
                    children: i || t ? N.intl.string(N.t['dqH+qq']) : N.intl.string(N.t.Olc2Ky)
                })
            ]
        });
    };
function L(e) {
    let { isCoachmark: t, markAsDismissed: n } = e,
        { analyticsLocations: a } = (0, _.ZP)(f.Z.APP_ICON_EDITOR),
        u = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
        {
            isUpsellPreview: p,
            isEditorOpen: h,
            shouldEditorAnimate: m
        } = (0, o.cj)([I.Z, d.Z], () => ({
            isUpsellPreview: I.Z.isUpsellPreview,
            isEditorOpen: I.Z.isEditorOpen,
            shouldEditorAnimate: t && !d.Z.useReducedMotion
        }));
    i.useEffect(() => {
        if (!!p)
            E.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                type: A.cd.APP_ICON_UPSELL,
                location_stack: a
            });
    }, [p, a]);
    let v = (0, c.Z)(null, p ? b.O7 : S.dG4);
    return (i.useEffect(() => {
        if (!!p && !h) return b.O7;
    }, [p, h]),
    null == u)
        ? null
        : (0, r.jsx)(_.Gt, {
              value: a,
              children: (0, r.jsx)('div', {
                  ref: v,
                  className: s()(C.editor, m ? C.editorAnimate : null),
                  children: (0, r.jsxs)(l.HeadingLevel, {
                      children: [
                          (0, r.jsx)(O, { markAsDismissed: n }),
                          (0, r.jsx)(l.Scroller, {
                              className: C.editorBody,
                              children: (0, r.jsx)(T.Z, {
                                  className: C.selectionGroup,
                                  isEditor: !0
                              })
                          }),
                          (0, r.jsx)(D, {
                              markAsDismissed: n,
                              isCoachmark: t
                          })
                      ]
                  })
              })
          });
}
