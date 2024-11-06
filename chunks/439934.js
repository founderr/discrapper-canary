n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    o = n(442837),
    s = n(481060),
    c = n(239091),
    d = n(434650),
    u = n(895924),
    v = n(70097),
    m = n(695346),
    x = n(594174),
    h = n(695103),
    C = n(880448),
    g = n(823379),
    p = n(5192),
    T = n(624138),
    _ = n(115130),
    I = n(147865),
    f = n(542094),
    N = n(665811),
    j = n(182906),
    b = n(556505),
    S = n(513202),
    E = n(884338),
    y = n(823531),
    A = n(388032),
    Z = n(440775),
    O = n(969728);
function L(e) {
    let { value: t, icon: n } = e;
    return (0, i.jsxs)(s.Text, {
        className: Z.activityTag,
        color: 'interactive-normal',
        variant: 'text-xs/semibold',
        children: [(0, g.lm)(n) ? (0, i.jsx)(n, { className: Z.icon }) : null, t]
    });
}
function k(e) {
    let { activity: t, application: n, channel: l, guildId: a, large: r = !1 } = e,
        c = (0, o.Wu)([x.default], () => {
            var e;
            return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : [])
                .map((e) => {
                    let [t] = e;
                    return x.default.getUser(t);
                })
                .filter(g.lm);
        }),
        d = p.ZP.getName(a, null == l ? void 0 : l.id, null == c ? void 0 : c[0]);
    if (((d = (0, T.aF)(d, 15)), null == t || 0 === c.length)) {
        var u, v;
        let e = ''.concat((0, I.ZP)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0));
        return (
            r && (e = null !== (v = n.description) && void 0 !== v ? v : ''),
            (0, i.jsx)(s.Text, {
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
            (0, i.jsx)(s.Text, {
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
                guildId: a,
                users: c,
                max: 6
            })
        ]
    });
}
function B(e) {
    var t;
    let { activityItem: n, channel: a, guildId: x, locationObject: g, onActivityItemVisible: p, onActivityItemSelected: T, large: E = !1 } = e,
        {
            imageBackground: B,
            videoUrl: M,
            activityAction: D,
            joinableEmbeddedApp: R,
            onActivityItemSelected: P,
            labelType: H,
            staffReleasePhase: F
        } = (0, f.ZP)({
            activityItem: n,
            channel: a,
            guildId: x,
            locationObject: g,
            onActivityItemVisible: p,
            onActivityItemSelected: T,
            embeddedActivitiesManager: S.Z,
            commandOrigin: u.bB.APPLICATION_LAUNCHER
        }),
        w = (0, o.e7)([_.Z, h.Z], () => _.Z.inDevModeForApplication(n.application.id) || h.Z.inTestModeForApplication(n.application.id), [n.application.id]),
        { application: V } = n,
        Y = l.useCallback((e) => e && (null == p ? void 0 : p({ applicationId: n.application.id })), [n.application.id, p]),
        W = (0, d.O)(Y, 0.8, !0),
        [G, U] = l.useState(!1),
        [q, z] = l.useState(G);
    l.useEffect(() => {
        G && z(!0);
    }, [G]);
    let J = () => U(!0),
        X = () => U(!1),
        Q = m.Sb.useSetting(),
        $ = l.useCallback(() => {
            null == P || P();
        }, [P]);
    return (0, i.jsxs)(s.Clickable, {
        onClick: D === f.JS.START ? $ : void 0,
        onContextMenu: Q
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
            [Z.disabled]: D !== f.JS.START
        }),
        children: [
            (0, i.jsxs)('div', {
                ref: W,
                className: r()(Z.activityImageContainer, { [Z.large]: !0 === E }),
                onMouseEnter: J,
                onFocus: J,
                onMouseLeave: X,
                onBlur: X,
                children: [
                    (0, i.jsx)(j.Z, {
                        imageBackground: B,
                        applicationName: V.name,
                        imageClassName: r()(Z.activityImage, { [Z.large]: !0 === E }),
                        imageNotFoundClassName: Z.brokenImageIconWrapper
                    }),
                    null != M && q && D === f.JS.START
                        ? (0, i.jsx)('div', {
                              className: r()(Z.activityVideo, { [Z.videoFadeOut]: !G }),
                              onAnimationEnd: () => (G ? null : z(!1)),
                              children: (0, i.jsx)(v.Z, {
                                  className: Z.activityVideo,
                                  src: M,
                                  loop: !0,
                                  autoPlay: !0,
                                  muted: !0
                              })
                          })
                        : null,
                    D !== f.JS.START
                        ? (0, i.jsx)(N.U, {
                              action: D,
                              onClick: $
                          })
                        : null,
                    (0, i.jsx)('div', {
                        className: Z.overlayBadge,
                        children: (0, i.jsx)('div', {
                            className: Z.badgeContainer,
                            children: (0, i.jsx)(b.Z, {
                                name: V.name,
                                labelType: H
                            })
                        })
                    }),
                    w
                        ? (0, i.jsx)(s.Tooltip, {
                              text: A.intl.string(A.t.CfTySU),
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: Z.devShelfBadge,
                                      ...e,
                                      children: (0, i.jsx)(C.Z, { className: Z.devShelfIcon })
                                  })
                          })
                        : null
                ]
            }),
            (0, i.jsxs)('div', {
                className: r()(Z.activityTextContainer, { [Z.large]: E }),
                children: [
                    E
                        ? (0, i.jsx)(s.Text, {
                              className: Z.activityMaxParticipantsLarge,
                              variant: 'text-xs/normal',
                              color: 'interactive-normal',
                              children: (0, I.ZP)(null !== (t = V.maxParticipants) && void 0 !== t ? t : 0)
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: Z.activityName,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                className: Z.activityTitleText,
                                variant: 'heading-md/semibold',
                                color: 'interactive-active',
                                children: V.name
                            }),
                            null != F
                                ? (0, i.jsx)(s.Tooltip, {
                                      text: F,
                                      children: (e) =>
                                          (0, i.jsx)('img', {
                                              className: Z.staffBadge,
                                              alt: F,
                                              src: O,
                                              ...e
                                          })
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(k, {
                        activity: null == R ? void 0 : R.embeddedActivity,
                        application: V,
                        channel: a,
                        guildId: x,
                        large: E
                    }),
                    (0, i.jsx)('div', {
                        className: Z.activityTagsContainer,
                        children: V.tags.slice(0, 3).map((e) => (0, i.jsx)(L, { value: e }, 'activity-tag-'.concat(V.id, '-').concat(e)))
                    })
                ]
            })
        ]
    });
}
