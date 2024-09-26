n.d(t, {
    ZP: function () {
        return R;
    },
    _1: function () {
        return v;
    },
    jd: function () {
        return N;
    }
});
var r = n(627341);
var i = n(47120);
var a = n(735250);
n(470079);
var o = n(120356),
    s = n.n(o),
    l = n(278074),
    u = n(442837),
    c = n(704215),
    d = n(481060),
    _ = n(951394),
    E = n(243778),
    f = n(314897),
    h = n(785717),
    p = n(837411),
    m = n(448197),
    I = n(510659),
    T = n(228168),
    g = n(921944),
    S = n(689938),
    A = n(374729);
let v = 2700,
    N = '> -# *',
    O = (e, t) =>
        (0, l.EQ)({
            interactionType: e,
            sourceType: t
        })
            .with(
                {
                    interactionType: T.P.REPLY,
                    sourceType: T.n_.AVATAR
                },
                () => S.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_A11Y_LABEL
            )
            .with(
                {
                    interactionType: T.P.REACT,
                    sourceType: T.n_.AVATAR
                },
                () => S.Z.Messages.USER_PROFILE_REACT_TO_AVATAR_A11Y_LABEL
            )
            .with(
                {
                    interactionType: T.P.REPLY,
                    sourceType: T.n_.STATUS
                },
                () => S.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_A11Y_LABEL
            )
            .with(
                {
                    interactionType: T.P.REACT,
                    sourceType: T.n_.STATUS
                },
                () => S.Z.Messages.USER_PROFILE_REACT_TO_STATUS_A11Y_LABEL
            )
            .with(
                {
                    interactionType: T.P.REPLY,
                    sourceType: T.n_.ACTIVITY
                },
                () => S.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_A11Y_LABEL
            )
            .with(
                {
                    interactionType: T.P.REACT,
                    sourceType: T.n_.ACTIVITY
                },
                () => S.Z.Messages.USER_PROFILE_REACT_TO_ACTIVITY_A11Y_LABEL
            )
            .exhaustive();
function R(e) {
    let { user: t, sourceType: n, isVisible: r, isExpandable: i } = e,
        { trackUserProfileAction: o } = (0, h.KZ)(),
        { pressReact: l, pressReply: v } = (0, m.Q)(n),
        N = (0, u.e7)([f.default], () => f.default.getId() === t.id),
        R = (0, p.Z)(t.id),
        { onInteraction: C } = (0, I.Xo)(),
        [y, L] = (0, E.US)([c.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK]);
    return t.bot || N || !R
        ? null
        : (0, a.jsxs)(_.ZP, {
              className: s()(A.popover, {
                  [A.visible]: r,
                  [A.expandable]: i,
                  [A.statusPopover]: n === T.n_.STATUS,
                  [A.avatarPopover]: n === T.n_.AVATAR
              }),
              children: [
                  (0, a.jsx)(d.TooltipContainer, {
                      text: S.Z.Messages.USER_PROFILE_SEND_REACTION,
                      shouldShow: r,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, a.jsx)(_.zx, {
                          onClick: () => {
                              o({ action: l }),
                                  null == C ||
                                      C({
                                          interactionType: T.P.REACT,
                                          interactionSource: n
                                      }),
                                  L(g.L.UNKNOWN);
                          },
                          className: s()(A.button, A.left),
                          'aria-label': O(T.P.REACT, n),
                          'aria-haspopup': 'dialog',
                          children: (0, a.jsx)(d.ReactionIcon, {
                              size: 'xs',
                              className: A.icon
                          })
                      })
                  }),
                  (0, a.jsx)(d.TooltipContainer, {
                      text: S.Z.Messages.USER_PROFILE_REPLY,
                      shouldShow: r,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, a.jsx)(_.zx, {
                          onClick: () => {
                              o({ action: v }),
                                  null == C ||
                                      C({
                                          interactionType: T.P.REPLY,
                                          interactionSource: n
                                      }),
                                  L(g.L.UNKNOWN);
                          },
                          className: s()(A.button, A.right),
                          'aria-label': O(T.P.REPLY, n),
                          'aria-haspopup': 'dialog',
                          children: (0, a.jsx)(d.ArrowAngleLeftUpIcon, {
                              size: 'xs',
                              className: A.icon
                          })
                      })
                  })
              ]
          });
}
