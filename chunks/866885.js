n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(570140),
    c = n(475179),
    d = n(925549),
    f = n(37234),
    _ = n(835473),
    p = n(358221),
    h = n(703656),
    m = n(607187),
    g = n(937995),
    E = n(366050),
    v = n(944486),
    I = n(594174),
    b = n(566620),
    S = n(317381),
    T = n(175894),
    y = n(246106),
    A = n(963614),
    N = n(917107),
    C = n(208156),
    R = n(748492),
    O = n(486003),
    D = n(701488),
    L = n(918559),
    x = n(981631),
    w = n(354459),
    M = n(938103),
    P = n(497041),
    k = n(852401);
function U(e) {
    var t, n, a;
    let { channel: T, isLoading: y } = e,
        [U, B] = i.useState(!1),
        G = (0, o.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivityForChannel(T.id)),
        Z = (0, o.e7)([S.ZP], () => S.ZP.getActivityPanelMode()),
        F = (0, _.q)(null == G ? void 0 : G.applicationId),
        V = null == G ? void 0 : G.launchId,
        j = (0, o.e7)([v.Z], () => v.Z.getChannelId() === T.id),
        { dockedRect: H, isHidden: Y } = (0, o.cj)([E.Z], () => {
            let e = E.Z.pipWindow;
            return {
                dockedRect: null != e ? E.Z.getDockedRect(e.id) : null,
                isHidden: E.Z.isEmbeddedActivityHidden()
            };
        }),
        W = (0, O.sU)({ channelId: T.id }),
        {
            activityParticipant: K,
            selectedParticipant: z,
            participantsOpen: q
        } = (0, o.cj)([p.Z], () => ({
            activityParticipant: null != G ? p.Z.getParticipant(T.id, G.applicationId) : null,
            selectedParticipant: p.Z.getSelectedParticipant(T.id),
            participantsOpen: p.Z.getParticipantsOpen(T.id)
        })),
        Q = j || null != W,
        X = (0, N.Z)(T.id),
        J = X && (null == z ? void 0 : z.type) !== w.fO.ACTIVITY,
        $ = !X && Z === L.Ez.PIP,
        ee = (!Q || (Q && (J || $) && null == H)) && !Y,
        et = ee && null != E.Z.pipVideoWindow && null != E.Z.pipActivityWindow;
    function en() {
        var e;
        null != G && c.Z.selectParticipant(T.id, G.applicationId);
        let t = null !== (e = T.getGuildId()) && void 0 !== e ? e : x.ME;
        d.Z.channelListScrollTo(t, T.id), (0, h.XU)(t, T.id), null == W && (0, f.Ou)();
    }
    function er() {
        B(!U);
    }
    i.useEffect(() => {
        if ((null == G ? void 0 : G.applicationId) != null) {
            let e = ee ? D.cE.PIP : D.cE.FOCUSED;
            u.Z.dispatch({
                type: 'ACTIVITY_LAYOUT_MODE_UPDATE',
                layoutMode: e,
                applicationId: G.applicationId
            });
        }
    }, [null == G ? void 0 : G.applicationId, ee]);
    if (null == G || null == V || (null == K && (0, N.Z)(T.id)) || null == F) return null;
    let ei = Array.from(G.userIds)
            .map((e) => I.default.getUser(e))
            .filter((e) => null != e),
        ea = {
            instance_id: null !== (a = null !== (n = G.compositeInstanceId) && void 0 !== n ? n : G.launchId) && void 0 !== a ? a : '',
            channel_id: T.id,
            location_id: null === (t = G.location) || void 0 === t ? void 0 : t.id,
            launch_id: G.launchId
        };
    return (
        null != T.guild_id && '' !== T.guild_id && (ea.guild_id = T.guild_id),
        (0, r.jsx)(g.ZP, {
            timeout: 2000,
            children: (e) => {
                var t, n, i, a, o, u, c, d;
                let { idle: f, onActive: _, onForceIdle: p } = e;
                return (0, r.jsxs)(m.Z, {
                    className: s()(M.root, {
                        [M.pipMode]: ee,
                        [k.elevationHigh]: ee,
                        [P.idle]: f && !(null === (t = G.config) || void 0 === t ? void 0 : t.useInteractivePIP),
                        [M.pipModeShort]: ee && !U,
                        [M.pipModeTall]: ee && U,
                        [M.hidden]: Y,
                        [M.multiPIPMode]: et
                    }),
                    noBorder: !ee,
                    children: [
                        (0, r.jsx)('div', {
                            className: 'theme-dark',
                            children:
                                ((i = _),
                                (a = p),
                                (o = f),
                                (u = $),
                                (c = ei),
                                ee && null != G && ((null == K ? void 0 : K.type) === w.fO.ACTIVITY || u)
                                    ? (null === (d = G.config) || void 0 === d ? void 0 : d.useInteractivePIP)
                                        ? (0, r.jsx)(R.of, {
                                              onJumpToChannel: en,
                                              applicationId: G.applicationId,
                                              channel: T,
                                              showControls: !o,
                                              onMouseDown: i,
                                              onMouseMove: i,
                                              onMouseLeave: a,
                                              onToggleHeight: er,
                                              isExpanded: U,
                                              hideExpandedButton: u
                                          })
                                        : u
                                          ? (0, r.jsx)(r.Fragment, {
                                                children: (0, r.jsx)(R.q5, {
                                                    idle: o,
                                                    onMouseMove: i,
                                                    onMouseDown: i,
                                                    onMouseLeave: a,
                                                    onJumpToChannel: () => {
                                                        en(), (0, b.tg)(L.Ez.PANEL);
                                                    },
                                                    channel: T,
                                                    applicationId: G.applicationId,
                                                    users: c
                                                })
                                            })
                                          : null == K
                                            ? null
                                            : (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)('div', {
                                                          onMouseMove: i,
                                                          onMouseDown: i,
                                                          onMouseLeave: a,
                                                          className: M.clickShield,
                                                          onDoubleClick: en
                                                      }),
                                                      (0, r.jsx)(R.YB, {
                                                          idle: o,
                                                          onMouseMove: i,
                                                          onMouseDown: i,
                                                          onMouseLeave: a,
                                                          onJumpToChannel: en,
                                                          channel: T,
                                                          applicationId: G.applicationId,
                                                          selectedParticipant: K
                                                      })
                                                  ]
                                              })
                                    : null)
                        }),
                        y
                            ? (0, r.jsx)(l.Spinner, {
                                  className: s()(M.iframe, {
                                      [M.pipModeShort]: ee && !U,
                                      [M.pipModeTall]: ee && U
                                  })
                              })
                            : (0, r.jsx)(C.J, {
                                  allowPopups: (0, A.h)(F),
                                  referrerPolicy: D.um.has(G.applicationId) ? 'no-referrer' : 'origin',
                                  url: G.url,
                                  queryParams: ea,
                                  className: s()(M.iframe, {
                                      [M.pipModeShort]: ee && !U,
                                      [M.pipModeTall]: ee && U,
                                      [M.pipNonInteractive]: ee && !(null === (n = G.config) || void 0 === n ? void 0 : n.useInteractivePIP)
                                  }),
                                  shouldRefocus: !ee && j
                              }),
                        !ee &&
                            (0, r.jsx)(R.Ds, {
                                participantsOpen: q,
                                showToggleParticipants: !1,
                                channelId: T.id
                            })
                    ]
                });
            }
        })
    );
}
t.Z = (e) => {
    let { channel: t, ...n } = e,
        { userActivity: i, inActivity: a } = (0, y.Z)(t.id);
    return (
        (0, T.Z)({
            channel: t,
            userActivity: i
        }),
        (0, r.jsx)(U, {
            channel: t,
            isLoading: !a,
            ...n
        })
    );
};
