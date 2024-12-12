r.d(n, {
    ZP: function () {
        return D;
    },
    _1: function () {
        return C;
    },
    jd: function () {
        return R;
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
    E = r(9161),
    v = r(490231),
    I = r(456644),
    T = r(837411),
    b = r(510659),
    y = r(652853),
    S = r(228168),
    A = r(388032),
    N = r(518919);
let C = 2700,
    R = '> -# *',
    O = (e, n) =>
        (0, d.EQ)({
            interactionType: e,
            sourceType: n
        })
            .with(
                {
                    interactionType: S.P.REPLY,
                    sourceType: S.n_.AVATAR
                },
                () => A.intl.string(A.t.xvN0fX)
            )
            .with(
                {
                    interactionType: S.P.REACT,
                    sourceType: S.n_.AVATAR
                },
                () => A.intl.string(A.t['fEUP/v'])
            )
            .with(
                {
                    interactionType: S.P.REPLY,
                    sourceType: S.n_.STATUS
                },
                () => A.intl.string(A.t['C/vzS0'])
            )
            .with(
                {
                    interactionType: S.P.REACT,
                    sourceType: S.n_.STATUS
                },
                () => A.intl.string(A.t.TKdBCw)
            )
            .with(
                {
                    interactionType: S.P.REPLY,
                    sourceType: S.n_.ACTIVITY
                },
                () => A.intl.string(A.t.ObfsSk)
            )
            .with(
                {
                    interactionType: S.P.REACT,
                    sourceType: S.n_.ACTIVITY
                },
                () => A.intl.string(A.t.bSe71N)
            )
            .exhaustive();
function D(e) {
    let { user: n, sourceType: r, isVisible: i, isExpandable: a, interactionSourceId: l, onAction: d, renderMoreButtonPopout: C } = e,
        R = (0, f.e7)([g.default], () => g.default.getId() === n.id),
        D = (0, T.Z)(n.id),
        { profileType: L } = (0, y.z)(),
        { onInteraction: x } = (0, b.Xo)(),
        w = L !== S.y0.FULL_SIZE && r !== S.n_.AVATAR,
        { fadeInAndOutEnabled: P } = (0, v.o)({
            location: 'UserProfileInteractionToolbar',
            autoTrackExposure: w
        }),
        { recentActivityTabEnabled: M } = (0, E.O)({
            location: 'UserProfileInteractionToolbar',
            autoTrackExposure: !1
        }),
        { recentActivityEnabled: k } = (0, I.i)({
            location: 'UserProfileInteractionToolbar',
            autoTrackExposure: !1
        }),
        U = (P || M || k) && w && !i,
        [B, G] = o.useState(U);
    if (
        (o.useEffect(() => {
            B && !U && G(!1);
        }, [B, U]),
        n.bot || R || !D)
    )
        return null;
    let Z = () => {
            r === S.n_.AVATAR ? d({ action: 'PRESS_REACT_AVATAR' }) : r === S.n_.STATUS ? d({ action: 'PRESS_REACT_CUSTOM_STATUS' }) : d({ action: 'PRESS_REACT_ACTIVITY' }),
                null == x ||
                    x({
                        interactionType: S.P.REACT,
                        interactionSource: r,
                        interactionSourceId: l
                    }),
                L === S.y0.BITE_SIZE && (0, m.EW)(_.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        F = () => {
            r === S.n_.AVATAR ? d({ action: 'PRESS_REPLY_AVATAR' }) : r === S.n_.STATUS ? d({ action: 'PRESS_REPLY_CUSTOM_STATUS' }) : d({ action: 'PRESS_REPLY_ACTIVITY' }),
                null == x ||
                    x({
                        interactionType: S.P.REPLY,
                        interactionSource: r,
                        interactionSourceId: l
                    }),
                L === S.y0.BITE_SIZE && (0, m.EW)(_.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
        },
        V = (e) => {
            e.animationName === (0, c.get)(N, 'fadeInAndOut') && G(!1);
        };
    return (0, s.jsxs)(p.ZP, {
        className: u()(N.popover, {
            [N.fadeInAndOut]: B,
            [N.visible]: i,
            [N.expandable]: a,
            [N.statusPopover]: r === S.n_.STATUS,
            [N.avatarPopover]: r === S.n_.AVATAR,
            [N.activityPopover]: r === S.n_.ACTIVITY
        }),
        onAnimationEnd: B ? V : void 0,
        children: [
            (0, s.jsx)(h.TooltipContainer, {
                text: A.intl.string(A.t.nhaI4e),
                shouldShow: i,
                className: N.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, s.jsx)(p.zx, {
                    onClick: Z,
                    className: N.button,
                    'aria-label': O(S.P.REACT, r),
                    'aria-haspopup': 'dialog',
                    children: (0, s.jsx)(h.ReactionIcon, {
                        size: 'xs',
                        className: N.icon
                    })
                })
            }),
            (0, s.jsx)(h.TooltipContainer, {
                text: A.intl.string(A.t.RmDYKC),
                shouldShow: i,
                className: N.tooltipContainer,
                delay: 0,
                'aria-label': !1,
                children: (0, s.jsx)(p.zx, {
                    onClick: F,
                    className: N.button,
                    'aria-label': O(S.P.REPLY, r),
                    'aria-haspopup': 'dialog',
                    children: (0, s.jsx)(h.ArrowAngleLeftUpIcon, {
                        size: 'xs',
                        className: N.icon
                    })
                })
            }),
            null == C
                ? void 0
                : C((e) =>
                      (0, s.jsx)(h.TooltipContainer, {
                          text: A.intl.string(A.t.UKOtz8),
                          shouldShow: i,
                          className: N.tooltipContainer,
                          delay: 0,
                          'aria-label': !1,
                          children: (0, s.jsx)(p.zx, {
                              ...e,
                              className: N.button,
                              'aria-label': A.intl.string(A.t.UKOtz8),
                              children: (0, s.jsx)(h.MoreHorizontalIcon, {
                                  size: 'xs',
                                  className: N.icon
                              })
                          })
                      })
                  )
        ]
    });
}
