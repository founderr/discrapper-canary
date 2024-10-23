n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var o = n(200651),
    s = n(192379),
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
    C = n(667105),
    g = n(284851),
    _ = n(46140),
    f = n(689938),
    h = n(632946);
let E = [
    {
        value: _.cd.DESKTOP,
        get label() {
            return f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP;
        }
    },
    {
        value: _.cd.CONSOLE,
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
        case _.cd.DESKTOP:
            (n = (0, o.jsx)(i.ScreenIcon, {})), (t = f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP);
            break;
        case _.cd.CONSOLE:
            (n = (0, o.jsx)(i.GameControllerIcon, {})), (t = f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE);
            break;
        default:
            return null;
    }
    return (0, o.jsxs)('div', {
        className: h.platformSelectorPrimaryLabel,
        children: [n, t]
    });
}
function T(e) {
    var t, n, r, T;
    let { quest: N, location: v, onReceiveErrorHints: j, contentPosition: A, rowIndex: b } = e,
        R = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        B = (0, C.g2)({ useReducedMotion: R }),
        I = (0, u._s)({ quest: N }),
        y = (0, u.z)(N),
        M = (0, u.B6)(N.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        { isClaiming: O, isEnrolling: w } = (0, l.cj)([p.Z], () => ({
            isClaiming: p.Z.isClaimingReward(N.id) || p.Z.isFetchingRewardCode(N.id),
            isEnrolling: p.Z.isEnrolling(N.id)
        })),
        k = (null === (t = N.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        L = (null === (n = N.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        U = L && (null === (r = N.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null,
        q = (0, x.iQ)(N),
        Z = !(0, x.zi)(N),
        P = (0, u._Q)(N),
        Q = (0, x.zK)(N, _.S7.IN_HOUSE_CONSOLE_QUEST),
        D = (0, x.Xv)(N.config),
        W = (0, u.Rf)(N),
        [H, V, z] = (0, u.me)(N, W),
        G = Z && P === u.OH.ACCEPTED,
        F = G && H === m.LI.SELECT,
        K = G && !F && V.length > 1,
        Y = s.useCallback(
            (e) => {
                z(e), e === _.cd.DESKTOP && j([]);
            },
            [z, j]
        ),
        { text: X, onClick: J } = (0, C.Ks)({
            progressState: P,
            quest: N,
            isInHouseQuest: Q,
            location: v,
            isCollectibleQuest: D,
            questContentPosition: A,
            questContentRowIndex: b,
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
                        questContentRowIndex: b
                    });
            },
            afterRequest: (e) => {
                B.stopAnimation(), j(e);
            }
        }),
        et = (null === (T = N.userStatus) || void 0 === T ? void 0 : T.claimedAt) != null,
        en = null;
    return (q && U
        ? (en = (0, o.jsx)(i.Button, {
              color: i.ButtonColors.BRAND,
              submitting: O,
              onClick: null != J ? J : void 0,
              className: h.button,
              children: X
          }))
        : L
          ? (en = (0, o.jsx)(i.Button, {
                color: i.ButtonColors.BRAND,
                className: h.button,
                onClick: null != J ? J : void 0,
                children: X
            }))
          : Z
            ? Z && U
                ? (en = (0, o.jsx)(i.Button, {
                      color: i.ButtonColors.BRAND,
                      submitting: O,
                      onClick: null != J ? J : void 0,
                      className: h.button,
                      children: X
                  }))
                : Z && k && !et
                  ? (en = F
                        ? (0, o.jsx)(i.Select, {
                              className: h.platformSelectorPrimary,
                              isSelected: () => !1,
                              options: E,
                              placeholder: f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_SUBTITLE,
                              renderOptionLabel: S,
                              select: Y,
                              serialize: (e) => {
                                  switch (e) {
                                      case _.cd.DESKTOP:
                                          return f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP;
                                      case _.cd.CONSOLE:
                                          return f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE;
                                  }
                              }
                          })
                        : (0, x.$J)(N) && !y && H !== m.LI.DESKTOP
                          ? I
                              ? (0, o.jsx)(i.Button, {
                                    color: i.ButtonColors.PRIMARY,
                                    className: h.button,
                                    onClick: null != J ? J : void 0,
                                    children: X
                                })
                              : (0, o.jsx)(i.Button, {
                                    color: i.ButtonColors.PRIMARY,
                                    onClick: ee,
                                    disabled: $,
                                    className: h.button,
                                    children: (0, o.jsxs)('div', {
                                        className: h.ctaInner,
                                        children: [B.render(), f.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA]
                                    })
                                })
                          : (0, o.jsx)(i.Button, {
                                color: i.ButtonColors.PRIMARY,
                                disabled: !0,
                                className: h.button,
                                children: f.Z.Messages.QUEST_ACCEPTED
                            }))
                  : Z &&
                    !k &&
                    (en = (0, o.jsx)(i.Button, {
                        submitting: w,
                        color: i.ButtonColors.BRAND,
                        onClick: null != J ? J : void 0,
                        className: h.button,
                        children: X
                    }))
            : (en = (0, o.jsx)(i.Button, {
                  color: i.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: h.button,
                  children: f.Z.Messages.QUESTS_ENDED_ON_DATE.format({ expiryDate: M })
              })),
    null == en)
        ? null
        : (0, o.jsxs)('div', {
              className: h.container,
              children: [
                  en,
                  K &&
                      (0, o.jsx)(g.U, {
                          onSelect: Y,
                          quest: N,
                          questContent: m.jn.ACTIVITY_PANEL,
                          children: (e) =>
                              (0, o.jsx)(i.Button, {
                                  className: a()(h.button, h.platformSelectorSecondary),
                                  color: i.ButtonColors.PRIMARY,
                                  ...e,
                                  children: (0, o.jsxs)('div', {
                                      className: h.platformSelectorSecondaryContent,
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
                                              className: h.platformSelectorSecondaryChevron,
                                              color: 'currentColor'
                                          })
                                      ]
                                  })
                              })
                      })
              ]
          });
}
