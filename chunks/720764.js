t.d(n, {
  Z: function() {
    return h
  }
}), t(47120);
var i = t(735250),
  s = t(470079),
  l = t(780384),
  a = t(481060),
  r = t(668781),
  o = t(308063),
  c = t(410030),
  d = t(285952),
  u = t(63063),
  I = t(725875),
  N = t(981631),
  E = t(689938),
  T = t(979248),
  m = t(893916),
  _ = t(408942);

function h(e) {
  let n, {
      guild: t,
      channel: h,
      customWebhooks: O,
      editedWebhook: g,
      selectableWebhookChannels: A,
      refToScroller: C,
      errors: S,
      canNavigate: x
    } = e,
    p = (0, c.ZP)(),
    [R, Z] = s.useState(null),
    [f, M] = s.useState(null);
  if (null != h) n = h;
  else {
    let e = Object.values(A);
    n = e.length > 0 ? e[0] : null
  }
  let L = s.useCallback(async () => {
    if (x() && null !== n) {
      let e = await o.Z.create(t.id, n.id).catch(e => {
        let {
          body: n,
          status: t
        } = e;
        return n && n.code === N.evJ.TOO_MANY_WEBHOOKS ? r.Z.show({
          title: E.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
          body: E.Z.Messages.WEBHOOK_ERROR_MAX_WEBHOOKS_REACHED
        }) : 429 === t ? r.Z.show({
          title: E.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
          body: E.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK_RATE_LIMIT
        }) : r.Z.show({
          title: E.Z.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
          body: E.Z.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
        }), null
      });
      null != e && (M(e.id), Z(e))
    }
  }, [x, n, t]);
  s.useEffect(() => {
    0 === O.length && L()
  }, []);
  let v = null !== n;
  return (0, i.jsxs)(a.FormSection, {
    children: [(0, i.jsx)(a.FormText, {
      type: a.FormTextTypes.DESCRIPTION,
      children: E.Z.Messages.INTEGRATIONS_WEBHOOKS_DESCRIPTION.format({
        helpdeskArticle: u.Z.getArticleURL(N.BhN.WEBHOOKS),
        developersArticle: N.EYA.API_DOCS_WEBHOOKS
      })
    }), (0, i.jsx)(a.FormDivider, {
      className: T.headerDivider
    }), O.length > 0 ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(a.Button, {
        className: T.createButton,
        size: a.Button.Sizes.SMALL,
        disabled: !v,
        onClick: L,
        children: E.Z.Messages.INTEGRATIONS_WEBHOOKS_CREATE
      }), (0, i.jsx)(I.Z, {
        webhooks: O,
        editedWebhook: g,
        selectableWebhookChannels: A,
        lastCreatedWebhookId: null == R ? void 0 : R.id,
        errors: S,
        canNavigate: x
      })]
    }) : function(e, n, t) {
      let s = (0, l.wj)(e) ? m : _;
      return (0, i.jsxs)(d.Z, {
        direction: d.Z.Direction.VERTICAL,
        align: d.Z.Align.CENTER,
        children: [(0, i.jsx)("img", {
          alt: "",
          src: s,
          className: T.emptyStateImage
        }), (0, i.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          children: E.Z.Messages.INTEGRATIONS_WEBHOOKS_EMPTY
        }), (0, i.jsx)(a.Button, {
          className: T.emptyStateButton,
          disabled: !n,
          onClick: t,
          children: E.Z.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON
        })]
      })
    }(p, v, L)]
  })
}