e.d(n, {
    Z: function () {
        return y;
    },
    d: function () {
        return M;
    }
});
var i = e(200651);
e(192379);
var r = e(120356),
    l = e.n(r),
    o = e(442837),
    u = e(692547),
    a = e(481060),
    s = e(549817),
    c = e(819553),
    d = e(17181),
    f = e(303737),
    _ = e(434404),
    p = e(703656),
    E = e(944486),
    g = e(914010),
    m = e(671533),
    h = e(259580),
    I = e(358085),
    S = e(962086),
    v = e(160404),
    C = e(889695),
    T = e(981631),
    N = e(176505),
    b = e(302463),
    A = e(293810),
    O = e(388032),
    P = e(489666);
function L(t) {
    let { className: n, onClick: e, children: r } = t;
    return (0, i.jsx)(a.Button, {
        className: l()(P.button, n),
        innerClassName: P.buttonInner,
        look: a.Button.Looks.OUTLINED,
        color: a.Button.Colors.WHITE,
        size: a.Button.Sizes.NONE,
        onClick: e,
        children: r
    });
}
function R(t) {
    let { onClick: n } = t;
    return (0, i.jsx)(L, {
        onClick: n,
        children: O.intl.string(O.t.R9GHyc)
    });
}
function y() {
    let t = (0, o.e7)([g.Z], () => g.Z.getGuildId()),
        n = (0, o.e7)([E.Z], () => E.Z.getChannelId(t)),
        {
            viewingRoles: e,
            backNavigationSection: r,
            isFullServerPreview: l,
            isServerShopPreview: I
        } = (0, o.cj)([v.Z], () => ({
            viewingRoles: null != t ? v.Z.getViewingRoles(t) : null,
            backNavigationSection: v.Z.getBackNavigationSection(t),
            isFullServerPreview: null != t && v.Z.isFullServerPreview(t),
            isServerShopPreview: null != t && v.Z.isViewingServerShop(t)
        }));
    if (null == e || null == t) return null;
    let y = (function (t) {
            switch (t) {
                case T.pNK.INTEGRATIONS:
                    return O.intl.string(O.t.k7LGdn);
                case T.pNK.ROLE_SUBSCRIPTIONS:
                    return O.intl.string(O.t.bRqiqa);
                case T.pNK.ONBOARDING:
                    return O.intl.string(O.t.qZpU3d);
                default:
                    return O.intl.string(O.t.MTIXho);
            }
        })(r),
        M = r === T.pNK.ROLE_SUBSCRIPTIONS ? O.intl.string(O.t.hZUCzc) : O.intl.string(O.t['/djIh4']),
        x = n === N.oC.GUILD_ONBOARDING,
        Z = (n) => {
            let { backToSettings: e } = n;
            null != t && (v.Z.isFullServerPreview(t) && (0, p.uL)(T.Z5c.CHANNEL(t)), c.ZP.shouldShowOnboarding(t) && (s.Z.finishOnboarding(t), (0, d.discardOnboardingPromise)(t)), (0, S.mL)(t), e && _.Z.open(t, r), r === T.pNK.ROLE_SUBSCRIPTIONS && (0, f.GN)(t));
        };
    return (0, i.jsxs)(a.Notice, {
        color: a.NoticeColors.BRAND,
        className: P.notice,
        children: [
            (0, i.jsxs)(L, {
                onClick: () => Z({ backToSettings: !0 }),
                className: P.backButton,
                children: [
                    (0, i.jsx)(m.Z, {
                        width: 16,
                        height: 16,
                        direction: m.Z.Directions.LEFT,
                        className: P.backArrow
                    }),
                    y
                ]
            }),
            x && l
                ? (0, i.jsx)('div', {
                      className: P.noticeContents,
                      children: (0, i.jsx)('div', {
                          className: P.noticeText,
                          children: O.intl.string(O.t.PxbiAQ)
                      })
                  })
                : (0, i.jsxs)('div', {
                      className: P.noticeContents,
                      children: [
                          (0, i.jsx)('div', {
                              className: P.noticeText,
                              children: l ? O.intl.formatToPlainString(O.t['0PHahI'], { numRoles: Object.keys(e).length }) : O.intl.formatToPlainString(O.t.vMlK8v, { numRoles: Object.keys(e).length })
                          }),
                          (0, i.jsx)(a.Popout, {
                              position: 'bottom',
                              renderPopout: () => (0, i.jsx)(C.Z, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(L, {
                                      onClick: n,
                                      children: [
                                          M,
                                          (0, i.jsx)(h.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: h.Z.Directions.DOWN,
                                              className: P.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          l &&
                              (0, i.jsx)(a.TooltipContainer, {
                                  className: P.previewWarning,
                                  text: O.intl.string(O.t.mW4DUF),
                                  children: (0, i.jsx)(a.CircleWarningIcon, {
                                      size: 'xs',
                                      color: u.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          I &&
                              (0, i.jsx)(a.TooltipContainer, {
                                  className: P.previewWarning,
                                  text: O.intl.formatToPlainString(O.t.eummvb, {
                                      maxTiers: A.fF,
                                      maxProducts: b.dD
                                  }),
                                  children: (0, i.jsx)(a.CircleWarningIcon, {
                                      size: 'xs',
                                      color: u.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            l || r === T.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(R, { onClick: () => Z({ backToSettings: !1 }) })
        ]
    });
}
function M(t) {
    let { guildId: n } = t;
    return (0, o.e7)([v.Z], () => v.Z.isViewingRoles(n))
        ? (0, i.jsx)('div', {
              className: l()(P.settingsWrapper, {
                  [P.windows]: (0, I.isWindows)(),
                  [P.osx]: (0, I.isMac)()
              }),
              children: (0, i.jsx)(y, {})
          })
        : null;
}
