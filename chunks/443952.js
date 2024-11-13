n(47120), n(411104), n(789020);
var i = n(200651);
n(192379);
var r = n(243814),
    l = n(45792),
    a = n(481060),
    s = n(278323),
    o = n(988298),
    c = n(224706),
    d = n(45114),
    u = n(479531),
    h = n(40851),
    m = n(566620),
    p = n(596223),
    g = n(486003),
    f = n(838195),
    _ = n(928518),
    E = n(592125),
    I = n(293273),
    C = n(885110),
    v = n(451478),
    S = n(630388),
    N = n(823379),
    T = n(591759),
    A = n(228488),
    b = n(996106),
    x = n(914946),
    Z = n(452426),
    L = n(561205),
    y = n(600027),
    R = n(852926),
    O = n(186901),
    P = n(981631);
async function j(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '',
        l = I.Z.getApplicationActivity(t);
    if (null == l || null == l.secrets || !(0, x.t9)(i, l.party, l.secrets)) throw new b.Z({ errorCode: P.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity includes a party and appropriate secret.');
    let a = (0, p.Z)(l, C.Z);
    if (a) {
        let { lock: t } = (0, R.jU)(e);
        return (0, o.h7)(l, a).then(() => {
            throw (t(), new b.Z({ errorCode: P.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure user does have have privacy enabled.'));
        });
    }
    await s.Z.sendActivityInviteUser({
        userId: n,
        type: i,
        activity: l,
        content: r,
        location: 'In-Game Invite'
    });
}
t.Z = {
    [P.Etm.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: {
            [O.Gp.ANY]: [r.x.RPC, O.lH]
        },
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, pid: i }
                } = e,
                r = t.application.id;
            if (null == r) throw new b.Z({ errorCode: P.lTL.INVALID_COMMAND }, 'No application.');
            return j(i, r, n, P.mFx.JOIN);
        }
    },
    [P.Etm.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [O.Gp.ANY]: [r.x.RPC, O.lH]
        },
        handler(e) {
            let {
                    args: { user_id: t }
                } = e,
                n = E.Z.getDMFromUserId(t);
            null != n && (0, d.In)(n, !0, !0);
        }
    },
    [P.Etm.ACTIVITY_INVITE_USER]: {
        scope: {
            [O.Gp.ANY]: [r.x.RPC, O.lH]
        },
        validation: (e) =>
            (0, Z.Z)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    type: e.number().required().valid([P.mFx.JOIN]),
                    content: e.string().min(0).max(1024),
                    pid: e.number().min(0).required()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: i, content: r, pid: l }
                } = e,
                a = t.application.id;
            if (null == a) throw new b.Z({ errorCode: P.lTL.INVALID_COMMAND }, 'No application.');
            return j(l, a, i, n, r);
        }
    },
    [P.Etm.ACCEPT_ACTIVITY_INVITE]: {
        scope: {
            [O.Gp.ANY]: [r.x.RPC, O.lH]
        },
        validation: (e) =>
            (0, Z.Z)(e)
                .required()
                .keys({
                    type: e.number().required().valid([P.mFx.JOIN]),
                    user_id: e.string().required(),
                    session_id: e.string().required(),
                    channel_id: e.string().required(),
                    message_id: e.string().required()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: i, session_id: r, channel_id: l, message_id: a }
                } = e,
                s = t.application.id;
            if (null == s) throw new b.Z({ errorCode: P.lTL.INVALID_COMMAND }, 'No application.');
            let o = Promise.resolve(!1);
            if (n === P.mFx.JOIN)
                o = c.Z.join({
                    userId: i,
                    sessionId: r,
                    applicationId: s,
                    channelId: l,
                    messageId: a
                });
            return o.then((e) => {
                if (!e) throw new b.Z({ errorCode: P.lTL.INVALID_INVITE }, 'Invite is expired or invalid.');
            });
        }
    },
    [P.Etm.OPEN_INVITE_DIALOG]: {
        scope: {
            [O.Gp.ANY]: [r.x.RPC, O.lH, O.wE]
        },
        handler(e) {
            let { socket: t } = e,
                { channel: r, guild: l } = (0, y.T)(),
                s = (0, g.ZP)({
                    application: t.application,
                    channelId: r.id
                }),
                o = null != s ? _.Z.getWindow(s) : void 0;
            (null == o ? void 0 : o.closed) && (o = void 0);
            let c = null != o ? P.IlC.POPOUT : P.IlC.APP;
            (0, A.Pr)({}, null == o ? void 0 : o.document),
                (0, a.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('7654'), n.e('85683')]).then(n.bind(n, 560114));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: l,
                                channel: r,
                                applicationId: t.application.id,
                                analyticsLocation: P.Sbl.ACTIVITY_RPC,
                                source: P.t4x.ACTIVITY_INVITE
                            });
                    },
                    { contextKey: c === P.IlC.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT }
                );
        }
    },
    [P.Etm.INITIATE_IMAGE_UPLOAD]: (0, l.S)(P.Etm.INITIATE_IMAGE_UPLOAD, {
        scope: {
            [O.Gp.ANY]: [r.x.RPC, O.lH, O.wE]
        },
        handler(e) {
            var t;
            let { socket: n } = e,
                i = n.application.id;
            if (null == i) throw new b.Z({ errorCode: P.lTL.INVALID_COMMAND }, 'No application.');
            let r = null === (t = (0, L.Z)()) || void 0 === t ? void 0 : t.id;
            if (null == r) throw new b.Z({ errorCode: P.lTL.UNKNOWN_ERROR }, 'Unable to find selected channel');
            return new Promise((e, t) => {
                !(function (e, t) {
                    var n;
                    let i = v.Z.getLastFocusedWindowId(),
                        r = null == i ? null : null === (n = (0, h.g0)(i)) || void 0 === n ? void 0 : n.renderWindow;
                    if (null == r) throw new b.Z({ errorCode: P.lTL.UNKNOWN_ERROR }, 'No valid window found');
                    let l = r.document.createElement('input');
                    (l.style.display = 'none'), (l.type = 'file'), (l.accept = 'image/jpeg, image/jpg, image/png, image/gif');
                    let a = () => {
                        (null == l.files || 0 === l.files.length) && t(),
                            r.document.body.removeEventListener('focus', a, !0),
                            setTimeout(() => {
                                r.document.body.removeChild(l);
                            }, 1000);
                    };
                    l.addEventListener('change', () => {
                        (0, N.lm)(l.files) && e(l.files[0]), a();
                    }),
                        l.addEventListener('cancel', () => {
                            a();
                        }),
                        r.document.body.addEventListener('focus', a, !0),
                        r.document.body.appendChild(l),
                        l.click();
                })(
                    async (n) => {
                        let l = await (0, m.kv)(i, r, n);
                        (0, N.lm)(l) && (0, N.lm)(l.url) && !(l instanceof u.Z) ? e({ image_url: l.url }) : t(l);
                    },
                    () => t(Error('Upload canceled'))
                );
            }).catch((e) => {
                var t;
                throw new b.Z({ errorCode: P.lTL.UNKNOWN_ERROR }, null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : 'Failed to upload image');
            });
        }
    }),
    [P.Etm.OPEN_SHARE_MOMENT_DIALOG]: (0, l.S)(P.Etm.OPEN_SHARE_MOMENT_DIALOG, {
        scope: { [O.Gp.ANY]: [O.wE] },
        handler(e) {
            var t;
            let {
                socket: n,
                args: { mediaUrl: i }
            } = e;
            (0, x.bu)(n.transport);
            let r = n.application.id;
            if (null == r) throw new b.Z({ errorCode: P.lTL.INVALID_COMMAND }, 'No application.');
            if (!(0, S.yE)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, P.udG.EMBEDDED)) throw new b.Z({ errorCode: P.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let l = (0, L.Z)();
            if (null == l) throw new b.Z({ errorCode: P.lTL.INVALID_COMMAND }, 'No channel found');
            if (!T.Z.isDiscordCdnUrl(i)) throw new b.Z({ errorCode: P.lTL.INVALID_PAYLOAD }, 'mediaUrl must be a Discord CDN url');
            (0, f.Z)({
                applicationId: r,
                channelId: l.id,
                mediaUrl: i
            });
        }
    })
};
