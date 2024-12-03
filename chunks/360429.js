t.r(n),
    t.d(n, {
        default: function () {
            return N;
        }
    });
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    o = t(846027),
    a = t(239091),
    u = t(287734),
    c = t(872810),
    s = t(410575),
    d = t(418469),
    g = t(701098),
    m = t(607783),
    f = t(435064),
    h = t(779618),
    C = t(39604),
    I = t(258609),
    Z = t(569545),
    x = t(352978),
    p = t(111672),
    M = t(441167),
    S = t(700994),
    b = t(199902),
    j = t(314897),
    v = t(592125),
    E = t(131951),
    V = t(594174),
    k = t(358085),
    w = t(1226),
    A = t(981631),
    T = t(65154),
    G = t(388032);
function L(e) {
    return (0, r.e7)([b.Z], () => {
        let n = b.Z.getActiveStreamForApplicationStream(e);
        return null != n && (0, Z.V9)(n) === (0, Z.V9)(e);
    });
}
function N(e) {
    let { stream: n, analyticsContext: t, appContext: b, exitFullscreen: N, onSelect: U } = e,
        J = (function (e) {
            let n = L(e),
                t = (0, h.Z)(E.Z),
                o = f.Z.getSettings().clipsEnabled,
                a = e.ownerId === j.default.getId(),
                { enableViewerClipping: u, ignoreSenderPreference: c } = M.Z.useExperiment({ location: 'StreamContextMenu' }, { autoTrackExposure: !1 }),
                s = (0, r.e7)([f.Z], () => f.Z.getIsAtMaxSaveClipOperations()),
                d = (0, r.e7)([f.Z], () => f.Z.isViewerClippingAllowedForUser(e.ownerId)) || c;
            return t && u && n
                ? (0, l.jsx)(i.MenuItem, {
                      id: 'clip-stream',
                      disabled: !o || !(a || d) || s,
                      label: G.intl.string(G.t.U4URzM),
                      action: () => (a ? (0, C.C1)() : (0, C.C1)((0, Z.V9)(e)))
                  })
                : null;
        })(n),
        O = L(n),
        R = (function (e) {
            let n = L(e),
                t = (0, S.Z)(e.ownerId, T.Yn.STREAM);
            return n ? t : null;
        })(n),
        B = (function (e) {
            let n;
            let t = (0, r.e7)([I.Z], () => null != I.Z.getRemoteSessionId()),
                o = (0, r.e7)([v.Z], () => v.Z.getChannel(e.channelId), [e.channelId]),
                a = L(e),
                s = V.default.getCurrentUser(),
                d = null != s && e.ownerId === s.id;
            return ((n = d ? G.intl.string(G.t.S5anIS) : a ? G.intl.string(G.t.q3O3Jy) : G.intl.string(G.t['7Xq/nZ'])), t || (!d && a && (null == o ? void 0 : o.isGuildStageVoice())))
                ? null
                : (0, l.jsx)(i.MenuItem, {
                      id: 'watch',
                      label: n,
                      action: a
                          ? function () {
                                (0, c.g)((0, Z.V9)(e));
                            }
                          : function () {
                                u.default.selectVoiceChannel(e.channelId), (0, c.rn)(e);
                            }
                  });
        })(n),
        F = (function (e) {
            let n = L(e),
                t = (0, r.e7)([E.Z], () => E.Z.isLocalMute(e.ownerId, T.Yn.STREAM)),
                a = V.default.getCurrentUser(),
                u = null != a && e.ownerId === a.id;
            return !n || u
                ? null
                : (0, l.jsx)(i.MenuCheckboxItem, {
                      id: 'mute',
                      label: G.intl.string(G.t.sWmtIy),
                      action: function () {
                          o.Z.toggleLocalMute(e.ownerId, T.Yn.STREAM);
                      },
                      checked: t
                  });
        })(n),
        Y = (function (e) {
            let n = L(e),
                t = e.ownerId === j.default.getId(),
                { sidechainAvailable: a } = p.Z.getCurrentConfig({ location: 'StreamContextMenu' }),
                u = (0, r.e7)([E.Z], () => E.Z.getSidechainCompression()),
                c = (0, r.e7)([E.Z], () => E.Z.getSidechainCompressionStrength());
            return t || !n || !a || (0, k.isWeb)()
                ? null
                : (0, l.jsxs)(i.MenuGroup, {
                      children: [
                          (0, l.jsx)(i.MenuCheckboxItem, {
                              id: 'sidechain-compression',
                              label: G.intl.string(G.t['/jwMtr']),
                              action: () => o.Z.setSidechainCompression(!u),
                              checked: u
                          }),
                          (0, l.jsx)(i.MenuControlItem, {
                              id: 'sidechain-parameters',
                              label: G.intl.string(G.t.fhEzfn),
                              control: (e, n) =>
                                  (0, l.jsx)(i.MenuSliderControl, {
                                      ...e,
                                      ref: n,
                                      value: c,
                                      maxValue: 100,
                                      onChange: (e) => o.Z.setSidechainCompressionStrength(e),
                                      'aria-label': G.intl.string(G.t.fhEzfn)
                                  })
                          })
                      ]
                  });
        })(n),
        z = (0, d.Z)(n, b, N),
        q = (0, g.G)({
            stream: n,
            channelId: n.channelId,
            location: 'StreamContextMenu'
        }),
        y = (0, m.B)({
            userId: n.ownerId,
            channelId: n.channelId,
            guildId: n.guildId,
            location: 'StreamContextMenu'
        }),
        D = (function (e) {
            let n = (n) => {
                    (0, w.cq)(e, n);
                },
                t = (0, w.BO)(e);
            return (0, l.jsx)(i.MenuControlItem, {
                id: 'stream-zoom',
                label: G.intl.string(G.t.B3kEDg),
                control: (e, r) =>
                    (0, l.jsx)(i.MenuSliderControl, {
                        ...e,
                        ref: r,
                        value: t,
                        maxValue: 300,
                        onChange: n,
                        minValue: 100,
                        'aria-label': G.intl.string(G.t.B3kEDg)
                    })
            });
        })(n),
        W = (function (e) {
            let n = (0, w.xN)(e);
            return (0, l.jsx)(i.MenuCheckboxItem, {
                id: 'fit',
                label: G.intl.string(G.t.mpnvra),
                action: () => {
                    (0, w.gI)(e, n === x.L.CONTAIN ? x.L.COVER : x.L.CONTAIN);
                },
                checked: n === x.L.COVER
            });
        })(n);
    return (0, l.jsx)(s.Z, {
        context: t,
        object: A.qAy.CONTEXT_MENU,
        children: (0, l.jsxs)(i.Menu, {
            navId: 'stream-context',
            onClose: a.Zy,
            'aria-label': G.intl.string(G.t.Gl3Q39),
            onSelect: U,
            children: [
                (0, l.jsxs)(i.MenuGroup, {
                    children: [B, J, F, q, y]
                }),
                (0, l.jsx)(i.MenuGroup, { children: R }),
                (0, l.jsxs)(i.MenuGroup, {
                    children: [D, W]
                }),
                Y,
                (0, l.jsx)(i.MenuGroup, { children: O && z })
            ]
        })
    });
}
