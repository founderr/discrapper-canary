var r = n(653041);
var i = n(47120);
var a = n(735250);
n(470079);
var o = n(442837),
    s = n(692547),
    l = n(481060),
    u = n(475179),
    c = n(519938),
    d = n(317381),
    _ = n(812206),
    E = n(358221),
    f = n(199902),
    h = n(366050),
    p = n(594174),
    m = n(981631),
    I = n(354459),
    T = n(689938),
    g = n(497041);
function S(e) {
    let { closePopout: t, idle: n, pipWindows: r, voiceChannelId: i, onSelect: s } = e;
    n && t();
    let p = (0, o.e7)([d.ZP], () => d.ZP.getSelfEmbeddedActivityForChannel(i)),
        g = (0, o.e7)([h.Z], () => h.Z.pipWindow),
        S = (0, o.e7)([E.Z], () => E.Z.getSelectedParticipant(i)),
        A = (0, o.e7)([E.Z], () => E.Z.getStreamParticipants(i));
    function v(e) {
        (null == g ? void 0 : g.id) !== e.pipWindow.id && (0, c.k3)(e.pipWindow.id);
        let t = e.participant;
        null != t && t.type !== I.fO.ACTIVITY && u.Z.selectParticipant(i, t.id);
    }
    function N(e) {
        if (e.pipWindow.component === m.NYg.EMBED_IFRAME && null != p) {
            var t;
            let e = null === (t = _.Z.getApplication(p.applicationId)) || void 0 === t ? void 0 : t.name;
            return null == e ? T.Z.Messages.SWITCH_PIP_TO_ACTIVITY : T.Z.Messages.SWITCH_PIP_TO_ACTIVITY_NAME.format({ activityName: e });
        }
        return null == e.participant || e.participant.type !== I.fO.STREAM ? T.Z.Messages.SWITCH_PIP_TO_GO_LIVE : T.Z.Messages.SWITCH_PIP_TO_USER_STREAM.format({ username: e.participant.userNick });
    }
    function O() {
        let e = [],
            t = r.find((e) => e.component === m.NYg.VIDEO);
        return (
            null != t &&
                A.forEach((n) => {
                    let r = f.Z.getActiveStreamForApplicationStream(n.stream),
                        i = n.id === (null == S ? void 0 : S.id) && (null == g ? void 0 : g.id) === t.id;
                    null != r &&
                        !i &&
                        e.push({
                            pipWindow: t,
                            participant: n,
                            stream: r
                        });
                }),
            e
        );
    }
    function R(e) {
        var t;
        let n = e.pipWindow.id,
            r = null === (t = e.participant) || void 0 === t ? void 0 : t.id,
            i = N(e),
            o = ''.concat(n).concat(null != r ? r : '');
        return (0, a.jsx)(
            l.MenuItem,
            {
                id: o,
                label: i,
                action: () => v(e)
            },
            o
        );
    }
    return (0, a.jsx)(l.Menu, {
        navId: 'pip-menu',
        'aria-label': 'switch PIP',
        onClose: t,
        onSelect: s,
        children: O().map(R)
    });
}
function A(e) {
    let { voiceChannelId: t, idle: n } = e,
        r = Array.from((0, o.e7)([h.Z], () => h.Z.pipWindows).values()).filter((e) => e.component !== m.NYg.EMBED_IFRAME),
        i = (0, o.Wu)([f.Z], () => f.Z.getAllActiveStreamsForChannel(t)).filter((e) => {
            var n;
            return e.ownerId !== (null === (n = p.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && e.channelId === t;
        }),
        u = (1 === r.length && r[0].component === m.NYg.EMBED_IFRAME) || 0 === i.length,
        c = 1 === r.length && i.length <= 1;
    return u || c
        ? null
        : (0, a.jsx)(l.Popout, {
              position: 'bottom',
              renderPopout: (e) =>
                  (0, a.jsx)(S, {
                      voiceChannelId: t,
                      pipWindows: r,
                      idle: n,
                      ...e
                  }),
              children: (e) =>
                  (0, a.jsx)(l.Clickable, {
                      className: g.menuIcon,
                      ...e,
                      children: (0, a.jsx)(l.MoreVerticalIcon, {
                          size: 'md',
                          color: s.Z.unsafe_rawColors.WHITE_500.css
                      })
                  })
          });
}
t.Z = A;
