n.d(t, {
    I: function () {
        return L;
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
    N = n(979651),
    O = n(6074),
    R = n(981631),
    C = n(23952);
let y = '14px';
function L(e) {
    let { emoji: t, className: n, animate: r = !0, hideTooltip: a, tooltipDelay: o } = e,
        l = T.Yk.useSetting(),
        d = null != t.id ? ':'.concat(t.name, ':') : h.ZP.translateSurrogatesToInlineEmoji(t.name),
        _ = {
            className: s()(C.emoji, n),
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
let b = 150,
    D = (e) => {
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
                delay: b,
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
                                className: s()(C.textRuler, t),
                                ref: o,
                                'aria-hidden': !0,
                                children: n
                            })
                        ]
                    })
            })
        );
    },
    M = (e) => {
        let { activities: t, applicationStream: n, className: r, textClassName: a, emojiClassName: o, animate: s = !0, hideTooltip: c = !1, hideEmoji: h = !1, user: T, hasQuest: b } = e,
            M = null != t ? t.find((e) => e.type === R.IIU.CUSTOM_STATUS) : null,
            P = (0, l.e7)([g.default], () => g.default.getId() === (null == T ? void 0 : T.id)),
            U = (0, l.e7)([m.Z], () => (P ? m.Z.getHangStatusActivity() : null != t ? t.find((e) => e.type === R.IIU.HANG_STATUS) : null)),
            w = (0, l.e7)([N.Z, S.Z], () => {
                var e;
                return null != U && null != T ? S.Z.getChannel(null === (e = N.Z.getVoiceStateForUser(T.id)) || void 0 === e ? void 0 : e.channelId) : null;
            }),
            { enableHangStatus: x } = p.n.useExperiment(
                {
                    guildId: null == w ? void 0 : w.guild_id,
                    location: 'ActivityStatus'
                },
                { autoTrackExposure: !1 }
            ),
            G = (0, f.Sl)(R.Ilk.BRAND_345),
            k = null,
            B = x && null != U && A.Z.can(R.Plq.CONNECT, w);
        B
            ? (k = (0, i.jsx)(I.Z, {
                  className: o,
                  hangStatusActivity: U
              }))
            : null != M &&
              null != M.emoji &&
              !h &&
              (k = (0, i.jsx)(L, {
                  emoji: M.emoji,
                  animate: s,
                  hideTooltip: c,
                  className: o
              }));
        let F = (0, E.aK)('activity-status-web'),
            Z = (0, l.e7)([v.Z], () => (null != T ? v.Z.getStatus(T.id) : null)),
            V = null !== Z && [R.Skl.OFFLINE, R.Skl.INVISIBLE].includes(Z),
            H = (0, _.Z)(t, n, void 0, B, F),
            Y = null == H ? void 0 : H.activityText,
            j = null != Y && '' !== Y;
        return V || (null == k && !j)
            ? null
            : (0, i.jsxs)('div', {
                  className: r,
                  children: [
                      k,
                      (0, i.jsx)(D, {
                          text: Y,
                          className: a
                      }),
                      b &&
                          (0, i.jsx)(u.QuestsIcon, {
                              size: 'custom',
                              className: C.questsIcon,
                              height: y,
                              width: y,
                              color: G.hex
                          }),
                      null != t && t.some((e) => (0, d.Z)(e, B))
                          ? (0, i.jsx)(O.Z, {
                                width: 16,
                                height: 16,
                                className: C.icon
                            })
                          : null
                  ]
              });
    };
t.Z = M;
