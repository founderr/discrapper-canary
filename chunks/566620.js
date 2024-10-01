n.d(t, {
    $h: function () {
        return en;
    },
    W5: function () {
        return eu;
    },
    af: function () {
        return X;
    },
    cG: function () {
        return Q;
    },
    gC: function () {
        return ed;
    },
    kv: function () {
        return er;
    },
    mW: function () {
        return et;
    },
    pu: function () {
        return es;
    },
    sN: function () {
        return eo;
    },
    tg: function () {
        return ec;
    },
    ux: function () {
        return el;
    },
    w1: function () {
        return ea;
    }
});
var r = n(789020);
var i = n(47120);
var a = n(990547),
    o = n(544891),
    s = n(570140),
    l = n(668781),
    u = n(493683),
    c = n(475179),
    d = n(447543),
    _ = n(904245),
    E = n(479531),
    f = n(911969),
    h = n(845936),
    p = n(213459),
    m = n(667204),
    I = n(812236),
    T = n(812206),
    g = n(358221),
    S = n(233764),
    A = n(375824),
    v = n(48854),
    N = n(835873),
    O = n(973616),
    R = n(314897),
    C = n(592125),
    y = n(430824),
    L = n(496675),
    b = n(594174),
    D = n(979651),
    M = n(585483),
    P = n(630388),
    U = n(823379),
    w = n(573261),
    x = n(595519),
    G = n(317381),
    k = n(672181),
    B = n(882347),
    F = n(224189),
    Z = n(374065),
    V = n(917107),
    H = n(89425),
    Y = n(275920),
    j = n(701488),
    W = n(981631),
    K = n(674563),
    z = n(245335),
    q = n(689938);
function Q(e, t) {
    var n;
    let r = G.ZP.getSelfEmbeddedActivityForChannel(e);
    et({
        channelId: e,
        applicationId: null !== (n = null == r ? void 0 : r.applicationId) && void 0 !== n ? n : t,
        showFeedback: !1
    }),
        (0, k.Z)(e);
}
async function X(e) {
    var t, n;
    let { channelId: r, applicationId: i, isStart: a, analyticsLocations: o, locationObject: l, embeddedActivitiesManager: u, componentId: c, commandOrigin: d, sectionName: _, source: f, partyId: h, onExecutedCallback: p } = e,
        m = C.Z.getChannel(r),
        I = null !== (t = null == m ? void 0 : m.getGuildId()) && void 0 !== t ? t : void 0;
    if (null == I && !(null !== (n = null == m ? void 0 : m.isPrivate()) && void 0 !== n && n)) return !1;
    let T = (0, v.r)();
    try {
        s.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            nonce: T,
            applicationId: i,
            channelId: r,
            componentId: c,
            analyticsLocations: o,
            source: f
        });
        let e = b.default.getCurrentUser();
        if (
            (null != e &&
                (0, Y.Z)({
                    type: a ? W.q5t.LAUNCH : W.q5t.JOIN,
                    userId: null == e ? void 0 : e.id,
                    guildId: I,
                    channelId: r,
                    channelType: null == m ? void 0 : m.type,
                    applicationId: i,
                    locationObject: l,
                    analyticsLocations: null != o ? o : [],
                    source: f,
                    partyId: h
                }),
            a)
        ) {
            if (!$(i, m)) throw new S.Z(S.Z.Reasons.INVALID_CHANNEL);
            if (
                !(await J({
                    applicationId: i,
                    nonce: T,
                    channelId: r,
                    guildId: I,
                    commandOrigin: d,
                    sectionName: _,
                    source: f
                }))
            )
                throw new S.Z(S.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await ee({
                applicationId: i,
                channelId: r,
                embeddedActivitiesManager: u,
                isStart: a,
                guildId: I
            });
            if ((null == p || p(), !e)) throw new S.Z(S.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED);
        }
        s.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            nonce: T,
            applicationId: i,
            channelId: r
        });
    } catch (e) {
        return (
            s.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                nonce: T,
                guildId: I,
                applicationId: i,
                channelId: r,
                isStart: a,
                error: e instanceof S.Z || e instanceof E.Z || e instanceof A.Z ? e : new E.Z(e)
            }),
            !1
        );
    }
    return !0;
}
function $(e, t) {
    let n = (null == t ? void 0 : t.type) === W.d4z.GUILD_VOICE,
        r = T.Z.getApplication(e),
        i = null != r && (0, P.yE)(r.flags, W.udG.EMBEDDED),
        a = (0, x.l5)(t);
    return (n && i) || a;
}
async function J(e) {
    let { applicationId: t, nonce: n, channelId: r, guildId: i, commandOrigin: a, sectionName: o, source: s, onExecutedCallback: l } = e,
        u = null;
    try {
        u = await (0, I.ZP)(r, t);
    } catch (e) {
        if (e.message === I.sV) return !1;
        throw e;
    }
    if (!(u.handler !== f.VC.APP_HANDLER || K.Yq.includes(t))) {
        let e =
                null != i
                    ? await (0, p.FN)({
                          type: 'guild',
                          guildId: i
                      })
                    : p.ZP.getGuildState(i),
            n = await (0, p.FN)({ type: 'user' });
        if (
            !(await (0, h.L)({
                applicationId: t,
                userIndexState: n,
                guildIndexState: e
            }))
        )
            return !1;
    }
    let c = C.Z.getChannel(r),
        d = null != i ? y.Z.getGuild(i) : null;
    return (
        null != c &&
        (await new Promise((e, t) => {
            (0, m.Z)({
                command: u,
                optionValues: {},
                context: {
                    channel: c,
                    guild: d
                },
                commandOrigin: a,
                sectionName: o,
                source: s,
                interactionLifecycleOptionsFactory: () => ({
                    nonce: n,
                    onSuccess: () => {
                        null == l || l(), e();
                    },
                    onFailure: (e, n, r, i) => {
                        null == l || l(),
                            null != e && null != n && null != r
                                ? t(
                                      new E.Z({
                                          status: r,
                                          body: {
                                              message: n,
                                              code: e
                                          }
                                      })
                                  )
                                : null != i && i in A.Z.ReasonCodes
                                  ? t(new A.Z(i))
                                  : t(new A.Z(A.Z.ReasonCodes.UNKNOWN));
                    }
                })
            });
        }),
        !0)
    );
}
async function ee(e) {
    let t,
        { applicationId: n, channelId: r, embeddedActivitiesManager: i, isStart: o, guildId: s } = e,
        u = R.default.getSessionId(),
        c = b.default.getCurrentUser(),
        d = n;
    if (null == d) return !1;
    let _ = await (0, F.Z)(d, r);
    if (null == r) return M.S.dispatch(W.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: d }), !1;
    let E = C.Z.getChannel(r);
    if (null == E || null == c || null == _) return !1;
    let f =
        null != r
            ? (0, Z.e4)({
                  channelId: r,
                  ChannelStore: C.Z,
                  GuildStore: y.Z,
                  PermissionStore: L.Z,
                  VoiceStateStore: D.Z
              })
            : Z.jy.NO_CHANNEL;
    if (f !== Z.jy.CAN_LAUNCH)
        return (
            f === Z.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? (0, N.w)()
                : f === Z.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  l.Z.show({
                      title: q.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
                      body: q.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                      hideActionSheet: !1
                  }),
            !1
        );
    let h = G.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == h ? void 0 : h.applicationId) != null && (t = T.Z.getApplication(null == h ? void 0 : h.applicationId)),
        !(
            !o ||
            (await (0, B.p)({
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
    let p = (0, V.Z)(r),
        m = j.wP.includes(E.type);
    if (p) {
        if (
            !(await (0, H.Z)({
                channelId: r,
                bypassChangeModal: null != t
            }))
        )
            return !1;
    } else if (!(0, x.WS)(E) || !m) return !1;
    return (
        await w.Z.post({
            url: W.ANM.ACTIVITY_CHANNEL_LAUNCH(r, n),
            body: {
                session_id: u,
                guild_id: null != s ? s : void 0
            },
            trackedActionData: {
                event: a.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                properties: {
                    guild_id: s,
                    channel_id: r,
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
function et(e) {
    var t, n;
    let { channelId: r, applicationId: i, showFeedback: a = !0 } = e,
        o = G.ZP.getSelfEmbeddedActivityForChannel(r);
    s.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_CLOSE',
        channelId: r,
        applicationId: i,
        locationId: null == o ? void 0 : null === (t = o.location) || void 0 === t ? void 0 : t.id,
        instanceId: null == o ? void 0 : o.launchId,
        showFeedback: a
    });
    let l = g.Z.getSelectedParticipantId(r),
        u = null === (n = b.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null != G.ZP.getEmbeddedActivitiesForChannel(r).find((e) => e.applicationId === i) && null != u && '' !== u) l === i && c.Z.selectParticipant(r, null);
}
async function en() {
    try {
        s.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await o.tn.get({
                url: W.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0
            }),
            t = e.body.applications,
            n = t.map((e) => O.Z.createFromServer(e));
        s.Z.dispatch({
            type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS',
            applications: n,
            assets: e.body.assets
        }),
            s.Z.dispatch({
                type: 'APPLICATIONS_FETCH_SUCCESS',
                applications: t
            });
    } catch (e) {
        s.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL' });
    }
}
async function er(e, t, n) {
    try {
        s.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START' });
        let r = await o.tn.post({
            url: W.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
            query: { channel_id: t },
            attachments: [
                {
                    name: 'file',
                    file: n
                }
            ]
        });
        return (
            s.Z.dispatch({
                type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS',
                attachment: r.body.attachment
            }),
            r.body.attachment
        );
    } catch (e) {
        return s.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL' }), new E.Z(e);
    }
}
let ei = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function ea(e) {
    var t, n, r, i;
    let { guildId: o, force: l = !1 } = e,
        u = G.ZP.getShelfActivities(o),
        c = u.map((e) => T.Z.getApplication(e.application_id)).filter(U.lm);
    if (!l && !G.ZP.shouldFetchShelf(o)) {
        if (null === (t = G.ZP.getShelfFetchStatus(o)) || void 0 === t ? void 0 : t.isFetching) {
            let e, t;
            let n = new Promise((t) => {
                    (e = ei.bind(null, o, t)), s.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
                }),
                r = new Promise((e) => {
                    (t = ei.bind(null, o, e)), s.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t);
                });
            await Promise.race([n, r]), null != e && (s.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e), (e = null)), null != t && (s.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t), (t = null));
        }
        return {
            activityConfigs: u,
            applications: c
        };
    }
    try {
        s.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_FETCH_SHELF',
            guildId: o
        });
        let e = void 0 !== o && '' !== o ? { guild_id: o } : void 0,
            t = await w.Z.get({
                url: W.ANM.ACTIVITY_SHELF,
                query: e,
                trackedActionData: {
                    event: a.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                    properties: { guild_id: o }
                },
                retries: 3,
                oldFormErrors: !0
            }),
            l = null !== (n = t.body.activities) && void 0 !== n ? n : [],
            u = null !== (r = t.body.applications) && void 0 !== r ? r : [],
            c = null !== (i = t.body.assets) && void 0 !== i ? i : {};
        return (
            s.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS',
                guildId: o,
                activities: l,
                applications: u,
                assets: c
            }),
            u.length > 0 &&
                s.Z.dispatch({
                    type: 'APPLICATIONS_FETCH_SUCCESS',
                    applications: u
                }),
            {
                activityConfigs: l,
                applications: u.map((e) => O.Z.createFromServer(e))
            }
        );
    } catch (e) {
        return (
            s.Z.dispatch({
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
async function eo(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i } = e,
        a = await d.Z.createInvite(
            t,
            {
                target_type: z.Iq.EMBEDDED_APPLICATION,
                target_application_id: r
            },
            i
        );
    null != C.Z.getChannel(n) && _.Z.sendInvite(n, a.code, i, null);
}
async function es(e) {
    let { channelId: t, applicationId: n, userId: r, location: i } = e,
        a = await d.Z.createInvite(
            t,
            {
                target_type: z.Iq.EMBEDDED_APPLICATION,
                target_application_id: n
            },
            i
        );
    u.Z.ensurePrivateChannel(r).then((e) => {
        null != C.Z.getChannel(e) && _.Z.sendInvite(e, a.code, i, null);
    });
}
function el() {
    s.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function eu(e) {
    let t = W.ANM.ACTIVITY_TEST_MODE(e);
    try {
        return (
            await o.tn.get({
                url: t,
                oldFormErrors: !0
            }),
            !0
        );
    } catch (e) {
        return !1;
    }
}
function ec(e) {
    s.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_PANEL_MODE',
        activityPanelMode: e
    });
}
function ed(e) {
    s.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
        focusedActivityLayout: e
    });
}
