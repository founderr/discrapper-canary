n.d(t, {
  Z: function() {
    return E
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  r = n(230711),
  a = n(314897),
  o = n(626135),
  u = n(730417),
  c = n(524347),
  d = n(702512),
  h = n(981631),
  g = n(689938),
  p = n(201032);
let m = (e, t, n) => {
  let l = t.assets.tooltipSrc;
  switch (e) {
    case d._e.STREAM_CTA:
      return {
        header: g.Z.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
          gameName: t.title
        }), body: t.messages.enrollmentTooltip(n), imgSrc: l, imgStyle: p.dropImgPreStreamNotice
      };
    case d._e.TRACK_PROGRESS:
      return {
        header: g.Z.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
          gameName: t.title
        }), body: "", imgSrc: l, imgStyle: p.dropImgProgressTracker
      };
    case d._e.QUEST_COMPLETION:
      return {
        header: g.Z.Messages.DROPS_QUEST_COMPLETION_TOOLTIP_HEADER, body: t.messages.completionTooltip(n), imgSrc: l, imgStyle: p.dropImgQuestCompletion
      };
    case d._e.LOADING_INITIAL_PROGRESS:
      return {
        header: "", body: "", imgSrc: l, imgStyle: p.dropImgPreStreamNotice
      }
  }
};

function C(e) {
  let {
    streamLengthRequirement: t,
    viewerCountRequirement: n
  } = e, r = (0, i.e7)([c.Z], () => c.Z.currentDropQuestStreamProgress), a = Math.floor(r / 100 * t).toString();
  return (0, l.jsxs)("div", {
    children: [(0, l.jsx)(s.Text, {
      variant: "text-sm/bold",
      className: p.progressBarCount,
      children: g.Z.Messages.DROPS_STREAM_PROGRESS_INDICATOR.format({
        minutesStreamed: a,
        streamLengthRequirement: t
      })
    }), (0, l.jsx)("div", {
      className: p.progressBarContainer,
      children: (0, l.jsx)("div", {
        className: p.progressBarOuter,
        children: (0, l.jsx)("div", {
          className: p.progressBarInner,
          style: {
            width: "".concat(r, "%")
          }
        })
      })
    }), (0, l.jsxs)(s.Text, {
      variant: "text-xs/medium",
      className: p.viewerCount,
      children: ["*", g.Z.Messages.DROPS_REQUIRE_NUM_VIEWERS.format({
        numViewers: n
      }), "*"]
    })]
  })
}

function E(e) {
  let {
    onClose: t,
    tooltipAction: n,
    partnerGame: c
  } = e, E = (0, u.au)(c);
  (0, u.op)(c);
  let f = (0, i.e7)([a.default], () => a.default.getId());
  if (null == E) return null;
  let {
    streamLengthRequirement: _,
    viewerCountRequirement: I
  } = E.config, N = E.drop, {
    header: Z,
    body: S,
    imgSrc: x,
    imgStyle: T
  } = m(n, N, _), L = () => {
    o.default.track(h.rMx.DROPS_ACTIVITY_PANEL_POPOVER_CTA_CLICK, {
      user_id: f,
      drops_quest_id: N.dropsQuestId,
      game_id: N.dropsGameId,
      game_name: N.title.toLowerCase(),
      tooltip_action: n
    })
  }, v = () => {
    t()
  };
  return (0, l.jsxs)("div", {
    className: p.container,
    children: [(0, l.jsx)("img", {
      src: x,
      alt: "",
      className: T
    }), (0, l.jsx)(s.Clickable, {
      className: p.__invalid_buttonClose,
      "aria-label": g.Z.Messages.CLOSE,
      onClick: v,
      children: (0, l.jsx)(s.CloseSmallIcon, {
        size: "xs",
        color: "currentColor",
        className: p.closeIcon
      })
    }), n === d._e.LOADING_INITIAL_PROGRESS ? (0, l.jsx)(s.Spinner, {
      className: p.spinner
    }) : (0, l.jsx)(s.Heading, {
      className: p.title,
      variant: "heading-md/extrabold",
      children: Z
    }), n === d._e.TRACK_PROGRESS ? (0, l.jsx)(C, {
      streamLengthRequirement: _,
      viewerCountRequirement: I
    }) : (0, l.jsx)(s.Text, {
      variant: "text-sm/medium",
      className: p.subTitle,
      children: S
    }), n === d._e.QUEST_COMPLETION ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(s.Button, {
        color: s.Button.Colors.BRAND_INVERTED,
        fullWidth: !0,
        onClick: () => {
          t(), r.Z.open(h.oAB.INVENTORY), L()
        },
        children: g.Z.Messages.REDEEM
      }), (0, l.jsx)(s.Button, {
        className: p.linkButtonContainer,
        innerClassName: p.linkButton,
        onClick: v,
        look: s.Button.Looks.LINK,
        fullWidth: !0,
        color: s.Button.Colors.WHITE,
        children: g.Z.Messages.NOT_NOW
      })]
    }) : (0, l.jsx)(s.Button, {
      color: s.Button.Colors.BRAND_INVERTED,
      fullWidth: !0,
      onClick: () => {
        t(), r.Z.open(h.oAB.INVENTORY), L()
      },
      children: g.Z.Messages.LEARN_MORE
    }), (0, l.jsx)("div", {
      className: p.pointer
    })]
  })
}