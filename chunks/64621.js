n.d(t, {
    Z: function () {
        return R;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(704215),
    l = n(481060),
    u = n(980591),
    c = n(243778),
    d = n(970731),
    _ = n(594174),
    E = n(718107),
    f = n(652853),
    h = n(228168),
    p = n(689938),
    m = n(671511),
    I = n(895982),
    T = n(685741),
    g = n(20818);
let S = 200,
    A = 30,
    v = 16;
function N(e, t, n) {
    return e && t
        ? {
              asset: T,
              assetClassName: m.profileImage,
              caretPosition: 'right' === n ? d.DF.LEFT_CENTER : d.DF.RIGHT_CENTER,
              className: m.profileCoachmark,
              content: p.Z.Messages.USER_PROFILE_PROFILES_REACT_COACHMARK_BODY,
              header: p.Z.Messages.USER_PROFILE_PROFILES_REACT_COACHMARK_TITLE
          }
        : e
          ? {
                asset: g,
                assetClassName: void 0,
                caretPosition: 'right' === n ? d.DF.LEFT_CENTER : d.DF.RIGHT_CENTER,
                className: m.statusCoachmark,
                content: p.Z.Messages.USER_PROFILE_STATUS_REACT_COACHMARK_BODY,
                header: p.Z.Messages.USER_PROFILE_STATUS_REACT_COACHMARK_TITLE
            }
          : {
                asset: I,
                assetClassName: m.avatarImage,
                caretPosition: 'right' === n ? d.DF.LEFT_CENTER : d.DF.RIGHT_CENTER,
                className: m.avatarCoachmark,
                content: p.Z.Messages.USER_PROFILE_AVATAR_REACT_COACHMARK_BODY,
                header: p.Z.Messages.USER_PROFILE_AVATAR_REACT_COACHMARK_TITLE
            };
}
function O(e) {
    let { closePopout: t, markAsDismissed: n, setPopoutRef: r, asset: a, assetClassName: o, caretPosition: s, className: u, content: c, header: _ } = e;
    return (0, i.jsx)(l.Dialog, {
        ref: r,
        children: (0, i.jsx)(d.ZP, {
            asset: (0, i.jsx)('img', {
                alt: '',
                src: a,
                className: o
            }),
            buttonCTA: p.Z.Messages.TUTORIAL_CLOSE,
            buttonLayout: d._F.STACKED,
            buttonProps: {
                color: l.ButtonColors.BRAND_INVERTED,
                size: l.Button.Sizes.SMALL
            },
            caretPosition: s,
            className: u,
            content: (0, i.jsx)(l.Text, {
                variant: 'text-xs/normal',
                color: 'always-white',
                children: c
            }),
            header: _,
            headerClassName: m.tooltipHeader,
            markAsDismissed: n,
            onClick: t
        })
    });
}
function R(e) {
    let { sourceType: t, children: n, user: r } = e,
        { profileType: d } = (0, f.z)(),
        { avatarReactReplyEnabled: p, statusReactReplyEnabled: m } = (0, E.t)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        I =
            !(0, o.e7)([_.default], () => {
                var e;
                return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === r.id;
            }) &&
            d === h.y0.BITE_SIZE &&
            ((t === h.n_.AVATAR && p) || (t === h.n_.STATUS && !p && m)),
        [T, g] = a.useState(!1);
    (0, u.Z)(() => g(!0), I ? S : null);
    let R = T ? [s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK] : [],
        [C, y] = (0, c.US)(R);
    return (0, i.jsx)(l.Popout, {
        shouldShow: null != C,
        renderPopout: (e) => {
            let { position: t, closePopout: n, setPopoutRef: r } = e;
            return O({
                closePopout: n,
                markAsDismissed: y,
                setPopoutRef: r,
                ...N(m, p, t)
            });
        },
        spacing: t === h.n_.AVATAR ? A : v,
        position: t === h.n_.AVATAR ? 'left' : 'right',
        align: 'center',
        children: () => n
    });
}
