n.d(t, {
    $h: function () {
        return J;
    },
    W5: function () {
        return es;
    },
    af: function () {
        return Q;
    },
    cG: function () {
        return q;
    },
    gC: function () {
        return el;
    },
    kv: function () {
        return ee;
    },
    mW: function () {
        return $;
    },
    pu: function () {
        return ei;
    },
    sN: function () {
        return er;
    },
    tg: function () {
        return eo;
    },
    ux: function () {
        return ea;
    },
    w1: function () {
        return en;
    }
}),
    n(789020),
    n(411104),
    n(47120);
var r = n(990547),
    i = n(544891),
    a = n(570140),
    s = n(668781),
    o = n(493683),
    l = n(475179),
    u = n(447543),
    c = n(904245),
    d = n(479531),
    _ = n(911969),
    E = n(845936),
    f = n(213459),
    h = n(667204),
    p = n(812236),
    I = n(812206),
    m = n(358221),
    T = n(233764),
    S = n(375824),
    g = n(48854),
    A = n(835873),
    N = n(973616),
    O = n(314897),
    R = n(592125),
    v = n(430824),
    C = n(496675),
    y = n(594174),
    L = n(979651),
    D = n(585483),
    b = n(630388),
    M = n(823379),
    P = n(573261),
    U = n(595519),
    w = n(317381),
    x = n(363522),
    G = n(672181),
    k = n(882347),
    B = n(224189),
    F = n(374065),
    V = n(917107),
    H = n(89425),
    Z = n(275920),
    Y = n(701488),
    j = n(981631),
    W = n(674563),
    K = n(245335),
    z = n(689938);
function q(e, t) {
    var n;
    let r = w.ZP.getSelfEmbeddedActivityForChannel(e);
    $({
        channelId: e,
        applicationId: null !== (n = null == r ? void 0 : r.applicationId) && void 0 !== n ? n : t,
        showFeedback: !1
    }),
        (0, G.Z)(e);
}
async function Q(e) {
    var t, n;
    let { channelId: r, applicationId: i, isStart: s, analyticsLocations: o, locationObject: l, embeddedActivitiesManager: u, componentId: c, commandOrigin: m, sectionName: A, source: N, partyId: O, forceCheckAuth: C = !1 } = e,
        L = R.Z.getChannel(r),
        D = null !== (t = null == L ? void 0 : L.getGuildId()) && void 0 !== t ? t : void 0;
    if (null == D && !(null !== (n = null == L ? void 0 : L.isPrivate()) && void 0 !== n && n)) return !1;
    let M = (0, g.r)();
    try {
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            nonce: M,
            applicationId: i,
            channelId: r,
            componentId: c,
            analyticsLocations: o,
            source: N
        });
        let e = y.default.getCurrentUser();
        null != e &&
            (0, Z.Z)({
                type: s ? j.q5t.LAUNCH : j.q5t.JOIN,
                userId: null == e ? void 0 : e.id,
                guildId: D,
                channelId: r,
                channelType: null == L ? void 0 : L.type,
                applicationId: i,
                locationObject: l,
                analyticsLocations: null != o ? o : [],
                source: N,
                partyId: O
            });
        let t = !0;
        if (s) {
            let e = async () => {
                    let e = null;
                    try {
                        e = await (0, p.ZP)(r, i);
                    } catch (e) {
                        if (e.message === p.sV) return !1;
                        throw e;
                    }
                    if (C || e.handler === _.VC.APP_HANDLER) {
                        let e =
                                null != D
                                    ? await (0, f.FN)({
                                          type: 'guild',
                                          guildId: D
                                      })
                                    : f.ZP.getGuildState(D),
                            t = await (0, f.FN)({ type: 'user' });
                        if (
                            !(await (0, E.L)({
                                applicationId: i,
                                userIndexState: t,
                                guildIndexState: e
                            }))
                        )
                            return !1;
                    }
                    let t = R.Z.getChannel(r),
                        n = null != D ? v.Z.getGuild(D) : null;
                    return (
                        null != t &&
                        (await new Promise((r, i) => {
                            (0, h.Z)({
                                command: e,
                                optionValues: {},
                                context: {
                                    channel: t,
                                    guild: n
                                },
                                commandOrigin: m,
                                sectionName: A,
                                source: N,
                                interactionLifecycleOptionsFactory: () => ({
                                    nonce: M,
                                    onSuccess: () => r(),
                                    onFailure: (e, t, n, r) => {
                                        null != e && null != t && null != n
                                            ? i(
                                                  new d.Z({
                                                      status: n,
                                                      body: {
                                                          message: t,
                                                          code: e
                                                      }
                                                  })
                                              )
                                            : null != r && r in S.Z.ReasonCodes
                                              ? i(new S.Z(r))
                                              : i(new S.Z(S.Z.ReasonCodes.UNKNOWN));
                                    }
                                })
                            });
                        }),
                        !0)
                    );
                },
                n = W.Yq.includes(i),
                a = (null == L ? void 0 : L.type) === j.d4z.GUILD_VOICE,
                s = I.Z.getApplication(i),
                o = null != s && (0, b.yE)(s.flags, j.udG.EMBEDDED),
                l = (0, U.l5)(L);
            if (n) {
                if (((t = !1), !(await e()))) throw Error();
            } else if (a) {
                if (o) {
                    x.j.trackExposure({ location: 'EmbeddedActivitiesActionCreators.launchEmbeddedActivity' });
                    let { enabled: n } = x.j.getCurrentConfig({ location: 'EmbeddedActivitiesActionCreators.launchEmbeddedActivity' });
                    if (((t = !n), n && !(await e()))) throw new T.Z(T.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
                }
            } else if (l && ((t = !1), !(await e()))) throw new T.Z(T.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        }
        if (
            (!s || t) &&
            !(await X({
                applicationId: i,
                channelId: r,
                embeddedActivitiesManager: u,
                isStart: s,
                guildId: D
            }))
        )
            throw new T.Z(T.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED);
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            nonce: M,
            applicationId: i,
            channelId: r
        });
    } catch (e) {
        return (
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                nonce: M,
                guildId: D,
                applicationId: i,
                channelId: r,
                isStart: s,
                error: e instanceof T.Z || e instanceof d.Z || e instanceof S.Z ? e : new d.Z(e)
            }),
            !1
        );
    }
    return !0;
}
async function X(e) {
    let t,
        { applicationId: n, channelId: i, embeddedActivitiesManager: a, isStart: o, guildId: l } = e,
        u = O.default.getSessionId(),
        c = y.default.getCurrentUser();
    if (null == n) return !1;
    let d = await (0, B.Z)(n, i);
    if (null == i) return D.S.dispatch(j.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: n }), !1;
    let _ = R.Z.getChannel(i);
    if (null == _ || null == c || null == d) return !1;
    let E =
        null != i
            ? (0, F.e4)({
                  channelId: i,
                  ChannelStore: R.Z,
                  GuildStore: v.Z,
                  PermissionStore: C.Z,
                  VoiceStateStore: L.Z
              })
            : F.jy.NO_CHANNEL;
    if (E !== F.jy.CAN_LAUNCH)
        return (
            E === F.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? (0, A.w)()
                : E === F.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  s.Z.show({
                      title: z.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
                      body: z.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                      hideActionSheet: !1
                  }),
            !1
        );
    let f = w.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == f ? void 0 : f.applicationId) != null && (t = I.Z.getApplication(null == f ? void 0 : f.applicationId)),
        !(
            !o ||
            (await (0, k.p)({
                applicationId: n,
                application: d,
                channel: _,
                currentEmbeddedApplication: t,
                embeddedActivitiesManager: a,
                user: c
            }))
        ))
    )
        return !1;
    let h = (0, V.Z)(i),
        p = Y.wP.includes(_.type);
    if (h) {
        if (
            !(await (0, H.Z)({
                channelId: i,
                bypassChangeModal: null != t
            }))
        )
            return !1;
    } else if (!(0, U.WS)(_) || !p) return !1;
    return (
        await P.Z.post({
            url: j.ANM.ACTIVITY_CHANNEL_LAUNCH(i, n),
            body: {
                session_id: u,
                guild_id: null != l ? l : void 0
            },
            trackedActionData: {
                event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                properties: {
                    guild_id: l,
                    channel_id: i,
                    application_id: n,
                    session_id: u
                }
            },
            retries: 3,
            oldFormErrors: !0
        }),
        !0
    );
}
function $(e) {
    var t, n;
    let { channelId: r, applicationId: i, showFeedback: s = !0 } = e,
        o = w.ZP.getSelfEmbeddedActivityForChannel(r);
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_CLOSE',
        channelId: r,
        applicationId: i,
        locationId: null == o ? void 0 : null === (t = o.location) || void 0 === t ? void 0 : t.id,
        instanceId: null == o ? void 0 : o.launchId,
        showFeedback: s
    });
    let u = m.Z.getSelectedParticipantId(r),
        c = null === (n = y.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null != w.ZP.getEmbeddedActivitiesForChannel(r).find((e) => e.applicationId === i) && null != c && '' !== c) u === i && l.Z.selectParticipant(r, null);
}
async function J() {
    try {
        a.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await i.tn.get({
                url: j.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0
            }),
            t = e.body.applications,
            n = t.map((e) => N.Z.createFromServer(e));
        a.Z.dispatch({
            type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS',
            applications: n,
            assets: e.body.assets
        }),
            a.Z.dispatch({
                type: 'APPLICATIONS_FETCH_SUCCESS',
                applications: t
            });
    } catch (e) {
        a.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL' });
    }
}
async function ee(e, t, n) {
    try {
        a.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START' });
        let r = await i.tn.post({
            url: j.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
            query: { channel_id: t },
            attachments: [
                {
                    name: 'file',
                    file: n
                }
            ]
        });
        return (
            a.Z.dispatch({
                type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS',
                attachment: r.body.attachment
            }),
            r.body.attachment
        );
    } catch (e) {
        return a.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL' }), new d.Z(e);
    }
}
let et = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function en(e) {
    var t, n, i, s;
    let { guildId: o, force: l = !1 } = e,
        u = w.ZP.getShelfActivities(o),
        c = u.map((e) => I.Z.getApplication(e.application_id)).filter(M.lm);
    if (!l && !w.ZP.shouldFetchShelf(o)) {
        if (null === (t = w.ZP.getShelfFetchStatus(o)) || void 0 === t ? void 0 : t.isFetching) {
            let e, t;
            let n = new Promise((t) => {
                    (e = et.bind(null, o, t)), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
                }),
                r = new Promise((e) => {
                    (t = et.bind(null, o, e)), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t);
                });
            await Promise.race([n, r]), null != e && (a.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e), (e = null)), null != t && (a.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t), (t = null));
        }
        return {
            activityConfigs: u,
            applications: c
        };
    }
    try {
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_FETCH_SHELF',
            guildId: o
        });
        let e = void 0 !== o && '' !== o ? { guild_id: o } : void 0,
            t = await P.Z.get({
                url: j.ANM.ACTIVITY_SHELF,
                query: e,
                trackedActionData: {
                    event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                    properties: { guild_id: o }
                },
                retries: 3,
                oldFormErrors: !0
            }),
            l = null !== (n = t.body.activities) && void 0 !== n ? n : [],
            u = null !== (i = t.body.applications) && void 0 !== i ? i : [],
            c = null !== (s = t.body.assets) && void 0 !== s ? s : {};
        return (
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS',
                guildId: o,
                activities: l,
                applications: u,
                assets: c
            }),
            u.length > 0 &&
                a.Z.dispatch({
                    type: 'APPLICATIONS_FETCH_SUCCESS',
                    applications: u
                }),
            {
                activityConfigs: l,
                applications: u.map((e) => N.Z.createFromServer(e))
            }
        );
    } catch (e) {
        return (
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL',
                guildId: o
            }),
            {
                activityConfigs: u,
                applications: c
            }
        );
    }
}
async function er(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i } = e,
        a = await u.Z.createInvite(
            t,
            {
                target_type: K.Iq.EMBEDDED_APPLICATION,
                target_application_id: r
            },
            i
        );
    null != R.Z.getChannel(n) && c.Z.sendInvite(n, a.code, i, null);
}
async function ei(e) {
    let { channelId: t, applicationId: n, userId: r, location: i } = e,
        a = await u.Z.createInvite(
            t,
            {
                target_type: K.Iq.EMBEDDED_APPLICATION,
                target_application_id: n
            },
            i
        );
    o.Z.ensurePrivateChannel(r).then((e) => {
        null != R.Z.getChannel(e) && c.Z.sendInvite(e, a.code, i, null);
    });
}
function ea() {
    a.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function es(e) {
    let t = j.ANM.ACTIVITY_TEST_MODE(e);
    try {
        return (
            await i.tn.get({
                url: t,
                oldFormErrors: !0
            }),
            !0
        );
    } catch (e) {
        return !1;
    }
}
function eo(e) {
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_PANEL_MODE',
        activityPanelMode: e
    });
}
function el(e) {
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
        focusedActivityLayout: e
    });
}
