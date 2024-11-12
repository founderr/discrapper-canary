n.d(t, {
    Z: function () {
        return y;
    },
    d: function () {
        return M;
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
    p = n(434404),
    _ = n(703656),
    E = n(944486),
    g = n(914010),
    m = n(671533),
    h = n(259580),
    S = n(358085),
    I = n(962086),
    v = n(160404),
    C = n(889695),
    T = n(981631),
    N = n(176505),
    b = n(302463),
    A = n(293810),
    O = n(388032),
    L = n(489666);
function R(e) {
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
function P(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(R, {
        onClick: t,
        children: O.intl.string(O.t.R9GHyc)
    });
}
function y() {
    let e = (0, o.e7)([g.Z], () => g.Z.getGuildId()),
        t = (0, o.e7)([E.Z], () => E.Z.getChannelId(e)),
        {
            viewingRoles: n,
            backNavigationSection: r,
            isFullServerPreview: l,
            isServerShopPreview: S
        } = (0, o.cj)([v.Z], () => ({
            viewingRoles: null != e ? v.Z.getViewingRoles(e) : null,
            backNavigationSection: v.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && v.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && v.Z.isViewingServerShop(e)
        }));
    if (null == n || null == e) return null;
    let y = (function (e) {
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
        M = r === T.pNK.ROLE_SUBSCRIPTIONS ? O.intl.string(O.t.hZUCzc) : O.intl.string(O.t['/djIh4']),
        x = t === N.oC.GUILD_ONBOARDING,
        Z = (t) => {
            let { backToSettings: n } = t;
            null != e && (v.Z.isFullServerPreview(e) && (0, _.uL)(T.Z5c.CHANNEL(e)), c.ZP.shouldShowOnboarding(e) && (s.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, I.mL)(e), n && p.Z.open(e, r), r === T.pNK.ROLE_SUBSCRIPTIONS && (0, f.GN)(e));
        };
    return (0, i.jsxs)(a.Notice, {
        color: a.NoticeColors.BRAND,
        className: L.notice,
        children: [
            (0, i.jsxs)(R, {
                onClick: () => Z({ backToSettings: !0 }),
                className: L.backButton,
                children: [
                    (0, i.jsx)(m.Z, {
                        width: 16,
                        height: 16,
                        direction: m.Z.Directions.LEFT,
                        className: L.backArrow
                    }),
                    y
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
                              renderPopout: () => (0, i.jsx)(C.Z, { guildId: e }),
                              children: (e) => {
                                  let { onClick: t } = e;
                                  return (0, i.jsxs)(R, {
                                      onClick: t,
                                      children: [
                                          M,
                                          (0, i.jsx)(h.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: h.Z.Directions.DOWN,
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
                          S &&
                              (0, i.jsx)(a.TooltipContainer, {
                                  className: L.previewWarning,
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
            l || r === T.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(P, { onClick: () => Z({ backToSettings: !1 }) })
        ]
    });
}
function M(e) {
    let { guildId: t } = e;
    return (0, o.e7)([v.Z], () => v.Z.isViewingRoles(t))
        ? (0, i.jsx)('div', {
              className: l()(L.settingsWrapper, {
                  [L.windows]: (0, S.isWindows)(),
                  [L.osx]: (0, S.isMac)()
              }),
              children: (0, i.jsx)(y, {})
          })
        : null;
}
