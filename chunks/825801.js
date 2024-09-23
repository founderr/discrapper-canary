n.d(t, {
    ZP: function () {
        return g;
    },
    _1: function () {
        return m;
    },
    jd: function () {
        return T;
    }
}),
    n(627341);
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(278074),
    o = n(442837),
    l = n(481060),
    u = n(951394),
    c = n(314897),
    d = n(785717),
    _ = n(837411),
    E = n(448197),
    f = n(510659),
    h = n(228168),
    p = n(689938),
    I = n(374729);
let m = 2700,
    T = '> -# *',
    S = (e, t) =>
        (0, s.EQ)({
            interactionType: e,
            sourceType: t
        })
            .with(
                {
                    interactionType: h.P.REPLY,
                    sourceType: h.n_.AVATAR
                },
                () => p.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_A11Y_LABEL
            )
            .with(
                {
                    interactionType: h.P.REACT,
                    sourceType: h.n_.AVATAR
                },
                () => p.Z.Messages.USER_PROFILE_REACT_TO_AVATAR_A11Y_LABEL
            )
            .with(
                {
                    interactionType: h.P.REPLY,
                    sourceType: h.n_.STATUS
                },
                () => p.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_A11Y_LABEL
            )
            .with(
                {
                    interactionType: h.P.REACT,
                    sourceType: h.n_.STATUS
                },
                () => p.Z.Messages.USER_PROFILE_REACT_TO_STATUS_A11Y_LABEL
            )
            .with(
                {
                    interactionType: h.P.REPLY,
                    sourceType: h.n_.ACTIVITY
                },
                () => p.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_A11Y_LABEL
            )
            .with(
                {
                    interactionType: h.P.REACT,
                    sourceType: h.n_.ACTIVITY
                },
                () => p.Z.Messages.USER_PROFILE_REACT_TO_ACTIVITY_A11Y_LABEL
            )
            .exhaustive();
function g(e) {
    let { user: t, sourceType: n, isVisible: i, isExpandable: s } = e,
        { trackUserProfileAction: m } = (0, d.KZ)(),
        { pressReact: T, pressReply: g } = (0, E.Q)(n),
        A = (0, o.e7)([c.default], () => c.default.getId() === t.id),
        N = (0, _.Z)(t.id),
        { onInteraction: O } = (0, f.Xo)();
    return t.bot || A || !N
        ? null
        : (0, r.jsxs)(u.ZP, {
              className: a()(I.popover, {
                  [I.visible]: i,
                  [I.expandable]: s,
                  [I.statusPopover]: n === h.n_.STATUS,
                  [I.avatarPopover]: n === h.n_.AVATAR
              }),
              children: [
                  (0, r.jsx)(l.TooltipContainer, {
                      text: p.Z.Messages.USER_PROFILE_SEND_REACTION,
                      shouldShow: i,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, r.jsx)(u.zx, {
                          onClick: () => {
                              m({ action: T }),
                                  null == O ||
                                      O({
                                          interactionType: h.P.REACT,
                                          interactionSource: n
                                      });
                          },
                          className: a()(I.button, I.left),
                          'aria-label': S(h.P.REACT, n),
                          'aria-haspopup': 'dialog',
                          children: (0, r.jsx)(l.ReactionIcon, {
                              size: 'xs',
                              className: I.icon
                          })
                      })
                  }),
                  (0, r.jsx)(l.TooltipContainer, {
                      text: p.Z.Messages.USER_PROFILE_REPLY,
                      shouldShow: i,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, r.jsx)(u.zx, {
                          onClick: () => {
                              m({ action: g }),
                                  null == O ||
                                      O({
                                          interactionType: h.P.REPLY,
                                          interactionSource: n
                                      });
                          },
                          className: a()(I.button, I.right),
                          'aria-label': S(h.P.REPLY, n),
                          'aria-haspopup': 'dialog',
                          children: (0, r.jsx)(l.ArrowAngleLeftUpIcon, {
                              size: 'xs',
                              className: I.icon
                          })
                      })
                  })
              ]
          });
}
