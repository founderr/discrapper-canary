n.d(t, {
    I: function () {
        return C;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(596454),
    c = n(122810),
    d = n(74433),
    _ = n(44315),
    E = n(633302),
    f = n(574176),
    h = n(106301),
    p = n(223135),
    I = n(695346),
    m = n(314897),
    T = n(592125),
    S = n(496675),
    g = n(158776),
    A = n(979651),
    N = n(6074),
    O = n(981631),
    R = n(23952);
let v = '14px';
function C(e) {
    let { emoji: t, className: n, animate: i = !0, hideTooltip: a, tooltipDelay: o } = e,
        c = I.Yk.useSetting(),
        d = null != t.id ? ':'.concat(t.name, ':') : E.ZP.translateSurrogatesToInlineEmoji(t.name),
        _ = {
            className: s()(R.emoji, n),
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
                            className: s()(R.textRuler, t),
                            ref: o,
                            'aria-hidden': !0,
                            children: n
                        })
                    ]
                })
        })
    );
};
t.Z = (e) => {
    var t;
    let { activities: n, applicationStream: i, className: a, textClassName: s, emojiClassName: u, animate: E = !0, hideTooltip: I = !1, hideEmoji: L = !1, user: D, hasQuest: b } = e,
        M = null != n ? n.find((e) => e.type === O.IIU.CUSTOM_STATUS) : null,
        P = (0, o.e7)([m.default], () => m.default.getId() === (null == D ? void 0 : D.id)),
        U = (0, o.e7)([h.Z], () => (P ? h.Z.getHangStatusActivity() : null != n ? n.find((e) => e.type === O.IIU.HANG_STATUS) : null)),
        w = (0, o.e7)([A.Z, T.Z], () => {
            var e;
            return null != U && null != D ? T.Z.getChannel(null === (e = A.Z.getVoiceStateForUser(D.id)) || void 0 === e ? void 0 : e.channelId) : null;
        }),
        { enableHangStatus: x } = f.n.useExperiment(
            {
                guildId: null == w ? void 0 : w.guild_id,
                location: 'ActivityStatus'
            },
            { autoTrackExposure: !1 }
        ),
        G = (0, _.Sl)(O.Ilk.BRAND_345),
        k = null,
        B = x && null != U && S.Z.can(O.Plq.CONNECT, w);
    B
        ? (k = (0, r.jsx)(p.Z, {
              className: u,
              hangStatusActivity: U
          }))
        : null != M &&
          null != M.emoji &&
          !L &&
          (k = (0, r.jsx)(C, {
              emoji: M.emoji,
              animate: E,
              hideTooltip: I,
              className: u
          }));
    let F = (0, o.e7)([g.Z], () => (null != D ? g.Z.getStatus(D.id) : null)),
        V = null !== F && [O.Skl.OFFLINE, O.Skl.INVISIBLE].includes(F),
        H = null === (t = (0, d.Z)(n, i, void 0, B)) || void 0 === t ? void 0 : t.activityText,
        Z = null != H && H.length > 0;
    return V || (null == k && !Z)
        ? null
        : (0, r.jsxs)('div', {
              className: a,
              children: [
                  k,
                  (0, r.jsx)(y, {
                      text: H,
                      className: s
                  }),
                  b &&
                      (0, r.jsx)(l.QuestsIcon, {
                          size: 'custom',
                          className: R.questsIcon,
                          height: v,
                          width: v,
                          color: G.hex
                      }),
                  null != n && n.some((e) => (0, c.Z)(e, B))
                      ? (0, r.jsx)(N.Z, {
                            width: 16,
                            height: 16,
                            className: R.icon
                        })
                      : null
              ]
          });
};
