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
  p = n(689938),
  g = n(201032);
let m = (e, t, n) => {
  let l = t.assets.tooltipSrc;
  switch (e) {
    case d._e.STREAM_CTA:
      return {
        header: p.Z.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
          gameName: t.title
        }), body: t.messages.enrollmentTooltip(n), imgSrc: l, imgStyle: g.dropImgPreStreamNotice
      };
    case d._e.TRACK_PROGRESS:
      return {
        header: p.Z.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
          gameName: t.title
        }), body: "", imgSrc: l, imgStyle: g.dropImgProgressTracker
      };
    case d._e.QUEST_COMPLETION:
      return {
        header: p.Z.Messages.DROPS_QUEST_COMPLETION_TOOLTIP_HEADER, body: t.messages.completionTooltip(n), imgSrc: l, imgStyle: g.dropImgQuestCompletion
      };
    case d._e.LOADING_INITIAL_PROGRESS:
      return {
        header: "", body: "", imgSrc: l, imgStyle: g.dropImgPreStreamNotice
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
      className: g.progressBarCount,
      children: p.Z.Messages.DROPS_STREAM_PROGRESS_INDICATOR.format({
        minutesStreamed: a,
        streamLengthRequirement: t
      })
    }), (0, l.jsx)("div", {
      className: g.progressBarContainer,
      children: (0, l.jsx)("div", {
        className: g.progressBarOuter,
        children: (0, l.jsx)("div", {
          className: g.progressBarInner,
          style: {
            width: "".concat(r, "%")
          }
        })
      })
    }), (0, l.jsxs)(s.Text, {
      variant: "text-xs/medium",
      className: g.viewerCount,
      children: ["*", p.Z.Messages.DROPS_REQUIRE_NUM_VIEWERS.format({
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
    imgStyle: L
  } = m(n, N, _), T = () => {
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
    className: g.container,
    children: [(0, l.jsx)("img", {
      src: x,
      alt: "",
      className: L
    }), (0, l.jsx)(s.Clickable, {
      className: g.__invalid_buttonClose,
      "aria-label": p.Z.Messages.CLOSE,
      onClick: v,
      children: (0, l.jsx)(s.CloseSmallIcon, {
        size: "xs",
        color: "currentColor",
        className: g.closeIcon
      })
    }), n === d._e.LOADING_INITIAL_PROGRESS ? (0, l.jsx)(s.Spinner, {
      className: g.spinner
    }) : (0, l.jsx)(s.Heading, {
      className: g.title,
      variant: "heading-md/extrabold",
      children: Z
    }), n === d._e.TRACK_PROGRESS ? (0, l.jsx)(C, {
      streamLengthRequirement: _,
      viewerCountRequirement: I
    }) : (0, l.jsx)(s.Text, {
      variant: "text-sm/medium",
      className: g.subTitle,
      children: S
    }), n === d._e.QUEST_COMPLETION ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(s.Button, {
        color: s.Button.Colors.BRAND_INVERTED,
        fullWidth: !0,
        onClick: () => {
          t(), r.Z.open(h.oAB.INVENTORY), T()
        },
        children: p.Z.Messages.REDEEM
      }), (0, l.jsx)(s.Button, {
        className: g.linkButtonContainer,
        innerClassName: g.linkButton,
        onClick: v,
        look: s.Button.Looks.LINK,
        fullWidth: !0,
        color: s.Button.Colors.WHITE,
        children: p.Z.Messages.NOT_NOW
      })]
    }) : (0, l.jsx)(s.Button, {
      color: s.Button.Colors.BRAND_INVERTED,
      fullWidth: !0,
      onClick: () => {
        t(), r.Z.open(h.oAB.INVENTORY), T()
      },
      children: p.Z.Messages.LEARN_MORE
    }), (0, l.jsx)("div", {
      className: g.pointer
    })]
  })
}