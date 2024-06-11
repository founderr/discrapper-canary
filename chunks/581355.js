"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
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
  S = n("289584"),
  T = n("180899"),
  f = n("157925"),
  N = n("689938"),
  h = n("841176");

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
    defaultOptions: S,
    isSlideReady: T
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: h.content,
      children: [(0, a.jsx)(c.default, {
        children: (0, a.jsx)("div", {
          className: h.stageIconBackground,
          children: (0, a.jsx)(u.default, {
            width: 32,
            height: 32,
            className: h.stageIcon
          })
        })
      }), (0, a.jsx)(i.Heading, {
        id: s,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: h.headerTitle,
        children: null == l ? N.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : N.default.Messages.EDIT_STAGE_CHANNEL_TITLE
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: h.headerSubtitle,
        children: null == l ? N.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : N.default.Messages.EDIT_STAGE_SUBTITLE
      })]
    }), (0, a.jsx)(_.default, {
      guild: t,
      channel: n,
      onSave: E,
      error: o,
      loading: d,
      onClose: r,
      defaultOptions: S,
      isSlideReady: T
    })]
  })
}

function I(e) {
  let {
    channel: t,
    onClose: n,
    transitionState: u,
    ...c
  } = e, _ = (0, d.useUID)(), N = (0, s.useStateFromStores)([r.default], () => r.default.getGuild(t.guild_id)), I = l.useMemo(() => o.default.getStageInstanceByChannel(t.id), [t.id]), {
    loading: m,
    error: x,
    onSave: v
  } = (0, S.default)(t, n), {
    modalStep: C,
    setModalStep: A,
    readySlide: R,
    handleSlideReady: p,
    savedOptions: j,
    handleSettingsSave: L,
    handleDelayedSave: M
  } = (0, T.default)({
    stageInstance: I,
    defaultStep: f.StartStageSteps.STAGE_CHANNEL_SETTINGS,
    error: x,
    onSave: v
  });
  return (l.useEffect(() => {
    null == N && n()
  }, [N, n]), null == N) ? null : (0, a.jsx)(i.ModalRoot, {
    transitionState: u,
    "aria-labelledby": _,
    ...c,
    size: i.ModalSize.SMALL,
    children: (0, a.jsxs)(i.Slides, {
      activeSlide: C,
      width: 440,
      onSlideReady: p,
      children: [(0, a.jsx)(i.Slide, {
        id: f.StartStageSteps.STAGE_CHANNEL_SETTINGS,
        children: (0, a.jsx)("div", {
          className: h.slideContainer,
          children: (0, a.jsx)(g, {
            guild: N,
            channel: t,
            stageInstance: I,
            headerId: _,
            onClose: n,
            loading: m,
            error: x,
            onSave: L,
            defaultOptions: j,
            isSlideReady: R === f.StartStageSteps.STAGE_CHANNEL_SETTINGS
          })
        })
      }), (0, a.jsx)(i.Slide, {
        id: f.StartStageSteps.PUBLIC_STAGE_PREVIEW,
        children: (0, a.jsx)("div", {
          className: h.slideContainer,
          children: (0, a.jsx)(E.default, {
            headerId: _,
            guild: N,
            channel: t,
            stageData: j,
            loading: m,
            onNext: M,
            onCancel: n,
            onBack: () => A(f.StartStageSteps.STAGE_CHANNEL_SETTINGS)
          })
        })
      })]
    })
  })
}