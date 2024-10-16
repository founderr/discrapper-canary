t.d(n, {
    Z: function () {
        return A;
    }
});
var i = t(735250);
t(470079);
var a = t(120356),
    s = t.n(a),
    l = t(442837),
    r = t(481060),
    o = t(543241),
    u = t(222677),
    d = t(995774),
    c = t(665906),
    E = t(695346),
    M = t(496675),
    g = t(768581),
    f = t(176354),
    m = t(981631),
    I = t(185923),
    _ = t(689938),
    Z = t(50455);
let S = ['slight_smile', 'frowning', 'smile', 'stuck_out_tongue', 'wink'];
function h(e) {
    var n;
    let { emoji: t, isFocused: a } = e,
        { animated: l, src: o, surrogates: u } = t;
    return (
        null == o && null != t.id
            ? (o = g.ZP.getEmojiURL({
                  id: t.id,
                  animated: !!l,
                  size: 20
              }))
            : null == o && (o = f.ZP.getURL(u)),
        (0, i.jsx)(
            r.Tooltip,
            {
                text: t.allNamesString,
                hideOnClick: !0,
                spacing: 16,
                forceOpen: a,
                children: (e) =>
                    (0, i.jsx)('div', {
                        'aria-label': _.Z.Messages.ADD_REACTION_NAMED.format({ emojiName: t.name }),
                        className: s()(Z.button, { [Z.focused]: a }),
                        ...e,
                        children:
                            null == o || '' === o.trim()
                                ? (0, i.jsx)('span', {
                                      className: s()('emoji', 'emoji-text', Z.icon),
                                      ...e,
                                      children: u
                                  })
                                : (0, i.jsx)('img', {
                                      className: Z.icon,
                                      src: o,
                                      alt: ''
                                  })
                    })
            },
            null !== (n = t.id) && void 0 !== n ? n : t.name
        )
    );
}
function A(e, n) {
    let t = (0, o.MZ)(n.guild_id).filter((e) => {
        var t;
        return (
            !(e.useSpriteSheet && S.indexOf(null !== (t = e.uniqueName) && void 0 !== t ? t : '') >= 0) &&
            !f.ZP.isEmojiPremiumLocked({
                emoji: e,
                channel: n,
                intention: I.Hz.REACTION
            })
        );
    });
    t.length > 4 && (t.length = 4);
    let a = E.nc.useSetting(),
        s = (0, c.$R)(n),
        g = (0, l.e7)([M.Z], () => a && s && (n.isPrivate() || M.Z.can(m.Plq.ADD_REACTIONS, n)), [n, s, a]),
        _ = (t) => {
            (0, u.rU)(n.id, e.id, (0, d.g1)(t), u.TW.MESSAGE_CONTEXT_MENU);
        };
    return g && t.length > 0
        ? (0, i.jsx)(r.MenuGroup, {
              className: Z.wrapper,
              children: t.map((e, n) => {
                  var t;
                  return (0, i.jsx)(
                      r.MenuItem,
                      {
                          id: 'quickreact-'.concat(null !== (t = e.id) && void 0 !== t ? t : n),
                          render: (n) => {
                              let { isFocused: t } = n;
                              return (0, i.jsx)(h, {
                                  emoji: e,
                                  isFocused: t
                              });
                          },
                          action: () => _(e),
                          dontCloseOnActionIfHoldingShiftKey: !0
                      },
                      n
                  );
              })
          })
        : null;
}
