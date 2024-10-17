n.d(t, {
    DD: function () {
        return L;
    },
    Iv: function () {
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
    A = n(979651),
    N = n(6074),
    R = n(981631),
    O = n(23952);
let v = '14px';
function C(e) {
    let { emoji: t, className: n, animate: i = !0, hideTooltip: a, tooltipDelay: o } = e,
        c = m.Yk.useSetting(),
        d = null != t.id ? ':'.concat(t.name, ':') : f.ZP.translateSurrogatesToInlineEmoji(t.name),
        _ = {
            className: s()(O.emoji, n),
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
let L = (e) => {
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
                            className: s()(O.textRuler, t),
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
    let { activities: t, applicationStream: n, className: i, textClassName: a, emojiClassName: s, animate: u = !0, hideTooltip: f = !1, hideEmoji: m = !1, user: D, hasQuest: y } = e,
        b = null != t ? t.find((e) => e.type === R.IIU.CUSTOM_STATUS) : null,
        M = (0, o.e7)([T.default], () => T.default.getId() === (null == D ? void 0 : D.id)),
        P = (0, o.e7)([p.Z], () => (M ? p.Z.getHangStatusActivity() : null != t ? t.find((e) => e.type === R.IIU.HANG_STATUS) : null)),
        U = (0, o.e7)([A.Z, S.Z], () => {
            var e;
            return null != P && null != D ? S.Z.getChannel(null === (e = A.Z.getVoiceStateForUser(D.id)) || void 0 === e ? void 0 : e.channelId) : null;
        }),
        { enableHangStatus: w } = h.n.useExperiment(
            {
                guildId: null == U ? void 0 : U.guild_id,
                location: 'ActivityStatus'
            },
            { autoTrackExposure: !1 }
        ),
        x = (0, E.Sl)(R.Ilk.BRAND_345),
        G = null,
        k = w && null != P && g.Z.can(R.Plq.CONNECT, U);
    k
        ? (G = (0, r.jsx)(I.Z, {
              className: s,
              hangStatusActivity: P
          }))
        : null != b &&
          null != b.emoji &&
          !m &&
          (G = (0, r.jsx)(C, {
              emoji: b.emoji,
              animate: u,
              hideTooltip: f,
              className: s
          }));
    let B = (0, _.aK)('activity-status-web'),
        F = (0, d.Z)(t, n, void 0, k, B),
        V = null == F ? void 0 : F.activityText,
        H = null != V && '' !== V;
    return null != G || H
        ? (0, r.jsxs)('div', {
              className: i,
              children: [
                  G,
                  (0, r.jsx)(L, {
                      text: V,
                      className: a
                  }),
                  y &&
                      (0, r.jsx)(l.QuestsIcon, {
                          size: 'custom',
                          className: O.questsIcon,
                          height: v,
                          width: v,
                          color: x.hex
                      }),
                  null != t && t.some((e) => (0, c.Z)(e, k))
                      ? (0, r.jsx)(N.Z, {
                            width: 16,
                            height: 16,
                            className: O.icon
                        })
                      : null
              ]
          })
        : null;
};
