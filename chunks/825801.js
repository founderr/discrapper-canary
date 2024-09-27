n.d(t, {
    ZP: function () {
        return O;
    },
    _1: function () {
        return A;
    },
    jd: function () {
        return v;
    }
});
var r = n(627341);
var i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(442837),
    u = n(704215),
    c = n(481060),
    d = n(951394),
    _ = n(605236),
    E = n(314897),
    f = n(785717),
    h = n(837411),
    p = n(448197),
    m = n(510659),
    I = n(652853),
    T = n(228168),
    g = n(689938),
    S = n(374729);
let A = 2700,
    v = '> -# *',
    N = (e, t) =>
        (0, s.EQ)({
            interactionType: e,
            sourceType: t
        })
            .with(
                {
                    interactionType: T.P.REPLY,
                    sourceType: T.n_.AVATAR
                },
                () => g.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_A11Y_LABEL
            )
            .with(
                {
                    interactionType: T.P.REACT,
                    sourceType: T.n_.AVATAR
                },
                () => g.Z.Messages.USER_PROFILE_REACT_TO_AVATAR_A11Y_LABEL
            )
            .with(
                {
                    interactionType: T.P.REPLY,
                    sourceType: T.n_.STATUS
                },
                () => g.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_A11Y_LABEL
            )
            .with(
                {
                    interactionType: T.P.REACT,
                    sourceType: T.n_.STATUS
                },
                () => g.Z.Messages.USER_PROFILE_REACT_TO_STATUS_A11Y_LABEL
            )
            .with(
                {
                    interactionType: T.P.REPLY,
                    sourceType: T.n_.ACTIVITY
                },
                () => g.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_A11Y_LABEL
            )
            .with(
                {
                    interactionType: T.P.REACT,
                    sourceType: T.n_.ACTIVITY
                },
                () => g.Z.Messages.USER_PROFILE_REACT_TO_ACTIVITY_A11Y_LABEL
            )
            .exhaustive();
function O(e) {
    let { user: t, sourceType: n, isVisible: r, isExpandable: a } = e,
        { trackUserProfileAction: s } = (0, f.KZ)(),
        { pressReact: A, pressReply: v } = (0, p.Q)(n),
        O = (0, l.e7)([E.default], () => E.default.getId() === t.id),
        R = (0, h.Z)(t.id),
        { profileType: C } = (0, I.z)(),
        { onInteraction: y } = (0, m.Xo)();
    return t.bot || O || !R
        ? null
        : (0, i.jsxs)(d.ZP, {
              className: o()(S.popover, {
                  [S.visible]: r,
                  [S.expandable]: a,
                  [S.statusPopover]: n === T.n_.STATUS,
                  [S.avatarPopover]: n === T.n_.AVATAR
              }),
              children: [
                  (0, i.jsx)(c.TooltipContainer, {
                      text: g.Z.Messages.USER_PROFILE_SEND_REACTION,
                      shouldShow: r,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, i.jsx)(d.zx, {
                          onClick: () => {
                              s({ action: A }),
                                  null == y ||
                                      y({
                                          interactionType: T.P.REACT,
                                          interactionSource: n
                                      }),
                                  C === T.y0.BITE_SIZE && (0, _.EW)(u.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
                          },
                          className: o()(S.button, S.left),
                          'aria-label': N(T.P.REACT, n),
                          'aria-haspopup': 'dialog',
                          children: (0, i.jsx)(c.ReactionIcon, {
                              size: 'xs',
                              className: S.icon
                          })
                      })
                  }),
                  (0, i.jsx)(c.TooltipContainer, {
                      text: g.Z.Messages.USER_PROFILE_REPLY,
                      shouldShow: r,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, i.jsx)(d.zx, {
                          onClick: () => {
                              s({ action: v }),
                                  null == y ||
                                      y({
                                          interactionType: T.P.REPLY,
                                          interactionSource: n
                                      }),
                                  C === T.y0.BITE_SIZE && (0, _.EW)(u.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
                          },
                          className: o()(S.button, S.right),
                          'aria-label': N(T.P.REPLY, n),
                          'aria-haspopup': 'dialog',
                          children: (0, i.jsx)(c.ArrowAngleLeftUpIcon, {
                              size: 'xs',
                              className: S.icon
                          })
                      })
                  })
              ]
          });
}
