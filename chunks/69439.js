n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    i = n(481060),
    c = n(607070),
    d = n(617136),
    u = n(113434),
    p = n(569984),
    m = n(497505),
    x = n(918701),
    f = n(667105),
    g = n(341907),
    h = n(284851),
    C = n(46140),
    v = n(388032),
    j = n(632946);
let _ = [
    {
        value: C.cd.DESKTOP,
        get label() {
            return v.intl.string(v.t.QXc019);
        }
    },
    {
        value: C.cd.CONSOLE,
        get label() {
            return v.intl.string(v.t['8lAfuL']);
        }
    }
];
function b(e) {
    let t,
        n,
        { value: r } = e;
    switch (r) {
        case C.cd.DESKTOP:
            (n = (0, o.jsx)(i.ScreenIcon, {})), (t = v.intl.string(v.t.QXc019));
            break;
        case C.cd.CONSOLE:
            (n = (0, o.jsx)(i.GameControllerIcon, {})), (t = v.intl.string(v.t['8lAfuL']));
            break;
        default:
            return null;
    }
    return (0, o.jsxs)('div', {
        className: j.platformSelectorPrimaryLabel,
        children: [n, t]
    });
}
function E(e) {
    var t, n, s, E;
    let { quest: N, location: T, onReceiveErrorHints: B, contentPosition: S, rowIndex: A } = e,
        y = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        R = (0, f.g2)({ useReducedMotion: y }),
        w = (0, u._s)({ quest: N }),
        I = (0, u.z)(N),
        k = (0, u.B6)(N.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        { isClaiming: q, isEnrolling: P } = (0, l.cj)([p.Z], () => ({
            isClaiming: p.Z.isClaimingReward(N.id) || p.Z.isFetchingRewardCode(N.id),
            isEnrolling: p.Z.isEnrolling(N.id)
        })),
        M = (null === (t = N.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        O = (null === (n = N.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        W = O && (null === (s = N.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null,
        L = (0, x.iQ)(N),
        Q = !(0, x.zi)(N),
        Z = (0, u._Q)(N),
        D = (0, x.Xv)(N.config),
        V = (0, x.q8)(N),
        H = (0, u.GU)(N),
        U = (0, u.Rf)(N),
        [z, F, G] = (0, u.me)(N, U),
        Y = Q && Z === u.OH.ACCEPTED,
        K = Y && z === m.LI.SELECT,
        X = Y && !K && F.length > 1,
        J = r.useCallback(
            (e) => {
                G(e), e === C.cd.DESKTOP && B([]);
            },
            [G, B]
        ),
        {
            text: $,
            onClick: ee,
            tooltipText: et
        } = (0, f.Ks)({
            progressState: Z,
            quest: N,
            location: T,
            isCollectibleQuest: D,
            questContentPosition: S,
            questContentRowIndex: A,
            inGiftInventory: !0,
            isVideoQuest: V
        }),
        { startingConsoleQuest: en, startConsoleQuest: eo } = (0, u.GI)({
            questId: N.id,
            beforeRequest: () => {
                R.startAnimation(),
                    (0, d._3)({
                        questId: N.id,
                        questContent: T,
                        questContentCTA: d.jZ.DEFIBRILLATOR,
                        questContentPosition: S,
                        questContentRowIndex: A
                    });
            },
            afterRequest: (e) => {
                R.stopAnimation(), B(e);
            }
        }),
        er = (null === (E = N.userStatus) || void 0 === E ? void 0 : E.claimedAt) != null,
        es = null;
    return (L && W
        ? (es = (0, o.jsx)(i.Button, {
              color: i.ButtonColors.BRAND,
              submitting: q,
              onClick: null != ee ? ee : void 0,
              className: j.button,
              children: $
          }))
        : O
          ? (es = V
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(i.Button, {
                              color: i.ButtonColors.PRIMARY,
                              className: j.button,
                              style: { flex: 1 },
                              onClick: () => {
                                  (0, g.openVideoQuestModal)(N);
                              },
                              children: (0, o.jsxs)('div', {
                                  className: j.ctaInner,
                                  children: [
                                      (0, o.jsx)(i.RetryIcon, {
                                          color: i.tokens.colors.WHITE,
                                          className: j.videoQuestPlayIcon
                                      }),
                                      (0, o.jsx)('span', { children: v.intl.string(v.t.YsCuyM) })
                                  ]
                              })
                          }),
                          (0, o.jsx)(i.Button, {
                              color: i.ButtonColors.BRAND,
                              className: j.button,
                              onClick: null != ee ? ee : void 0,
                              children: $
                          })
                      ]
                  })
                : (0, o.jsx)(i.Button, {
                      color: i.ButtonColors.BRAND,
                      className: j.button,
                      onClick: null != ee ? ee : void 0,
                      children: $
                  }))
          : Q
            ? H.length > 0
                ? (es = (0, o.jsx)(
                      i.TooltipContainer,
                      {
                          text: et,
                          className: j.buttonTooltip,
                          children: (0, o.jsx)(i.Button, {
                              color: i.ButtonColors.PRIMARY,
                              disabled: !0,
                              className: j.button,
                              children: $
                          })
                      },
                      et
                  ))
                : Q && W
                  ? (es = (0, o.jsx)(i.Button, {
                        color: i.ButtonColors.BRAND,
                        submitting: q,
                        onClick: null != ee ? ee : void 0,
                        className: j.button,
                        children: $
                    }))
                  : Q && M && !er
                    ? (es = K
                          ? (0, o.jsx)(i.Select, {
                                className: j.platformSelectorPrimary,
                                isSelected: () => !1,
                                options: _,
                                placeholder: v.intl.string(v.t.drVw4e),
                                renderOptionLabel: b,
                                select: J,
                                serialize: (e) => {
                                    switch (e) {
                                        case C.cd.DESKTOP:
                                            return v.intl.string(v.t.QXc019);
                                        case C.cd.CONSOLE:
                                            return v.intl.string(v.t['8lAfuL']);
                                    }
                                }
                            })
                          : (0, x.$J)(N) && !I && z !== m.LI.DESKTOP
                            ? w
                                ? (0, o.jsx)(i.Button, {
                                      color: i.ButtonColors.PRIMARY,
                                      className: j.button,
                                      onClick: null != ee ? ee : void 0,
                                      children: $
                                  })
                                : (0, o.jsx)(i.Button, {
                                      color: i.ButtonColors.PRIMARY,
                                      onClick: eo,
                                      disabled: en,
                                      className: j.button,
                                      children: (0, o.jsxs)('div', {
                                          className: j.ctaInner,
                                          children: [R.render(), v.intl.string(v.t.nPThNT)]
                                      })
                                  })
                            : V
                              ? (0, o.jsx)(i.Button, {
                                    color: i.ButtonColors.BRAND,
                                    onClick: null != ee ? ee : void 0,
                                    className: j.button,
                                    children: $
                                })
                              : (0, o.jsx)(i.Button, {
                                    color: i.ButtonColors.PRIMARY,
                                    disabled: !0,
                                    className: j.button,
                                    children: v.intl.string(v.t['9KoPyM'])
                                }))
                    : Q &&
                      !M &&
                      (es = (0, o.jsx)(i.Button, {
                          submitting: P,
                          color: i.ButtonColors.BRAND,
                          onClick: null != ee ? ee : void 0,
                          className: j.button,
                          children: $
                      }))
            : (es = (0, o.jsx)(i.Button, {
                  color: i.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: j.button,
                  children: v.intl.format(v.t['14o6QU'], { expiryDate: k })
              })),
    null == es)
        ? null
        : (0, o.jsxs)('div', {
              className: j.container,
              children: [
                  es,
                  X &&
                      (0, o.jsx)(h.U, {
                          onSelect: J,
                          quest: N,
                          questContent: m.jn.ACTIVITY_PANEL,
                          children: (e) =>
                              (0, o.jsx)(i.Button, {
                                  className: a()(j.button, j.platformSelectorSecondary),
                                  color: i.ButtonColors.PRIMARY,
                                  ...e,
                                  children: (0, o.jsxs)('div', {
                                      className: j.platformSelectorSecondaryContent,
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
                                              className: j.platformSelectorSecondaryChevron,
                                              color: 'currentColor'
                                          })
                                      ]
                                  })
                              })
                      })
              ]
          });
}
