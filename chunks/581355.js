t.r(n), t.d(n, {
  default: function() {
    return m
  }
});
var s = t(735250),
  l = t(470079),
  a = t(442837),
  i = t(481060),
  r = t(430824),
  o = t(153124),
  c = t(427679),
  d = t(939863),
  u = t(540186),
  E = t(609776),
  _ = t(289584),
  T = t(180899),
  N = t(157925),
  h = t(689938),
  I = t(251398);

function x(e) {
  let {
    guild: n,
    channel: t,
    stageInstance: l,
    headerId: a,
    onClose: r,
    loading: o,
    error: c,
    onSave: u,
    defaultOptions: _,
    isSlideReady: T
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: I.content,
      children: [(0, s.jsx)(d.Z, {
        children: (0, s.jsx)("div", {
          className: I.stageIconBackground,
          children: (0, s.jsx)(i.StageIcon, {
            size: "custom",
            color: "currentColor",
            width: 32,
            height: 32,
            className: I.stageIcon
          })
        })
      }), (0, s.jsx)(i.Heading, {
        id: a,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: I.headerTitle,
        children: null == l ? h.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : h.Z.Messages.EDIT_STAGE_CHANNEL_TITLE
      }), (0, s.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: I.headerSubtitle,
        children: null == l ? h.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : h.Z.Messages.EDIT_STAGE_SUBTITLE
      })]
    }), (0, s.jsx)(E.Z, {
      guild: n,
      channel: t,
      onSave: u,
      error: c,
      loading: o,
      onClose: r,
      defaultOptions: _,
      isSlideReady: T
    })]
  })
}

function m(e) {
  let {
    channel: n,
    onClose: t,
    transitionState: d,
    ...E
  } = e, h = (0, o.Dt)(), m = (0, a.e7)([r.Z], () => r.Z.getGuild(n.guild_id)), S = l.useMemo(() => c.Z.getStageInstanceByChannel(n.id), [n.id]), {
    loading: g,
    error: v,
    onSave: A
  } = (0, _.Z)(n, t), {
    modalStep: C,
    setModalStep: f,
    readySlide: j,
    handleSlideReady: R,
    savedOptions: M,
    handleSettingsSave: L,
    handleDelayedSave: Z
  } = (0, T.Z)({
    stageInstance: S,
    defaultStep: N.lv.STAGE_CHANNEL_SETTINGS,
    error: v,
    onSave: A
  });
  return (l.useEffect(() => {
    null == m && t()
  }, [m, t]), null == m) ? null : (0, s.jsx)(i.ModalRoot, {
    transitionState: d,
    "aria-labelledby": h,
    ...E,
    size: i.ModalSize.SMALL,
    children: (0, s.jsxs)(i.Slides, {
      activeSlide: C,
      width: 440,
      onSlideReady: R,
      children: [(0, s.jsx)(i.Slide, {
        id: N.lv.STAGE_CHANNEL_SETTINGS,
        children: (0, s.jsx)("div", {
          className: I.slideContainer,
          children: (0, s.jsx)(x, {
            guild: m,
            channel: n,
            stageInstance: S,
            headerId: h,
            onClose: t,
            loading: g,
            error: v,
            onSave: L,
            defaultOptions: M,
            isSlideReady: j === N.lv.STAGE_CHANNEL_SETTINGS
          })
        })
      }), (0, s.jsx)(i.Slide, {
        id: N.lv.PUBLIC_STAGE_PREVIEW,
        children: (0, s.jsx)("div", {
          className: I.slideContainer,
          children: (0, s.jsx)(u.Z, {
            headerId: h,
            guild: m,
            channel: n,
            stageData: M,
            loading: g,
            onNext: Z,
            onCancel: t,
            onBack: () => f(N.lv.STAGE_CHANNEL_SETTINGS)
          })
        })
      })]
    })
  })
}