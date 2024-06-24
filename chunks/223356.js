n.d(t, {
  Tj: function() {
    return d
  },
  WG: function() {
    return c
  },
  ZD: function() {
    return h
  },
  pD: function() {
    return m
  }
}), n(653041);
var a = n(990547),
  s = n(544891),
  l = n(729345);
n(488832);
var i = n(210887);
n(358085);
var r = n(573261),
  o = n(981631),
  u = n(689938);
async function c() {
  return (await s.tn.get({
    url: o.ANM.BUG_REPORTS
  })).body
}

function m(e) {
  var t, n;
  return null !== (n = null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "" + (null == e ? void 0 : e.squad)) && void 0 !== n ? n : ""
}

function d() {
  return [{
    title: u.Z.Messages.BUG_REPORT_PRIORITY_CRITICAL_TITLE,
    description: u.Z.Messages.BUG_REPORT_PRIORITY_CRITICAL_DESCRIPTION.format(),
    emoji: "801497159479722084",
    value: 0
  }, {
    title: u.Z.Messages.BUG_REPORT_PRIORITY_HIGH_TITLE,
    description: u.Z.Messages.BUG_REPORT_PRIORITY_HIGH_DESCRIPTION.format(),
    emoji: "410336837563973632",
    value: 1
  }, {
    title: u.Z.Messages.BUG_REPORT_PRIORITY_LOW_TITLE,
    description: u.Z.Messages.BUG_REPORT_PRIORITY_LOW_DESCRIPTION.format(),
    emoji: "841420679643529296",
    value: 2
  }, {
    title: u.Z.Messages.BUG_REPORT_PRIORITY_VERY_LOW_TITLE,
    description: u.Z.Messages.BUG_REPORT_PRIORITY_VERY_LOW_DESCRIPTION.format(),
    emoji: "827645852352512021",
    value: 3
  }]
}
async function h(e, t, n) {
  var s, u;
  let c = [{
    name: "name",
    value: e.name
  }, {
    name: "priority",
    value: "".concat(e.priority)
  }, {
    name: "override_platform_information",
    value: "".concat(t.overridePlatformInformation)
  }, {
    name: "theme",
    value: i.Z.theme
  }];
  "" !== e.description && c.push({
    name: "description",
    value: e.description
  }), "" !== e.url && c.push({
    name: "external_url",
    value: e.url
  });
  let m = null === (s = e.feature) || void 0 === s ? void 0 : s.asana_inbox_id;
  null != m && "" !== m && c.push({
    name: "asana_inbox_id",
    value: "".concat(m)
  });
  let d = null === (u = e.feature) || void 0 === u ? void 0 : u.name;
  null != d && "" !== d && c.push({
    name: "feature_name",
    value: d
  }), t.overridePlatformInformation && (c.push({
    name: "device",
    value: t.device
  }), c.push({
    name: "os",
    value: t.operatingSystem
  }), c.push({
    name: "os_version",
    value: t.operatingSystemVersion
  }), c.push({
    name: "client_version",
    value: t.clientVersion
  }), c.push({
    name: "client_build_number",
    value: t.clientBuildNumber
  }), c.push({
    name: "release_channel",
    value: window.GLOBAL_ENV.RELEASE_CHANNEL
  }), c.push({
    name: "locale",
    value: t.locale
  })), (0, l.E)(o.GU0.WEB_APP);
  try {
    return await r.Z.post({
      url: o.ANM.BUG_REPORTS,
      attachments: n,
      fields: c,
      trackedActionData: {
        event: a.NetworkActionNames.BUG_REPORT_SUBMIT,
        properties: {
          priority: e.priority,
          asana_inbox_id: m
        }
      }
    })
  } catch (e) {
    return e
  }
}