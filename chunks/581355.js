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
    m = t(609776),
    h = t(289584),
    x = t(180899),
    g = t(157925),
    f = t(388032),
    v = t(639879);
function _(e) {
    let { guild: n, channel: t, stageInstance: i, headerId: a, onClose: o, loading: s, error: c, onSave: u, defaultOptions: h, isSlideReady: x } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: v.content,
                children: [
                    (0, l.jsx)(d.Z, {
                        children: (0, l.jsx)('div', {
                            className: v.stageIconBackground,
                            children: (0, l.jsx)(r.StageIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 32,
                                height: 32,
                                className: v.stageIcon
                            })
                        })
                    }),
                    (0, l.jsx)(r.Heading, {
                        id: a,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: v.headerTitle,
                        children: null == i ? f.intl.string(f.t.DDF0cH) : f.intl.string(f.t.YPdQOj)
                    }),
                    (0, l.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: v.headerSubtitle,
                        children: null == i ? f.intl.string(f.t.bqQIwc) : f.intl.string(f.t['I+9bLy'])
                    })
                ]
            }),
            (0, l.jsx)(m.Z, {
                guild: n,
                channel: t,
                onSave: u,
                error: c,
                loading: s,
                onClose: o,
                defaultOptions: h,
                isSlideReady: x
            })
        ]
    });
}
function I(e) {
    let { channel: n, onClose: t, transitionState: d, ...m } = e,
        f = (0, o.Dt)(),
        I = (0, a.e7)([s.Z], () => s.Z.getGuild(n.guild_id)),
        N = i.useMemo(() => c.Z.getStageInstanceByChannel(n.id), [n.id]),
        { loading: j, error: C, onSave: p } = (0, h.Z)(n, t),
        {
            modalStep: S,
            setModalStep: T,
            readySlide: b,
            handleSlideReady: E,
            savedOptions: k,
            handleSettingsSave: Z,
            handleDelayedSave: B
        } = (0, x.Z)({
            stageInstance: N,
            defaultStep: g.lv.STAGE_CHANNEL_SETTINGS,
            error: C,
            onSave: p
        });
    return (i.useEffect(() => {
        null == I && t();
    }, [I, t]),
    null == I)
        ? null
        : (0, l.jsx)(r.ModalRoot, {
              transitionState: d,
              'aria-labelledby': f,
              ...m,
              size: r.ModalSize.SMALL,
              children: (0, l.jsxs)(r.Slides, {
                  activeSlide: S,
                  width: 440,
                  onSlideReady: E,
                  children: [
                      (0, l.jsx)(r.Slide, {
                          id: g.lv.STAGE_CHANNEL_SETTINGS,
                          children: (0, l.jsx)('div', {
                              className: v.slideContainer,
                              children: (0, l.jsx)(_, {
                                  guild: I,
                                  channel: n,
                                  stageInstance: N,
                                  headerId: f,
                                  onClose: t,
                                  loading: j,
                                  error: C,
                                  onSave: Z,
                                  defaultOptions: k,
                                  isSlideReady: b === g.lv.STAGE_CHANNEL_SETTINGS
                              })
                          })
                      }),
                      (0, l.jsx)(r.Slide, {
                          id: g.lv.PUBLIC_STAGE_PREVIEW,
                          children: (0, l.jsx)('div', {
                              className: v.slideContainer,
                              children: (0, l.jsx)(u.Z, {
                                  headerId: f,
                                  guild: I,
                                  channel: n,
                                  stageData: k,
                                  loading: j,
                                  onNext: B,
                                  onCancel: t,
                                  onBack: () => T(g.lv.STAGE_CHANNEL_SETTINGS)
                              })
                          })
                      })
                  ]
              })
          });
}
