n.d(t, {
    ZP: function () {
        return S;
    },
    _1: function () {
        return I;
    },
    jd: function () {
        return m;
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
    f = n(228168),
    h = n(689938),
    p = n(374729);
let I = 2700,
    m = '> -# *',
    T = (e, t) =>
        (0, s.EQ)({
            interactionType: e,
            sourceType: t
        })
            .with(
                {
                    interactionType: f.P.REPLY,
                    sourceType: f.n_.AVATAR
                },
                () => h.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_A11Y_LABEL
            )
            .with(
                {
                    interactionType: f.P.REACT,
                    sourceType: f.n_.AVATAR
                },
                () => h.Z.Messages.USER_PROFILE_REACT_TO_AVATAR_A11Y_LABEL
            )
            .with(
                {
                    interactionType: f.P.REPLY,
                    sourceType: f.n_.STATUS
                },
                () => h.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_A11Y_LABEL
            )
            .with(
                {
                    interactionType: f.P.REACT,
                    sourceType: f.n_.STATUS
                },
                () => h.Z.Messages.USER_PROFILE_REACT_TO_STATUS_A11Y_LABEL
            )
            .with(
                {
                    interactionType: f.P.REPLY,
                    sourceType: f.n_.ACTIVITY
                },
                () => h.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_A11Y_LABEL
            )
            .with(
                {
                    interactionType: f.P.REACT,
                    sourceType: f.n_.ACTIVITY
                },
                () => h.Z.Messages.USER_PROFILE_REACT_TO_ACTIVITY_A11Y_LABEL
            )
            .exhaustive();
function S(e) {
    let { user: t, sourceType: n, isVisible: i, isExpandable: s, onInteraction: I, reactButtonRef: m, replyButtonRef: S } = e,
        { trackUserProfileAction: g } = (0, d.KZ)(),
        { pressReact: A, pressReply: N } = (0, E.Q)(n),
        O = (0, o.e7)([c.default], () => c.default.getId() === t.id),
        R = (0, _.Z)(t.id);
    return t.bot || O || !R
        ? null
        : (0, r.jsxs)(u.ZP, {
              className: a()(p.popover, {
                  [p.visible]: i,
                  [p.expandable]: s,
                  [p.statusPopover]: n === f.n_.STATUS,
                  [p.avatarPopover]: n === f.n_.AVATAR
              }),
              children: [
                  (0, r.jsx)(l.TooltipContainer, {
                      text: h.Z.Messages.USER_PROFILE_SEND_REACTION,
                      shouldShow: i,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, r.jsx)(u.zx, {
                          innerRef: m,
                          onClick: () => {
                              g({ action: A }),
                                  null == I ||
                                      I({
                                          interactionType: f.P.REACT,
                                          interactionSourceType: n
                                      });
                          },
                          className: a()(p.button, p.left),
                          'aria-label': T(f.P.REACT, n),
                          children: (0, r.jsx)(l.ReactionIcon, {
                              size: 'xs',
                              className: p.icon
                          })
                      })
                  }),
                  (0, r.jsx)(l.TooltipContainer, {
                      text: h.Z.Messages.USER_PROFILE_REPLY,
                      shouldShow: i,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, r.jsx)(u.zx, {
                          innerRef: S,
                          onClick: () => {
                              g({ action: N }),
                                  null == I ||
                                      I({
                                          interactionType: f.P.REPLY,
                                          interactionSourceType: n
                                      });
                          },
                          className: a()(p.button, p.right),
                          'aria-label': T(f.P.REPLY, n),
                          children: (0, r.jsx)(l.ArrowAngleLeftUpIcon, {
                              size: 'xs',
                              className: p.icon
                          })
                      })
                  })
              ]
          });
}
