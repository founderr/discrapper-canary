n.d(t, {
    Z: function () {
        return v;
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
    _ = n(341907),
    g = n(284851),
    f = n(46140),
    h = n(689938),
    E = n(632946);
let S = [
    {
        value: f.cd.DESKTOP,
        get label() {
            return h.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP;
        }
    },
    {
        value: f.cd.CONSOLE,
        get label() {
            return h.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE;
        }
    }
];
function T(e) {
    let t,
        n,
        { value: s } = e;
    switch (s) {
        case f.cd.DESKTOP:
            (n = (0, o.jsx)(i.ScreenIcon, {})), (t = h.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP);
            break;
        case f.cd.CONSOLE:
            (n = (0, o.jsx)(i.GameControllerIcon, {})), (t = h.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE);
            break;
        default:
            return null;
    }
    return (0, o.jsxs)('div', {
        className: E.platformSelectorPrimaryLabel,
        children: [n, t]
    });
}
function v(e) {
    var t, n, r, v;
    let { quest: N, location: j, onReceiveErrorHints: A, contentPosition: b, rowIndex: B } = e,
        R = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        y = (0, C.g2)({ useReducedMotion: R }),
        I = (0, u._s)({ quest: N }),
        M = (0, u.z)(N),
        O = (0, u.B6)(N.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        { isClaiming: w, isEnrolling: k } = (0, l.cj)([p.Z], () => ({
            isClaiming: p.Z.isClaimingReward(N.id) || p.Z.isFetchingRewardCode(N.id),
            isEnrolling: p.Z.isEnrolling(N.id)
        })),
        P = (null === (t = N.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        L = (null === (n = N.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        U = L && (null === (r = N.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null,
        q = (0, x.iQ)(N),
        Z = !(0, x.zi)(N),
        Q = (0, u._Q)(N),
        D = (0, x.zK)(N, f.S7.IN_HOUSE_CONSOLE_QUEST),
        W = (0, x.Xv)(N.config),
        H = (0, x.cr)(N),
        V = (0, u.Rf)(N),
        [z, G, F] = (0, u.me)(N, V),
        K = Z && Q === u.OH.ACCEPTED,
        Y = K && z === m.LI.SELECT,
        X = K && !Y && G.length > 1,
        J = s.useCallback(
            (e) => {
                F(e), e === f.cd.DESKTOP && A([]);
            },
            [F, A]
        ),
        { text: $, onClick: ee } = (0, C.Ks)({
            progressState: Q,
            quest: N,
            isInHouseQuest: D,
            location: j,
            isCollectibleQuest: W,
            questContentPosition: b,
            questContentRowIndex: B,
            inGiftInventory: !0,
            isVideoQuest: H
        }),
        { startingConsoleQuest: et, startConsoleQuest: en } = (0, u.GI)({
            questId: N.id,
            beforeRequest: () => {
                y.startAnimation(),
                    (0, d._3)({
                        questId: N.id,
                        questContent: j,
                        questContentCTA: d.jZ.DEFIBRILLATOR,
                        questContentPosition: b,
                        questContentRowIndex: B
                    });
            },
            afterRequest: (e) => {
                y.stopAnimation(), A(e);
            }
        }),
        eo = (null === (v = N.userStatus) || void 0 === v ? void 0 : v.claimedAt) != null,
        es = null;
    return (q && U
        ? (es = (0, o.jsx)(i.Button, {
              color: i.ButtonColors.BRAND,
              submitting: w,
              onClick: null != ee ? ee : void 0,
              className: E.button,
              children: $
          }))
        : L
          ? (es = H
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(i.Button, {
                              color: i.ButtonColors.PRIMARY,
                              className: E.button,
                              style: { flex: 1 },
                              onClick: () => {
                                  (0, _.openVideoQuestModal)(N);
                              },
                              children: (0, o.jsxs)('div', {
                                  className: E.ctaInner,
                                  children: [
                                      (0, o.jsx)(i.RetryIcon, {
                                          color: i.tokens.colors.WHITE,
                                          className: E.videoQuestPlayIcon
                                      }),
                                      (0, o.jsx)('span', { children: h.Z.Messages.QUESTS_WATCH_AGAIN })
                                  ]
                              })
                          }),
                          (0, o.jsx)(i.Button, {
                              color: i.ButtonColors.BRAND,
                              className: E.button,
                              onClick: null != ee ? ee : void 0,
                              children: $
                          })
                      ]
                  })
                : (0, o.jsx)(i.Button, {
                      color: i.ButtonColors.BRAND,
                      className: E.button,
                      onClick: null != ee ? ee : void 0,
                      children: $
                  }))
          : Z
            ? Z && U
                ? (es = (0, o.jsx)(i.Button, {
                      color: i.ButtonColors.BRAND,
                      submitting: w,
                      onClick: null != ee ? ee : void 0,
                      className: E.button,
                      children: $
                  }))
                : Z && P && !eo
                  ? (es = Y
                        ? (0, o.jsx)(i.Select, {
                              className: E.platformSelectorPrimary,
                              isSelected: () => !1,
                              options: S,
                              placeholder: h.Z.Messages.QUEST_MULTIPLATFORM_SELECT_SUBTITLE,
                              renderOptionLabel: T,
                              select: J,
                              serialize: (e) => {
                                  switch (e) {
                                      case f.cd.DESKTOP:
                                          return h.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP;
                                      case f.cd.CONSOLE:
                                          return h.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE;
                                  }
                              }
                          })
                        : (0, x.$J)(N) && !M && z !== m.LI.DESKTOP
                          ? I
                              ? (0, o.jsx)(i.Button, {
                                    color: i.ButtonColors.PRIMARY,
                                    className: E.button,
                                    onClick: null != ee ? ee : void 0,
                                    children: $
                                })
                              : (0, o.jsx)(i.Button, {
                                    color: i.ButtonColors.PRIMARY,
                                    onClick: en,
                                    disabled: et,
                                    className: E.button,
                                    children: (0, o.jsxs)('div', {
                                        className: E.ctaInner,
                                        children: [y.render(), h.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA]
                                    })
                                })
                          : H
                            ? (0, o.jsx)(i.Button, {
                                  color: i.ButtonColors.BRAND,
                                  onClick: null != ee ? ee : void 0,
                                  className: E.button,
                                  children: $
                              })
                            : (0, o.jsx)(i.Button, {
                                  color: i.ButtonColors.PRIMARY,
                                  disabled: !0,
                                  className: E.button,
                                  children: h.Z.Messages.QUEST_ACCEPTED
                              }))
                  : Z &&
                    !P &&
                    (es = (0, o.jsx)(i.Button, {
                        submitting: k,
                        color: i.ButtonColors.BRAND,
                        onClick: null != ee ? ee : void 0,
                        className: E.button,
                        children: $
                    }))
            : (es = (0, o.jsx)(i.Button, {
                  color: i.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: E.button,
                  children: h.Z.Messages.QUESTS_ENDED_ON_DATE.format({ expiryDate: O })
              })),
    null == es)
        ? null
        : (0, o.jsxs)('div', {
              className: E.container,
              children: [
                  es,
                  X &&
                      (0, o.jsx)(g.U, {
                          onSelect: J,
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
                                          })(z),
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
