t.d(n, {
    Z: function () {
        return Z;
    }
});
var i = t(735250),
    a = t(470079),
    l = t(442837),
    r = t(481060),
    s = t(543241),
    o = t(222677),
    u = t(995774),
    d = t(665906),
    c = t(695346),
    E = t(496675),
    M = t(768581),
    I = t(585483),
    m = t(176354),
    _ = t(981631),
    g = t(185923),
    f = t(689938);
function Z(e, n) {
    let { reducedMotion: t } = a.useContext(r.AccessibilityPreferencesContext),
        M = (0, d.$R)(n),
        Z = (0, l.e7)([E.Z], () => (n.isPrivate() || E.Z.can(_.Plq.ADD_REACTIONS, n)) && M, [n, M]),
        T = (0, s.MZ)(n.getGuildId());
    if (!c.nc.getSetting() || !Z || e.type === _.uaV.GUILD_INVITE_REMINDER) return null;
    let v = T.filter(
        (e) =>
            !m.ZP.isEmojiFilteredOrLocked({
                emoji: e,
                channel: n,
                intention: g.Hz.REACTION
            })
    )
        .slice(0, 12)
        .map((a, l) => {
            var s, d;
            return (0, i.jsx)(
                r.MenuItem,
                {
                    color: 'default',
                    id: null !== (d = null !== (s = a.id) && void 0 !== s ? s : a.optionallyDiverseSequence) && void 0 !== d ? d : a.name,
                    label: ':'.concat(a.name, ':'),
                    icon: (e) =>
                        (0, i.jsx)(S, {
                            ...e,
                            reducedMotionEnabled: t.enabled,
                            emoji: a
                        }),
                    action: () => {
                        (0, o.rU)(n.id, e.id, (0, u.g1)(a), o.TW.MESSAGE_CONTEXT_MENU);
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0
                },
                l
            );
        });
    return (0, i.jsx)(r.MenuItem, {
        id: 'add-reaction',
        label: f.Z.Messages.ADD_REACTION,
        action: () => {
            I.S.dispatchKeyed(_.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
        },
        color: 'default',
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                v,
                (0, i.jsx)(r.MenuSeparator, {}),
                (0, i.jsx)(r.MenuItem, {
                    color: 'default',
                    id: 'other-reactions',
                    label: f.Z.Messages.VIEW_MORE,
                    icon: r.ReactionIcon,
                    action: () => {
                        I.S.dispatchKeyed(_.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                    }
                })
            ]
        })
    });
}
function S(e) {
    var n;
    let { emoji: t, reducedMotionEnabled: a, className: l = '', isFocused: r = !1 } = e;
    return (0, i.jsx)('img', {
        className: l,
        src:
            null != t.id
                ? M.ZP.getEmojiURL({
                      id: t.id,
                      animated: t.animated && (!a || r),
                      size: 18
                  })
                : m.ZP.getURL(null !== (n = t.optionallyDiverseSequence) && void 0 !== n ? n : ''),
        alt: ''
    });
}
