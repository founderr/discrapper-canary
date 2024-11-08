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
    g = n(838195),
    f = n(928518),
    _ = n(592125),
    E = n(293273),
    I = n(885110),
    C = n(451478),
    v = n(630388),
    S = n(823379),
    N = n(591759),
    T = n(228488),
    x = n(996106),
    A = n(914946),
    b = n(452426),
    Z = n(561205),
    y = n(600027),
    L = n(852926),
    j = n(186901),
    R = n(981631);
async function O(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '',
        l = E.Z.getApplicationActivity(t);
    if (null == l || null == l.secrets || !(0, A.t9)(i, l.party, l.secrets)) throw new x.Z({ errorCode: R.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity includes a party and appropriate secret.');
    let a = (0, p.Z)(l, I.Z);
    if (a) {
        let { lock: t } = (0, L.jU)(e);
        return (0, o.h7)(l, a).then(() => {
            throw (t(), new x.Z({ errorCode: R.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure user does have have privacy enabled.'));
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
    [R.Etm.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: {
            [j.Gp.ANY]: [r.x.RPC, j.lH]
        },
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, pid: i }
                } = e,
                r = t.application.id;
            if (null == r) throw new x.Z({ errorCode: R.lTL.INVALID_COMMAND }, 'No application.');
            return O(i, r, n, R.mFx.JOIN);
        }
    },
    [R.Etm.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [j.Gp.ANY]: [r.x.RPC, j.lH]
        },
        handler(e) {
            let {
                    args: { user_id: t }
                } = e,
                n = _.Z.getDMFromUserId(t);
            null != n && (0, d.In)(n, !0, !0);
        }
    },
    [R.Etm.ACTIVITY_INVITE_USER]: {
        scope: {
            [j.Gp.ANY]: [r.x.RPC, j.lH]
        },
        validation: (e) =>
            (0, b.Z)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    type: e.number().required().valid([R.mFx.JOIN]),
                    content: e.string().min(0).max(1024),
                    pid: e.number().min(0).required()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: i, content: r, pid: l }
                } = e,
                a = t.application.id;
            if (null == a) throw new x.Z({ errorCode: R.lTL.INVALID_COMMAND }, 'No application.');
            return O(l, a, i, n, r);
        }
    },
    [R.Etm.ACCEPT_ACTIVITY_INVITE]: {
        scope: {
            [j.Gp.ANY]: [r.x.RPC, j.lH]
        },
        validation: (e) =>
            (0, b.Z)(e)
                .required()
                .keys({
                    type: e.number().required().valid([R.mFx.JOIN]),
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
            if (null == s) throw new x.Z({ errorCode: R.lTL.INVALID_COMMAND }, 'No application.');
            let o = Promise.resolve(!1);
            if (n === R.mFx.JOIN)
                o = c.Z.join({
                    userId: i,
                    sessionId: r,
                    applicationId: s,
                    channelId: l,
                    messageId: a
                });
            return o.then((e) => {
                if (!e) throw new x.Z({ errorCode: R.lTL.INVALID_INVITE }, 'Invite is expired or invalid.');
            });
        }
    },
    [R.Etm.OPEN_INVITE_DIALOG]: {
        scope: {
            [j.Gp.ANY]: [r.x.RPC, j.lH, j.wE]
        },
        handler(e) {
            let { socket: t } = e,
                { channel: r, guild: l } = (0, y.T)(),
                s = f.Z.getWindow(R.KJ3.CHANNEL_CALL_POPOUT);
            (null == s ? void 0 : s.closed) && (s = null);
            let o = null != s ? R.IlC.POPOUT : R.IlC.APP;
            (0, T.Pr)({}, null == s ? void 0 : s.document),
                (0, a.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('7654'), n.e('19821')]).then(n.bind(n, 560114));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: l,
                                channel: r,
                                applicationId: t.application.id,
                                analyticsLocation: R.Sbl.ACTIVITY_RPC,
                                source: R.t4x.ACTIVITY_INVITE
                            });
                    },
                    { contextKey: o === R.IlC.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT }
                );
        }
    },
    [R.Etm.INITIATE_IMAGE_UPLOAD]: (0, l.S)(R.Etm.INITIATE_IMAGE_UPLOAD, {
        scope: {
            [j.Gp.ANY]: [r.x.RPC, j.lH, j.wE]
        },
        handler(e) {
            var t;
            let { socket: n } = e,
                i = n.application.id;
            if (null == i) throw new x.Z({ errorCode: R.lTL.INVALID_COMMAND }, 'No application.');
            let r = null === (t = (0, Z.Z)()) || void 0 === t ? void 0 : t.id;
            if (null == r) throw new x.Z({ errorCode: R.lTL.UNKNOWN_ERROR }, 'Unable to find selected channel');
            return new Promise((e, t) => {
                !(function (e, t) {
                    var n;
                    let i = C.Z.getLastFocusedWindowId(),
                        r = null == i ? null : null === (n = (0, h.g0)(i)) || void 0 === n ? void 0 : n.renderWindow;
                    if (null == r) throw new x.Z({ errorCode: R.lTL.UNKNOWN_ERROR }, 'No valid window found');
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
                        (0, S.lm)(l.files) && e(l.files[0]), a();
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
                        (0, S.lm)(l) && (0, S.lm)(l.url) && !(l instanceof u.Z) ? e({ image_url: l.url }) : t(l);
                    },
                    () => t(Error('Upload canceled'))
                );
            }).catch((e) => {
                var t;
                throw new x.Z({ errorCode: R.lTL.UNKNOWN_ERROR }, null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : 'Failed to upload image');
            });
        }
    }),
    [R.Etm.OPEN_SHARE_MOMENT_DIALOG]: (0, l.S)(R.Etm.OPEN_SHARE_MOMENT_DIALOG, {
        scope: { [j.Gp.ANY]: [j.wE] },
        handler(e) {
            var t;
            let {
                socket: n,
                args: { mediaUrl: i }
            } = e;
            (0, A.bu)(n.transport);
            let r = n.application.id;
            if (null == r) throw new x.Z({ errorCode: R.lTL.INVALID_COMMAND }, 'No application.');
            if (!(0, v.yE)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, R.udG.EMBEDDED)) throw new x.Z({ errorCode: R.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let l = (0, Z.Z)();
            if (null == l) throw new x.Z({ errorCode: R.lTL.INVALID_COMMAND }, 'No channel found');
            if (!N.Z.isDiscordCdnUrl(i)) throw new x.Z({ errorCode: R.lTL.INVALID_PAYLOAD }, 'mediaUrl must be a Discord CDN url');
            (0, g.Z)({
                applicationId: r,
                channelId: l.id,
                mediaUrl: i
            });
        }
    })
};
