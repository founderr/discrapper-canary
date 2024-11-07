t.d(n, {
    Z: function () {
        return M;
    },
    d: function () {
        return x;
    }
});
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    o = t(442837),
    u = t(692547),
    a = t(481060),
    s = t(549817),
    c = t(819553),
    d = t(17181),
    f = t(303737),
    p = t(434404),
    _ = t(703656),
    E = t(944486),
    g = t(914010),
    m = t(671533),
    h = t(259580),
    I = t(358085),
    S = t(962086),
    v = t(160404),
    C = t(889695),
    T = t(981631),
    N = t(176505),
    b = t(302463),
    A = t(293810),
    O = t(388032),
    P = t(489666);
function R(e) {
    let { className: n, onClick: t, children: r } = e;
    return (0, i.jsx)(a.Button, {
        className: l()(P.button, n),
        innerClassName: P.buttonInner,
        look: a.Button.Looks.OUTLINED,
        color: a.Button.Colors.WHITE,
        size: a.Button.Sizes.NONE,
        onClick: t,
        children: r
    });
}
function L(e) {
    let { onClick: n } = e;
    return (0, i.jsx)(R, {
        onClick: n,
        children: O.intl.string(O.t.R9GHyc)
    });
}
function M() {
    let e = (0, o.e7)([g.Z], () => g.Z.getGuildId()),
        n = (0, o.e7)([E.Z], () => E.Z.getChannelId(e)),
        {
            viewingRoles: t,
            backNavigationSection: r,
            isFullServerPreview: l,
            isServerShopPreview: I
        } = (0, o.cj)([v.Z], () => ({
            viewingRoles: null != e ? v.Z.getViewingRoles(e) : null,
            backNavigationSection: v.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && v.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && v.Z.isViewingServerShop(e)
        }));
    if (null == t || null == e) return null;
    let M = (function (e) {
            switch (e) {
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
        x = r === T.pNK.ROLE_SUBSCRIPTIONS ? O.intl.string(O.t.hZUCzc) : O.intl.string(O.t['/djIh4']),
        y = n === N.oC.GUILD_ONBOARDING,
        Z = (n) => {
            let { backToSettings: t } = n;
            null != e && (v.Z.isFullServerPreview(e) && (0, _.uL)(T.Z5c.CHANNEL(e)), c.ZP.shouldShowOnboarding(e) && (s.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, S.mL)(e), t && p.Z.open(e, r), r === T.pNK.ROLE_SUBSCRIPTIONS && (0, f.GN)(e));
        };
    return (0, i.jsxs)(a.Notice, {
        color: a.NoticeColors.BRAND,
        className: P.notice,
        children: [
            (0, i.jsxs)(R, {
                onClick: () => Z({ backToSettings: !0 }),
                className: P.backButton,
                children: [
                    (0, i.jsx)(m.Z, {
                        width: 16,
                        height: 16,
                        direction: m.Z.Directions.LEFT,
                        className: P.backArrow
                    }),
                    M
                ]
            }),
            y && l
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
                              children: l ? O.intl.formatToPlainString(O.t['0PHahI'], { numRoles: Object.keys(t).length }) : O.intl.formatToPlainString(O.t.vMlK8v, { numRoles: Object.keys(t).length })
                          }),
                          (0, i.jsx)(a.Popout, {
                              position: 'bottom',
                              renderPopout: () => (0, i.jsx)(C.Z, { guildId: e }),
                              children: (e) => {
                                  let { onClick: n } = e;
                                  return (0, i.jsxs)(R, {
                                      onClick: n,
                                      children: [
                                          x,
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
            l || r === T.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(L, { onClick: () => Z({ backToSettings: !1 }) })
        ]
    });
}
function x(e) {
    let { guildId: n } = e;
    return (0, o.e7)([v.Z], () => v.Z.isViewingRoles(n))
        ? (0, i.jsx)('div', {
              className: l()(P.settingsWrapper, {
                  [P.windows]: (0, I.isWindows)(),
                  [P.osx]: (0, I.isMac)()
              }),
              children: (0, i.jsx)(M, {})
          })
        : null;
}
