n.d(t, {
    Z: function () {
        return A;
    }
});
var r = n(735250);
n(470079);
var i = n(399606),
    a = n(704215),
    s = n(481060),
    o = n(596454),
    l = n(607070),
    u = n(605236),
    c = n(880949),
    d = n(28546),
    _ = n(65029),
    E = n(430824),
    f = n(556296),
    h = n(451478),
    p = n(358085),
    I = n(13140),
    m = n(763296),
    T = n(981631),
    S = n(689938),
    g = n(298763);
function A(e) {
    let { soundboardSound: t, closePicker: A } = e,
        N = (0, d.Iu)((e) => e.searchQuery),
        O = (0, i.e7)([m.Z], () => null != t && m.Z.isFavoriteSound(t.soundId)),
        R = (0, i.e7)([E.Z], () => E.Z.getGuild(null == t ? void 0 : t.guildId)),
        v = (0, i.e7)([l.Z], () => l.Z.useReducedMotion, []),
        C = (0, i.e7)([h.Z], () => h.Z.isFocused()),
        L = (0, i.e7)([f.Z], () => f.Z.getKeybindForAction(T.kg4.SOUNDBOARD_HOLD));
    if (null != t && N.length > 0)
        return (0, r.jsx)(_.Z, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, r.jsx)(o.Z, {
                          emojiId: t.emojiId,
                          emojiName: t.emojiName,
                          className: g.emoji
                      })
                    : (0, r.jsx)(s.ImageIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: g.emoji
                      }),
            graphicSecondary:
                null != R
                    ? (0, r.jsx)(c.Z, {
                          guild: R,
                          shouldAnimate: !v && C
                      })
                    : null,
            titlePrimary: t.name,
            titleSecondary: null == R ? void 0 : R.name,
            isFavorite: O
        });
    let y = () => {
            A(),
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await n.e('58120').then(n.bind(n, 355453));
                    return (t) => (0, r.jsx)(e, { ...t });
                });
        },
        D = (0, u.un)(a.z.SOUNDBOARD_KEYBIND_TIP),
        b =
            null != L && (0, p.isWindows)() && !D
                ? S.Z.Messages.SOUNDBOARD_KEYBIND_HINT_NO_POPOUT_WHEEL_SUPPORT.format({
                      keybind: (0, I.BB)(L.shortcut, !0),
                      openSettingsHook: (e, t) =>
                          (0, r.jsx)(
                              s.Anchor,
                              {
                                  onClick: y,
                                  children: e
                              },
                              t
                          )
                  })
                : null;
    return null == b
        ? null
        : (0, r.jsxs)('div', {
              className: g.keybindHint,
              children: [
                  (0, r.jsx)(s.CircleWarningIcon, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: 'currentColor',
                      className: g.warningIcon
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-normal',
                      className: g.keybindHintText,
                      children: b
                  }),
                  (0, r.jsx)(s.Clickable, {
                      className: g.closeButton,
                      onClick: () => (0, u.EW)(a.z.SOUNDBOARD_KEYBIND_TIP),
                      children: (0, r.jsx)(s.XSmallIcon, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
              ]
          });
}
