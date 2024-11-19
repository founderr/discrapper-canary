var r = n(544891),
    i = n(570140),
    a = n(523746),
    s = n(699516),
    o = n(594174),
    l = n(626135),
    u = n(668781),
    c = n(194359),
    d = n(287734),
    f = n(981631),
    _ = n(388032);
t.Z = {
    call(e, t, n, i, a) {
        let p = (n) => {
            d.default.selectVoiceChannel(e, t), n && this.ring(e), null == a || a(e);
        };
        if (null != i) {
            if (s.Z.isBlocked(i)) return;
            let t = o.default.getUser(i);
            r.tn
                .get({
                    url: f.ANM.CALL(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (e) => {
                        p(n && e.body.ringable);
                    },
                    () => {
                        l.default.track(f.rMx.OPEN_POPOUT, {
                            type: 'Not Friend',
                            source: 'Call'
                        }),
                            u.Z.show({
                                title: _.intl.string(_.t.My50nZ),
                                body: _.intl.format(_.t.IdKo29, { username: null != t ? t.username : '' }),
                                confirmText: _.intl.string(_.t['PMsq/f']),
                                cancelText: _.intl.string(_.t.BddRzc),
                                onConfirm() {
                                    c.Z.addRelationship({
                                        userId: i,
                                        context: { location: 'Call' }
                                    });
                                }
                            });
                    }
                );
        } else p(n);
    },
    ring(e, t) {
        let n = a.Z.getCall(e);
        if (null != n && null != n.messageId && !a.Z.isCallUnavailable(e)) {
            r.tn.post({
                url: f.ANM.CALL_RING(e),
                body: { recipients: t },
                oldFormErrors: !0,
                rejectWithError: !0
            });
            return;
        }
        i.Z.dispatch({
            type: 'CALL_ENQUEUE_RING',
            channelId: e,
            recipients: t
        });
    },
    stopRinging: (e, t) =>
        r.tn.post({
            url: f.ANM.CALL_STOP_RINGING(e),
            body: { recipients: t },
            oldFormErrors: !0,
            rejectWithError: !0
        })
};
