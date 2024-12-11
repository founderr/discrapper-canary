n.d(t, {
    ZP: function () {
        return O;
    },
    _1: function () {
        return N;
    },
    jd: function () {
        return C;
    }
}),
    n(627341),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n(278074),
    u = n(442837),
    c = n(704215),
    d = n(481060),
    f = n(951394),
    _ = n(605236),
    p = n(314897),
    h = n(785717),
    m = n(9161),
    g = n(490231),
    E = n(456644),
    v = n(837411),
    I = n(448197),
    T = n(510659),
    b = n(652853),
    S = n(228168),
    y = n(388032),
    A = n(518919);
let N = 2700,
    C = '> -# *',
    R = (e, t) =>
        (0, l.EQ)({
            interactionType: e,
            sourceType: t
        })
            .with(
                {
                    interactionType: S.P.REPLY,
                    sourceType: S.n_.AVATAR
                },
                () => y.intl.string(y.t.xvN0fX)
            )
            .with(
                {
                    interactionType: S.P.REACT,
                    sourceType: S.n_.AVATAR
                },
                () => y.intl.string(y.t['fEUP/v'])
            )
            .with(
                {
                    interactionType: S.P.REPLY,
                    sourceType: S.n_.STATUS
                },
                () => y.intl.string(y.t['C/vzS0'])
            )
            .with(
                {
                    interactionType: S.P.REACT,
                    sourceType: S.n_.STATUS
                },
                () => y.intl.string(y.t.TKdBCw)
            )
            .with(
                {
                    interactionType: S.P.REPLY,
                    sourceType: S.n_.ACTIVITY
                },
                () => y.intl.string(y.t.ObfsSk)
            )
            .with(
                {
                    interactionType: S.P.REACT,
                    sourceType: S.n_.ACTIVITY
                },
                () => y.intl.string(y.t.bSe71N)
            )
            .exhaustive();
function O(e) {
    let { user: t, sourceType: n, isVisible: a, isExpandable: l, interactionSourceId: N, renderMoreButtonPopout: C } = e,
        { trackUserProfileAction: O } = (0, h.KZ)(),
        { onInteraction: D } = (0, T.Xo)(),
        { pressReact: L, pressReply: x } = (0, I.Q)(n),
        w = (0, u.e7)([p.default], () => p.default.getId() === t.id),
        P = (0, v.Z)(t.id),
        { profileType: M } = (0, b.z)(),
        k = M !== S.y0.FULL_SIZE && n !== S.n_.AVATAR,
        { fadeInAndOutEnabled: U } = (0, g.o)({
            location: 'UserProfileInteractionToolbar',
            autoTrackExposure: k
        }),
        { recentActivityTabEnabled: B } = (0, m.O)({
            location: 'UserProfileInteractionToolbar',
            autoTrackExposure: !1
        }),
        { recentActivityEnabled: G } = (0, E.i)({
            location: 'UserProfileInteractionToolbar',
            autoTrackExposure: !1
        }),
        Z = (U || B || G) && k && !a,
        [F, V] = i.useState(Z);
    return (i.useEffect(() => {
        F && !Z && V(!1);
    }, [F, Z]),
    t.bot || w || !P)
        ? null
        : (0, r.jsxs)(f.ZP, {
              className: s()(A.popover, {
                  [A.fadeInAndOut]: F,
                  [A.visible]: a,
                  [A.expandable]: l,
                  [A.statusPopover]: n === S.n_.STATUS,
                  [A.avatarPopover]: n === S.n_.AVATAR,
                  [A.activityPopover]: n === S.n_.ACTIVITY
              }),
              onAnimationEnd: F
                  ? (e) => {
                        e.animationName === (0, o.get)(A, 'fadeInAndOut') && V(!1);
                    }
                  : void 0,
              children: [
                  (0, r.jsx)(d.TooltipContainer, {
                      text: y.intl.string(y.t.nhaI4e),
                      shouldShow: a,
                      className: A.tooltipContainer,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, r.jsx)(f.zx, {
                          onClick: () => {
                              O({ action: L }),
                                  null == D ||
                                      D({
                                          interactionType: S.P.REACT,
                                          interactionSource: n,
                                          interactionSourceId: N
                                      }),
                                  M === S.y0.BITE_SIZE && (0, _.EW)(c.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
                          },
                          className: A.button,
                          'aria-label': R(S.P.REACT, n),
                          'aria-haspopup': 'dialog',
                          children: (0, r.jsx)(d.ReactionIcon, {
                              size: 'xs',
                              className: A.icon
                          })
                      })
                  }),
                  (0, r.jsx)(d.TooltipContainer, {
                      text: y.intl.string(y.t.RmDYKC),
                      shouldShow: a,
                      className: A.tooltipContainer,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, r.jsx)(f.zx, {
                          onClick: () => {
                              O({ action: x }),
                                  null == D ||
                                      D({
                                          interactionType: S.P.REPLY,
                                          interactionSource: n,
                                          interactionSourceId: N
                                      }),
                                  M === S.y0.BITE_SIZE && (0, _.EW)(c.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
                          },
                          className: A.button,
                          'aria-label': R(S.P.REPLY, n),
                          'aria-haspopup': 'dialog',
                          children: (0, r.jsx)(d.ArrowAngleLeftUpIcon, {
                              size: 'xs',
                              className: A.icon
                          })
                      })
                  }),
                  null == C
                      ? void 0
                      : C((e) =>
                            (0, r.jsx)(d.TooltipContainer, {
                                text: y.intl.string(y.t.UKOtz8),
                                shouldShow: a,
                                className: A.tooltipContainer,
                                delay: 0,
                                'aria-label': !1,
                                children: (0, r.jsx)(f.zx, {
                                    ...e,
                                    className: A.button,
                                    'aria-label': y.intl.string(y.t.UKOtz8),
                                    children: (0, r.jsx)(d.MoreHorizontalIcon, {
                                        size: 'xs',
                                        className: A.icon
                                    })
                                })
                            })
                        )
              ]
          });
}
