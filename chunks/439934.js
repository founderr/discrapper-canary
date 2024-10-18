n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var a = n(735250),
    i = n(470079),
    l = n(120356),
    s = n.n(l),
    r = n(442837),
    o = n(481060),
    c = n(239091),
    d = n(434650),
    u = n(895924),
    v = n(70097),
    I = n(695346),
    _ = n(594174),
    T = n(695103),
    m = n(880448),
    C = n(823379),
    E = n(5192),
    x = n(624138),
    h = n(115130),
    g = n(147865),
    p = n(542094),
    f = n(665811),
    N = n(182906),
    S = n(556505),
    A = n(513202),
    b = n(884338),
    j = n(823531),
    D = n(689938),
    Z = n(440775),
    M = n(969728);
function L(e) {
    let { value: t, icon: n } = e;
    return (0, a.jsxs)(o.Text, {
        className: Z.activityTag,
        color: 'interactive-normal',
        variant: 'text-xs/semibold',
        children: [(0, C.lm)(n) ? (0, a.jsx)(n, { className: Z.icon }) : null, t]
    });
}
function y(e) {
    let { activity: t, application: n, channel: i, guildId: l, large: s = !1 } = e,
        c = (0, r.Wu)([_.default], () => {
            var e;
            return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : [])
                .map((e) => {
                    let [t] = e;
                    return _.default.getUser(t);
                })
                .filter(C.lm);
        }),
        d = E.ZP.getName(l, null == i ? void 0 : i.id, null == c ? void 0 : c[0]);
    if (((d = (0, x.aF)(d, 15)), null == t || 0 === c.length)) {
        var u, v;
        let e = ''.concat((0, g.ZP)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0));
        return (
            s && (e = null !== (v = n.description) && void 0 !== v ? v : ''),
            (0, a.jsx)(o.Text, {
                className: Z.activitySubtitleText,
                variant: 'text-xs/normal',
                color: 'interactive-normal',
                children: e
            })
        );
    }
    return (0, a.jsxs)('div', {
        className: Z.activitySubtitleText,
        children: [
            (0, a.jsx)(o.Text, {
                className: Z.usersArePlayingText,
                variant: 'text-xs/normal',
                children:
                    c.length > 1
                        ? D.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
                              username: d,
                              count: c.length - 1
                          })
                        : D.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({ username: d })
            }),
            (0, a.jsx)(b.Z, {
                size: s ? b.u.SIZE_24 : b.u.SIZE_16,
                guildId: l,
                users: c,
                max: 6
            })
        ]
    });
}
function O(e) {
    var t;
    let { activityItem: n, channel: l, guildId: _, locationObject: C, onActivityItemVisible: E, onActivityItemSelected: x, large: b = !1 } = e,
        {
            imageBackground: O,
            videoUrl: B,
            activityAction: R,
            joinableEmbeddedApp: V,
            onActivityItemSelected: k,
            labelType: P,
            staffReleasePhase: H
        } = (0, p.ZP)({
            activityItem: n,
            channel: l,
            guildId: _,
            locationObject: C,
            onActivityItemVisible: E,
            onActivityItemSelected: x,
            embeddedActivitiesManager: A.Z,
            commandOrigin: u.bB.APPLICATION_LAUNCHER
        }),
        F = (0, r.e7)([h.Z, T.Z], () => h.Z.inDevModeForApplication(n.application.id) || T.Z.inTestModeForApplication(n.application.id), [n.application.id]),
        { application: w } = n,
        Y = i.useCallback((e) => e && (null == E ? void 0 : E({ applicationId: n.application.id })), [n.application.id, E]),
        U = (0, d.O)(Y, 0.8, !0),
        [W, G] = i.useState(!1),
        [z, q] = i.useState(W);
    i.useEffect(() => {
        W && q(!0);
    }, [W]);
    let J = () => G(!0),
        K = () => G(!1),
        X = I.Sb.useSetting(),
        $ = i.useCallback(() => {
            null == k || k();
        }, [k]);
    return (0, a.jsxs)(o.Clickable, {
        onClick: R === p.JS.START ? $ : void 0,
        onContextMenu: X
            ? (e) => {
                  (0, c.vq)(e, (e) =>
                      (0, a.jsx)(j.Z, {
                          application: w,
                          ...e
                      })
                  );
              }
            : void 0,
        className: s()(Z.activityItem, {
            [Z.large]: !0 === b,
            [Z.disabled]: R !== p.JS.START
        }),
        children: [
            (0, a.jsxs)('div', {
                ref: U,
                className: s()(Z.activityImageContainer, { [Z.large]: !0 === b }),
                onMouseEnter: J,
                onFocus: J,
                onMouseLeave: K,
                onBlur: K,
                children: [
                    (0, a.jsx)(N.Z, {
                        imageBackground: O,
                        applicationName: w.name,
                        imageClassName: s()(Z.activityImage, { [Z.large]: !0 === b }),
                        imageNotFoundClassName: Z.brokenImageIconWrapper
                    }),
                    null != B && z && R === p.JS.START
                        ? (0, a.jsx)('div', {
                              className: s()(Z.activityVideo, { [Z.videoFadeOut]: !W }),
                              onAnimationEnd: () => (W ? null : q(!1)),
                              children: (0, a.jsx)(v.Z, {
                                  className: Z.activityVideo,
                                  src: B,
                                  loop: !0,
                                  autoPlay: !0,
                                  muted: !0
                              })
                          })
                        : null,
                    R !== p.JS.START
                        ? (0, a.jsx)(f.U, {
                              action: R,
                              onClick: $
                          })
                        : null,
                    (0, a.jsx)('div', {
                        className: Z.overlayBadge,
                        children: (0, a.jsx)('div', {
                            className: Z.badgeContainer,
                            children: (0, a.jsx)(S.Z, {
                                name: w.name,
                                labelType: P
                            })
                        })
                    }),
                    F
                        ? (0, a.jsx)(o.Tooltip, {
                              text: D.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
                              children: (e) =>
                                  (0, a.jsx)('div', {
                                      className: Z.devShelfBadge,
                                      ...e,
                                      children: (0, a.jsx)(m.Z, { className: Z.devShelfIcon })
                                  })
                          })
                        : null
                ]
            }),
            (0, a.jsxs)('div', {
                className: s()(Z.activityTextContainer, { [Z.large]: b }),
                children: [
                    b
                        ? (0, a.jsx)(o.Text, {
                              className: Z.activityMaxParticipantsLarge,
                              variant: 'text-xs/normal',
                              color: 'interactive-normal',
                              children: (0, g.ZP)(null !== (t = w.maxParticipants) && void 0 !== t ? t : 0)
                          })
                        : null,
                    (0, a.jsxs)('div', {
                        className: Z.activityName,
                        children: [
                            (0, a.jsx)(o.Heading, {
                                className: Z.activityTitleText,
                                variant: 'heading-md/semibold',
                                color: 'interactive-active',
                                children: w.name
                            }),
                            null != H
                                ? (0, a.jsx)(o.Tooltip, {
                                      text: H,
                                      children: (e) =>
                                          (0, a.jsx)('img', {
                                              className: Z.staffBadge,
                                              alt: H,
                                              src: M,
                                              ...e
                                          })
                                  })
                                : null
                        ]
                    }),
                    (0, a.jsx)(y, {
                        activity: null == V ? void 0 : V.embeddedActivity,
                        application: w,
                        channel: l,
                        guildId: _,
                        large: b
                    }),
                    (0, a.jsx)('div', {
                        className: Z.activityTagsContainer,
                        children: w.tags.slice(0, 3).map((e) => (0, a.jsx)(L, { value: e }, 'activity-tag-'.concat(w.id, '-').concat(e)))
                    })
                ]
            })
        ]
    });
}
