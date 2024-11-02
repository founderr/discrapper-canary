n.d(t, {
    Z: function () {
        return O;
    },
    q: function () {
        return k;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    l = n(442837),
    r = n(481060),
    s = n(153867),
    o = n(607070),
    c = n(100527),
    d = n(906732),
    u = n(895924),
    v = n(264165),
    m = n(70097),
    h = n(740492),
    x = n(592125),
    g = n(430824),
    C = n(496675),
    p = n(944486),
    f = n(566620),
    _ = n(317381),
    I = n(122613),
    T = n(678173),
    N = n(696068),
    b = n(361213),
    j = n(778569),
    S = n(412019),
    E = n(981631),
    y = n(388032),
    A = n(760551);
function Z(e) {
    return (0, l.e7)(
        [g.Z, C.Z],
        () => {
            let t = g.Z.getGuild(e);
            return null != t && C.Z.can(E.Plq.CREATE_INSTANT_INVITE, t);
        },
        [e]
    );
}
let L = ['embedded_background'];
function O(e) {
    var t, n;
    let { applicationId: c, guildId: d, selectedChannelId: u, setSelectedChannelId: C, enableSelectedTextChannelInvite: _ } = e,
        I = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        E = (0, T.T)(null != d ? d : null, null != c ? c : null),
        [O, k] = a.useState(_ && !h.ZP.disableInviteWithTextChannelActivityLaunch),
        M = (0, N.F)(d);
    a.useEffect(() => {
        var e;
        f.w1({ guildId: d }), C(null !== (e = (0, N.d)({ guildId: d })) && void 0 !== e ? e : void 0);
    }, [d, C]);
    let B = null == E ? void 0 : E.activity.activity_preview_video_asset_id,
        R = null != B ? (0, b.Z)(null !== (t = null == E ? void 0 : E.application.id) && void 0 !== t ? t : '', B) : null,
        { url: D } = (0, j.Z)({
            applicationId: null !== (n = null == E ? void 0 : E.application.id) && void 0 !== n ? n : '',
            size: 1024,
            names: L
        }),
        P = (0, l.e7)([g.Z], () => g.Z.getGuild(d)),
        H = (0, l.e7)([x.Z, p.Z], () => x.Z.getChannel(p.Z.getChannelId())),
        w = Z(null != d ? d : void 0);
    if ((null == E ? void 0 : E.application) == null || null == P) return null;
    let F = (null == H ? void 0 : H.name) == null || (null == H ? void 0 : H.name) === '' ? y.intl.string(y.t.PlAffn) : '#'.concat(H.name);
    return (0, i.jsxs)(r.Scroller, {
        className: A.scroll,
        children: [
            null != R || null != D
                ? (0, i.jsx)(v.Z, {
                      aspectRatio: 16 / 9,
                      className: A.imageContainer,
                      children: (0, i.jsx)(m.Z, {
                          className: A.video,
                          src: R,
                          loop: !0,
                          autoPlay: !I,
                          poster: D,
                          muted: !0
                      })
                  })
                : null,
            (0, i.jsxs)('div', {
                className: A.descriptionArea,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: 'heading-xl/semibold',
                        children: null == E ? void 0 : E.application.name
                    }),
                    (0, i.jsx)(r.Text, {
                        className: A.descriptionAreaSubtext,
                        variant: 'text-md/normal',
                        children: null == E ? void 0 : E.application.description
                    })
                ]
            }),
            (0, i.jsx)(r.Select, {
                placeholder: y.intl.string(y.t.SUryfX),
                optionClassName: A.__invalid_option,
                options: M,
                isSelected: (e) => {
                    let { channel: t } = e;
                    return t.id === u;
                },
                select: (e) => {
                    let { channel: t } = e;
                    return C(t.id);
                },
                serialize: (e) => {
                    let { channel: t } = e;
                    return t.id;
                },
                renderOptionValue: () => {
                    let e = M.find((e) => e.value.channel.id === u);
                    return null == e
                        ? null
                        : (0, i.jsx)(S.O, {
                              channel: e.value.channel,
                              users: e.value.users
                          });
                },
                renderOptionLabel: (e) => {
                    let {
                        value: { channel: t, users: n }
                    } = e;
                    return (0, i.jsx)(S.O, {
                        channel: t,
                        users: n
                    });
                }
            }),
            w && _
                ? (0, i.jsxs)(r.Clickable, {
                      className: A.checkboxContainer,
                      onClick: () => {
                          let e = !O;
                          s.ZP.updatedUnsyncedSettings({ disableInviteWithTextChannelActivityLaunch: !e }), k(e);
                      },
                      children: [
                          (0, i.jsx)(r.Checkbox, {
                              type: r.Checkbox.Types.INVERTED,
                              className: A.checkbox,
                              value: O,
                              displayOnly: !0
                          }),
                          (0, i.jsxs)(r.Text, {
                              variant: 'text-sm/normal',
                              children: [y.intl.string(y.t.x3JFq6), ' ', (0, i.jsx)('strong', { children: F })]
                          })
                      ]
                  })
                : null
        ]
    });
}
function k(e) {
    let { applicationId: t, guildId: n, locationObject: a, onBack: s, onClose: o, selectedChannelId: v, enableSelectedTextChannelInvite: m } = e,
        { analyticsLocations: g } = (0, d.ZP)(c.Z.ACTIVITY_CHANNEL_SELECTOR),
        C = (0, T.T)(null != n ? n : null, null != t ? t : null),
        N = (0, l.e7)([x.Z, p.Z], () => x.Z.getChannel(p.Z.getChannelId())),
        b = (0, l.e7)([h.ZP], () => m && !h.ZP.disableInviteWithTextChannelActivityLaunch),
        j = (0, l.e7)([_.ZP], () => null != v && '' !== v && _.ZP.getEmbeddedActivitiesForChannel(v).some((e) => e.applicationId === t)),
        S = Z(n),
        L = async () => {
            var e;
            if (null != v && '' !== v && null != C && null != n && '' !== n)
                (await (0, I.Z)({
                    targetApplicationId: null === (e = C.application) || void 0 === e ? void 0 : e.id,
                    locationObject: a,
                    channelId: v,
                    analyticsLocations: g,
                    commandOrigin: u.bB.APPLICATION_LAUNCHER
                })) &&
                    (o(),
                    null != N &&
                        S &&
                        b &&
                        (await f.sN({
                            activityChannelId: v,
                            invitedChannelId: N.id,
                            applicationId: C.application.id,
                            location: E.Sbl.ACTIVITY_SHELF
                        })));
        };
    return (0, i.jsx)(d.Gt, {
        value: g,
        children: (0, i.jsxs)('div', {
            className: A.footerContainer,
            children: [
                (0, i.jsx)(r.Clickable, {
                    onClick: s,
                    className: A.backToBrowse,
                    children: (0, i.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: y.intl.string(y.t['13/7kZ'])
                    })
                }),
                null == v
                    ? (0, i.jsx)('div', {})
                    : (0, i.jsx)(r.Button, {
                          className: A.launchButton,
                          onClick: L,
                          color: j ? r.Button.Colors.GREEN : void 0,
                          fullWidth: !0,
                          children: j ? y.intl.string(y.t.sqe0ho) : y.intl.string(y.t.QO7rOz)
                      })
            ]
        })
    });
}
