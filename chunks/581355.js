t.r(n),
    t.d(n, {
        default: function () {
            return N;
        }
    });
var s = t(735250),
    a = t(470079),
    l = t(442837),
    i = t(481060),
    r = t(313201),
    o = t(430824),
    c = t(427679),
    d = t(939863),
    u = t(540186),
    _ = t(609776),
    E = t(289584),
    x = t(180899),
    m = t(157925),
    h = t(689938),
    I = t(639879);
function T(e) {
    let { guild: n, channel: t, stageInstance: a, headerId: l, onClose: r, loading: o, error: c, onSave: u, defaultOptions: E, isSlideReady: x } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)('div', {
                className: I.content,
                children: [
                    (0, s.jsx)(d.Z, {
                        children: (0, s.jsx)('div', {
                            className: I.stageIconBackground,
                            children: (0, s.jsx)(i.StageIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 32,
                                height: 32,
                                className: I.stageIcon
                            })
                        })
                    }),
                    (0, s.jsx)(i.Heading, {
                        id: l,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: I.headerTitle,
                        children: null == a ? h.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : h.Z.Messages.EDIT_STAGE_CHANNEL_TITLE
                    }),
                    (0, s.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: I.headerSubtitle,
                        children: null == a ? h.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : h.Z.Messages.EDIT_STAGE_SUBTITLE
                    })
                ]
            }),
            (0, s.jsx)(_.Z, {
                guild: n,
                channel: t,
                onSave: u,
                error: c,
                loading: o,
                onClose: r,
                defaultOptions: E,
                isSlideReady: x
            })
        ]
    });
}
function N(e) {
    let { channel: n, onClose: t, transitionState: d, ..._ } = e,
        h = (0, r.Dt)(),
        N = (0, l.e7)([o.Z], () => o.Z.getGuild(n.guild_id)),
        C = a.useMemo(() => c.Z.getStageInstanceByChannel(n.id), [n.id]),
        { loading: g, error: v, onSave: S } = (0, E.Z)(n, t),
        {
            modalStep: f,
            setModalStep: j,
            readySlide: A,
            handleSlideReady: p,
            savedOptions: L,
            handleSettingsSave: Z,
            handleDelayedSave: R
        } = (0, x.Z)({
            stageInstance: C,
            defaultStep: m.lv.STAGE_CHANNEL_SETTINGS,
            error: v,
            onSave: S
        });
    return (a.useEffect(() => {
        null == N && t();
    }, [N, t]),
    null == N)
        ? null
        : (0, s.jsx)(i.ModalRoot, {
              transitionState: d,
              'aria-labelledby': h,
              ..._,
              size: i.ModalSize.SMALL,
              children: (0, s.jsxs)(i.Slides, {
                  activeSlide: f,
                  width: 440,
                  onSlideReady: p,
                  children: [
                      (0, s.jsx)(i.Slide, {
                          id: m.lv.STAGE_CHANNEL_SETTINGS,
                          children: (0, s.jsx)('div', {
                              className: I.slideContainer,
                              children: (0, s.jsx)(T, {
                                  guild: N,
                                  channel: n,
                                  stageInstance: C,
                                  headerId: h,
                                  onClose: t,
                                  loading: g,
                                  error: v,
                                  onSave: Z,
                                  defaultOptions: L,
                                  isSlideReady: A === m.lv.STAGE_CHANNEL_SETTINGS
                              })
                          })
                      }),
                      (0, s.jsx)(i.Slide, {
                          id: m.lv.PUBLIC_STAGE_PREVIEW,
                          children: (0, s.jsx)('div', {
                              className: I.slideContainer,
                              children: (0, s.jsx)(u.Z, {
                                  headerId: h,
                                  guild: N,
                                  channel: n,
                                  stageData: L,
                                  loading: g,
                                  onNext: R,
                                  onCancel: t,
                                  onBack: () => j(m.lv.STAGE_CHANNEL_SETTINGS)
                              })
                          })
                      })
                  ]
              })
          });
}
