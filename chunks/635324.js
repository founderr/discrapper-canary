n(47120);
var i = n(735250),
    s = n(149765),
    a = n(481060),
    r = n(570140),
    o = n(700785);
__OVERLAY__ &&
    r.Z.subscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN', function (e) {
        let {
                clientId: t,
                authorizeProps: { authorizations: l, permissions: c, ...d }
            } = e,
            u = 'OAuth2Authorize_'.concat(t, '_').concat(d.guildId, '_').concat(d.channelId);
        function h(e) {
            let { location: n } = e;
            r.Z.dispatch({
                type: 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE',
                clientId: t,
                location: n
            });
        }
        let p = o.Hn;
        try {
            p = s.vB(null != c ? c : 0);
        } catch (e) {}
        (0, a.openModalLazy)(
            async () => {
                let { OAuth2AuthorizeModal: e } = await Promise.resolve().then(n.bind(n, 69580));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        ...d,
                        authorizations: new Map(l),
                        permissions: p,
                        callback: h
                    });
            },
            {
                modalKey: u,
                onCloseRequest: () => {
                    (0, a.closeModal)(u), h({});
                }
            }
        );
    });
