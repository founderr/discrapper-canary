"use strict";
n(47120), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(512722),
  l = n.n(a),
  u = n(481060),
  _ = n(942389),
  c = n(572004),
  d = n(63063),
  E = n(358085),
  I = n(145022),
  T = n(981631),
  h = n(689938),
  f = n(528411);

function S(e) {
  let {
    url: t
  } = e, [n, s] = r.useState(!1), a = r.useRef(void 0), l = r.useCallback(() => {
    if (!n)(0, c.JG)(t) && s(!0), a.current = setTimeout(() => s(!1), 2e3)
  }, [t, n]);
  return r.useEffect(() => () => clearTimeout(a.current), []), c.wS ? (0, i.jsxs)(u.Clickable, {
    className: o()(f.copyLink, n ? f.copied : null),
    onClick: l,
    children: [(0, i.jsx)(u.LinkIcon, {
      size: "md",
      color: "currentColor",
      className: f.copyLinkIcon
    }), n ? h.Z.Messages.BUILD_OVERRIDE_LINK_COPIED : h.Z.Messages.BUILD_OVERRIDE_LINK_COPY]
  }) : null
}

function A(e) {
  let {
    subHead: t,
    buildDetails: n,
    buttonColor: s,
    buttonClick: a,
    buttonText: l,
    disabled: _ = !1,
    submitting: c = !1
  } = e;
  return (0, i.jsxs)(r.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: f.buildInfo,
      children: [(0, i.jsx)(u.Text, {
        variant: "text-sm/medium",
        className: f.subHead,
        children: t
      }), (0, i.jsx)("div", {
        className: f.buildDetails,
        children: n
      })]
    }), (0, i.jsx)(u.Button, {
      submitting: c,
      color: s,
      onClick: a,
      className: o()(f.button, _ ? f.disabledButtonOverride : null),
      size: f.buttonSize,
      disabled: _,
      children: l
    })]
  })
}
t.Z = e => {
  var t, n, s;
  let {
    loading: a = !1,
    currentOverrides: c,
    linkMeta: N,
    url: m,
    applyBuildOverride: O,
    clearBuildOverride: R
  } = e, [p, g] = r.useState(!1), C = r.useCallback(() => {
    if (!p) g(!0), O().catch(() => g(!1))
  }, [O, p]), v = r.useCallback(() => {
    if (!p) g(!0), R().catch(() => g(!1))
  }, [R, p]);
  return (0, i.jsxs)("div", {
    className: f.wrapper,
    children: [(t = N, n = m, s = a, (0, i.jsxs)(u.Text, {
      variant: "text-xs/normal",
      className: f.titleRegion,
      children: [(0, i.jsx)("strong", {
        className: f.title,
        children: null != t && null != t.releaseChannel ? h.Z.Messages.BUILD_OVERRIDE_FOR.format({
          releaseChannel: t.releaseChannel
        }) : h.Z.Messages.BUILD_OVERRIDE
      }), (0, i.jsx)(u.Anchor, {
        className: f.infoLink,
        href: d.Z.getArticleURL(T.BhN.BUILD_OVERRIDE_EMBED),
        target: "_blank",
        children: (0, i.jsx)(u.CircleInformationIcon, {
          size: "xs",
          color: "currentColor",
          className: f.infoIcon
        })
      }), s ? null : (0, i.jsx)(S, {
        url: n
      })]
    })), (0, i.jsxs)("div", {
      className: f.content,
      children: [(0, i.jsx)(_.Z, {
        className: f.icon
      }), a ? (0, i.jsxs)(r.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: f.buildInfo,
          children: [(0, i.jsx)("div", {
            className: o()(f.barLoader, f.barTitle)
          }), (0, i.jsx)("div", {
            className: f.barLoader
          })]
        }), (0, i.jsx)("div", {
          className: f.buttonLoader
        })]
      }) : function(e) {
        var t, n;
        let i, r, s, {
            currentOverrides: o,
            linkMeta: a,
            applyBuildOverride: _,
            clearBuildOverride: c,
            submitting: d
          } = e,
          T = ["discord_web"];
        !E.isPlatformEmbedded && T.push("discord_marketing", "discord_developers");
        let f = (0, I.Z)(a, T);
        if (!f.valid) return function(e) {
          return A({
            subHead: h.Z.Messages.BUILD_OVERRIDE_ISNT_AVAILABLE,
            buttonColor: u.Button.Colors.TRANSPARENT,
            buttonText: "Invalid",
            buildDetails: e,
            disabled: !0
          })
        }(f.reason);
        l()(null != a, "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved");
        let {
          discord_web: S,
          discord_developers: N
        } = a.targetBuildOverride, m = null != S ? S : N;
        if (l()(null != m, "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web or linkMeta.targetBuildOverride.discord_developers should never be null if resolved"), t = m, null == (n = o) || null == n.discord_web ? 1 : t.id !== n.discord_web.id || t.type !== n.discord_web.type) r = h.Z.Messages.BUILD_OVERRIDE_APPLY, i = _, s = u.Button.Colors.GREEN;
        else r = h.Z.Messages.BUILD_OVERRIDE_CLEAR, i = c, s = u.Button.Colors.RED;
        return A({
          subHead: h.Z.Messages.BUILD_OVERRIDE_ID,
          buildDetails: m.id,
          buttonClick: i,
          buttonText: r,
          buttonColor: s,
          submitting: d
        })
      }({
        currentOverrides: c,
        linkMeta: N,
        applyBuildOverride: C,
        clearBuildOverride: v,
        submitting: p
      })]
    })]
  })
}