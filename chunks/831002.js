n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(200651);
n(192379);
var s = n(512722),
    a = n.n(s),
    l = n(442837),
    r = n(481060),
    o = n(40851),
    c = n(358221),
    u = n(431368),
    d = n(167675),
    h = n(418469),
    p = n(673539),
    m = n(218035),
    _ = n(775666),
    f = n(423589),
    E = n(592125),
    g = n(496675),
    C = n(881824),
    I = n(146085),
    T = n(427679),
    x = n(354459),
    v = n(689938);
function S(e) {
    let { channelId: t, closePopout: n, appContext: s, onSelect: S } = e,
        N = (0, l.e7)([c.Z], () => c.Z.getSelectedParticipant(t)),
        A = (null == N ? void 0 : N.type) === x.fO.STREAM ? N.stream : null,
        Z = (0, p.Z)(t);
    return (0, i.jsxs)(r.Menu, {
        navId: 'stage-channel-call-overflow-popout',
        onClose: n,
        'aria-label': v.Z.Messages.CHANNEL_CALL_OVERFLOW_MENU_LABEL,
        onSelect: S,
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
                              label: v.Z.Messages.EDIT_STAGE_SUBTITLE,
                              action: c
                          })
                        : (0, i.jsx)(r.MenuItem, {
                              id: 'start-stage',
                              label: v.Z.Messages.STAGE_CHANNEL_START_TITLE,
                              action: c
                          })
                    : null;
            })(t),
            (function (e) {
                let t = (0, l.e7)([E.Z], () => E.Z.getChannel(e), [e]);
                a()(null != t, 'useNotificationSettingsItem: channel cannot be undefined');
                let n = (0, f.Mn)('StageChannelCallOverflowMenu'),
                    i = (0, _.ZP)(t),
                    s = (0, m.Z)(t);
                return n ? i : s;
            })(t),
            (0, d.Z)(),
            (0, u.Z)(t),
            Z,
            (0, h.Z)(A, s)
        ]
    });
}
