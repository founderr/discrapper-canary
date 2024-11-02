t.r(n),
    t.d(n, {
        default: function () {
            return I;
        }
    });
var l = t(200651),
    i = t(192379),
    a = t(442837),
    r = t(481060),
    o = t(313201),
    s = t(430824),
    c = t(427679),
    d = t(939863),
    u = t(540186),
    h = t(609776),
    m = t(289584),
    x = t(180899),
    f = t(157925),
    g = t(388032),
    _ = t(639879);
function v(e) {
    let { guild: n, channel: t, stageInstance: i, headerId: a, onClose: o, loading: s, error: c, onSave: u, defaultOptions: m, isSlideReady: x } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: _.content,
                children: [
                    (0, l.jsx)(d.Z, {
                        children: (0, l.jsx)('div', {
                            className: _.stageIconBackground,
                            children: (0, l.jsx)(r.StageIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 32,
                                height: 32,
                                className: _.stageIcon
                            })
                        })
                    }),
                    (0, l.jsx)(r.Heading, {
                        id: a,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: _.headerTitle,
                        children: null == i ? g.intl.string(g.t.DDF0cH) : g.intl.string(g.t.YPdQOj)
                    }),
                    (0, l.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: _.headerSubtitle,
                        children: null == i ? g.intl.string(g.t.bqQIwc) : g.intl.string(g.t['I+9bLy'])
                    })
                ]
            }),
            (0, l.jsx)(h.Z, {
                guild: n,
                channel: t,
                onSave: u,
                error: c,
                loading: s,
                onClose: o,
                defaultOptions: m,
                isSlideReady: x
            })
        ]
    });
}
function I(e) {
    let { channel: n, onClose: t, transitionState: d, ...h } = e,
        g = (0, o.Dt)(),
        I = (0, a.e7)([s.Z], () => s.Z.getGuild(n.guild_id)),
        N = i.useMemo(() => c.Z.getStageInstanceByChannel(n.id), [n.id]),
        { loading: p, error: C, onSave: j } = (0, m.Z)(n, t),
        {
            modalStep: S,
            setModalStep: T,
            readySlide: E,
            handleSlideReady: b,
            savedOptions: A,
            handleSettingsSave: k,
            handleDelayedSave: Z
        } = (0, x.Z)({
            stageInstance: N,
            defaultStep: f.lv.STAGE_CHANNEL_SETTINGS,
            error: C,
            onSave: j
        });
    return (i.useEffect(() => {
        null == I && t();
    }, [I, t]),
    null == I)
        ? null
        : (0, l.jsx)(r.ModalRoot, {
              transitionState: d,
              'aria-labelledby': g,
              ...h,
              size: r.ModalSize.SMALL,
              children: (0, l.jsxs)(r.Slides, {
                  activeSlide: S,
                  width: 440,
                  onSlideReady: b,
                  children: [
                      (0, l.jsx)(r.Slide, {
                          id: f.lv.STAGE_CHANNEL_SETTINGS,
                          children: (0, l.jsx)('div', {
                              className: _.slideContainer,
                              children: (0, l.jsx)(v, {
                                  guild: I,
                                  channel: n,
                                  stageInstance: N,
                                  headerId: g,
                                  onClose: t,
                                  loading: p,
                                  error: C,
                                  onSave: k,
                                  defaultOptions: A,
                                  isSlideReady: E === f.lv.STAGE_CHANNEL_SETTINGS
                              })
                          })
                      }),
                      (0, l.jsx)(r.Slide, {
                          id: f.lv.PUBLIC_STAGE_PREVIEW,
                          children: (0, l.jsx)('div', {
                              className: _.slideContainer,
                              children: (0, l.jsx)(u.Z, {
                                  headerId: g,
                                  guild: I,
                                  channel: n,
                                  stageData: A,
                                  loading: p,
                                  onNext: Z,
                                  onCancel: t,
                                  onBack: () => T(f.lv.STAGE_CHANNEL_SETTINGS)
                              })
                          })
                      })
                  ]
              })
          });
}
