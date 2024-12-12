r.d(n, {
    ZP: function () {
        return x;
    },
    _1: function () {
        return O;
    },
    jd: function () {
        return D;
    }
});
var i = r(627341);
var a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(392711);
var d = r(278074),
    f = r(442837),
    _ = r(704215),
    h = r(481060),
    p = r(951394),
    m = r(605236),
    g = r(314897),
    E = r(785717),
    v = r(9161),
    I = r(490231),
    T = r(456644),
    b = r(837411),
    y = r(448197),
    S = r(510659),
    A = r(652853),
    N = r(228168),
    C = r(388032),
    R = r(518919);
let O = 2700,
    D = '> -# *',
    L = (e, n) =>
        (0, d.EQ)({
            interactionType: e,
            sourceType: n
        })
            .with(
                {
                    interactionType: N.P.REPLY,
                    sourceType: N.n_.AVATAR
                },
                () => C.intl.string(C.t.xvN0fX)
            )
            .with(
                {
                    interactionType: N.P.REACT,
                    sourceType: N.n_.AVATAR
                },
                () => C.intl.string(C.t['fEUP/v'])
            )
            .with(
                {
                    interactionType: N.P.REPLY,
                    sourceType: N.n_.STATUS
                },
                () => C.intl.string(C.t['C/vzS0'])
            )
            .with(
                {
                    interactionType: N.P.REACT,
                    sourceType: N.n_.STATUS
                },
                () => C.intl.string(C.t.TKdBCw)
            )
            .with(
                {
                    interactionType: N.P.REPLY,
                    sourceType: N.n_.ACTIVITY
                },
                () => C.intl.string(C.t.ObfsSk)
            )
            .with(
                {
                    interactionType: N.P.REACT,
                    sourceType: N.n_.ACTIVITY
                },
                () => C.intl.string(C.t.bSe71N)
            )
            .exhaustive();
function x(e) {
    let { user: n, sourceType: r, isVisible: i, isExpandable: a, interactionSourceId: l, renderMoreButtonPopout: d } = e,
        { trackUserProfileAction: O } = (0, E.KZ)(),
        { onInteraction: D } = (0, S.Xo)(),
        { pressReact: x, pressReply: w } = (0, y.Q)(r),
        P = (0, f.e7)([g.default], () => g.default.getId() === n.id),
        M = (0, b.Z)(n.id),
        { profileType: k } = (0, A.z)(),
        U = k !== N.y0.FULL_SIZE && r !== N.n_.AVATAR,
        { fadeInAndOutEnabled: B } = (0, I.o)({
            location: 'UserProfileInteractionToolbar',
            autoTrackExposure: U
        }),
        { recentActivityTabEnabled: G } = (0, v.O)({
            location: 'UserProfileInteractionToolbar',
            autoTrackExposure: !1
        }),
        { recentActivityEnabled: Z } = (0, T.i)({
            location: 'UserProfileInteractionToolbar',
            autoTrackExposure: !1
        }),
        F = (B || G || Z) && U && !i,
        [V, j] = o.useState(F),
        H = (e) => {
            e.animationName === (0, c.get)(R, 'fadeInAndOut') && j(!1);
        };
    return (o.useEffect(() => {
        V && !F && j(!1);
    }, [V, F]),
    n.bot || P || !M)
        ? null
        : (0, s.jsxs)(p.ZP, {
              className: u()(R.popover, {
                  [R.fadeInAndOut]: V,
                  [R.visible]: i,
                  [R.expandable]: a,
                  [R.statusPopover]: r === N.n_.STATUS,
                  [R.avatarPopover]: r === N.n_.AVATAR,
                  [R.activityPopover]: r === N.n_.ACTIVITY
              }),
              onAnimationEnd: V ? H : void 0,
              children: [
                  (0, s.jsx)(h.TooltipContainer, {
                      text: C.intl.string(C.t.nhaI4e),
                      shouldShow: i,
                      className: R.tooltipContainer,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, s.jsx)(p.zx, {
                          onClick: () => {
                              O({ action: x }),
                                  null == D ||
                                      D({
                                          interactionType: N.P.REACT,
                                          interactionSource: r,
                                          interactionSourceId: l
                                      }),
                                  k === N.y0.BITE_SIZE && (0, m.EW)(_.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
                          },
                          className: R.button,
                          'aria-label': L(N.P.REACT, r),
                          'aria-haspopup': 'dialog',
                          children: (0, s.jsx)(h.ReactionIcon, {
                              size: 'xs',
                              className: R.icon
                          })
                      })
                  }),
                  (0, s.jsx)(h.TooltipContainer, {
                      text: C.intl.string(C.t.RmDYKC),
                      shouldShow: i,
                      className: R.tooltipContainer,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, s.jsx)(p.zx, {
                          onClick: () => {
                              O({ action: w }),
                                  null == D ||
                                      D({
                                          interactionType: N.P.REPLY,
                                          interactionSource: r,
                                          interactionSourceId: l
                                      }),
                                  k === N.y0.BITE_SIZE && (0, m.EW)(_.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
                          },
                          className: R.button,
                          'aria-label': L(N.P.REPLY, r),
                          'aria-haspopup': 'dialog',
                          children: (0, s.jsx)(h.ArrowAngleLeftUpIcon, {
                              size: 'xs',
                              className: R.icon
                          })
                      })
                  }),
                  null == d
                      ? void 0
                      : d((e) =>
                            (0, s.jsx)(h.TooltipContainer, {
                                text: C.intl.string(C.t.UKOtz8),
                                shouldShow: i,
                                className: R.tooltipContainer,
                                delay: 0,
                                'aria-label': !1,
                                children: (0, s.jsx)(p.zx, {
                                    ...e,
                                    className: R.button,
                                    'aria-label': C.intl.string(C.t.UKOtz8),
                                    children: (0, s.jsx)(h.MoreHorizontalIcon, {
                                        size: 'xs',
                                        className: R.icon
                                    })
                                })
                            })
                        )
              ]
          });
}
