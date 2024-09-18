n.d(t, {
    Z: function () {
        return y;
    },
    q: function () {
        return L;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    l = n(442837),
    s = n(481060),
    o = n(153867),
    r = n(607070),
    c = n(100527),
    d = n(906732),
    u = n(895924),
    v = n(264165),
    I = n(70097),
    _ = n(740492),
    T = n(592125),
    m = n(430824),
    C = n(496675),
    E = n(944486),
    x = n(566620),
    h = n(317381),
    g = n(122613),
    p = n(678173),
    f = n(696068),
    N = n(361213),
    S = n(778569),
    A = n(412019),
    j = n(981631),
    D = n(689938),
    b = n(760551);
function Z(e) {
    return (0, l.e7)(
        [m.Z, C.Z],
        () => {
            let t = m.Z.getGuild(e);
            return null != t && C.Z.can(j.Plq.CREATE_INSTANT_INVITE, t);
        },
        [e]
    );
}
let M = ['embedded_background'];
function y(e) {
    var t, n;
    let { applicationId: c, guildId: d, selectedChannelId: u, setSelectedChannelId: C, enableSelectedTextChannelInvite: h } = e,
        g = (0, l.e7)([r.Z], () => r.Z.useReducedMotion),
        j = (0, p.T)(null != d ? d : null, null != c ? c : null),
        [y, L] = a.useState(h && !_.ZP.disableInviteWithTextChannelActivityLaunch),
        O = (0, f.F)(d);
    a.useEffect(() => {
        var e;
        x.w1({ guildId: d }), C(null !== (e = (0, f.d)({ guildId: d })) && void 0 !== e ? e : void 0);
    }, [d, C]);
    let B = null == j ? void 0 : j.activity.activity_preview_video_asset_id,
        R = null != B ? (0, N.Z)(null !== (t = null == j ? void 0 : j.application.id) && void 0 !== t ? t : '', B) : null,
        { url: V } = (0, S.Z)({
            applicationId: null !== (n = null == j ? void 0 : j.application.id) && void 0 !== n ? n : '',
            size: 1024,
            names: M
        }),
        k = (0, l.e7)([m.Z], () => m.Z.getGuild(d)),
        H = (0, l.e7)([T.Z, E.Z], () => T.Z.getChannel(E.Z.getChannelId())),
        P = Z(null != d ? d : void 0);
    if ((null == j ? void 0 : j.application) == null || null == k) return null;
    let F = (null == H ? void 0 : H.name) == null || (null == H ? void 0 : H.name) === '' ? D.Z.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME : '#'.concat(H.name);
    return (0, i.jsxs)(s.Scroller, {
        className: b.scroll,
        children: [
            null != R || null != V
                ? (0, i.jsx)(v.Z, {
                      aspectRatio: 16 / 9,
                      className: b.imageContainer,
                      children: (0, i.jsx)(I.Z, {
                          className: b.video,
                          src: R,
                          loop: !0,
                          autoPlay: !g,
                          poster: V,
                          muted: !0
                      })
                  })
                : null,
            (0, i.jsxs)('div', {
                className: b.descriptionArea,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-xl/semibold',
                        children: null == j ? void 0 : j.application.name
                    }),
                    (0, i.jsx)(s.Text, {
                        className: b.descriptionAreaSubtext,
                        variant: 'text-md/normal',
                        children: null == j ? void 0 : j.application.description
                    })
                ]
            }),
            (0, i.jsx)(s.Select, {
                placeholder: D.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                optionClassName: b.__invalid_option,
                options: O,
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
                    let e = O.find((e) => e.value.channel.id === u);
                    return null == e
                        ? null
                        : (0, i.jsx)(A.O, {
                              channel: e.value.channel,
                              users: e.value.users
                          });
                },
                renderOptionLabel: (e) => {
                    let {
                        value: { channel: t, users: n }
                    } = e;
                    return (0, i.jsx)(A.O, {
                        channel: t,
                        users: n
                    });
                }
            }),
            P && h
                ? (0, i.jsxs)(s.Clickable, {
                      className: b.checkboxContainer,
                      onClick: () => {
                          let e = !y;
                          o.ZP.updatedUnsyncedSettings({ disableInviteWithTextChannelActivityLaunch: !e }), L(e);
                      },
                      children: [
                          (0, i.jsx)(s.Checkbox, {
                              type: s.Checkbox.Types.INVERTED,
                              className: b.checkbox,
                              value: y,
                              displayOnly: !0
                          }),
                          (0, i.jsxs)(s.Text, {
                              variant: 'text-sm/normal',
                              children: [D.Z.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE, ' ', (0, i.jsx)('strong', { children: F })]
                          })
                      ]
                  })
                : null
        ]
    });
}
function L(e) {
    let { applicationId: t, guildId: n, locationObject: a, onBack: o, onClose: r, selectedChannelId: v, enableSelectedTextChannelInvite: I } = e,
        { analyticsLocations: m } = (0, d.ZP)(c.Z.ACTIVITY_CHANNEL_SELECTOR),
        C = (0, p.T)(null != n ? n : null, null != t ? t : null),
        f = (0, l.e7)([T.Z, E.Z], () => T.Z.getChannel(E.Z.getChannelId())),
        N = (0, l.e7)([_.ZP], () => I && !_.ZP.disableInviteWithTextChannelActivityLaunch),
        S = (0, l.e7)([h.ZP], () => null != v && '' !== v && h.ZP.getEmbeddedActivitiesForChannel(v).some((e) => e.applicationId === t)),
        A = Z(n),
        M = async () => {
            var e;
            if (null != v && '' !== v && null != C && null != n && '' !== n)
                (await (0, g.Z)({
                    targetApplicationId: null === (e = C.application) || void 0 === e ? void 0 : e.id,
                    locationObject: a,
                    channelId: v,
                    analyticsLocations: m,
                    commandOrigin: u.bB.APPLICATION_LAUNCHER
                })) &&
                    (r(),
                    null != f &&
                        A &&
                        N &&
                        (await x.sN({
                            activityChannelId: v,
                            invitedChannelId: f.id,
                            applicationId: C.application.id,
                            location: j.Sbl.ACTIVITY_SHELF
                        })));
        };
    return (0, i.jsx)(d.Gt, {
        value: m,
        children: (0, i.jsxs)('div', {
            className: b.footerContainer,
            children: [
                (0, i.jsx)(s.Clickable, {
                    onClick: o,
                    className: b.backToBrowse,
                    children: (0, i.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: D.Z.Messages.BACK
                    })
                }),
                null == v
                    ? (0, i.jsx)('div', {})
                    : (0, i.jsx)(s.Button, {
                          className: b.launchButton,
                          onClick: M,
                          color: S ? s.Button.Colors.GREEN : void 0,
                          fullWidth: !0,
                          children: S ? D.Z.Messages.EMBEDDED_ACTIVITIES_JOIN : D.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH
                      })
            ]
        })
    });
}
