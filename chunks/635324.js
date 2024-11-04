n(47120);
var i = n(200651),
    r = n(149765),
    s = n(481060),
    a = n(570140),
    l = n(700785);
__OVERLAY__ &&
    a.Z.subscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN', function (e) {
        let {
                clientId: t,
                authorizeProps: { authorizations: o, permissions: c, ...d }
            } = e,
            u = 'OAuth2Authorize_'.concat(t, '_').concat(d.guildId, '_').concat(d.channelId);
        function h(e) {
            let { location: n } = e;
            a.Z.dispatch({
                type: 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE',
                clientId: t,
                location: n
            });
        }
        let p = l.Hn;
        try {
            p = r.vB(null != c ? c : 0);
        } catch (e) {}
        (0, s.openModalLazy)(
            async () => {
                let { OAuth2AuthorizeModal: e } = await Promise.resolve().then(n.bind(n, 69580));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        ...d,
                        authorizations: new Map(o),
                        permissions: p,
                        callback: h
                    });
            },
            {
                modalKey: u,
                onCloseRequest: () => {
                    (0, s.closeModal)(u), h({});
                }
            }
        );
    });
