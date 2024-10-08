n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(717881),
    u = n(58540),
    d = n(850827),
    h = n(951844),
    p = n(258609),
    m = n(199902),
    _ = n(314897),
    f = n(430824),
    E = n(496675),
    g = n(158776),
    C = n(979651),
    I = n(626135),
    T = n(382182),
    x = n(687516),
    v = n(718805),
    S = n(871118),
    N = n(981631),
    A = n(689938),
    Z = n(278552);
class M extends s.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        I.default.track(N.rMx.OPEN_POPOUT, {
            type: 'Stream Preview',
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0
        });
    }
    renderPreview(e) {
        let { onWatch: t, activeStream: n, currentUserId: s, canWatch: a, unavailableReason: l } = this.props;
        return (0, i.jsxs)(o.Clickable, {
            onClick: t,
            className: Z.previewContainer,
            children: [
                (0, i.jsx)(S.Z, {
                    className: Z.previewImage,
                    stream: e
                }),
                a
                    ? (0, i.jsx)('div', {
                          className: Z.previewHover,
                          children: (0, i.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              color: 'none',
                              className: Z.white,
                              children: (0, v.Z)(e, n, s, l)
                          })
                      })
                    : null
            ]
        });
    }
    render() {
        let { activity: e, user: t, stream: n, previewIsOpen: s } = this.props;
        return null == n
            ? null
            : (0, i.jsx)('div', {
                  className: l()(Z.streamPreviewWrapper, { [Z.mounted]: s }),
                  children: (0, i.jsxs)('div', {
                      className: Z.streamPreview,
                      children: [
                          this.renderPreview(n),
                          (0, i.jsxs)('div', {
                              className: Z.body,
                              children: [
                                  null != e
                                      ? (0, i.jsx)(c.Z, {
                                            hideHeader: !0,
                                            type: c.P.STREAM_PREVIEW,
                                            activity: e,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            analyticsParams: {
                                                location: {
                                                    page: N.ZY5.GO_LIVE_MODAL,
                                                    section: N.jXE.STREAM_VIEWER_POPOUT
                                                }
                                            }
                                        })
                                      : (0, i.jsx)(d.Z, {
                                            type: c.P.STREAM_PREVIEW,
                                            applicationStream: n,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            className: Z.activityActions,
                                            color: Z.watchButton
                                        }),
                                  (0, i.jsx)(h.Z, {
                                      type: h.Z.Types.INLINE,
                                      className: Z.protip,
                                      children: __OVERLAY__ ? A.Z.Messages.WATCH_STREAM_IN_APP : A.Z.Messages.WATCH_STREAM_TIP
                                  })
                              ]
                          })
                      ]
                  })
              });
    }
}
function b(e) {
    let { user: t, channel: n, ...a } = e,
        [l, o] = (0, r.Wu)([C.Z, f.Z, E.Z, p.Z], () => (0, T.p9)(n, C.Z, f.Z, E.Z, p.Z)),
        c = (0, r.e7)([m.Z], () => m.Z.getStreamForUser(t.id, n.getGuildId())),
        d = (0, r.e7)([m.Z], () => m.Z.getActiveStreamForApplicationStream(c)),
        h = (0, r.e7)([_.default], () => _.default.getId()),
        I = (0, x.Cf)(c),
        v = (0, r.e7)([g.Z], () => (0, x.Um)(c, g.Z)),
        S = s.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
    return (
        (0, u.$)(S),
        (0, i.jsx)(M, {
            ...a,
            canWatch: l,
            unavailableReason: o,
            user: t,
            streamApplication: I,
            stream: c,
            activeStream: d,
            currentUserId: h,
            activity: v
        })
    );
}
