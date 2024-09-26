n.d(t, {
    Z: function () {
        return v;
    }
});
var i = n(735250);
n(470079);
var s = n(512722),
    a = n.n(s),
    l = n(442837),
    r = n(481060),
    o = n(40851),
    c = n(358221),
    u = n(431368),
    d = n(167675),
    h = n(418469),
    m = n(673539),
    p = n(218035),
    _ = n(775666),
    f = n(423589),
    E = n(592125),
    g = n(496675),
    C = n(881824),
    I = n(146085),
    T = n(427679),
    x = n(354459),
    S = n(689938);
function v(e) {
    let { channelId: t, closePopout: n, appContext: s, onSelect: v } = e,
        N = (0, l.e7)([c.Z], () => c.Z.getSelectedParticipant(t)),
        A = (null == N ? void 0 : N.type) === x.fO.STREAM ? N.stream : null,
        Z = (0, m.Z)(t);
    return (0, i.jsxs)(r.Menu, {
        navId: 'stage-channel-call-overflow-popout',
        onClose: n,
        'aria-label': S.Z.Messages.CHANNEL_CALL_OVERFLOW_MENU_LABEL,
        onSelect: v,
        children: [
            (function (e) {
                let t = (0, l.e7)([E.Z], () => E.Z.getChannel(e), [e]),
                    n = (0, l.e7)([g.Z], () => g.Z.can(I.yP, t)),
                    s = (0, l.e7)([T.Z], () => T.Z.getStageInstanceByChannel(e), [e]),
                    a = (0, o.bp)(),
                    c = () => null != t && (0, C.T)(t, a);
                return (null == t ? void 0 : t.isGuildStageVoice()) && n
                    ? null != s
                        ? (0, i.jsx)(r.MenuItem, {
                              id: 'edit-stage',
                              label: S.Z.Messages.EDIT_STAGE_SUBTITLE,
                              action: c
                          })
                        : (0, i.jsx)(r.MenuItem, {
                              id: 'start-stage',
                              label: S.Z.Messages.STAGE_CHANNEL_START_TITLE,
                              action: c
                          })
                    : null;
            })(t),
            (function (e) {
                let t = (0, l.e7)([E.Z], () => E.Z.getChannel(e), [e]);
                a()(null != t, 'useNotificationSettingsItem: channel cannot be undefined');
                let n = (0, f.Mn)('StageChannelCallOverflowMenu'),
                    i = (0, _.ZP)(t),
                    s = (0, p.Z)(t);
                return n ? i : s;
            })(t),
            (0, d.Z)(),
            (0, u.Z)(t),
            Z,
            (0, h.Z)(A, s)
        ]
    });
}
