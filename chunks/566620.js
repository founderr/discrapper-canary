n.d(t, {
    $h: function () {
        return et;
    },
    W5: function () {
        return el;
    },
    af: function () {
        return $;
    },
    cG: function () {
        return X;
    },
    gC: function () {
        return ec;
    },
    kv: function () {
        return en;
    },
    mW: function () {
        return ee;
    },
    pu: function () {
        return eo;
    },
    sN: function () {
        return ea;
    },
    tg: function () {
        return eu;
    },
    ux: function () {
        return es;
    },
    w1: function () {
        return ei;
    }
});
var r = n(789020);
var i = n(411104);
var a = n(47120);
var o = n(990547),
    s = n(544891),
    l = n(570140),
    u = n(668781),
    c = n(493683),
    d = n(475179),
    _ = n(447543),
    E = n(904245),
    f = n(479531),
    h = n(911969),
    p = n(845936),
    m = n(213459),
    I = n(667204),
    T = n(812236),
    g = n(812206),
    S = n(358221),
    A = n(233764),
    v = n(375824),
    N = n(48854),
    O = n(835873),
    R = n(973616),
    C = n(314897),
    y = n(592125),
    L = n(430824),
    b = n(496675),
    D = n(594174),
    M = n(979651),
    P = n(585483),
    U = n(630388),
    w = n(823379),
    x = n(573261),
    G = n(595519),
    k = n(317381),
    B = n(672181),
    F = n(882347),
    Z = n(224189),
    V = n(374065),
    H = n(917107),
    Y = n(89425),
    j = n(275920),
    W = n(701488),
    K = n(981631),
    z = n(674563),
    q = n(245335),
    Q = n(689938);
function X(e, t) {
    var n;
    let r = k.ZP.getSelfEmbeddedActivityForChannel(e);
    ee({
        channelId: e,
        applicationId: null !== (n = null == r ? void 0 : r.applicationId) && void 0 !== n ? n : t,
        showFeedback: !1
    }),
        (0, B.Z)(e);
}
async function $(e) {
    var t, n;
    let { channelId: r, applicationId: i, isStart: a, analyticsLocations: o, locationObject: s, embeddedActivitiesManager: u, componentId: c, commandOrigin: d, sectionName: _, source: E, partyId: S, onExecutedCallback: O } = e,
        R = y.Z.getChannel(r),
        C = null !== (t = null == R ? void 0 : R.getGuildId()) && void 0 !== t ? t : void 0;
    if (null == C && !(null !== (n = null == R ? void 0 : R.isPrivate()) && void 0 !== n && n)) return !1;
    let b = (0, N.r)();
    try {
        l.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            nonce: b,
            applicationId: i,
            channelId: r,
            componentId: c,
            analyticsLocations: o,
            source: E
        });
        let e = D.default.getCurrentUser();
        if (
            (null != e &&
                (0, j.Z)({
                    type: a ? K.q5t.LAUNCH : K.q5t.JOIN,
                    userId: null == e ? void 0 : e.id,
                    guildId: C,
                    channelId: r,
                    channelType: null == R ? void 0 : R.type,
                    applicationId: i,
                    locationObject: s,
                    analyticsLocations: null != o ? o : [],
                    source: E,
                    partyId: S
                }),
            a)
        ) {
            let e = async () => {
                    let e = null;
                    try {
                        e = await (0, T.ZP)(r, i);
                    } catch (e) {
                        if (e.message === T.sV) return !1;
                        throw e;
                    }
                    if (e.handler === h.VC.APP_HANDLER) {
                        let e =
                                null != C
                                    ? await (0, m.FN)({
                                          type: 'guild',
                                          guildId: C
                                      })
                                    : m.ZP.getGuildState(C),
                            t = await (0, m.FN)({ type: 'user' });
                        if (
                            !(await (0, p.L)({
                                applicationId: i,
                                userIndexState: t,
                                guildIndexState: e
                            }))
                        )
                            return !1;
                    }
                    let t = y.Z.getChannel(r),
                        n = null != C ? L.Z.getGuild(C) : null;
                    return (
                        null != t &&
                        (await new Promise((r, i) => {
                            (0, I.Z)({
                                command: e,
                                optionValues: {},
                                context: {
                                    channel: t,
                                    guild: n
                                },
                                commandOrigin: d,
                                sectionName: _,
                                source: E,
                                interactionLifecycleOptionsFactory: () => ({
                                    nonce: b,
                                    onSuccess: () => {
                                        null == O || O(), r();
                                    },
                                    onFailure: (e, t, n, r) => {
                                        null == O || O(),
                                            null != e && null != t && null != n
                                                ? i(
                                                      new f.Z({
                                                          status: n,
                                                          body: {
                                                              message: t,
                                                              code: e
                                                          }
                                                      })
                                                  )
                                                : null != r && r in v.Z.ReasonCodes
                                                  ? i(new v.Z(r))
                                                  : i(new v.Z(v.Z.ReasonCodes.UNKNOWN));
                                    }
                                })
                            });
                        }),
                        !0)
                    );
                },
                t = z.Yq.includes(i),
                n = (null == R ? void 0 : R.type) === K.d4z.GUILD_VOICE,
                a = g.Z.getApplication(i),
                o = null != a && (0, U.yE)(a.flags, K.udG.EMBEDDED),
                s = (0, G.l5)(R);
            if (t) {
                if (!(await e())) throw Error();
            } else if (n) {
                if (o && !(await e())) throw new A.Z(A.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
            } else if (s && !(await e())) throw new A.Z(A.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        }
        if (!a) {
            let e = await J({
                applicationId: i,
                channelId: r,
                embeddedActivitiesManager: u,
                isStart: a,
                guildId: C
            });
            if ((null == O || O(), !e)) throw new A.Z(A.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED);
        }
        l.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            nonce: b,
            applicationId: i,
            channelId: r
        });
    } catch (e) {
        return (
            l.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                nonce: b,
                guildId: C,
                applicationId: i,
                channelId: r,
                isStart: a,
                error: e instanceof A.Z || e instanceof f.Z || e instanceof v.Z ? e : new f.Z(e)
            }),
            !1
        );
    }
    return !0;
}
async function J(e) {
    let t,
        { applicationId: n, channelId: r, embeddedActivitiesManager: i, isStart: a, guildId: s } = e,
        l = C.default.getSessionId(),
        c = D.default.getCurrentUser(),
        d = n;
    if (null == d) return !1;
    let _ = await (0, Z.Z)(d, r);
    if (null == r) return P.S.dispatch(K.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: d }), !1;
    let E = y.Z.getChannel(r);
    if (null == E || null == c || null == _) return !1;
    let f =
        null != r
            ? (0, V.e4)({
                  channelId: r,
                  ChannelStore: y.Z,
                  GuildStore: L.Z,
                  PermissionStore: b.Z,
                  VoiceStateStore: M.Z
              })
            : V.jy.NO_CHANNEL;
    if (f !== V.jy.CAN_LAUNCH)
        return (
            f === V.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? (0, O.w)()
                : f === V.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  u.Z.show({
                      title: Q.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
                      body: Q.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                      hideActionSheet: !1
                  }),
            !1
        );
    let h = k.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == h ? void 0 : h.applicationId) != null && (t = g.Z.getApplication(null == h ? void 0 : h.applicationId)),
        !(
            !a ||
            (await (0, F.p)({
                applicationId: n,
                application: _,
                channel: E,
                currentEmbeddedApplication: t,
                embeddedActivitiesManager: i,
                user: c
            }))
        ))
    )
        return !1;
    let p = (0, H.Z)(r),
        m = W.wP.includes(E.type);
    if (p) {
        if (
            !(await (0, Y.Z)({
                channelId: r,
                bypassChangeModal: null != t
            }))
        )
            return !1;
    } else if (!(0, G.WS)(E) || !m) return !1;
    return (
        await x.Z.post({
            url: K.ANM.ACTIVITY_CHANNEL_LAUNCH(r, n),
            body: {
                session_id: l,
                guild_id: null != s ? s : void 0
            },
            trackedActionData: {
                event: o.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                properties: {
                    guild_id: s,
                    channel_id: r,
                    application_id: n,
                    session_id: l
                }
            },
            retries: 3,
            oldFormErrors: !0
        }),
        !0
    );
}
function ee(e) {
    var t, n;
    let { channelId: r, applicationId: i, showFeedback: a = !0 } = e,
        o = k.ZP.getSelfEmbeddedActivityForChannel(r);
    l.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_CLOSE',
        channelId: r,
        applicationId: i,
        locationId: null == o ? void 0 : null === (t = o.location) || void 0 === t ? void 0 : t.id,
        instanceId: null == o ? void 0 : o.launchId,
        showFeedback: a
    });
    let s = S.Z.getSelectedParticipantId(r),
        u = null === (n = D.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null != k.ZP.getEmbeddedActivitiesForChannel(r).find((e) => e.applicationId === i) && null != u && '' !== u) s === i && d.Z.selectParticipant(r, null);
}
async function et() {
    try {
        l.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await s.tn.get({
                url: K.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0
            }),
            t = e.body.applications,
            n = t.map((e) => R.Z.createFromServer(e));
        l.Z.dispatch({
            type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS',
            applications: n,
            assets: e.body.assets
        }),
            l.Z.dispatch({
                type: 'APPLICATIONS_FETCH_SUCCESS',
                applications: t
            });
    } catch (e) {
        l.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL' });
    }
}
async function en(e, t, n) {
    try {
        l.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START' });
        let r = await s.tn.post({
            url: K.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
            query: { channel_id: t },
            attachments: [
                {
                    name: 'file',
                    file: n
                }
            ]
        });
        return (
            l.Z.dispatch({
                type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS',
                attachment: r.body.attachment
            }),
            r.body.attachment
        );
    } catch (e) {
        return l.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL' }), new f.Z(e);
    }
}
let er = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function ei(e) {
    var t, n, r, i;
    let { guildId: a, force: s = !1 } = e,
        u = k.ZP.getShelfActivities(a),
        c = u.map((e) => g.Z.getApplication(e.application_id)).filter(w.lm);
    if (!s && !k.ZP.shouldFetchShelf(a)) {
        if (null === (t = k.ZP.getShelfFetchStatus(a)) || void 0 === t ? void 0 : t.isFetching) {
            let e, t;
            let n = new Promise((t) => {
                    (e = er.bind(null, a, t)), l.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
                }),
                r = new Promise((e) => {
                    (t = er.bind(null, a, e)), l.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t);
                });
            await Promise.race([n, r]), null != e && (l.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e), (e = null)), null != t && (l.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t), (t = null));
        }
        return {
            activityConfigs: u,
            applications: c
        };
    }
    try {
        l.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_FETCH_SHELF',
            guildId: a
        });
        let e = void 0 !== a && '' !== a ? { guild_id: a } : void 0,
            t = await x.Z.get({
                url: K.ANM.ACTIVITY_SHELF,
                query: e,
                trackedActionData: {
                    event: o.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                    properties: { guild_id: a }
                },
                retries: 3,
                oldFormErrors: !0
            }),
            s = null !== (n = t.body.activities) && void 0 !== n ? n : [],
            u = null !== (r = t.body.applications) && void 0 !== r ? r : [],
            c = null !== (i = t.body.assets) && void 0 !== i ? i : {};
        return (
            l.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS',
                guildId: a,
                activities: s,
                applications: u,
                assets: c
            }),
            u.length > 0 &&
                l.Z.dispatch({
                    type: 'APPLICATIONS_FETCH_SUCCESS',
                    applications: u
                }),
            {
                activityConfigs: s,
                applications: u.map((e) => R.Z.createFromServer(e))
            }
        );
    } catch (e) {
        return (
            l.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL',
                guildId: a
            }),
            {
                activityConfigs: u,
                applications: c
            }
        );
    }
}
async function ea(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i } = e,
        a = await _.Z.createInvite(
            t,
            {
                target_type: q.Iq.EMBEDDED_APPLICATION,
                target_application_id: r
            },
            i
        );
    null != y.Z.getChannel(n) && E.Z.sendInvite(n, a.code, i, null);
}
async function eo(e) {
    let { channelId: t, applicationId: n, userId: r, location: i } = e,
        a = await _.Z.createInvite(
            t,
            {
                target_type: q.Iq.EMBEDDED_APPLICATION,
                target_application_id: n
            },
            i
        );
    c.Z.ensurePrivateChannel(r).then((e) => {
        null != y.Z.getChannel(e) && E.Z.sendInvite(e, a.code, i, null);
    });
}
function es() {
    l.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function el(e) {
    let t = K.ANM.ACTIVITY_TEST_MODE(e);
    try {
        return (
            await s.tn.get({
                url: t,
                oldFormErrors: !0
            }),
            !0
        );
    } catch (e) {
        return !1;
    }
}
function eu(e) {
    l.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_PANEL_MODE',
        activityPanelMode: e
    });
}
function ec(e) {
    l.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
        focusedActivityLayout: e
    });
}
