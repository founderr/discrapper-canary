n.d(t, {
    ZP: function () {
        return y;
    },
    _1: function () {
        return I;
    },
    jd: function () {
        return S;
    }
}),
    n(627341);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(278074),
    o = n(442837),
    l = n(704215),
    u = n(481060),
    c = n(951394),
    d = n(605236),
    f = n(314897),
    _ = n(785717),
    p = n(837411),
    h = n(448197),
    m = n(510659),
    g = n(652853),
    E = n(228168),
    v = n(388032),
    b = n(617114);
let I = 2700,
    S = '> -# *',
    T = (e, t) =>
        (0, s.EQ)({
            interactionType: e,
            sourceType: t
        })
            .with(
                {
                    interactionType: E.P.REPLY,
                    sourceType: E.n_.AVATAR
                },
                () => v.intl.string(v.t.xvN0fX)
            )
            .with(
                {
                    interactionType: E.P.REACT,
                    sourceType: E.n_.AVATAR
                },
                () => v.intl.string(v.t['fEUP/v'])
            )
            .with(
                {
                    interactionType: E.P.REPLY,
                    sourceType: E.n_.STATUS
                },
                () => v.intl.string(v.t['C/vzS0'])
            )
            .with(
                {
                    interactionType: E.P.REACT,
                    sourceType: E.n_.STATUS
                },
                () => v.intl.string(v.t.TKdBCw)
            )
            .with(
                {
                    interactionType: E.P.REPLY,
                    sourceType: E.n_.ACTIVITY
                },
                () => v.intl.string(v.t.ObfsSk)
            )
            .with(
                {
                    interactionType: E.P.REACT,
                    sourceType: E.n_.ACTIVITY
                },
                () => v.intl.string(v.t.bSe71N)
            )
            .exhaustive();
function y(e) {
    let { user: t, sourceType: n, isVisible: i, isExpandable: s, interactionSourceId: I, moreButton: S } = e,
        { trackUserProfileAction: y } = (0, _.KZ)(),
        { pressReact: A, pressReply: N } = (0, h.Q)(n),
        C = (0, o.e7)([f.default], () => f.default.getId() === t.id),
        R = (0, p.Z)(t.id),
        { profileType: O } = (0, g.z)(),
        { onInteraction: D } = (0, m.Xo)();
    return t.bot || C || !R
        ? null
        : (0, r.jsxs)(c.ZP, {
              className: a()(b.popover, {
                  [b.visible]: i,
                  [b.expandable]: s,
                  [b.statusPopover]: n === E.n_.STATUS,
                  [b.avatarPopover]: n === E.n_.AVATAR,
                  [b.activityPopover]: n === E.n_.ACTIVITY
              }),
              children: [
                  (0, r.jsx)(u.TooltipContainer, {
                      text: v.intl.string(v.t.nhaI4e),
                      shouldShow: i,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, r.jsx)(c.zx, {
                          onClick: () => {
                              y({ action: A }),
                                  null == D ||
                                      D({
                                          interactionType: E.P.REACT,
                                          interactionSource: n,
                                          interactionSourceId: I
                                      }),
                                  O === E.y0.BITE_SIZE && (0, d.EW)(l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
                          },
                          className: a()(b.button, b.left),
                          'aria-label': T(E.P.REACT, n),
                          'aria-haspopup': 'dialog',
                          children: (0, r.jsx)(u.ReactionIcon, {
                              size: 'xs',
                              className: b.icon
                          })
                      })
                  }),
                  (0, r.jsx)(u.TooltipContainer, {
                      text: v.intl.string(v.t.RmDYKC),
                      shouldShow: i,
                      delay: 0,
                      'aria-label': !1,
                      children: (0, r.jsx)(c.zx, {
                          onClick: () => {
                              y({ action: N }),
                                  null == D ||
                                      D({
                                          interactionType: E.P.REPLY,
                                          interactionSource: n,
                                          interactionSourceId: I
                                      }),
                                  O === E.y0.BITE_SIZE && (0, d.EW)(l.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK);
                          },
                          className: b.button,
                          'aria-label': T(E.P.REPLY, n),
                          'aria-haspopup': 'dialog',
                          children: (0, r.jsx)(u.ArrowAngleLeftUpIcon, {
                              size: 'xs',
                              className: b.icon
                          })
                      })
                  }),
                  null != S &&
                      (0, r.jsx)(u.TooltipContainer, {
                          text: v.intl.string(v.t.UKOtz8),
                          shouldShow: i,
                          delay: 0,
                          'aria-label': !1,
                          children: S
                      })
              ]
          });
}
