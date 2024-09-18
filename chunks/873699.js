t.d(n, {
    Z: function () {
        return m;
    }
}),
    t(724458),
    t(47120);
var i = t(735250),
    a = t(470079),
    s = t(442837),
    l = t(481060),
    r = t(668781),
    o = t(79390),
    u = t(222677),
    d = t(665906),
    c = t(496675),
    E = t(768581),
    M = t(176354),
    g = t(981631),
    f = t(689938);
function m(e, n) {
    let { reducedMotion: t } = a.useContext(l.AccessibilityPreferencesContext),
        E = (0, d.$R)(n),
        M = (0, s.e7)([c.Z], () => c.Z.can(g.Plq.MANAGE_MESSAGES, n) && E, [n, E]),
        m = e.reactions.reduce((e, n) => {
            var t;
            return (null === (t = n.count_details) || void 0 === t ? void 0 : t.vote) != null || null != e.find((e) => (null != e.id && e.id === n.emoji.id) || e.name === n.emoji.name) ? e : [...e, n.emoji];
        }, []),
        _ = (t, i) => {
            t.shiftKey
                ? (0, u.$E)(n.id, e.id, i)
                : r.Z.show({
                      title: f.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_TITLE,
                      body: f.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_BODY,
                      confirmText: f.Z.Messages.YES_TEXT,
                      cancelText: f.Z.Messages.NO_TEXT,
                      onConfirm: () => {
                          (0, u.$E)(n.id, e.id, i);
                      }
                  });
        };
    return !M || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, o.eQ)(e))
        ? null
        : (0, i.jsx)(l.MenuItem, {
              id: 'remove-emoji-reactions',
              label: f.Z.Messages.REMOVE_EMOJI_REACTIONS,
              color: 'danger',
              children: m.map((e) => {
                  var n, a;
                  return (0, i.jsx)(
                      l.MenuItem,
                      {
                          id: 'remove-emoji-reactions-'.concat(null !== (n = e.name) && void 0 !== n ? n : e.id),
                          label: null == e.id ? e.name : ':'.concat(e.name, ':'),
                          action: (n) => _(n, e),
                          icon: (n) =>
                              (0, i.jsx)(I, {
                                  ...n,
                                  reducedMotionEnabled: t.enabled,
                                  emoji: e
                              }),
                          dontCloseOnActionIfHoldingShiftKey: !0
                      },
                      null !== (a = e.name) && void 0 !== a ? a : e.id
                  );
              })
          });
}
function I(e) {
    var n;
    let { emoji: t, reducedMotionEnabled: a, className: s = '', isFocused: l = !1 } = e;
    return (0, i.jsx)('img', {
        className: s,
        src:
            null != t.id
                ? E.ZP.getEmojiURL({
                      id: t.id,
                      animated: t.animated && (!a || l),
                      size: 18
                  })
                : M.ZP.getURL(null !== (n = t.name) && void 0 !== n ? n : ''),
        alt: ''
    });
}
