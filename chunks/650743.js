n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(200651);
n(192379);
var i = n(399606),
    a = n(704215),
    s = n(481060),
    o = n(596454),
    l = n(607070),
    u = n(605236),
    c = n(880949),
    d = n(28546),
    f = n(65029),
    _ = n(430824),
    p = n(556296),
    h = n(451478),
    m = n(358085),
    g = n(13140),
    E = n(763296),
    v = n(981631),
    b = n(388032),
    I = n(298763);
function T(e) {
    let { soundboardSound: t, closePicker: T } = e,
        S = (0, d.Iu)((e) => e.searchQuery),
        y = (0, i.e7)([E.Z], () => null != t && E.Z.isFavoriteSound(t.soundId)),
        A = (0, i.e7)([_.Z], () => _.Z.getGuild(null == t ? void 0 : t.guildId)),
        N = (0, i.e7)([l.Z], () => l.Z.useReducedMotion, []),
        C = (0, i.e7)([h.Z], () => h.Z.isFocused()),
        R = (0, i.e7)([p.Z], () => p.Z.getKeybindForAction(v.kg4.SOUNDBOARD_HOLD));
    if (null != t && S.length > 0)
        return (0, r.jsx)(f.Z, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, r.jsx)(o.Z, {
                          emojiId: t.emojiId,
                          emojiName: t.emojiName,
                          className: I.emoji
                      })
                    : (0, r.jsx)(s.ImageIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: I.emoji
                      }),
            graphicSecondary:
                null != A
                    ? (0, r.jsx)(c.Z, {
                          guild: A,
                          shouldAnimate: !N && C
                      })
                    : null,
            titlePrimary: t.name,
            titleSecondary: null == A ? void 0 : A.name,
            isFavorite: y
        });
    let O = () => {
            T(),
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await n.e('58120').then(n.bind(n, 355453));
                    return (t) => (0, r.jsx)(e, { ...t });
                });
        },
        D = (0, u.un)(a.z.SOUNDBOARD_KEYBIND_TIP),
        L =
            null != R && (0, m.isWindows)() && !D
                ? b.intl.format(b.t.udMTtr, {
                      keybind: (0, g.BB)(R.shortcut, !0),
                      openSettingsHook: (e, t) =>
                          (0, r.jsx)(
                              s.Anchor,
                              {
                                  onClick: O,
                                  children: e
                              },
                              t
                          )
                  })
                : null;
    return null == L
        ? null
        : (0, r.jsxs)('div', {
              className: I.keybindHint,
              children: [
                  (0, r.jsx)(s.CircleWarningIcon, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: 'currentColor',
                      className: I.warningIcon
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-normal',
                      className: I.keybindHintText,
                      children: L
                  }),
                  (0, r.jsx)(s.Clickable, {
                      className: I.closeButton,
                      onClick: () => (0, u.EW)(a.z.SOUNDBOARD_KEYBIND_TIP),
                      children: (0, r.jsx)(s.XSmallIcon, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
              ]
          });
}
