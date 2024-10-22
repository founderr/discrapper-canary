n.d(t, {
    DD: function () {
        return y;
    },
    Iv: function () {
        return D;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(596454),
    c = n(122810),
    d = n(74433),
    _ = n(750881),
    E = n(44315),
    f = n(633302),
    h = n(574176),
    p = n(106301),
    I = n(223135),
    m = n(695346),
    T = n(314897),
    S = n(592125),
    g = n(496675),
    A = n(699516),
    N = n(979651),
    R = n(6074),
    O = n(626135),
    v = n(981631),
    C = n(23952);
let L = '14px';
function D(e) {
    let { emoji: t, className: n, animate: i = !0, hideTooltip: a, tooltipDelay: o } = e,
        c = m.Yk.useSetting(),
        d = null != t.id ? ':'.concat(t.name, ':') : f.ZP.translateSurrogatesToInlineEmoji(t.name),
        _ = {
            className: s()(C.emoji, n),
            emojiId: t.id,
            emojiName: t.name,
            autoplay: !0,
            animated: !!(t.animated && c && i)
        };
    return a
        ? (0, r.jsx)(u.Z, { ..._ })
        : (0, r.jsx)(l.Tooltip, {
              text: d,
              delay: o,
              children: (e) =>
                  (0, r.jsx)(u.Z, {
                      ...e,
                      ..._
                  })
          });
}
let y = (e) => {
    let { className: t, text: n } = e,
        a = i.useRef(null),
        o = i.useRef(null),
        [u, c] = i.useState(!1);
    return (
        i.useLayoutEffect(() => {
            let { current: e } = a,
                { current: t } = o;
            if (null != e && null != t) c(!(e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight));
        }, [n]),
        (0, r.jsx)(l.Tooltip, {
            text: u || null == n || '' === n ? null : n,
            delay: 150,
            'aria-label': !1,
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('div', {
                            ...e,
                            className: t,
                            ref: a,
                            children: n
                        }),
                        (0, r.jsx)('div', {
                            className: s()(C.textRuler, t),
                            ref: o,
                            'aria-hidden': !0,
                            children: n
                        })
                    ]
                })
        })
    );
};
t.ZP = (e) => {
    let { activities: t, applicationStream: n, className: a, textClassName: s, emojiClassName: u, animate: f = !0, hideTooltip: m = !1, hideEmoji: b = !1, user: M, hasQuest: P } = e,
        U = null != t ? t.find((e) => e.type === v.IIU.CUSTOM_STATUS) : null,
        w = (0, o.e7)([T.default], () => T.default.getId() === (null == M ? void 0 : M.id)),
        x = (0, o.e7)([p.Z], () => (w ? p.Z.getHangStatusActivity() : null != t ? t.find((e) => e.type === v.IIU.HANG_STATUS) : null)),
        G = (0, o.e7)([N.Z, S.Z], () => {
            var e;
            return null != x && null != M ? S.Z.getChannel(null === (e = N.Z.getVoiceStateForUser(M.id)) || void 0 === e ? void 0 : e.channelId) : null;
        }),
        { enableHangStatus: k } = h.n.useExperiment(
            {
                guildId: null == G ? void 0 : G.guild_id,
                location: 'ActivityStatus'
            },
            { autoTrackExposure: !1 }
        ),
        B = (0, E.Sl)(v.Ilk.BRAND_345),
        F = null,
        V = k && null != x && g.Z.can(v.Plq.CONNECT, G);
    V
        ? (F = (0, r.jsx)(I.Z, {
              className: u,
              hangStatusActivity: x
          }))
        : null != U &&
          null != U.emoji &&
          !b &&
          (F = (0, r.jsx)(D, {
              emoji: U.emoji,
              animate: f,
              hideTooltip: m,
              className: u
          }));
    let { blockeeExperimentEnabled: H, blockerExperimentEnabled: Z, analyticsEligible: Y } = (0, _.NR)('activity-status-web'),
        j = (0, o.e7)([A.Z], () => (null != M ? A.Z.getRelationshipType(M.id) : v.OGo.NONE)),
        W = (0, d.Z)(t, n, void 0, V, H),
        K = (0, d.Z)(t, n, void 0, V, !1);
    i.useEffect(() => {
        if (null != K && null == K.activity && null != n && Y) {
            var e;
            O.default.track(v.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: null == M ? void 0 : M.id,
                discoverable: null === (e = n.discoverable) || void 0 === e || e,
                surface: 'activity-status-web',
                relationship_type: j,
                treatment: (H && !1 === n.discoverable) || (Z && j === v.OGo.BLOCKED) ? _.h9.HIDE : _.h9.SHOW
            });
        }
    }, [H, Z, Y, M, n, K, j]);
    let z = null == W ? void 0 : W.activityText,
        q = null != z && '' !== z;
    return (Z && j === v.OGo.BLOCKED) || (null == F && !q)
        ? null
        : (0, r.jsxs)('div', {
              className: a,
              children: [
                  F,
                  (0, r.jsx)(y, {
                      text: z,
                      className: s
                  }),
                  P &&
                      (0, r.jsx)(l.QuestsIcon, {
                          size: 'custom',
                          className: C.questsIcon,
                          height: L,
                          width: L,
                          color: B.hex
                      }),
                  null != t && t.some((e) => (0, c.Z)(e, V))
                      ? (0, r.jsx)(R.Z, {
                            width: 16,
                            height: 16,
                            className: C.icon
                        })
                      : null
              ]
          });
};
