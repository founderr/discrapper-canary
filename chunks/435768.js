"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var l = n("37983"),
  a = n("884691"),
  r = n("446674"),
  i = n("77078"),
  s = n("305961"),
  u = n("476765"),
  o = n("228427"),
  c = n("834052"),
  d = n("119184"),
  f = n("444594"),
  h = n("813934"),
  E = n("767680"),
  g = n("249873"),
  S = n("837979"),
  v = n("782340"),
  C = n("636843");

function m(e) {
  let {
    guild: t,
    channel: n,
    stageInstance: a,
    headerId: r,
    onClose: s,
    loading: u,
    error: c,
    onSave: f,
    defaultOptions: E,
    isSlideReady: g
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: C.content,
      children: [(0, l.jsx)(d.default, {
        children: (0, l.jsx)("div", {
          className: C.stageIconBackground,
          children: (0, l.jsx)(o.default, {
            width: 32,
            height: 32,
            className: C.stageIcon
          })
        })
      }), (0, l.jsx)(i.Heading, {
        id: r,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: C.headerTitle,
        children: null == a ? v.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : v.default.Messages.EDIT_STAGE_CHANNEL_TITLE
      }), (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: C.headerSubtitle,
        children: null == a ? v.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : v.default.Messages.EDIT_STAGE_SUBTITLE
      })]
    }), (0, l.jsx)(h.default, {
      guild: t,
      channel: n,
      onSave: f,
      error: c,
      loading: u,
      onClose: s,
      defaultOptions: E,
      isSlideReady: g
    })]
  })
}

function _(e) {
  let {
    channel: t,
    onClose: n,
    transitionState: o,
    ...d
  } = e, h = (0, u.useUID)(), v = (0, r.useStateFromStores)([s.default], () => s.default.getGuild(t.guild_id)), _ = a.useMemo(() => c.default.getStageInstanceByChannel(t.id), [t.id]), {
    loading: R,
    error: p,
    onSave: N
  } = (0, E.default)(t, n), {
    modalStep: T,
    setModalStep: x,
    readySlide: L,
    handleSlideReady: I,
    savedOptions: y,
    handleSettingsSave: A,
    handleDelayedSave: D
  } = (0, g.default)({
    stageInstance: _,
    defaultStep: S.StartStageSteps.STAGE_CHANNEL_SETTINGS,
    error: p,
    onSave: N
  });
  return (a.useEffect(() => {
    null == v && n()
  }, [v, n]), null == v) ? null : (0, l.jsx)(i.ModalRoot, {
    transitionState: o,
    "aria-labelledby": h,
    ...d,
    size: i.ModalSize.SMALL,
    children: (0, l.jsxs)(i.Slides, {
      activeSlide: T,
      width: 440,
      onSlideReady: I,
      children: [(0, l.jsx)(i.Slide, {
        id: S.StartStageSteps.STAGE_CHANNEL_SETTINGS,
        children: (0, l.jsx)("div", {
          className: C.slideContainer,
          children: (0, l.jsx)(m, {
            guild: v,
            channel: t,
            stageInstance: _,
            headerId: h,
            onClose: n,
            loading: R,
            error: p,
            onSave: A,
            defaultOptions: y,
            isSlideReady: L === S.StartStageSteps.STAGE_CHANNEL_SETTINGS
          })
        })
      }), (0, l.jsx)(i.Slide, {
        id: S.StartStageSteps.PUBLIC_STAGE_PREVIEW,
        children: (0, l.jsx)("div", {
          className: C.slideContainer,
          children: (0, l.jsx)(f.default, {
            headerId: h,
            guild: v,
            channel: t,
            stageData: y,
            loading: R,
            onNext: D,
            onCancel: n,
            onBack: () => x(S.StartStageSteps.STAGE_CHANNEL_SETTINGS)
          })
        })
      })]
    })
  })
}