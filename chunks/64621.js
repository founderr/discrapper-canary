n.d(t, {
    Z: function () {
        return O;
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
function N(e, t) {
    return e && t
        ? {
              asset: T,
              assetClassName: m.profileImage,
              className: m.profileCoachmark,
              content: p.Z.Messages.USER_PROFILE_PROFILES_REACT_COACHMARK_BODY,
              header: p.Z.Messages.USER_PROFILE_PROFILES_REACT_COACHMARK_TITLE
          }
        : e
          ? {
                asset: g,
                assetClassName: void 0,
                className: m.statusCoachmark,
                content: p.Z.Messages.USER_PROFILE_STATUS_REACT_COACHMARK_BODY,
                header: p.Z.Messages.USER_PROFILE_STATUS_REACT_COACHMARK_TITLE
            }
          : {
                asset: I,
                assetClassName: m.avatarImage,
                className: m.avatarCoachmark,
                content: p.Z.Messages.USER_PROFILE_AVATAR_REACT_COACHMARK_BODY,
                header: p.Z.Messages.USER_PROFILE_AVATAR_REACT_COACHMARK_TITLE
            };
}
function O(e) {
    let { sourceType: t, children: n, user: r } = e,
        { profileType: I } = (0, f.z)(),
        { avatarReactReplyEnabled: T, statusReactReplyEnabled: g } = (0, E.t)({ location: 'UserProfilePopoutInteractionCoachmark' }),
        O = (0, o.e7)([_.default], () => {
            var e;
            return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === r.id;
        }),
        R = t === h.n_.AVATAR && T,
        C = t === h.n_.STATUS && !T && g,
        y = !O && I === h.y0.BITE_SIZE && (R || C),
        [L, b] = a.useState(!1);
    (0, u.Z)(() => b(!0), y ? S : null);
    let D = L ? [s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK] : [],
        [M, P] = (0, c.US)(D),
        { asset: U, assetClassName: w, className: x, content: G, header: k } = N(g, T);
    return (0, i.jsx)(l.Popout, {
        align: 'center',
        position: t === h.n_.AVATAR ? 'left' : 'right',
        shouldShow: null != M,
        spacing: t === h.n_.AVATAR ? A : v,
        renderPopout: (e) => {
            let { position: t, closePopout: n, setPopoutRef: r } = e;
            return (0, i.jsx)(l.Dialog, {
                ref: r,
                children: (0, i.jsx)(d.ZP, {
                    className: x,
                    asset: (0, i.jsx)('img', {
                        alt: '',
                        src: U,
                        className: w
                    }),
                    buttonCTA: p.Z.Messages.TUTORIAL_CLOSE,
                    buttonLayout: d._F.STACKED,
                    buttonProps: {
                        color: l.ButtonColors.BRAND_INVERTED,
                        size: l.Button.Sizes.SMALL
                    },
                    caretPosition: 'right' === t ? d.DF.LEFT_CENTER : d.DF.RIGHT_CENTER,
                    content: (0, i.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: 'always-white',
                        children: G
                    }),
                    header: k,
                    headerClassName: m.tooltipHeader,
                    markAsDismissed: P,
                    onClick: n
                })
            });
        },
        children: () => n
    });
}
