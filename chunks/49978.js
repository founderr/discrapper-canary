n.d(t, {
    Z: function () {
        return L;
    },
    q: function () {
        return y;
    }
}),
    n(47120);
var a = n(735250),
    i = n(470079),
    l = n(442837),
    s = n(481060),
    r = n(153867),
    o = n(607070),
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
    b = n(981631),
    j = n(689938),
    D = n(760551);
function Z(e) {
    return (0, l.e7)(
        [m.Z, C.Z],
        () => {
            let t = m.Z.getGuild(e);
            return null != t && C.Z.can(b.Plq.CREATE_INSTANT_INVITE, t);
        },
        [e]
    );
}
let M = ['embedded_background'];
function L(e) {
    var t, n;
    let { applicationId: c, guildId: d, selectedChannelId: u, setSelectedChannelId: C, enableSelectedTextChannelInvite: h } = e,
        g = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        b = (0, p.T)(null != d ? d : null, null != c ? c : null),
        [L, y] = i.useState(h && !_.ZP.disableInviteWithTextChannelActivityLaunch),
        O = (0, f.F)(d);
    i.useEffect(() => {
        var e;
        x.w1({ guildId: d }), C(null !== (e = (0, f.d)({ guildId: d })) && void 0 !== e ? e : void 0);
    }, [d, C]);
    let B = null == b ? void 0 : b.activity.activity_preview_video_asset_id,
        R = null != B ? (0, N.Z)(null !== (t = null == b ? void 0 : b.application.id) && void 0 !== t ? t : '', B) : null,
        { url: V } = (0, S.Z)({
            applicationId: null !== (n = null == b ? void 0 : b.application.id) && void 0 !== n ? n : '',
            size: 1024,
            names: M
        }),
        k = (0, l.e7)([m.Z], () => m.Z.getGuild(d)),
        P = (0, l.e7)([T.Z, E.Z], () => T.Z.getChannel(E.Z.getChannelId())),
        H = Z(null != d ? d : void 0);
    if ((null == b ? void 0 : b.application) == null || null == k) return null;
    let F = (null == P ? void 0 : P.name) == null || (null == P ? void 0 : P.name) === '' ? j.Z.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME : '#'.concat(P.name);
    return (0, a.jsxs)(s.Scroller, {
        className: D.scroll,
        children: [
            null != R || null != V
                ? (0, a.jsx)(v.Z, {
                      aspectRatio: 16 / 9,
                      className: D.imageContainer,
                      children: (0, a.jsx)(I.Z, {
                          className: D.video,
                          src: R,
                          loop: !0,
                          autoPlay: !g,
                          poster: V,
                          muted: !0
                      })
                  })
                : null,
            (0, a.jsxs)('div', {
                className: D.descriptionArea,
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: 'heading-xl/semibold',
                        children: null == b ? void 0 : b.application.name
                    }),
                    (0, a.jsx)(s.Text, {
                        className: D.descriptionAreaSubtext,
                        variant: 'text-md/normal',
                        children: null == b ? void 0 : b.application.description
                    })
                ]
            }),
            (0, a.jsx)(s.Select, {
                placeholder: j.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                optionClassName: D.__invalid_option,
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
                        : (0, a.jsx)(A.O, {
                              channel: e.value.channel,
                              users: e.value.users
                          });
                },
                renderOptionLabel: (e) => {
                    let {
                        value: { channel: t, users: n }
                    } = e;
                    return (0, a.jsx)(A.O, {
                        channel: t,
                        users: n
                    });
                }
            }),
            H && h
                ? (0, a.jsxs)(s.Clickable, {
                      className: D.checkboxContainer,
                      onClick: () => {
                          let e = !L;
                          r.ZP.updatedUnsyncedSettings({ disableInviteWithTextChannelActivityLaunch: !e }), y(e);
                      },
                      children: [
                          (0, a.jsx)(s.Checkbox, {
                              type: s.Checkbox.Types.INVERTED,
                              className: D.checkbox,
                              value: L,
                              displayOnly: !0
                          }),
                          (0, a.jsxs)(s.Text, {
                              variant: 'text-sm/normal',
                              children: [j.Z.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE, ' ', (0, a.jsx)('strong', { children: F })]
                          })
                      ]
                  })
                : null
        ]
    });
}
function y(e) {
    let { applicationId: t, guildId: n, locationObject: i, onBack: r, onClose: o, selectedChannelId: v, enableSelectedTextChannelInvite: I } = e,
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
                    locationObject: i,
                    channelId: v,
                    analyticsLocations: m,
                    commandOrigin: u.bB.APPLICATION_LAUNCHER
                })) &&
                    (o(),
                    null != f &&
                        A &&
                        N &&
                        (await x.sN({
                            activityChannelId: v,
                            invitedChannelId: f.id,
                            applicationId: C.application.id,
                            location: b.Sbl.ACTIVITY_SHELF
                        })));
        };
    return (0, a.jsx)(d.Gt, {
        value: m,
        children: (0, a.jsxs)('div', {
            className: D.footerContainer,
            children: [
                (0, a.jsx)(s.Clickable, {
                    onClick: r,
                    className: D.backToBrowse,
                    children: (0, a.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: j.Z.Messages.BACK
                    })
                }),
                null == v
                    ? (0, a.jsx)('div', {})
                    : (0, a.jsx)(s.Button, {
                          className: D.launchButton,
                          onClick: M,
                          color: S ? s.Button.Colors.GREEN : void 0,
                          fullWidth: !0,
                          children: S ? j.Z.Messages.EMBEDDED_ACTIVITIES_JOIN : j.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH
                      })
            ]
        })
    });
}
