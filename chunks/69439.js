n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(617136),
    _ = n(113434),
    u = n(569984),
    E = n(497505),
    T = n(918701),
    I = n(667105),
    R = n(284851),
    m = n(46140),
    N = n(689938),
    g = n(632946);
let C = [
    {
        value: m.cd.DESKTOP,
        get label() {
            return N.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP;
        }
    },
    {
        value: m.cd.CONSOLE,
        get label() {
            return N.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE;
        }
    }
];
function p(e) {
    let t,
        n,
        { value: a } = e;
    switch (a) {
        case m.cd.DESKTOP:
            (n = (0, s.jsx)(o.ScreenIcon, {})), (t = N.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP);
            break;
        case m.cd.CONSOLE:
            (n = (0, s.jsx)(o.GameControllerIcon, {})), (t = N.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE);
            break;
        default:
            return null;
    }
    return (0, s.jsxs)('div', {
        className: g.platformSelectorPrimaryLabel,
        children: [n, t]
    });
}
function f(e) {
    var t, n, r, f;
    let { quest: A, location: h, onReceiveErrorHints: S, contentPosition: M, rowIndex: x } = e,
        b = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        O = (0, I.g2)({ useReducedMotion: b }),
        v = (0, _._s)({ quest: A }),
        P = (0, _.z)(A),
        L = (0, _.B6)(A.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        { isClaiming: Z, isEnrolling: D } = (0, l.cj)([u.Z], () => ({
            isClaiming: u.Z.isClaimingReward(A.id) || u.Z.isFetchingRewardCode(A.id),
            isEnrolling: u.Z.isEnrolling(A.id)
        })),
        B = (null === (t = A.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        U = (null === (n = A.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        j = U && (null === (r = A.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null,
        G = (0, T.iQ)(A),
        w = !(0, T.zi)(A),
        y = (0, _._Q)(A),
        H = (0, T.zK)(A, m.S7.IN_HOUSE_CONSOLE_QUEST),
        k = (0, T.Xv)(A.config),
        F = (0, _.Rf)(A),
        [V, W, K] = (0, _.me)(A, F),
        Y = w && y === _.OH.ACCEPTED,
        z = Y && V === E.LI.SELECT,
        Q = Y && !z && W.length > 1,
        q = a.useCallback(
            (e) => {
                K(e), e === m.cd.DESKTOP && S([]);
            },
            [K, S]
        ),
        { text: X, onClick: J } = (0, I.Ks)({
            progressState: y,
            quest: A,
            isInHouseQuest: H,
            location: h,
            isCollectibleQuest: k,
            questContentPosition: M,
            questContentRowIndex: x,
            inGiftInventory: !0
        }),
        { startingConsoleQuest: $, startConsoleQuest: ee } = (0, _.GI)({
            questId: A.id,
            beforeRequest: () => {
                O.startAnimation(),
                    (0, d._3)({
                        questId: A.id,
                        questContent: h,
                        questContentCTA: d.jZ.DEFIBRILLATOR,
                        questContentPosition: M,
                        questContentRowIndex: x
                    });
            },
            afterRequest: (e) => {
                O.stopAnimation(), S(e);
            }
        }),
        et = (null === (f = A.userStatus) || void 0 === f ? void 0 : f.claimedAt) != null,
        en = null;
    return (G && j
        ? (en = (0, s.jsx)(o.Button, {
              color: o.ButtonColors.BRAND,
              submitting: Z,
              onClick: null != J ? J : void 0,
              className: g.button,
              children: X
          }))
        : U
          ? (en = (0, s.jsx)(o.Button, {
                color: o.ButtonColors.BRAND,
                className: g.button,
                onClick: null != J ? J : void 0,
                children: X
            }))
          : w
            ? w && j
                ? (en = (0, s.jsx)(o.Button, {
                      color: o.ButtonColors.BRAND,
                      submitting: Z,
                      onClick: null != J ? J : void 0,
                      className: g.button,
                      children: X
                  }))
                : w && B && !et
                  ? (en = z
                        ? (0, s.jsx)(o.Select, {
                              className: g.platformSelectorPrimary,
                              isSelected: () => !1,
                              options: C,
                              placeholder: N.Z.Messages.QUEST_MULTIPLATFORM_SELECT_SUBTITLE,
                              renderOptionLabel: p,
                              select: q,
                              serialize: (e) => {
                                  switch (e) {
                                      case m.cd.DESKTOP:
                                          return N.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP;
                                      case m.cd.CONSOLE:
                                          return N.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE;
                                  }
                              }
                          })
                        : (0, T.$J)(A) && !P && V !== E.LI.DESKTOP
                          ? v
                              ? (0, s.jsx)(o.Button, {
                                    color: o.ButtonColors.PRIMARY,
                                    className: g.button,
                                    onClick: null != J ? J : void 0,
                                    children: X
                                })
                              : (0, s.jsx)(o.Button, {
                                    color: o.ButtonColors.PRIMARY,
                                    onClick: ee,
                                    disabled: $,
                                    className: g.button,
                                    children: (0, s.jsxs)('div', {
                                        className: g.ctaInner,
                                        children: [O.render(), N.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA]
                                    })
                                })
                          : (0, s.jsx)(o.Button, {
                                color: o.ButtonColors.PRIMARY,
                                disabled: !0,
                                className: g.button,
                                children: N.Z.Messages.QUEST_ACCEPTED
                            }))
                  : w &&
                    !B &&
                    (en = (0, s.jsx)(o.Button, {
                        submitting: D,
                        color: o.ButtonColors.BRAND,
                        onClick: null != J ? J : void 0,
                        className: g.button,
                        children: X
                    }))
            : (en = (0, s.jsx)(o.Button, {
                  color: o.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: g.button,
                  children: N.Z.Messages.QUESTS_ENDED_ON_DATE.format({ expiryDate: L })
              })),
    null == en)
        ? null
        : (0, s.jsxs)('div', {
              className: g.container,
              children: [
                  en,
                  Q &&
                      (0, s.jsx)(R.U, {
                          onSelect: q,
                          quest: A,
                          questContent: E.jn.ACTIVITY_PANEL,
                          children: (e) =>
                              (0, s.jsx)(o.Button, {
                                  className: i()(g.button, g.platformSelectorSecondary),
                                  color: o.ButtonColors.PRIMARY,
                                  ...e,
                                  children: (0, s.jsxs)('div', {
                                      className: g.platformSelectorSecondaryContent,
                                      children: [
                                          (function (e) {
                                              switch (e) {
                                                  case E.LI.DESKTOP:
                                                      return (0, s.jsx)(o.ScreenIcon, { color: 'currentColor' });
                                                  case E.LI.CONSOLE:
                                                      return (0, s.jsx)(o.GameControllerIcon, { color: 'currentColor' });
                                                  default:
                                                      return null;
                                              }
                                          })(V),
                                          (0, s.jsx)(o.ChevronSmallDownIcon, {
                                              className: g.platformSelectorSecondaryChevron,
                                              color: 'currentColor'
                                          })
                                      ]
                                  })
                              })
                      })
              ]
          });
}
