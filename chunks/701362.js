n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(717881),
    u = n(58540),
    d = n(850827),
    h = n(951844),
    m = n(258609),
    p = n(199902),
    f = n(314897),
    g = n(430824),
    C = n(496675),
    x = n(158776),
    v = n(979651),
    _ = n(626135),
    I = n(382182),
    E = n(687516),
    b = n(718805),
    S = n(871118),
    Z = n(981631),
    T = n(388032),
    N = n(278552);
class j extends l.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        _.default.track(Z.rMx.OPEN_POPOUT, {
            type: 'Stream Preview',
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0
        });
    }
    renderPreview(e) {
        let { onWatch: t, activeStream: n, currentUserId: l, canWatch: r, unavailableReason: s } = this.props;
        return (0, i.jsxs)(o.Clickable, {
            onClick: t,
            className: N.previewContainer,
            children: [
                (0, i.jsx)(S.Z, {
                    className: N.previewImage,
                    stream: e
                }),
                r
                    ? (0, i.jsx)('div', {
                          className: N.previewHover,
                          children: (0, i.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              color: 'none',
                              className: N.white,
                              children: (0, b.Z)(e, n, l, s)
                          })
                      })
                    : null
            ]
        });
    }
    render() {
        let { activity: e, user: t, stream: n, previewIsOpen: l } = this.props;
        return null == n
            ? null
            : (0, i.jsx)('div', {
                  className: s()(N.streamPreviewWrapper, { [N.mounted]: l }),
                  children: (0, i.jsxs)('div', {
                      className: N.streamPreview,
                      children: [
                          this.renderPreview(n),
                          (0, i.jsxs)('div', {
                              className: N.body,
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
                                                    page: Z.ZY5.GO_LIVE_MODAL,
                                                    section: Z.jXE.STREAM_VIEWER_POPOUT
                                                }
                                            }
                                        })
                                      : (0, i.jsx)(d.Z, {
                                            type: c.P.STREAM_PREVIEW,
                                            applicationStream: n,
                                            user: t,
                                            guildId: n.guildId,
                                            channelId: n.channelId,
                                            className: N.activityActions,
                                            color: N.watchButton
                                        }),
                                  (0, i.jsx)(h.Z, {
                                      type: h.Z.Types.INLINE,
                                      className: N.protip,
                                      children: __OVERLAY__ ? T.intl.string(T.t['YRdw7+']) : T.intl.string(T.t.CCTgbG)
                                  })
                              ]
                          })
                      ]
                  })
              });
    }
}
function A(e) {
    let { user: t, channel: n, ...r } = e,
        [s, o] = (0, a.Wu)([v.Z, g.Z, C.Z, m.Z], () => (0, I.p9)(n, v.Z, g.Z, C.Z, m.Z)),
        c = (0, a.e7)([p.Z], () => p.Z.getStreamForUser(t.id, n.getGuildId())),
        d = (0, a.e7)([p.Z], () => p.Z.getActiveStreamForApplicationStream(c)),
        h = (0, a.e7)([f.default], () => f.default.getId()),
        _ = (0, E.Cf)(c),
        b = (0, a.e7)([x.Z], () => (0, E.Um)(c, x.Z)),
        S = l.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
    return (
        (0, u.$)(S),
        (0, i.jsx)(j, {
            ...r,
            canWatch: s,
            unavailableReason: o,
            user: t,
            streamApplication: _,
            stream: c,
            activeStream: d,
            currentUserId: h,
            activity: b
        })
    );
}
