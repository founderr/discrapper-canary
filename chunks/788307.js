n.d(t, {
    I: function () {
        return D;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(596454),
    d = n(122810),
    _ = n(74433),
    E = n(750881),
    f = n(44315),
    h = n(633302),
    p = n(574176),
    m = n(106301),
    I = n(223135),
    T = n(695346),
    g = n(314897),
    S = n(592125),
    A = n(496675),
    v = n(158776),
    N = n(699516),
    O = n(979651),
    R = n(6074),
    C = n(626135),
    y = n(981631),
    L = n(23952);
let b = '14px';
function D(e) {
    let { emoji: t, className: n, animate: r = !0, hideTooltip: a, tooltipDelay: o } = e,
        l = T.Yk.useSetting(),
        d = null != t.id ? ':'.concat(t.name, ':') : h.ZP.translateSurrogatesToInlineEmoji(t.name),
        _ = {
            className: s()(L.emoji, n),
            emojiId: t.id,
            emojiName: t.name,
            autoplay: !0,
            animated: !!(t.animated && l && r)
        };
    return a
        ? (0, i.jsx)(c.Z, { ..._ })
        : (0, i.jsx)(u.Tooltip, {
              text: d,
              delay: o,
              children: (e) =>
                  (0, i.jsx)(c.Z, {
                      ...e,
                      ..._
                  })
          });
}
let M = 150,
    P = (e) => {
        let { className: t, text: n } = e,
            r = a.useRef(null),
            o = a.useRef(null),
            [l, c] = a.useState(!1);
        return (
            a.useLayoutEffect(() => {
                let { current: e } = r,
                    { current: t } = o;
                if (null != e && null != t) c(!(e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight));
            }, [n]),
            (0, i.jsx)(u.Tooltip, {
                text: l || null == n || '' === n ? null : n,
                delay: M,
                'aria-label': !1,
                children: (e) =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', {
                                ...e,
                                className: t,
                                ref: r,
                                children: n
                            }),
                            (0, i.jsx)('div', {
                                className: s()(L.textRuler, t),
                                ref: o,
                                'aria-hidden': !0,
                                children: n
                            })
                        ]
                    })
            })
        );
    },
    U = (e) => {
        let { activities: t, applicationStream: n, className: r, textClassName: o, emojiClassName: s, animate: c = !0, hideTooltip: h = !1, hideEmoji: T = !1, user: M, hasQuest: U } = e,
            w = null != t ? t.find((e) => e.type === y.IIU.CUSTOM_STATUS) : null,
            x = (0, l.e7)([g.default], () => g.default.getId() === (null == M ? void 0 : M.id)),
            G = (0, l.e7)([m.Z], () => (x ? m.Z.getHangStatusActivity() : null != t ? t.find((e) => e.type === y.IIU.HANG_STATUS) : null)),
            k = (0, l.e7)([O.Z, S.Z], () => {
                var e;
                return null != G && null != M ? S.Z.getChannel(null === (e = O.Z.getVoiceStateForUser(M.id)) || void 0 === e ? void 0 : e.channelId) : null;
            }),
            { enableHangStatus: B } = p.n.useExperiment(
                {
                    guildId: null == k ? void 0 : k.guild_id,
                    location: 'ActivityStatus'
                },
                { autoTrackExposure: !1 }
            ),
            F = (0, f.Sl)(y.Ilk.BRAND_345),
            Z = null,
            V = B && null != G && A.Z.can(y.Plq.CONNECT, k);
        V
            ? (Z = (0, i.jsx)(I.Z, {
                  className: s,
                  hangStatusActivity: G
              }))
            : null != w &&
              null != w.emoji &&
              !T &&
              (Z = (0, i.jsx)(D, {
                  emoji: w.emoji,
                  animate: c,
                  hideTooltip: h,
                  className: s
              }));
        let H = (0, E.Q9)('activity-status-web'),
            Y = (0, l.e7)([N.Z], () => (null != M ? N.Z.getRelationshipType(M.id) : y.OGo.NONE)),
            j = (0, l.e7)([v.Z], () => (null != M ? v.Z.getStatus(M.id) : null)),
            W = null !== j && [y.Skl.OFFLINE, y.Skl.INVISIBLE].includes(j),
            K = (0, _.Z)(t, n, void 0, V, H),
            z = (0, _.Z)(t, n, void 0, V, !1);
        a.useEffect(() => {
            if (null != z && null == z.activity && null != n) {
                var e;
                C.default.track(y.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                    activity_user_id: null == M ? void 0 : M.id,
                    discoverable: null === (e = n.discoverable) || void 0 === e || e,
                    surface: 'activity-status-web',
                    relationship_type: Y,
                    treatment: H && !1 === n.discoverable ? E.h9.HIDE : E.h9.SHOW
                });
            }
        }, [H, M, n, z, Y]);
        let q = null == K ? void 0 : K.activityText,
            Q = null != q && '' !== q;
        return W || (null == Z && !Q)
            ? null
            : (0, i.jsxs)('div', {
                  className: r,
                  children: [
                      Z,
                      (0, i.jsx)(P, {
                          text: q,
                          className: o
                      }),
                      U &&
                          (0, i.jsx)(u.QuestsIcon, {
                              size: 'custom',
                              className: L.questsIcon,
                              height: b,
                              width: b,
                              color: F.hex
                          }),
                      null != t && t.some((e) => (0, d.Z)(e, V))
                          ? (0, i.jsx)(R.Z, {
                                width: 16,
                                height: 16,
                                className: L.icon
                            })
                          : null
                  ]
              });
    };
t.Z = U;
