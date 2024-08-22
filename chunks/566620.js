n.d(t, {
    $h: function () {
        return J;
    },
    W5: function () {
        return es;
    },
    af: function () {
        return q;
    },
    cG: function () {
        return z;
    },
    gC: function () {
        return el;
    },
    kv: function () {
        return ee;
    },
    mW: function () {
        return X;
    },
    pu: function () {
        return ei;
    },
    rp: function () {
        return $;
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
    g = n(188597),
    S = n(835873),
    A = n(973616),
    N = n(314897),
    O = n(592125),
    v = n(430824),
    R = n(496675),
    C = n(594174),
    y = n(979651),
    D = n(585483),
    L = n(630388),
    b = n(823379),
    M = n(573261),
    P = n(595519),
    U = n(317381),
    w = n(363522),
    x = n(672181),
    G = n(882347),
    k = n(224189),
    B = n(374065),
    F = n(917107),
    V = n(89425),
    H = n(275920),
    Z = n(701488),
    Y = n(981631),
    j = n(674563),
    W = n(245335),
    K = n(689938);
function z(e, t) {
    let n = N.default.getId(),
        r = U.ZP.getSelfEmbeddedActivityForChannel(e),
        i = U.ZP.getEmbeddedActivitiesForChannel(e).find((e) => e.applicationId === t && e.userIds.has(n));
    null != r
        ? X({
              channelId: e,
              applicationId: r.applicationId,
              showFeedback: !1
          })
        : null != i && $(e, t, !0),
        (0, x.Z)(e);
}
async function q(e) {
    var t, n;
    let { channelId: r, applicationId: i, isStart: s, analyticsLocations: o, locationObject: l, embeddedActivitiesManager: u, componentId: c, commandOrigin: m, sectionName: S } = e,
        A = O.Z.getChannel(r),
        N = null !== (t = null == A ? void 0 : A.getGuildId()) && void 0 !== t ? t : void 0;
    if (null == N && !(null !== (n = null == A ? void 0 : A.isPrivate()) && void 0 !== n && n)) return !1;
    try {
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            applicationId: i,
            channelId: r,
            componentId: c,
            analyticsLocations: s ? void 0 : o
        });
        let e = C.default.getCurrentUser();
        null != e &&
            (0, H.Z)({
                type: s ? Y.q5t.LAUNCH : Y.q5t.JOIN,
                userId: null == e ? void 0 : e.id,
                applicationId: i,
                locationObject: l,
                analyticsLocations: null != o ? o : []
            });
        let t = !0;
        if (s) {
            let e = async (e) => {
                    let { canSendFakeCommand: t } = e,
                        n = null;
                    try {
                        n = await (0, p.ZP)(r, i);
                    } catch (e) {
                        if (e.message !== p.sV) throw e;
                    }
                    if (null != n) {
                        if (n.handler === _.VC.APP_HANDLER) {
                            let e = f.ZP.getGuildState(N),
                                t = f.ZP.getUserState();
                            if (
                                !(await (0, E.L)({
                                    applicationId: i,
                                    userIndexState: t,
                                    guildIndexState: e
                                }))
                            )
                                return !1;
                        }
                        let e = O.Z.getChannel(r),
                            t = null != N ? v.Z.getGuild(N) : null;
                        return (
                            null != e &&
                            (await new Promise((r, i) => {
                                (0, h.Z)({
                                    command: n,
                                    optionValues: {},
                                    context: {
                                        channel: e,
                                        guild: t
                                    },
                                    commandOrigin: m,
                                    sectionName: S,
                                    interactionLifecycleOptionsFactory: () => ({
                                        onSuccess: () => r(),
                                        onFailure: () => i()
                                    })
                                });
                            }),
                            !0)
                        );
                    }
                    return (
                        null == n &&
                        !!t &&
                        (await (0, g.XV)({
                            applicationId: i,
                            channelId: r,
                            guildId: N
                        }),
                        !0)
                    );
                },
                n = j.Yq.includes(i),
                a = (null == A ? void 0 : A.type) === Y.d4z.GUILD_VOICE,
                s = I.Z.getApplication(i),
                o = null != s && (0, L.yE)(s.flags, Y.udG.EMBEDDED),
                l = null != s && (0, L.yE)(s.flags, Y.udG.EMBEDDED_RELEASED),
                u = (0, P.l5)(A);
            if (n) {
                if (((t = !1), !(await e({ canSendFakeCommand: !1 })))) throw Error();
            } else if (a) {
                if (o && !l) t = !(await e({ canSendFakeCommand: !1 }));
                else if (o && l) {
                    w.j.trackExposure({ location: 'EmbeddedActivitiesActionCreators.launchEmbeddedActivity' });
                    let { enabled: n } = w.j.getCurrentConfig({ location: 'EmbeddedActivitiesActionCreators.launchEmbeddedActivity' });
                    if (n) {
                        if (!(await e({ canSendFakeCommand: !1 }))) throw new T.Z(T.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
                        t = !1;
                    } else t = !0;
                }
            } else if (u) {
                let n = await e({ canSendFakeCommand: o && l });
                if (((t = !n), o && !n)) throw new T.Z(T.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
            }
        }
        if (
            (!s || t) &&
            !(await Q({
                applicationId: i,
                channelId: r,
                embeddedActivitiesManager: u,
                guildId: N
            }))
        )
            throw new T.Z(T.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED);
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            applicationId: i,
            channelId: r
        });
    } catch (e) {
        return (
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                guildId: N,
                applicationId: i,
                channelId: r,
                error: e instanceof T.Z ? e : new d.Z(e)
            }),
            !1
        );
    }
    return !0;
}
async function Q(e) {
    let t,
        { applicationId: n, channelId: i, embeddedActivitiesManager: a, guildId: o } = e,
        l = N.default.getSessionId(),
        u = C.default.getCurrentUser();
    if (null == n) return !1;
    let c = await (0, k.Z)(n, i);
    if (null == i) return D.S.dispatch(Y.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: n }), !1;
    let d = O.Z.getChannel(i);
    if (null == d || null == u || null == c) return !1;
    let _ =
        null != i
            ? (0, B.e4)({
                  channelId: i,
                  ChannelStore: O.Z,
                  GuildStore: v.Z,
                  PermissionStore: R.Z,
                  VoiceStateStore: y.Z
              })
            : B.jy.NO_CHANNEL;
    if (_ !== B.jy.CAN_LAUNCH)
        return (
            _ === B.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? (0, S.w)()
                : _ === B.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  s.Z.show({
                      title: K.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
                      body: K.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                      hideActionSheet: !1
                  }),
            !1
        );
    let E = U.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == E ? void 0 : E.applicationId) != null && (t = I.Z.getApplication(null == E ? void 0 : E.applicationId)),
        !(await (0, G.p)({
            applicationId: n,
            application: c,
            channel: d,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: a,
            user: u
        })))
    )
        return !1;
    let f = (0, F.Z)(i),
        h = Z.wP.includes(d.type);
    if (f) {
        if (
            !(await (0, V.Z)({
                channelId: i,
                bypassChangeModal: null != t
            }))
        )
            return !1;
    } else if (!(0, P.WS)(d) || !h) return !1;
    return (
        await M.Z.post({
            url: Y.ANM.ACTIVITY_CHANNEL_LAUNCH(i, n),
            body: {
                session_id: l,
                guild_id: null != o ? o : void 0
            },
            trackedActionData: {
                event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                properties: {
                    guild_id: o,
                    channel_id: i,
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
function X(e) {
    var t, n;
    let { channelId: r, applicationId: i, showFeedback: s = !0 } = e,
        o = U.ZP.getSelfEmbeddedActivityForChannel(r);
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_CLOSE',
        channelId: r,
        applicationId: i,
        locationId: null == o ? void 0 : null === (t = o.location) || void 0 === t ? void 0 : t.id,
        instanceId: null == o ? void 0 : o.launchId,
        showFeedback: s
    });
    let u = m.Z.getSelectedParticipantId(r),
        c = null === (n = C.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null != U.ZP.getEmbeddedActivitiesForChannel(r).find((e) => e.applicationId === i) && null != c && '' !== c) u === i && l.Z.selectParticipant(r, null);
}
function $(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_DISCONNECT',
        channelId: e,
        applicationId: t,
        isRejoiningFromCurrentSession: n
    });
}
async function J() {
    try {
        a.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await i.tn.get({
                url: Y.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0
            }),
            t = e.body.applications.map((e) => A.Z.createFromServer(e));
        a.Z.dispatch({
            type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS',
            applications: t,
            assets: e.body.assets
        });
    } catch (e) {
        a.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL' });
    }
}
async function ee(e, t, n) {
    try {
        a.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START' });
        let r = await i.tn.post({
            url: Y.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
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
        u = U.ZP.getShelfActivities(o),
        c = u.map((e) => I.Z.getApplication(e.application_id)).filter(b.lm);
    if (!l && !U.ZP.shouldFetchShelf(o)) {
        if (null === (t = U.ZP.getShelfFetchStatus(o)) || void 0 === t ? void 0 : t.isFetching) {
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
            t = await M.Z.get({
                url: Y.ANM.ACTIVITY_SHELF,
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
                applications: u.map((e) => A.Z.createFromServer(e))
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
                target_type: W.Iq.EMBEDDED_APPLICATION,
                target_application_id: r
            },
            i
        );
    null != O.Z.getChannel(n) && c.Z.sendInvite(n, a.code, i, null);
}
async function ei(e) {
    let { channelId: t, applicationId: n, userId: r, location: i } = e,
        a = await u.Z.createInvite(
            t,
            {
                target_type: W.Iq.EMBEDDED_APPLICATION,
                target_application_id: n
            },
            i
        );
    o.Z.ensurePrivateChannel(r).then((e) => {
        null != O.Z.getChannel(e) && c.Z.sendInvite(e, a.code, i, null);
    });
}
function ea() {
    a.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function es(e) {
    let t = Y.ANM.ACTIVITY_TEST_MODE(e);
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
