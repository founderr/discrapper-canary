"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("430824"),
  d = n("153124"),
  u = n("170039"),
  o = n("427679"),
  c = n("939863"),
  E = n("540186"),
  _ = n("609776"),
  f = n("289584"),
  S = n("180899"),
  T = n("157925"),
  h = n("689938"),
  N = n("102045");

function g(e) {
  let {
    guild: t,
    channel: n,
    stageInstance: l,
    headerId: s,
    onClose: r,
    loading: d,
    error: o,
    onSave: E,
    defaultOptions: f,
    isSlideReady: S
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: N.content,
      children: [(0, a.jsx)(c.default, {
        children: (0, a.jsx)("div", {
          className: N.stageIconBackground,
          children: (0, a.jsx)(u.default, {
            width: 32,
            height: 32,
            className: N.stageIcon
          })
        })
      }), (0, a.jsx)(i.Heading, {
        id: s,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: N.headerTitle,
        children: null == l ? h.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : h.default.Messages.EDIT_STAGE_CHANNEL_TITLE
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: N.headerSubtitle,
        children: null == l ? h.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : h.default.Messages.EDIT_STAGE_SUBTITLE
      })]
    }), (0, a.jsx)(_.default, {
      guild: t,
      channel: n,
      onSave: E,
      error: o,
      loading: d,
      onClose: r,
      defaultOptions: f,
      isSlideReady: S
    })]
  })
}

function v(e) {
  let {
    channel: t,
    onClose: n,
    transitionState: u,
    ...c
  } = e, _ = (0, d.useUID)(), h = (0, s.useStateFromStores)([r.default], () => r.default.getGuild(t.guild_id)), v = l.useMemo(() => o.default.getStageInstanceByChannel(t.id), [t.id]), {
    loading: I,
    error: x,
    onSave: m
  } = (0, f.default)(t, n), {
    modalStep: C,
    setModalStep: A,
    readySlide: p,
    handleSlideReady: R,
    savedOptions: L,
    handleSettingsSave: j,
    handleDelayedSave: M
  } = (0, S.default)({
    stageInstance: v,
    defaultStep: T.StartStageSteps.STAGE_CHANNEL_SETTINGS,
    error: x,
    onSave: m
  });
  return (l.useEffect(() => {
    null == h && n()
  }, [h, n]), null == h) ? null : (0, a.jsx)(i.ModalRoot, {
    transitionState: u,
    "aria-labelledby": _,
    ...c,
    size: i.ModalSize.SMALL,
    children: (0, a.jsxs)(i.Slides, {
      activeSlide: C,
      width: 440,
      onSlideReady: R,
      children: [(0, a.jsx)(i.Slide, {
        id: T.StartStageSteps.STAGE_CHANNEL_SETTINGS,
        children: (0, a.jsx)("div", {
          className: N.slideContainer,
          children: (0, a.jsx)(g, {
            guild: h,
            channel: t,
            stageInstance: v,
            headerId: _,
            onClose: n,
            loading: I,
            error: x,
            onSave: j,
            defaultOptions: L,
            isSlideReady: p === T.StartStageSteps.STAGE_CHANNEL_SETTINGS
          })
        })
      }), (0, a.jsx)(i.Slide, {
        id: T.StartStageSteps.PUBLIC_STAGE_PREVIEW,
        children: (0, a.jsx)("div", {
          className: N.slideContainer,
          children: (0, a.jsx)(E.default, {
            headerId: _,
            guild: h,
            channel: t,
            stageData: L,
            loading: I,
            onNext: M,
            onCancel: n,
            onBack: () => A(T.StartStageSteps.STAGE_CHANNEL_SETTINGS)
          })
        })
      })]
    })
  })
}