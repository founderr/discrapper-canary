n.d(t, {
    ZP: function () {
        return A;
    },
    _1: function () {
        return T;
    },
    jd: function () {
        return g;
    }
});
var r = n(627341);
var i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(442837),
    u = n(481060),
    c = n(951394),
    d = n(314897),
    _ = n(785717),
    E = n(837411),
    f = n(448197),
    h = n(510659),
    p = n(228168),
    m = n(689938),
    I = n(374729);
let T = 2700,
    g = '> -# *',
    S = (e, t) =>
        (0, s.EQ)({
            interactionType: e,
            sourceType: t
        })
            .with(
                {
                    interactionType: p.P.REPLY,
                    sourceType: p.n_.AVATAR
                },
                () => m.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_A11Y_LABEL
            )
            .with(
                {
                    interactionType: p.P.REACT,
                    sourceType: p.n_.AVATAR
                },
                () => m.Z.Messages.USER_PROFILE_REACT_TO_AVATAR_A11Y_LABEL
            )
            .with(
                {
                    interactionType: p.P.REPLY,
                    sourceType: p.n_.STATUS
                },
                () => m.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_A11Y_LABEL
            )
            .with(
                {
                    interactionType: p.P.REACT,
                    sourceType: p.n_.STATUS
                },
                () => m.Z.Messages.USER_PROFILE_REACT_TO_STATUS_A11Y_LABEL
            )
            .with(
                {
                    interactionType: p.P.REPLY,
                    sourceType: p.n_.ACTIVITY
                },
                () => m.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_A11Y_LABEL
            )
            .with(
                {
                    interactionType: p.P.REACT,
                    sourceType: p.n_.ACTIVITY
                },
                () => m.Z.Messages.USER_PROFILE_REACT_TO_ACTIVITY_A11Y_LABEL
            )
            .exhaustive();
function A(e) {
    let { user: t, sourceType: n, isVisible: r, isExpandable: a } = e,
        { trackUserProfileAction: s } = (0, _.KZ)(),
        { pressReact: T, pressReply: g } = (0, f.Q)(n),
        A = (0, l.e7)([d.default], () => d.default.getId() === t.id),
        v = (0, E.Z)(t.id),
        { onInteraction: N } = (0, h.Xo)();
    return t.bot || A || !v
        ? null
        : (0, i.jsxs)(c.ZP, {
              className: o()(I.popover, {
                  [I.visible]: r,
                  [I.expandable]: a,
                  [I.statusPopover]: n === p.n_.STATUS,
                  [I.avatarPopover]: n === p.n_.AVATAR
              }),
              children: [
                  (0, i.jsx)(u.TooltipContainer, {
                      text: m.Z.Messages.USER_PROFILE_SEND_REACTION,
                      shouldShow: r,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, i.jsx)(c.zx, {
                          onClick: () => {
                              s({ action: T }),
                                  null == N ||
                                      N({
                                          interactionType: p.P.REACT,
                                          interactionSource: n
                                      });
                          },
                          className: o()(I.button, I.left),
                          'aria-label': S(p.P.REACT, n),
                          'aria-haspopup': 'dialog',
                          children: (0, i.jsx)(u.ReactionIcon, {
                              size: 'xs',
                              className: I.icon
                          })
                      })
                  }),
                  (0, i.jsx)(u.TooltipContainer, {
                      text: m.Z.Messages.USER_PROFILE_REPLY,
                      shouldShow: r,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, i.jsx)(c.zx, {
                          onClick: () => {
                              s({ action: g }),
                                  null == N ||
                                      N({
                                          interactionType: p.P.REPLY,
                                          interactionSource: n
                                      });
                          },
                          className: o()(I.button, I.right),
                          'aria-label': S(p.P.REPLY, n),
                          'aria-haspopup': 'dialog',
                          children: (0, i.jsx)(u.ArrowAngleLeftUpIcon, {
                              size: 'xs',
                              className: I.icon
                          })
                      })
                  })
              ]
          });
}
