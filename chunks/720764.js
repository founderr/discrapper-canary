"use strict";
l.r(t), l.d(t, {
  default: function() {
    return _
  }
}), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("780384"),
  i = l("481060"),
  r = l("668781"),
  o = l("308063"),
  d = l("410030"),
  u = l("285952"),
  c = l("63063"),
  f = l("725875"),
  I = l("981631"),
  m = l("689938"),
  T = l("654197"),
  E = l("893916"),
  N = l("408942");

function _(e) {
  let t, {
      guild: l,
      channel: _,
      customWebhooks: S,
      editedWebhook: h,
      selectableWebhookChannels: g,
      refToScroller: p,
      errors: O,
      canNavigate: A
    } = e,
    C = (0, d.default)(),
    [x, R] = a.useState(null),
    [M, L] = a.useState(null);
  if (null != _) t = _;
  else {
    let e = Object.values(g);
    t = e.length > 0 ? e[0] : null
  }
  let v = a.useCallback(async () => {
    if (A() && null !== t) {
      let e = await o.default.create(l.id, t.id).catch(e => {
        let {
          body: t,
          status: l
        } = e;
        return t && t.code === I.AbortCodes.TOO_MANY_WEBHOOKS ? r.default.show({
          title: m.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
          body: m.default.Messages.WEBHOOK_ERROR_MAX_WEBHOOKS_REACHED
        }) : 429 === l ? r.default.show({
          title: m.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
          body: m.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK_RATE_LIMIT
        }) : r.default.show({
          title: m.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
          body: m.default.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
        }), null
      });
      null != e && (L(e.id), R(e))
    }
  }, [A, t, l]);
  a.useEffect(() => {
    0 === S.length && v()
  }, []);
  let j = null !== t;
  return (0, n.jsxs)(i.FormSection, {
    children: [(0, n.jsx)(i.FormText, {
      type: i.FormTextTypes.DESCRIPTION,
      children: m.default.Messages.INTEGRATIONS_WEBHOOKS_DESCRIPTION.format({
        helpdeskArticle: c.default.getArticleURL(I.HelpdeskArticles.WEBHOOKS),
        developersArticle: I.MarketingURLs.API_DOCS_WEBHOOKS
      })
    }), (0, n.jsx)(i.FormDivider, {
      className: T.headerDivider
    }), S.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(i.Button, {
        className: T.createButton,
        size: i.Button.Sizes.SMALL,
        disabled: !j,
        onClick: v,
        children: m.default.Messages.INTEGRATIONS_WEBHOOKS_CREATE
      }), (0, n.jsx)(f.default, {
        webhooks: S,
        editedWebhook: h,
        selectableWebhookChannels: g,
        lastCreatedWebhookId: null == x ? void 0 : x.id,
        errors: O,
        canNavigate: A
      })]
    }) : function(e, t, l) {
      let a = (0, s.isThemeDark)(e) ? E : N;
      return (0, n.jsxs)(u.default, {
        direction: u.default.Direction.VERTICAL,
        align: u.default.Align.CENTER,
        children: [(0, n.jsx)("img", {
          alt: "",
          src: a,
          className: T.emptyStateImage
        }), (0, n.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          children: m.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY
        }), (0, n.jsx)(i.Button, {
          className: T.emptyStateButton,
          disabled: !t,
          onClick: l,
          children: m.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON
        })]
      })
    }(C, j, v)]
  })
}