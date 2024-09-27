n.d(t, {
    ZP: function () {
        return N;
    },
    _1: function () {
        return S;
    },
    jd: function () {
        return A;
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
    I = n(228168),
    T = n(689938),
    g = n(374729);
let S = 2700,
    A = '> -# *',
    v = (e, t) =>
        (0, s.EQ)({
            interactionType: e,
            sourceType: t
        })
            .with(
                {
                    interactionType: I.P.REPLY,
                    sourceType: I.n_.AVATAR
                },
                () => T.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_A11Y_LABEL
            )
            .with(
                {
                    interactionType: I.P.REACT,
                    sourceType: I.n_.AVATAR
                },
                () => T.Z.Messages.USER_PROFILE_REACT_TO_AVATAR_A11Y_LABEL
            )
            .with(
                {
                    interactionType: I.P.REPLY,
                    sourceType: I.n_.STATUS
                },
                () => T.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_A11Y_LABEL
            )
            .with(
                {
                    interactionType: I.P.REACT,
                    sourceType: I.n_.STATUS
                },
                () => T.Z.Messages.USER_PROFILE_REACT_TO_STATUS_A11Y_LABEL
            )
            .with(
                {
                    interactionType: I.P.REPLY,
                    sourceType: I.n_.ACTIVITY
                },
                () => T.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_A11Y_LABEL
            )
            .with(
                {
                    interactionType: I.P.REACT,
                    sourceType: I.n_.ACTIVITY
                },
                () => T.Z.Messages.USER_PROFILE_REACT_TO_ACTIVITY_A11Y_LABEL
            )
            .exhaustive();
function N(e) {
    let { user: t, sourceType: n, isVisible: r, isExpandable: a } = e,
        { trackUserProfileAction: s } = (0, f.KZ)(),
        { pressReact: S, pressReply: A } = (0, p.Q)(n),
        N = (0, l.e7)([E.default], () => E.default.getId() === t.id),
        O = (0, h.Z)(t.id),
        { onInteraction: R } = (0, m.Xo)();
    return t.bot || N || !O
        ? null
        : (0, i.jsxs)(d.ZP, {
              className: o()(g.popover, {
                  [g.visible]: r,
                  [g.expandable]: a,
                  [g.statusPopover]: n === I.n_.STATUS,
                  [g.avatarPopover]: n === I.n_.AVATAR
              }),
              children: [
                  (0, i.jsx)(c.TooltipContainer, {
                      text: T.Z.Messages.USER_PROFILE_SEND_REACTION,
                      shouldShow: r,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, i.jsx)(d.zx, {
                          onClick: () => {
                              s({ action: S }),
                                  null == R ||
                                      R({
                                          interactionType: I.P.REACT,
                                          interactionSource: n
                                      }),
                                  (0, _.EW)(u.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
                          },
                          className: o()(g.button, g.left),
                          'aria-label': v(I.P.REACT, n),
                          'aria-haspopup': 'dialog',
                          children: (0, i.jsx)(c.ReactionIcon, {
                              size: 'xs',
                              className: g.icon
                          })
                      })
                  }),
                  (0, i.jsx)(c.TooltipContainer, {
                      text: T.Z.Messages.USER_PROFILE_REPLY,
                      shouldShow: r,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, i.jsx)(d.zx, {
                          onClick: () => {
                              s({ action: A }),
                                  null == R ||
                                      R({
                                          interactionType: I.P.REPLY,
                                          interactionSource: n
                                      }),
                                  (0, _.EW)(u.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
                          },
                          className: o()(g.button, g.right),
                          'aria-label': v(I.P.REPLY, n),
                          'aria-haspopup': 'dialog',
                          children: (0, i.jsx)(c.ArrowAngleLeftUpIcon, {
                              size: 'xs',
                              className: g.icon
                          })
                      })
                  })
              ]
          });
}
