n(653041), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(692547),
    s = n(481060),
    o = n(475179),
    l = n(519938),
    u = n(317381),
    c = n(812206),
    d = n(358221),
    f = n(199902),
    _ = n(366050),
    h = n(594174),
    p = n(981631),
    m = n(354459),
    g = n(388032),
    E = n(497041);
function v(e) {
    let { closePopout: t, idle: n, pipWindows: a, voiceChannelId: h, onSelect: E } = e;
    n && t();
    let v = (0, i.e7)([u.ZP], () => u.ZP.getSelfEmbeddedActivityForChannel(h)),
        I = (0, i.e7)([_.Z], () => _.Z.pipWindow),
        S = (0, i.e7)([d.Z], () => d.Z.getSelectedParticipant(h)),
        T = (0, i.e7)([d.Z], () => d.Z.getStreamParticipants(h));
    return (0, r.jsx)(s.Menu, {
        navId: 'pip-menu',
        'aria-label': 'switch PIP',
        onClose: t,
        onSelect: E,
        children: (function () {
            let e = [],
                t = a.find((e) => e.component === p.NYg.VIDEO);
            return (
                null != t &&
                    T.forEach((n) => {
                        let r = f.Z.getActiveStreamForApplicationStream(n.stream),
                            i = n.id === (null == S ? void 0 : S.id) && (null == I ? void 0 : I.id) === t.id;
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
        })().map(function (e) {
            var t;
            let n = e.pipWindow.id,
                i = null === (t = e.participant) || void 0 === t ? void 0 : t.id,
                a = (function (e) {
                    if (e.pipWindow.component === p.NYg.EMBED_IFRAME && null != v) {
                        var t;
                        let e = null === (t = c.Z.getApplication(v.applicationId)) || void 0 === t ? void 0 : t.name;
                        return null == e ? g.intl.string(g.t['8raC1N']) : g.intl.formatToPlainString(g.t['a9+V+f'], { activityName: e });
                    }
                    return null == e.participant || e.participant.type !== m.fO.STREAM ? g.intl.string(g.t['ng/Kws']) : g.intl.formatToPlainString(g.t.sqmFRk, { username: e.participant.userNick });
                })(e),
                u = ''.concat(n).concat(null != i ? i : '');
            return (0, r.jsx)(
                s.MenuItem,
                {
                    id: u,
                    label: a,
                    action: () =>
                        (function (e) {
                            (null == I ? void 0 : I.id) !== e.pipWindow.id && (0, l.k3)(e.pipWindow.id);
                            let t = e.participant;
                            null != t && t.type !== m.fO.ACTIVITY && o.Z.selectParticipant(h, t.id);
                        })(e)
                },
                u
            );
        })
    });
}
t.Z = function (e) {
    let { voiceChannelId: t, idle: n } = e,
        o = Array.from((0, i.e7)([_.Z], () => _.Z.pipWindows).values()).filter((e) => e.component !== p.NYg.EMBED_IFRAME),
        l = (0, i.Wu)([f.Z], () => f.Z.getAllActiveStreamsForChannel(t)).filter((e) => {
            var n;
            return e.ownerId !== (null === (n = h.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && e.channelId === t;
        }),
        u = (1 === o.length && o[0].component === p.NYg.EMBED_IFRAME) || 0 === l.length,
        c = 1 === o.length && l.length <= 1;
    return u || c
        ? null
        : (0, r.jsx)(s.Popout, {
              position: 'bottom',
              renderPopout: (e) =>
                  (0, r.jsx)(v, {
                      voiceChannelId: t,
                      pipWindows: o,
                      idle: n,
                      ...e
                  }),
              children: (e) =>
                  (0, r.jsx)(s.Clickable, {
                      className: E.menuIcon,
                      ...e,
                      children: (0, r.jsx)(s.MoreVerticalIcon, {
                          size: 'md',
                          color: a.Z.unsafe_rawColors.WHITE_500.css
                      })
                  })
          });
};
