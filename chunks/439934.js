n.d(t, {
    Z: function () {
        return B;
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
    u = n(213459),
    g = n(895924),
    m = n(70097),
    v = n(695346),
    p = n(594174),
    I = n(695103),
    f = n(880448),
    x = n(823379),
    _ = n(5192),
    h = n(624138),
    C = n(115130),
    T = n(147865),
    E = n(542094),
    S = n(665811),
    b = n(182906),
    N = n(556505),
    j = n(513202),
    A = n(884338),
    M = n(823531),
    Z = n(689938),
    y = n(325428),
    D = n(969728);
function L(e) {
    let { value: t, icon: n } = e;
    return (0, a.jsxs)(o.Text, {
        className: y.activityTag,
        color: 'interactive-normal',
        variant: 'text-xs/semibold',
        children: [(0, x.lm)(n) ? (0, a.jsx)(n, { className: y.icon }) : null, t]
    });
}
function O(e) {
    let { activity: t, application: n, channel: i, guildId: l, large: s = !1 } = e,
        c = (0, r.Wu)([p.default], () => {
            var e;
            return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : [])
                .map((e) => {
                    let [t] = e;
                    return p.default.getUser(t);
                })
                .filter(x.lm);
        }),
        d = _.ZP.getName(l, null == i ? void 0 : i.id, null == c ? void 0 : c[0]);
    if (((d = (0, h.aF)(d, 15)), null == t || 0 === c.length)) {
        var u, g;
        let e = ''.concat((0, T.ZP)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0));
        return (
            s && (e = null !== (g = n.description) && void 0 !== g ? g : ''),
            (0, a.jsx)(o.Text, {
                className: y.activitySubtitleText,
                variant: 'text-xs/normal',
                color: 'interactive-normal',
                children: e
            })
        );
    }
    return (0, a.jsxs)('div', {
        className: y.activitySubtitleText,
        children: [
            (0, a.jsx)(o.Text, {
                className: y.usersArePlayingText,
                variant: 'text-xs/normal',
                children:
                    c.length > 1
                        ? Z.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
                              username: d,
                              count: c.length - 1
                          })
                        : Z.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({ username: d })
            }),
            (0, a.jsx)(A.Z, {
                size: s ? A.u.SIZE_24 : A.u.SIZE_16,
                guildId: l,
                users: c,
                max: 6
            })
        ]
    });
}
function B(e) {
    var t;
    let { activityItem: n, channel: l, guildId: p, locationObject: x, onActivityItemVisible: _, onActivityItemSelected: h, large: A = !1 } = e,
        {
            imageBackground: B,
            videoUrl: V,
            activityAction: R,
            joinableEmbeddedApp: k,
            onActivityItemSelected: P,
            labelType: H,
            staffReleasePhase: F
        } = (0, E.ZP)({
            activityItem: n,
            channel: l,
            guildId: p,
            locationObject: x,
            onActivityItemVisible: _,
            onActivityItemSelected: h,
            embeddedActivitiesManager: j.Z,
            commandOrigin: g.bB.APPLICATION_LAUNCHER
        }),
        U = (0, r.e7)([C.Z, I.Z], () => C.Z.inDevModeForApplication(n.application.id) || I.Z.inTestModeForApplication(n.application.id), [n.application.id]),
        { application: w } = n,
        Y = i.useCallback((e) => e && (null == _ ? void 0 : _({ applicationId: n.application.id })), [n.application.id, _]),
        G = (0, d.O)(Y, 0.8, !0),
        [W, z] = i.useState(!1),
        [q, J] = i.useState(W);
    i.useEffect(() => {
        W && J(!0);
    }, [W]);
    let K = () => z(!0),
        X = () => z(!1),
        $ = v.Sb.useSetting(),
        Q = i.useCallback(() => {
            null == P || P(), u.ZP.maybeQueryForInstallLessApps(w.id, null == l ? void 0 : l.id);
        }, [w.id, null == l ? void 0 : l.id, P]);
    return (0, a.jsxs)(o.Clickable, {
        onClick: R === E.JS.START ? Q : void 0,
        onContextMenu: $
            ? (e) => {
                  (0, c.vq)(e, (e) =>
                      (0, a.jsx)(M.Z, {
                          application: w,
                          ...e
                      })
                  );
              }
            : void 0,
        className: s()(y.activityItem, {
            [y.large]: !0 === A,
            [y.disabled]: R !== E.JS.START
        }),
        children: [
            (0, a.jsxs)('div', {
                ref: G,
                className: s()(y.activityImageContainer, { [y.large]: !0 === A }),
                onMouseEnter: K,
                onFocus: K,
                onMouseLeave: X,
                onBlur: X,
                children: [
                    (0, a.jsx)(b.Z, {
                        imageBackground: B,
                        applicationName: w.name,
                        imageClassName: s()(y.activityImage, { [y.large]: !0 === A }),
                        imageNotFoundClassName: y.brokenImageIconWrapper
                    }),
                    null != V && q && R === E.JS.START
                        ? (0, a.jsx)('div', {
                              className: s()(y.activityVideo, { [y.videoFadeOut]: !W }),
                              onAnimationEnd: () => (W ? null : J(!1)),
                              children: (0, a.jsx)(m.Z, {
                                  className: y.activityVideo,
                                  src: V,
                                  loop: !0,
                                  autoPlay: !0,
                                  muted: !0
                              })
                          })
                        : null,
                    R !== E.JS.START
                        ? (0, a.jsx)(S.U, {
                              action: R,
                              onClick: Q
                          })
                        : null,
                    (0, a.jsx)('div', {
                        className: y.overlayBadge,
                        children: (0, a.jsx)('div', {
                            className: y.badgeContainer,
                            children: (0, a.jsx)(N.Z, {
                                name: w.name,
                                labelType: H
                            })
                        })
                    }),
                    U
                        ? (0, a.jsx)(o.Tooltip, {
                              text: Z.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
                              children: (e) =>
                                  (0, a.jsx)('div', {
                                      className: y.devShelfBadge,
                                      ...e,
                                      children: (0, a.jsx)(f.Z, { className: y.devShelfIcon })
                                  })
                          })
                        : null
                ]
            }),
            (0, a.jsxs)('div', {
                className: s()(y.activityTextContainer, { [y.large]: A }),
                children: [
                    A
                        ? (0, a.jsx)(o.Text, {
                              className: y.activityMaxParticipantsLarge,
                              variant: 'text-xs/normal',
                              color: 'interactive-normal',
                              children: (0, T.ZP)(null !== (t = w.maxParticipants) && void 0 !== t ? t : 0)
                          })
                        : null,
                    (0, a.jsxs)('div', {
                        className: y.activityName,
                        children: [
                            (0, a.jsx)(o.Heading, {
                                className: y.activityTitleText,
                                variant: 'heading-md/semibold',
                                color: 'interactive-active',
                                children: w.name
                            }),
                            null != F
                                ? (0, a.jsx)(o.Tooltip, {
                                      text: F,
                                      children: (e) =>
                                          (0, a.jsx)('img', {
                                              className: y.staffBadge,
                                              alt: F,
                                              src: D,
                                              ...e
                                          })
                                  })
                                : null
                        ]
                    }),
                    (0, a.jsx)(O, {
                        activity: null == k ? void 0 : k.embeddedActivity,
                        application: w,
                        channel: l,
                        guildId: p,
                        large: A
                    }),
                    (0, a.jsx)('div', {
                        className: y.activityTagsContainer,
                        children: w.tags.slice(0, 3).map((e) => (0, a.jsx)(L, { value: e }, 'activity-tag-'.concat(w.id, '-').concat(e)))
                    })
                ]
            })
        ]
    });
}
