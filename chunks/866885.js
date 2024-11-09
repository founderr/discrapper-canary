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
    h = n(358221),
    p = n(928518),
    m = n(703656),
    g = n(607187),
    E = n(937995),
    v = n(366050),
    I = n(944486),
    S = n(594174),
    T = n(566620),
    b = n(317381),
    y = n(175894),
    A = n(246106),
    N = n(963614),
    C = n(917107),
    R = n(208156),
    O = n(748492),
    D = n(701488),
    L = n(918559),
    x = n(981631),
    w = n(354459),
    M = n(938103),
    P = n(497041),
    k = n(852401);
function U(e) {
    var t, n, a;
    let { channel: y, isLoading: A } = e,
        [U, G] = i.useState(!1),
        B = (0, o.e7)([b.ZP], () => b.ZP.getSelfEmbeddedActivityForChannel(y.id)),
        Z = (0, o.e7)([b.ZP], () => b.ZP.getActivityPanelMode()),
        F = (0, _.q)(null == B ? void 0 : B.applicationId),
        V = null == B ? void 0 : B.launchId,
        j = (0, o.e7)([I.Z], () => I.Z.getChannelId() === y.id),
        { dockedRect: H, isHidden: Y } = (0, o.cj)([v.Z], () => {
            let e = v.Z.pipWindow;
            return {
                dockedRect: null != e ? v.Z.getDockedRect(e.id) : null,
                isHidden: v.Z.isEmbeddedActivityHidden()
            };
        }),
        W = (0, o.e7)([p.Z], () => p.Z.getWindow(x.KJ3.CHANNEL_CALL_POPOUT)),
        {
            activityParticipant: K,
            selectedParticipant: z,
            participantsOpen: q
        } = (0, o.cj)([h.Z], () => ({
            activityParticipant: null != B ? h.Z.getParticipant(y.id, B.applicationId) : null,
            selectedParticipant: h.Z.getSelectedParticipant(y.id),
            participantsOpen: h.Z.getParticipantsOpen(y.id)
        })),
        Q = j || null != W,
        X = (0, C.Z)(y.id),
        J = X && (null == z ? void 0 : z.type) !== w.fO.ACTIVITY,
        $ = !X && Z === L.Ez.PIP,
        ee = (!Q || (Q && (J || $) && null == H)) && !Y,
        et = ee && null != v.Z.pipVideoWindow && null != v.Z.pipActivityWindow;
    function en() {
        var e;
        null != B && c.Z.selectParticipant(y.id, B.applicationId);
        let t = null !== (e = y.getGuildId()) && void 0 !== e ? e : x.ME;
        d.Z.channelListScrollTo(t, y.id), (0, m.XU)(t, y.id), null == W && (0, f.Ou)();
    }
    function er() {
        G(!U);
    }
    i.useEffect(() => {
        if ((null == B ? void 0 : B.applicationId) != null) {
            let e = ee ? D.cE.PIP : D.cE.FOCUSED;
            u.Z.dispatch({
                type: 'ACTIVITY_LAYOUT_MODE_UPDATE',
                layoutMode: e,
                applicationId: B.applicationId
            });
        }
    }, [null == B ? void 0 : B.applicationId, ee]);
    if (null == B || null == V || (null == K && (0, C.Z)(y.id)) || null == F) return null;
    let ei = Array.from(B.userIds)
            .map((e) => S.default.getUser(e))
            .filter((e) => null != e),
        ea = {
            instance_id: null !== (a = null !== (n = B.compositeInstanceId) && void 0 !== n ? n : B.launchId) && void 0 !== a ? a : '',
            channel_id: y.id,
            location_id: null === (t = B.location) || void 0 === t ? void 0 : t.id,
            launch_id: B.launchId
        };
    return (
        null != y.guild_id && '' !== y.guild_id && (ea.guild_id = y.guild_id),
        (0, r.jsx)(E.ZP, {
            timeout: 2000,
            children: (e) => {
                var t, n, i, a, o, u, c, d;
                let { idle: f, onActive: _, onForceIdle: h } = e;
                return (0, r.jsxs)(g.Z, {
                    className: s()(M.root, {
                        [M.pipMode]: ee,
                        [k.elevationHigh]: ee,
                        [P.idle]: f && !(null === (t = B.config) || void 0 === t ? void 0 : t.useInteractivePIP),
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
                                (a = h),
                                (o = f),
                                (u = $),
                                (c = ei),
                                ee && null != B && ((null == K ? void 0 : K.type) === w.fO.ACTIVITY || u)
                                    ? (null === (d = B.config) || void 0 === d ? void 0 : d.useInteractivePIP)
                                        ? (0, r.jsx)(O.of, {
                                              onJumpToChannel: en,
                                              applicationId: B.applicationId,
                                              channel: y,
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
                                                children: (0, r.jsx)(O.q5, {
                                                    idle: o,
                                                    onMouseMove: i,
                                                    onMouseDown: i,
                                                    onMouseLeave: a,
                                                    onJumpToChannel: () => {
                                                        en(), (0, T.tg)(L.Ez.PANEL);
                                                    },
                                                    channel: y,
                                                    applicationId: B.applicationId,
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
                                                      (0, r.jsx)(O.YB, {
                                                          idle: o,
                                                          onMouseMove: i,
                                                          onMouseDown: i,
                                                          onMouseLeave: a,
                                                          onJumpToChannel: en,
                                                          channel: y,
                                                          applicationId: B.applicationId,
                                                          selectedParticipant: K
                                                      })
                                                  ]
                                              })
                                    : null)
                        }),
                        A
                            ? (0, r.jsx)(l.Spinner, {
                                  className: s()(M.iframe, {
                                      [M.pipModeShort]: ee && !U,
                                      [M.pipModeTall]: ee && U
                                  })
                              })
                            : (0, r.jsx)(R.J, {
                                  allowPopups: (0, N.h)(F),
                                  referrerPolicy: D.um.has(B.applicationId) ? 'no-referrer' : 'origin',
                                  url: B.url,
                                  queryParams: ea,
                                  className: s()(M.iframe, {
                                      [M.pipModeShort]: ee && !U,
                                      [M.pipModeTall]: ee && U,
                                      [M.pipNonInteractive]: ee && !(null === (n = B.config) || void 0 === n ? void 0 : n.useInteractivePIP)
                                  }),
                                  shouldRefocus: !ee && j
                              }),
                        !ee &&
                            (0, r.jsx)(O.Ds, {
                                participantsOpen: q,
                                showToggleParticipants: !1,
                                channelId: y.id
                            })
                    ]
                });
            }
        })
    );
}
t.Z = (e) => {
    let { channel: t, ...n } = e,
        { userActivity: i, inActivity: a } = (0, A.Z)(t.id);
    return (
        (0, y.Z)({
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
