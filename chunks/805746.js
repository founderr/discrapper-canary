n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(384275),
    l = n(317381),
    u = n(513202),
    c = n(367907),
    d = n(138201),
    f = n(881998),
    _ = n(585483),
    p = n(981631),
    h = n(388032);
t.Z = (e) => {
    let { application: t, reportId: n } = e,
        [m, g] = i.useState(!1),
        E = (0, a.e7)([f.Z], () => {
            let e = f.Z.getApps();
            return null != e ? e.find((e) => e.application.id === t.id) : null;
        });
    i.useEffect(() => {
        null != E && g(!0);
    }, [E]),
        i.useEffect(() => {
            'NOT_FETCHED' === f.Z.getFetchState() && o.Z.fetch();
        }, []);
    let v = (0, a.e7)([l.ZP], () => l.ZP.getSelfEmbeddedActivities()),
        I = i.useCallback(() => {
            if (
                (g(!1),
                c.ZP.trackWithMetadata(p.rMx.IAR_DEAUTHORIZE_APP_BUTTON_CLICKED, {
                    application_id: t.id,
                    report_id: n
                }),
                null == E)
            )
                return;
            o.Z.delete(E.id), _.S.safeDispatch(p.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { applicationId: t.id });
            let e = v.get(t.id);
            null != e &&
                u.Z.leaveActivity({
                    channelId: e.channelId,
                    applicationId: t.id,
                    showFeedback: !1
                });
        }, [t.id, E, v, n]);
    return null == t
        ? null
        : (0, r.jsx)(d.Z, {
              title: h.intl.string(h.t.ygG62N),
              description: h.intl.string(h.t.S51EKi),
              buttonText: m ? h.intl.string(h.t.xXpoGR) : h.intl.string(h.t.JsiUnJ),
              buttonDisabled: !m,
              buttonColor: m ? s.Button.Colors.RED : s.Button.Colors.WHITE,
              buttonLook: m ? s.Button.Looks.FILLED : s.Button.Looks.LINK,
              onButtonPress: I
          });
};
