"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983"),
  a = n("884691"),
  r = n("446674"),
  s = n("77078"),
  i = n("305961"),
  u = n("476765"),
  o = n("228427"),
  c = n("834052"),
  d = n("119184"),
  f = n("444594"),
  E = n("813934"),
  h = n("767680"),
  g = n("249873"),
  v = n("837979"),
  _ = n("782340"),
  S = n("652809");

function R(e) {
  let {
    guild: t,
    channel: n,
    stageInstance: a,
    headerId: r,
    onClose: i,
    loading: u,
    error: c,
    onSave: f,
    defaultOptions: h,
    isSlideReady: g
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: S.content,
      children: [(0, l.jsx)(d.default, {
        children: (0, l.jsx)("div", {
          className: S.stageIconBackground,
          children: (0, l.jsx)(o.default, {
            width: 32,
            height: 32,
            className: S.stageIcon
          })
        })
      }), (0, l.jsx)(s.Heading, {
        id: r,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: S.headerTitle,
        children: null == a ? _.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : _.default.Messages.EDIT_STAGE_CHANNEL_TITLE
      }), (0, l.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: S.headerSubtitle,
        children: null == a ? _.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : _.default.Messages.EDIT_STAGE_SUBTITLE
      })]
    }), (0, l.jsx)(E.default, {
      guild: t,
      channel: n,
      onSave: f,
      error: c,
      loading: u,
      onClose: i,
      defaultOptions: h,
      isSlideReady: g
    })]
  })
}

function m(e) {
  let {
    channel: t,
    onClose: n,
    transitionState: o,
    ...d
  } = e, E = (0, u.useUID)(), _ = (0, r.useStateFromStores)([i.default], () => i.default.getGuild(t.guild_id)), m = a.useMemo(() => c.default.getStageInstanceByChannel(t.id), [t.id]), {
    loading: N,
    error: T,
    onSave: C
  } = (0, h.default)(t, n), {
    modalStep: p,
    setModalStep: I,
    readySlide: x,
    handleSlideReady: L,
    savedOptions: A,
    handleSettingsSave: D,
    handleDelayedSave: y
  } = (0, g.default)({
    stageInstance: m,
    defaultStep: v.StartStageSteps.STAGE_CHANNEL_SETTINGS,
    error: T,
    onSave: C
  });
  return (a.useEffect(() => {
    null == _ && n()
  }, [_, n]), null == _) ? null : (0, l.jsx)(s.ModalRoot, {
    transitionState: o,
    "aria-labelledby": E,
    ...d,
    size: s.ModalSize.SMALL,
    children: (0, l.jsxs)(s.Slides, {
      activeSlide: p,
      width: 440,
      onSlideReady: L,
      children: [(0, l.jsx)(s.Slide, {
        id: v.StartStageSteps.STAGE_CHANNEL_SETTINGS,
        children: (0, l.jsx)("div", {
          className: S.slideContainer,
          children: (0, l.jsx)(R, {
            guild: _,
            channel: t,
            stageInstance: m,
            headerId: E,
            onClose: n,
            loading: N,
            error: T,
            onSave: D,
            defaultOptions: A,
            isSlideReady: x === v.StartStageSteps.STAGE_CHANNEL_SETTINGS
          })
        })
      }), (0, l.jsx)(s.Slide, {
        id: v.StartStageSteps.PUBLIC_STAGE_PREVIEW,
        children: (0, l.jsx)("div", {
          className: S.slideContainer,
          children: (0, l.jsx)(f.default, {
            headerId: E,
            guild: _,
            channel: t,
            stageData: A,
            loading: N,
            onNext: y,
            onCancel: n,
            onBack: () => I(v.StartStageSteps.STAGE_CHANNEL_SETTINGS)
          })
        })
      })]
    })
  })
}