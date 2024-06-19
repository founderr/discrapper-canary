n.d(t, {
  Tj: function() {
    return m
  },
  WG: function() {
    return u
  },
  ZD: function() {
    return d
  },
  pD: function() {
    return c
  }
}), n(653041);
var a = n(990547),
  s = n(544891),
  l = n(729345);
n(488832), n(358085);
var i = n(573261),
  r = n(981631),
  o = n(689938);
async function u() {
  return (await s.tn.get({
    url: r.ANM.BUG_REPORTS
  })).body
}

function c(e) {
  var t, n;
  return null !== (n = null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "" + (null == e ? void 0 : e.squad)) && void 0 !== n ? n : ""
}

function m() {
  return [{
    title: o.Z.Messages.BUG_REPORT_PRIORITY_CRITICAL_TITLE,
    description: o.Z.Messages.BUG_REPORT_PRIORITY_CRITICAL_DESCRIPTION.format(),
    emoji: "801497159479722084",
    value: 0
  }, {
    title: o.Z.Messages.BUG_REPORT_PRIORITY_HIGH_TITLE,
    description: o.Z.Messages.BUG_REPORT_PRIORITY_HIGH_DESCRIPTION.format(),
    emoji: "410336837563973632",
    value: 1
  }, {
    title: o.Z.Messages.BUG_REPORT_PRIORITY_LOW_TITLE,
    description: o.Z.Messages.BUG_REPORT_PRIORITY_LOW_DESCRIPTION.format(),
    emoji: "841420679643529296",
    value: 2
  }, {
    title: o.Z.Messages.BUG_REPORT_PRIORITY_VERY_LOW_TITLE,
    description: o.Z.Messages.BUG_REPORT_PRIORITY_VERY_LOW_DESCRIPTION.format(),
    emoji: "827645852352512021",
    value: 3
  }]
}
async function d(e, t, n) {
  var s, o;
  let u = [{
    name: "name",
    value: e.name
  }, {
    name: "priority",
    value: "".concat(e.priority)
  }, {
    name: "override_platform_information",
    value: "".concat(t.overridePlatformInformation)
  }];
  "" !== e.description && u.push({
    name: "description",
    value: e.description
  }), "" !== e.url && u.push({
    name: "external_url",
    value: e.url
  });
  let c = null === (s = e.feature) || void 0 === s ? void 0 : s.asana_inbox_id;
  null != c && "" !== c && u.push({
    name: "asana_inbox_id",
    value: "".concat(c)
  });
  let m = null === (o = e.feature) || void 0 === o ? void 0 : o.name;
  null != m && "" !== m && u.push({
    name: "feature_name",
    value: m
  }), t.overridePlatformInformation && (u.push({
    name: "device",
    value: t.device
  }), u.push({
    name: "os",
    value: t.operatingSystem
  }), u.push({
    name: "os_version",
    value: t.operatingSystemVersion
  }), u.push({
    name: "client_version",
    value: t.clientVersion
  }), u.push({
    name: "client_build_number",
    value: t.clientBuildNumber
  }), u.push({
    name: "release_channel",
    value: window.GLOBAL_ENV.RELEASE_CHANNEL
  }), u.push({
    name: "locale",
    value: t.locale
  })), (0, l.E)(r.GU0.WEB_APP);
  try {
    return await i.Z.post({
      url: r.ANM.BUG_REPORTS,
      attachments: n,
      fields: u,
      trackedActionData: {
        event: a.NetworkActionNames.BUG_REPORT_SUBMIT,
        properties: {
          priority: e.priority,
          asana_inbox_id: c
        }
      }
    })
  } catch (e) {
    return e
  }
}