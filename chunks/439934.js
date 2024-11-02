n.d(t, {
    Z: function () {
        return M;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    l = n(120356),
    r = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(239091),
    d = n(434650),
    u = n(895924),
    v = n(70097),
    m = n(695346),
    h = n(594174),
    x = n(695103),
    g = n(880448),
    C = n(823379),
    p = n(5192),
    f = n(624138),
    _ = n(115130),
    I = n(147865),
    T = n(542094),
    N = n(665811),
    b = n(182906),
    j = n(556505),
    S = n(513202),
    E = n(884338),
    y = n(823531),
    A = n(388032),
    Z = n(440775),
    L = n(969728);
function O(e) {
    let { value: t, icon: n } = e;
    return (0, i.jsxs)(o.Text, {
        className: Z.activityTag,
        color: 'interactive-normal',
        variant: 'text-xs/semibold',
        children: [(0, C.lm)(n) ? (0, i.jsx)(n, { className: Z.icon }) : null, t]
    });
}
function k(e) {
    let { activity: t, application: n, channel: a, guildId: l, large: r = !1 } = e,
        c = (0, s.Wu)([h.default], () => {
            var e;
            return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : [])
                .map((e) => {
                    let [t] = e;
                    return h.default.getUser(t);
                })
                .filter(C.lm);
        }),
        d = p.ZP.getName(l, null == a ? void 0 : a.id, null == c ? void 0 : c[0]);
    if (((d = (0, f.aF)(d, 15)), null == t || 0 === c.length)) {
        var u, v;
        let e = ''.concat((0, I.ZP)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0));
        return (
            r && (e = null !== (v = n.description) && void 0 !== v ? v : ''),
            (0, i.jsx)(o.Text, {
                className: Z.activitySubtitleText,
                variant: 'text-xs/normal',
                color: 'interactive-normal',
                children: e
            })
        );
    }
    return (0, i.jsxs)('div', {
        className: Z.activitySubtitleText,
        children: [
            (0, i.jsx)(o.Text, {
                className: Z.usersArePlayingText,
                variant: 'text-xs/normal',
                children:
                    c.length > 1
                        ? A.intl.formatToPlainString(A.t.cpe6CA, {
                              username: d,
                              count: c.length - 1
                          })
                        : A.intl.formatToPlainString(A.t['7Uuia2'], { username: d })
            }),
            (0, i.jsx)(E.Z, {
                size: r ? E.u.SIZE_24 : E.u.SIZE_16,
                guildId: l,
                users: c,
                max: 6
            })
        ]
    });
}
function M(e) {
    var t;
    let { activityItem: n, channel: l, guildId: h, locationObject: C, onActivityItemVisible: p, onActivityItemSelected: f, large: E = !1 } = e,
        {
            imageBackground: M,
            videoUrl: B,
            activityAction: R,
            joinableEmbeddedApp: D,
            onActivityItemSelected: P,
            labelType: H,
            staffReleasePhase: w
        } = (0, T.ZP)({
            activityItem: n,
            channel: l,
            guildId: h,
            locationObject: C,
            onActivityItemVisible: p,
            onActivityItemSelected: f,
            embeddedActivitiesManager: S.Z,
            commandOrigin: u.bB.APPLICATION_LAUNCHER
        }),
        F = (0, s.e7)([_.Z, x.Z], () => _.Z.inDevModeForApplication(n.application.id) || x.Z.inTestModeForApplication(n.application.id), [n.application.id]),
        { application: V } = n,
        Y = a.useCallback((e) => e && (null == p ? void 0 : p({ applicationId: n.application.id })), [n.application.id, p]),
        U = (0, d.O)(Y, 0.8, !0),
        [W, G] = a.useState(!1),
        [z, q] = a.useState(W);
    a.useEffect(() => {
        W && q(!0);
    }, [W]);
    let J = () => G(!0),
        Q = () => G(!1),
        X = m.Sb.useSetting(),
        $ = a.useCallback(() => {
            null == P || P();
        }, [P]);
    return (0, i.jsxs)(o.Clickable, {
        onClick: R === T.JS.START ? $ : void 0,
        onContextMenu: X
            ? (e) => {
                  (0, c.vq)(e, (e) =>
                      (0, i.jsx)(y.Z, {
                          application: V,
                          ...e
                      })
                  );
              }
            : void 0,
        className: r()(Z.activityItem, {
            [Z.large]: !0 === E,
            [Z.disabled]: R !== T.JS.START
        }),
        children: [
            (0, i.jsxs)('div', {
                ref: U,
                className: r()(Z.activityImageContainer, { [Z.large]: !0 === E }),
                onMouseEnter: J,
                onFocus: J,
                onMouseLeave: Q,
                onBlur: Q,
                children: [
                    (0, i.jsx)(b.Z, {
                        imageBackground: M,
                        applicationName: V.name,
                        imageClassName: r()(Z.activityImage, { [Z.large]: !0 === E }),
                        imageNotFoundClassName: Z.brokenImageIconWrapper
                    }),
                    null != B && z && R === T.JS.START
                        ? (0, i.jsx)('div', {
                              className: r()(Z.activityVideo, { [Z.videoFadeOut]: !W }),
                              onAnimationEnd: () => (W ? null : q(!1)),
                              children: (0, i.jsx)(v.Z, {
                                  className: Z.activityVideo,
                                  src: B,
                                  loop: !0,
                                  autoPlay: !0,
                                  muted: !0
                              })
                          })
                        : null,
                    R !== T.JS.START
                        ? (0, i.jsx)(N.U, {
                              action: R,
                              onClick: $
                          })
                        : null,
                    (0, i.jsx)('div', {
                        className: Z.overlayBadge,
                        children: (0, i.jsx)('div', {
                            className: Z.badgeContainer,
                            children: (0, i.jsx)(j.Z, {
                                name: V.name,
                                labelType: H
                            })
                        })
                    }),
                    F
                        ? (0, i.jsx)(o.Tooltip, {
                              text: A.intl.string(A.t.CfTySU),
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: Z.devShelfBadge,
                                      ...e,
                                      children: (0, i.jsx)(g.Z, { className: Z.devShelfIcon })
                                  })
                          })
                        : null
                ]
            }),
            (0, i.jsxs)('div', {
                className: r()(Z.activityTextContainer, { [Z.large]: E }),
                children: [
                    E
                        ? (0, i.jsx)(o.Text, {
                              className: Z.activityMaxParticipantsLarge,
                              variant: 'text-xs/normal',
                              color: 'interactive-normal',
                              children: (0, I.ZP)(null !== (t = V.maxParticipants) && void 0 !== t ? t : 0)
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: Z.activityName,
                        children: [
                            (0, i.jsx)(o.Heading, {
                                className: Z.activityTitleText,
                                variant: 'heading-md/semibold',
                                color: 'interactive-active',
                                children: V.name
                            }),
                            null != w
                                ? (0, i.jsx)(o.Tooltip, {
                                      text: w,
                                      children: (e) =>
                                          (0, i.jsx)('img', {
                                              className: Z.staffBadge,
                                              alt: w,
                                              src: L,
                                              ...e
                                          })
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(k, {
                        activity: null == D ? void 0 : D.embeddedActivity,
                        application: V,
                        channel: l,
                        guildId: h,
                        large: E
                    }),
                    (0, i.jsx)('div', {
                        className: Z.activityTagsContainer,
                        children: V.tags.slice(0, 3).map((e) => (0, i.jsx)(O, { value: e }, 'activity-tag-'.concat(V.id, '-').concat(e)))
                    })
                ]
            })
        ]
    });
}
