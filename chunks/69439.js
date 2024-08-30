n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(617136),
    u = n(113434),
    _ = n(569984),
    h = n(497505),
    E = n(918701),
    m = n(667105),
    I = n(284851),
    g = n(46140),
    p = n(689938),
    T = n(839062);
let f = [
    {
        value: g.cd.DESKTOP,
        get label() {
            return p.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP;
        }
    },
    {
        value: g.cd.CONSOLE,
        get label() {
            return p.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE;
        }
    }
];
function S(e) {
    let t,
        n,
        { value: a } = e;
    switch (a) {
        case g.cd.DESKTOP:
            (n = (0, i.jsx)(o.ScreenIcon, {})), (t = p.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP);
            break;
        case g.cd.CONSOLE:
            (n = (0, i.jsx)(o.GameControllerIcon, {})), (t = p.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE);
            break;
        default:
            return null;
    }
    return (0, i.jsxs)('div', {
        className: T.platformSelectorPrimaryLabel,
        children: [n, t]
    });
}
function C(e) {
    var t, n, s, C;
    let { quest: N, location: A, onReceiveErrorHints: v, contentPosition: Z, rowIndex: L } = e,
        R = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        O = (0, m.g2)({ useReducedMotion: R }),
        x = (0, u._s)({ quest: N }),
        b = (0, u.z)(N),
        P = (0, u.B6)(N.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        { isClaiming: M, isEnrolling: D } = (0, l.cj)([_.Z], () => ({
            isClaiming: _.Z.isClaimingReward(N.id) || _.Z.isFetchingRewardCode(N.id),
            isEnrolling: _.Z.isEnrolling(N.id)
        })),
        y = (null === (t = N.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        j = (null === (n = N.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        U = j && (null === (s = N.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null,
        G = (0, E.iQ)(N),
        w = !(0, E.zi)(N),
        k = (0, u._Q)(N),
        B = (0, E.zK)(N, g.S7.IN_HOUSE_CONSOLE_QUEST),
        H = (0, E.Xv)(N.config),
        V = (0, u.Rf)(N),
        [F, Y, W] = (0, u.me)(N, V),
        z = w && k === u.OH.ACCEPTED,
        K = z && F === h.LI.SELECT,
        q = z && !K && Y.length > 1,
        Q = a.useCallback(
            (e) => {
                W(e), e === g.cd.DESKTOP && v([]);
            },
            [W, v]
        ),
        { text: X, onClick: J } = (0, m.Ks)({
            progressState: k,
            quest: N,
            isInHouseQuest: B,
            location: A,
            isCollectibleQuest: H,
            questContentPosition: Z,
            questContentRowIndex: L,
            inGiftInventory: !0
        }),
        { startingConsoleQuest: $, startConsoleQuest: ee } = (0, u.GI)({
            questId: N.id,
            beforeRequest: () => {
                O.startAnimation(),
                    (0, d._3)({
                        questId: N.id,
                        questContent: A,
                        questContentCTA: d.jZ.DEFIBRILLATOR,
                        questContentPosition: Z,
                        questContentRowIndex: L
                    });
            },
            afterRequest: (e) => {
                O.stopAnimation(), v(e);
            }
        }),
        et = (null === (C = N.userStatus) || void 0 === C ? void 0 : C.claimedAt) != null,
        en = null;
    return (G && U
        ? (en = (0, i.jsx)(o.Button, {
              color: o.ButtonColors.BRAND,
              submitting: M,
              onClick: null != J ? J : void 0,
              className: T.button,
              children: X
          }))
        : j
          ? (en = (0, i.jsx)(o.Button, {
                color: o.ButtonColors.BRAND,
                className: T.button,
                onClick: null != J ? J : void 0,
                children: X
            }))
          : w
            ? w && U
                ? (en = (0, i.jsx)(o.Button, {
                      color: o.ButtonColors.BRAND,
                      submitting: M,
                      onClick: null != J ? J : void 0,
                      className: T.button,
                      children: X
                  }))
                : w && y && !et
                  ? (en = K
                        ? (0, i.jsx)(o.Select, {
                              className: T.platformSelectorPrimary,
                              isSelected: () => !1,
                              options: f,
                              placeholder: p.Z.Messages.QUEST_MULTIPLATFORM_SELECT_SUBTITLE,
                              renderOptionLabel: S,
                              select: Q,
                              serialize: (e) => {
                                  switch (e) {
                                      case g.cd.DESKTOP:
                                          return p.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP;
                                      case g.cd.CONSOLE:
                                          return p.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE;
                                  }
                              }
                          })
                        : (0, E.$J)(N) && !b && F !== h.LI.DESKTOP
                          ? x
                              ? (0, i.jsx)(o.Button, {
                                    color: o.ButtonColors.PRIMARY,
                                    className: T.button,
                                    onClick: null != J ? J : void 0,
                                    children: X
                                })
                              : (0, i.jsx)(o.Button, {
                                    color: o.ButtonColors.PRIMARY,
                                    onClick: ee,
                                    disabled: $,
                                    className: T.button,
                                    children: (0, i.jsxs)('div', {
                                        className: T.ctaInner,
                                        children: [O.render(), p.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA]
                                    })
                                })
                          : (0, i.jsx)(o.Button, {
                                color: o.ButtonColors.PRIMARY,
                                disabled: !0,
                                className: T.button,
                                children: p.Z.Messages.QUEST_ACCEPTED
                            }))
                  : w &&
                    !y &&
                    (en = (0, i.jsx)(o.Button, {
                        submitting: D,
                        color: o.ButtonColors.BRAND,
                        onClick: null != J ? J : void 0,
                        className: T.button,
                        children: X
                    }))
            : (en = (0, i.jsx)(o.Button, {
                  color: o.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: T.button,
                  children: p.Z.Messages.QUESTS_ENDED_ON_DATE.format({ expiryDate: P })
              })),
    null == en)
        ? null
        : (0, i.jsxs)('div', {
              className: T.container,
              children: [
                  en,
                  q &&
                      (0, i.jsx)(I.U, {
                          onSelect: Q,
                          quest: N,
                          questContent: h.jn.ACTIVITY_PANEL,
                          children: (e) =>
                              (0, i.jsx)(o.Button, {
                                  className: r()(T.button, T.platformSelectorSecondary),
                                  color: o.ButtonColors.PRIMARY,
                                  ...e,
                                  children: (0, i.jsxs)('div', {
                                      className: T.platformSelectorSecondaryContent,
                                      children: [
                                          (function (e) {
                                              switch (e) {
                                                  case h.LI.DESKTOP:
                                                      return (0, i.jsx)(o.ScreenIcon, { color: 'currentColor' });
                                                  case h.LI.CONSOLE:
                                                      return (0, i.jsx)(o.GameControllerIcon, { color: 'currentColor' });
                                                  default:
                                                      return null;
                                              }
                                          })(F),
                                          (0, i.jsx)(o.ChevronSmallDownIcon, {
                                              className: T.platformSelectorSecondaryChevron,
                                              color: 'currentColor'
                                          })
                                      ]
                                  })
                              })
                      })
              ]
          });
}
