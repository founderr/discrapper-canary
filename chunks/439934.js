n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
    r = n(481060),
    c = n(239091),
    d = n(434650),
    u = n(213459),
    v = n(895924),
    I = n(70097),
    _ = n(695346),
    T = n(594174),
    m = n(695103),
    C = n(880448),
    E = n(823379),
    x = n(5192),
    h = n(624138),
    g = n(115130),
    p = n(147865),
    f = n(542094),
    N = n(665811),
    S = n(182906),
    A = n(556505),
    j = n(513202),
    D = n(884338),
    b = n(823531),
    Z = n(689938),
    M = n(440775),
    y = n(969728);
function L(e) {
    let { value: t, icon: n } = e;
    return (0, i.jsxs)(r.Text, {
        className: M.activityTag,
        color: 'interactive-normal',
        variant: 'text-xs/semibold',
        children: [(0, E.lm)(n) ? (0, i.jsx)(n, { className: M.icon }) : null, t]
    });
}
function O(e) {
    let { activity: t, application: n, channel: a, guildId: l, large: s = !1 } = e,
        c = (0, o.Wu)([T.default], () => {
            var e;
            return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : [])
                .map((e) => {
                    let [t] = e;
                    return T.default.getUser(t);
                })
                .filter(E.lm);
        }),
        d = x.ZP.getName(l, null == a ? void 0 : a.id, null == c ? void 0 : c[0]);
    if (((d = (0, h.aF)(d, 15)), null == t || 0 === c.length)) {
        var u, v;
        let e = ''.concat((0, p.ZP)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0));
        return (
            s && (e = null !== (v = n.description) && void 0 !== v ? v : ''),
            (0, i.jsx)(r.Text, {
                className: M.activitySubtitleText,
                variant: 'text-xs/normal',
                color: 'interactive-normal',
                children: e
            })
        );
    }
    return (0, i.jsxs)('div', {
        className: M.activitySubtitleText,
        children: [
            (0, i.jsx)(r.Text, {
                className: M.usersArePlayingText,
                variant: 'text-xs/normal',
                children:
                    c.length > 1
                        ? Z.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
                              username: d,
                              count: c.length - 1
                          })
                        : Z.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({ username: d })
            }),
            (0, i.jsx)(D.Z, {
                size: s ? D.u.SIZE_24 : D.u.SIZE_16,
                guildId: l,
                users: c,
                max: 6
            })
        ]
    });
}
function B(e) {
    var t;
    let { activityItem: n, channel: l, guildId: T, locationObject: E, onActivityItemVisible: x, onActivityItemSelected: h, large: D = !1 } = e,
        {
            imageBackground: B,
            videoUrl: R,
            activityAction: V,
            joinableEmbeddedApp: k,
            onActivityItemSelected: H,
            labelType: P,
            staffReleasePhase: F
        } = (0, f.ZP)({
            activityItem: n,
            channel: l,
            guildId: T,
            locationObject: E,
            onActivityItemVisible: x,
            onActivityItemSelected: h,
            embeddedActivitiesManager: j.Z,
            commandOrigin: v.bB.APPLICATION_LAUNCHER
        }),
        Y = (0, o.e7)([g.Z, m.Z], () => g.Z.inDevModeForApplication(n.application.id) || m.Z.inTestModeForApplication(n.application.id), [n.application.id]),
        { application: w } = n,
        W = a.useCallback((e) => e && (null == x ? void 0 : x({ applicationId: n.application.id })), [n.application.id, x]),
        G = (0, d.O)(W, 0.8, !0),
        [U, q] = a.useState(!1),
        [z, J] = a.useState(U);
    a.useEffect(() => {
        U && J(!0);
    }, [U]);
    let K = () => q(!0),
        X = () => q(!1),
        $ = _.Sb.useSetting(),
        Q = a.useCallback(() => {
            null == H || H(), u.ZP.maybeQueryForInstallLessApps(w.id, null == l ? void 0 : l.id);
        }, [w.id, null == l ? void 0 : l.id, H]);
    return (0, i.jsxs)(r.Clickable, {
        onClick: V === f.JS.START ? Q : void 0,
        onContextMenu: $
            ? (e) => {
                  (0, c.vq)(e, (e) =>
                      (0, i.jsx)(b.Z, {
                          application: w,
                          ...e
                      })
                  );
              }
            : void 0,
        className: s()(M.activityItem, {
            [M.large]: !0 === D,
            [M.disabled]: V !== f.JS.START
        }),
        children: [
            (0, i.jsxs)('div', {
                ref: G,
                className: s()(M.activityImageContainer, { [M.large]: !0 === D }),
                onMouseEnter: K,
                onFocus: K,
                onMouseLeave: X,
                onBlur: X,
                children: [
                    (0, i.jsx)(S.Z, {
                        imageBackground: B,
                        applicationName: w.name,
                        imageClassName: s()(M.activityImage, { [M.large]: !0 === D }),
                        imageNotFoundClassName: M.brokenImageIconWrapper
                    }),
                    null != R && z && V === f.JS.START
                        ? (0, i.jsx)('div', {
                              className: s()(M.activityVideo, { [M.videoFadeOut]: !U }),
                              onAnimationEnd: () => (U ? null : J(!1)),
                              children: (0, i.jsx)(I.Z, {
                                  className: M.activityVideo,
                                  src: R,
                                  loop: !0,
                                  autoPlay: !0,
                                  muted: !0
                              })
                          })
                        : null,
                    V !== f.JS.START
                        ? (0, i.jsx)(N.U, {
                              action: V,
                              onClick: Q
                          })
                        : null,
                    (0, i.jsx)('div', {
                        className: M.overlayBadge,
                        children: (0, i.jsx)('div', {
                            className: M.badgeContainer,
                            children: (0, i.jsx)(A.Z, {
                                name: w.name,
                                labelType: P
                            })
                        })
                    }),
                    Y
                        ? (0, i.jsx)(r.Tooltip, {
                              text: Z.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: M.devShelfBadge,
                                      ...e,
                                      children: (0, i.jsx)(C.Z, { className: M.devShelfIcon })
                                  })
                          })
                        : null
                ]
            }),
            (0, i.jsxs)('div', {
                className: s()(M.activityTextContainer, { [M.large]: D }),
                children: [
                    D
                        ? (0, i.jsx)(r.Text, {
                              className: M.activityMaxParticipantsLarge,
                              variant: 'text-xs/normal',
                              color: 'interactive-normal',
                              children: (0, p.ZP)(null !== (t = w.maxParticipants) && void 0 !== t ? t : 0)
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: M.activityName,
                        children: [
                            (0, i.jsx)(r.Heading, {
                                className: M.activityTitleText,
                                variant: 'heading-md/semibold',
                                color: 'interactive-active',
                                children: w.name
                            }),
                            null != F
                                ? (0, i.jsx)(r.Tooltip, {
                                      text: F,
                                      children: (e) =>
                                          (0, i.jsx)('img', {
                                              className: M.staffBadge,
                                              alt: F,
                                              src: y,
                                              ...e
                                          })
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(O, {
                        activity: null == k ? void 0 : k.embeddedActivity,
                        application: w,
                        channel: l,
                        guildId: T,
                        large: D
                    }),
                    (0, i.jsx)('div', {
                        className: M.activityTagsContainer,
                        children: w.tags.slice(0, 3).map((e) => (0, i.jsx)(L, { value: e }, 'activity-tag-'.concat(w.id, '-').concat(e)))
                    })
                ]
            })
        ]
    });
}
