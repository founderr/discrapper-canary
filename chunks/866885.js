var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(570140),
    d = n(475179),
    _ = n(925549),
    E = n(37234),
    f = n(835473),
    h = n(358221),
    p = n(928518),
    m = n(703656),
    I = n(607187),
    T = n(937995),
    g = n(366050),
    S = n(944486),
    A = n(594174),
    v = n(566620),
    N = n(317381),
    O = n(175894),
    R = n(246106),
    C = n(963614),
    y = n(917107),
    b = n(208156),
    L = n(748492),
    D = n(701488),
    M = n(918559),
    P = n(981631),
    U = n(354459),
    w = n(938103),
    x = n(497041),
    G = n(852401);
function k(e) {
    var t, n, r;
    let { channel: o, isLoading: O } = e,
        [R, k] = a.useState(!1),
        B = (0, l.e7)([N.ZP], () => N.ZP.getSelfEmbeddedActivityForChannel(o.id)),
        F = (0, l.e7)([N.ZP], () => N.ZP.getActivityPanelMode()),
        Z = (0, f.q)(null == B ? void 0 : B.applicationId),
        V = null == B ? void 0 : B.launchId,
        H = (0, l.e7)([S.Z], () => S.Z.getChannelId() === o.id),
        { dockedRect: Y, isHidden: j } = (0, l.cj)([g.Z], () => {
            let e = g.Z.pipWindow;
            return {
                dockedRect: null != e ? g.Z.getDockedRect(e.id) : null,
                isHidden: g.Z.isEmbeddedActivityHidden()
            };
        }),
        W = (0, l.e7)([p.Z], () => p.Z.getWindow(P.KJ3.CHANNEL_CALL_POPOUT)),
        {
            activityParticipant: K,
            selectedParticipant: z,
            participantsOpen: q
        } = (0, l.cj)([h.Z], () => ({
            activityParticipant: null != B ? h.Z.getParticipant(o.id, B.applicationId) : null,
            selectedParticipant: h.Z.getSelectedParticipant(o.id),
            participantsOpen: h.Z.getParticipantsOpen(o.id)
        })),
        Q = H || null != W,
        X = (0, y.Z)(o.id),
        $ = X && (null == z ? void 0 : z.type) !== U.fO.ACTIVITY,
        J = !X && F === M.Ez.PIP,
        ee = Q && ($ || J) && null == Y,
        et = (!Q || ee) && !j,
        en = et && null != g.Z.pipVideoWindow && null != g.Z.pipActivityWindow;
    function er() {
        var e;
        null != B && d.Z.selectParticipant(o.id, B.applicationId);
        let t = null !== (e = o.getGuildId()) && void 0 !== e ? e : P.ME;
        _.Z.channelListScrollTo(t, o.id), (0, m.XU)(t, o.id), null == W && (0, E.Ou)();
    }
    function ei() {
        k(!R);
    }
    function ea(e, t, n, r, a) {
        var s;
        return et && null != B && ((null == K ? void 0 : K.type) === U.fO.ACTIVITY || r)
            ? (null === (s = B.config) || void 0 === s ? void 0 : s.useInteractivePIP)
                ? (0, i.jsx)(L.of, {
                      onJumpToChannel: er,
                      applicationId: B.applicationId,
                      channel: o,
                      showControls: !n,
                      onMouseDown: e,
                      onMouseMove: e,
                      onMouseLeave: t,
                      onToggleHeight: ei,
                      isExpanded: R,
                      hideExpandedButton: r
                  })
                : r
                  ? (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(L.q5, {
                            idle: n,
                            onMouseMove: e,
                            onMouseDown: e,
                            onMouseLeave: t,
                            onJumpToChannel: () => {
                                er(), (0, v.tg)(M.Ez.PANEL);
                            },
                            channel: o,
                            applicationId: B.applicationId,
                            users: a
                        })
                    })
                  : null == K
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  onMouseMove: e,
                                  onMouseDown: e,
                                  onMouseLeave: t,
                                  className: w.clickShield,
                                  onDoubleClick: er
                              }),
                              (0, i.jsx)(L.YB, {
                                  idle: n,
                                  onMouseMove: e,
                                  onMouseDown: e,
                                  onMouseLeave: t,
                                  onJumpToChannel: er,
                                  channel: o,
                                  applicationId: B.applicationId,
                                  selectedParticipant: K
                              })
                          ]
                      })
            : null;
    }
    if (
        (a.useEffect(() => {
            if ((null == B ? void 0 : B.applicationId) != null) {
                let e = et ? D.cE.PIP : D.cE.FOCUSED;
                c.Z.dispatch({
                    type: 'ACTIVITY_LAYOUT_MODE_UPDATE',
                    layoutMode: e,
                    applicationId: B.applicationId
                });
            }
        }, [null == B ? void 0 : B.applicationId, et]),
        null == B || null == V || (null == K && (0, y.Z)(o.id)) || null == Z)
    )
        return null;
    let eo = Array.from(B.userIds)
            .map((e) => A.default.getUser(e))
            .filter((e) => null != e),
        es = {
            instance_id: null !== (r = null !== (n = B.compositeInstanceId) && void 0 !== n ? n : B.launchId) && void 0 !== r ? r : '',
            channel_id: o.id,
            location_id: null === (t = B.location) || void 0 === t ? void 0 : t.id,
            launch_id: B.launchId
        };
    return (
        null != o.guild_id && '' !== o.guild_id && (es.guild_id = o.guild_id),
        (0, i.jsx)(T.ZP, {
            timeout: 2000,
            children: (e) => {
                var t, n;
                let { idle: r, onActive: a, onForceIdle: l } = e;
                return (0, i.jsxs)(I.Z, {
                    className: s()(w.root, {
                        [w.pipMode]: et,
                        [G.elevationHigh]: et,
                        [x.idle]: r && !(null === (t = B.config) || void 0 === t ? void 0 : t.useInteractivePIP),
                        [w.pipModeShort]: et && !R,
                        [w.pipModeTall]: et && R,
                        [w.hidden]: j,
                        [w.multiPIPMode]: en
                    }),
                    noBorder: !et,
                    children: [
                        (0, i.jsx)('div', {
                            className: 'theme-dark',
                            children: ea(a, l, r, J, eo)
                        }),
                        O
                            ? (0, i.jsx)(u.Spinner, {
                                  className: s()(w.iframe, {
                                      [w.pipModeShort]: et && !R,
                                      [w.pipModeTall]: et && R
                                  })
                              })
                            : (0, i.jsx)(b.J, {
                                  allowPopups: (0, C.h)(Z),
                                  referrerPolicy: D.um.has(B.applicationId) ? 'no-referrer' : 'origin',
                                  url: B.url,
                                  queryParams: es,
                                  className: s()(w.iframe, {
                                      [w.pipModeShort]: et && !R,
                                      [w.pipModeTall]: et && R,
                                      [w.pipNonInteractive]: et && !(null === (n = B.config) || void 0 === n ? void 0 : n.useInteractivePIP)
                                  }),
                                  shouldRefocus: !et && H
                              }),
                        !et &&
                            (0, i.jsx)(L.Ds, {
                                participantsOpen: q,
                                showToggleParticipants: !1,
                                channelId: o.id
                            })
                    ]
                });
            }
        })
    );
}
let B = (e) => {
    let { channel: t, ...n } = e,
        { userActivity: r, inActivity: a } = (0, R.Z)(t.id);
    (0, O.Z)({
        channel: t,
        userActivity: r
    });
    let o = !a;
    return (0, i.jsx)(k, {
        channel: t,
        isLoading: o,
        ...n
    });
};
t.Z = B;
