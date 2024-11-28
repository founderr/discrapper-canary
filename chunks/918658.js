n.d(t, {
    Z: function () {
        return M;
    },
    d: function () {
        return y;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(442837),
    u = n(692547),
    a = n(481060),
    s = n(549817),
    c = n(819553),
    d = n(17181),
    f = n(303737),
    _ = n(434404),
    p = n(703656),
    g = n(944486),
    m = n(914010),
    E = n(671533),
    I = n(259580),
    h = n(358085),
    C = n(962086),
    S = n(160404),
    T = n(889695),
    v = n(981631),
    b = n(176505),
    N = n(302463),
    A = n(293810),
    O = n(388032),
    L = n(646217);
function P(e) {
    let { className: t, onClick: n, children: r } = e;
    return (0, i.jsx)(a.Button, {
        className: l()(L.button, t),
        innerClassName: L.buttonInner,
        look: a.Button.Looks.OUTLINED,
        color: a.Button.Colors.WHITE,
        size: a.Button.Sizes.NONE,
        onClick: n,
        children: r
    });
}
function R(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(P, {
        onClick: t,
        children: O.intl.string(O.t.R9GHyc)
    });
}
function M() {
    let e = (0, o.e7)([m.Z], () => m.Z.getGuildId()),
        t = (0, o.e7)([g.Z], () => g.Z.getChannelId(e)),
        {
            viewingRoles: n,
            backNavigationSection: r,
            isFullServerPreview: l,
            isServerShopPreview: h
        } = (0, o.cj)([S.Z], () => ({
            viewingRoles: null != e ? S.Z.getViewingRoles(e) : null,
            backNavigationSection: S.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && S.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && S.Z.isViewingServerShop(e)
        }));
    if (null == n || null == e) return null;
    let M = (function (e) {
            switch (e) {
                case v.pNK.INTEGRATIONS:
                    return O.intl.string(O.t.k7LGdn);
                case v.pNK.ROLE_SUBSCRIPTIONS:
                    return O.intl.string(O.t.bRqiqa);
                case v.pNK.ONBOARDING:
                    return O.intl.string(O.t.qZpU3d);
                default:
                    return O.intl.string(O.t.MTIXho);
            }
        })(r),
        y = r === v.pNK.ROLE_SUBSCRIPTIONS ? O.intl.string(O.t.hZUCzc) : O.intl.string(O.t['/djIh4']),
        x = t === b.oC.GUILD_ONBOARDING,
        Z = (t) => {
            let { backToSettings: n } = t;
            null != e && (S.Z.isFullServerPreview(e) && (0, p.uL)(v.Z5c.CHANNEL(e)), c.ZP.shouldShowOnboarding(e) && (s.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, C.mL)(e), n && _.Z.open(e, r), r === v.pNK.ROLE_SUBSCRIPTIONS && (0, f.GN)(e));
        };
    return (0, i.jsxs)(a.Notice, {
        color: a.NoticeColors.BRAND,
        className: L.notice,
        children: [
            (0, i.jsxs)(P, {
                onClick: () => Z({ backToSettings: !0 }),
                className: L.backButton,
                children: [
                    (0, i.jsx)(E.Z, {
                        width: 16,
                        height: 16,
                        direction: E.Z.Directions.LEFT,
                        className: L.backArrow
                    }),
                    M
                ]
            }),
            x && l
                ? (0, i.jsx)('div', {
                      className: L.noticeContents,
                      children: (0, i.jsx)('div', {
                          className: L.noticeText,
                          children: O.intl.string(O.t.PxbiAQ)
                      })
                  })
                : (0, i.jsxs)('div', {
                      className: L.noticeContents,
                      children: [
                          (0, i.jsx)('div', {
                              className: L.noticeText,
                              children: l ? O.intl.formatToPlainString(O.t['0PHahI'], { numRoles: Object.keys(n).length }) : O.intl.formatToPlainString(O.t.vMlK8v, { numRoles: Object.keys(n).length })
                          }),
                          (0, i.jsx)(a.Popout, {
                              position: 'bottom',
                              renderPopout: () => (0, i.jsx)(T.Z, { guildId: e }),
                              children: (e) => {
                                  let { onClick: t } = e;
                                  return (0, i.jsxs)(P, {
                                      onClick: t,
                                      children: [
                                          y,
                                          (0, i.jsx)(I.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: I.Z.Directions.DOWN,
                                              className: L.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          l &&
                              (0, i.jsx)(a.TooltipContainer, {
                                  className: L.previewWarning,
                                  text: O.intl.string(O.t.mW4DUF),
                                  children: (0, i.jsx)(a.CircleWarningIcon, {
                                      size: 'xs',
                                      color: u.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          h &&
                              (0, i.jsx)(a.TooltipContainer, {
                                  className: L.previewWarning,
                                  text: O.intl.formatToPlainString(O.t.eummvb, {
                                      maxTiers: A.fF,
                                      maxProducts: N.dD
                                  }),
                                  children: (0, i.jsx)(a.CircleWarningIcon, {
                                      size: 'xs',
                                      color: u.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            l || r === v.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(R, { onClick: () => Z({ backToSettings: !1 }) })
        ]
    });
}
function y(e) {
    let { guildId: t } = e;
    return (0, o.e7)([S.Z], () => S.Z.isViewingRoles(t))
        ? (0, i.jsx)('div', {
              className: l()(L.settingsWrapper, {
                  [L.windows]: (0, h.isWindows)(),
                  [L.osx]: (0, h.isMac)()
              }),
              children: (0, i.jsx)(M, {})
          })
        : null;
}
