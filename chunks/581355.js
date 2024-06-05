"use strict";
a.r(t), a.d(t, {
  default: function() {
    return v
  }
});
var l = a("735250"),
  s = a("470079"),
  n = a("442837"),
  i = a("481060"),
  r = a("430824"),
  d = a("153124"),
  o = a("170039"),
  u = a("427679"),
  c = a("939863"),
  E = a("540186"),
  f = a("609776"),
  h = a("289584"),
  _ = a("180899"),
  N = a("157925"),
  S = a("689938"),
  x = a("841176");

function T(e) {
  let {
    guild: t,
    channel: a,
    stageInstance: s,
    headerId: n,
    onClose: r,
    loading: d,
    error: u,
    onSave: E,
    defaultOptions: h,
    isSlideReady: _
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: x.content,
      children: [(0, l.jsx)(c.default, {
        children: (0, l.jsx)("div", {
          className: x.stageIconBackground,
          children: (0, l.jsx)(o.default, {
            width: 32,
            height: 32,
            className: x.stageIcon
          })
        })
      }), (0, l.jsx)(i.Heading, {
        id: n,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: x.headerTitle,
        children: null == s ? S.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : S.default.Messages.EDIT_STAGE_CHANNEL_TITLE
      }), (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: x.headerSubtitle,
        children: null == s ? S.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : S.default.Messages.EDIT_STAGE_SUBTITLE
      })]
    }), (0, l.jsx)(f.default, {
      guild: t,
      channel: a,
      onSave: E,
      error: u,
      loading: d,
      onClose: r,
      defaultOptions: h,
      isSlideReady: _
    })]
  })
}

function v(e) {
  let {
    channel: t,
    onClose: a,
    transitionState: o,
    ...c
  } = e, f = (0, d.useUID)(), S = (0, n.useStateFromStores)([r.default], () => r.default.getGuild(t.guild_id)), v = s.useMemo(() => u.default.getStageInstanceByChannel(t.id), [t.id]), {
    loading: m,
    error: C,
    onSave: g
  } = (0, h.default)(t, a), {
    modalStep: I,
    setModalStep: A,
    readySlide: L,
    handleSlideReady: j,
    savedOptions: R,
    handleSettingsSave: p,
    handleDelayedSave: M
  } = (0, _.default)({
    stageInstance: v,
    defaultStep: N.StartStageSteps.STAGE_CHANNEL_SETTINGS,
    error: C,
    onSave: g
  });
  return (s.useEffect(() => {
    null == S && a()
  }, [S, a]), null == S) ? null : (0, l.jsx)(i.ModalRoot, {
    transitionState: o,
    "aria-labelledby": f,
    ...c,
    size: i.ModalSize.SMALL,
    children: (0, l.jsxs)(i.Slides, {
      activeSlide: I,
      width: 440,
      onSlideReady: j,
      children: [(0, l.jsx)(i.Slide, {
        id: N.StartStageSteps.STAGE_CHANNEL_SETTINGS,
        children: (0, l.jsx)("div", {
          className: x.slideContainer,
          children: (0, l.jsx)(T, {
            guild: S,
            channel: t,
            stageInstance: v,
            headerId: f,
            onClose: a,
            loading: m,
            error: C,
            onSave: p,
            defaultOptions: R,
            isSlideReady: L === N.StartStageSteps.STAGE_CHANNEL_SETTINGS
          })
        })
      }), (0, l.jsx)(i.Slide, {
        id: N.StartStageSteps.PUBLIC_STAGE_PREVIEW,
        children: (0, l.jsx)("div", {
          className: x.slideContainer,
          children: (0, l.jsx)(E.default, {
            headerId: f,
            guild: S,
            channel: t,
            stageData: R,
            loading: m,
            onNext: M,
            onCancel: a,
            onBack: () => A(N.StartStageSteps.STAGE_CHANNEL_SETTINGS)
          })
        })
      })]
    })
  })
}