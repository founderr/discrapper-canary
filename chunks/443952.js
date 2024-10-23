n(47120), n(411104), n(789020);
var i = n(200651);
n(192379);
var a = n(243814),
    s = n(45792),
    r = n(481060),
    l = n(278323),
    o = n(988298),
    c = n(224706),
    d = n(45114),
    u = n(479531),
    _ = n(40851),
    E = n(566620),
    h = n(596223),
    m = n(838195),
    I = n(928518),
    p = n(592125),
    g = n(293273),
    T = n(885110),
    f = n(451478),
    C = n(630388),
    S = n(823379),
    N = n(591759),
    A = n(228488),
    v = n(996106),
    Z = n(914946),
    L = n(452426),
    R = n(561205),
    O = n(600027),
    x = n(852926),
    b = n(186901),
    M = n(981631);
async function P(e, t, n, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '',
        s = g.Z.getApplicationActivity(t);
    if (null == s || null == s.secrets || !(0, Z.t9)(i, s.party, s.secrets)) throw new v.Z({ errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity includes a party and appropriate secret.');
    let r = (0, h.Z)(s, T.Z);
    if (r) {
        let { lock: t } = (0, x.jU)(e);
        return (0, o.h7)(s, r).then(() => {
            throw (t(), new v.Z({ errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure user does have have privacy enabled.'));
        });
    }
    await l.Z.sendActivityInviteUser({
        userId: n,
        type: i,
        activity: s,
        content: a,
        location: 'In-Game Invite'
    });
}
t.Z = {
    [M.Etm.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: {
            [b.Gp.ANY]: [a.x.RPC, b.lH]
        },
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, pid: i }
                } = e,
                a = t.application.id;
            if (null == a) throw new v.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            return P(i, a, n, M.mFx.JOIN);
        }
    },
    [M.Etm.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [b.Gp.ANY]: [a.x.RPC, b.lH]
        },
        handler(e) {
            let {
                    args: { user_id: t }
                } = e,
                n = p.Z.getDMFromUserId(t);
            null != n && (0, d.In)(n, !0, !0);
        }
    },
    [M.Etm.ACTIVITY_INVITE_USER]: {
        scope: {
            [b.Gp.ANY]: [a.x.RPC, b.lH]
        },
        validation: (e) =>
            (0, L.Z)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    type: e.number().required().valid([M.mFx.JOIN]),
                    content: e.string().min(0).max(1024),
                    pid: e.number().min(0).required()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: i, content: a, pid: s }
                } = e,
                r = t.application.id;
            if (null == r) throw new v.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            return P(s, r, i, n, a);
        }
    },
    [M.Etm.ACCEPT_ACTIVITY_INVITE]: {
        scope: {
            [b.Gp.ANY]: [a.x.RPC, b.lH]
        },
        validation: (e) =>
            (0, L.Z)(e)
                .required()
                .keys({
                    type: e.number().required().valid([M.mFx.JOIN]),
                    user_id: e.string().required(),
                    session_id: e.string().required(),
                    channel_id: e.string().required(),
                    message_id: e.string().required()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: i, session_id: a, channel_id: s, message_id: r }
                } = e,
                l = t.application.id;
            if (null == l) throw new v.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            let o = Promise.resolve(!1);
            if (n === M.mFx.JOIN)
                o = c.Z.join({
                    userId: i,
                    sessionId: a,
                    applicationId: l,
                    channelId: s,
                    messageId: r
                });
            return o.then((e) => {
                if (!e) throw new v.Z({ errorCode: M.lTL.INVALID_INVITE }, 'Invite is expired or invalid.');
            });
        }
    },
    [M.Etm.OPEN_INVITE_DIALOG]: {
        scope: {
            [b.Gp.ANY]: [a.x.RPC, b.lH, b.wE]
        },
        handler(e) {
            let { socket: t } = e,
                { channel: a, guild: s } = (0, O.T)(),
                l = I.Z.getWindow(M.KJ3.CHANNEL_CALL_POPOUT);
            (null == l ? void 0 : l.closed) && (l = null);
            let o = null != l ? M.IlC.POPOUT : M.IlC.APP;
            (0, A.Pr)({}, null == l ? void 0 : l.document),
                (0, r.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('7654'), n.e('85683')]).then(n.bind(n, 560114));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: s,
                                channel: a,
                                applicationId: t.application.id,
                                analyticsLocation: M.Sbl.ACTIVITY_RPC,
                                source: M.t4x.ACTIVITY_INVITE
                            });
                    },
                    { contextKey: o === M.IlC.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT }
                );
        }
    },
    [M.Etm.INITIATE_IMAGE_UPLOAD]: (0, s.S)(M.Etm.INITIATE_IMAGE_UPLOAD, {
        scope: {
            [b.Gp.ANY]: [a.x.RPC, b.lH, b.wE]
        },
        handler(e) {
            var t;
            let { socket: n } = e,
                i = n.application.id;
            if (null == i) throw new v.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            let a = null === (t = (0, R.Z)()) || void 0 === t ? void 0 : t.id;
            if (null == a) throw new v.Z({ errorCode: M.lTL.UNKNOWN_ERROR }, 'Unable to find selected channel');
            return new Promise((e, t) => {
                !(function (e, t) {
                    var n;
                    let i = f.Z.getLastFocusedWindowId(),
                        a = null == i ? null : null === (n = (0, _.g0)(i)) || void 0 === n ? void 0 : n.renderWindow;
                    if (null == a) throw new v.Z({ errorCode: M.lTL.UNKNOWN_ERROR }, 'No valid window found');
                    let s = a.document.createElement('input');
                    (s.style.display = 'none'), (s.type = 'file'), (s.accept = 'image/jpeg, image/jpg, image/png, image/gif');
                    let r = () => {
                        (null == s.files || 0 === s.files.length) && t(),
                            a.document.body.removeEventListener('focus', r, !0),
                            setTimeout(() => {
                                a.document.body.removeChild(s);
                            }, 1000);
                    };
                    s.addEventListener('change', () => {
                        (0, S.lm)(s.files) && e(s.files[0]), r();
                    }),
                        s.addEventListener('cancel', () => {
                            r();
                        }),
                        a.document.body.addEventListener('focus', r, !0),
                        a.document.body.appendChild(s),
                        s.click();
                })(
                    async (n) => {
                        let s = await (0, E.kv)(i, a, n);
                        (0, S.lm)(s) && (0, S.lm)(s.url) && !(s instanceof u.Z) ? e({ image_url: s.url }) : t(s);
                    },
                    () => t(Error('Upload canceled'))
                );
            }).catch((e) => {
                var t;
                throw new v.Z({ errorCode: M.lTL.UNKNOWN_ERROR }, null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : 'Failed to upload image');
            });
        }
    }),
    [M.Etm.OPEN_SHARE_MOMENT_DIALOG]: (0, s.S)(M.Etm.OPEN_SHARE_MOMENT_DIALOG, {
        scope: { [b.Gp.ANY]: [b.wE] },
        handler(e) {
            var t;
            let {
                socket: n,
                args: { mediaUrl: i }
            } = e;
            (0, Z.bu)(n.transport);
            let a = n.application.id;
            if (null == a) throw new v.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            if (!(0, C.yE)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, M.udG.EMBEDDED)) throw new v.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let s = (0, R.Z)();
            if (null == s) throw new v.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No channel found');
            if (!N.Z.isDiscordCdnUrl(i)) throw new v.Z({ errorCode: M.lTL.INVALID_PAYLOAD }, 'mediaUrl must be a Discord CDN url');
            (0, m.Z)({
                applicationId: a,
                channelId: s.id,
                mediaUrl: i
            });
        }
    })
};
