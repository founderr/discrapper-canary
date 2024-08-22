n.d(t, {
    Z: function () {
        return D;
    },
    q: function () {
        return L;
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
    g = n(264165),
    m = n(70097),
    v = n(740492),
    p = n(592125),
    I = n(430824),
    f = n(496675),
    x = n(944486),
    _ = n(566620),
    h = n(317381),
    C = n(122613),
    T = n(678173),
    E = n(696068),
    S = n(361213),
    b = n(778569),
    N = n(412019),
    j = n(981631),
    A = n(689938),
    M = n(617010);
function Z(e) {
    return (0, l.e7)(
        [I.Z, f.Z],
        () => {
            let t = I.Z.getGuild(e);
            return null != t && f.Z.can(j.Plq.CREATE_INSTANT_INVITE, t);
        },
        [e]
    );
}
let y = ['embedded_background'];
function D(e) {
    var t, n;
    let { applicationId: c, guildId: d, selectedChannelId: u, setSelectedChannelId: f, enableSelectedTextChannelInvite: h } = e,
        C = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        j = (0, T.T)(null != d ? d : null, null != c ? c : null),
        [D, L] = i.useState(h && !v.ZP.disableInviteWithTextChannelActivityLaunch),
        O = (0, E.F)(d);
    i.useEffect(() => {
        var e;
        _.w1({ guildId: d }), f(null !== (e = (0, E.d)({ guildId: d })) && void 0 !== e ? e : void 0);
    }, [d, f]);
    let B = null == j ? void 0 : j.activity.activity_preview_video_asset_id,
        V = null != B ? (0, S.Z)(null !== (t = null == j ? void 0 : j.application.id) && void 0 !== t ? t : '', B) : null,
        { url: R } = (0, b.Z)({
            applicationId: null !== (n = null == j ? void 0 : j.application.id) && void 0 !== n ? n : '',
            size: 1024,
            names: y
        }),
        k = (0, l.e7)([I.Z], () => I.Z.getGuild(d)),
        P = (0, l.e7)([p.Z, x.Z], () => p.Z.getChannel(x.Z.getChannelId())),
        H = Z(null != d ? d : void 0);
    if ((null == j ? void 0 : j.application) == null || null == k) return null;
    let F = (null == P ? void 0 : P.name) == null || (null == P ? void 0 : P.name) === '' ? A.Z.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME : '#'.concat(P.name);
    return (0, a.jsxs)(s.Scroller, {
        className: M.scroll,
        children: [
            null != V || null != R
                ? (0, a.jsx)(g.Z, {
                      aspectRatio: 16 / 9,
                      className: M.imageContainer,
                      children: (0, a.jsx)(m.Z, {
                          className: M.video,
                          src: V,
                          loop: !0,
                          autoPlay: !C,
                          poster: R,
                          muted: !0
                      })
                  })
                : null,
            (0, a.jsxs)('div', {
                className: M.descriptionArea,
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: 'heading-xl/semibold',
                        children: null == j ? void 0 : j.application.name
                    }),
                    (0, a.jsx)(s.Text, {
                        className: M.descriptionAreaSubtext,
                        variant: 'text-md/normal',
                        children: null == j ? void 0 : j.application.description
                    })
                ]
            }),
            (0, a.jsx)(s.Select, {
                placeholder: A.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                optionClassName: M.__invalid_option,
                options: O,
                isSelected: (e) => {
                    let { channel: t } = e;
                    return t.id === u;
                },
                select: (e) => {
                    let { channel: t } = e;
                    return f(t.id);
                },
                serialize: (e) => {
                    let { channel: t } = e;
                    return t.id;
                },
                renderOptionValue: () => {
                    let e = O.find((e) => e.value.channel.id === u);
                    return null == e
                        ? null
                        : (0, a.jsx)(N.O, {
                              channel: e.value.channel,
                              users: e.value.users
                          });
                },
                renderOptionLabel: (e) => {
                    let {
                        value: { channel: t, users: n }
                    } = e;
                    return (0, a.jsx)(N.O, {
                        channel: t,
                        users: n
                    });
                }
            }),
            H && h
                ? (0, a.jsxs)(s.Clickable, {
                      className: M.checkboxContainer,
                      onClick: () => {
                          let e = !D;
                          r.ZP.updatedUnsyncedSettings({ disableInviteWithTextChannelActivityLaunch: !e }), L(e);
                      },
                      children: [
                          (0, a.jsx)(s.Checkbox, {
                              type: s.Checkbox.Types.INVERTED,
                              className: M.checkbox,
                              value: D,
                              displayOnly: !0
                          }),
                          (0, a.jsxs)(s.Text, {
                              variant: 'text-sm/normal',
                              children: [A.Z.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE, ' ', (0, a.jsx)('strong', { children: F })]
                          })
                      ]
                  })
                : null
        ]
    });
}
function L(e) {
    let { applicationId: t, guildId: n, locationObject: i, onBack: r, onClose: o, selectedChannelId: g, enableSelectedTextChannelInvite: m } = e,
        { analyticsLocations: I } = (0, d.ZP)(c.Z.ACTIVITY_CHANNEL_SELECTOR),
        f = (0, T.T)(null != n ? n : null, null != t ? t : null),
        E = (0, l.e7)([p.Z, x.Z], () => p.Z.getChannel(x.Z.getChannelId())),
        S = (0, l.e7)([v.ZP], () => m && !v.ZP.disableInviteWithTextChannelActivityLaunch),
        b = (0, l.e7)([h.ZP], () => null != g && '' !== g && h.ZP.getEmbeddedActivitiesForChannel(g).some((e) => e.applicationId === t)),
        N = Z(n),
        y = async () => {
            var e;
            if (null != g && '' !== g && null != f && null != n && '' !== n)
                (await (0, C.Z)({
                    targetApplicationId: null === (e = f.application) || void 0 === e ? void 0 : e.id,
                    locationObject: i,
                    channelId: g,
                    analyticsLocations: I,
                    commandOrigin: u.bB.APPLICATION_LAUNCHER
                })) &&
                    (o(),
                    null != E &&
                        N &&
                        S &&
                        (await _.sN({
                            activityChannelId: g,
                            invitedChannelId: E.id,
                            applicationId: f.application.id,
                            location: j.Sbl.ACTIVITY_SHELF
                        })));
        };
    return (0, a.jsx)(d.Gt, {
        value: I,
        children: (0, a.jsxs)('div', {
            className: M.footerContainer,
            children: [
                (0, a.jsx)(s.Clickable, {
                    onClick: r,
                    className: M.backToBrowse,
                    children: (0, a.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: A.Z.Messages.BACK
                    })
                }),
                null == g
                    ? (0, a.jsx)('div', {})
                    : (0, a.jsx)(s.Button, {
                          className: M.launchButton,
                          onClick: y,
                          color: b ? s.Button.Colors.GREEN : void 0,
                          fullWidth: !0,
                          children: b ? A.Z.Messages.EMBEDDED_ACTIVITIES_JOIN : A.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH
                      })
            ]
        })
    });
}
