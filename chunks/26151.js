var i = r(544891),
    a = r(570140),
    s = r(523746),
    o = r(699516),
    l = r(594174),
    u = r(626135),
    c = r(668781),
    d = r(194359),
    f = r(287734),
    _ = r(981631),
    h = r(388032);
n.Z = {
    call(e, n, r, a, s) {
        let p = (r) => {
            f.default.selectVoiceChannel(e, n), r && this.ring(e), null == s || s(e);
        };
        if (null != a) {
            if (o.Z.isBlocked(a)) return;
            let n = l.default.getUser(a);
            i.tn
                .get({
                    url: _.ANM.CALL(e),
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (e) => {
                        p(r && e.body.ringable);
                    },
                    () => {
                        u.default.track(_.rMx.OPEN_POPOUT, {
                            type: 'Not Friend',
                            source: 'Call'
                        }),
                            c.Z.show({
                                title: h.intl.string(h.t.My50nZ),
                                body: h.intl.format(h.t.IdKo29, { username: null != n ? n.username : '' }),
                                confirmText: h.intl.string(h.t['PMsq/f']),
                                cancelText: h.intl.string(h.t.BddRzc),
                                onConfirm() {
                                    d.Z.addRelationship({
                                        userId: a,
                                        context: { location: 'Call' }
                                    });
                                }
                            });
                    }
                );
        } else p(r);
    },
    ring(e, n) {
        let r = s.Z.getCall(e);
        if (null != r && null != r.messageId && !s.Z.isCallUnavailable(e)) {
            i.tn.post({
                url: _.ANM.CALL_RING(e),
                body: { recipients: n },
                oldFormErrors: !0,
                rejectWithError: !0
            });
            return;
        }
        a.Z.dispatch({
            type: 'CALL_ENQUEUE_RING',
            channelId: e,
            recipients: n
        });
    },
    stopRinging: (e, n) =>
        i.tn.post({
            url: _.ANM.CALL_STOP_RINGING(e),
            body: { recipients: n },
            oldFormErrors: !0,
            rejectWithError: !0
        })
};
