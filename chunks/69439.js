n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var o = n(735250),
    s = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(442837),
    i = n(481060),
    c = n(607070),
    d = n(617136),
    u = n(113434),
    p = n(569984),
    m = n(497505),
    x = n(918701),
    _ = n(667105),
    C = n(284851),
    g = n(46140),
    f = n(689938),
    E = n(632946);
let h = [
    {
        value: g.cd.DESKTOP,
        get label() {
            return f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP;
        }
    },
    {
        value: g.cd.CONSOLE,
        get label() {
            return f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE;
        }
    }
];
function S(e) {
    let t,
        n,
        { value: s } = e;
    switch (s) {
        case g.cd.DESKTOP:
            (n = (0, o.jsx)(i.ScreenIcon, {})), (t = f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP);
            break;
        case g.cd.CONSOLE:
            (n = (0, o.jsx)(i.GameControllerIcon, {})), (t = f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE);
            break;
        default:
            return null;
    }
    return (0, o.jsxs)('div', {
        className: E.platformSelectorPrimaryLabel,
        children: [n, t]
    });
}
function T(e) {
    var t, n, r, T;
    let { quest: N, location: v, onReceiveErrorHints: j, contentPosition: A, rowIndex: R } = e,
        b = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        B = (0, _.g2)({ useReducedMotion: b }),
        I = (0, u._s)({ quest: N }),
        M = (0, u.z)(N),
        O = (0, u.B6)(N.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        { isClaiming: y, isEnrolling: L } = (0, l.cj)([p.Z], () => ({
            isClaiming: p.Z.isClaimingReward(N.id) || p.Z.isFetchingRewardCode(N.id),
            isEnrolling: p.Z.isEnrolling(N.id)
        })),
        w = (null === (t = N.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        U = (null === (n = N.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        k = U && (null === (r = N.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null,
        Z = (0, x.iQ)(N),
        q = !(0, x.zi)(N),
        P = (0, u._Q)(N),
        Q = (0, x.zK)(N, g.S7.IN_HOUSE_CONSOLE_QUEST),
        D = (0, x.Xv)(N.config),
        W = (0, u.Rf)(N),
        [H, V, z] = (0, u.me)(N, W),
        G = q && P === u.OH.ACCEPTED,
        F = G && H === m.LI.SELECT,
        K = G && !F && V.length > 1,
        Y = s.useCallback(
            (e) => {
                z(e), e === g.cd.DESKTOP && j([]);
            },
            [z, j]
        ),
        { text: X, onClick: J } = (0, _.Ks)({
            progressState: P,
            quest: N,
            isInHouseQuest: Q,
            location: v,
            isCollectibleQuest: D,
            questContentPosition: A,
            questContentRowIndex: R,
            inGiftInventory: !0
        }),
        { startingConsoleQuest: $, startConsoleQuest: ee } = (0, u.GI)({
            questId: N.id,
            beforeRequest: () => {
                B.startAnimation(),
                    (0, d._3)({
                        questId: N.id,
                        questContent: v,
                        questContentCTA: d.jZ.DEFIBRILLATOR,
                        questContentPosition: A,
                        questContentRowIndex: R
                    });
            },
            afterRequest: (e) => {
                B.stopAnimation(), j(e);
            }
        }),
        et = (null === (T = N.userStatus) || void 0 === T ? void 0 : T.claimedAt) != null,
        en = null;
    return (Z && k
        ? (en = (0, o.jsx)(i.Button, {
              color: i.ButtonColors.BRAND,
              submitting: y,
              onClick: null != J ? J : void 0,
              className: E.button,
              children: X
          }))
        : U
          ? (en = (0, o.jsx)(i.Button, {
                color: i.ButtonColors.BRAND,
                className: E.button,
                onClick: null != J ? J : void 0,
                children: X
            }))
          : q
            ? q && k
                ? (en = (0, o.jsx)(i.Button, {
                      color: i.ButtonColors.BRAND,
                      submitting: y,
                      onClick: null != J ? J : void 0,
                      className: E.button,
                      children: X
                  }))
                : q && w && !et
                  ? (en = F
                        ? (0, o.jsx)(i.Select, {
                              className: E.platformSelectorPrimary,
                              isSelected: () => !1,
                              options: h,
                              placeholder: f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_SUBTITLE,
                              renderOptionLabel: S,
                              select: Y,
                              serialize: (e) => {
                                  switch (e) {
                                      case g.cd.DESKTOP:
                                          return f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP;
                                      case g.cd.CONSOLE:
                                          return f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE;
                                  }
                              }
                          })
                        : (0, x.$J)(N) && !M && H !== m.LI.DESKTOP
                          ? I
                              ? (0, o.jsx)(i.Button, {
                                    color: i.ButtonColors.PRIMARY,
                                    className: E.button,
                                    onClick: null != J ? J : void 0,
                                    children: X
                                })
                              : (0, o.jsx)(i.Button, {
                                    color: i.ButtonColors.PRIMARY,
                                    onClick: ee,
                                    disabled: $,
                                    className: E.button,
                                    children: (0, o.jsxs)('div', {
                                        className: E.ctaInner,
                                        children: [B.render(), f.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA]
                                    })
                                })
                          : (0, o.jsx)(i.Button, {
                                color: i.ButtonColors.PRIMARY,
                                disabled: !0,
                                className: E.button,
                                children: f.Z.Messages.QUEST_ACCEPTED
                            }))
                  : q &&
                    !w &&
                    (en = (0, o.jsx)(i.Button, {
                        submitting: L,
                        color: i.ButtonColors.BRAND,
                        onClick: null != J ? J : void 0,
                        className: E.button,
                        children: X
                    }))
            : (en = (0, o.jsx)(i.Button, {
                  color: i.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: E.button,
                  children: f.Z.Messages.QUESTS_ENDED_ON_DATE.format({ expiryDate: O })
              })),
    null == en)
        ? null
        : (0, o.jsxs)('div', {
              className: E.container,
              children: [
                  en,
                  K &&
                      (0, o.jsx)(C.U, {
                          onSelect: Y,
                          quest: N,
                          questContent: m.jn.ACTIVITY_PANEL,
                          children: (e) =>
                              (0, o.jsx)(i.Button, {
                                  className: a()(E.button, E.platformSelectorSecondary),
                                  color: i.ButtonColors.PRIMARY,
                                  ...e,
                                  children: (0, o.jsxs)('div', {
                                      className: E.platformSelectorSecondaryContent,
                                      children: [
                                          (function (e) {
                                              switch (e) {
                                                  case m.LI.DESKTOP:
                                                      return (0, o.jsx)(i.ScreenIcon, { color: 'currentColor' });
                                                  case m.LI.CONSOLE:
                                                      return (0, o.jsx)(i.GameControllerIcon, { color: 'currentColor' });
                                                  default:
                                                      return null;
                                              }
                                          })(H),
                                          (0, o.jsx)(i.ChevronSmallDownIcon, {
                                              className: E.platformSelectorSecondaryChevron,
                                              color: 'currentColor'
                                          })
                                      ]
                                  })
                              })
                      })
              ]
          });
}
