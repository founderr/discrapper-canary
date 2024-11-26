n.d(t, {
    Z: function () {
        return y;
    },
    d: function () {
        return Z;
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
    E = n(703656),
    p = n(944486),
    m = n(914010),
    g = n(671533),
    h = n(259580),
    I = n(358085),
    S = n(962086),
    C = n(160404),
    T = n(889695),
    v = n(981631),
    N = n(176505),
    A = n(302463),
    b = n(293810),
    L = n(388032),
    O = n(646217);
function R(e) {
    let { className: t, onClick: n, children: r } = e;
    return (0, i.jsx)(a.Button, {
        className: l()(O.button, t),
        innerClassName: O.buttonInner,
        look: a.Button.Looks.OUTLINED,
        color: a.Button.Colors.WHITE,
        size: a.Button.Sizes.NONE,
        onClick: n,
        children: r
    });
}
function P(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(R, {
        onClick: t,
        children: L.intl.string(L.t.R9GHyc)
    });
}
function y() {
    let e = (0, o.e7)([m.Z], () => m.Z.getGuildId()),
        t = (0, o.e7)([p.Z], () => p.Z.getChannelId(e)),
        {
            viewingRoles: n,
            backNavigationSection: r,
            isFullServerPreview: l,
            isServerShopPreview: I
        } = (0, o.cj)([C.Z], () => ({
            viewingRoles: null != e ? C.Z.getViewingRoles(e) : null,
            backNavigationSection: C.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && C.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && C.Z.isViewingServerShop(e)
        }));
    if (null == n || null == e) return null;
    let y = (function (e) {
            switch (e) {
                case v.pNK.INTEGRATIONS:
                    return L.intl.string(L.t.k7LGdn);
                case v.pNK.ROLE_SUBSCRIPTIONS:
                    return L.intl.string(L.t.bRqiqa);
                case v.pNK.ONBOARDING:
                    return L.intl.string(L.t.qZpU3d);
                default:
                    return L.intl.string(L.t.MTIXho);
            }
        })(r),
        Z = r === v.pNK.ROLE_SUBSCRIPTIONS ? L.intl.string(L.t.hZUCzc) : L.intl.string(L.t['/djIh4']),
        M = t === N.oC.GUILD_ONBOARDING,
        x = (t) => {
            let { backToSettings: n } = t;
            null != e && (C.Z.isFullServerPreview(e) && (0, E.uL)(v.Z5c.CHANNEL(e)), c.ZP.shouldShowOnboarding(e) && (s.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, S.mL)(e), n && _.Z.open(e, r), r === v.pNK.ROLE_SUBSCRIPTIONS && (0, f.GN)(e));
        };
    return (0, i.jsxs)(a.Notice, {
        color: a.NoticeColors.BRAND,
        className: O.notice,
        children: [
            (0, i.jsxs)(R, {
                onClick: () => x({ backToSettings: !0 }),
                className: O.backButton,
                children: [
                    (0, i.jsx)(g.Z, {
                        width: 16,
                        height: 16,
                        direction: g.Z.Directions.LEFT,
                        className: O.backArrow
                    }),
                    y
                ]
            }),
            M && l
                ? (0, i.jsx)('div', {
                      className: O.noticeContents,
                      children: (0, i.jsx)('div', {
                          className: O.noticeText,
                          children: L.intl.string(L.t.PxbiAQ)
                      })
                  })
                : (0, i.jsxs)('div', {
                      className: O.noticeContents,
                      children: [
                          (0, i.jsx)('div', {
                              className: O.noticeText,
                              children: l ? L.intl.formatToPlainString(L.t['0PHahI'], { numRoles: Object.keys(n).length }) : L.intl.formatToPlainString(L.t.vMlK8v, { numRoles: Object.keys(n).length })
                          }),
                          (0, i.jsx)(a.Popout, {
                              position: 'bottom',
                              renderPopout: () => (0, i.jsx)(T.Z, { guildId: e }),
                              children: (e) => {
                                  let { onClick: t } = e;
                                  return (0, i.jsxs)(R, {
                                      onClick: t,
                                      children: [
                                          Z,
                                          (0, i.jsx)(h.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: h.Z.Directions.DOWN,
                                              className: O.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          l &&
                              (0, i.jsx)(a.TooltipContainer, {
                                  className: O.previewWarning,
                                  text: L.intl.string(L.t.mW4DUF),
                                  children: (0, i.jsx)(a.CircleWarningIcon, {
                                      size: 'xs',
                                      color: u.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          I &&
                              (0, i.jsx)(a.TooltipContainer, {
                                  className: O.previewWarning,
                                  text: L.intl.formatToPlainString(L.t.eummvb, {
                                      maxTiers: b.fF,
                                      maxProducts: A.dD
                                  }),
                                  children: (0, i.jsx)(a.CircleWarningIcon, {
                                      size: 'xs',
                                      color: u.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            l || r === v.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(P, { onClick: () => x({ backToSettings: !1 }) })
        ]
    });
}
function Z(e) {
    let { guildId: t } = e;
    return (0, o.e7)([C.Z], () => C.Z.isViewingRoles(t))
        ? (0, i.jsx)('div', {
              className: l()(O.settingsWrapper, {
                  [O.windows]: (0, I.isWindows)(),
                  [O.osx]: (0, I.isMac)()
              }),
              children: (0, i.jsx)(y, {})
          })
        : null;
}
