t(47120);
var i = t(200651),
    a = t(149765),
    o = t(481060),
    r = t(570140),
    l = t(700785);
__OVERLAY__ &&
    r.Z.subscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN', function (e) {
        let {
                clientId: n,
                authorizeProps: { authorizations: c, permissions: s, ...d }
            } = e,
            u = 'OAuth2Authorize_'.concat(n, '_').concat(d.guildId, '_').concat(d.channelId);
        function p(e) {
            let { location: t } = e;
            r.Z.dispatch({
                type: 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE',
                clientId: n,
                location: t
            });
        }
        let _ = l.Hn;
        try {
            _ = a.vB(null != s ? s : 0);
        } catch (e) {}
        (0, o.openModalLazy)(
            async () => {
                let { OAuth2AuthorizeModal: e } = await Promise.resolve().then(t.bind(t, 69580));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        ...d,
                        authorizations: new Map(c),
                        permissions: _,
                        callback: p
                    });
            },
            {
                modalKey: u,
                onCloseRequest: () => {
                    (0, o.closeModal)(u), p({});
                }
            }
        );
    });
