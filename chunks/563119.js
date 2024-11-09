var r = n(200651);
n(192379);
var i = n(704215),
    a = n(952265),
    s = n(468026),
    o = n(231757),
    l = n(605236),
    u = n(131951),
    c = n(626135),
    d = n(542238),
    f = n(927923),
    _ = n(981631),
    h = n(388032),
    p = n(820611);
let m = 'game_console_alert_modal',
    g = 'game_console_ptt_alert_modal';
t.Z = {
    maybeShowPTTAlert(e) {
        if (u.Z.getMode() !== _.pM4.PUSH_TO_TALK || (0, l.un)(i.z.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
        let t = {
            [_.ABu.XBOX]: h.intl.string(h.t.bVZ7v7),
            [_.ABu.PLAYSTATION]: h.intl.string(h.t['6iqUsb']),
            [_.ABu.PLAYSTATION_STAGING]: h.intl.string(h.t['6iqUsb'])
        }[e];
        return null == t
            ? Promise.resolve()
            : new Promise((e) => {
                  let n = () => {
                          (0, l.EW)(i.z.CONSOLE_PTT_DISABLE_ALERT), e();
                      },
                      o = (e) =>
                          (0, r.jsx)(s.default, {
                              ...e,
                              title: t,
                              body: h.intl.string(h.t.bL21zs),
                              onConfirm: n,
                              titleClassName: p.title
                          });
                  (0, a.nf)(g) ? (0, a.o)(g, o) : (0, a.h7)(o, { modalKey: g });
              });
    },
    showSelfDismissableAlert(e) {
        let { title: t, body: n, errorCodeMessage: i, reconnectPlatformType: l } = e,
            u = (0, r.jsx)(d.t, {
                body: n,
                errorCodeMessage: i,
                dismissCallback: () => (0, a.Mr)(m)
            });
        function h() {
            null != l &&
                ((0, o.Z)({ platformType: l }),
                c.default.track(_.rMx.ACCOUNT_LINK_STEP, {
                    previous_step: f.Lw,
                    current_step: 'desktop oauth',
                    platform_type: l
                }));
        }
        let p = (e) =>
            (0, r.jsx)(s.default, {
                ...e,
                title: t,
                body: u,
                onConfirm: h
            });
        (0, a.nf)(m) ? (0, a.o)(m, p) : (0, a.h7)(p, { modalKey: m });
    }
};
